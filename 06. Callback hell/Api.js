export const fetchData = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    //     console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      // console.log('✔', request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log("⛔ Can't fetch the data ");
      callback('⛔ could not fetch the data', undefined);
    }
  });
  request.open('GET', resource);
  // request.open('GET', 'todos.json');
  request.send();
};
