var productName = document.querySelector("[name='productName']");
var url = document.querySelector("[name='url']"); 
var productList = [];
var mainBtn = document.querySelector("mainBtn");

if (localStorage.getItem("productList") != null) {
    productList = JSON.parse(localStorage.getItem("productList"))
    displayProducts()
}
 else {
productList = []

}
function addProduct() {   

  if( validateProductName()=== true && validateurl()=== true ){

         var product = {
        name:productName.value,
        url:url.value,

      };
      clearForm();
      productList.push(product);
      localStorage.setItem("productList", JSON.stringify(productList));
      displayProducts();
    } 

  }


function clearForm() {
    productName.value ='';
    url.value=``;
}

function displayProducts() {
    var cartoona = ``;

    for (var i = 0; i < productList.length; i++) {
      cartoona +=  `<tr>
                    <td><span>${productList[i].name}</span></td>
                    <td>
                    <button class="visit" ><a class="visit" href="${productList[i].url}" target="_blank" >Visit</a></button>
                </td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
                    </td>
                </tr>`
    }
    document.getElementById("productData").innerHTML = cartoona;
}


function deleteProduct(index) {
    productList.splice(index, 1)
    displayProducts(productList)
    localStorage.setItem("productList", JSON.stringify(productList))
}



function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;

    if (regex.test(productName.value) == true) {
                document.getElementById("name-validation").classList.replace("d-block", "d-none");

    return true;
    } else {
        document.getElementById("name-validation").classList.replace("d-none","d-block")
     return false ;
    }
}

function validateurl() {
var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

if(regex.test(url.value)==true){
    document.getElementById("url-validation").classList.replace("d-block", "d-none");
    return true;
}
 else {
    document.getElementById("url-validation").classList.replace("d-none","d-block")
 return false ;
}
}
    

