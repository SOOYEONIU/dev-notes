import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';

let data = {
  name : "OO식당",
  address: {
    city: 'incheon',
    detail: 'somewhere',
    zipCode: 204023
  },
  menu: [{name: "rose pasta", price: 2000, category: "Pasta"}, {name: "garlic steak", price: 3000, category: "Steak"}]
}

const App:React.FC = () => {
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
}

export default App;
