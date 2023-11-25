import React from 'react';

import { Navbar } from '../ui/dashboard/navbar/navbar';
import { Sidebar } from '../ui/dashboard/sidebar/sidebar';

import styles from '../ui/dashboard/dashboard.module.css';

type DashboardLayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: DashboardLayoutProps) => {
    const AA = 12;

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
