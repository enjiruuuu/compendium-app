import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Modal, { IModalData } from "../components/Modal";
import { IAnimalMeta } from "../interfaces/IAnimal";
import '../styles/Details.scss';
import '../styles/general.scss';

export default function Details() {
    const { id } = useParams();
    const animalMeta: IAnimalMeta = useLocation().state;
    const markup = { __html: animalMeta.description };

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isSeen, setIsSeen] = useState(animalMeta.seen);

    let classes: string = "";
    if (isSeen) {
        classes += "seen";
    }

    function onClickMarkButton(): void {
        if (isSeen) {
            setShowConfirmation(true);
        }
        else {
            setIsSeen(true);
        }
    }

    function onCloseConfirmationModal(): void {
        setShowConfirmation(false);
    }

    function onAcceptConfirmationModal(): void {
        setIsSeen(false);
        onCloseConfirmationModal();
    }

    const markText: string = isSeen ? "Mark as unseen" : "Mark as seen";

    const confirmationText: IModalData = {
        header: "Mark as unseen",
        bodyText: "Are you sure you want to perform this action? This will remove all logged locations and gallery images.",
        declineText: 'Cancel',
        acceptText: "Mark as unseen",
    }

    return <>
        <div className="details">
            <div className="details-header">
                <Link to={`/`}>Back</Link>
                <h1>{animalMeta.uiName}</h1>
                <button onClick={onClickMarkButton} className={isSeen ? 'secondary' : 'primary'}>{markText}</button>
            </div>
            <img className={classes} src={animalMeta.thumbnail} alt={animalMeta.uiName}></img>
            <div className="description">
                <h3>Description</h3>
                <div dangerouslySetInnerHTML={markup}></div>
            </div>
            {
                isSeen &&
                <div className="sighting-locations">
                    <h3>Personal sightings</h3>
                    {animalMeta.locations?.map((location, index) => (
                        <p key={index}>{location}</p>
                    ))}
                </div>
            }
            {
                // maximum of 8 photos allowed in gallery
                (isSeen && animalMeta.gallery) &&
                <div className="gallery">
                    <h3>Personal gallery</h3>
                    <div>
                        {animalMeta.gallery?.map((url, index) => (
                            <div className="photo" key={index}>
                                <div style={{
                                    backgroundImage: `url(${url})`
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
        {
            showConfirmation && <Modal data={confirmationText} onClose={onCloseConfirmationModal} onAccept={onAcceptConfirmationModal}></Modal>
        }
    </>;
}