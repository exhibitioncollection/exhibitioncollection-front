import axios from 'axios';

const url = ''//'http://15.165.86.166:3000';

const postCreate = async (object) => {
    try {
        const { data } = await axios.post(`/create`,object);
        return data.data;
    } catch (e) {
        console.error('[FAIL] POST ANSWER', e);
        return e;
    }
}

export {
    postCreate,
};