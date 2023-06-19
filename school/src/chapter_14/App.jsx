import React from 'react';

const ThemeContext = React.createContext('Light')
export default function App() {
    return (
        <ThemeContext.Provider value='dark'>
            {/* <Toolbar theme='dark'/> */}
            <Toolbar/>
        </ThemeContext.Provider>
    );
}


// function Toolbar(props){
//     return (
//         <div>
//             <ThemeButton theme={props.theme}/>
//         </div>
//     )
// }

function Toolbar(props){
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

// function ThemeButton(props){
//     return(
//         <div>
//             <Button theme={props.theme}/>
//         </div>
//     )
// }

function ThemeButton(props){
    return(
        <ThemeContext.Consumer>
           { value => <Button theme={value}/>}
        </ThemeContext.Consumer>
    )
}

function Button(props){
    return <button>{props.theme}</button>
}