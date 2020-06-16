function Numbers() {
    this.newArr = [];
    this.newString = "";
    this.newStringReversed = "";
    this.switch = 0;
    this.userInput = "";
}

Numbers.prototype.numberArray = function () {
    if (isNaN(this.userInput)) {
      } else {
        for (i = 0; i < this.userInput + 1; i++) {
            this.newArr.push(i)
        }
        
        this.newStringReversed = this.newArr.join().split(',').reverse()
        this.newString = this.newArr.join().split(',')

        if (this.switch === 0) {
            for (i = 0; i < this.newString.length; i++) {
                if (this.newString[i].includes("3")) {
                    this.newString[i] = "Won't you be my neighbor?"
                } else if (this.newString[i].includes("2")) {
                    this.newString[i] = "boop!"
                } else if (this.newString[i].includes("1")) {
                    this.newString[i] = "beep!"
                }
            }
                return this.newString
        }
        if (this.switch === 1) {
            for (i = 0; i < this.newStringReversed.length; i++) {
                if (this.newStringReversed[i].includes("3")) {
                    this.newStringReversed[i] = "Won't you be my neighbor?"
                } else if (this.newStringReversed[i].includes("2")) {
                    this.newStringReversed[i] = "boop!"
                } else if (this.newStringReversed[i].includes("1")) {
                    this.newStringReversed[i] = "beep!"
                }
            }
                return this.newStringReversed
        }
    }
}

$(document).ready(function () {
    let counter = 0;
    $("#reset").click(function () {
        $("#results").hide()
        $("#resultsReversed").hide()
        $('#userInput').val('');
    });
    $("#submit").click(function () {
        let number = new Numbers()
        number.switch = 0
        counter += 1
        $("#results").show();
        $("#resultsReversed").hide();
        number.userInput = parseInt($("#userInput").val())
        if (isNaN(number.userInput)) {
            $("#results").text("Please enter a number")
        }
        $("#results").text(number.numberArray())
        if (counter === 1) {
            $("#roboRogers").show();
            $("#roboRogers2").hide();
            $("#roboRogers3").hide();
        } else if (counter === 2) {
            $("#roboRogers").hide();
            $("#roboRogers2").show();
            $("#roboRogers3").hide();
        } else if (counter === 3) {
            $("#roboRogers").hide();
            $("#roboRogers2").hide();
            $("#roboRogers3").show();
            counter = 0;
        }
    });
    $("#submitReversed").click(function () {
        counter += 1
        let number = new Numbers()
        number.switch = 1
        number.counter += 1
        $("#results").hide();
        $("#resultsReversed").show();
        number.userInput = parseInt($("#userInput").val())
        if (isNaN(number.userInput)) {
            $("#resultsReversed").text("Please enter a number")
        }
        $("#resultsReversed").text(number.numberArray())
        if (counter === 1) {
            $("#roboRogers").show();
            $("#roboRogers2").hide();
            $("#roboRogers3").hide();
        } else if (counter === 2) {
            $("#roboRogers").hide();
            $("#roboRogers2").show();
            $("#roboRogers3").hide();
        } else if (counter === 3) {
            $("#roboRogers").hide();
            $("#roboRogers2").hide();
            $("#roboRogers3").show();
            counter = 0;
        }
    });
});