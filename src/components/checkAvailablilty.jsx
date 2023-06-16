import '../CSS/availability.css'

const Availability=()=>{
    function validate(e){
       
    }
    return (
        <div id='avilablilty'>

            <div id='form'>

         
            <form onSubmit={validate}>

                <div className='first-row'>
                <section  id="destination" style={{marginRight:'5px'}}>
                    <input type="text" className='first-row-input' placeholder="Type your destination..."/>
                </section>
                
                <section id='check-in' style={{marginRight:'5px'}}>
                    <input type="date" className='first-row-input' />
                </section>
               
               <section  id="check-out">
                    <input type="date" className='first-row-input' />
               </section>
               
                </div>



               <div className='second-row'>
               <section id='adult' style={{marginRight:'5px'}}>
               <select name="adult" className='second-row-input'>
                    <option value="adult">Adult</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                 </select>
               </section>

               <section id="children" style={{marginRight:'5px'}}>
               <select name="children" className='second-row-input'>
                 <option value="select" >Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                 </select>
               </section>
                 
                <section id='room' style={{marginRight:'5px'}}>
                <select name="room" className='second-row-input'>
                    <option value="selected">Room</option>
                 <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>       
                 </select>
                </section>
                
                 <input type="submit"  value='CHECK AVAILABILITY'/>

                 </div>

                <div className='third-row'>
                    <p style={{color:'#929AAB',fontSize:'normal'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    <a href="#Help" className='link'>Need Help?</a>

                </div>

            </form>
            </div>
        </div>
    )
}
export default Availability;