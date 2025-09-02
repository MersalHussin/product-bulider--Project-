
import ProudctCard from './components/ProudctCard'
import { productList } from './data'

function App() {

  // ** Renders
  const renderProductList = productList.map((product) =>{
    return <ProudctCard key={product.id} product={product} />
  })

  return (
    <>


    <main className='container mx-auto'>
      <div className=' border-2 border-red-500 m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:p-10 md:p-2 rounded-2xl' >
    {renderProductList}
      </div>
    </main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
