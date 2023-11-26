import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

import styles from './card.module.css';

type CardPropsType = {
    percent?: number;
    isPositive?: boolean;
}

const Card = ({ isPositive = true, percent = 0 }: CardPropsType) => {
    const percentStyle = isPositive ? styles.positive : styles.negative;

    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Title</span>
                <span className={styles.number}>10.234</span>
                <span className={styles.detail}>
                    <span className={percentStyle}>{percent}%</span> more than others
                </span>
            </div>
        </div>
    );
};

export default Card;
