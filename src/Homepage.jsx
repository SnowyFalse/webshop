import React from 'react';
import './Homepage.styles.scss';

const Homepage = () => (
  <div className={'homepage'}>
    <div className={'directoryMenu'}>
        <div className={'menuItem'}>
            <div className={'content'}>
                <h1 className={'title'}>HAT</h1>
                <span className={'subtitle'}> SHOP NOW</span>
            </div>
        </div>
        <div className={'menuItem'}>
            <div className={'content'}>
                <h1 className={'title'}>JACKETS</h1>
                <span className={'subtitle'}> SHOP NOW</span>
            </div>
        </div>
        <div className={'menuItem'}>
            <div className={'content'}>
                <h1 className={'title'}>SNEAKERS</h1>
                <span className={'subtitle'}> SHOP NOW</span>
            </div>
        </div>
        <div className={'menuItem'}>
            <div className={'content'}>
                <h1 className={'title'}>WOMENS</h1>
                <span className={'subtitle'}> SHOP NOW</span>
            </div>
        </div>
        <div className={'menuItem'}>
            <div className={'content'}>
                <h1 className={'title'}>MENS</h1>
                <span className={'subtitle'}> SHOP NOW</span>
            </div>
        </div>
    </div>
  </div>
)

export default Homepage;