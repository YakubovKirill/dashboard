import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/app/ui/common/pagination/pagination';
import Search from '@/app/ui/common/search/search';
import styles from '@/app/ui/dashboardPanel/products/products.module.css';

const Products = () => {
    const aaa = 23;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={'Search for a product...'} />
                <Link href='dashboard/products/add'>
                    <button className={styles.addButton}>Add new product</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    src='/noproduct.jpg'
                                    alt=''
                                    width={40}
                                    height={40}
                                    className={styles.productImage}
                                />
                                <span>IPhone</span>
                            </div>
                        </td>
                        <td>
                            <span>Description</span>
                        </td>
                        <td>
                            <span>$999</span>
                        </td>
                        <td>
                            <span>13.11.2023</span>
                        </td>
                        <td>
                            <span>72</span>
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

export default Products;
