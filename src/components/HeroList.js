import { Component } from "react";
import HeroCard from "./HeroCard";

class HeroList extends Component{
    render(){
        const { selected } = this.props
        let allHeroes = selected.map((hero, i) => <HeroCard key={hero.name + i} hero={hero}/>)

        return (
            <div id="heroesContainer">
                {allHeroes}
            </div>
        )
    }
}

export default HeroList