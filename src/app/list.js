import Item from "./item";
import React from "react";
import { sortBy } from "lodash";

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState({ sortKey: "NONE", isReverse: false });

  let sortedList = list;
  let arrowClass = null;
  const handleSort = (event) => {
    let sortKey = event.target.id;
    if (sortKey)
    {   
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey: sortKey, isReverse: isReverse });
    }
  };

  const SORTS = {
    NONE: (list) => list,
    author: (list) => sortBy(list, "author"),
    content: (list) => sortBy(list, "content"),
    date: (list) => sortBy(list, "dateAdded"),
  };

  const sortFunction = SORTS[sort.sortKey];
  sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);
    arrowClass = sort.isReverse ? "bi bi-arrow-up" : "bi bi-arrow-down";
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <span id="content" onClick={handleSort}>Content</span>
              <i class={arrowClass}></i>
            </th>
            <th  scope="col">
              <span id="author" onClick={handleSort}>Author</span>
              <i class={arrowClass}></i>
            </th>
            <th  scope="col" >
            <span id="date" onClick={handleSort}>Date Added</span>
              <i class={arrowClass}></i>
            </th>
            <th scope="col">
            <span>Wishlist</span>
              </th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((item) => (
            <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
