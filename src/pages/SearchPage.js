import React from 'react'
import './SearchPage.css'
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response';

// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new

function SearchPage() {
  const [{term}, dispatch] = useStateValue()

  // LIVE API CALL (100 call per day limit with free version)
  // const {data} = useGoogleSearch(term);

  // STATIC API CALL (use for testing so I don't run out of LIVE api calls)
  const data = Response;

  console.log(data)
  return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
