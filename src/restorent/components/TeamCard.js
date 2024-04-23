import '../css/restorent.css';

function TeamCard(props){
    return(
        <div className="card">
            <div className="image-section">
                <img src={props.img} alt=""/>
            </div>
            <div className="content">
                <h3>{props.name}</h3>
                <h5>{props.position}</h5>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
export default TeamCard;