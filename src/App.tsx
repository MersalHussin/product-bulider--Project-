// src/App.tsx

import { useState, useRef, Fragment } from "react";
import ProudctCard from "./components/ProudctCard";
import Model from "./components/ui/Modal";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import { categories, fromInputList, productList } from "./data";
import { type IFormInput, type IProudct } from "./components/interface";
import { colors } from "./data/index";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid, } from "uuid";
import SelectMenu from "./components/ui/SelectMenu";
import type { TProductsName } from "./components/types";
import toast, { Toaster } from 'react-hot-toast'

const App: React.FC = () => {
  const defultProduct = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    category: { name: "", imageURL: "" },
    colors: [],
  };

  // --- STATES ---
  const [products, setProducts] = useState<IProudct[]>(productList);
  const [product, setProduct] = useState<IProudct>(defultProduct);
  const [proudctToEdit, setProductToEdit] = useState<IProudct>(defultProduct);
  const [ProductToRemove, setProductToRemove] = useState<IProudct>(defultProduct)
  const [proudctToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });

  const firstInputRef = useRef<HTMLInputElement>(null);

  // --- HANDLERS ---
  const submitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    const validationResult = productValidation({
      title: product.title,
      descraption: product.description,
      price: product.price,
      imageURL: product.imageURL,
      colors: tempColors,
    });

    setErrors(validationResult);

    const hasErrors = Object.values(validationResult).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defultProduct);
    setTempColors([]);
    closeModal();
        toast.success("Product Has been Added",{})

  };

  const submitEditHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    const validationResult = productValidation({
      title: proudctToEdit.title,
      descraption: proudctToEdit.description,
      price: proudctToEdit.price,
      imageURL: proudctToEdit.imageURL,
      colors: tempColors,
    });

    setErrors(validationResult);

    const hasErrors = Object.values(validationResult).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[proudctToEditIdx] = { ...proudctToEdit, colors: tempColors };
    setProducts(updatedProducts);

    setProductToEdit(defultProduct);
    setTempColors([]);
    closeEditModal();
    toast.success("Product Has been Editied",{})

  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onChangeEditHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({ ...proudctToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const removeHandler = () =>{
    console.log("Product Removed")
    setProducts((prev) => prev.filter((product)=> product.id !== ProductToRemove.id))
    closeRemoveModal()
    toast.success("Product Has been Deleated",{})
  }
  


  // Models

  function closeModal() {
    setIsOpen(false);
    // setProduct(defultProduct);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeEditModal() {
    setIsOpenEdit(false);
    setTempColors([]);
  }

  function openEditModal(productToEdit: IProudct, idx: number) {
    setProductToEdit(productToEdit);
    setProductToEditIdx(idx);
    setTempColors(productToEdit.colors || []);
    setIsOpenEdit(true);
  }
  function openRemoveModal() {
    setIsRemoveOpen(true)
  }
  function closeRemoveModal() {
    setIsRemoveOpen(false)
  }

  // --- RENDER METHODS ---
  const renderProductList = products.map((product: IProudct, idx) => (
  <Fragment key={product.id}>
    <ProudctCard
      setProductToRemove={() => setProductToRemove(product)}
      openRemoveModal={() => openRemoveModal()}
      setProductToEdit={setProductToEdit}
      setProductToEditIdx={setProductToEditIdx}
      idx={idx}
      openEditModal={() => openEditModal(product, idx)}
      key={product.id}
      product={product}
    />
  </Fragment>
));
  const renderFormInput = fromInputList.map((input: IFormInput, index) => (
    <div key={input.id} className="flex flex-col gap-2 mb-2">
      <label htmlFor={input.name} className="font-semibold">
        {input.label}
      </label>
      <Input
        id={input.name}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        ref={index === 0 ? firstInputRef : undefined}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => {
    const isSelected = tempColors.includes(color);
    return (
      <div key={color} className="relative">
        <CircleColor
          color={color}
          onClick={() => {
            if (isSelected) {
              setTempColors((prev) => prev.filter((item) => item !== color));
            } else {
              setTempColors((prev) => [...prev, color]);
            }
            if (errors.colors) {
              setErrors((prev) => ({ ...prev, colors: "" }));
            }
          }}
          className={`transition-transform ${
            isSelected ? "ring-2 ring-offset-2 ring-indigo-500 scale-110" : ""
          } ${errors.colors ? "ring-2 ring-red-500" : ""}`}
        />
      </div>
    );
  });

  const renderProductEdit = (
    id: string,
    name: TProductsName,
    label: string,
    type: string
  ) => (
    <div key={id} className="flex flex-col gap-2 mb-2">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={""}
        value={proudctToEdit[name]}
        onChange={onChangeEditHandler}
      />
      <ErrorMessage msg={errors[name]} />
    </div>
  );

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-600 ..." onClick={openModal}>
        Add Product
      </Button>

      {/* Add Product Modal */}
      <Model
        isOpen={isOpen}
        closeModal={closeModal}
        title="Add a new product"
        initialFocus={firstInputRef}
      >
        <form className="my-5" onSubmit={submitHandler}>
          {renderFormInput}
          <div className="mb-5">
            <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} />
          </div>
          <div className="mb-2">
            <label className="font-semibold block mb-1">Colors</label>
            <div className="flex gap-1 justify-left">{renderProductColors}</div>
            {errors.colors && <ErrorMessage msg={errors.colors} />}
          </div>
          <div className="flex flex-wrap my-2 gap-1 justify-left">
            {tempColors.map((color, index) => (
              <span
                key={`${color}-${index}`}
                className={`rounded-sm border-1 border-gray ${
                  color === "white" ? "text-black" : "text-white"
                } p-1 `}
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex gap-3 justify-start">
            <Button className="flex-1 bg-blue-600 ...">Submit</Button>
            <Button type="button" onClick={closeModal} className="flex-1 bg-gray-600 ...">
              Cancel
            </Button>
          </div>
        </form>
      </Model>
      {/* Remove Product */}
      <Model
        isOpen={isRemoveOpen}
        closeModal={closeModal}
        title="Are you Sure to remove this modal"
      >
          <p className="text-gray-500 text-md font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis  eum unde corporis odit voluptatem repellendus minus incidunt laudantium! Quaerat.</p>
<div className="flex gap-3 pt-1  ">
            <Button className="flex-1 bg-red-600 " onClick={removeHandler}>Yes, Remove</Button>
          <Button type="button" onClick={closeRemoveModal} className="flex-1 bg-gray-100 hover:bg-gray-200" style={{color:"black"}}>Cancel</Button>
</div>
      </Model>

      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ...">
        {renderProductList}
      </div>



      {/* Edit Product Modal */}
      <Model
        isOpen={isOpenEdit}
        closeModal={closeEditModal}
        title="Edit Product"
        initialFocus={firstInputRef}
      >
        <form className="my-5" onSubmit={submitEditHandler}>
          {renderProductEdit("title", "title", "Title", "text")}
          {renderProductEdit("description", "description", "Description", "text")}
          {renderProductEdit("imageURL", "imageURL", "ImageURL", "text")}
          {renderProductEdit("price", "price", "Price", "number")}
             <div className="mb-5">
            <SelectMenu selected={proudctToEdit.category} setSelected={(value)=> (setProductToEdit({...proudctToEdit , category: value}))} />
          </div>
          <div className="mb-2">
            <label className="font-semibold block mb-1">Colors</label>
            <div className="flex gap-1 justify-left">{renderProductColors}</div>
            {errors.colors && <ErrorMessage msg={errors.colors} />}
          </div>
          <div className="flex flex-wrap my-2 gap-1 justify-left">
            {Array.from(new Set(tempColors)).map((color) => (
              <span
                key={color}
                className={`rounded-sm border-1 border-gray ${
                  color === "white" ? "text-black" : "text-white"
                } p-1 `}
                style={{ background: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex gap-3 justify-start">
            <Button type="submit" className="flex-1 bg-blue-600 ...">
              Submit
            </Button>
            <Button type="button" onClick={closeEditModal} className="flex-1 bg-gray-600 ...">
              Cancel
            </Button>
          </div>
        </form>
      </Model>
      <Toaster/>
    </main>
  );
};

export default App;