"use client"
import {useEffect,useState} from 'react'
import PromptCard from './PromptCard'
const PromptCardList = ({data,handleTagClick}) => {
  return(
<div className='mt-16 prompt_layout'>
{data.map((prompt) => (
  
  <PromptCard
key={prompt._id}
prompt={prompt}
handleTagClick={handleTagClick}
/>
))

}
  </div>
  )
}
const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [ promptData, setPromptData ] = useState([])
  const handleSearchChange = (e) => {}
useEffect(() => {
  const fetchPrompts = async () => {
    const res = await fetch('/api/prompt')
    const data = await res.json()
    setPromptData(data)
  }
  fetchPrompts()
}
,[])
console.log(promptData,"promptData in Feed.jsx")
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
        type='text'
        placeholder='Search for a #tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input-peer'
        />
        </form>
        <PromptCardList 
        data={promptData}
        handleTagClick={() => {}}
        />
      </section>
  )
}

export default Feed