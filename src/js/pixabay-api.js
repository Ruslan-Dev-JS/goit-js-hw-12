import axios from "axios";

const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_KEY || "53445349-55a99b0310e27289c38888bf9";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: PIXABAY_API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: PER_PAGE,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data; 
}
