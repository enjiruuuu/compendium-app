import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Form from "../components/Form";
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
    const [isModalConfirmationButtonDisabled, setModalConfirmationButtonDisabled] = useState(true);

    let classes: string = "";
    if (isSeen) {
        classes += "seen";
    }

    function onClickMarkButton(): void {
        setShowConfirmation(true);
    }

    function onCloseConfirmationModal(): void {
        setShowConfirmation(false);
    }

    function onAcceptMarkAsUnseenConfirmationModal(): void {
        setIsSeen(false);
        onCloseConfirmationModal();
    }

    function onAcceptSeenConfirmationModal(): void {
        setIsSeen(true);
        onCloseConfirmationModal();
    }

    function setModalConfirmationButtonDisabledFromChild(isDisabled: boolean): void {
        setModalConfirmationButtonDisabled(isDisabled);
    }

    const markText: string = isSeen ? "Mark as unseen" : "Mark as seen";

    const markAsUnseenConfirmationText: IModalData = {
        header: "Mark as unseen",
        bodyText: "Are you sure you want to perform this action? This will remove all logged locations and gallery images.",
        declineText: 'Cancel',
        acceptText: "Mark as unseen",
    }

    const markAsSeenConfirmationText: IModalData = {
        header: "Mark as seen",
        declineText: 'Cancel',
        acceptText: "Mark as seen",
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
                isSeen &&
                <div className="gallery">
                    <h3>Personal gallery</h3>
                    {
                        (animalMeta.gallery) && <div>
                            {animalMeta.gallery?.map((url, index) => (
                                <div className="photo" key={index}>
                                    <div style={{
                                        backgroundImage: `url(${url})`
                                    }}></div>
                                </div>
                            ))}
                        </div>
                    }
                    {
                        (!animalMeta.gallery) && <button className="primary">Add photos</button>
                    }
                </div>
            }
        </div>
        {
            (showConfirmation && isSeen) && <Modal data={markAsUnseenConfirmationText} onClose={onCloseConfirmationModal} onAccept={onAcceptMarkAsUnseenConfirmationModal}></Modal>
        }
        {
            (showConfirmation && !isSeen) && <Modal data={markAsSeenConfirmationText} onClose={onCloseConfirmationModal} onAccept={onAcceptSeenConfirmationModal} acceptButtonDisabled={isModalConfirmationButtonDisabled}>
                <Form onSendInputStatus={setModalConfirmationButtonDisabledFromChild}></Form>
            </Modal>
        }
    </>;
}