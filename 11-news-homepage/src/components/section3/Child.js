import "./Child.css";

const Child = (props) => {
    return (
        <div className="container-child">
            <div className="image"><img src={props.img} alt="img" /></div>
            <div class="s3-context">
                <p className="section3-number">{props.num}</p>
                <p className="section3-title">{props.title}</p>
                <p className="section3-parrafo">{props.parrafo}</p>
            </div>
        </div>
    );
}

export default Child; 