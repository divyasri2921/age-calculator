
//     const Now = new Date();
// console.log(Now);
// console.log(Now.getMonth());
// console.log(Now.getFullYear())

// const birthDate =new Date(2024,0,26)
// console.log(birthDate);
// days = birthDate- Now;
// console.log(days);


// const dateInput=document.querySelector("Input");
// const currentDate= new Date ();
// const birthDate=new Date(1999,9,29);
// const  Days=currentDate.getDays();
// const newDate= currentDate-birthDate;
// newDate =parseInt(Math.floor(Days/86400000))
// console.log(newDate)

// const pElement=document.querySelector("p");
// getBirthday.addEventListener("Input",()=>{
    
//     Days = getBirthday-Now;

//     pElement.innerText = 'Hello! welcome youre'  
//     + Years +"Years" + Month + 'Month' + Days+ 'Days Old.';
// })

let userInput =document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
 
function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 =birthDate.getMonth() + 1;
    let y1 =birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1 ;
    let y2 = today.getFullYear();

}
