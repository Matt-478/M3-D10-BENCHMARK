
window.onload = () => {
  
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRjNzc2NmZkZGUyZjAwMTVlZjQ5NjUiLCJpYXQiOjE2MzI0MDEyNTQsImV4cCI6MTYzMzYxMDg1NH0.VMukG9Igd9jOg79SsFCMjaiM1E8IS9mBxfixDgDdhgM ");


var requestOptions = {
  "method": 'GET',
  "headers": myHeaders,
  "redirect": 'follow'
};

fetch("https://striveschool-api.herokuapp.com/api/movies", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))


}