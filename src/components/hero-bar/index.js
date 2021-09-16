import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Filters from '@components/filters';

const HeroBar = ({ className, filter, setFilter, setSortBy }) => {
  const classes = classnames(styles.wrapper, className);
  return (
    <div className={classes}>
      <img src="/images/metaverse/viewallskinsbg.png" className={styles.back} />
      {setFilter ? <div className={styles.filter}>
        <Filters filter={filter} filterChange={setFilter} sortByChange={setSortBy} />
      </div> : null}
    </div>
  );
};

export default HeroBar;
