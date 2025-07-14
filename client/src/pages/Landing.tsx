import BackgroundCanvas from '../components/BackgroundCanvas'
import Header from '../components/Header'

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundCanvas />
      <Header />
      <main className="pt-20">
        <h1 className="text-center text-4xl mt-40">OpenDotSci Landing Page</h1>
      </main>
    </div>
  )
}

export default Landing
