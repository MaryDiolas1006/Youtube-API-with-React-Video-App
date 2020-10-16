import axios from 'axios';


const KEY = 'AIzaSyAismFBZiC5Z5i01t1rQX0OIms--oPSF2c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})