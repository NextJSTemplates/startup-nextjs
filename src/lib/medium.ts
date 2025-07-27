import axios from "axios";

export const getMediumPosts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_MEDIUM_RSS_JSON}`
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
