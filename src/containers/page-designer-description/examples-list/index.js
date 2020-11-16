import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListExamplesWork from '@components/list-examples-work';
import styles from './styles.module.scss';

const ExamplesList = ({ designerId, examplesListTitle }) => (
  <section className={styles.wrapper}>
    <p className={styles.title}>{examplesListTitle}</p>
    <ListExamplesWork designerId={designerId} />
  </section>
);

ExamplesList.propTypes = {
  designerId: PropTypes.string.isRequired,
  examplesListTitle: PropTypes.string,
};

ExamplesList.defaultProps = {
  examplesListTitle: 'Designers listings',
};

export default memo(ExamplesList);
