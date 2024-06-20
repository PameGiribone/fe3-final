import Button from '../Components/Button';
import Card from '../Components/Card';
import {useDentistaState} from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const { state, dispatch} = useDentistaState();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">     
       {state.users.map((item, index) => {          
        return <Card key={index} item={item}>
           <Button  onClick={() => {
              alert("Dentist added successfully")
              dispatch({type: "ADD_FAVORITE", payload: item})
            }}> 
             <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "20px"}} />
            </Button>
        </Card>}
      )}       
      </div>
    </main>
  );
};

export default Home;