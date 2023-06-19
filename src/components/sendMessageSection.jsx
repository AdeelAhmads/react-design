
import '../CSS/sendMessage.css'
const MessageSection=()=>{
    return(
        <div id="message-section">
        
        <div className="message-section-view">
            <section className="map-section">
            <iframe className='map' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.755801026887!2d70.31338987400834!3d28.42662449340415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375b40f992c9dd%3A0xa2678482d578a2f0!2sMercury%20Sols!5e0!3m2!1sen!2s!4v1687170618871!5m2!1sen!2s" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <section className="message-form-section">

                <form className='message-form' action="">
                    <input  className='m-input' type="text" placeholder='Name' />
                    <input className='m-input' type="email" name="" id="" placeholder='Email' />
                    <input className='m-input' type="text" name="" id=""  placeholder='Subject'/>
                    <textarea className="m-input" name="" id="" cols="40" style={{height:'170px'}} rows="30" placeholder='Message'>

                    </textarea>
                    <input className='m-submit' type="submit" value="SEND MESSAGE NOW" />
                </form>

            </section>
        </div>
            
            
        </div>
    )
}
export default MessageSection;