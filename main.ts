input.onButtonPressed(Button.A, function () {
    if (mode == true) {
        First += -25
    }
    if (mode == false) {
        Second += -25
    }
})
input.onButtonPressed(Button.AB, function () {
    mode = false
})
input.onButtonPressed(Button.B, function () {
    if (mode == true) {
        First += 25
    }
    if (mode == false) {
        Second += 25
    }
})
let mode = false
let First = 90
let Second = 90
mode = true
basic.forever(function () {
    servos.P0.setAngle(First)
    servos.P1.setAngle(Second)
    if (mode == true) {
        basic.showIcon(IconNames.Heart)
    }
    if (mode == false) {
        basic.showIcon(IconNames.SmallHeart)
    }
})
