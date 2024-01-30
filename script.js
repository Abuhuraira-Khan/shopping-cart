const plusBtn_1 = document.getElementById("plusBtn-1");
const minusBtn_1 = document.getElementById("minusBtn-1");
const amntInp_1 = document.getElementById("inp-1");
const orPrice_1 = document.getElementById("or-price-1");
const amntInp_2 = document.getElementById("inp-2");
const minusBtn_2 = document.getElementById("minusBtn-2");
const plusBtn_2 = document.getElementById("plusBtn-2");
const orPrice_2 = document.getElementById("or-price-2");


count = 0;
countP = 1219;

count_2 = 0;
countP_2 = 59;
// first plus button
plusBtn_1.addEventListener("click", function(){
    amntInp_1.value = ++count;
    
     orPrice_1.textContent = "$" + count * countP ;

    document.getElementById("s-t-p").textContent= "$" + count * countP;
    
    document.getElementById("t-p").textContent= "$" + count * countP;

    upDatePrice();

});

minusBtn_1.addEventListener("click", function(){
    amntInp_1.value = --count;

        orPrice_1.textContent ="$" + count * countP ;

        document.getElementById("s-t-p").textContent= "$" + count * countP;
    
        document.getElementById("t-p").textContent= "$" + count * countP;

    if(amntInp_1.value <= 0){
         count = 0;
    }

    upDatePrice();

});

// second product

plusBtn_2.addEventListener("click", function(){
    amntInp_2.value = ++count_2;
    
     orPrice_2.textContent = "$" + count_2 * countP_2;

    
    document.getElementById("s-t-p").textContent= "$" + count_2 * countP_2 ;    
    
    document.getElementById("t-p").textContent= "$" + count_2 * countP_2;

    upDatePrice();

});

minusBtn_2.addEventListener("click", function(){
    amntInp_2.value = --count_2;

        orPrice_2.textContent = "$" + count_2 * countP_2 ;

        document.getElementById("s-t-p").textContent= "$" + count_2 * countP_2;
    
        document.getElementById("t-p").textContent= "$" + count_2 * countP_2;
        
    if(amntInp_2.value <= 0){
         count_2 = 0;
    }

    upDatePrice();
});

function upDatePrice(){
   let totalPrice = 0;

   if (count > 0) {


    totalPrice += count * countP;

    
   }

   if (count_2 > 0) {

    totalPrice += count_2 * countP_2;
    
   }

   document.getElementById("s-t-p").textContent= "$" + totalPrice;    
   document.getElementById("t-p").textContent= "$" + totalPrice;

};


// my about section

const aboutMe = document.getElementById("about-me");


function checkBtn(){
    if(aboutMe.style.display === "none"){
        aboutMe.style.display="block";
        aboutMe.style.transition = "1s";
        document.querySelector(".check-out").textContent = "Closs"
    }
    else{
        aboutMe.style.display = "none";
        aboutMe.style.transition = "1s";
        document.querySelector(".check-out").textContent = "Check Out"

    }
};

// about me social section
let github = document.querySelector('.fa-github');
github.addEventListener("click", function(){
    window.location.href = "https://github.com/Abuhuraira-Khan";
});

let youtube = document.querySelector('.fa-youtube');
youtube.addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/channel/UCUlZoc4yu94X-mGvfLHUbuQ";
});

let fiverr = document.querySelector('.fiverr');
fiverr.addEventListener("click", function(){
    window.location.href = "https://www.fiverr.com/abuhuraira_k";
});

let upwork = document.querySelector('.fa-upwork');
upwork.addEventListener("click", function(){
    window.location.href = "https://www.upwork.com/freelancers/~0146bc59c2efc5d002";
});

let freelancer = document.querySelector('.freelancer');
freelancer.addEventListener("click", function(){
    window.location.href = "https://www.freelancer.com.bd/u/abuhurairakhan27";
});

// portfolio button

document.getElementById("portBtn").addEventListener("click", function(){
    alert("Portfolio Not Available Right Now  For Contact abuhurairakhan3128@gmail.com"  );
});