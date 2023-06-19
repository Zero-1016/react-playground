import React from 'react';
import Dialog from './Dialog';
import FancyBorder from './FancyBorder';

// export default function WelcomeDialog(props) {
//     return (
//         <FancyBorder color={'blue'}>
//             <h1 className={`Dialog-title`}>어서 오세요</h1>
//             <p className={`Dialog-message`}>우리 사이트에 방문하신 것을 환영합니다.</p>
//         </FancyBorder>
//     );
// }

export default function WelcomeDialog() {
    return (
        <Dialog title='어서오세요' message='우리 사이트에 방문하신 것을 환영합니다.'/>
    );
}

