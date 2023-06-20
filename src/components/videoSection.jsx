
import '../CSS/videoSection.css'
import video from '../assets/videos/video.mp4'
const VideoSection=()=>{
    return(
        <div class="video-player">
        <video controls width="100%" height="300px">
            <source controls autoplay loop src={video} type="video/webm" />
        </video>
        </div>
    )
}
export default VideoSection;