//main page run with "npm run dev" in terminal
/* 
main css colors:  
    #B9E3C6
    #FFEAEE
    #D81E5B
    #23395B
    #FFFD98
*/
import "./css/Global.css";
//import RandomPokemon from "./RandomPokemon";
import TopBar from  "./TopBar.js";
import FoodCard from "./FoodCard.js";

export default function Home() {
  return (
    <>
    <TopBar/>
    <FoodCard name="pizza" price={2.99} src="https://thumb.ac-illust.com/80/80ab92336666da6aa961462289dc6508_t.jpeg"/>
    </>
  );
  
}
