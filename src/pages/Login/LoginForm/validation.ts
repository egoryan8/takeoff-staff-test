const REQUIRED_FIELD = 'Поле обязательно для заполнения';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские символы';
    }
    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль должен быть длиннее 6 символов';
    }
    return true;
  },
};
