// src/App.tsx

import { useState, useRef } from 'react';
import ProudctCard from './components/ProudctCard'; // افترضت أن هذا المكون موجود
import Model from './components/ui/Modal';
import Input from './components/ui/Input';
import Button from './components/ui/Button';   // افترضت أن هذا المكون موجود
import { fromInputList, productList } from './data'; // افترضت أن هذه البيانات موجودة
import type { IFormInput, IProudct } from './components/interface';

const App: React.FC = () => {
  // --- STATES ---
  const [product, setProduct] = useState<IProudct>({
    id: 0,
    title: '',
    description: '',
    imageUrl: '',
    price: 0,
    category: { name: '', imageUrl: '' },
    colors: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  
  // ٢. نحدد نوع useRef بشكل صريح ليخبر TypeScript أنه سيشير إلى عنصر إدخال
  const firstInputRef = useRef<HTMLInputElement>(null);

  // --- HANDELER ---
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProduct({
      ...product,
      [name]: value
    })
  };

  function closeModal() {
    setIsOpen(false);
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
      </div>
    );
  });

  return (
    <main className="container mx-auto">
      <Model 
        isOpen={isOpen} 
        closeModal={closeModal} 
        title="Add a new product" 
        initialFocus={firstInputRef}
      >
        <div className="my-5">
          {renderFormInput}
        </div>
        <div className="flex gap-3 justify-start">
          <Button className="flex-1 bg-blue-600 ...">Submit</Button>
          <Button onClick={closeModal} className="flex-1 bg-gray-600 ...">Cancel</Button>
        </div>
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