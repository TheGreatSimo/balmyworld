import Left from "./Left"
import Right from "./Right"

const VideoSection = () => {
  return (
    <div className="bg-[#F0EBDD] h-[816px] mt-20 " >
      <div className="flex mx-40 " >
        <div className="flex-1" >
          <Left />
        </div>
        <div className="flex-1">
          <Right />
        </div>
      </div>
    </div>
  )
}

export default VideoSection