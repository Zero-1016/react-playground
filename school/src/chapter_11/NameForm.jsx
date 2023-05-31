import { useState } from 'react';

const NameForm = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        alert('입력한 이름:' + value);
        event.preventDefault();
        console.log(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">
                이름 :
                <input type="text" id="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
};

export default NameForm;
