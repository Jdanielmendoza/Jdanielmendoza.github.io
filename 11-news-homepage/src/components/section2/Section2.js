import "./Section2.css";

const Section2 = () =>{
    return(
        <section className="section2">
        <h2>New</h2>
        <div className="new-context">
          <p className="new-title">Hydrogen VS Electric Cars</p>
          <p className="new-parrafo">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <div className="new-context">
          <p className="new-title">The Downsides of AI Artistry</p>
          <p className="new-parrafo">What are the possible adverse effects of on-demand AI image generation?</p>
        </div>

        <div className="new-context">
          <p className="new-title">Is VC Funding Drying Up?</p>
          <p className="new-parrafo">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>

      </section>
    );
}

export default Section2; 