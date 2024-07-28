import '../styles/Form.scss';

export default function Form({ onSendInputStatus }: { onSendInputStatus: any }) {

    function sendInputStatusToParent(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target?.value.trim() !== "") {
            onSendInputStatus(false);
        }
        else {
            onSendInputStatus(true);
        }
    };

    return <form className="form">
        <fieldset>
            <label htmlFor="sighting-locations">Sighting locations</label>
            <input id="sighting-locations" onChange={sendInputStatusToParent}></input>
        </fieldset>
    </form>
}