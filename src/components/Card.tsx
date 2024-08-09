import { Link } from "react-router-dom";
import { IAnimalsApiResponse } from "../api/animalsApi";
import { ISightingData } from "../api/sightingsApi";
import '../styles/Card.scss';

export default function Card({ animal, id, seen, seenData }: { animal: IAnimalsApiResponse, id: string, seen: boolean, seenData: ISightingData }) {
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