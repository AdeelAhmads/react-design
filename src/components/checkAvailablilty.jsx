import '../CSS/availability.css'

const Availability=({formData,returnedData})=>{

   
    function validateForm(e){
       
       e.preventDefault()
       console.log(e.target);
       console.log(e.target[0].value);
       const name=e.target[0].value;
       const checkIn=e.target[1].value
       const checkOut=e.target[2].value
       const adult=e.target[3].value
       const children=e.target[4].value
       const room=e.target[5].value
       const data={name,checkIn,checkOut,adult,children,room}
       returnedData(data)
    }
    const childrenData=formData[0];
    const adultData=formData[1];
    // console.log(childrenData);
    // console.log(adultData);
    return (
        <div id='avilablilty'>

            <div id='form'>

         
            <form className='availabilityForm' onSubmit={validateForm}>

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
               {
                    adultData.map((num,index)=>{
                        return(<option key={index} value={num}>{num}</option>);
                    })
                }
                 </select>
               </section>

               <section id="children" style={{marginRight:'5px'}}>
               <select name="children" className='second-row-input'>
               <option value="selected">Children</option>
                {
                    childrenData.map((num)=>{
                        return(<option   value={num}>{num}</option>);
                    })
                }
                 {/* <option value="select" >Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option> */}
                 </select>
               </section>
                 
                <section id='room' style={{marginRight:'5px'}}>
                <select name="room" className='second-row-input'>
                    <option value="selected">Room</option>

                    {
                    childrenData.map((num)=>{
                        return(<option value={num}>{num}</option>);
                    })
                }
                 {/* <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>        */}
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