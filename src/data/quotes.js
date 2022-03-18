import axios from "axios";

const options = {
  method: 'GET',
  url: 'http://staging.quotable.io/quotes',
  url2: 'https://jsonplaceholder.typicode.com/users/1'
};

const fetchQuotes = fetch(options.url) //1
  .then((response) => response.json()) //2
  .then((item) => {
    console.log(item.results); //3
  });

export default fetchQuotes;