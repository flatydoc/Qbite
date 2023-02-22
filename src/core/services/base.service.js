import axios from "axios";
import { config } from "../configs/config";

export default axios.create({
  baseURL: config.BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
