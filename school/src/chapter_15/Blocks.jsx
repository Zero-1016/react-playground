import React from 'react';
import styled from 'styled-components';

export default function Blocks() {
    return (
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block padding={blockItem.padding} backgroundColor={blockItem.backgroundColor}>
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgray;
`;
const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-align: center;
`;

const blockItems = [
    { label: '1', padding: '1rem', backgroundColor: 'red' },
    { label: '2', padding: '3rem', backgroundColor: 'green' },
    { label: '3', padding: '2rem', backgroundColor: 'blue' },
];
