import { IAnimal } from "../interfaces/IAnimal";
import { Link } from "react-router-dom";

export default function Card({animal, id}: {animal: IAnimal, id: string} ) {
    return <div className="card">
        <Link to={`details/${id}`}>
            <img src={animal.thumbnail} alt="card-image"></img>
            <p>{animal.uiName}</p>
        </Link>
    </div>;
}