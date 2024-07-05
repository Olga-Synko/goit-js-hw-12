import axios from 'axios';

async function getInform(str, page) {
    const API_KEY = '43214840-c1c575028749116cdd7e0c5e8';
    const BASE_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
        key: API_KEY,
        q: str,
        image_typ: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 15,
    });

    const { data } = await axios.get(`${BASE_URL}?${params}`);
    return data;

}
export { getInform };