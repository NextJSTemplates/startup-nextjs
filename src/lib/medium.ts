import axios from "axios";

export const getMediumPosts = async (blogLink: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_MEDIUM_RSS_JSON}?rss_url=${blogLink}`
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
