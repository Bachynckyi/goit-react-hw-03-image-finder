import axios from "axios";

const BASEURL = 'https://pixabay.com/api/'
const KEY = '28946050-edbdf2e2dca91bf63c1cc8e01';
const URL = `${BASEURL}?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const fetchData = async (query, page) => {
    const response = await axios.get(URL)
    return response.data;
}