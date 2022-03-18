import InputWithLabel from "./inputwithlabel";
import LastSearch from "./lastsearches";

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit, urls }) => {
  return (
    <>
    <form onSubmit={onSearchSubmit} className='search-form'>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        <label class="search"><strong>Search:</strong></label>
      </InputWithLabel>
      <button type="submit" class="button button_large btn btn-success" disabled={!searchTerm}>
        Search
      </button>
    </form>
    </>
    
  );
};

export default SearchForm;
