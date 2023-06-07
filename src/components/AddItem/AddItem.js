import React , {Component} from "react"
import "./AddItem.css"

class AddItem extends Component{

    constructor(props){
        super(props)
        this.state={
            title:"",
            description:"",
        }
    }

    handleChange=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addItem(this.state)
        this.setState(
            {
                title:"",
                description:"",
            }
        )

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.handleChange}/>
                    <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
                    <input type="submit" value="Add Task"/>
                </form>
            </div>
        )
    }
}

export default AddItem