import Image from "./Image";
import type { IProudct } from "./interface";
import Button from "./ui/Button";
import { textSlicer } from "./utils/functions";

interface IProps {
  product: IProudct
}

const ProudctCard = ({product}: IProps) => {
  return (
    <>
      <div key={product.id} className="border-1 border-gray-400 p-5 rounded-md text-md font-bold  flex flex-col">
        <div className="overflow-hidden rounded-md">
          <Image
            className="hover:rounded-2xl object-cover hover:scale-105 transition-all w-full h-50 "
            imageUrl= {product.imageUrl}
            altText={product.imageUrl}
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
                <span className={`w-5 h-5 bg-blue-500  rounded-2xl cursor-pointer`}></span>
                <span className={`w-5 h-5 bg-red-500  rounded-2xl cursor-pointer`}></span>
                <span className={`w-5 h-5 bg-green-400  rounded-2xl cursor-pointer`}></span>
        </div>
        <div className="flex justify-between items-center">
          <span>{product.price}$</span>
          <Image
            className="w-10 h-10 h object-cover  rounded-full"
            imageUrl={product.imageUrl}
            altText={product.imageUrl}
          />
        </div>
        <div className="buttons flex gap-3">
          <Button  className="bg-blue-600" width="w-full">Edit</Button>
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
