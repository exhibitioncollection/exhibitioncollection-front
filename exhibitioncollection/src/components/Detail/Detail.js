import React from 'react'
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {getPostList} from '../../lib/api/Post';
import Loading from '../Loading/Loading';

const Poster = styled.div`
    display: flex;
    align-items:flex-end;
    width: 100%;
    height:auto;
    padding-top: 43%; 
    padding-bottom: 5%;
    max-height: 103rem;
    background-size: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    @media screen and (max-width:768px){
        max-height: 40rem;
    }
    @media screen and (max-width:375px){
        max-height: 19.6rem;
    }
`;
const UserDiv = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
    align-items:center;
    justify-content: flex-start;
`;
const UserIcon = styled.img`
    margin-left: 10rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    @media screen and (max-width:768px){
        margin-left: 6rem;
        width: 6rem;
        height: 6em;
    }
    @media screen and (max-width:375px){
        margin-left: 3rem;
        width: 3rem;
        height: 3rem;
    }
`;
const UserName = styled.div`
    margin-left: 10rem;
    font-size: 3rem;
    font-weight: bold;
    @media screen and (max-width:768px){
        margin-left: 6rem;
        font-size: 2rem;
    }
    @media screen and (max-width:375px){
        margin-left: 3rem;
        font-size: 1rem;
    }
`;
const MemberType = styled.div`
    text-align: center;
    background-color: #000000;
    color: white;
    margin-right: 10rem;
    margin-bottom: 2rem;
    border-radius: 2rem;
    width: 10rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    @media screen and (max-width:768px){
        margin-right: 7rem;
        margin-bottom: 1rem;
        border-radius: 1rem;
        width: 7rem;
        height: 3.5rem;
        line-height: 3.5rem;
        font-size: 1rem;
    }
    @media screen and (max-width:375px){
        margin-right: 4rem;
        margin-bottom: 0.5rem;
        border-radius: 0.5rem;
        width: 4rem;
        height: 2rem;
        line-height: 2rem;
        font-size: 0.5rem;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10rem;
    @media screen and (max-width:768px){
        margin: 7rem;
    }
    @media screen and (max-width:375px){
        margin: 4rem;
    }
`;
const Title = styled.span`
    font-size: 4rem;
    margin-top: 5rem;
    font-weight: bold;
    @media screen and (max-width:768px){
        font-size: 2.5rem;
        margin-top: 2.5rem;
    }
    @media screen and (max-width:375px){
        font-size: 0.5rem;
        margin-top: 1rem;
    }
`;
const Duration = styled.div`
    font-size: 2rem;
    margin-top: 5rem;
    color: #646464;
    @media screen and (max-width:768px){
        font-size: 1rem;
        margin-top: 2.5rem;
    }
    @media screen and (max-width:375px){
        font-size: 0.5rem;
        margin-top: 1rem;
}
`;
const Content = styled.div`
    font-size: 2rem;
    margin-top: 10rem;
    color: #646464;
    @media screen and (max-width:768px){
        font-size: 1rem;
        margin-top: 5rem;
    }
    @media screen and (max-width:375px){
        font-size: 0.5rem;
        margin-top: 2.5rem;
    }
`;
function Detail({props}) {    
    const id=Number(props.match.params.id);
    const [postState, SetPostState] = useState({
        post: null,
        status: 'idle'
    });

    useEffect(()=>{
        SetPostState({post: null, status: 'pending'});
      try { 
          (async() => {
            const result = await getPostList();
            setTimeout(()=>SetPostState({post: result.filter((post)=> post.id === id)[0], status: 'resolved'}),800);
            console.log(result.filter((post)=> post.id === id)[0]);
            console.log(result);
          })();
      } catch (error) {
        SetPostState({post: null, status: 'rejected'});
      }
    },[]);
    switch (postState.status){
        case 'pending':
            return <Loading></Loading>
        case 'rejected' :
            return <div>Load Fail</div>
        case 'resolved' :
            return (
                <>
                    <Poster src={postState.post.Images[0].img}>
                        <UserDiv>
                            <UserIcon src={postState.post.userImg}></UserIcon>
                            <UserName>{postState.post.User.madeBy}</UserName>
                        </UserDiv>
                        <MemberType>{postState.post.User.active}</MemberType>
                    </Poster>
                    <Info>
                        <Title>{postState.post.name}{postState.post.subName}</Title>
                        <Duration>{postState.post.term}</Duration>
                        <Content>{postState.post.detail}</Content>
                    </Info>
                </>
            );
        case 'idle':
            return <div>idle status</div>
    }
}

export default Detail
