import faker from 'faker';



const mount = (el) =>{
  
    let products = '';

    for(let i = 0;i<5;i++){
        const name=faker.commerce.productName();
        products +=`<div>${name}</div>`;
    }
    el.innerHTML=products;
    console.log(products);
      
};

//Context/situation #1
//We are running this file in development in isolation
//We are using our local index.html file
//Which defintely has an with an id of 'dev-product'
//We want to immediately render our app into that element
if(process.env.NODE_ENV ==='development'){
  const el = document.querySelector('#dev-products');

  //Assuming our container doesnt have an element with id 'dev-produts'
  if(el){
    //we are probably running in isolation
    mount(el);
  }
}

//Context/situation #2
// We are running this file in development or production
//through the container app
//No guarantee that an element with an id of 'dev-products'
//We do not want try to immediately render the app

export {mount};
