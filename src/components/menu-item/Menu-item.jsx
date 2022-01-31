import React from "react";
import './Menu-item.styles.scss';

export function MenuItem({title, imageUrl, size}) {
  return (
    <div className={`${size} menuItem`} style={{backgroundImage: `url(${imageUrl}`}}>
      <div className={'content'}>
        <h1 className={'title'}>{title}</h1>
        <span className={'subtitle'}>SHOP NOW</span>
      </div>
    </div>
  )
}