import '../styles/general.scss';
import '../styles/Modal.scss';
import Background from './Background';

export interface IModalData {
    header: string;
    bodyText?: string;
    declineText: string;
    acceptText: string;
}

export default function Modal({ data, onClose, onAccept, children, acceptButtonDisabled }: { data: IModalData, onClose: any, onAccept: any, children?: any, acceptButtonDisabled?: boolean }) {
    function acceptAndClose(): void {
        onAccept();
        onClose();
    }

    return <>
        <Background></Background>
        <div className="modal">
            <h3>{data.header}</h3>

            {
                data.bodyText && <p>{data.bodyText}</p>
            }

            {children}
            <div className="button-container">
                <button onClick={onClose} className="secondary">{data.declineText}</button>
                <button onClick={acceptAndClose} disabled={acceptButtonDisabled} className="primary">{data.acceptText}</button>
            </div>
        </div>
    </>
}