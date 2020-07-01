import React from 'react';
import './App.css';

// eslint-disable-next-line 
class ShoppingItem {
  public name = "";
  public price = 0.0;
}

interface AppState {
  items: Array<string>;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any, state: AppState) {
    super(props, state);
    this.state = {items: []};
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Testing</h1>
          <p>Test</p>
        </header>
      </div>
    );
  }
}

export default App;
