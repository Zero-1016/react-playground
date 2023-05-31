import Greetings from './Components/Greetings';

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <Greetings.UserGreeting />;
    } else {
        return <Greetings.GuestGreeting />;
    }
};

export default Greeting;
