import Top from "./Top"
import Nav from "./Nav"
import Left from "./Left"
import Right from "./Right"


const Hero = () => {
  return (
    <div className="" >
      <div className="">
        <Top />
        <Nav />
      </div  >
      <div className="flex mx-40 mt-16 gap-14 ">
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

export default Hero