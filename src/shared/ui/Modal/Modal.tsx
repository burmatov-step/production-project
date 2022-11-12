import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    ReactNode, useCallback, useRef, useState, useEffect,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps{
    className?: string;
    lazy?: boolean;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY: number = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,

    } = props;
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        console.log('isOpen', isOpen);
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
