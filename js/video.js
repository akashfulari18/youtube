import { navbar } from "../components/navbar.js"
// console.log(navbar)

document.getElementById("navbar").innerHTML=navbar()





let videoData=JSON.parse(localStorage.getItem("video")) || [] 
// let vData=JSON.parse(localS


let card=document.getElementById("videoShow")
console.log(videoData)

// let videoPlay=document.getElementById("")
const appendVideo=()=>{
  
    card.innerHTML=`
    <div id="cards">
    <iframe src="https://www.youtube.com/embed/${videoData.Id}?autoplay=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2>${videoData.vd.title}</h2>
    <h4>${videoData.vd.description}</h4>
    <div id="down">
        <h1>${videoData.vd.channelTitle}</h1>
        <p>${videoData.vd.publishTime}</p>
    </div>
        
</div> 
    `

}





document.getElementById("bdy").addEventListener("load",appendVideo)
// document.getElementById("bdy").addEventListener("load",appendVideos)

appendVideo(videoData)
// appendVideos(vData)


let recommendation=document.getElementById("rcmndtn")
recommendation.addEventListener("load",recMovie)

let mData=JSON.parse(localStorage.getItem("movies")) || []

recMovie(mData)

function recMovie(data){
    
        for(let i=0;i<data.length;i++){
            
        if(data[i].snippet.title !==videoData.vd.title){
           

            
                let div=document.createElement("div")
                div.id="card"
                div.addEventListener("click",()=>{
                    playVideo(data[i].id.videoId,data[i].snippet)
                    goToTop()
                })
        
                let p_title=document.createElement("p")
                p_title.innerText=data[i].snippet.title
        
                let p_channel_name=document.createElement("p")
                p_channel_name.innerText=data[i].snippet.channelTitle
                
                let thumbnail =document.createElement("img")
                thumbnail.className="yt_Img"
                thumbnail.src=data[i].snippet.thumbnails.high.url
                
                div.append(thumbnail,p_title,p_channel_name)
                recommendation.append(div)
                
       

        // recommendation.innerHTML +=`
        //     <div id="rec_vedios">
                
        //              <img src="${data[i].snippet.thumbnails.high.url}" alt="">
                
        //         <div>
        //             <p>${data[i].snippet.channelTitle}</p>
        //             <p>${data[i].snippet.title}</p>
        //         </div>
                
        //     </div>
        //     `
            // document.getElementById("rec_vedios").addEventListener("click",showVideo)

            
        }
    
    }

}


function playVideo(id,s){

    console.log(s)
    card.innerHTML=`
    <div id="cards">
    <iframe src="https://www.youtube.com/embed/${id}?autoplay=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2>${s.title}</h2>
    <h4>${s.description}</h4>
    <div id="down">
        <h1>${s.channelTitle}</h1>
        <p>${s.publishTime}</p>
    </div>
   
        
</div> 
    `
    // console.log(id)
}


function goToTop(){
    window.scrollTo(0,0)
}





document.getElementById("logo").addEventListener("click",goToHome)

 export function goToHome(){
    window.location.href='./index.html'
}

let userCred=JSON.parse(localStorage.getItem("userCred"))
document.getElementById("profile").innerText=userCred.name[0]