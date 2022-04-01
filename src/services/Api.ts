import axios from "axios";
import md5 from "md5";

const publicKey = ""; // your the public key;
const privateKey = ""; // your the private key;

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
