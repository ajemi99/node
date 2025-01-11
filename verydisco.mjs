
let word = process.argv[2] 
let arr = []
let w

if(word.includes(" ")){
   w = word.split(" ")
    
 
 
for (let i = 0; i < w.length; i++) {
    if (w[i].length % 2 ==0){
        let ele = w[i].slice(-w[i].length/2) + w[i].slice(0,w[i].length/2)
        
         arr.push(ele)
          
    }else{
       let  el =  w[i].slice(Math.ceil(-(w[i].length/2))) + w[i].slice(0,Math.ceil(w[i].length/2))
       arr.push(el)
    } 
 }
 let str = arr.join(' ')   
    
}else{
    if (word.length % 2 ==0){
        let ele = word.slice(-word.length/2) + word.slice(0,word.length/2)
        var str = ele
         
          
    }else{
       let  el =  word.slice(Math.ceil(-(word.length/2))) + word.slice(0,Math.ceil(word.length/2))
       str = el
    } 
   
    
 }


   
    


