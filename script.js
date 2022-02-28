var slider = document.getElementById("rate");
var output = document.getElementById("rateText");

output.innerHTML  = slider.value+"%";
slider.oninput = function() {
    output.innerHTML = this.value+"%";
}


function compute() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let targetYear = parseInt(new Date().getFullYear()) + parseInt(years);

    if (!isPositiveInteger(principal)) {
        alert("Please enter a positive integer as principal!");
        document.getElementById("principal").focus();
    }

    let resultText = document.getElementById("result");
    resultText.innerHTML = "If you deposit <span class=\"highlight\">"
        +principal+"</span>,<br/>";
    resultText.innerHTML += "at an interest rate of <span class=\"highlight\">"
        +slider.value+"%</span>.<br/>";
    resultText.innerHTML += "You will receive an amount of <span class=\"highlight\">"
        +calculateInterest(principal, years, rate)+"</span>,<br/>";
    resultText.innerHTML += "in the year <span class=\"highlight\">"
        +targetYear+"</span><br/>";
}

var calculateInterest = function (principal, years, rate) {
    return (principal*rate*years/100);
}

function isPositiveInteger(str) {
    str = str.trim();
    if (!str) {
        return false;
    }
    str = str.replace(/^0+/, "") || "0";
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0;
}
