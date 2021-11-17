import './App.css';
import { Component } from 'react';
import { img } from './images/img';
import superHeroes from './data/superHeroes';
import NavBar from './components/NavBar';
import HeroForm from './components/HeroForm';
import HeroList from './components/HeroList';
import HeroUL from './components/HeroUL';

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSuperHeroes: superHeroes,
      selected: [],
      newHero: {
        name: '',
        description: '',
        thumbnail: img
      }
    }
  }

  handleHeroSelect = (evt) => {
    const { allSuperHeroes } = this.state
    const { value } = evt.target
    let hero = allSuperHeroes.find((hero) => {
      return hero.name.includes(value)
    })
    if(!hero){
      alert("Make a choice!")
    } else {
      this.setState({
        selected: [hero, ...this.state.selected]
      })
    }
  }

  handleNewHero = (evt) => {
    evt.preventDefault()
    this.setState({
      selected: [this.state.newHero, ...this.state.selected]
    })
    
  }

  handleHeroInput = (evt) => {
    const { name, value } = evt.target
    this.setState({
      newHero: {...this.state.newHero, [name]: value}
    })
  }

  render(){
    console.log(this.state.newHero)
    return (
      <div className="app">
        <NavBar />
        <HeroForm 
          handleHeroSelect={this.handleHeroSelect} 
          handleNewHero={this.handleNewHero} 
          handleHeroInput={this.handleHeroInput}
        />
        <div id="hero-display">
          <HeroList selected={this.state.selected}/>
          <HeroUL selected={this.state.selected}/>
        </div>
      </div>
    );
  }
}

export default App;
