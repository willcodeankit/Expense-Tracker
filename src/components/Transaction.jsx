import './Transaction.css'
function Transaction (){
    return (
        <section className="Transaction">
            <h2>Add Transaction</h2>

        <form className="form">
            <div className="forms">
                <label>Description</label>
                 <input type="text" name="description" placeholder="Enter Description"></input>
            </div>
            <div className="forms">
                <label>Amount</label>
                <input type="number" name="amount" placeholder="Enter Amount"></input>
            </div>
            <div className="forms">
                <label>Type</label>
                <select>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                </select>
            </div>
            <button type="Submit" className="btn">Done</button>

        </form>
        </section>
    )
}
export default Transaction