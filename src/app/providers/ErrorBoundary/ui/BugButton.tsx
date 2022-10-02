import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

// Для тестирования выпадения ошибок
const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onClick = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onClick}>
            {t('Throw error')}
        </Button>
    );
};

export default BugButton;
