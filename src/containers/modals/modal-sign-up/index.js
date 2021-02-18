import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "@components/buttons/button";
import Modal from "@components/modal";

import { closeSignupModal } from "@actions/modals.actions";
import userActions from "@actions/user.actions";

import { getAccount } from "@selectors/user.selectors";

import styles from "./styles.module.scss";

const ModalSignUp = ({ className, title, textForIcon, icon, buttonText }) => {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);

  const handleClose = () => {
    dispatch(closeSignupModal());
  };

  const handleClick = () => dispatch(userActions.tryToSignup());

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          className={(className, styles.modalWrapper)}
        >
          <span>{`CURRENT ETH ADDRESS: ${
            account ? account : "WALLET NOT CONNECTED"
          }`}</span>
          <div className={styles.inputItem}>
            <label>USER ID</label>
            <input />
          </div>
          <div className={styles.inputItem}>
            <label>EMAIL</label>
            <input />
          </div>
          <Button
            className={styles.modalButton}
            background="black"
            onClick={() => handleClick()}
          >
            {buttonText}
          </Button>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalSignUp.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textForIcon: PropTypes.string,
  icon: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalSignUp.defaultProps = {
  className: "",
  title: "CREATE AN ACCOUNT",
  textForIcon: "Metamask",
  icon: "./images/icons/metamask.svg",
  buttonText: "SIGN UP",
};

export default ModalSignUp;
