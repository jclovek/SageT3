const InfoCard = ({ image, title, description, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <a href={link} className="card-link">Read more</a>
        </div>
    );
};

export default InfoCard;
