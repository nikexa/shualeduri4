let darkmode= localStorage.getItem("darkmode")
const themeSwitch=document.getElementById("theme-switch")

const enableDarkmode=()=>{
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode","active")
}
const disableDarkmode=()=>{
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

if(darkmode==="active")enableDarkmode()

themeSwitch.addEventListener("click",()=>{
    darkmode=localStorage.getItem("darkmode")
    darkmode!== "active"?enableDarkmode():disableDarkmode()
})


let form=document.getElementById("form")
let input=document.getElementById("username")
let saxeli=document.getElementById("Name")
let link =document.getElementById("link")
let bio=document.getElementById("Bio")
let Secondbio=document.getElementById("Bioo")
let joinedtime=document.getElementById("JoinedTime")
let SecondLeft=document.querySelector(".Second-left")
let ErrorText=document.getElementById("ErrorText")
let SecondErrorText=document.getElementById("SecondErrorText")
let Divqveda=document.querySelector(".qveda")
ErrorText.textContent=""
SecondErrorText.textContent=""

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    getData()
    input.value=""
    
})


async function getData() {
    try{
        let username=input.value
        const res= await fetch(`https://api.github.com/users/${username}`)
        const data=await res.json()
        console.log(data);
        
        scriptToHTML(data)
    }catch(error){
        console.log(error);
    }
}





function scriptToHTML(data){
    ErrorText.textContent=""
    SecondErrorText.textContent=""
    if(!data.login){
        ErrorText.textContent="No results"
        SecondErrorText.textContent="No results"
    }
    else{
        
   
        

        
        
        SecondLeft.innerHTML=`
        <img src=${data.avatar_url} alt=""> 
        `
        saxeli.textContent=data.name
        link.textContent=data.login
        bio.textContent=data.bio
        Secondbio.textContent=data.bio



        ErrorText.textContent=""
        SecondErrorText.textContent=""

        Divqveda.innerHTML=`
         <div class="Div-stats">
                    <div class="Div-repos">
                        <p id="repos">Repos</p>
                        <p id="reposNumber"></p>
                    </div>
                    <div class="Div-followers">
                        <p id="followers">Followers</p>
                        <p id="followersNumber"></p>
                    </div>
                    <div class="Div-following">
                        <p id="following">Following</p>
                        <p id="followingNumber"></p>
                    </div>




                </div>



                <div class="links">
                    <div class="location">
                        <i class="fa-solid fa-location-dot"></i>
                        <p id="location"></p>
                    </div>
                    <div class="twitter">
                        <i class="fa-brands fa-twitter"></i>
                        <p id="twitter"></p>
                    </div>
                    <div class="linkk">
                        <i class="fa-solid fa-link"></i>
                        <a href=""><p id="linkkk"></p></a>
                    </div>
                    <div class="shenoba">
                        <i class="fa-solid fa-building"></i>
                        <p id="shenoba">@github</p>
                    </div>


                </div>
        `
        let location=Divqveda.querySelector("#location")
        let twitter=Divqveda.querySelector("#twitter")
        let linkk=Divqveda.querySelector("#linkkk")
        let shenoba=Divqveda.querySelector("#shenoba")
        let reposNumber=Divqveda.querySelector("#reposNumber")
        let followersNumber=Divqveda.querySelector("#followersNumber")
        let followingNumber=Divqveda.querySelector("#followingNumber")

        if(!data.bio){
            bio.textContent="This profile has no bio"
        }
        if(!data.bio){
            Secondbio.textContent="This profile has no bio"
        }
        joinedtime.textContent=data.created_at

        location.textContent=data.location
        if(!data.location){
            location.textContent="Not Available"
        }
        twitter.textContent=data.twitter_username
        if(!data.twitter_username){
            twitter.textContent="Not Available"
        }
        linkk.textContent=data.blog
        if(!data.blog){
            linkk.textContent="Not Available"
        }
        shenoba.textContent=data.company
        if(!data.company){
            shenoba.textContent="Not Available"
        }
        reposNumber.textContent=data.public_repos
        followersNumber.textContent=data.followers
        followingNumber.textContent=data.following


        

getData()

    }

    
}