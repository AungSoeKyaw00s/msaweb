import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Team from './components/Team'
import Sponsor from './components/Sponsor'

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">
      <Hero />
      <About/>
      <Team/>
      <Sponsor/>
      <Contact />
    </div>
  )
}