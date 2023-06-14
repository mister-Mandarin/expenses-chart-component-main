import React from 'react';
import styles from './Total.module.css'

export default function Total() {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <span>Total this month</span>
                <h2>$478.33</h2>
            </div>
            <div className={styles.right}>
                <h3>+2.4%</h3>
                <span>from Last month</span>
            </div>
        </section>
    );
};