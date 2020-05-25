import cx from 'classnames';
import * as React from 'react';
import { FieldContext } from './field-context';

export function HelpText({
  className,
  ...props
}: JSX.IntrinsicElements['span']) {
  const { inputId } = React.useContext(FieldContext);

  return (
    <span
      id={`${inputId}-help`}
      className={cx('text-sm pl-2', className)}
      {...props}
    />
  );
}
