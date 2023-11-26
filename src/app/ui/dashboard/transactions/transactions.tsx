import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

import { TRANSACTIONS } from '@/app/data';

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
                    {TRANSACTIONS.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={transaction.user.icon}
                                        alt='Avatar'
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {transaction.user.name}
                                </div>
                            </td>
                            <td>
                                <span
                                    className={cx(
                                        styles.status,
                                        styles[`status__${transaction.status.toLowerCase()}`]
                                    )}>
                                    {transaction.status}
                                </span>
                            </td>
                            <td>
                                {transaction.date}
                            </td>
                            <td>
                                <span>${transaction.amount}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
