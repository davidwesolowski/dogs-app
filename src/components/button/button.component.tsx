import { ButtonHTMLAttributes } from "react"
import classes from './button.module.scss';

export const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
    return (
        <button className={[classes.btn, className].join(' ')} {...rest}>
            {children}
        </button>
    );
}