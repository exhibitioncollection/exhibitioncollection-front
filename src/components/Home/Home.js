import React from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';

const Banner = styled.div`
    width: 100%;
    height: 56rem;
    background-color: #000000;
    @media screen and (max-width:768px){
        height: 49rem;
    }
    @media screen and (max-width:375px){
        height: 38rem;
    }
`;
const TextBox = styled.div`
    display: flex;
    padding-top: 15rem;
    @media screen and (max-width:1024px){
        padding-top: 14rem;
    }
    @media screen and (max-width:768px){
        padding-top: 8rem;
    }
    @media screen and (max-width:375px){
        padding-top: 7rem;
    }
    align-items: center;
    flex-direction: column;
    font-weight: bold;
`;
const TextPart = styled.div`
    color: #FFD500;
    font-size: 7rem;
    font-weight: bold;
    height: 10rem;
    display: flex;
    align-items: center;
    @media screen and (max-width:768px){
        font-size: 7rem;
    }
    @media screen and (max-width:375px){
        font-size: 5rem;
        height: 6rem;
    }
`;
const TextMain = styled.div`
    font-size: 7rem;
    color: white;
    height: 10rem;
    display: flex;
    align-items: center;
    @media screen and (max-width:768px){
        font-size: 5rem;
    }
    @media screen and (max-width:375px){
        font-size: 3.5rem;
    }
`;
const TextSub = styled.div`
    font-size: 2.5rem;
    margin-top: 3.8rem;
    color: #7D7D7D;
    height: 4rem;
    @media screen and (max-width:768px){
        font-size: 2rem;
    }
    @media screen and (max-width:375px){
        font-size: 1.5rem;
        margin-top: 1.5rem;
    }
`;
const TextMadeBy = styled.div`
    font-size: 2rem;
    color: #7D7D7D;
    margin-top: 8rem;
    @media screen and (max-width:375px){
        margin-top: 4rem;
        font-size: 1.5rem;
    }
    height: 2rem;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const TextTitle = styled.div`
    color: #FFD500;
    font-size: 5rem;
    margin: 6rem 0;
`;
const GridTemplate = styled.div`
    display: grid;
    width: 80%;
    margin-bottom: 10%;
    grid-template-columns: repeat(2, minmax(0,75rem));
    grid-template-rows : auto;
    grid-gap: 3.2rem;
    @media screen and (max-width:768px){
        width:80%;
        grid-template-columns: 1fr;
    }
`;
function Home({object}) {
    return (
        <>
            <Banner>
                <TextBox>
                    <TextPart>SOPT 27th</TextPart>
                    <TextMain>디자인파트 졸전 모음 사이트</TextMain>
                    <TextSub>천재적인 재능을 지닌 SOPT 27th 디자이너들의 학사를 향한 마지막 발악</TextSub>
                    <TextMadeBy>Best Designers Collection by Mijung & Jin</TextMadeBy>
                </TextBox>
            </Banner>
            <Body>
                <TextTitle>All Projects</TextTitle>
                <GridTemplate>
                    {
                        object.map((obj,idx)=>(
                            <Card key={`Card+${idx}`} object={obj}></Card>
                        ))
                    }
                </GridTemplate>
            </Body>
        </>
    )
}

export default Home;
