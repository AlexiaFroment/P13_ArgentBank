import Img from "@/assets/img/bank-tree.jpeg"
import { TitleText } from "@/components/TitleText"
export const HeroSection: React.FC = () => {
  return (
    <>
      <img
        src={Img}
        alt='hero-section'
        className='w-full h-[360px] object-cover relative'
        style={{ objectPosition: "0 35%" }}
      />
      <div className='absolute top-48 right-48 block w-[300px] p-5 bg-white'>
        <TitleText
          title='No fees. No minimum deposit. High interest rates.'
          text='Open a savings account with Argent Bank today !'
        />
      </div>
    </>
  )
}
