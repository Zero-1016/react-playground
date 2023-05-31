import { useState } from 'react';
import WaringBanner from './Components/WarningBanner';

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning((prevShowWaring) => !prevShowWaring);
    };

    return (
        <div>
            <WaringBanner waring={showWarning} />
            <button onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
        </div>
    );
}

export default MainPage;
