import './Dashboard.css';

function Dashboard({ income, expense, balance }) {
  return (
    <section className="section">
      <div className="card income-card">
        <p>Total income</p>
        <h2>₹ {income}</h2>
      </div>

      <div className="card expense">
        <p>Expenses</p>
        <h2>₹ {expense}</h2>
      </div>

      <div className="card balance">
        <p>BALANCE</p>
        <h2>₹ {balance}</h2>
      </div>
    </section>
  );
}

export default Dashboard;
