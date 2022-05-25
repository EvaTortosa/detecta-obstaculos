def on_button_pressed_a():
    global boton, idioma
    boton = 1
    idioma = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global boton, idioma
    boton = 1
    idioma = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

idioma = 0
boton = 0
basic.clear_screen()
cuentapersonas = 0
boton = 0
idioma = 0
nuevoespectador = 1

def on_forever():
    global cuentapersonas, nuevoespectador, boton
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        basic.pause(1000)
        if pins.digital_read_pin(DigitalPin.P0) == 1:
            if nuevoespectador == 1:
                cuentapersonas += 1
                nuevoespectador = 0
            # Reproducir audio:
            # Bienvenido al teatro de
            # Alborán smart city.
            # pulse botón A para rescuchar la obra en español.
            # pulse botón B para escuchar la obra en inglés
            # Wellcome to .....
            basic.show_leds("""
                . # . # .
                                . . . . .
                                # # # # #
                                # . . . #
                                . # # # .
            """)
            while boton == 1:
                boton = 0
                if idioma == 1:
                    # Reproducir video obra en español
                    basic.show_leds("""
                        . # . # .
                                                # # # # #
                                                # # # # #
                                                # # # # #
                                                . # # # .
                    """)
                    nuevoespectador = 1
                elif idioma == 2:
                    # Reproducir video obra en inglés
                    basic.show_leds("""
                        . # . # .
                                                . # . # .
                                                # # # # #
                                                # . . . #
                                                . . . . .
                    """)
                    nuevoespectador = 1
        else:
            basic.show_icon(IconNames.ASLEEP)
    else:
        basic.show_icon(IconNames.ASLEEP)
    serial.write_value("cuentapersonas", cuentapersonas)
basic.forever(on_forever)
