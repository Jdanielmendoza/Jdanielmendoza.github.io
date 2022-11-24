import "./Card.css";

const Card = (props) => {
    return (
        <div className="box">
            {props.num}
            <div className={`${props.activar}`} >
                <div>
                    {props.num}
                </div>
            </div>
            <div className="n2">
                <div>
                    {props.num}
                </div>
            </div>

            <div className="text">
                {props.time}
            </div>
        </div>
    )
}

export default Card; 