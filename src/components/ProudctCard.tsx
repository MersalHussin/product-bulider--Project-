import Image from "./Image";
import type { IProudct } from "./interface";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";
import { textSlicer } from "./utils/functions";

interface IProps {
  product: IProudct
  setProductToEdit: (product:IProudct) => void
  openEditModal: () => void
}



// -------------- Render ---------------
const ProudctCard = ({product, setProductToEdit , openEditModal}: IProps) => {

    const renderProductColors = product.colors.map((color) => (
    <CircleColor
      color={color}
      key={`${color}`}
    />
  ));

// --------------Handelr---------------
const onEdit = () =>{
setProductToEdit(product)
openEditModal()
}

  return (
    <>
      <div key={product.id} className="border-1 border-gray-400 min-w-85 max-w-85 m-auto p-5 rounded-md text-md font-bold  flex flex-col">
        <div className="overflow-hidden rounded-md">
          <Image
            className="hover:rounded-2xl object-cover hover:scale-105 transition-all w-full h-50 "
            imageURL= {product.imageURL}
            altText={product.imageURL}
          />
        </div>
        <h4 className="mt-4 mb-2 text-2xl">{product.title}</h4>
        <p className="text-gray-600 text-md font-medium">
          {textSlicer(product.description, 65)}
        </p>
        <div className="flex items-center gap-2 my-3">
          {/* {product.colors.map((color, index) => (
            <span
              key={index}
              className={`w-5 h-5 bg-${color}-400  rounded-2xl cursor-pointer`}
            ></span>
          ))} */}
          <div className="flex gap-1 justify-center">{renderProductColors}</div>

        </div>
        <div className="flex justify-between items-center">
          <span>{product.price}$</span>
          <Image
            className="w-10 h-10 h object-cover  rounded-full"
            imageURL={product.category.imageURL}
            altText={product.title}
          />
        </div>
        <div className="buttons flex gap-3">
          <Button  className="bg-blue-600" width="w-full" onClick={onEdit}>Edit</Button>
          <Button className="bg-red-500" width="w-full">Delete</Button>

        </div>
      </div>
    </>
  );
};

export default ProudctCard;

// ** sm -> md -> lg -> xl -> 2xl
// ** 640 -> 768 -> 1024 -> 1280 -> 1536
// ** mobile first approach
