let input=prompt("What would you like to do?");  
const todolist=["Maths","Chem"]
while(input!=="quit"){  
    
if(input=="list" ){ 
    console.log("*****************"); 
        for(let i=0;i<todolist.length;i++){
          console.log(`${i}:${todolist[i]}`);
      }

    }
else if(input=="add"){
    let add=prompt("What would you like to add?");
    todolist.push(add); 
} 
else if(input=="delete"){
    let index=prompt("What is the Index number of removovable item?");
    todolist.splice(index,1);
}
 

input=prompt("What would you like to do?");
} 
