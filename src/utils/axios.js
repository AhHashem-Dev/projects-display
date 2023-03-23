import axios from "axios";

const airTable = axios.create({
  baseURL: "https://api.airtable.com/v0/appUeTA16YqP5JzSw/Table%201",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default airTable;
