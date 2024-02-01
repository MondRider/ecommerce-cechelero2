import './style.css'
import ItemList from '../ItemList'

const produtos = [ 
  {
    id: 1,
    name: 'camiseta',
    price: 32.90,
  },
  {
    id: 2,
    name: 'produto 2',
    price: 0.00,
  },
  {
    id: 3,
    name: 'produto 3',
    price: 0.00,
  },
  {
    id: 4,
    name: 'produto 4',
    price: 0.00,
  },
  {
    id: 5,
    name: 'produto 5',
    price: 0.00,
  },
  {
    id: 6,
    name: 'produto 6',
    price: 0.00,
  },
  {
    id: 7,
    name: 'produto 7',
    price: 0.00,
  },
  {
    id: 8,
    name: 'produto 8',
    price: 0.00,
  },
  {
    id: 9,
    name: 'produto 9',
    price: 0.00,
  },
  {
    id: 10,
    name: 'produto 10',
    price: 0.00,
  },
  {
    id: 11,
    name: 'produto 11',
    price: 0.00,
  }
 ]

function ItemListContainer ({  }) {
  return (
    <div className="ItemListContainer">
      {
        produtos.map((produto) => <ItemList item={produto} />)
      }
    </div>
  );
}

export default ItemListContainer;
