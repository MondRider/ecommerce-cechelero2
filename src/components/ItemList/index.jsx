import './style.css'

function ItemList ({ item }) {
  return (
    <div className="ItemList">
      <p>{ item.name }</p>
    </div>
  );
}

export default ItemList;
