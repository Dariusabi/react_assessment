import axios from 'axios';

const KEY = 'AIzaSyA9sla_Nud-xfRvR1-c-WXcAgMdH70A0Fg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
})
