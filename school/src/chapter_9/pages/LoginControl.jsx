import { useState } from 'react';
import Buttons from './Components/Button';
import Greeting from './Greeting';

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    // let button;
    // if (isLoggedIn) {
    //     button = <Buttons.LogOutButton onClick={handleLogoutClick} />
    // } else {
    //     button = <Buttons.LoginButton onClick={handleLoginClick} />
    // }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
                <Buttons.LogOutButton onClick={handleLogoutClick} />
            ) : (
                <Buttons.LoginButton onClick={handleLoginClick} />
            )}
        </div>
    );
}
export default LoginControl;
