var arr = [
    {name: "Petals of rose", image: "https://images.unsplash.com/photo-1518831696273-f1886ea5f920?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animal of town", image: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "The crowd of city", image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "orange pelled", image: "https://plus.unsplash.com/premium_photo-1671119151604-d2af993980ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Fruits of plant", image: "https://images.unsplash.com/photo-1507654304600-18d902b183b4?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Web design", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "toy", image: "https://images.unsplash.com/photo-1734034873537-6a75e0f7aa13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "cup", image: "https://plus.unsplash.com/premium_photo-1661311816510-2d6f0573e634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "love", image: "https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "car", image: "https://images.unsplash.com/photo-1733858864100-138aaea0917b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "girl", image: "https://plus.unsplash.com/premium_photo-1734354794200-49aec81e395d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "fox", image: "https://images.unsplash.com/photo-1734378377292-212b58560ff8?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    {name: "grand", image: "https://plus.unsplash.com/premium_photo-1734374334914-db6f0bb7e135?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "blue", image: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDhttps://images.unsplash.com/photo-1734507382924-cd7b52ab7eef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "model", image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "home", image: "https://plus.unsplash.com/premium_photo-1733259723636-d0df24b07bab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "girl", image: "https://images.unsplash.com/photo-1734113230569-56b1bbbf06ee?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "hill", image: "https://plus.unsplash.com/premium_photo-1673483274231-cd017d1147dd?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

function showTheCards() {
    var clutter = "";
    arr.forEach(function(obj) {
        clutter += `<div class="box"> 
                        <img class="cursor-pointer" src="${obj.image}" alt="image"> 
                        <div class="caption">${obj.name}</div> 
                    </div>`;
    });
    document.querySelector(".container").innerHTML = clutter;
}
function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput")
   input.addEventListener("focus", function(){
    document.querySelector(".overlay").style.display = "block"; 
    })
    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none"; 
     })
     input.addEventListener("input",function(){
        const filteredArray = arr.filter(obj => obj.name.startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj) {
            clutter +=`<div class="res flex px-8 py-3">
            <i class="ri-search-line.font-semibold-mr-5"></i>
            <h3-class="font-semibold">${obj.name}</h3>
            </div>`
        })
        document.querySelector(".searchdata").style.display= "block";
          document.querySelector(".searchdata").innerHTML= clutter;
    })
    
}

handleSearchFunctionality();
showTheCards();
