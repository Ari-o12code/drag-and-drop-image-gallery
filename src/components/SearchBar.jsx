import { useContext, useState } from "react"
import ImageContext from '../context/image'
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const { searchImages } = useContext(ImageContext)
  const [term, setTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    searchImages(term)
    setTerm('')
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} type="text" />
        <button>
          <BiSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
