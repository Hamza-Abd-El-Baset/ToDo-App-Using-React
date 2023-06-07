import React from "react";
import "./Items.css";

const Items =(props)=>{

    const {items,deleteItem}=props

    const ListItems=items.length>0?(
        items.map(item=>{
        return(
            <div key={item.id} className="item">
                <span className="title">{item.title}</span>
                <span className="description">{item.description}</span>
                <span className="action delete" onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    ): (
        <p>There are no tasks now</p>
    )
    return(
        <div className="list">
            <div className="listHeader">
                <span className="title listHead">Title</span>
                <span className="description listHead">Description</span>
                <span className="action listHead">Action</span>
            </div>
            <div className="listItems">
            {ListItems}
            </div>
            

        </div>
    )
}

export default Items