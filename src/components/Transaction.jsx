import { useState } from 'react';
import './Transaction.css';

function Transaction({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    onAddTransaction({ description, amount, type });

    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <section className="Transaction">
      <h2>Add Transaction</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="forms">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="forms">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="forms">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <button type="submit" className="btn">Done</button>
      </form>
    </section>
  );
}

export default Transaction;
