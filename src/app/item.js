
/* const Item = ({ item, onRemoveItem }) => (
    <div className="item">
     <li class="list-group-item" key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.content} | </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span><i class="bi bi-heart"></i></span>
      </li>
    </div>
  ); */

  const Item = ({ item, onRemoveItem }) => (
    <>
     <tr key={item.objectID}>
      <td>{item.content} | </td>
      <td>{item.author}</td>
      <td>{item.dateAdded}</td>
      <td><i class="bi bi-heart"></i></td>
      </tr>
    </>
  );


  export default Item;