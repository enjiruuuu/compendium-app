import { Link, useLocation, useParams } from "react-router-dom";
import Tag from '../components/Tag';
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
                <p>Hawaii</p>
            </div>
        }
        {
            animalMeta.seen &&
            <div className="gallery">
                <h3>Personal gallery</h3>
                <div>
                    <div className="photo">
                        <div style={{
                            backgroundImage: `url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_93767916.jpg?crop=0%2C83%2C4000%2C2500&wid=1640&hei=1025&scl=2.4390243902439024)`
                        }}></div>
                    </div>
                    <div className="photo">
                        <div style={{
                            backgroundImage: `url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_93767916.jpg?crop=0%2C83%2C4000%2C2500&wid=1640&hei=1025&scl=2.4390243902439024)`
                        }}></div>
                    </div>
                    <div className="photo">
                        <div style={{
                            backgroundImage: `url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_93767916.jpg?crop=0%2C83%2C4000%2C2500&wid=1640&hei=1025&scl=2.4390243902439024)`
                        }}></div>
                    </div>
                    <div className="photo">
                        <div style={{
                            backgroundImage: `url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_93767916.jpg?crop=0%2C83%2C4000%2C2500&wid=1640&hei=1025&scl=2.4390243902439024)`
                        }}></div>
                    </div>
                    <div className="photo">
                        <div style={{
                            backgroundImage: `url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_93767916.jpg?crop=0%2C83%2C4000%2C2500&wid=1640&hei=1025&scl=2.4390243902439024)`
                        }}></div>
                    </div>
                </div>
            </div>
        }
    </div>;
}