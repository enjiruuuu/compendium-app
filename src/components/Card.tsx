import { Link } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal";
import '../styles/Card.scss';

export default function Card({ animal, id }: { animal: IAnimal, id: string }) {
    return <div className="card">
        <Link to={`details/${id}`}>
            <div className="image" style={{
                backgroundImage: `url(${animal.thumbnail})`
            }}>
            </div>
            <p>{animal.uiName}</p>
        </Link>
    </div>;
}