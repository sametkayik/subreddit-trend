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
      subreddit_url: baseUrl + "/r/" + post.data.subreddit,
      image_url: post.data.url.includes("redd.it") ? post.data.url : null,
      thumbnail: post.data.thumbnail.includes("thumbs")
        ? post.data.thumbnail
        : null,
      video: post.data.media?.reddit_video?.fallback_url,
      post_external_url: !post.data.url.includes("redd.it")
        ? post.data.url
        : null,
      gallery_urls: post.data.gallery_data?.items?.map(
        (item) => `https://i.redd.it/${item.media_id}.jpg`
      ),
      category: post.data.link_flair_text ? post.data.link_flair_text : null,
    }));
    return simplifiedPosts;
  } catch (error) {
    throw new Error(error);
  }
};

export default getSubreddit;
