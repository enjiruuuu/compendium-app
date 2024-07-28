import { Link } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal";
import { ISeen } from "../interfaces/ISeen";
import '../styles/Card.scss';

export default function Card({ animal, id, seen, seenData }: { animal: IAnimal, id: string, seen: boolean, seenData: ISeen }) {
    let classes: string = 'card';

    if (seen) {
        classes += ' seen';
    }


    return <div className={classes}>
        <Link to={`details/${id}`} state={{ ...animal, seen, id, ...seenData }}>
            <div className="image" style={{
                backgroundImage: `url(${animal.thumbnail})`
            }}>
            </div>
            <p>{animal.uiName}</p>
        </Link>
    </div>;
}