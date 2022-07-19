//reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

let xhr=new XMLHttpRequest()

xhr.open("GET","https://restcountries.com/v2/all")
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        let data=JSON.parse(this.response)
        let sum=0
        let totalpopulation=data.reduce(function(pre,curr){
            return pre+curr.population
        },0)
        console.log(`total population: ${totalpopulation}`)
    }
    else{
        console.log("Error")
    }
}
xhr.send()
