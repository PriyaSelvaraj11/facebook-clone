import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/Login.module.scss';

import { LOGIN_MUTATION } from '../../mutations/Auth';

import { useMutation } from "@apollo/client";

import InputBox from "../../components/Input/Input";

interface LoginFormProps {
}

const LoginForm: FC<LoginFormProps> = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const onChangeInput = (e: any, keyToBeSet: string) => {
    setFormState({
      ...formState,
      [keyToBeSet]: e.target.value,
    })
  };

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      if (login.token) {
        localStorage.setItem('AUTH_TOKEN', login.token);
        return navigate('/home')
      } else {
        setError(true);
      }
    },
  });

  return (<div className="w-96">
    <form className="px-4 p-6">
      <InputBox
        name="email"
        type="email"
        placeholder="Email Address"
        modelValue={formState.email}
        onChange={onChangeInput.bind(this)}
        size="big"
      ></InputBox>
      <InputBox
        name="password"
        type="password"
        placeholder="Password"
        modelValue={formState.password}
        onChange={onChangeInput.bind(this)}
        size="big"
      ></InputBox>
      {error && <p className="text-red-500 text-xs">Invalid login credentials.</p>}
      <div className="flex flex-col">
        <button className={styles.primaryButton} type="button" onClick={() => login()}>
          Log In
        </button>
        <a className={styles.forgotPasswordLink} href="facebook.com">
          Forgotten Password?
        </a>
      </div>
    </form>
  </div>);
};

export default LoginForm;
