input.onButtonPressed(Button.A, function () {
    boton = 1
    idioma = 1
})
input.onButtonPressed(Button.B, function () {
    boton = 1
    idioma = 2
})
let idioma = 0
let boton = 0
basic.clearScreen()
let cuentapersonas = 0
boton = 0
idioma = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.pause(1000)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            cuentapersonas += 1
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
            while (boton == 1) {
                boton = 0
                if (idioma == 1) {
                    // Reproducir audio:
                    // Bienvenido al teatro de
                    // Alborán smart city.
                    // pulse botón A para rescuchar la obra en español.
                    // pulse botón B para escuchar la obra en inglés
                    // Wellcome to .....
                    basic.showLeds(`
                        . # . # .
                        # # # # #
                        # # # # #
                        # # # # #
                        . # # # .
                        `)
                } else if (idioma == 2) {
                    // Reproducir audio:
                    // Bienvenido al teatro de
                    // Alborán smart city.
                    // pulse botón A para rescuchar la obra en español.
                    // pulse botón B para escuchar la obra en inglés
                    // Wellcome to .....
                    basic.showLeds(`
                        . # . # .
                        . # . # .
                        # # # # #
                        # . . . #
                        . . . . .
                        `)
                }
            }
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    serial.writeValue("cuentapersonas", cuentapersonas)
})
