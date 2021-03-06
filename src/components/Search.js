import React, {useState, useContext} from 'react'
import './Search.scss'

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';

import { ThemeContext } from '../context/ThemeContext';

function Search({hideButtons = false, term}) {  {/* optional term prop. This allows query from home page to persist to search results page and display the query in the input field */}
  const [{}, dispatch] = useStateValue();

  const { lightTheme } = useContext(ThemeContext);
  const theme = lightTheme ? '' : ' darkmode';
  
  const [input, setInput] = useState(term || '')  // if term is not passed as prop, default value is empty string.  If term is passed as prop, default value is term
  const history = useHistory();

  const search = e => {
    e.preventDefault();

    // console.log(`you hit search.  your query is: ${input}`)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    history.push('/search')
    
  }
  
  return (
    <form className={'search' + theme}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicIcon className="search__micIcon"/>
      </div>

      {!hideButtons 
        ? <div className="search__buttons">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        : <div className="search__buttons">
            <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
          </div>
      }
  
    </form>
  )
}

export default Search
