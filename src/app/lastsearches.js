const LastSearch = (urls) => {


const handleSelection = (event) => console.log("Selected Term: " + event.target.value)
const getLastSearches = urls => urls;

const lastSearches = getLastSearches(urls);

return (
<>
  {/*  {lastSearches.map((item) => (
            <a class="badge badge-secondary" onClick={handleSelection}>{item}</a>
          ))} */}
       <span class="badge badge-pill badge-secondary">Secondary</span>
</>
)
}



export default LastSearch;