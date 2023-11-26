import React from 'react';

import { Navbar } from '../ui/dashboardPanel/dashboard/navbar/navbar';
import { Sidebar } from '../ui/dashboardPanel/dashboard/sidebar/sidebar';

import styles from '../ui/dashboardPanel/dashboard/dashboard.module.css';

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
