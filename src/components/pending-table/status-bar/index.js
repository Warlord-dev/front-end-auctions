import React from 'react';
import classnames from 'classnames';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import styles from './styles.module.scss';

const StatusBar = ({ status, mode }) => {
  const steps = [
    {
      id: 1,
      label: 'initiated',
    },
    {
      id: 2,
      label: 'processing',
    },
    {
      id: 3,
      label: 'pending',
    },
    {
      id: 4,
      label: 'success',
    },
  ];
  return (
    <div className={styles.wrapper}>
      <ProgressBar
        filledBackground={mode === 1 ? '#EA882D' : '#4F2DEA'}
        unfilledBackground={'#111111'}
        percent={((status - 1) / 3) * 100}
        className={styles.progressBar}
      >
        {steps.map((step) => (
          <Step key={step.id}>
            {({ accomplished, index }) => (
              <div
                className={classnames(
                  styles.step,
                  styles[index < status ? 'enable' : 'disable'],
                  styles[`mode-${mode}`],
                )}
              >
                <div className={styles.stepLabel}> {step.label} </div>
              </div>
            )}
          </Step>
        ))}
      </ProgressBar>
    </div>
  );
};

export default StatusBar;
