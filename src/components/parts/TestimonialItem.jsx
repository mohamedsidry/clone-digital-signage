
import fiveStars from '../../assets/images/testimonial/five-stars.jpg'
function TestimonialItem({testimonia}) {
  
  return (
    <div className='testimonial-item py-5 px-2 flex flex-col justify-between items-center rounded-md shadow-md bg-grayLight text-center'>
        <img className='w-10 h-10 rounded-full border-2 border-orangePrim bg-cover' src={testimonia.profile} alt="clainent profile image" />
        <h3 className='text-bluePrim font-semibold'>{testimonia.name}</h3>
        <p className='text-grayText'>{testimonia.message}</p>
        <img className='h-10' src={fiveStars} alt="" />
    </div>
  )
}

export default TestimonialItem