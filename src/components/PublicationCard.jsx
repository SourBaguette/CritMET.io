import './PublicationCard.css';

export default function PublicationCard({ title, content, image }){

    return (
        <>
            <div className="PublicationCardContainer">
            <div id="PublicationCardWhole">
                <p className="PublicationCardTitle">{title}</p>
                <p className="PublicationCardContent">{content}</p>
            </div>
                <img className="PublicationCardImage" src={image} />
            </div>
            <hr/>
        </>
    )
}   
