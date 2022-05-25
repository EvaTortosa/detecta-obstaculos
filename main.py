basic.clear_screen()

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        basic.pause(100)
        if pins.digital_read_pin(DigitalPin.P0) == 1:
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
        else:
            basic.show_icon(IconNames.ASLEEP)
    else:
        basic.show_icon(IconNames.ASLEEP)
basic.forever(on_forever)
