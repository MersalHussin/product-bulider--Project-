import type { IFormInput, IProudct } from "../components/interface";

export const productList: IProudct[] = [
  {
    id: 1,
    title: "2022 Toyota Taxi",
    description: "A reliable and fuel-efficient taxi, perfect for urban transportation and daily use.",
    imageUrl: "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/113027/glanza-facelift-right-front-three-quarter.jpeg?isig=0&q=80",
    price: "950.0",
    colors: ["teal", "red"],
    category: {
      name: "Taxi",
      imageUrl: "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/113027/glanza-facelift-right-front-three-quarter.jpeg?isig=0&q=80",
    },
  },
  {
    id: 2,
    title: "2023 BMW M4",
    description: "A high-performance sports car with sleek design and powerful engine—built for speed lovers.",
    imageUrl: "https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
    price: "3200.0",
    colors: ["green", "green", "green"],
    category: {
      name: "Sport",
      imageUrl: "https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
    },
  },
  {
    id: 3,
    title: "2022 Audi Q7",
    description: "A luxury SUV offering spacious interior, advanced tech, and smooth driving experience for families.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWi_bWP9aV5sb_QlgxU8GZCyzVJvgkDVhB7A&s",
    price: "2800.0",
    colors: ["blue", "gray", "white"],
    category: {
      name: "SUV",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWi_bWP9aV5sb_QlgxU8GZCyzVJvgkDVhB7A&s",
    },
  },
  {
    id: 4,
    title: "2022 Mercedes E-Class",
    description: "A premium sedan that blends comfort, elegance, and cutting-edge technology for everyday luxury.",
    imageUrl: "https://ymimg1.b8cdn.com/resized/car_version/24142/pictures/8549594/webp_mobile_listing_main_14671_st1280_046.webp",
    price: "3500.0",
    colors: ["silver", "black", "navy"],
    category: {
      name: "Sedan",
      imageUrl: "https://ymimg1.b8cdn.com/resized/car_version/24142/pictures/8549594/webp_mobile_listing_main_14671_st1280_046.webp",
    },
  },
  {
    id: 5,
    title: "2023 Tesla Model 3",
    description: "A fully electric car with autonomous driving features and modern design—eco-friendly and futuristic.",
    imageUrl: "https://www.automoli.com/common/vehicles/_assets/img/gallery/f49/tesla-model-3-facelift-2023.jpg",
    price: "4200.0",
    colors: ["white", "red", "black"],
    category: {
      name: "Electric",
      imageUrl: "https://www.automoli.com/common/vehicles/_assets/img/gallery/f49/tesla-model-3-facelift-2023.jpg",
    },
  },
];


export const fromInputList: IFormInput[] = [
  {
    id: 1,
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter product title",
  }
  ,{
    id: 2,
    label: "Description",
    name: "description",
    type: "text",
    placeholder: "Enter product description",
  }
  ,{
    id: 3,
    label: "Image URL",
    name: "imageUrl",
    type: "text",
    placeholder: "Enter product image URL",
  }
  ,{
    id: 4,
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Enter product price",
  }
]