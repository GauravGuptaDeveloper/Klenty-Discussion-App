import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/discussion/";
const API_URL_REPLY = "http://localhost:8081/replies/";

const getPublicContent = () => {
  return axios.get(API_URL);
};

const getDiscussions = () => {
  return axios.get("http://localhost:8081/user/discussion", {
    headers: authHeader(),
  });
};

const getPublicReplies = (discussionId) => {
  return axios.get(API_URL_REPLY + discussionId);
};

const addDiscussion = (topic, description) => {
  console.log(topic, description);
  return axios.post(
    API_URL,
    {
      topic,
      description,
    },
    {
      headers: authHeader(),
    }
  );
};

const addReply = (replies, discussion) => {
  console.log(replies, discussion);
  return axios.post(
    API_URL_REPLY,
    {
      discussion,
      replies,
    },
    {
      headers: authHeader(),
    }
  );
};

export default {
  getPublicContent,
  addDiscussion,
  getPublicReplies,
  addReply,
  getDiscussions,
};
