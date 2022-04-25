import React from 'react';
import { SegmentedControl, Checkbox } from '@mantine/core';
import styles from '@styles/Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <h1>Langle</h1>
            <div className={styles.controls}>
                <Checkbox
                    className={styles.checkbox}
                    label="Dark"
                />
                <SegmentedControl
                    data={[
                        { label: 'Spanish', value: 'spanish' },
                        { label: 'French', value: 'french' },
                    ]}
                />
            </div>
        </div>
    );
};

export default Navigation;