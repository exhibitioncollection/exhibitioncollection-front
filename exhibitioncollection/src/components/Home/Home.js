import React, {useEffect} from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';
import {useState} from 'react';
import {getPostList} from '../../lib/api/Post';
import Loading from '../Loading/Loading';

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
    margin-bottom: 2rem;
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
const CreateButton = styled.button`
    cursor:pointer;
    color: black;
    width: 20rem;
    height: 5rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    background-color : #323232;
    color : white;
    border : none;
    border-radius : 6%;
/*     align-self: flex-end;
    margin-right: 10%; */
`;
function Home({object, props}) {
    const [postListState, SetPostListState] = useState({
        postList: null,
        status: 'idle'
    });

    useEffect(()=>{
        SetPostListState({postList: null, status: 'pending'});
      try { 
          (async() => {
            const result = await getPostList();
            setTimeout(()=>SetPostListState({postList: result, status: 'resolved'}),800);
            console.log(result);
          })();
      } catch (error) {
        SetPostListState({postList: null, status: 'rejected'});
      }
    },[]);

    const UpdatePostList = (id)=>{
        SetPostListState({
            postList : postListState.postList.filter((post)=> post.id !== id),
            status: 'resolved'
        });
      }

    switch (postListState.status){
        case 'pending':
            return <Loading></Loading>
        case 'rejected' :
            return <div>Load Fail</div>
        case 'resolved' :
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
                        <CreateButton onClick={()=>props.history.push('/create')} >Create Button</CreateButton>
                        <GridTemplate>
                            {
                                postListState.postList.map((obj,idx)=>(
                                    <Card UpdatePostList={UpdatePostList} key={`Card+${idx}`} object={obj}></Card>
                                ))
                            }
                        </GridTemplate>
                    </Body>
                </>
            );
        case 'idle':
            return <div>idle status</div>
    }
}

export default Home
