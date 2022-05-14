import PropTypes from 'prop-types'
import Button from './Button'
import {BiNotepad} from 'react-icons/bi'

const Header = ({title, onAdd, showAdd}) => {
    
  return (
    <div>
        <header className='header'>
            <h1><BiNotepad className='icon-task'/> {title}</h1>
            <Button 
                text={showAdd ? 'Close' : 'Add'}
                onClick = {onAdd}
            />
        </header>
    </div>
  )
}

Header.defaultProps = {
    title: 'To Do List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header