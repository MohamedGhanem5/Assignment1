
                                                            //Assignment1
//A. Part1: Coding Questions (7.5 Grades):

//1. 
     function convrt(str){
          console.log(Number(str) + 7);
     }
     convrt("123");

//2.
     function getCheck(x) {
          if (!x)
              console.log("invalid");  
          else
               console.log("valid");       
     }
     getCheck();

//3.
     function getOddNum()
     {
          for(let i =1; i<= 10 ;i++){
          if (i%2 == 0)
               continue;

          console.log(i);       }
     }
     getOddNum();     

//4.
     const arr = [1,2,3,4,5];
     let x = arr.filter((ele)=>{
          return ele%2 ==0;
     })
     console.log(x);

//5.
     function mergeArrs(arr1=[a,b,c], arr2=[d,e,f]){
          const arr3= [...arr1 , ...arr2];
          console.log(arr3);
     }     
     mergeArrs([1,2,3],[4,5,6]);
     
//6.
     function getDay(day) {
          switch (day) {
               case 1:
                    console.log("Sunday");
                    break;
               case 2:
                    console.log("Monday");
                    break;
               case 3:
                    console.log("Tuesday");
                    break;
               case 4:
                    console.log("Wednsday");
                    break;
               case 5:
                    console.log("Thursday");
                    break;
               case 6:
                    console.log("Friday");
                    break;
               case 7:
                    console.log("Saturday");
                    break;
               default:
                    console.log("Enter num from 1 to 7");
          }     
     }
     getDay(2);

// 7.
    const arr2 = ["a","ab","abc"];
    const y = arr2.map((ele)=>{
     return ele.length;
    }) 
    console.log(y);
   
// 8.
     function getDivisible(number){
          if(number%3 ==0 && number%5 ==0)
               console.log("Divisible by both");
     }
     getDivisible(15);

// 9.
     const square = (x=5)=>{
          return (x**2);
     }
     console.log(square());

// 10.
     const person = {name:'John',age: 25};
     function getFormat(name , age){
          console.log(`${name} is ${age} years old`);
     }      
     getFormat(person.name , person.age);
     
// 11.
     function getSum(num1=0,num2=0,num3=0,num4=0,num5=0,num6=0){
          let sum = num1 + num2 + num3 + num4 + num5 + num6;
          console.log(`sum: ${sum}`);
     }
     getSum(1,2,3,4,5);

// 12.
     function messageOfSuccess() {
          return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Success");
                                 }, 3000); 
                                                  });
}
messageOfSuccess().then(message => console.log(message));

// 13.
     const numbers=[1,3,7,2,4];
     function largestNum(arr){
          let largest = arr[0];
          for (let i = 1; i<arr.length; i++) {
               if (arr[i] > largest)
                    largest = arr[i];
          }
          return largest;
     }
     console.log(largestNum(numbers));

// or  console.log(Math.max(...numbers));
     
// 14.
     let user={name:"John", age:30};
     function getKeys(obj)
     {
          console.log(Object.keys(obj));    
     }
     console.log(getKeys(user));
     
// 15.
     function getSplit(str){
          console.log(str.split(" "));            
     }
     console.log(getSplit("The quick brown fox"));
     

     