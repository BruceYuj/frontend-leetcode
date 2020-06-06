/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  if(!digits.length) return ""
  let helper2=0
  let helper1=0
  const s=digits.reduce((prev,cur)=>{
      let helper=cur%3
      if(helper===1) helper1++
      if(helper===2) helper2++
     return  (prev+helper)%3
  },0)
  digits.sort((x,y)=>x-y)


  let result=[]
  if(!s){
      if(!digits[digits.length-1]) return "0"
      return digits.reverse().join('')
  }else{
      let count
      let helper
      if(helper1){
          count=1
          helper=s
      }else{
          count=2
          helper=3-s
      }
      for(let i=0;i<digits.length;i++){
          if(digits[i]%3===helper&&count>=1){
              count--
              continue
          }
          result.push(digits[i])
      }
      if(!result.length) return ""
      if(!result[result.length-1]) return "0"
      return result.reverse().join('')
  }
};