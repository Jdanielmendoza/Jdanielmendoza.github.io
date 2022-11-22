import "./Section3.css";
import pc from "./images/image-retro-pcs.jpg";
import game from "./images/image-gaming-growth.jpg";
import teclado from "./images/image-top-laptops.jpg";
import Child from "./Child.js";

const Section3 = () => {
    return (
        <section className="section3">
            <Child img={pc} num="01" title="Reviving Retro PCs" parrafo="What happens when old PCs are given modern upgrades?" />
            <Child img={game} num="02" title="Top 10 Laptops of 2022" parrafo="Our best picks for various needs and budgets." />
            <Child img={teclado} num="03" title="The Growth of Gaming" parrafo="How the pandemic has sparked fresh opportunities." />
        </section>
    );
}

export default Section3; 