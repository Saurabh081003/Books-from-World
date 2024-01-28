
let url = fetch("https://openlibrary.org/search/authors.json?q=twain")
url.then((value)=>{
    return value.json()
}).then((response)=>{
    let res= response
    let ihtml=""
    for(i in res){
        let data  = res[i]
        for(j in data){
            let d=data[j]
            console.log(d)
            ihtml+=`<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">${d.name}</h2>
                <h4 class="card-subtitle mb-2 text-body-secondary">${d.top_work}</h4>
                <p class="card-text">${d.key}</p>
            </div>
            </div>`
         }    
         
    }
    let  t= document.body
         t.innerHTML=ihtml
    
})




    
    
