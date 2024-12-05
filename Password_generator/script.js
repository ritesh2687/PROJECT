let slidervalue =document.getElementById("slidervalue");
let inputslider = document.getElementById("inputslider")
let output_box = document.getElementById("output_box")
let lowercase = document.getElementById("lowercase")
let Uppercase = document.getElementById("Uppercase")
let Numcase = document.getElementById("Numcase")
let Symbolcase = document.getElementById("Symbolcase")
let id_button1 = document.getElementById("id_button1 ")
let copyicon = document.getElementById("copyicon");
let id_button2 = document.getElementById("id_button2 ")


//showing input slider value
slidervalue.textContent =inputslider.value;
inputslider.addEventListener('input',()=>{
        slidervalue.textContent =inputslider.value;

});

id_button2.addEventListener('click',()=>{
    output_box.value="";

})

id_button1.addEventListener('click',()=>{
    output_box.value =generatePassword();

})
let Lowerchars="abcdefghijklmnopqrestuvwxyz";
let Upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let NUMchars="0123456789";
let Symbolchars="~!@#$%&";
//function 

function generatePassword(){
    let genPassword="";
    let allchars="";
    allchars +=lowercase.checked ? Lowerchars : "";
    allchars +=Uppercase.checked ? Upperchars : "";
    allchars +=Numcase.checked ? NUMchars : "";
    allchars +=Symbolcase.checked ? Symbolchars : "";

    if(allchars == "" || allchars.length == 0){
        return genPassword;
    }
    let i=1;
    while(i<=inputslider.value)
    {

        genPassword +=allchars.charAt(Math.floor(Math.random() *allchars.length));
        i++;
    }
    return genPassword;
    
}

copyicon.addEventListener('click', ()=>{
    if(output_box != "" || output_box.length >0){
    navigator.clipboard.writeText(output_box.value);
    copyicon.innerText="check";
    copyicon.title="password Coppied"

    setTimeout(()=>
    {
        copyicon.innerHTML="content_copy";
        copyicon.title=""
    },2000)
}
})