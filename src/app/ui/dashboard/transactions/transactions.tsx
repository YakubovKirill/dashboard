import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

import styles from './transactions.module.css';

const Transactions = () => {
    const a = 12;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={'/noavatar.png'}
                                    alt='Avatar'
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={cx(styles.status, styles['status__pending'])}>
                                Pending
                            </span>
                        </td>
                        <td>
                            12.11.2023
                        </td>
                        <td>
                            $5600
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={'/noavatar.png'}
                                    alt='Avatar'
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Frank Martin
                            </div>
                        </td>
                        <td>
                            <span className={cx(styles.status, styles['status__cancelled'])}>
                                Cancelled
                            </span>
                        </td>
                        <td>
                            12.11.2023
                        </td>
                        <td>
                            $5600
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={'/noavatar.png'}
                                    alt='Avatar'
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Saint Pork
                            </div>
                        </td>
                        <td>
                            <span className={cx(styles.status, styles['status__done'])}>
                                Done
                            </span>
                        </td>
                        <td>
                            12.11.2023
                        </td>
                        <td>
                            $5600
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
