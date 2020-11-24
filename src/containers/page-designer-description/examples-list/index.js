import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListExamplesWork from '@components/list-examples-work';
import styles from './styles.module.scss';

const ExamplesList = ({ designerName, examplesListTitle }) => (
  <section className={styles.wrapper}>
    <p className={styles.title}>{examplesListTitle}</p>
    <ListExamplesWork designerName={designerName} />
  </section>
);

ExamplesList.propTypes = {
  designerName: PropTypes.string.isRequired,
  examplesListTitle: PropTypes.string,
};

ExamplesList.defaultProps = {
  examplesListTitle: "Designer's listings",
};

export default memo(ExamplesList);
