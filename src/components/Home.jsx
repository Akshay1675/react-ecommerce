import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
"https://rukminim2.flixcart.com/image/416/416/xif0q/television/n/d/e/ua43cue60aklxl-samsung-original-imagp7vgwf7emfqa.jpeg?q=70"

const img2 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/television/k/i/b/-original-imaggsnk8gwmeg3h.jpeg?q=70"

const img3 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/television/n/h/y/-original-imagg24zpbk2h7tx.jpeg?q=70"

const img4 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/television/u/h/n/-original-imaggwfzpgv9pbht.jpeg?q=70"

const img5 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/m/b/n/-original-imagfdf4xnbyyxpa.jpeg?q=70"

const img6 = 
"https://rukminim2.flixcart.com/image/416/416/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70"

const img7 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/r/c/-original-imaghzah5hzzt2hw.jpeg?q=70"

const img8 = 
"https://rukminim2.flixcart.com/image/416/416/ks99aq80/computer/y/z/7/na-gaming-laptop-lenovo-original-imag5ve3jvhgvsnx.jpeg?q=70"

const img9 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/f/p/-original-imaghxenhnpyhn5u.jpeg?q=70"

const img10 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/q/w/galaxy-s23-ultra-5g-smartphone-sm-s918bzkcins-samsung-original-imagqjczezmgquhb.jpeg?q=70"

const img11 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/a/b/-original-imaghkvv2u8jxajh.jpeg?q=70"

const img12 = 
"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70"

const Home = () => {

  const productList = [
    {
      name: "Samsung 43",
      price: 27999,
      imgSrc: img1,
      id: "hhcbchhshqsjwxdb",
    },
    {
      name: "Xiaomi 55 inch",
      price: 29999,
      imgSrc: img2,
      id: "cjvjvjbchhshqdhdht",
    },
    {
      name: "LG Smart",
      price: 39999,
      imgSrc: img3,
      id: "cjvjvjbchhshqsjwxdbkiff",
    },
    {
      name: "Samsung Frame",
      price: 64999,
      imgSrc: img4,
      id: "cjvjvjbchhshqsjwgfhj",
    },
    {
      name: "Apple Macbook",
      price: 89999,
      imgSrc: img5,
      id: "cjvjvjbchhshqschch",
    },
    {
      name: "Hp Gaming",
      price: 60999,
      imgSrc: img6,
      id: "cjvjvjbchhshjtxvdb",
    },
    {
      name: "Lenovo",
      price: 55999,
      imgSrc: img7,
      id: "cjvjvjbchhshasdf",
    },
    {
      name: "Dell Gaming",
      price: 65999,
      imgSrc: img8,
      id: "cjvjvjbchhshqsjwxdb",
    },
    {
      name: "Iphone 14 pro",
      price: 99999,
      imgSrc: img9,
      id: "cjvjvjbchhbfts",
    },
    {
      name: "Samsung S23 ultra",
      price: 99999,
      imgSrc: img10,
      id: "cjvjvjbchhshvnvys",
    },
    {
      name: "Xiaomi 12",
      price: 25999,
      imgSrc: img11,
      id: "cjvjvjusdhshqsjwxdb",
    },
    {
      name: "Nothing 2",
      price: 35999,
      imgSrc: img12,
      id: "cjvjasdbbbbhhswxdb",
    },
    
  ]

  const dispatch = useDispatch();
  
  const addToCardHandler = (options) => {
    dispatch({type:"addToCart",payload:options});
    dispatch({ type: "calculatePrice" });
  
    toast.success("Added To Cart");
  }

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard 
        key={i.id}
        imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={addToCardHandler}
        />
      ))

      }
    </div>
  );
  
};

const ProductCard = ({ name, id, price, handler, imgSrc }) =>(
    <div className="ProductCard">
        <img src={imgSrc}  alt={name} />
        <p>{name}</p>
        <h4>₹{price}</h4>
        <button onClick={()=> handler({ name, price, id, quantity: 1, imgSrc })}>Add to card</button>
    </div>
);

export default Home
