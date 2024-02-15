import styles from "./Home.module.css";
import data from "../data.json";


const Home = () => {
  

    return (
      <>
      
       <div className='main'>
    
        <div className='left'>
          <p className='wl'>Welcome to the</p>
          <p className='front'>Frontend Quiz!</p>
          <p className='pic'>Pick a subject to get started.</p>
        </div>
        { 
        
        <div className='right'>

          {data.quizzes.map((quizzes) => {
            return ( 
              <div key={quizzes.title}
               className='four' >
                <img src={quizzes.icon}></img>
                <span>{quizzes.title}</span>
                </div>
            )
          })}
        </div> }
       </div>
       
       
      </>
    )
  }
  
  export default Home