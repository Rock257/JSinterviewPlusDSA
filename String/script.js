// Palindrome  : having mirror image from middle to left or middle to right  (lool ,nan lol)

function isPalindrome(){
   const s = "HEELOO"

//    sanitize the string  
// \W  = non word i.e alphanumeric  
// []  = indicate a capture group  

   const lower = s.toLowerCase().replace(/[\W_]/g , "")

   let left = 0 ;
   let right = s.length-1;

   while(left <right){
    if( s[left] !==s[right]){
        return false
    }
    left ++;
    right --;
   }


    return  true
}

isPalindrome();


// let num = 20;
// let  i =0 ;

// do{
//     console.log(i*2)
//     i++
// }

// while(i<=10);
// VM714:5 0
// VM714:5 2
// VM714:5 4
// VM714:5 6
// VM714:5 8
// VM714:5 10
// VM714:5 12
// VM714:5 14
// VM714:5 16
// VM714:5 18
// VM714:5 20
// 10