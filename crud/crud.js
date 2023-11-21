var productname=document.getElementById("productnameinput");
var productprice=document.getElementById("productpriceinput");
var productdescription=document.getElementById("productcateinput");
var productcategory=document.getElementById("productdescriptioninput");
var productcontainer=[];

if(localStorage.getItem("Product")!=null)
{
    productcontainer=JSON.parse(localStorage.getItem("Product"));
    display() 
}
function test()
{

    var product=
    {
        name:productname.value,
        price:productprice.value,
        description:productdescription.value,
        category:productcategory.value,
    }
    productcontainer.push(product);
    localStorage.setItem("Product",JSON.stringify(productcontainer));
    clearform();
    display();
}
function clearform()
{
    productname.value="";
    productprice.value="";
    productdescription.value="";
    productcategory.value="";
}
function display()
{
    var tablerow="";
    for(var i=0;i<productcontainer.length;i++)
    {
    tablerow += `<tr class="border-b border-slate-300">
    <td class=" px-4 py-4">${i}</td>
    <td class=" px-4 py-4">${productcontainer[i].name}</td>
    <td class=" px-4 py-4">${productcontainer[i].price}</td>
    <td class=" px-4 py-4">${productcontainer[i].category}</td>
    <td class=" px-4 py-4">${productcontainer[i].description}</td>
    <td class=" px-4 py-4"><button onclick="deleteindex(${i});display()" class= "p-1.5 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-slate-50">Delete</button></td>
    <td class=" px-4 py-4"><button class= "p-1.5 text-green-600 border border-green-600  rounded-md hover:bg-green-600 hover:text-slate-50">Update</button></td>
  </tr>`
    }
    document.getElementById("producttable").innerHTML=tablerow;
}

function deleteindex(index)
{
    productcontainer.splice(index,1);
    localStorage.setItem("Product",JSON.stringify(productcontainer));

}