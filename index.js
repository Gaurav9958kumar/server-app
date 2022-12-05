const url="https://server-app-ncc0.onrender.com/product"

window.onload=()=>{
    getData();
}

async function getData(){
    let res=await fetch(url);
    res=await res.json();
    console.log(res);
}

async function storeData(){
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

    let res=await fetch(url,{
        method: "POST",
      body:JSON.stringify(obj),
      headers:{"Content-Type":"application/json",},
    })
    // getData();
    form.reset();
}