function Numbers(userInput, newArr, newString, newStringReversed) {
    this.userInput = userInput;
    this.newArr = newArr;
    this.newString = newString;
    this.counter = 0;
    this.newStringReversed = newStringReversed;
    this.switch = 0;
    this.counter = 0;
    this.warning = 0
    this.userInput = ""
}

const number = new Numbers()

Numbers.prototype.numberArray = function () {
    //this.counter += 1;
    //this.userInput = parseInt($("#userInput").val());
    this.newArr = [];
    this.newString = "";
    this.newStringReversed = "";
    
    
    if (isNaN(this.userInput)) {
        console.log("not a number")
       //$("#results").text("Please enter a number")
    } else {

        
        console.log(this.switch)
        for (i = 0; i < this.userInput + 1; i++) {
            this.newArr.push(i)
        }
        this.newStringReversed = this.newArr.join().split(',').reverse()
        this.newString = this.newArr.join().split(',')
        
if(this.switch === 0){

        for (i = 0; i < this.newString.length; i++) {
            if (this.newString[i].includes("3")) {
                this.newString[i] = "Won't you be my neighbor?"
                
            } else if (this.newString[i].includes("2")) {
                this.newString[i] = "boop!"
                
            } else if (this.newString[i].includes("1")) {
                this.newString[i] = "beep!"
                
            }
        }
        console.log(this.newString)
        return this.newString
    }
    
    if(this.switch === 1){

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
        
    
    
    
        
        
        //if (this.switch === 0){
         //   return this.newString
        }
        if (this.switch === 1){
            return this.newStringReversed
        }
    
        //    let outPut = this.newString
    //    let outputReversed = this.newStringReversed
        
     //  $("#results").text(this.newString)
        //$("#resultsReversed").text(this.newStringReversed)
        this.newArr = []
    }


$(document).ready(function () {
    $("#reset").click(function () {
        location.reload();
    });
    
    $("#submit").click(function () {
        number.userInput = parseInt($("#userInput").val())
       
        if (isNaN(this.userInput)) {
            console.log("not a number")
           $("#results").text("Please enter a number")
        }
        number.counter += 1
        number.switch = 0
        console.log(number.switch)
        $("#results").text(number.numberArray())
        console.log(number.newStringReversed)
        console.log(number.newString)
        console.log(number.counter)
        if (number.counter === 1) {
            $("#roboRogers").show();
            $("#roboRogers2").hide();
            $("#roboRogers3").hide();
        } else if (number.counter === 2) {
            $("#roboRogers").hide();
            $("#roboRogers2").show();
            $("#roboRogers3").hide();
        } else if (number.counter === 3) {
            $("#roboRogers").hide();
            $("#roboRogers2").hide();
            $("#roboRogers3").show();
            number.counter = 0;
        }
    });

    $("#submitReversed").click(function () {
        number.userInput = parseInt($("#userInput").val())
        number.switch = 1
        number.counter += 1
        console.log(number.switch)
        $("#resultsReversed").text(number.numberArray())
        console.log(number.newStringReversed)
        console.log(number.newString)
        if (number.counter === 1) {
            $("#roboRogers").show();
            $("#roboRogers2").hide();
            $("#roboRogers3").hide();
        } else if (number.counter === 2) {
            $("#roboRogers").hide();
            $("#roboRogers2").show();
            $("#roboRogers3").hide();
        } else if (number.counter === 3) {
            $("#roboRogers").hide();
            $("#roboRogers2").hide();
            $("#roboRogers3").show();
            number.counter = 0;
            }
       
    });
});
        
       
       


