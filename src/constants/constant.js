import fetchQuotes from "../data/quotes";

const Constants = {
  title: 'Quotes',
  endpoints: {
    FETCH_QUOTES_API: "http://staging.quotable.io/quotes",
    SEARCH_API: "https://api.quotable.io/search/quotes?query=",
  },
  storiesDispatcher: {
    INIT: "STORIES_FETCH_INIT",
    SUCCESS: "STORIES_FETCH_SUCCESS",
    FAILURE: "STORIES_FETCH_FAILURE",
    REMOVE: "REMOVE_STORY",
  },
};

export default Constants;
