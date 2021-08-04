async function getData(url) {
    try {
        
        let res=await fetch(url)
        let data = await res.json()
        
        return data
    }
    catch (err)
    {
        console.log('err:', err)

        
    }
}

function appendData(products,parent)
{
   var  {meals:[{strMealThumb,strMeal}]} =products
    let div = document.createElement("div");
    let p= document.createElement("p");
    let img= document.createElement("img");
    img.src =  strMealThumb;
        p.innerText = strMeal;
        div.append(img, p);
        parent.append(div);
 

}

export {getData,appendData}