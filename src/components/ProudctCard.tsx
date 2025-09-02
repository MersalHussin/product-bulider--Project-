import Image from "./Image";
import Button from "./ui/Button";

interface IProps {}

const ProudctCard = ({}: IProps) => {
  return (
    <>
      <div className="border-1 border-gray-400 p-5 rounded-md text-md font-bold  flex flex-col">
        <div className="overflow-hidden rounded-md">
          <Image
            className="hover:rounded-2xl object-cover hover:scale-105 transition-all  w-full "
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmJz4rDwL2Bni4RTUpBFbAjMcwLQfHa7DlSfWB4fRzJ13rTqtflfFgbp93lq5depP7dE&usqp=CAU"
            altText="Taxi"
          />
        </div>
        <h3 className="mt-4 mb-2 text-3xl">2022 TAXI Car For Men</h3>
        <p className="text-gray-600 text-md font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita in distinctio odio aperiam dolorum quaerat quis deleniti sunt
          facilis!
        </p>
        <div className="flex items-center gap-2 my-3">
          <span className="w-5 h-5 bg-yellow-400 rounded-2xl cursor-pointer"></span>
          <span className="w-5 h-5 bg-blue-600 rounded-2xl cursor-pointer"></span>
          <span className="w-5 h-5 bg-black rounded-2xl cursor-pointer"></span>
        </div>
        <div className="flex justify-between items-center">
          <span>1000.000$</span>
          <Image
            className="w-10 h-10 h object-cover  rounded-full"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmJz4rDwL2Bni4RTUpBFbAjMcwLQfHa7DlSfWB4fRzJ13rTqtflfFgbp93lq5depP7dE&usqp=CAU"
            altText="Taxi"
          />
        </div>
        <div className="buttons flex gap-3">
          <Button className="bg-blue-600">Add to Cart</Button>
          <Button className="bg-red-500 ">Delete</Button>
          <Button className="bg-green-500 ">Success</Button>
          <Button className="bg-gray-500 ">Cancel</Button>
          <Button className="bg-pink-500 ">Loading</Button>
        </div>
      </div>
    </>
  );
};

export default ProudctCard;

// ** sm -> md -> lg -> xl -> 2xl
// ** 640 -> 768 -> 1024 -> 1280 -> 1536
// ** mobile first approach
