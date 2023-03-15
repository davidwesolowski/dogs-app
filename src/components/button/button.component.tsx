import { ButtonHTMLAttributes } from "react"
import classes from './button.module.scss';

type ButtonVariants = 'cta' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
}

const BUTTON_VARIANTS_STYLES: Record<ButtonVariants, string> = {
    'cta': classes.btnCta,
    'primary': classes.btnPrimary,
}

export const Button = ({ children, className, variant = 'cta', ...rest }: ButtonProps): JSX.Element => {
    return (
        <button className={[classes.btn, BUTTON_VARIANTS_STYLES[variant], className].join(' ')} {...rest}>
            {children}
        </button>
    );
}