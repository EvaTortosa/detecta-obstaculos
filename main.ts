basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        soundExpression.giggle.playUntilDone()
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.Asleep)
        soundExpression.soaring.playUntilDone()
    }
})
