import React from 'react';
import './Homepage.styles.scss';
import Directory from "../../components/directory/Directory";

const Homepage = () => (
    <div className={'homepage'}>
        <div className={'directoryMenu'}>
            <Directory/>
        </div>
    </div>
)

export default Homepage;