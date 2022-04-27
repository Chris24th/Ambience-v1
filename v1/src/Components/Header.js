import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
  return (
    <div>
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick = {onClick}/>
        </header>
    </div>
  )
}

Header.defaultProps = {
    title: 'Ambience',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
}


export default Header