export const fetchData = (resource) => {
  return new Promise((resolved, rejected) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      //     console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // console.log('✔', request.responseText);
        resolved(data);
      } else if (request.readyState === 4) {
        // console.log("⛔ Can't fetch the data ");
        rejected('⛔ could not fetch the data');
      }
    });
    request.open('GET', resource);
    // request.open('GET', 'todos.json');
    request.send();
  });

  // const getSomething = () => {
  //   return new Promise((resolved, rejected) => {
  //     // fetch data
  //     // resolved('✅ Get data');
  //     rejected('⛔ ERROR');
  //   });
};

// getSomething()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => {
    console.log('Promise 1 is resolved:', data);
    return fetchData('https://jsonplaceholder.typicode.com/todos/2').then(
      (data) => {
        console.log('Promise 2 is resolved:', data);
        return fetchData('https://jsonplaceholder.typicode.com/todos/3').then(
          (data) => {
            console.log('Promise 3 is resolved:', data);
          }
        );
      }
    );
  })
  .catch((err) => console.log('Promise is rejected', err));
