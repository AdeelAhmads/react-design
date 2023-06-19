import video from '../assets/videos/video.mp4'
const VideoSection=()=>{
    return(
        <div>
        <video controls width="100%" height="300px">
            <source src={video} type="video/webm" />
        </video>
        </div>
    )
}
export default VideoSection;