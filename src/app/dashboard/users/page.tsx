import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/app/ui/common/pagination/pagination';
import Search from '@/app/ui/common/search/search';
import styles from '@/app/ui/dashboardPanel/users/users.module.css';

const UsersPage = () => {
    const aaa = 23;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={'Search for a user...'} />
                <Link href='dashboard/users/add'>
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src='/noavatar.png'
                                    alt=''
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                <span>John Doe</span>
                            </div>
                        </td>
                        <td>
                            <span>john@gmail.com</span>
                        </td>
                        <td>
                            <span>13.11.2023</span>
                        </td>
                        <td>
                            <span>Admin</span>
                        </td>
                        <td>
                            <span>Active</span>
                        </td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href='/'>
                                    <button className={cx(styles.button, styles.view)}>View</button>
                                </Link>
                                <button className={cx(styles.button, styles.delete)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default UsersPage;
