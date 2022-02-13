import React from 'react';
import './Homepage.styles.scss';
import Directory from "../../components/directory/Directory";

export function Homepage() {
  return (
    <div className={'homepage'}>
      <div className={'directoryMenu'}>
        <Directory/>
      </div>
    </div>
  )
}
