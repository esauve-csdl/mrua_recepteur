input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Go = 1
    To = temps
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Go = 0
    To = 0
    temps = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        acceleration = value
    }
    if (name == "T") {
        temps = value
    }
})
let Temps2 = 0
let acceleration = 0
let temps = 0
let To = 0
let Go = 0
basic.showLeds(`
    # # # . .
    # . . # .
    # # # . .
    # . . # .
    # . . # .
    `)
radio.setGroup(1)
serial.redirectToUSB()
Go = 0
basic.forever(function () {
    if (Go == 1) {
        Temps2 = temps - To
        serial.writeLine("" + acceleration + " ; " + Temps2)
    }
})
