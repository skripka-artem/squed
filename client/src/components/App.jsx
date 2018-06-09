import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.css';
import SectionList from './SectionList';
import SectionItems from './SectionItems';
import SectionSqued from './SectionSqued';


class App extends Component {
  state = {
    heroes: [],
    hero: [],
    strength: [],
    intelligence: [],
    speed: [],
    squed: []
  }

  componentDidMount() {
    axios.get(`/api/heroes`)
      .then(res => {
        const heroes = res.data
        this.setState({ heroes });
       
      })
  }
 
  deletes = id => {
    axios
    .delete(`/api/heroes/${id}`)
    .then(() => {
      this.setState(prevState => ({
        heroes: prevState.heroes.filter(hero => hero.id !== id)
    }));
      
    })
  };
 
  details = hero => {
    this.setState (state => ({
      hero: [...state.hero, hero],
      strength: [...state.strength, hero.strength],
      intelligence: [...state.intelligence, hero.intelligence],
      speed: [...state.speed, hero.speed]
 }))
}

save = () => {
  this.setState (state => ({
    squed: [...state.squed, ...state.hero],
}))
}

  render() {
    return (
   <div className={styles.body}>
   <SectionList 
   heroes={this.state.heroes} 
   id = {this.state.id} 
   details = {this.details} 
   deletes = {this.deletes} />
   <SectionItems 
   hero={this.state.hero} 
   details = {this.details} 
   deletes = {this.deletes} 
   strength={this.state.strength}
   intelligence={this.state.intelligence}
   speed={this.state.speed}
   save={this.save} 
   squed={this.state.squed}
   />     
   <SectionSqued 
   save={this.save} 
   squed={this.state.squed}  />
    </div>
  )}
}

export default App;
