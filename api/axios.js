import config from "@/config";
import axios from "axios";

export default axios.create({
    baseURL: config.API_BACKEND_URL,
    headers: {
        "Content-type": "application/json"
    }
})
