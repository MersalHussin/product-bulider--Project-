interface IProps {}

const ProudctCard = ({}: IProps) => {
  return (
    <>
      <div className="border-1 border-gray-400 p-5 rounded-md text-md font-bold  flex flex-col">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmJz4rDwL2Bni4RTUpBFbAjMcwLQfHa7DlSfWB4fRzJ13rTqtflfFgbp93lq5depP7dE&usqp=CAU"
          alt="car-TAxi"
        />
        <h3 className="mb-2">2022 TAXI Car For Men</h3>
        <p className="text-gray-600">
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
            <img className="w-10 h-10 h object-cover  rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmJz4rDwL2Bni4RTUpBFbAjMcwLQfHa7DlSfWB4fRzJ13rTqtflfFgbp93lq5depP7dE&usqp=CAU" alt="Taxi" />
        </div>
        <div className="buttons flex gap-3">
            <button className="bg-blue-600 text-white px-3 py-3 rounded-md mt-3 hover:bg-blue-700 transition-all flex-1 cursor-pointer">
                Add to Cart
            </button>
            <button className="bg-red-500 text-white px-3 py-3 rounded-md mt-3 hover:bg-red-600 transition-all flex-1 cursor-pointer">
                Buy Now
            </button>
        </div>
      </div>
    </>
  );
};

export default ProudctCard;

// ** sm -> md -> lg -> xl -> 2xl
// ** 640 -> 768 -> 1024 -> 1280 -> 1536
// ** mobile first approach
