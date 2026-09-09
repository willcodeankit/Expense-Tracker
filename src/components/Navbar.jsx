import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar">
        <img src="/expense-logo.png" alt="expense logo" />
        <h1>Expense Tracker</h1>
      </div>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
