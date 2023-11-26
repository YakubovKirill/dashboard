'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ListItemType } from '../../../../data';

import styles from './menuLink.module.css';

type MenuLinkPropsType = {
    element: ListItemType
}

const MenuLink = ({ element }: MenuLinkPropsType) => {
    const pathName = usePathname();
    const linkStyle = [
        styles.container,
        pathName === element.path && styles.active,
    ].join(' ');

    return (
        <Link href={element.path} className={linkStyle}>
            <div>{element.icon}</div>
            <div>{element.title}</div>
        </Link>
    );
};

export default MenuLink;
