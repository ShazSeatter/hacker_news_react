import React, {useState} from 'react';


const Form = ({stories}) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }

    const filteredData = stories.filter((article) => {
        return article.title.toLowerCase().includes(query.toLowerCase())
    })

    console.log(filteredData)
    return (
        <div>
        <form>
            <label>
            <input type="search" value={query} onChange={handleQueryChange} placeholder="Search for article" />
            </label>
        </form>
        {query !== '' ? (
        filteredData.length > 0 ? (
          filteredData.map((article) => (
            <div key={article.id}><a href={article.url}>{article.title}</a> posted by {article.by}</div>
          ))
        ) : (
          <div>No results found</div>
        )
      ) : (
        <div>Enter a search query to filter results</div>
      )}
    </div>
  );
}


export default Form;
