
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRjNzc2NmZkZGUyZjAwMTVlZjQ5NjUiLCJpYXQiOjE2MzI0MDEyNTQsImV4cCI6MTYzMzYxMDg1NH0.VMukG9Igd9jOg79SsFCMjaiM1E8IS9mBxfixDgDdhgM ")


  // 'GET'
  const getRequest = () => {

  let requestOptions = {
    "method": 'GET',
    "headers": myHeaders,
    "redirect": 'follow'
  };
  
  fetch("https://striveschool-api.herokuapp.com/api/movies", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}





  // 'POST'

  const postRequest = () => {
    // myHeaders.append("Content-Type", "application/json")

    let raw = JSON.stringify({
      "name": "Get Out",
      "description": "Now that Chris and his girlfriend, Rose, have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries leads him to a truth that he never could have imagined.",
      "category": "horror",
      "imageUrl": "<https://i1.wp.com/www.artscommented.com/wp-content/uploads/2018/02/Get-Out-movie.jpg?fit=1013%2C596&ssl=1>"
    })

    let requestOptions = {
      "method": 'POST',
      "headers": myHeaders,
      "body": raw,
      "redirect": 'follow'
    }

  fetch("https://striveschool-api.herokuapp.com/api/movies", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
  }





window.onload = () => {
  getRequest()
  postRequest()

}