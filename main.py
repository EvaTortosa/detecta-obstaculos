# IMPORTAR LIBRERÍAS DEL REPRODUCTOR DE VÍDEO
# PREVIAMENTE HABRE INSTALADO DICHA LIBRERÍAS
    # from omxplayer.player import OMXPlayer
    # from pathlib import Path
# IMPORTAR LIBRERÍAS DEL REPRODUCTOR DE VÍDEO
# PREVIAMENTE HABRE INSTALADO PLAYSOUND
    #from playsound import playsound

#DEFINO LOS ARCHIVOS CON LOS VÍDEOS EN ESPAÑOL Y EN INGLÉS Y EL AUDIO:
    # AUDIO_PATH_INI = Path("/home/pi/Desktop/audioini.mp3")
    # VIDEO_PATH_ESP = Path("/home/pi/Desktop/videoEsp.mp4")
    # VIDEO_PATH_ING = Path("/home/pi/Desktop/videoIng.mp4")

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
            # playsound(AUDIO_PATH_INI)
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
                    # player=OMXPlayer(VIDEO_PATH_ESP)
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
                    # player=OMXPlayer(VIDEO_PATH_ING)
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
