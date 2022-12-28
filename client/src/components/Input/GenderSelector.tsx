import React, { FC, useState } from 'react';
import styles from '../../assets/css/Input.module.scss';

import AllowedDateRange from '../../constants/date';

interface InputBoxProps {
    modelValue: string;
    errorText?: string;
    name: string,
    onChange: (e: any, name: string) => void;
    size?: 'big' | 'small'
}

const InputBox: FC<InputBoxProps> = ({ modelValue, errorText, name, onChange }) => {
    return (<div className="flex flex-row space-x-2" onChange={(e) => onChange(e, name)}>
        <label className={`${styles.smallInput} label`} >
            <span className="label-text">Female</span>
            <input type="radio" name="opt" className="radio radio-xs" value="female" />
        </label>
        <label className={`${styles.smallInput} label`} >
            <span className="label-text">Male</span>
            <input type="radio" name="opt" className="radio radio-xs" value="male" />
        </label>
        <label className={`${styles.smallInput} label`} >
            <span className="label-text">Custom</span>
            <input type="radio" name="opt" className="radio radio-xs" value="" />
        </label>
    </div>
    )
};

export default InputBox;
