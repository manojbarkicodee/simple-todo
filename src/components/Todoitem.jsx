import React from "react";
import styles from "./todo.module.css"
let Todoiteam=({iteamdata})=>{
    return (
<div className={styles.todo}>
    <p className={styles.text}>{iteamdata}</p>
    <input className={styles.input} name="iteam" type="radio" />
</div>
    )
}
export default Todoiteam