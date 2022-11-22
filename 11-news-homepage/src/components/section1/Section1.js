import "./Section1.css";

const Section1 = () => {
    return (
        <section className="section1">
            <div className="image-entry"></div>
            <div className="section1-description">
                <h2 className="s1-title">The Bright Future of Web 3.0?</h2>
                <div className="s1-details">
                    <p className="s1-parrafo">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <input type="button" value="Read more" />
                </div>
            </div>
        </section>
    );
}

export default Section1; 