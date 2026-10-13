import Contact from './components/Contact'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Strategy from './components/Strategy'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [dark, toggle] = useTheme()
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <Features />
        <Strategy />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
