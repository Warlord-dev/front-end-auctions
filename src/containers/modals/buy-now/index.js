import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { utils as ethersUtils } from 'ethers';
import { getMonaPerEth, getChainId } from '@selectors/global.selectors';
import PropTypes from 'prop-types';
import Button from '@components/buttons/button';
import Modal from '@components/modal';
import { closeBuynowModal, openESPAReadyModal } from '@actions/modals.actions';
import bidActions from '@actions/bid.actions';
import { getModalParams } from '@selectors/modal.selectors';
import styles from './styles.module.scss';

const BuyNow = ({ className, title, buttonText1, buttonText2 }) => {
  const dispatch = useDispatch();
  const requests = useRef([]);
  const monaPerEth = useSelector(getMonaPerEth);

  const { id, priceEth } = useSelector(getModalParams);
  const chainId = useSelector(getChainId);
  const isMatic = chainId === '0x13881' || chainId === '0x89';

  const [isDisabled, setIsDisabled] = useState(false);
  const [showError, setShowError] = useState(null);
  const [approved, setApproved] = useState(false);

  const handleClose = () => {
    dispatch(closeBuynowModal());
    dispatch(openESPAReadyModal());
  };

  const handleClick = (mode) => {
    setShowError(null);
    setIsDisabled(true);
    dispatch(bidActions.buyNow(id, priceEth, mode === 0)).then((request) => {
      requests.current.push(request);
      request.promise
        .then(() => {
          if (mode === 0 && approved === false) {
            setApproved(true);
            setIsDisabled(false);
          } else {
            handleClose();
          }
        })
        .catch((e) => {
          setShowError(e.message);
          setIsDisabled(false);
        });
    });
  };

  useEffect(() => {
    async function getMonaApproval() {
      dispatch(bidActions.getApprovedInMona()).then((val) => {
        setApproved(val);
      });
    }

    getMonaApproval();

    return () => {
      requests.current.forEach((request) => request.unsubscribe());
      requests.current = [];
    };
  }, []);

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          titleStyle={styles.textCenter}
          className={className}
        >
          <div className={styles.footer}>
            <p className={styles.footerCaption}>
              <span>
                Need to top up on $MONA? Get it <a>here.</a>
              </span>
            </p>
            <div className={styles.selectWrapper}>
              <span>
                {Math.round(
                  (parseFloat(ethersUtils.formatEther(priceEth)) / parseFloat(monaPerEth)) * 10000
                ) / 10000}{' '}
                $MONA
              </span>
              <Button
                isDisabled={isDisabled || !isMatic}
                background="black"
                onClick={() => handleClick(0)}
                className={styles.button}
              >
                {approved ? buttonText1 : 'APPROVE $MONA'}
              </Button>
            </div>
            {showError && <p className={styles.error}>{showError}</p>}
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

BuyNow.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

BuyNow.defaultProps = {
  className: '',
  title: 'BUY NOW',
  buttonText1: 'USE $MONA',
  buttonText2: 'USE ETH',
};

export default BuyNow;
