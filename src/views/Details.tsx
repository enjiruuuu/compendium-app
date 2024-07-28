import { Link, useLocation, useParams } from "react-router-dom";
import Tag from "../components/Tag";
import { IAnimalMeta } from "../interfaces/IAnimal";
import '../styles/Details.scss';

export default function Details() {
    const { id } = useParams();
    const animalMeta: IAnimalMeta = useLocation().state;
    const markup = { __html: animalMeta.description };

    let classes: string = "";
    if (animalMeta.seen) {
        classes += "seen";
    }

    return <div className="details">
        <div className="details-header">
            <Link to={`/`}>Back</Link>
            <h1>{animalMeta.uiName}</h1>
            <Tag tagTitle={animalMeta.seen ? 'Seen' : 'Unseen'}></Tag>
        </div>
        <img className={classes} src={animalMeta.thumbnail} alt={animalMeta.uiName}></img>
        <div className="description">
            <h3>Description</h3>
            <div dangerouslySetInnerHTML={markup}></div>
        </div>
        {
            animalMeta.seen &&
            <div className="sighting-locations">
                <h3>Personal sightings</h3>
                {animalMeta.locations?.map((location) => (
                    <p>{location}</p>
                ))}
            </div>
        }
        {
            // maximum of 8 photos allowed in gallery
            (animalMeta.seen && animalMeta.gallery) &&
            <div className="gallery">
                <h3>Personal gallery</h3>
                <div>
                    {animalMeta.gallery?.map((url) => (
                        <div className="photo">
                            <div style={{
                                backgroundImage: `url(${url})`
                            }}></div>
                        </div>
                    ))}
                </div>
            </div>
        }
    </div>;
}