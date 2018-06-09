/* eslint-disable */
import React from 'react';
import styles from './styles.css';
import List from '../List';
const SectionList = ({ heroes, id, details, deletes }) =>  (
    <div>
    <p className={styles.text}>heroes</p>
<div className={styles.section}>
 <List heroes={heroes} id = {id} details = {details} deletes = {deletes}/>
  </div>
  </div>
        )
    export default SectionList


