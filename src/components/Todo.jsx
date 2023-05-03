

import React from "react";
import { BsPersonAdd } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoIosConstruct } from 'react-icons/io';
// import { FcStart } from 'react-icons/fc';


import "./Style.css"; 

class Todo extends React.Component{
    constructor(){
        super()
this.state=({
    text:"",
    arr:[

    ]
    
})
}


   //fb =>first 
    componentDidMount(){
        // this.setState({}) //render
        //life cycle =>api 
        // console.log("componenet did mount")
        let data = localStorage.getItem("Todo_List")

        //parse string to obj
        // v=10
      if(data!=null){

        this.state.arr= JSON.parse(data)//todo =>data 

        //render 
        this.setState({
           
        })

      }  
    }

add=()=>{
    if(this.state.text!=""){
        let obj1 ={
            title :this.state.text,
            no : 0
        }
    this.state.arr = [...this.state.arr,obj1]

        this.setState({

            
             text:""
          })
    }
    
    localStorage.setItem("Todo_List",JSON.stringify(this.state.arr))      
}

del=(run)=>{
    console.log(run)

    
    let list= this.state.arr.filter((i,v)=>v!=run)
this.setState({
    arr:list
})
}



handleChange=(e)=>{
    this.setState({
        text : e.target.value
    })
    
}

edit=(index)=>{
    // console.log(index)


    for(var i=0;i<this.state.arr.length;i++){
this.state.arr[i].no=0
    }
    this.state.arr[index].no=1
    this.setState({
     
    })
    this.setState({})
   

}




setnewtext=(val,ind)=>{
 this.state.arr[ind].title=val
    this.setState({
      
    })


}


update = (i)=>{
    this.state.arr[i].no=0

    localStorage.setItem("Todo_List",JSON.stringify(this.state.arr))

    this.setState({
      
    })
}

render(){
    return(
<>

<div id="div1">
<h1 id="h11">Todo List</h1>

<input type="text" value={this.state.text} onChange={(e)=>this.handleChange(e)} />
<button onClick={()=>this.add()}><BsPersonAdd/></button> <br />
<ol style={{listStyle:"none"}} id={"oderlist"}>
{
    this.state.arr.map((v,i)=>{
    return    (

        v.no == 0 ?
        <li ><i  onClick={()=>this.edit(i)}><IoIosConstruct/></i><span> </span><i id="add"  onClick={()=>this.del(i)}  style={{color:"red"}}> <AiOutlineDelete/> </i>  {v.title} 
        
    
        </li> 
        :
        <li key={i} style={{listStyle:"none",margin:12+"px"}}>
                             
                             <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
                             <button onClick={()=>this.update(i)}>update</button>
                        

                           </li> 
    

    )    

      
    })
}
</ol>
</div>

</>



    )
}





}export default Todo



