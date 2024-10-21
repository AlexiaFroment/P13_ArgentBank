import { TitleText } from "@/components/TitleText"
type BtnProps = {
  img: string
  title: string
  text: string
}
export const Btn: React.FC<BtnProps> = ({ img, title, text }) => {
  return (
    <div className='flex flex-col items-center w-full p-5'>
      <button className='border-8 border-green-600 p-5 rounded-full '>
        <img src={img} alt='icon' className='w-16' />
      </button>
      <TitleText title={title} text={text} />
    </div>
  )
}
