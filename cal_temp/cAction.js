

//function clock (pamenter)notation=>{body}
function clock(){
    const hr= document.querySelector("#hr");
    const min= document.querySelector("#min");
    const sec= document.querySelector("#sec");
    //button style
    const buttonProperties =document.getElementById("time");
    const timeDisplayed =hr.hidden; //if hidden, if not =!
    //when event>click:
    buttonProperties.addEventListener("click",function (){
        if (timeDisplayed){
            hr.hidden=false;
            min.hidden=false;
            sec.hidden=false;
            buttonProperties.style.top = "11vh";
            buttonProperties.textContent= "Hide Time";
            buttonProperties.style.left= "43%";
        }else{
            hr.hidden = true;
            min.hidden = true;
            sec.hidden = true;
            buttonProperties.style.top="1vh";
            buttonProperties.textContent= "Show Time";
        }
                    
    });
    //display time
    let date= new Date();

        let hours= date.getHours();
        //template literal `expression in string lit` as a placeholder for val of hours var
        //slice string, last 2 characters  
        hr.innerText= `0${hours}`.slice(-2)+ ":"; 
        //minutes
        min.innerText= `0${date.getMinutes()}`.slice(-2)+ ":";
        //seconds
        sec.innerText= `0${date.getSeconds()}`.slice(-2);
        //repeat clock() at specified intervals until clearInterval is called or the window is closed.
        const showTime = setInterval(clock, 1000); //user select interval?- reminder
    }
//when webpage loads
// window.onload= clock; 