const fetchUser = async () => {
  console.log('Fetching user...');
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (response.status !== 200) {
    throw new Error("⛔ Can't fetch the data");
  }
  const data = await response.json();
  return data;
};

const fetchPosts = async () => {
  console.log('Fetching posts...');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (response.status !== 200) {
    throw new Error("⛔ Can't fetch the data");
  }
  const data = await response.json();
  return data;
};

fetchUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

fetchPosts()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
