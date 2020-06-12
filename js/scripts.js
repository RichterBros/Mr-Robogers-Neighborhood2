function Numbers(userInput, newArr, newString, newStringReversed) {
    this.userInput = userInput;
    this.newArr = newArr;
    this.newString = newString;
    this.counter = 0;
    this.newStringReversed = newStringReversed;
}

const number = new Numbers()

Numbers.prototype.numberArray = function () {
    this.counter += 1;
    this.userInput = parseInt($("#userInput").val());
    this.newArr = [];
    this.newString = "";
    this.newStringReversed = "";
    
    if (isNaN(this.userInput)) {
        console.log("not a number")
        $("#results").text("Please enter a number")
    } else {

        if (this.counter === 1) {
            $("#roboRogers").show();
            $("#roboRogers2").hide();
            $("#roboRogers3").hide();
        } else if (this.counter === 2) {
            $("#roboRogers").hide();
            $("#roboRogers2").show();
            $("#roboRogers3").hide();
        } else if (this.counter === 3) {
            $("#roboRogers").hide();
            $("#roboRogers2").hide();
            $("#roboRogers3").show();
            this.counter = 0;
        }

        for (i = 0; i < this.userInput + 1; i++) {
            this.newArr.push(i)
        }
        this.newStringReversed = this.newArr.join().split(',').reverse()
        this.newString = this.newArr.join().split(',')
        
        for (i = 0; i < this.newString.length; i++) {
            if (this.newString[i].includes("3") && this.newStringReversed[i].includes("3")) {
                this.newString[i] = "Won't you be my neighbor?"
                this.newStringReversed[i] = "Won't you be my neighbor?"
            } else if (this.newString[i].includes("2")) {
                this.newString[i] = "boop!"
                this.newStringReversed[i] = "boop!"
            } else if (this.newString[i].includes("1")) {
                this.newString[i] = "beep!"
                this.newStringReversed[i] = "beep!"
            }
        }
        $("#results").text(this.newString)
        $("#resultsReversed").text(this.newStringReversed)
        this.newArr = []
    }
}

$(document).ready(function () {
    
    $("#reset").click(function () {
        location.reload();
    });
    
    $("#submit").click(function () {
        number.numberArray();
        console.log(number.newStringReversed)
        console.log(number.newString)
    });

    $("#submitReversed").click(function () {
        number.numberArray();
        console.log(number.newStringReversed)
        console.log(number.newString)
    });

});


