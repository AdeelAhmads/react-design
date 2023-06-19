import hammer from '../assets/hammer.svg';
import plane from '../assets/plane.svg';
import contact from '../assets/contact.svg';
import '../CSS/infoSection.css'

const InfoSection=()=>{
    return(
        <div id="infoSection">
            <section className='info-block'>
                   <img style={{}} className='info-icon' src={hammer} alt="" />
                   <h3 className='info-heading' >Level HTML Templates by Toolplate website</h3>
                   <p className='info-paragraph'>You are allowed to download, edit and use this template for your bussinses or client websites</p>
                   <a className='more-info' href="#READING"><h5>CONTINUE READING...</h5></a>
            </section>

            <section className='info-block' >
                       <img className='info-icon' src={plane} alt="" />
                       <h3 className='info-heading'>Original Website Template producer</h3>
                       <p className='info-paragraph' >You are not allowed to re-distribute downloadable template ZIP file on any website</p>
                       <a className='more-info' href="#Read"><h5>CONTINUE READING...</h5></a>
            </section>

            <section  className='info-block'>
                    <img className='info-icon' src={contact} alt="" />
                    <h3 className='info-heading'>Contact us if you have any question...</h3>
                    <p className='info-paragraph' >if you see this template being distributed on any other site,this is an illigal copy template ZIP file on any website</p>
                    <a className='more-info' href="#test"><h5>CONTINUE READING...</h5></a>
            </section>
            
        </div>
    )
}
export default InfoSection;