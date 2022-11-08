import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const onShowModal = useCallback(() => {
        setAuthModal(true)
    }, [])
    const onCloseModal = useCallback(() => {
        setAuthModal(false)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal 
                isOpen={isAuthModal} 
                onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;
