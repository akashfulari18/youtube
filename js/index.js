import { navbar } from "../components/navbar.js"
// console.log(navbar)

document.getElementById("navbar").innerHTML=navbar()

// Url : https://youtube.googleapis.com/youtube/v3/search?key=[ AIzaSyBZi6lAJVau_X6ZF9BIjPdSW20Ig81YNp4] 

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}
// 1.function defination
// 2.make fetch call = 

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_input}&key=${API_KEY}


const API_KEY="AIzaSyBZi6lAJVau_X6ZF9BIjPdSW20Ig81YNp4"
let searchVideos= async ()=>{
    
    
    try {
        
        

        let search_input=document.getElementById("search_term").value
        let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search_input}&key=${API_KEY}&order=viewCount`)
    
        // console.log(res)
        
        let data= await res.json()
        
        // console.log(data)
        let movieArr=data.items
        // console.log('movieArr:', movieArr)
        localStorage.setItem("movies",JSON.stringify(movieArr))
        appendVideos(movieArr)
        
        
    } catch (error) {
        console.log('error:', error)
        
    }
    
    
    
}
document.getElementById("searchMovie").addEventListener("click",searchVideos)

let videos=document.getElementById("addVideos")
const appendVideos= (data)=>{
    videos.innerHTML=null
    data.forEach(({ snippet ,id :{ videoId }}) => {
        let div=document.createElement("div")
        div.id="card"
        div.addEventListener("click",()=>{
            openInNewPage(snippet ,videoId)
        })

        let p_title=document.createElement("p")
        p_title.innerText=snippet.title

        let p_channel_name=document.createElement("p")
        p_channel_name.innerText=snippet.channelTitle
        
        let thumbnail =document.createElement("img")
        thumbnail.className="yt_Img"
        thumbnail.src=snippet.thumbnails.high.url
        
        div.append(thumbnail,p_title,p_channel_name)
        videos.append(div)
        
    });
    // localStorage.setItem("movies",JSON.stringify(data))
}

const openInNewPage=(vd,Id)=>{
    console.log(vd,Id)
    let data={
        vd,
        Id
    }
    localStorage.setItem("video",JSON.stringify(data))
  window.location.href="./vedio.html"

}

// login 


document.getElementById("login_page").addEventListener("click",goToLogin)

function goToLogin(){
    window.location.href='./auth.html'
}


// corner userName

let userCred=JSON.parse(localStorage.getItem("userCred"))
document.getElementById("profile").innerText=userCred.name[0]























// function appendVideos(data){
//     // vedios.innerHTML=null
//     data.forEach(({ snippet }) => {
//         videos.innerHTML += `
//         <div id="card">

//         <img class= "yt_Img" src=${snippet.thumbnails.high.url} alt="">
//         <p>${snippet.title}</p>
//         <p>${snippet.channelTitle}</p>

//        </div>
//         `
//     });


// }





// to fetch vedios for landing page

const appendVideo= (data)=>{
    videos.innerHTML=null
    data.forEach(({ snippet ,id }) => {
        let div=document.createElement("div")
        div.id="card"
        div.addEventListener("click",()=>{
            openInNewPage1(snippet ,id)
        })

        let p_title=document.createElement("p")
        p_title.innerText=snippet.title

        let p_channel_name=document.createElement("p")
        p_channel_name.innerText=snippet.channelTitle
        
        let thumbnail =document.createElement("img")
        thumbnail.className="yt_Img"
        thumbnail.src=snippet.thumbnails.high.url
        
        div.append(thumbnail,p_title,p_channel_name)
        videos.append(div)
        
    });
    // localStorage.setItem("movies",JSON.stringify(data))
}

const openInNewPage1=(vd,Id)=>{
    console.log(vd,Id)
    let data={
        vd,
        Id
    }
    localStorage.setItem("video",JSON.stringify(data))
  window.location.href="./vedio.html"

}



        let res= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}&maxResults=50&regionCode=IN`)
        // console.log(res)
        
        let data= await res.json()
        console.log(data)
        
        let videoArr=data.items
        console.log('videoArr:', videoArr)

        localStorage.setItem("vidArr",JSON.stringify(videoArr))
        appendVideo(videoArr)
        
        

//   ' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
