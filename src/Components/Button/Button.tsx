export type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    testId?: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, className, testId}) => {
    return (
       <button onClick={onClick} className={className} data-testid={testId}>{text}</button>
    )
}

export default Button;