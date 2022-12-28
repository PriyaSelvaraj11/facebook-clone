import React, { FC, useState } from 'react';
import styles from '../../assets/css/Input.module.scss';

interface InputBoxProps {
    placeholder: string;
    type?: string,
    modelValue: string | number;
    errorText?: string;
    name: string,
    onChange: (e: any, name: string) => void;
    size?: 'big' | 'small'
}

const InputBox: FC<InputBoxProps> = ({ placeholder, type, modelValue, errorText, name, onChange, size = 'small' }) => {
    return (<React.Fragment>
        <input
            className={styles[size + 'Input']}
            id={name}
            type={type}
            placeholder={placeholder}
            value={modelValue}
            onChange={(e) => onChange(e, name)} />
        {!!errorText && <span className={styles.error}>{errorText}</span>}
    </React.Fragment>
    )
};

export default InputBox;
