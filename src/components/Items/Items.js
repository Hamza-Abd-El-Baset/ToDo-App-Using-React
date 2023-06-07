import React from "react";
import "./Items.css";

const Items =(props)=>{

    const {items,deleteItem}=props

    const ListItems=items.length>0?(
        items.map(item=>{
        return(
            <div key={item.id} className="item">
                <span>{item.title}</span>
                <span>{item.description}</span>
                <span onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    ): (
        <p>There are no taks yet</p>
    )
    return(
        <div>
            <div>
                <span>Title</span>
                <span>Description</span>
                <span>Delete</span>
            </div>
            
            {ListItems}

        </div>
    )
}

export default Items