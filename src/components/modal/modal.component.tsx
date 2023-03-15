import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from 'framer-motion';
import classes from './modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}

type ModalContentProps = Omit<ModalProps, 'isOpen'>;


const ModalContent = ({ children }: ModalContentProps): JSX.Element => {
    
    return (
        <motion.div
            className={classes.modalContainer}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
        >
            <motion.div
                className={classes.modal}
                initial={{ opacity: 0, y: '30%' }}
                exit={{ opacity: 0, y: '30%' }}
                animate={{ opacity: 1, transition: { duration: 0.3 }, y: 0 }}

            >
                {children}
            </motion.div>
        </motion.div>
    );
}


export const Modal = ({ isOpen, children }: ModalProps): JSX.Element => {
    const element = document.getElementById('modal');

    if (!element) {
        return <></>;
    }


    return createPortal(
        <AnimatePresence>
            {isOpen && (<ModalContent>{children}</ModalContent> )}
        </AnimatePresence>, element
    );
}
