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
    this.state = {items: []};
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          Shopping List
          <ul>
          {this.state.items.map(item => (
            <li>{item.name}  {item.price}</li>
          ))}
          </ul>
          <form onSubmit = {this.submitHandler}>
            <input type="text" placeholder="Enter name"  onChange={this.changeInputName}/>&nbsp;
            &nbsp;<input type="number" placeholder="Enter the price" onChange={this.changeInputPrice} />
            <br/> <button type="submit">Add</button>
          </form>
        </header>
      </div>
    );
  }
  private inputName = "";
  private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputName = event.target.value;
    //console.log("Entering input name" + this.inputName);
  };

  private inputPrice = "";
  private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputPrice = event.target.value;
    //console.log("Entering input price" + this.inputPrice);
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    //console.log("Entering")
    const newItem: ShoppingItem = {
      name: this.inputName,
      price: parseFloat(this.inputPrice)
    }
    this.setState({
      items: this.state.items.concat(newItem)
    });
  };
}



export default App;
