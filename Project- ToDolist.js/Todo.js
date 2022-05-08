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
    console.log(`${add} was added to the list`);
} 
else if(input=="delete"){
    let index=prompt("What is the Index number of removovable item?");
    const deleted=todolist.splice(index,1); 
    console.log(`${deleted[0]} was deleted from the list`); 
}
 

input=prompt("What would you like to do?");
} 
