input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showNumber(step)
})
let step = 0
step = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        step = 0
    }
})
