const SignInBtn=document.getElementById('container1-submit-btn');
const SignInContainer=document.getElementById('container1');
const newsFeedContainer=document.getElementById('container2');





var database=[
    {
        username:"hanan",
        password:"1234"
    },
    {
        username:"andrei",
        password:"777"
    },
    {
        username:"ingram",
        password:"222"
    }
];

var newsfeed=[
     {
        username:"bobby",
        timeline:"so tired"
     },
     {
        username:"sally",
        timeline:"so cool javascript is"
     },
     {
      username:"mitch",
      timeline:"wahhhh its cool"
     },
];

var username = document.getElementById('username');
var password =document.getElementById('password');
var error=document.querySelector('.error');


SignInBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      
      signIn(username,password);
})


function signIn(user,pass){
    
    if(isUserValid(user,pass)){
      SignInContainer.classList.add('hidden');
      newsFeedContainer.classList.remove('hidden');
        updateNewsfeed();
        console.log(newsfeed);
    }else{
        
        username.value='';
        password.value='';
        error.classList.remove('hide');
        setTimeout(()=>{
            error.classList.add('hide');
        },3000)
    }
}




function isUserValid(username,password){

    for(let i=0;i<database.length;i++){
        if(username.value === database[i].username && password.value === database[i].password){
            
            return true;
        }
    }
   
    return false;
   
}
const newsfeed_container=document.getElementById('newsfeed');

function updateNewsfeed(){
    newsfeed_container.innerHTML='';

    

    for(let i=0;i<newsfeed.length;i++){
        
      let box=document.createElement('div');
      let name_box=document.createElement('div');
      let timeline_box=document.createElement('div');
      let name=document.createElement('h3');
      let timeline=document.createElement('p');
  
      box.classList.add('user-box');
      name_box.classList.add('user-name');
      timeline_box.classList.add('user-timeline');
      timeline.classList.add('timeline');
  
      name_box.appendChild(name);
      timeline_box.appendChild(timeline);
      box.appendChild(name_box);
      box.appendChild(timeline_box);


         name.innerText=newsfeed[i].username;
         timeline.innerText=newsfeed[i].timeline;
         
         console.log(box);
         newsfeed_container.appendChild(box);
    }

}
    


// sign in page auto writing

const textEl=document.getElementById('textunderlogo');

const text='Share your thoughts with the world!';
let idx=1;
textEl.classList.add('mini-logo');

writeTextonSigInpage();

function writeTextonSigInpage(){
    textEl.innerText=text.slice(0,idx);

    idx++;

    if(idx>text.length){
        idx=1;
    }

    setTimeout(writeTextonSigInpage,1000/5);
}