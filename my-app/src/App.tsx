import Contact from './components/Contact'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import SectionBridge from './components/SectionBridge'
import Strategy from './components/Strategy'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [dark, toggle] = useTheme()
  return (
    <div className="antialiased">
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <SectionBridge from="ink" to="paper" scene="truck" />
        <Features />
        <SectionBridge from="paper" to="ink" scene="cans" />
        <Strategy />
        <SectionBridge from="ink" to="paper" scene="truck-back" />
        <Pricing />
        <SectionBridge from="paper" to="amber" scene="cans" />
        <Faq />
        <SectionBridge from="amber" to="ink" scene="truck" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
