import axios from "axios";
import md5 from "md5";

const publicKey = "c2e039065abc48ccfc575bc6ccd7d982";
const privateKey = "a3cec657bc627b4c55cb2e0c9165eb700fd926a6";

const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/",
    params: {
        limit: 9,
        ts,
        apikey: publicKey,
        hash,
    },
});

export default api;
