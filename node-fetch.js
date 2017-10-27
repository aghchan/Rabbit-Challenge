const fetch = require("node-fetch");
const url = "http://api.icndb.com/jokes/random/5?limitTo=[nerdy]";

fetch(url)
  .then(response => {
    response.json().then(json => {
      if (response.ok) {
        for (var i = 0; i < json.value.length; i++) {
          console.log(`- ${json.value[i].joke}`);
        }
      } else {
        throw Error(response.statusText);
      }
    }).catch(error => {
      console.log('Error occured - ' + error);
    });
  })
  .catch(error => {
    console.log('Error occured - ' + error);
  });

