import "./History.css";

function History() {
  return (
    <section className="history">
      <h2>Transaction History</h2>

      <div className="transaction-list">

        <div className="transaction-item">
          <div>
            <h3>Salary</h3>
            <p>Income</p>
          </div>

          <div>
            <span className="transaction-amount income">
              + ₹30,000
            </span>
            <button>Delete</button>
          </div>
        </div>

        <div className="transaction-item">
          <div>
            <h3>Groceries</h3>
            <p>Expense</p>
          </div>

          <div>
            <span className="transaction-amount expense">
              - ₹2,000
            </span>
            <button>Delete</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default History;