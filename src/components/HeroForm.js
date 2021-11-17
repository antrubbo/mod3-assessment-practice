import { Component } from "react";

class HeroForm extends Component {


    render(){
        const { handleHeroSelect, handleNewHero, handleHeroInput } = this.props

        return(
            <div id="hero-form">
                <label htmlFor="add-hero">Add a Hero!</label>
                <form onSubmit={handleNewHero} action="" id="add-hero">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onInput={(evt) => handleHeroInput(evt)}type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea onChange={handleHeroInput} type="text" name="description" id="description"/>
                    </div>
                    <button type="submit">Let's Go!</button>
                </form> 
                <br /><br />

                <form>
                    <div>
                        <label htmlFor="hero-select">Select an Avenger!</label>
                    </div>
                    <select onChange={handleHeroSelect}name="hero-select" id="hero-select">
                        <option value="blank"></option>
                        <option value="Spider-Man">Spider-Man</option>
                        <option value="Hulk">Hulk</option>
                        <option value="Captain America">Captain America</option>
                        <option value="Black Widow">Black Widow</option>
                        <option value="Black Panther">Black Panther</option>
                        <option value="Thor">Thor</option>
                        <option value="Iron Man">Iron Man</option>
                        <option value="Vision">Vision</option>
                        <option value="Hawkeye">Hawkeye</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default HeroForm