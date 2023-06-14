import React, {useState} from 'react';
import styles from './Column.module.css';
import {useLayoutData} from "../../../Context/Data.context";
import cn from 'classnames'

const Column = ({heightPercent = 100}) => {

    // нужна деструктуризация!!!!
    // иначе возвращается объект с массивом объектов
    const {stateData} = useLayoutData();

    const [isHover, setIsHover] = useState(null)

    const [isActive, setIsActive] = useState(null)

    //
    // onClick={activePrice(index)} onMouseEnter={hoverPrice(index)}
    return (
        <div className={styles.container}>
            {stateData.map((column, index) => (
                <div key={index} className={styles.element}>
                    <div
                        onClick={() => setIsActive(index)}
                        onMouseEnter={() => setIsHover(index)}
                        onMouseLeave={() => setIsHover(null)}
                        style={{height: `${column.ratio}%`}}
                        className={cn(styles.column, {
                            [styles.columnActive]: index === isActive
                        })}>
                        {index === isHover || index === isActive ?
                            <span className={styles.price}>${column.amount}</span> : ""}
                        <p className={styles.day}>{column.day}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Column;