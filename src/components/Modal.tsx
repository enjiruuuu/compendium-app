import '../styles/general.scss';
import '../styles/Modal.scss';

export interface IModalData {
    header: string;
    bodyText: string;
    declineText: string;
    acceptText: string;
}

export default function Modal({ data, onClose, onAccept }: { data: IModalData, onClose: any, onAccept: any }) {
    function acceptAndClose(): void {
        onAccept();
        onClose();
    }

    return <div className="modal">
        <h3>{data.header}</h3>
        <p>{data.bodyText}</p>
        <div className="button-container">
            <button onClick={onClose} className="secondary">{data.declineText}</button>
            <button onClick={acceptAndClose} className="primary">{data.acceptText}</button>
        </div>
    </div>
}