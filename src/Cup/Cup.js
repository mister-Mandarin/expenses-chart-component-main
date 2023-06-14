import React from 'react';
import styles from './Cup.module.css'

const Cup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.balance}>
                <span>My balance</span>
                <p>$921.48</p>
            </div>
            <div className={styles.img}>
                <svg width="61" height="42" viewBox="0 0 61 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="41" cy="21" r="20" fill="#382314"/>
                    <circle cx="21" cy="21" r="20" stroke="white" strokeWidth="2"/>
                </svg>

            </div>
        </div>
    );
};

export default Cup;