import React from "react";
import Todoiteam from "./Todoitem";
import styles from "./todo.module.css"

let Todolist=({data})=>{
    return (
    //    <div>
           data.map((el)=>{
return <Todoiteam className={styles.todo} key={el.id} iteamdata={el.value}/>
})
    //    </div>

    )
}
export default Todolist