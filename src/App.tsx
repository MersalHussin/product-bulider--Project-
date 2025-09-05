
import { useState } from 'react'
import ProudctCard from './components/ProudctCard'
import Model from './components/ui/Modal'
import Input from './components/ui/Input'
import Button from './components/ui/Button'
import { fromInputList, productList } from './data'

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
  const renderFormInput = fromInputList.map((input) =>{
    return (
      <div key={input.id} className='flex flex-col gap-2 mb-2'>
        <label htmlFor={input.name} className='font-semibold'>{input.label}</label>
         <Input type={input.type} name={input.name} placeholder={input.placeholder} />
      </div>
    )
  })

  return (
    <>

    <main className='container mx-auto'>
      <Model isOpen={isOpen} closeModal={closeModal} title='Add a new product'>
        <div className='my-5'>
        {renderFormInput}
        </div>
        <div className='flex gap-3 justify-start'>
        <Button className=" flex-1 bg-blue-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-blue-700 transition-all  cursor-pointer">Submit</Button>
        <Button className=" flex-1 bg-red-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-red-700 transition-all  cursor-pointer">Cancel</Button>
        </div>
      </Model>
            <Button className=" bg-red-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-red-700 transition-all  cursor-pointer" onClick={openModal}>Add</Button>
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
