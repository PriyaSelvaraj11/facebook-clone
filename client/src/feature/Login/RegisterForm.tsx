import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from '../../assets/css/Login.module.scss';

import AllowedDateRange from '../../constants/date';
import { Validators } from '../../constants/validators';
import { ERROR_INVALID_EMAIL } from '../../constants/ErrorConstants';


import { SIGNUP_MUTATION } from '../../mutations/Auth';
import { useMutation } from "@apollo/client";

import InputBox from "../../components/Input/Input";
import DateSelector from "../../components/Input/DateSelector";
import GenderSelector from "../../components/Input/GenderSelector";

interface RegisterFormProps {
  closeRegisterForm: () => any;
  showSignupSuccessMessage: () => any;
}

const RegisterForm: FC<RegisterFormProps> = ({ closeRegisterForm, showSignupSuccessMessage }) => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    surName: '',
    dob: {
      date: '1',
      month: 'Jan',
      year: '1995',
    },
    gender: '',
  });

  const [errors, setErrors] = useState({} as any);

  const onChangeInput = (e: any, keyToBeSet: string) => {
    setFormState({
      ...formState,
      [keyToBeSet]: e.target.value,
    })
  };

  const onChangeDob = (e: any, keyToBeSet: string) => {
    setFormState({
      ...formState,
      dob: { ...formState.dob, [keyToBeSet]: e.target.value }
    })
  };

  const getDate = () => {
    const monthIndex = AllowedDateRange.months.findIndex(val => val === formState.dob.month);
    return new Date(parseInt(formState.dob.year), monthIndex, parseInt(formState.dob.date)).toISOString();
  }

  const [signupMutation] = useMutation(SIGNUP_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
      firstName: formState.firstName,
      surName: formState.surName,
      gender: formState.gender,
      dateOfBirth: getDate(),
    },
    onCompleted: ({ signup }) => {
      closeRegisterForm();
      showSignupSuccessMessage();
    }
  });

  const isValidForm = () => {
    console.log(formState);
    if (!Validators.emailValidator(formState.email)) {
      setErrors({
        ...errors,
        ...{ email: ERROR_INVALID_EMAIL }
      });
    } else {
      setErrors({});
    }
    return !Object.keys(errors).length;
  }

  const signUp = () => {
    if (isValidForm()) {
      signupMutation();
    }
  }

  return (<div>
    <div className="flex text-left">
      <section className="flex-1">
        <h2 className="text-4xl font-bold">Sign up</h2>
        <div className="text-gray-500">It's quick and easy.</div>
      </section>
      <section className="flex-none">
        <label
          htmlFor="create-account-modal"
          className="cursor-pointer"
          onClick={() => closeRegisterForm()}>✕</label>
      </section>
    </div>
    <hr className='my-3' />
    <form>
      <div className="flex flex-col items-stretch">
        <div className="flex flex-row space-x-2">
          <InputBox
            name="firstName"
            placeholder="First name"
            modelValue={formState.firstName}
            onChange={onChangeInput.bind(this)}
            errorText={errors?.firstName}
          ></InputBox>
          <InputBox
            name="surName"
            placeholder="Surname"
            modelValue={formState.surName}
            onChange={onChangeInput.bind(this)}
            errorText={errors?.surName}
          ></InputBox>
        </div>
        <InputBox
          name="email"
          type="email"
          placeholder="Email Address"
          modelValue={formState.email}
          onChange={onChangeInput.bind(this)}
          errorText={errors?.email}
        ></InputBox>
        <InputBox
          name="password"
          type="password"
          placeholder="New Password"
          modelValue={formState.password}
          onChange={onChangeInput.bind(this)}
          errorText={errors?.password}
        ></InputBox>
        <span className="text-xs text-gray-500 justify-self-start self-start">
          Date of birth
        </span>
        <DateSelector
          fieldName="dob"
          modelValue={formState.dob}
          errorText={errors?.dob}
          onChangeDob={(e, name, keyToBeSet) => onChangeDob(e, keyToBeSet)}
        ></DateSelector>
        <span className="text-xs text-gray-500 justify-self-start self-start">
          Gender
        </span>
        <GenderSelector
          name="gender"
          modelValue={formState.gender}
          onChange={onChangeInput.bind(this)}
          errorText={errors?.gender}
        ></GenderSelector>
        <span className="text-xs text-gray-500 text-left">
          People who use our service may have uploaded your contact information to Facebook.
        </span>
      </div>
      <div className="flex flex-col">
        <button className={`btn modal-button ${styles.createButton}`} type="button"
          onClick={() => signUp()}>
          Sign Up
        </button>
      </div>
    </form>
  </div>
  )
};

export default RegisterForm;
