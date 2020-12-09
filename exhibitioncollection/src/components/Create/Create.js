import React, {useState} from 'react'
import styled from 'styled-components';
import {postCreate} from '../../lib/api/Post';

const TitleText = styled.div`
    font-size: 7rem;
    margin-top: 2rem;
    color : #FFD500;
`;
const ImageBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;
const ImgInput = styled.input`
    color: white;
    margin-bottom: 2rem;
    margin-top: 1rem;
`;
const ImgPreview = styled.img`
    width: 100%;
    max-width: 35rem;
    max-height: 50rem;
    margin-top: 2rem;
    height: auto;
    border-radius: 5%;
`;
const NameInput = styled.input`
    width: 25rem;
    height: 2rem;
    text-align: center;
`;
const SubNameInput = styled.input`
    width: 25rem;
    height: 2rem;
    text-align: center;
`;
const CategoryInput = styled.input`
    width: 25rem;
    height: 2rem;
    text-align: center;
`;
const TermInput = styled.input`
    width: 25rem;
    height: 2rem;
    text-align: center;
`;
const MadeByInput = styled.input`
    width: 25rem;
    height: 2rem;
    text-align: center;
`;
const ActiveInput = styled.input`
    width: 25rem;
    height: 2rem;
    text-align: center;
`;
const DetailInput = styled.textarea`
    width: 30rem;
    height: 10rem;
    text-align: center;
    color: black;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Template = styled.div`
margin-top: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Submit = styled.input`
    font-size: 3rem;
    margin-bottom: 2rem;
`;
const UserImg = styled.img`
`;
const Card = styled.div`
    width: 60%;
    max-width: 50rem;
    height: 95%;
    background-color: #323232;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:1024px){
        height: 85%;
}
`;
function Create({props}) {
    const [imgSrc, setImgSrc] = useState("/images/default.gif");
    const onChangeHandle = (evt)=>{
        if(evt.target.files.length){
            var imgTarget = (evt.target.files)[0];
            var fileReader = new FileReader();
            fileReader.readAsDataURL(imgTarget);
            fileReader.onload = function(e) {
              setImgSrc(e.target.result);
            }
        }else{
            setImgSrc("/images/default.gif");
        }
    }
    const onHandleSubmit = async (evt) => {
        evt.preventDefault();

        const object = new FormData();
        object.append('img',evt.target.img.files[0]);
        object.append('userImg',evt.target.userImg.attributes.src.value);
        object.append('name',evt.target.name.value);
        object.append('subName',evt.target.subName.value);
        object.append('category',evt.target.category.value);
        object.append('term',evt.target.term.value);
        object.append('madeBy',evt.target.madeBy.value);
        object.append('active',evt.target.active.value);
        object.append('detail',evt.target.detail.value);
         for(var key of object.entries())
        {
            console.log(`${key}`);
        }  
/*         const object = {
            img : evt.target.img.files[0],
            userImg : evt.target.userImg.attributes.src.value,
            name : evt.target.name.value,
            subName : evt.target.subName.value,
            category : evt.target.category.value,
            term : evt.target.term.value,
            madeBy : evt.target.madeBy.value,
            active : evt.target.active.value,
            detail : evt.target.detail.value,
        } */
        try{
            //console.log(object);
            const result = await postCreate(object);
            console.log(result);
            props.history.push('/');
        }catch(e){
            console.log(e);
        } 
    }
    return (
        <Template>
            <Card>
                <Form onSubmit={onHandleSubmit}>
                    <TitleText>Post Create</TitleText>
                    <UserImg name="userImg" src="/images/userImg.png"></UserImg>
                    <ImageBox>
                        <ImgPreview src={imgSrc}/>
                        <ImgInput name="img" type='file' onChange={onChangeHandle}></ImgInput>
                    </ImageBox>
                    <NameInput name="name" type="input" placeholder="프로젝트 이름"></NameInput>
                    <SubNameInput name="subName" type="input" placeholder="구체적인 프로젝트 이름"></SubNameInput>
                    <CategoryInput name="category" type="input" placeholder="카테고리"></CategoryInput>
                    <TermInput name="term" type="input" placeholder="프로젝트 기간"></TermInput>
                    <MadeByInput name="madeBy" type="input" placeholder="작성자"></MadeByInput>
                    <ActiveInput name="active" type="input" placeholder="OB / YB"></ActiveInput>
                    <DetailInput name="detail" placeholder="내용을 입력해주세요"></DetailInput>
                    <Submit type="submit" value="등록하기"></Submit>
                </Form>
            </Card>
        </Template>
    ) 
}

export default Create
