import React from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './search.module.css';

type SearchPropsType = {
    placeholder?: string;
}

const Search = ({ placeholder = 'Search...' }: SearchPropsType) => {
    const a = 34;

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type='text' placeholder={placeholder} className={styles.input} />
        </div>
    );
};

export default Search;
