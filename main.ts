radio.onReceivedString(function (receivedString) {
    led.toggle(4, 0)
    Data_string = receivedString
    Data = receivedString.split(";")
    dataStreamer.writeNumberArray([
    parseFloat(Data[0]),
    parseFloat(Data[1]),
    parseFloat(Data[2]),
    parseFloat(Data[3])
    ])
    dataStreamer.writeLine()
})
let Data: string[] = []
let Data_string = ""
basic.showNumber(1)
radio.setGroup(1)
