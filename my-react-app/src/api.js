const API_URL = "http://localhost:3000";

export const fetchStories = async () => {
  const response = await fetch(`${API_URL}/stories`);
  return response.json();
};

export const fetchStoryDetails = async (id) => {
  const response = await fetch(`${API_URL}/stories/${id}`);
  return response.json();
};

export const fetchChapterDetails = async (id) => {
  const response = await fetch(`${API_URL}/chapters/${id}`);
  if (!response.ok) {
    throw new Error("Chapter not found");
  }
  return response.json();
};


export const fetchChaptersByStory = async (storyId) => {
  const response = await fetch(`${API_URL}/chapters/story/${storyId}`);
  return response.json();
};

