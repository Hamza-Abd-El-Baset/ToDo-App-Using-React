import { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Items from './components/Items/Items';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      items:[{id:"1",title:"Writing Cv", description:"Writing CV on word"},
             {id:"2",title:"Washing Dishes", description:"Washing all dishes"},
             {id:"3",title:"Cleaning Floors", description:"Cleaning appartment floors"},
            ]
    }
  }

  deleteItem=(id)=>{
    let items=this.state.items
    items=items.filter(item=>item.id!==id)
    this.setState({items})
  }

  addItem=(item)=>{
    let items=this.state.items
    
    item.id=parseInt(items[items.length-1].id)+1
    console.log(item)

    items.push(item)
    this.setState({items})
  }

  render(){
    return (
      <div className="App">
        <h2>To-do List</h2>
        <Items items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
