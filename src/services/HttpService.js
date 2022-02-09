import axios from "axios";
axios.defaults.baseURL = "https://api.opensea.io/api/v1/assets"

const http = {
    get: axios.get,
}
export default http;