import { Component } from "react";

class HeroCard extends Component{
    render(){
        const { name, description, thumbnail } = this.props.hero;

        return (
            <div className="heroCard">
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <img src={thumbnail} alt={name} />
            </div>
        )
    }
}

export default HeroCard