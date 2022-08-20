import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form';

import styles from './LoginForm.module.scss';
import { loginValidation, passwordValidation } from './validation';

interface Inputs {
  login: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { handleSubmit, control } = useForm<Inputs>({
    mode: 'onChange',
  });
  const { errors } = useFormState({ control });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <Typography variant="h1" className={styles.title}>
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className={styles.subtitle}>
        Чтобы получить доступ
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              className={styles.input}
              label="Логин"
              size="small"
              fullWidth={true}
              onChange={(evt) => field.onChange(evt)}
              value={field.value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              className={styles.input}
              type="password"
              label="Пароль"
              size="small"
              fullWidth={true}
              onChange={(evt) => field.onChange(evt)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth={true}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
