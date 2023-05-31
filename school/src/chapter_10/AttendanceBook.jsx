const students = [
    {
        id: 1,
        name: 'Sookyoung',
    },
    {
        id: 2,
        name: 'Steve',
    },
    {
        id: 3,
        name: 'Bill',
    },
    {
        id: 4,
        name: 'Jeff',
    },
    {
        id: 5,
        name: 'Jihyeong',
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {/* id를 키값으로 사용 */}
            {students.map((student) => {
                return <li>{student.name}</li>;
            })}
            {/* 포맷팅 된 문자열을 키값으로 사용 */}
            {/* {students.map((student) => {
                return <li key={`student-id-${students.id}`}>{student.name}</li>;
            })} */}
            {/* 배열의 인덱스를 키값으로 사용 */}
            {/* {students.map((student, index) => {
                return <li key={index}>{student.name}</li>;
            })} */}
        </ul>
    );
}

export default AttendanceBook;
