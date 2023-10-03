import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './CodetrainImage.png'
import './index.css';
import './App.css';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Bujet from './components/Bujet';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './Context/AppContext';


const App = () => {
  return (
    <AppProvider>

      <div className='container'>
        <header>
          <h3>Expense Tracker</h3>
          <img src={logo} style={{ width: '8.5rem' }} alt='Codetrain Logo'></img>
        </header>

        <div className='row mt-3'>
          <div className='col-sm'>
            <Bujet />
          </div>

          <div className='col-sm'>
            <Remaining />
          </div>

          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>

        <h3 className='mt-3'>Expenses</h3>

        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>

        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
          <div className='col-sm'>
            <AddExpense />
          </div>
        </div>

      </div>

    </AppProvider>

  );
}

export default App;
