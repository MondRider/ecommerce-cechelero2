import './style.css'
import CartWidget from '../CartWidget';
function Navbar() {
  return (
    <div className="Navbar">
      <label className='logo'>
        Placeholder
      </label>

      <div className='list'>
        <ul>
          <li className='active'>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
          <li>Feedback</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
