import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard,
    MdHelpCenter,
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle,
    MdWork,
} from 'react-icons/md';

export type ListItemType = {
    title: string;
    path: string;
    icon: JSX.Element;
}

export type MenuItemType = {
    title: string;
    list: ListItemType[];
}

export type MenuItemsType = MenuItemType[]

export const menuItems: MenuItemsType = [
    {
        title: 'Pages',
        list:  [
            {
                title: 'Dashboard',
                path:  '/dashboard',
                icon:  <MdDashboard />,
            },
            {
                title: 'Users',
                path:  '/dashboard/users',
                icon:  <MdSupervisedUserCircle />,
            },
            {
                title: 'Products',
                path:  '/dashboard/products',
                icon:  <MdShoppingBag />,
            },
            {
                title: 'Transactions',
                path:  '/dashboard/transactions',
                icon:  <MdAttachMoney />,
            },
        ],
    },
    {
        title: 'Analytics',
        list:  [
            {
                title: 'Revenue',
                path:  '/dashboard/revenue',
                icon:  <MdWork />,
            },
            {
                title: 'Reports',
                path:  '/dashboard/reports',
                icon:  <MdAnalytics />,
            },
            {
                title: 'Teams',
                path:  '/dashboard/teams',
                icon:  <MdPeople />,
            },
        ],
    },
    {
        title: 'User',
        list:  [
            {
                title: 'Settings',
                path:  '/dashboard/settings',
                icon:  <MdOutlineSettings />,
            },
            {
                title: 'Help',
                path:  '/dashboard/help',
                icon:  <MdHelpCenter />,
            },
        ],
    },
];

export enum TransactionStatus {
    Done = 'Done',
    Pending = 'Pending',
    Cancelled = 'Cancelled',
}

export type UserType = {
    icon: string;
    name: string;
}

export type TransactionType = {
    id: string;
    date: string;
    status: TransactionStatus;
    amount: string;
    user: UserType;
}

export const TRANSACTIONS: TransactionType[] = [
    {
        id:     '1',
        date:   '12.11.2023',
        status: TransactionStatus.Cancelled,
        amount: '5600',
        user:   {
            icon: '/noavatar.png',
            name: 'John Doe',
        },
    },
    {
        id:     '2',
        date:   '12.11.2023',
        status: TransactionStatus.Done,
        amount: '4300',
        user:   {
            icon: '/noavatar.png',
            name: 'Frank Martin',
        },
    },
    {
        id:     '3',
        date:   '12.11.2023',
        status: TransactionStatus.Pending,
        amount: '12700',
        user:   {
            icon: '/noavatar.png',
            name: 'Saint Pork',
        },
    },
    {
        id:     '4',
        date:   '12.11.2023',
        status: TransactionStatus.Done,
        amount: '700',
        user:   {
            icon: '/noavatar.png',
            name: 'Emma Clark',
        },
    },
    {
        id:     '5',
        date:   '12.11.2023',
        status: TransactionStatus.Done,
        amount: '7500',
        user:   {
            icon: '/noavatar.png',
            name: 'Tiny Parker',
        },
    },
];

export const CHART_DATA = [
    {
        'name': 'Page A',
        'uv':   4000,
        'pv':   2400,
        'amt':  2400,
    },
    {
        'name': 'Page B',
        'uv':   3000,
        'pv':   1398,
        'amt':  2210,
    },
    {
        'name': 'Page C',
        'uv':   2000,
        'pv':   9800,
        'amt':  2290,
    },
    {
        'name': 'Page D',
        'uv':   2780,
        'pv':   3908,
        'amt':  2000,
    },
    {
        'name': 'Page E',
        'uv':   1890,
        'pv':   4800,
        'amt':  2181,
    },
    {
        'name': 'Page F',
        'uv':   2390,
        'pv':   3800,
        'amt':  2500,
    },
    {
        'name': 'Page G',
        'uv':   3490,
        'pv':   4300,
        'amt':  2100,
    },
];
