const changeColor = ()=>{
    try {
        const getHtmlElement = document.querySelector(".my-text");
        const newcolor=document.createElement("button");
        newcolor.setAttribute("style","color:Yellow;");
        newcolor.textContent="Hello Romee";
        getHtmlElement.appendChild(newcolor);
    }
     catch (error) {
        console.log(error.message) 
    }
}
       
   
   const createList = ()=>{
    try{
        const getHtmlElement = document.querySelector(".my-list");
        const newList = document.createElement("li");
        newList.textContent = "Romee";
        getHtmlElement.appendChild(newList);
 
    } catch (error) {
        console.log(error.message);
    }
       

   }

const createRow = () => {
    try {
        const getHtmlElement = document.querySelector(".dynamic-row");
        const newRow = document.createElement("tr");

        const th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.textContent = "1";
        newRow.appendChild(th);

        const tdName = document.createElement("td");
        tdName.textContent = "Khan";
        newRow.appendChild(tdName);

        const tdGender = document.createElement("td");
        tdGender.textContent = "Male";
        newRow.appendChild(tdGender);

        const tdAge = document.createElement("td");
        tdAge.textContent = "15";
        newRow.appendChild(tdAge);

        getHtmlElement.appendChild(newRow);
    } catch (error) {
        console.log(error.message);
    }
}
const changebackground = ()=>{
    try {
        const getHtmlElement = document.querySelector(".div");
       const newcolor=document.createElement("button");
       newcolor.setAttribute("style","color:red;");
       newcolor.textContent="Hello Romee";
        
       getHtmlElement.appendChild(newcolor);
    } catch (error) {
        console.log(error.message);
    }

    }
