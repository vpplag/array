input.onButtonPressed(Button.A, function () {
    Counter += 1
    if (Counter == 4) {
        Counter = 0
    }
})
let Counter = 0
let Names = ["ARIADNE", "ELECTRA", "ELENI", "VASSILIS"]
Counter = 0
basic.forever(function () {
    basic.showString("" + (Names[Counter]))
})
