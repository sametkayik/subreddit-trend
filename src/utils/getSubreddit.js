import axios from "axios";

const baseUrl = "https://www.reddit.com";

const getSubreddit = async (subreddit, limit = 10) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/r/${subreddit}/top.json?limit=${limit}`
    );
    const posts = data.data.children.slice(0, limit);
    const simplifiedPosts = posts.map((post) => ({
      id: post.data.name,
      subreddit_name_prefixed: post.data.subreddit_name_prefixed,
      title: post.data.title,
      author: post.data.author,
      author_profile: baseUrl + "/user/" + post.data.author,
      ups: post.data.ups,
      num_comments: post.data.num_comments,
      url: baseUrl + post.data.permalink,
      text: post.data.selftext,
      posted_date: post.data.created_utc,
      subreddit: post.data.subreddit,
    }));
    return simplifiedPosts;
  } catch (error) {
    throw new Error(error);
  }
};

export default getSubreddit;
