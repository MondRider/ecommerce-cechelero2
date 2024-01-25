import './style.css'

function ItemListContainer ({ greeting }) {
  return (
    <div className="ItemListContainer">
      <p>{ greeting }</p>
    </div>
  );
}

export default ItemListContainer;
