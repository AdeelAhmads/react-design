import tree from '../assets/tree.svg';
import '../CSS/header.css'

const Header=()=>{

    return(

        <div id='header'>
           <header className='main-header' >
               
               <section className='brand'>
               <a href="#Home" className='icon' ><img className='logo-img'  style={{height:'70%', color:'white'}} src={tree}  alt="" /></a><h4>Level</h4>
               </section>
               <div className="nav-bar">
                <a href="#avilablilty" className='header-btn active'  style={{ backgroundColor: '#fd5e53',color:'white'}}>HOME</a>
               <a href="#infoSection" className='header-btn'>PORTFOLIO</a>
               <a href="#coutryInfo" className='header-btn'>BLOG ENTRIES</a>
               <a href="#message-section" className='header-btn'>CONTACT US</a>
               </div>
              
               <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>


        </header>
        </div>
    );
}
export default Header;