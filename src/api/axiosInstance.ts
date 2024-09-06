import axios from "axios";

// Configure Axios instance
export const cosmicApi = axios.create({
   baseURL: "https://api.cosmicjs.com/v3", // Ensure this matches the correct API version
   headers: {
     Authorization: `Bearer ${import.meta.env.VITE_BUCKET_READ}`, // Use environment variable for security
   },
 });

