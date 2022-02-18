import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'


export function Header() {
  return (
    <div className={'header'}>
      <Link to={'/'} className={'logo-container'}>
        <Logo className={'logo'}/>
      </Link>
      <div className={'options'}>
        <Link className={'option'} to={'/shop'}>
          SHOP
        </Link>
        <Link className={'option'} to={'/shop'}>
          CONTACT
        </Link>
      </div>
    </div>
  )
}