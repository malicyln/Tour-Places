import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./card";



const Main = () => {
  return (
    <div className="card-container">
        {data.map((item, index)=> <Card {...item} key={index} /> )}
    </div>
  )
}

export default Main