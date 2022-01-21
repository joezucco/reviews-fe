import { Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div className='site-header'>
      <Link to='/'>
        <h1>Album Reviews</h1>
      </Link>
    </div>
  )
}

export default SiteHeader
