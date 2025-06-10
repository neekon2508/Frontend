import * as React from 'react';


const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  }
  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>

      <InputWithLabel id="search" value={searchTerm} onInputChange={handleSearch} isFocused>
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      <List list={searchedStories} />
    </div>
  );
};
  
const List = ({ list }) => (
  <ul>
    {list.map(({objectID, ...item}) => (//Rest operation
    <Item key={objectID} {...item} /> //Spread operation
    ))}
  </ul>
  );
  const Item = ({ title, url, author, num_comments, points}) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
  );
  
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
    <input ref={inputRef} type={type} id={id} value={value} onChange={onInputChange} autoFocus={isFocused}/>
  </>)
}
  

export default App;
