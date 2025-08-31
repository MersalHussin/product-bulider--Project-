
import ProudctCard from './components/ProudctCard'

function App() {

  return (
    <>
    <div>
      <div className=' border-2 border-red-500 m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 p-10 rounded-2xl' >
      <ProudctCard />
      <ProudctCard />
      <ProudctCard />
      <ProudctCard />
      <ProudctCard />
      <ProudctCard />
      </div>
    </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
