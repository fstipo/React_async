fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => {
    if (response.status === 200) {
      console.log('Resolved', response);
      return response.json();
    } else {
      console.log('⛔  Wrong resource URL');
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log('Rejected ' + err));
