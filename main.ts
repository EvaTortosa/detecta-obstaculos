basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.pause(100)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            // Reproducir audio:
            // Bienvenido al teatro de
            // Alborán smart city.
            // pulse botón A para rescuchar la obra en español.
            // pulse botón B para escuchar la obra en inglés
            // Wellcome to .....
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                . # # # .
                `)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
