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
        console.error('[FAIL] POST ANSWER', e);
        return e;
    }
}

export {
    postCreate,
};
