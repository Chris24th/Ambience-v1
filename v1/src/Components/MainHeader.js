import PropTypes from 'prop-types'
import Button from './Button'

const MainHeader = ({logo}) => {
    
  return (
    <div>
        <header className='container-header'>
            <h1>{logo}</h1>
        </header>
    </div>
  )
}

MainHeader.defaultProps = {
    logo: 'Ambience',
}

MainHeader.propTypes = {
    logo: PropTypes.string,
}

export default MainHeader
