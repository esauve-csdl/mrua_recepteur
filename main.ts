input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Go = 1
    To = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Go = 0
    To = 0
})
radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        acceleration = value
    }
    if (name == "T1") {
        temps1 = value
    }
    if (name == "T2") {
        Temps2 = value
    }
    if (name == "T3") {
        temps3 = value
    }
    if (name == "Dist") {
        Distance = value
    }
})
let T3 = 0
let T2 = 0
let T1 = 0
let Distance = 0
let acceleration = 0
let temps3 = 0
let Temps2 = 0
let temps1 = 0
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
To = 0
Go = 0
temps1 = 0
Temps2 = 0
temps3 = 0
basic.forever(function () {
    if (Go == 1) {
        basic.pause(10)
        T1 = temps1 - To
        T2 = Temps2 - To
        T3 = temps3 - To
        serial.writeLine("" + acceleration + " ; " + T1 + " ; " + Distance + " ; " + T2)
    }
})
