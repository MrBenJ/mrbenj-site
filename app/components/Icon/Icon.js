// @flow
import React from 'react';
import classNames from 'classnames';

export type IconProps = {
  name: string,
  className?: ?string
};

export default function Icon(props: IconProps) {
  const { name, className } = props;
  return (
    <i
      {...props}
      className={
        classNames('fa', name, className)}
    />
  );
}
