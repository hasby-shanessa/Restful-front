
import './input.css';

const Input = ({ icon, value, onChange, label, type }) => {
    return (
        <div className="form__group">
            <i className={`bx bx-${icon}`}></i>
            <input
                type={type}
                name={label}
                id={label}
                value={value}
                onChange={onChange}
                required
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default Input;