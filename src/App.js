import { Component } from 'react';

import AddItem from './components/AddItem/AddItem';
import Items from './components/Items/Items';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      items:[]
    }
  }

  deleteItem=(id)=>{
    let items=this.state.items
    items=items.filter(item=>item.id!==id)
    this.setState({items})
  }

  addItem=(item)=>{
    let items=this.state.items
    let Length=items.length
    if(Length===0)
    {
      item.id=1
    }
    else{
      item.id=parseInt(items[Length-1].id)+1
    }
    
    console.log(item)

    items.push(item)
    this.setState({items})
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">To-do List</h1>
        <Items items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
