import React , {Component} from "react"

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

        if(this.state.title!==""&&this.state.description!=="")
        {
            this.props.addItem(this.state)
            this.setState(
                {
                    title:"",
                    description:"",
                }
            )
        }
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" className="title" value={this.state.title} placeholder="Enter Title" onChange={this.handleChange}/>
                    <input type="text" name="description" className="description" value={this.state.description} placeholder="Enter Description" onChange={this.handleChange}/>
                    <input type="submit" className="action" value="Add Task"/>
                </form>
            </div>
        )
    }
}

export default AddItem