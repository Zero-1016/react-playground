import { useState } from 'react';

const Reservation = () => {
    const [haveBreakfast, setHaveBreakFast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수:${numberOfGuest}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input
                    type={'checkbox'}
                    checked={haveBreakfast}
                    onChange={(event) => {
                        setHaveBreakFast(event.target.checked);
                    }}
                />
            </label>
            <label>
                방문객 수:
                <input
                    type={'number'}
                    value={numberOfGuest}
                    onChange={(event) => {
                        setNumberOfGuest(event.target.checked);
                    }}
                />
            </label>
            <button>제출</button>
        </form>
    );
};

export default Reservation;
