const get = (url, options = { method: 'GET' }) => (
  new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  })
);

export default get;
