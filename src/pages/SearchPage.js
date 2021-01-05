import React, { Component, useContext } from 'react';
import {Link} from 'react-router-dom'
import './SearchPage.scss'
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response';
import Response2 from '../response2';

import Search from '../components/Search'
import {Logo} from '../components/Logo'

import ToggleTheme from '../components/ToggleTheme';
import { ThemeContext } from '../context/ThemeContext';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new

function SearchPage() {
  const [{term}, dispatch] = useStateValue()

  const { lightTheme } = useContext(ThemeContext);
  const theme = lightTheme ? '' : ' darkmode';

  // LIVE API CALL (100 call per day limit with free version)
  const {data} = useGoogleSearch(term);

  // STATIC API CALL (use for testing so I don't run out of LIVE api calls)
  // const data = Response2;

  // console.log('hello from SearchPage.js')
  
  const apiLimitExceeded = data?.error?.code == 429 ? true : false
  
  return (
    <div className={'searchPage' + theme}>
      <div className="searchPage__header">
        <Link to='/'>
          <img
            className="searchPage__logo" 
            src={Logo()} alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons term={term} />  {/* passed term prop to Search component. This allows query from home page to persist to search results page and display the query in the input field */}
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <ToggleTheme />
              <div className="searchPage__option">
                <Link to='/settings'>Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="searchPage__body">
        {term && (
          <div className="searchPage__results">
            {apiLimitExceeded 
              ? <p className="searchPage__resultCount">Sorry, the search limit has been reached.  Please try again later.</p>
              : <p className="searchPage__resultCount">
                  About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds) for {term}
                </p>
            }
            
            {data?.items?.map(item => (
              <div className="searchPage__result">
                <a className="searchPage__resultLink" href={item.link} target="_blank">
                  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&
                    <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} />
                  }
                  
                  {item.displayLink} &#9660;
                </a>
                <a href={item.link} target="_blank" className="searchPage__resultTitle">
                  <h2 className="">
                    {item.title}
                  </h2>
                </a>
                <p className="searchPage__resultSnippet">
                  {item.snippet}
                </p>
              </div>
            ))}
            
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage
