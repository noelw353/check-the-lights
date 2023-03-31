input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.setGroup(46)
basic.forever(function () {
    if (input.lightLevel() > 173) {
        radio.sendNumber(1)
    }
    basic.pause(2000)
})
