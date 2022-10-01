import { useEffect, useState } from "react";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Button } from "shared/ui/Button/Button";


// Для тестирования выпадения ошибок
const BugButton = () => {
    const [error, setError] = useState(false)

    const onClick = () => setError(true)
    useEffect(() =>{
        if(error){
            throw new Error()
        }
    }, [error])
    return (
        <Button onClick={onClick}>
            Throw error
        </Button>
    );
};

export default BugButton;