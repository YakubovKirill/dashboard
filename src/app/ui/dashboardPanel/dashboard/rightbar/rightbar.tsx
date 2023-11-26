import React from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';
import Image from 'next/image';

import styles from './rightbar.module.css';

const Rightbar = () => (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.bgContainer}>
                <Image src='/astronaut.png' alt='' fill className={styles.bg} />
            </div>
            <div className={styles.texts}>
                <div className={styles.notification}>
                        Available Now
                </div>
                <h3 className={styles.title}>How to use the new version of the admin dashboard ?</h3>
                <span className={styles.subtitle}>Takes 4 nimutes to learn</span>
                <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad, vel voluptates? Harum expedita animi soluta provident! Ratione nostrum delectus
                        vero dolorem ed adipisci alias vitae nesciunt beatae deleniti! Cum, adipisci?
                </p>
                <button className={styles.button}>
                    <MdPlayCircleFilled />
                        Watch
                </button>
            </div>
        </div>
    </div>
);

export default Rightbar;
