import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.incremented());
    };

    const decrement = () => {
        dispatch(counterActions.decremented());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                increment
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                decrement
            </Button>
        </div>
    );
};
