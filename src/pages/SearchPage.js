import React from 'react'
import {Link} from 'react-router-dom'
import './SearchPage.css'
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../response';
import Response2 from '../response2';

import Search from '../components/Search'

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

  // LIVE API CALL (100 call per day limit with free version)
  // const {data} = useGoogleSearch(term);

  // STATIC API CALL (use for testing so I don't run out of LIVE api calls)
  const data = Response2;

  // console.log('hello from SearchPage.js')
  // console.log(data)
  return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to='/'>
          <img
            className="searchPage__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" alt=""
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

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&
                  <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} />
                }
                
                {item.displayLink} &#9660;
              </a>
              <a href={item.link} className="searchPage__resultTitle">
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
  )
}

export default SearchPage
