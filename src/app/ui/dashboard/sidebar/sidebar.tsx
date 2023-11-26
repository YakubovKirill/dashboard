import React from 'react';
import { MdLogout } from 'react-icons/md';
import Image from 'next/image';

import MenuLink from './menuLink/menuLink';
import { menuItems } from '../../../data';

import styles from './sidebar.module.css';

export const Sidebar = () => {
    const AAA = 20;

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={'/noavatar.png'}
                    alt='User'
                    width={50}
                    height={50}
                />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span className={styles.category}>{item.title}</span>
                        {item.list.map((subMenuElement) => (
                            <MenuLink key={subMenuElement.path} element={subMenuElement} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    );
};
