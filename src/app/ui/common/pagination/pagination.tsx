import React from 'react';

import styles from './pagination.module.css';

const Pagination = () => {
    const a = 34;

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled>Previous</button>
            <button className={styles.button}>Next</button>
        </div>
    );
};

export default Pagination;
