import DogError from '../assets/DogError.jpeg'

const Error = () => {
    return (

      <div
        style={{ 
          color: 'white',
          display: 'flex', 
          flexDirection: 'column',  
          justifyContent: 'center', 
          alignItems: 'center',     
          height: '100vh'           
        }}
      >

        <h1>Error - No Movies Found</h1>

        <img 
          src={DogError} 
          alt="An IT Professional" 
          style={{ 
            height: '40vh',
            borderRadius: '15px',        
          }}
        />
      
    </div>
    );
  };
  
  export default Error;