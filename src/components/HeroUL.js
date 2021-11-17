import { Component } from "react";


class HeroUL extends Component {
    render(){
        const { selected } = this.props

        let chosenHeroes = selected.map((hero, i) => <li key={selected[i].name + i}>{selected[i].name}</li>) 

        return(
            <div id="hero-ul">
                <ul>
                    <h2>Chosen Heroes</h2>
                    {chosenHeroes}
                </ul>
            </div>
        )
    }
}

export default HeroUL