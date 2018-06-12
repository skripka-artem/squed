/* eslint-disable */
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
    squed: [],
    newHeroName: '',
    newHeroStrength: '',
    newHeroIntelligence: '',
    newHeroSpeed: ''
    
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

onNewHeroName = (e) => {
const newHeroName = e.target.value;
this.setState({newHeroName: newHeroName});
}

onNewHeroStrength = (e) => {
  const newHeroStrength = e.target.value;
  this.setState({newHeroStrength: newHeroStrength});
  }

onNewHeroIntelligence = (e) => {
    const newHeroIntelligence = e.target.value;
    this.setState({newHeroIntelligence: newHeroIntelligence});
    }

onNewHeroSpeed = (e) => {
      const newHeroSpeed = e.target.value;
      this.setState({newHeroSpeed: newHeroSpeed});
      }

handleSubmit = (e) => {
e.preventDefault();

  const name = this.state.newHeroName
  const strength = this.state.newHeroStrength
  const intelligence = this.state.newHeroIntelligence
  const speed = this.state.newHeroSpeed



axios.post(`/api/heroes/`,  {name, strength, intelligence, speed} )
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
console.log(this.state.newHeroName);
console.log(this.state.newHeroStrength);
console.log(this.state.newHeroIntelligence);
console.log(this.state.newHeroSpeed);
}


  render() {
    return (
   <div className={styles.body}>
   <div>
   <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name</label><br />
                    <input type="text"  onChange={this.onNewHeroName}/>
                </p>
                <p> Strength <select onChange={this.onNewHeroStrength}>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
</select> </p>
<p> Intelligence <select onChange={this.onNewHeroIntelligence}>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
</select> </p>
<p>Speed <select onChange={this.onNewHeroSpeed}>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
</select></p>
                <input type="submit" value="Отправить" />
            </form>
   </div>
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
