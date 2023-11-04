const Wrapper = document.querySelector(".sliderWrapper");
const menuitem = document.querySelectorAll(".menuitem");

const products = [
{
 id: 1,
 title: "Air Force",
 price: 150,
 colors: [
   {
     code: "black",
     img: " img/id 1.1 size 2.png",
   },
   {
     code: "darkblue",
     img:"img/id 1.2 size 2.png",
   },
  ],
 },
 {
    id: 2,
    title: "Air Jorden",
    price: 200,
    colors: [
      {
        code: "green",
        img: "img/id 2.1 size 9.png",
      },
      {
        code: "grey",
        img:"img/id 2.2 size.png",
      },
     ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 250,
        colors: [
          {
            code: "yello",
            img: "img/id 3.1 size 2_.png",
          },
          {
            code: "blue",
            img:"img/id 3.2.png",
          },
         ],
        },
        {
            id: 4,
            title: "Crater",
            price: 400,
            colors: [
              {
                code: "purple",
                img: "img/id 4.1.png",
              },
              {
                code: "orange",
                img:"img/id 4.2.png",
              },
             ],
            },
            {
                id: 5,
                title: "Hippie" ,
                price: 430,
                colors: [
                  {
                    code: "white",
                    img: "img/id 5.2.png",
                  },
                  {
                    code: "darkpurple",
                    img:"img/id 5.1.png",
                  },
                 ],
                },

];

let choosenProduct = products[0]

   const currentProductImg = document.querySelector(".productImg");
   const currentProductTitle = document.querySelector(".productTitle");
   const currentProductPrice = document.querySelector(".productPrice");
   const currentProductColors = document.querySelectorAll(".color");
   const currentProductSizes = document.querySelectorAll(".size");

menuitem.forEach((item, index) => {
    item.addEventListener("click", () => {

    //change the choosen slide
    Wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price
    currentProductImg.src = choosenProduct.colors[0].img

    //assing new colors
    currentProductColors.forEach((color, index) => {
       color.style.backgroundColor = choosenProduct.colors[ index ].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click" , () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click" , () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor= "White"
            size.style.color= "Black"  
        }) 
     size.style.backgroundColor= "black"
    size.style.color= "White"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display="flex"
});

close.addEventListener("click",() => {
    payment.style.display="none"
});
