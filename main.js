var images=["https://img.lovepik.com/element/40121/0007.png_860.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnueTtlwR4TixDL1W11SB8J2W1dRn1w9ZBJsUQxaELfU3tjd-yULuqPho0wEqidL0n3U&usqp=CAU","https://library.kissclipart.com/20181212/fvw/kissclipart-daughter-dibujo-clipart-girl-drawing-daughter-c976a3512a142b3a.jpg","https://i.pinimg.com/600x315/1e/33/cb/1e33cb5afa2d43e7be0b1fff060f8866.jpg","https://images-na.ssl-images-amazon.com/images/I/51KNpAKei-L.jpg"];
var names=["Father" , "Mother" , "Myself" , "Big Sister" , "Family Book"];
var i=0;

function nextslide(){

    document.getElementById("album").src = images[i];
    document.getElementById("familymember_name").innerHTML = names[i];
    i++;
    if (i > 4) {
        i = 0;
    }

}