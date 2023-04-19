import React, { useState } from 'react';

export default function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prev) => !prev);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? '확인됨' : '확인하기'}
        </button>
    );
}
