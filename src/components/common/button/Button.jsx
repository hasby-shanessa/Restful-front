import './button.css';

const Button = ({ title, onClick, isDisabled }) => {

    return (
        <button
            className='button'
            onClick={onClick}
            disabled={isDisabled}
        >
            {title}
        </button>
    );
};

export default Button;