import React, { FC, useState } from 'react';
import styles from '../../assets/css/Input.module.scss';

import AllowedDateRange from '../../constants/date';

interface InputBoxProps {
    modelValue: {
        date: string,
        month: string,
        year: string
    };
    errorText?: string;
    fieldName: string,
    onChangeDob?: (e: any, fieldName: string, type: string) => void;
    size?: 'big' | 'small'
}

const InputBox: FC<InputBoxProps> = ({ modelValue, errorText, fieldName, onChangeDob = () => { } }) => {
    return (<div className="flex flex-row space-x-2">
        <select className={styles.smallInput} id="grid-state"
            value={modelValue?.date}
            onChange={(e) => onChangeDob(e, fieldName, 'date')}
        >
            {AllowedDateRange.days.map(dayOption => <option>{dayOption}</option>)}
        </select>
        <select className={styles.smallInput} id="grid-state"
            value={modelValue?.month}
            onChange={(e) => onChangeDob(e, fieldName, 'month')}
        >
            {AllowedDateRange.months.map(monthOption => <option>{monthOption}</option>)}
        </select>
        <select className={styles.smallInput} id="grid-state"
            value={modelValue?.year}
            onChange={(e) => onChangeDob(e, fieldName, 'year')}
        >
            {AllowedDateRange.years.map(yearOption => <option>{yearOption}</option>)}
        </select>
    </div>
    )
};

export default InputBox;
