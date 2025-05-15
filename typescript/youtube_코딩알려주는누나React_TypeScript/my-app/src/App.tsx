import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address ,Restaurant } from './model/resturant';
import BestMenu from './BestMenu';

let data:Restaurant = {
  name : "OO식당",
  category: 'western',
  address: {
    city: 'incheon',
    detail: 'somewhere',
    zipCode: 204023
  },
  menu: [{name: "rose pasta", price: 2000, category: "Pasta"}, {name: "garlic steak", price: 3000, category: "Steak"}]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  }
  // setMyRestaurant(4) : Error발생

  const showBestMenuName = (name: string) => { 
    return name;
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={ changeAddress } />
      <BestMenu name='불고기피자' category='피자' showBestMenuName={ showBestMenuName} />
    </div>
  );
}

export default App;
