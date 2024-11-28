import './App.scss'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Cards from "./components/Cards"

function App() {

  return (
    <>
      <Header />
      <section className='hero'>
        <Hero title="iPhone 16 Pro" desc="Hello, Apple, Intelligence." imgUrl="https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg" />
        <Hero title="iPhone 16" desc="Hello, Apple, Intelligence." imgUrl="https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_large.jpg" />
        <Hero title="iPad air" desc="Two sizes. Faster chip. Does it all." imgUrl="https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_large.jpg" />
      </section>
      <Cards />
    </>
  )
}

export default App
