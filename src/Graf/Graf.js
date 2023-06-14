import React from 'react';
import styles from './Graf.module.css';
import Column from "./components/column/Column";
import Total from "./components/Total/Total";

const Graf = () => {
    return (
        <div className={styles.container}>
            <p>Spending - Last 7 days</p>
            <Column/>
            <Total/>
        </div>
    );
};

export default Graf;