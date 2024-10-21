type TitleTextProps = {
  title: string
  text: string
  className?: string
}
export const TitleText: React.FC<TitleTextProps> = ({ title, text }) => {
  return (
    <>
      <h2 className='text-xl text-center pt-3 '>{title}</h2>
      <p className='text-sm font-normal text-center pt-3'>{text}</p>
    </>
  )
}
