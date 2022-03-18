import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import useSemiPersistentState from "./hooks/useSemiPersistentHook";
import InputWithLabel from "./app/inputwithlabel";
import List from "./app/list";
import storiesReducer from "./app/storiesdispatcher";
import Constants from "./constants/constant";
import axios from "axios";
import SearchForm from "./app/searchForm";

const API_ENDPOINT = Constants.endpoints.SEARCH_API;

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");
  const [url, setUrl] = useSemiPersistentState("url", "");

  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

const onClickColumn = (event) => {

console.log(event);
console.dir(event);
switch(event.target.id){
  case 'author':
  stories.sort();
  break;
  default:
    throw new Error();
}
}

  // Async Await implementation pending
  const handleSearchQuotes2 = React.useCallback(async () => {
    dispatchStories({ type: Constants.storiesDispatcher.INIT });

    try {
      const result = await axios.get(`${API_ENDPOINT}${searchTerm}`);
      dispatchStories({
        type: Constants.storiesDispatcher.SUCCESS,
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: Constants.storiesDispatcher.FAILURE });
    }
  }, [url]);

  const handleSearchQuotes = React.useCallback(async () => {
    if (!searchTerm || searchTerm.length < 3) return;
    dispatchStories({ type: Constants.storiesDispatcher.INIT });

    const result = await axios.get(url);

    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        dispatchStories({
          type: Constants.storiesDispatcher.SUCCESS,
          payload: result.results,
        });
      })
      .catch(() =>
        dispatchStories({ type: Constants.storiesDispatcher.FAILURE })
      );
  }, [url]);

  React.useEffect(() => {
    handleSearchQuotes();
  }, [handleSearchQuotes]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: Constants.storiesDispatcher.REMOVE,
      payload: item,
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };

  const searchedStories = stories.data.filter((story) =>
    story.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="container">
      <h1>{Constants.title}</h1>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearch}
        onSearchSubmit={handleSearchSubmit}
      />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        
          <List list={stories.data} onRemoveItem={handleRemoveStory} />
       
      )}
    </div>
  );
};

export default App;
