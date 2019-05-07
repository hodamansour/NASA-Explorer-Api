fetch(url)
then((response) => {
  return response.json();
})
.then((data) => {
  console.log('data', data)
})
