export const fetchUser = async () => {
  console.log('Fetching user...');
  const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
  if (response.status !== 200) {
    throw new Error("⛔ Can't fetch data");
  }
  const data = await response.json();
  return data;
};

export const fetchPosts = async () => {
  console.log('Fetching posts...');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (response.status !== 200) {
    throw new Error("⛔ Can't fetch data");
  }
  const data = await response.json();
  return data;
};
