import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import NextLink from 'next/link';
import styles from './styles.module.scss';

const Link = ({
  className, background, href, children,
}) => (
  <NextLink href={href}>
    <a
      className={cn(
        styles.button,
        {
          [styles.transparent]: background === 'transparent',
          [styles.black]: background === 'black',
        },
        className,
      )}
    >
      {children}
    </a>
  </NextLink>
);

Link.propTypes = {
  className: PropTypes.string,
  background: PropTypes.oneOf(['transparent', 'black']),
  href: PropTypes.string,
  children: PropTypes.any,
};

Link.defaultProps = {
  className: '',
  background: 'transparent',
  href: '',
  children: null,
};

export default memo(Link);
