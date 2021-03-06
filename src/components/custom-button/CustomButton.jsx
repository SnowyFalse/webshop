import React from "react";
import './CustomButton.styles.scss';

export function CustomButton({children, isGoogleSignIn, ...otherProps}) {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}
