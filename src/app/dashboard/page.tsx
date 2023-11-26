import React from 'react';

import Card from '../ui/dashboardPanel/dashboard/card/card';
import Chart from '../ui/dashboardPanel/dashboard/chart/chart';
import Rightbar from '../ui/dashboardPanel/dashboard/rightbar/rightbar';
import Transactions from '../ui/dashboardPanel/dashboard/transactions/transactions';

import styles from '../ui/dashboardPanel/dashboard/dashboard.module.css';

const Dashboard = () => {
    const VARIABLE = 20;

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card percent={23} />
                    <Card percent={19} isPositive={false} />
                    <Card percent={98} />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
};

export default Dashboard;
