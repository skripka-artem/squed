import React  from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Button from '../Button';

const List = ({ heroes, details, deletes }) => (
   <div>
      {heroes.map(hero => (
        <div key={hero.id} className={styles.block}>
       <p>{hero.name}</p>
       <Button onClick={() => { deletes(hero.id) }} text ="delete"  />
       <Button onClick={() => { details(hero) }} text ="add in squed" />
      
        </div>
        
      ))}
        
    </div>
  )

  List.propTypes = {
    heroes: PropTypes.string.isRequired,
    details: PropTypes.func,
    deletes: PropTypes.func
  };
  
  List.defaultProps = {
    details: () => {},
    deletes: () => {}
  };

export default  List