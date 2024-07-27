export default function Tag({ tagTitle }: { tagTitle: string }) {
    return <div className="tag">
        <span>{tagTitle}</span>
    </div>;
}