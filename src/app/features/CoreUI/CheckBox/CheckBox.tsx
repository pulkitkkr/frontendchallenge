import React, { FC, forwardRef, Ref } from 'react';
import Cn from 'classnames';

import styles from './CheckBox.module.scss';

interface Props {
  /**
   * Id value type
   */

  id?: string;

  /**
   * ClassName value type
   */
  className?: string;

  /**
   * checked value type
   */
  checked?: boolean;

  /**
   * disabled value type
   */
  disabled?: boolean;

  /**
   * tabIndex value type
   */
  tabIndex?: number;

  /**
   * Register callback for click event
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;
}

const CheckBox: FC<Props> = forwardRef((props, ref) => {
  const { onClick, className, id, disabled, ...otherProps } = props;

  const wrappedOnClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!disabled && onClick) onClick(event);
  };

  return (
    <div className={Cn(styles.wrapper, styles.nativeWrapper, className)}>
      <input
        id={id}
        type='checkbox'
        className={styles.checkbox}
        ref={ref}
        onClick={wrappedOnClick}
        disabled={disabled}
        {...otherProps}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id} className={styles.label} />
    </div>
  );
});

export default CheckBox;
