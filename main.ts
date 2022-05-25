//  IMPORTAR LIBRERÍAS DEL REPRODUCTOR DE VÍDEO
//  PREVIAMENTE HABRE INSTALADO DICHA LIBRERÍAS
//  from omxplayer.player import OMXPlayer
//  from pathlib import Path
//  IMPORTAR LIBRERÍAS DEL REPRODUCTOR DE VÍDEO
//  PREVIAMENTE HABRE INSTALADO PLAYSOUND
// from playsound import playsound
// DEFINO LOS ARCHIVOS CON LOS VÍDEOS EN ESPAÑOL Y EN INGLÉS Y EL AUDIO:
//  AUDIO_PATH_INI = Path("/home/pi/Desktop/audioini.mp3")
//  VIDEO_PATH_ESP = Path("/home/pi/Desktop/videoEsp.mp4")
//  VIDEO_PATH_ING = Path("/home/pi/Desktop/videoIng.mp4")
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    boton = 1
    idioma = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    boton = 1
    idioma = 2
})
let idioma = 0
let boton = 0
basic.clearScreen()
let cuentapersonas = 0
boton = 0
idioma = 0
let nuevoespectador = 1
basic.forever(function on_forever() {
    
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.pause(1000)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            if (nuevoespectador == 1) {
                cuentapersonas += 1
                nuevoespectador = 0
            }
            
            //  Reproducir audio:
            //  Bienvenido al teatro de
            //  Alborán smart city.
            //  pulse botón A para rescuchar la obra en español.
            //  pulse botón B para escuchar la obra en inglés
            //  Wellcome to .....
            //  playsound(AUDIO_PATH_INI)
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
                    //  Reproducir video obra en español
                    //  player=OMXPlayer(VIDEO_PATH_ESP)
                    basic.showLeds(`
                        . # . # .
                                                # # # # #
                                                # # # # #
                                                # # # # #
                                                . # # # .
                    `)
                    nuevoespectador = 1
                } else if (idioma == 2) {
                    //  Reproducir video obra en inglés
                    //  player=OMXPlayer(VIDEO_PATH_ING)
                    basic.showLeds(`
                        . # . # .
                                                . # . # .
                                                # # # # #
                                                # . . . #
                                                . . . . .
                    `)
                    nuevoespectador = 1
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
