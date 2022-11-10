import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from './LoginForm.module.scss';

interface LoginFormProps{
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
            autofocus
             type="text"
             placeholder={'Введите username'}
             className={cls.input}/>
            <Input
             type="text"
             placeholder={'Введите пароль'}
             className={cls.input}/>
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
           
        </div>
    )
}