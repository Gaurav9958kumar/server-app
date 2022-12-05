const url="https://server-app-ncc0.onrender.com/product"

window.onload=()=>{
    getData();
}

async function getData(){
    let res=await fetch(url);
    res=await res.json();
    console.log(res);
    display(res);
}

async function storeData(e){
    e.preventDefault();
    let form=document.getElementById("form");
    let name=form.name;
    let image=form.image;
    let brand=form.brand;
    let price=form.price;

    let obj={
        name:name.value,
        image:image.value,
        brand:brand.value,
        price:+price.value,
        id:Math.random()
    }

     res=await fetch(url,{
        method: "POST",
      body:JSON.stringify(obj),
      headers:{"Content-Type":"application/json",},
    })
    getData();
    form.reset();
}

function display(data){
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach(function(ele){
     let div=document.createElement("div");
     let image=document.createElement("img");
     image.src=ele.image;
     let name=document.createElement("h3");
     name.innerText=ele.name;
     let brand=document.createElement("h3");
     brand.innerText=ele.brand;
     let price=document.createElement("p");
     price.innerText=ele.price;
     let updateBtn=document.createElement("button");
     updateBtn.innerText="Update Price"
     div.append(image,name,brand,price,updateBtn);
     container.append(div);

    })
}