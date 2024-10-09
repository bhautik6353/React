import React, { useState } from 'react';

export default function Index() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const array = [
        {
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=90&crop=false",
            name: "Motorola",
            model: "Motorola G85 5G",
            price: "₹16,999",
            category: "Mobile",
            description: "Discover the Moto G85  which has a revolutionary 3D Curved pOLED 120 Hz Display protected by Gorilla Glass 5 for remarkable longevity.With the 50 MP OIS Sony LYTIA 600 Camera system, you can take beautiful pictures in any kind of illumination.",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpOypasCKy4qdLuGHM-urKHTGAMyeO8DYgw&s",
            name: "Samsung",
            model: "Samsung Galaxy S22 Ultra",
            price: "₹84,999",
            category: "Mobile",
            description: "The Galaxy S22 Ultra is a smartphone that has a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate and a 108 MP primary camera. It has a 5000mAh battery and supports 45W fast charging It runs on Android 11 and has a 12GB RAM and 128GB internal storag"
          
          }, {
            image: "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691141505",
            name: "Apple",
            model: "Apple iPhone 14 Pro",
            price: "₹89,900",
            category: "Mobile",
            description: "The iPhone 14 Pro has a 6.1-inch Super Retina X display with a 120Hz refresh rate and a 48 MP primary camera. It has a 3200mAh battery and supports 20W fast charging It runs on iOS 16 and has a 16GB RAM and 512GB internal storage",
          
          
          }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pNc637gFWaVi8Ms5Ff4Na88PPtcswgSy5A&s",
            name: "OnePlus",
            model: "OnePlus 10 Pro",
            price: "₹69,999",
            category: "Mobile",
            description: "The OnePlus 10 Pro has a 6.7-inch AMOLED display with a 120Hz refresh rate and a 48 MP primary camera. It has a 500 mAh battery and supports 80W fast charging It runs on Android 11 and has a 12 GB RAM and 256GB internal storage",
          
          }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS14qMdlrIy2UEL95h0rg1FG_75xfatZSsGA&s",
            name: "Google",
            model: "Google Pixel 7 Pro",
            price: "₹84,999",
            category: "Mobile",
            description: "The Google Pixel 7 Pro has a 6.7-inch OLED display with a 120Hz refresh rate and a 50 MP primary camera. It has a 5124 mAh battery and supports 30W fast charging It runs on Android 13 and has a 12 GB RAM and 512GB internal storage",
          },
          {
            image: "https://m.media-amazon.com/images/I/71xMba-NW-L.jpg",
            name: "Xiaomi",
            model: "Xiaomi 12 Pro",
            price: "₹59,999",
            category: "Mobile",
            description: "The Xiaomi 12 Pro has a 6.7-inch AMOLED display with a 120Hz refresh rate and a 50 MP primary camera. It has a 460 mAh battery and supports 120W fast charging It runs on Android 11 and has a 12 GB RAM and 256GB internal storage",
          
          }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyb8eWgMNo10aogYVpy3X4KZDSzHqs4_UZg&s",
            name: "Vivo",
            model: "Vivo X80 Pro",
            price: "₹79,999",
            category: "Mobile",
            description: "The Vivo X80 Pro has a 6.7-inch AMOLED display with a 120Hz refresh rate and a 50 MP primary camera. It has a 500 mAh battery and supports 80W fast charging It runs on Android 11 and has a 12 GB RAM and 256GB internal storage",
          
          }, {
            image: "https://assets.ajio.com/medias/sys_master/root/20240610/dY6l/6666eca416fd2c6e6a6d57c1/-473Wx593H-469582449-grey-MODEL.jpg",
            name: "T-Shirt",
            model: "Nike",
            price: "₹1,999",
            category: "Cloth",
            description: "The Nike T-Shirt is a casual wear that is made of cotton and has a crew neck design. It is available in various colors and sizes.",
          
          }, {
            image: "https://assets.ajio.com/medias/sys_master/root/20230621/RZNq/6492392842f9e729d75e58a3/-473Wx593H-463295091-blue-MODEL.jpg",
            name: "Blue T-Shirt",
            model: "Adidas",
            price: "₹2,499",
            category: "Cloth",
            description: "The Adidas Blue T-Shirt is a casual wear that is made of cotton and has a crew neck design. It is available in various colors and sizes.",
          
          }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdyHYpCgzEeFThEyZTicuE-Gw6CmahhOZ_g&s",
            name: "Pink T-Shirt",
            model: "Puma",
            price: "₹2,999",
            category: "Cloth",
            description: "The Puma Pink T-Shirt is a casual wear that is made of cotton and has a crew neck design. It is available in various colors and sizes.",
          }, {
            image: "https://rukminim2.flixcart.com/image/850/1000/kiow6fk0-0/t-shirt/s/h/l/l-white-t-shirt-for-mens-and-boys-amayra-enterprises-original-imafyfzfgc5cfcdn.jpeg?q=90&crop=false",
            name: "White T-Shirt",
            model: "Nike",
            price: "₹1,999",
            category: "Cloth",
            description: "The Nike White T-Shirt is a casual wear that is made of cotton and has crew neck design. It is available in various colors and sizes.",
          
          
          },
    ]

        
        const dataarray = array.filter((item) => 
            (category === "" || item.category === category) && 
            item.name.includes(search)
        );
        

    return (
        <div className="container">
            <h1>Search Project</h1>
            <div className="filter-section">
                <input id="search-input" type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
                <select id="category-select" className="category-dropdown" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Mobile">Mobile</option>

                    <option value="Cloth">Cloth</option>
                </select>
            </div>

            <div className="product-list">
                {
                    dataarray.map((e,i)=>{
                      return  <div key={i} className="item">
                            <img className="image" src={e.image}/>
                            <h3 className="name">{e.name}</h3>
                            <p className='model'>{e.model}</p>
                            <p className="price">{e.price}</p>
                            <p className="description">{e.description}</p>


                    </div>
                    })
                }
            </div>
        </div>
    )
}