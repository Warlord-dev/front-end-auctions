import React, { useState } from 'react';
import styles from './styles.module.scss';

const Dropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        <div className={styles.value}>{value}</div>
        <img src="/images/metaverse/down-arrow (1) 1.png" />
      </div>
      {open && (
        <div className={styles.menu}>
          {options?.map((option, index) => (
            <div
              className={styles.item}
              key={index}
              onClick={() => {
                setOpen(!open);
                onChange(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
