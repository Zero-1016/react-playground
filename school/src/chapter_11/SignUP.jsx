import { useState } from 'react';

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('남자');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름 : ${name}`);
        alert(`이름 : ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:{' '}
                <select value={gender} onChange={handleChangeGender}>
                    <option value={'남자'}>남자</option>
                    <option value={'여자'}>여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
};

export default SignUp;
