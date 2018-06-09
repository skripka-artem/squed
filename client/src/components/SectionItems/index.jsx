/* eslint-disable */
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Button from '../Button';
export default class SectionItems extends Component {
sumHeroForce = () => {
    let strength =this.props.strength
    let intelligence =this.props.intelligence
    let speed =this.props.speed
   return (
<div>
       <p>strength: {eval(strength.join('+'))}</p>
       <p>intelligence: {eval(intelligence.join('+'))} </p>
       <p>speed: {eval(speed.join('+'))}</p>
       </div>
   )
}
      render() {
          return (
            <div>
            <p className={styles.text}>squed editor</p>
              <div className={styles.section}>
              <Button onClick={() => { this.props.save() }} text ="Save cqued" />
              {this.sumHeroForce()}
            {this.props.hero.map(hero => (
                <div key={hero.id} className={styles.block}>
               <p>{hero.name}</p>
                </div>
              ))}
              </div>
              </div>
          )
      }
    }

    