export const fetchData = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    //     console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log('✔', request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      // console.log("⛔ Can't fetch the data ");
      callback('⛔ could not fetch the data', undefined);
    }
  });
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  request.send();
};
