import './History.css';

function History({ transactions, onDelete }) {
  return (
    <section className="history">
      <h2>Transaction History</h2>

      <div className="transaction-list">
        {transactions.length === 0 && <p>No transactions yet.</p>}

        {transactions.map((t) => (
          <div className="transaction-item" key={t.id}>
            <div>
              <h3>{t.description}</h3>
              <p>{t.type === 'income' ? 'Income' : 'Expense'}</p>
            </div>

            <div>
              <span className={`transaction-amount ${t.type}`}>
                {t.type === 'income' ? '+' : '-'} ₹{t.amount}
              </span>
              <button onClick={() => onDelete(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default History;
