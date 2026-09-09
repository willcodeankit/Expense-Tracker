import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import History from './components/History';
import Footer from './components/Footer';
import { useTransaction } from './hooks/usetransaction';

function App() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpense,
    balance,
  } = useTransaction();

  return (
    <>
      <Navbar />
      <Dashboard income={totalIncome} expense={totalExpense} balance={balance} />
      <Transaction onAddTransaction={addTransaction} />
      <History transactions={transactions} onDelete={deleteTransaction} />
      <Footer />
    </>
  );
}

export default App;
