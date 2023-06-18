
import { useState, useEffect } from 'react';

import TabNavItem from '../../components/tabs/TabNavItem';
import TabContent from '../../components/tabs/TabContent';

import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';

import './auth.css';
import auth from '../../assets/Login.svg';
// import Logo from '../../components/common/logo/Logo';

const Auth = () => {

    const [activeTab, setActiveTab] = useState('sign-in');

    // get border element and change its background color
    useEffect(() => {
        const border = document.querySelector('.border');
        if (border) {
            if (activeTab === 'sign-in') {
                border.style.background = 'linear-gradient(to right, #282272 50%, #6559d561 50%)';
            } else {
                border.style.background = 'linear-gradient(to right, #6559d561 50%, #282272 50%)';
            }
        }
    }, [activeTab]);
    

    return (
        <div className="main auth">
            <div className="auth__left">
                <div className="auth__left__content">
                    <h1>Welcome Back!</h1>
                    <p>connect your account to continue ...</p>
                </div>
                <img src={auth} alt="auth" style={{
                    width: '75%'
                }} />
            </div>
            <div className="auth__right">
                <div className="auth__right__content">
                    {/* <div className="logo__container">
                        <Logo />
                    </div> */}
                    <div className="auth__container">
                        <div className="tabs__container">
                            <ul className="tabs">
                                <TabNavItem
                                    id="sign-in"
                                    title="Sign In"
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                                <TabNavItem
                                    id="sign-up"
                                    title="Sign Up"
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            </ul>
                            <div className="border"></div>
                        </div>
                        <div className="form__container">
                            <TabContent
                                id={'sign-in'}
                                activeTab={activeTab}
                            >
                                <Login />
                            </TabContent>
                            <TabContent
                                id={'sign-up'}
                                activeTab={activeTab}
                            >
                                <Register />
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;