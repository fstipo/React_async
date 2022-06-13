const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const suspensify = (promise) => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw new Error({
          name: 'Error',
          message: 'String you pass in the constructor',
        });
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export const fetchData = (id = 1) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((data) => data.json())
    .then(sleep(500))
    .catch((err) => console.log(err.name));
