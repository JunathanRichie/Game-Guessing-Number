const randomNumber=Math.ceil(Math.random()*100)
let count=5;

$("#input-submit").on("click",function(){
    let getNumber=$("#input-number").val()
    numberChecker(getNumber);
    count--;
    if(count<=0){
        $("#chance").text("You Lose the number is "+randomNumber);
    }
})

$(document).on("keydown",function(e){
    if(e.key=="Enter"){
        let getNumber=$("#input-number").val()
        numberChecker(getNumber);
        count--;
        console.log($("#chance").text(count));
        if(count<=0){
            $("#text-chance").text("You Lose the number is "+randomNumber);
        }
    }
})

function numberChecker(number){
    if(number==randomNumber){
        $(".result").html("<p>YOU ARE RIGHT THE NUMBER IS " +randomNumber+" </p>");
    }else if(number<randomNumber){
        $(".result").html("<p>You guess smaller number</p>");
    }else{
        $(".result").html("<p>You guess bigger number</p>");
    }
}