import { Link } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal";
import '../styles/Card.scss';

export default function Card({ animal, id, seen }: { animal: IAnimal, id: string, seen: boolean }) {
    let classes: string = 'card';

    if (seen) {
        classes += ' seen';
    }


    return <div className={classes}>
        <Link to={`details/${id}`} state={{ ...animal, seen, id }}>
            <div className="image" style={{
                backgroundImage: `url(${animal.thumbnail})`
            }}>
            </div>
            <p>{animal.uiName}</p>
        </Link>
    </div>;
}