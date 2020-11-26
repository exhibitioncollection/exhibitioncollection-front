import React from 'react'
import styled from 'styled-components';

const Template = styled.div`
    background-color: #323232;
    //padding-top: 1.4rem;
    padding-top: 0.9vw;
    //padding-bottom: 1.1rem;
    padding-bottom: 0.6vw;
`;
const TextBox = styled.div`
    display: flex;
    //margin-left: 21.7rem;
    margin-left: 12vw;
`;
const TextPart = styled.div`
    color: #FFD500;
    font-size: 2.1rem;
    //margin-right: 0.5rem;
    margin-right: 0.3vw;
`;
const TextProject = styled.div`
    font-size: 2.1rem;
    color: white;
`;
function Header() {
    return (
        <Template>
            <TextBox>
                <TextPart>SOPT 27th</TextPart>
                <TextProject>Design Part Graduation Project</TextProject>
            </TextBox>
        </Template>
    )
}

export default Header
