import Image from 'next/image'
import { product_img } from '@/constants'

const Left = () => {
  return (
    <div className="relative">
      <Image className='rounded-lg' src="/Product_0.png" width={690} height={530} alt="product image" />
      <div className='flex justify-center flex-wrap gap-4 mt-4' >
        {product_img.map((item) => 
          <div className='' key={item.id} >  
            <Image className='max-md:w-10' src={item.image} width={100} height={100} />
          </div>
        )}
      </div>

      <div className=' flex flex-wrap justify-between   mt-8 '>
        <div className="flex rounded-md bg-[#F0EDE6] w-[48%] ">
          <ul>
            <li className='text-[#353535]' >- A magical sound meditation</li>
            <li className='text-[#353535]' >- Drift off into happiness in no time</li>
            <li className='text-[#353535]' >- Mysterious personal therapist</li> 
            <li className='text-[#353535]' >- Settles mind and relaxes body</li>
          </ul>
        </div>
        <div className="flex rounded-md bg-[#F0EDE6] w-[48%] ">
          <ul>
            <li className='text-[#353535]' >- 30 Days Money-Back Guarantee</li>
            <li className='text-[#353535]' >- Free shipping over $69.</li> 
            <li className='text-[#353535]' >- Your order will be shipped between<br></br>    1-2 days after the purchase.</li>
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Left