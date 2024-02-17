import styles from "./html.module.css";
import data from "../data.json";
import { useState } from "react";


const Html = () => {
  const [kitxva,setKitxva] =useState(0);


    const htmlQuestion = data.quizzes[0];
    // console.log(htmlQuestion);
    const qurrentKitxva = htmlQuestion.questions[kitxva];
    
    console.log(qurrentKitxva);
    const clickHandler = () => {
    
    };
    return (
      <>
      
       <div className={styles.main}>
    
        <div className={styles.left}>

           <div>
            <p>
               {qurrentKitxva.question}; 
            </p>
           </div>
          
        </div>


        { 
      
        <div className={styles.right}>
          
          {data.quizzes.map((quizzes) => {
            return ( 
              <div key={quizzes.title}
               className={styles.four} >

                <span>{qurrentKitxva.options}</span>
                </div>
            )
          })}
          
           
        </div> }
        <div className="button"  onClick={clickHandler}>submit</div>
       </div>
       
      </>
    )
  }
  
  export default Html