import * as React from 'react';
import axios from 'axios';
const storiesReducer = (state,action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading:false,
        isError: false,
        data: action.payload,
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        )
    }
    default:
      throw new Error()
  }
}
var API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=;'

const App = () => {
  
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  )
  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`) 

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer, {data: [], isLoading: false, isError: false}
  )
  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({type: 'STORIES_FETCH_INIT'})
    try {
    const result = await axios.get(url);
    dispatchStories({
      type: 'STORIES_FETCH_SUCCESS',
      payload: result.data.hits,
    })
    }
    catch{dispatchStories({type: 'STORIES_FETCH_FAILURE'})
  }
  }, [url])
  React.useEffect(()=>{handleFetchStories()}, [handleFetchStories])
  const handleRemoveStory = (item)=> {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    })
  }

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  }
  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }
  const searchedStories = stories.data.filter(story => 
     story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit} 
      />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading...</p>
      ): (
        <List 
          list={searchedStories}
          onRemoveItem={handleRemoveStory}/>
      )}
    </div>
  );
};
  
const List = ({ list, onRemoveItem}) => (
  <ul>
    {list.map((item) => (//Rest operation
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem}/> //Spread operation
    ))}
  </ul>
  );
  const Item = ({item, onRemoveItem}) => {
    return (
    <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
       <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
       </button>
    </span>
  </li>
    )
  }
  
  
  
const InputWithLabel = ({ id, label, value, type='text', onInputChange, children, isFocused}) => {

  //A
  const inputRef = React.useRef();
  //C
  React.useEffect(() => {
    if (isFocused && inputRef.current)
      //D
      inputRef.current.focus()
  }, [isFocused])
  return (<>
    <label htmlFor="id">{children}</label>
    &nbsp; {/*B*/}
    <input ref={inputRef} type={type} id={id} value={value} onChange={onInputChange}/>
  </>)
}

const SearchForm = (
  {searchTerm, onSearchInput, onSearchSubmit}) => (
    <form onSubmit={onSearchSubmit}>
        <InputWithLabel 
          id="search" 
          value={searchTerm} 
          onInputChange={onSearchInput} 
          isFocused>
          <strong>Search:</strong>
        </InputWithLabel>
        <button type='button' disabled={!searchTerm}>
          Submit
        </button>
      </form>
)
  

export default App;
