const tick=document.querySelector("#add_icon");
const del=document.querySelector("#delete_image");
const task=document.querySelector("#task_input");
const content=document.querySelector("#main-tasks");
const checkoX=document.querySelector(".tasks #delete_image");
//Tasks Array


function insertHtml(text)
{
    var divd=document.createElement("div");
    divd.classList.add("tasks");

    var check=document.createElement("input");
    check.setAttribute("type","checkbox");
    
    var t_value=document.createElement("div");
    t_value.setAttribute("id","task");
    t_value.innerText=text;

    var del=document.createElement("div");
    del.setAttribute("class","delete_image");

    del.innerHTML="<i class='fa fa-trash-o fa-1x'></i>"
    divd.appendChild(check);
    divd.appendChild(t_value);
    divd.appendChild(del);
    content.appendChild(divd);
}

content.addEventListener("click",checker);

function checker(event){
     
       if(event.target.tagName=="INPUT"){
           if(event.target.checked===true){
            var parent=event.target.parentElement;
            parent.classList.add("completed");
           }
           else{
            var parent=event.target.parentElement;
            parent.classList.remove("completed");
           }
       }
  
        else if(event.target.className=="delete_image"){
           
           var c=event.target.parentElement;
           var elemet=event.target.parentElement.parentElement;
           elemet.removeChild(c);
        }

        else if(event.target.className=="fa fa-trash-o fa-1x"){
            var c=event.target.parentElement.parentElement;
            var el=event.target.parentElement.parentElement.parentElement;
            el.removeChild(c);
        }
}
document.querySelector("body").addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        tick.focus();
        tick.click();
    }
});
tick.addEventListener("click",function(event){
    var s=task.value; 
    if(s!=""){
        insertHtml(s);
    }  
    task.value="";
});

    
    


