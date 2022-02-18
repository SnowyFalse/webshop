import React from "react";
import './FormInput.styles.scss';

export function FormInput({handleChange, label, ...otherProps}) {
  const shrinkStyle = `${otherProps.value.length} ? 'shrink : ''`;
  const renderLabel = label ? <label className={shrinkStyle + ' form-input-label'}>{label}</label>: null;
  return (
    <div className={'group'}>
      <input className={'form-input'} onChange={handleChange} {...otherProps}/>
      {renderLabel}
    </div>
  )
}