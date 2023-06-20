import '../CSS/countryInfo.css';
import img_03 from '../assets/img/img_03.jpg'
import img_04 from '../assets/img/img_04.jpg'
import img_05 from '../assets/img/img_05.jpg'
const CountryInfo=()=>{
    return (
        <div id="coutryInfo">
             <div className="country-info-section">
                <section className="coutry-region">
                        <h1>ASIA</h1>
                        <h4>Singapur</h4>
                </section>

               <div className='coutry-detail'>
                 <section className="">

                    <div className='coutry-description'>
                        <img src={img_03} alt="" />
                        <section className='country-detail'>
                            <h5 style={{color:'#fd5e53'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius repellat ad, perspiciatis sint magnam temporibus minima delectus laborum! Repudiandae earum fuga tempora cumque facere perspiciatisdoloribus quod culpa iusto.

                            Dolore voluptatum reprehenderit ex eos perspiciatis odio sit cum, id itaque accusantium voluptas eveniet quas quos optio nihil facere nesciunt rerum reiciendis aperiam ipsum in sapiente et saepe? Pariatur, sed!</p>
                        </section>

                    </div>
                    <div className='coutry-description'>
                    <img src={img_04} alt="" />
                        <section className='country-detail'>
                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius repellat ad, perspiciatis sint magnam temporibus minima delectus laborum! Repudiandae earum fuga tempora cumque facere perspiciatisdoloribus quod culpa iusto.
                            </p>
                            <a href="test"><h6>CONTINUE READING...</h6></a>
                        </section>
                       

                    </div>
                    <div className='coutry-description'>

                        <img src={img_05} alt="" />
                        <section className='country-detail'>
                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius repellat ad, perspiciatis sint magnam temporibus minima delectus laborum! Repudiandae earum fuga tempora cumque facere perspiciatisdoloribus quod culpa iusto.
                            </p>
                            <a href="test"><h6>CONTINUE READING...</h6></a>
                          </section>
                    

                    </div>

                </section>

               </div>
             </div>
        </div>
    )
}
export default CountryInfo;