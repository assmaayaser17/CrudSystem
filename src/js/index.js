var productNameInput= document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productDescInput = document.getElementById('productDesc')

var index=0;




var ProductList=[];

if( localStorage.getItem('ProductContainer') !==null) {
        ProductList=JSON.parse(localStorage.getItem('ProductContainer')) 
        displayData();


}




function addProduct() {

//we want when we press on btn calling this function and display values in inputs>>Object

var Product={
      name:productNameInput.value,
      price:productPriceInput.value,
      desc:productDescInput.value  
}



ProductList.push(Product);
localStorage.setItem('ProductContainer',JSON.stringify (ProductList))
displayData();
clearForm();
console.log(ProductList);


}

// addProduct(); //we want this function working when>>we press on btn >>so we call it in btn >>on click
//Clear form .............>>input=null calling it after push

function clearForm() {
        productNameInput.value= null;
        productPriceInput.value=null;
        productDescInput.value=null;



}


 function displayData() {
        var Cartonaa='';

        for( i=0; i<ProductList.length ; i++ ) {
                Cartonaa+=`<div class="card bg-slate-300 p-5 m-5 w-4/12  rounded-[5px]" >
        <p class="text-2xl m-5">ProductName:${ProductList[i].name} </p>
        <p class="text-2xl m-5">ProductPrice:${ProductList[i].price}</p>
        <p class="text-2xl m-5">ProductDescription:${ProductList[i].desc} </p>


        <button id="btnUpdate" onclick="setformUpdate(${i})" class=" bg-slate-50 w-36 rounded-[5px] p-3 m-5  hover:bg-pink-200">Update </button>
        <button id="btnDelete" onclick="deleteItem(${i})" class=" bg-slate-50 w-36 rounded-[5px] p-3  hover:bg-pink-200">Delete </button>

        

    </div>`








        }

        document.getElementById('CardInput').innerHTML=Cartonaa;


}


function deleteItem(indexItem){

        ProductList.splice(indexItem,1);
        

        displayData()
        localStorage.setItem('ProductContainer',JSON.stringify (ProductList))
        console.log(ProductList)



}
 
 function setformUpdate(indexElement){
       productNameInput.value=ProductList[indexElement].name
       productPriceInput.value=ProductList[indexElement].price
       productDescInput.value=ProductList[indexElement].desc
        
       index=indexElement;





 }


 function updateData() {

        var Product={
                name:productNameInput.value,
                price:productPriceInput.value,
                desc:productDescInput.value  
          }
          
          console.log(Product)
          ProductList.splice(index,1,Product)

          displayData();
          clearForm();
          localStorage.setItem('ProductContainer',JSON.stringify (ProductList))



 }