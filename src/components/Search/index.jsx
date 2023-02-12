import React, { useContext } from 'react'
import styles from './search.module.scss'
import close from '../../assets/close.svg'
import { SearchContext } from '../../App'

export default function Search() {

  const {searchValue, setSearchValue} = useContext(SearchContext)
  return (
    <div className={styles.root}> 
    <input className={styles.input} 
    value={searchValue} 
    onChange={(event) => setSearchValue(event.target.value)}
    placeholder='search pizza'
    ></input>
    {searchValue && 
        <img onClick={() => setSearchValue('')} className={styles.clearIcon} src={close} alt=''></img>}
  </div>
   
  )
}
