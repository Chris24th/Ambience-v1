import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import SignOut from './SignOut'
import Logo from '../src/Images/logo.png'

const MainHeader = ({signOut}) => {
    
  return (
    <img src={Logo} />
    // <div>
    //   <header className='header container-header'>
    //     Menu
    //     <h1 style={{backgroundColor: '#ffffff1'}}>
    //       {/* <img src={Logo} className='logo' alt="" /> */}
    //       {/* <img src={logo} height={100} width={100} /> */}
    //       {/* <img src={Logo} /> */}
    //     </h1>
        
    //           <SignOut 
    //             onClick={signOut}/>
            
    //   </header>
            
    // </div>
  )
}

export default MainHeader
