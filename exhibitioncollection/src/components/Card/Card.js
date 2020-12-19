import React from 'react'
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import {postDelete} from '../../lib/api/Post';

const Active = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px, 12px;
    position: absolute;
    background : rgba(0, 0, 0, 0.5);
    border-radius: 1.8rem;
    right: 20px;
    bottom: 20px;
    font-size: 1.5vw;
    width: 3.5vw;
    height: 2.3vw;
    color: white;
    @media screen and (max-width:768px){
        font-size: 2rem;
        width: 5rem;
        height: 3rem;
    }
`;
const Delete = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 4px, 12px;
    position: absolute;
    background : rgba(0, 0, 0, 0.5);
    border-radius: 1.8rem;
    right: 20px;
    top: 20px;
    font-size: 1.5vw;
    width: 2.4vw;
    height: 2.4vw;
    color: white;
    @media screen and (max-width:768px){
        font-size: 2rem;
        width: 5rem;
        height: 3rem;
    }
    &:hover{
        width: 2.6vw;
        height: 2.6vw;
        background : rgba(0, 0, 0, 1);
    }
`;
const Image = styled.img`
    width: 100%;
    height: 26vw;
    min-height: 30rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    overflow: hidden;
`;
const CardTemplate = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    cursor: pointer;
    overflow: hidden;
/*     min-width: 37.5rem;
    max-width: 75rem;
    min-height: 40rem;
    max-height: 62rem; */
    &:hover{
        ${Image}{
            transform:scale(1.05);
        }
        ${Active}{
            background: #000000;
        }
        ${Delete}{
            display: flex;
        }
    }
`;
const TextBox = styled.div`
    height: 10vw;
    height: auto;
    display: flex;
    z-index: 2;
    flex-direction: column;
    //padding: 3.2rem;
    padding: 2vw;
    background-color: #F2F2F2;
/*     @media screen and (max-width:768px){
        height: 10rem;
        justify-content: center;
    } */
`;
const TextBoxSub1 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TextBoxSub2 = styled.div`
    display: flex;
    justify-content: space-between;
    //margin-top: 5rem;
    margin-top: 2vw;
`;
const Name = styled.div`
    color: black;
    //font-size: 4.2rem;
    font-size: 3vw;
    @media screen and (max-width:768px){
        font-size: 3rem;
    }
`;
const Type = styled.div`
    color: rgba(0,0,0,0.5);
    //font-size: 2.5rem;
    font-size: 1.5vw;
    @media screen and (max-width:768px){
        font-size: 2rem;
    }
`;
const Term = styled.div`
    color: rgba(0,0,0,0.5);
    //font-size: 2.5rem;
    font-size: 1.5vw;
    @media screen and (max-width:768px){
        font-size: 2rem;
    }
`;
const MadeBy = styled.div`
    color: black;
    //font-size: 2.5rem;
    font-size: 1.5vw;
    @media screen and (max-width:768px){
        font-size: 2rem;
    }
`;
const ImageTemplate = styled.div`
    position: relative;
`;  
function Card({object, history, UpdatePostList}) {

    const onClickDelete = async (evt) => {
        evt.stopPropagation();
        try {
            console.log(`delete`);
            await postDelete(object.id);
            UpdatePostList(object.id);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <CardTemplate onClick={()=>history.push(`/${object.id}`)}>
            <ImageTemplate>
                <Image src={object.Images[0].img}></Image>
                <Active>{object.User.active}</Active>
                <Delete onClick={onClickDelete}><DeleteOutlined/></Delete>
            </ImageTemplate>
            <TextBox>
                <TextBoxSub1>
                    <Name>{object.name}</Name>
                    <Type>{object.category}</Type>
                </TextBoxSub1>
                <TextBoxSub2>
                    <Term>{object.term}</Term>
                    <MadeBy>{object.User.madeBy}</MadeBy>
                </TextBoxSub2>
            </TextBox>
        </CardTemplate>
    )
}

export default withRouter(Card)
