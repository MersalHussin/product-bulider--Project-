// src/App.tsx

import { useState, useRef } from 'react';
import ProudctCard from './components/ProudctCard'; // افترضت أن هذا المكون موجود
import Model from './components/ui/Modal';
import Input from './components/ui/Input';
import Button from './components/ui/Button';   // افترضت أن هذا المكون موجود
import { fromInputList, productList } from './data'; // افترضت أن هذه البيانات موجودة
import { colors, type IFormInput, type IProudct } from './components/interface';
import { productValidation } from './validation';
import ErrorMessage from './components/ui/ErrorMessage';
import CircleColor from './components/ui/CircleColor';

const App: React.FC = () => {

  const defultProduct = {
    id: 0,
    title: '',
    description: '',
    imageUrl: '',
    price: '',
    category: { name: '', imageUrl: '' },
    colors: [],
  }
  // --- STATES ---
  const [product, setProduct] = useState<IProudct>(defultProduct);
  const [isOpen, setIsOpen] = useState(false);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [errors , setErrors] = useState({title:"" , description:"" ,imageUrl:"", price:"" });
  console.log(tempColors);
  // ٢. نحدد نوع useRef بشكل صريح ليخبر TypeScript أنه سيشير إلى عنصر إدخال
  const firstInputRef = useRef<HTMLInputElement>(null);

  // --- HANDELER ---
  const submitHandler = (e : React.FormEvent) :void => {
    e.preventDefault();
    const errors = productValidation({
      title:product.title
      ,descraption:product.description
      ,price:product.price
      ,imageUrl:product.imageUrl })
    console.log(errors);
    // Check if any property has a value of "" && check if all props have a value of ""
    const hasErrorMsg = Object.values(errors).some(value => value == '') && Object.values(errors).every(value => value == "")
    console.log(errors);
    if(!hasErrorMsg){
      setErrors(errors)
      return;
    }
    console.log("Send This to our server");
    closeModal();
  }
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setProduct({
      ...product,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]:""
    })
  };

  function closeModal() {
    setIsOpen(false);
    setProduct(defultProduct);
  }

  function openModal() {
    setIsOpen(true);
  }


  // --- Reneder Methods ---
  const renderProductList = productList.map((product: IProudct) => {
    return <ProudctCard key={product.id} product={product} />;
  });

  const renderFormInput = fromInputList.map((input: IFormInput, index) => {
    return (
      <div key={input.id} className="flex flex-col gap-2 mb-2">
        <label htmlFor={input.name} className="font-semibold">{input.label}</label>
        <Input
          id={input.name}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          ref={index === 0 ? firstInputRef : undefined}
          value={product[input.name]}
          onChange={onChangeHandler}
        />
        <ErrorMessage msg={errors[input.name]}/>
      </div>
    );
  });

  const renderProductColors = colors.map((color,id) => <CircleColor color={color} onClick={() =>setTempColors((prev)=> [...prev,color])} key={id}/>)

  return (
    <main className="container mx-auto">
      <Model 
        isOpen={isOpen} 
        closeModal={closeModal} 
        title="Add a new product" 
        initialFocus={firstInputRef}
      >
        <form className="my-5" onSubmit={submitHandler}>
          {renderFormInput}
          <div className='flex gap-1 justify-center itee'>

          {renderProductColors}
          </div>

        <div className="flex gap-3 justify-start">
          <Button  className="flex-1 bg-blue-600 ...">Submit</Button>
          <Button onClick={closeModal} className="flex-1 bg-gray-600 ...">Cancel</Button>
        </div>
      </form>
      </Model>

      <Button 
        className="bg-indigo-600 ..." 
        onClick={openModal}
      >
        Add Product
      </Button>

      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ...">
        {renderProductList}
      </div>
    </main>
  );
}

export default App;