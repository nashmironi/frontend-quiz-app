import styles from "./Home.module.css";
import data from "../data.json";
import { Link } from "react-router-dom";


const Home = () => {
  

    return (
      <>
      
       <div className={styles.main}>
    
        <div className={styles.left}>
          <p className={styles.wl}>Welcome to the</p>
          <p className={styles.front}>Frontend Quiz!</p>
          <p className={styles.pic}>Pick a subject to get started.</p>
        </div>
        { 
      
        <div className={styles.right}>
        
          {data.quizzes.map((quizzes) => {
            return ( 
              <Link to={"/"+ quizzes.title.toLowerCase()} key={quizzes.title}
               className={styles.four} >
                <img src={quizzes.icon}></img>
                <span>{quizzes.title}</span>
                </Link>
            )
          })}
          
        </div> }
       </div>
       
       
      </>
    )
  }
  
  export default Home