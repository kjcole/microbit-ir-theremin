let P0 = 0
let P1 = 0
let P2 = 0
input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
basic.forever(function () {
    P0 = pins.analogReadPin(AnalogPin.P0)
    P1 = pins.analogReadPin(AnalogPin.P1)
    P2 = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("P0", P0)
    serial.writeValue("P1", P1)
    serial.writeValue("P2", P2)
    music.playTone((P0 + (P1 + P2)) / 3, music.beat(BeatFraction.Breve))
})
