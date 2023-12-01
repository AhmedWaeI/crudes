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
function add()
{

    var product=
    {
        name:productname.value,
        price:productprice.value,
        description:productdescription.value,
        category:productcategory.value,
    }
    if(validatename()==true)
    {
        productcontainer.push(product);
        localStorage.setItem("Product",JSON.stringify(productcontainer));
        clearform();
        display();   
    }
    else
    {
        alert("Please Enter Valid Name");}
    
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
function search(term)
{
var tablerow="";
for(var i=0;i<productcontainer.length;i++)
{
    if(productcontainer[i].name.toLowerCase().includes(term.toLowerCase()))
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
}
document.getElementById("producttable").innerHTML=tablerow;

}
function validatename()
{
    var regex = /^[A-Z][a-z]{3,8}$/;
    if(regex.test(productname.value)==true)
    {
        return true;
    }
    else return false;
}
function validateage()
{
    var regex = /^(80|[1-7][0-9])$/;
    if(regex.test(productname.value)==true)
    {
        return true;
    }
    else return false;
}
