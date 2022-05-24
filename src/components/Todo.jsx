import React,{useState} from "react";
import Todolist from "./Todolist";
import styles from "./todo.module.css"
let Todo=()=>{
const [value1,setvalue]=useState("")
const [todolist,settodolist]=useState([])
let getvalue=(e)=>{
setvalue(e.target.value)

}
    return (
        <div>
           {/* {value1.length!==0 ?: null} */}
           <Todolist data={todolist}/>
          
        <input className={styles.toenter} value={value1} onChange={getvalue}  type="text" placeholder="Write Something" />
        <button className={styles.toadd}  onClick={()=>{
            // console.log(value)
            let obj={id:Date.now(),value:value1}
if(value1.length!==0){
settodolist([...todolist,obj])
}
// showlist(todolist)
            setvalue("")
        }}>+</button> 
       
        </div>
    )
}
export default Todo