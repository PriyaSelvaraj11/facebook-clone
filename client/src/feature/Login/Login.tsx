import React, { FC, useState } from 'react';
import styles from '../../assets/css/Login.module.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface LoginProps { }

const Login: FC<LoginProps> = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showSignupSuccessMessage, setShowSignupSuccessMessage] = useState(false);
  const openRegisterForm = () => {
    setShowRegisterForm(true);
  };
  const closeRegisterForm = () => {
    setShowRegisterForm(false)
  };

  return (<div className={styles.login}>
    {/* Left section */}
    <div className={styles.leftSection}>
      <div className={styles.title}>face-book</div>
      <div className={styles.description}>
        Facebook helps you connect and share with the people in your life.
      </div>
    </div>

    {/* Right section - login form */}
    <div className={styles.rightSection}>
      {showSignupSuccessMessage &&
        <div className="alert alert-success p-1 mt-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Signup successful! Please login</span>
          </div>
        </div>
      }
      <LoginForm />
      <hr />

      <button className={`btn modal-button ${styles.createButton}`} onClick={() => openRegisterForm()}>Create Account</button>
      {showRegisterForm &&
        <div>
          <input type="checkbox" id="my-modal" className="modal-toggle" checked />
          <div className="modal">
            <div className="modal-box">
              <RegisterForm
                closeRegisterForm={closeRegisterForm}
                showSignupSuccessMessage={() => setShowSignupSuccessMessage(true)} />
            </div>
          </div>
        </div>
      }
    </div>

  </div>)
};

export default Login;
