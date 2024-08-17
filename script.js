let list=document.querySelector("#to-do-list");
let addInput=document.querySelector("#input-form input");
let searchInput=document.querySelector("#search-form input");
let addBtn=document.querySelector("#input-form button");
list.addEventListener("click" , (e)=>{
if(e.target.nodeName=="SPAN"&& e.target.className=="delete-btn"){
    e.target.parentNode.remove()
    if(list.children.length==0){
        let listEmpty=document.createElement("div");
        listEmpty.style.textAlign="center"
        listEmpty.style.color="#333"
        listEmpty.innerText="list is empty"
        listEmpty.id="emptyMsg"
        list.appendChild(listEmpty)
    }
}
})
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!addInput.value){
return
    }
    if(document.querySelector("#emptyMsg")){
        document.querySelector("#emptyMsg").remove()
    }
list.append(createListItem(addInput.value))
addInput.value=""

})
function createListItem(itemValue){
    let item=document.createElement("li")
    let title=document.createElement("span")
    let btn=document.createElement("span")
    item.className="to-do-item"
title.className="title"
title.innerText=itemValue
btn.className="delete-btn"
btn.innerText="delete"
item.appendChild(title)
item.appendChild(btn)
return item;
}
searchInput.addEventListener("input",(e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#emptyMsg")){
            return
        }
        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display="flex"
    }else{
element.style.display="none"
        }
    })
})

