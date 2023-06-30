const conatiner = document.querySelector("#name");
const btns = document.querySelector("button");
const p = document.querySelector("p");


btns.addEventListener("click", function () {
    p.innerHTML =" "

    fetch("https://flagcdn.com/en/codes.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
        
                

                for(let key in data){
                    
                    // console.log(`${key} : ${data[key]}`)
                    if(data[key].toLowerCase()===conatiner.value){

                        // console.log("ram")
                        let img = document.createElement("img");
                        img.src = "https://flagcdn.com/256x192/"+key+".png";
                        p.append(img)
                        conatiner.value=" "
                       
                }
                }


 
            
                


                
            

        })

            
         



})