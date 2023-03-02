import React, { useState } from 'react'

const Search = (props) => {
  const [term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value)
  }

  const search = () => {
    props.onSearch(term)
  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input defaultValue={term} onChange={(e)=>onChange(e)} />
      <button onClick={()=>search()}> Add Repos </button>
    </div>
  )
}

export default Search
