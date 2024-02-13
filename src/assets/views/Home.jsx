import styles from "./Home.module.css";



const Home = () => {
  

    return (
      <>
      
       <div className='main'>
        <div className='fl'>
        <div className='left'>
          <p className='wl'>Welcome to the</p>
          <p className='front'>Frontend Quiz!</p>
          <p className='pic'>Pick a subject to get started.</p>
        </div>
        <div 
        
        className='right'>

          {data.map((quizzes) => {
            return ( 
              <div key={quizzes.data}
               className='main' >
                <img src={quizzes.icon}></img>
                <span>{quizzes.title}</span>
                </div>
            )
          })}
        </div>
       </div>
       </div>
       
      </>
    )
  }
  
  export default Home