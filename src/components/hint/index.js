import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Hint({ title, hintText }) {
  const [hintTextShown, setHintTextShown] = useState(false);
  return (
    <div className={styles.hintWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.hintArea}>
        <img
          src="images/question.svg"
          onMouseEnter={() => setHintTextShown(true)}
          onMouseLeave={() => setHintTextShown(false)}
        />
        <div className={styles.hintText} style={{ opacity: hintTextShown ? 1 : 0 }}>
          {hintText}
        </div>
      </div>
    </div>
  );
}

Hint.propTypes = {
  title: PropTypes.string,
  hintText: PropTypes.string,
};
