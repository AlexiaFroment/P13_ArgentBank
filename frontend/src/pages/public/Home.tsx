import { HeroSection } from "@/components/HeroSection"
import { Btn } from "@/components/Btn"
import Chat from "@/assets/img/icon-chat.png"
import Dollars from "@/assets/img/icon-money.png"
import Check from "@/assets/img/icon-security.png"
export const Home: React.FC = () => {
  return (
    <section>
      <HeroSection />
      <div className='container py-14 mx-auto flex flex-col items-center md:flex-row '>
        <Btn
          img={Chat}
          title='You are our #1 priority'
          text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes'
        />
        <Btn
          img={Dollars}
          title='More savings means higher rates'
          text='The more you save with us, the higher your interest rate will be!'
        />
        <Btn
          img={Check}
          title='Security you can trust'
          text='We use top of the line encryption to make sure your data and money is always safe.'
        />
      </div>
    </section>
  )
}
