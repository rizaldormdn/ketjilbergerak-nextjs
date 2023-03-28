import axios from "axios"
const { SERVER_URL, TOKEN } = process.env
export const Adapter = axios.create({
     baseURL: SERVER_URL || "http://localhost:1337",
     headers: {
          Authorization: "Bearer " + TOKEN
     }
})
