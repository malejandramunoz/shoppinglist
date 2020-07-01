import React from 'react';
import './App.css';


class ShoppingItem {
  public name = "";
  public price = 0.0;
}

interface AppState {
  items: Array<ShoppingItem>;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any, state: AppState) {
    super(props, state);

    const pizza: ShoppingItem = {
      name: "Pizza",
      price: 4.5
    }
    
    const chips: ShoppingItem = {
      name: "Chips",
      price: 2.3
    }

    const soda: ShoppingItem = {
      name: "Diet Soda",
      price: 0.9
    }

    this.state = {items: [chips, pizza, soda]};
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          Shopping List
          <h1>Testing</h1>
          <p>Test</p>
        </header>
      </div>
    );
  }
}

export default App;
