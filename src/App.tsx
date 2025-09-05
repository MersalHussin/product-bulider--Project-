
import { useState } from 'react'
import ProudctCard from './components/ProudctCard'
import Model from './components/ui/Modal'
import { productList } from './data'
import { Button } from '@headlessui/react'

function App() {

  /* ــــــــ STATE ــــــــ */
    const [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  // ** Renders
  const renderProductList = productList.map((product) =>{
    return <ProudctCard key={product.id} product={product} />
  })

  return (
    <>

    <main className='container mx-auto'>
            <Button className=" bg-red-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-red-700 transition-all  cursor-pointer" onClick={openModal}>Add</Button>
      <Model isOpen={isOpen} closeModal={closeModal} title='Add a new product'>
        <div className='flex gap-3 justify-start'>
        <Button className=" mx bg-blue-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-blue-700 transition-all  cursor-pointer">Submit</Button>
        <Button className=" bg-red-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-red-700 transition-all  cursor-pointer">Cancel</Button>
        </div>
      </Model>
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
