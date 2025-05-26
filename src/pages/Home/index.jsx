import Banner from "../../components/Banner"
import { Menu } from "../../components/Menu"
import "./styles.css"

function Home(){
 return (
    <div className="home">

        <Menu />
        <Banner />
        <div className="home-principal">

        </div>
        
    </div>
 )   
}
export default Home