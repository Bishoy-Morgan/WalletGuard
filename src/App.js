import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import Footer from './Components/Footer';

function App() {
  return (
    <GlobalProvider >
        <main className='container'>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction /> 
        </main>
        <Footer />
    </GlobalProvider>
  );
}

export default App;
