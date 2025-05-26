import Banner from "../../components/Banner"
import Cards from "../../components/Cards"
import { Menu } from "../../components/Menu"
import "./styles.css"

function Home(){
 return (
    <div className="home">

        <Menu />
        <Banner />
        <Cards />
        <Menu />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        
    </div>
 )   
}
export default Home