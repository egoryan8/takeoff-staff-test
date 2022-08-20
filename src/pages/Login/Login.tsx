import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
