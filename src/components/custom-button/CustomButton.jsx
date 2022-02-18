import React from "react";
import './CustomButton.styles.scss';

export function CustomButton({children, ...otherProps}) {
  return (
    <button className={'custom-button'} {...otherProps}>
      {children}
    </button>
  )
}
