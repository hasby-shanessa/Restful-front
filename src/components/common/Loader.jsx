import { useEffect, useState } from 'react';

const Loader = (props) => {

    const { show = false, delay = 0 } = props;
    const [showSpinner, setShowSpinner] = useState(false);


    useEffect(() => {

        let timeout;

        if (!show) {
            setShowSpinner(false);
            return;
        }
        if (delay === 0) {
            setShowSpinner(true);
        } else {
            timeout = setTimeout(() => setShowSpinner(true), delay);
        }

        return () => clearTimeout(timeout);
    }, [show, delay]);

    return showSpinner ? (
        <div>
            <i className='bx bx-loader-alt'></i>
            <span>{props.message}</span>
        </div>
    ) : null;
};

export default Loader;