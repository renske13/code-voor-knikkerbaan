let tijd_2 = 0
let tijd_1 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    let tijd_3 = 0
    if (tijd_1 > 1) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            tijd_1 = 1
            tijd_2 = input.runningTime()
        }
    }
    if (tijd_2 > 0) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            tijd_1 = 0
            tijd_2 = 0
        }
    }
    if (tijd_3 > 0) {
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            tijd_1 = 0
            tijd_2 = 0
        }
    }
    serial.writeLine("" + tijd_2 + "-" + tijd_1 + "=" + (tijd_2 - tijd_1))
})
