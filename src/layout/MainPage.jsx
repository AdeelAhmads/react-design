import Availability from '../components/checkAvailablilty';
import Subscribe from '../components/subscribe';
import InfoSection from '../components/infoSection';
import RecommendSection from '../components/recommendSection';
import VideoSection from '../components/videoSection';
import CountryInfo from '../components/countryInfo';
import MessageSection from '../components/sendMessageSection';


const MainPage=({formData})=>{

    const childrenData=formData[0];
    const adultData=formData[1];
    // console.log(childrenData);
    // console.log(adultData);
    const availabilityFormData=[childrenData, adultData];
       function returnData(data){
         console.log(data);
       }
   return(
    <div>
    
        <Availability formData={availabilityFormData} returnedData={returnData} />
        <Subscribe />
        <InfoSection />
        <RecommendSection />
        <VideoSection />
        <CountryInfo />
        <MessageSection />

    </div>
   )
}

export default MainPage;