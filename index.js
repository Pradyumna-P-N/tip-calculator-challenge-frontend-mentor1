$(".called").hide();
var amount;
var members;
var tipAmnt;

$(".btn").click(function(){
    $(".btn").css("background-color" , "");
    $(this).css("background-color" , "orange");
    var grab = $(this).text();
    console.log(grab);
    amount = $("#amount").val();
    console.log(amount);
    members = $("#person").val();

    if(grab === ""){
        $(".error").text("Enter a tip value.")
    } else if(amount === ""){
        $(".empty").text("Enter the amount.")
    } else {
        if(members === "0"){
            $(".warning").text("Enter a number greater than 0.");
        } else if(members === ""){
            $(".warning").text("Enter a number in the box.")
        } else{
            calcTA(amount , grab , members);
            totalAmnt(amount , tipAmnt , members);
            $(".warning").hide();
            $(".error").hide();
            $(".empty").hide();
        }
    }

    if(grab === "Custom"){
        $("#custom").show();
        $(".btn").hide();
        $(".disappear").hide();
        $(".called").show();
    }
})
function calcTA( value , word , crowd){
    var realWord = parseFloat(word);
    var realValue = parseFloat(value);
    var realCrowd = parseFloat(crowd);
    tipAmnt = realValue * (realWord / 100);
    var perPerson = tipAmnt / realCrowd;
    var fix = tipAmnt.toFixed(2);
    var fixed = perPerson.toFixed(2);
    $("#up").show();
    $("#upper").show();
    $("#up").text(fix);
    $("#upper").text(fixed);
}
$("#custom").click(function(){
    $("input").on("keydown.customTip" , function(event){
        console.log(event.key);
        if (event.key === "Enter"){
            var take = $("#custom").val();
            amount = $("#amount").val();
            members = $("#person").val();

            if(take === ""){
                $(".error").text("Enter a tip value.")
            } else if(amount === ""){
                $(".empty").text("Enter the amount.")
            } else {
                if(members === "0"){
                    $(".warning").text("Enter a number greater than 0.");
                } else if(members === ""){
                    $(".warning").text("Enter a number in the box.")
                } else{
                    calcTA(amount , take , members);
                    totalAmnt(amount , tipAmnt , members)
                    $(".warning").hide();
                    $(".error").hide();
                    $(".empty").hide();
                }
            }
        }
    })
})

function totalAmnt(money , totalMoney , totalPeople){
    var realmoney = parseFloat(money);
    var realTotalMoney = parseFloat(totalMoney);
    var realTotalPeople = parseFloat(totalPeople);
    var totalAmount = realmoney + realTotalMoney;
    var totalAmountPeople = totalAmount / realTotalPeople;
    $("#down").show();
    $("#lower").show();
    $("#down").text(totalAmount.toFixed(2));
    $("#lower").text(totalAmountPeople.toFixed(2));
}

$(".mid2-blue1").click(function(){
    $(".btn").show();
    $("#up").hide();
    $("#upper").hide();
    $("#down").hide();
    $("#lower").hide();
    $(".warning").hide();
    $(".empty").hide();
    $(".error").hide();
    $("#custom").hide();
    $(".called").hide();
    $(".disappear").show();
    $("#amount").val("")
    $("#person").val("")
    $("#custom").val("");
    $("input").off("keydown.customTip");
    $(".btn").css("background-color" , "");
})