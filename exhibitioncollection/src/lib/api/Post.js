import axios from 'axios';

const url = 'https://seonuk.shop';//'http://15.165.86.166:3000';

const postCreate = async (object) => { 
    try {
        const { data } = await axios.post(`${url}/projects`, object, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        return data.data;
    } catch (e) {
        console.error('[FAIL] CREATE_POST ANSWER', e);
        return e;
    }
}
const postDelete = async (idx) => { 
    try {
        const { data } = await axios.delete(`${url}/projects/${idx}`);
        return data.data;
    } catch (e) {
        console.error('[FAIL] DELETE_POST ANSWER', e);
        return e;
    }
}
const getPostList = async () => { 
    try {
        const { data } = await axios.get(`${url}/projects/read`);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET_POST ANSWER', e);
        return e;
    }
}

export {
    postCreate,
    postDelete,
    getPostList
};
