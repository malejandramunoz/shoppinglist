import React from "react";
import "./App.css";

class ShoppingItem {
  public name = "";
  public price = 0.0;
  public quantity = 0;
}

interface AppState {
  items: Array<ShoppingItem>;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any, state: AppState) {
    super(props, state);
    const milk: ShoppingItem ={
      name: "Milk",
      price: 4.5,
      quantity: 1
    }
    this.state = { items: [milk] };
  }

  public render() {
    return (
      <div className="App">
        <h2>Shopping List</h2>
        <ul>
          {this.state.items.map((item) => (
            <li><input type="checkbox" />&nbsp;<label>
             {item.name}
              <br />
              Price: ${item.price}
              <br/>
              Quantity: {item.quantity}
            </label></li>
          ))}
        </ul>
        <table>
          <tr>
            <td>
              Adding to the list
              <form id="resetting" onSubmit={this.submitHandler}>
                <input
                  type="text"
                  placeholder="Enter name"
                  onChange={this.changeInputName}
                />
                <br/>
                <input
                  type="float"
                  placeholder="Enter the price"
                  onChange={this.changeInputPrice}
                />
                <br/>
                <input
                  type="number"
                  placeholder="Enter the quantity"
                  onChange={this.changeInputQuantity}
                />
                <br /> <button type="submit" onClick={this.reset}>Add to list</button>
              </form>
            </td>
            <td>
              To delete at item off the list
              <form onSubmit={this.deleteHandler}>
                <input
                  type="text"
                  placeholder="Item to delete"
                  onChange={this.deleteName}/>
                  <br/>
                  <button type="submit">Delete item</button>
                  
              </form>
            </td>
          </tr>
  
        </table>
      </div>
      
    );

  }
  private reset = (event: React.MouseEvent<HTMLButtonElement>) =>{
    
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

  private inputQuantity = "";
  private changeInputQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.inputQuantity = event.target.value;
    //console.log("Entering input quantity" + this.inputQuantity);
  };

  private submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    //console.log("Entering")
    const newItem: ShoppingItem = {
      name: this.inputName,
      price: parseFloat(this.inputPrice),
      quantity: parseInt(this.inputQuantity)
    };
    this.setState({
      items: this.state.items.concat(newItem),
    });
    
  };

  private nameToCrossoff = "";
  private crossoffName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.nameToCrossoff = event.target.value;
  };
  private crossoffHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  private nameToDelete = "";
  private deleteName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.nameToDelete = event.target.value;
  };
  private deleteHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  }
}

export default App;
