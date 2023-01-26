import { navbar } from "../components/navbar.js"
// console.log(navbar)

document.getElementById("navbar").innerHTML=navbar()


class User {

    constructor() {

    }


    validateUsername(username) {

        return username.includes('@') ? false : true

    }

    validatePassword(password) {
        return password.length < 8 ? false : true

    }


   async signUp(n, e, u, p, m, d) {

        //  check if user is submitting valid username & password

        // u=>username
        // p=>password

        let isValidated = this.validateUsername(u) && this.validatePassword(p)
        console.log(isValidated)

        if (isValidated) {
            // good to store the data

            this.name = n
            this.email = e
            this.username = u
            this.password = p
            this.mobile = m
            this.description = d
            
            
            const register_api=`https://masai-api-mocker.herokuapp.com/auth/register`
            
            const response = await fetch(register_api,{

                method:'POST',
                body: JSON.stringify(this),
                headers:{
                    'Content-Type':'application/json',
                },
                
            })
            
            const data= await response.json()
            console.log('data:', data)
            // nature of fetch->function
            // if it function what does it eat->arguments
            // first arguments ->url
            // whats the default request of fetch ->GET
            // we are this giving data to server
        }



    }


    async Login(u,p){
        const login_data ={
            username:u,
            password:p
        }

        const login_api=`https://masai-api-mocker.herokuapp.com/auth/login`

        const response= await fetch(login_api,{

            method:'POST',
            body:JSON.stringify(login_data),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const data= await response.json();
        // console.log('data:', data)
        return data

    }
}

let user = new User()

document.getElementById("auth").addEventListener("click",register)


function register (){
    const reg_form=document.getElementById("reg_form")
    // console.log("inside register",reg_form)

    const name=reg_form.name.value
    const email=reg_form.email.value
    const username=reg_form.username.value
    const password=reg_form.password.value
    const mobile=reg_form.mobile.value
    const description=reg_form.description.value

    // console.log(name,email,username,password,mobile,description)
 
    user.signUp(name,email,username,password,mobile,description)
    // console.log('user:', user)

}


// register()
document.getElementById("log").addEventListener("click",Login)

async function Login(){
    
    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    let  { token }=await user.Login(username,password)
    // console.log(token)
    getProfile(username,token)


    let userCred=JSON.parse(localStorage.getItem("userCred"))
document.getElementById("profile").innerText=userCred.name[0]


}

Login()


const getProfile = async (username , token)=>{
    let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let res= await fetch(api_link,{

        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type":"application/json"
        }
    })

   let data= await res.json()
   localStorage.setItem("userCred",JSON.stringify(data))
    // console.log('data:', data)
    alert("registration successful...")
    window.location.reload()
    
}


// console.log(userCred.name)




document.getElementById("logo").addEventListener("click",goToHome)

 export function goToHome(){
    window.location.href='./index.html'
}



