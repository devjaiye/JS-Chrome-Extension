let myLeads = []

const inputEl = document.getElementById("input-el")
const  inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value =" "  //...clear out the input field
    renderLeads()
})

//.... create renderLeads() function 

function renderLeads(){
    let listItem = " "
//..render the leads in the unodered list 
for (let i = 0; i < myLeads.length; i++){

    listItem +=`
    <li> 
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]} 
        </a>
        </li>
    `
}

ulEL.innerHTML = listItem

}





