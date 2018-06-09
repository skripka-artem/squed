/* eslint-disable */
import React  from 'react';
import styles from './styles.css';

const SectionItems = ({squed}) => (
              <div>
                  <p className={styles.text}>squed</p>
              <div className={styles.section}>
            {squed.map(squed => (
                <div key={squed.id} className={styles.block}>
               
               <p>{squed.name}</p>
               <ul>
               <li>strength: {squed.strength}</li>
               <li>intelligence: {squed.intelligence}</li>
               <li>speed: {squed.speed}</li>
               </ul>
                </div>
                
              ))}
            
        
              </div>
              </div>
          )
        
    

    export default  SectionItems