import tree from '../assets/tree.svg';
import '../CSS/header.css'

const Header=()=>{

    return(

        <div id='header'>
           <header className="nav-bar">
               
               <section className='brand'>
               <a href="#Home" className='icon' ><img className='logo-img'  style={{height:'70%', color:'white'}} src={tree}  alt="" /></a><h4>Level</h4>
               </section>
               <a href="#Home" className='header-btn' style={{ backgroundColor: '#fd5e53',color:'white'}}>HOME</a>
               <a href="#portfolio" className='header-btn'>PORTFOLIO</a>
               <a href="#blog" className='header-btn'>BLOG ENTRIES</a>
               <a href="#contact" className='header-btn'>CONTACT US</a>


        </header>
        </div>
    );
}
export default Header;