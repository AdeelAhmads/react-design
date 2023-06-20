import '../CSS/header.css';
import logo from '../logo.png'
const Header=()=>{

   
       function Hamburger(){
        const nav = document.querySelector("nav");
        nav.classList.toggle("active");
    }
      
    

    return(
        <div>
         <header className='main-header'>
        <div className="header-left">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="" className="active">HOME</a>
                    </li>
                    <li>
                        <a href="">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="">BLOG ENTRIES</a>
                    </li>
                    <li>
                        <a href="">CONTACT US</a>
                    </li>
                   
                </ul>
               
            </nav>
        </div>
        <div className="header-right">
            <div className="hamburger" onClick={Hamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>
        </div>
    )
}
export default Header;