import Image from 'next/image'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="  my-[20px] mx-[40px] h[60px] flex justify-between ">


      <div className=' cursor-pointer'>
        <Link href="/">
          <Image  src="/logo.png" width={200} height={50} alt="loto"/>
        </Link>
      </div>




      <div className='flex justify-center gap-10 font-[16px] items-center mr-16 '>
        <Link href="/">
          <h1 className='text-[#222222]  drop-shadow-lg cursor-pointer font-semibold opacity-80 ' >Shop Now ▼</h1>
        </Link>

        <Link href="/">
          <h1 className='text-[#222222]  drop-shadow-lg cursor-pointer font-semibold opacity-80 ' >How To Play</h1>
        </Link>

        <Link href="/">
          <h1 className='text-[#222222]  drop-shadow-lg cursor-pointer font-semibold  opacity-80' >Contact Us</h1>
        </Link>
      </div>

      <div className='flex justify-center items-center gap-5'>

      <div className='shadow-md rounded-full h-[60px] w-[60px] relative cursor-pointer flex justify-center items-center transition-transform duration-300 transform hover:scale-110'>
        <div>
          <Image src="/glob.png" width={20} height={20} alt="loto"/>
        </div>
      </div>

      <div className='bg-[#FFD271] rounded-full h-[60px] w-[60px] relative shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-110 flex justify-center items-center'>
        <div>
          <Image src="/buy.png" width={30} height={30} alt="loto"/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Nav