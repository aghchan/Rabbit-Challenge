const fetch = require("node-fetch");
const url = "http://api.icndb.com/jokes/random/5?limitTo=[nerdy]";

fetch(url)
.then(response => {
    return response.json();
})
.then(json => {
    for (var i = 0; i < json.value.length; i++) {
      console.log("- " + json.value[i].joke);
    }
})
.catch(error => {
  console.log(error);
});

