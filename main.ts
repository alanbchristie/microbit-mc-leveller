function updateindicator () {
    if (newpitchrow != pitchrow || newrollcolumn != rollcolumn) {
        if (rollcolumn >= 0 && pitchrow >= 0) {
            led.unplot(rollcolumn, pitchrow)
        }
        led.plot(newrollcolumn, newpitchrow)
        pitchrow = newpitchrow
        rollcolumn = newrollcolumn
    }
}
/**
 * A simple "digital leveller".
 * 
 * The code continuously reads the device "pitch" and "roll" angles and plots a single LED indicating the offset from "level".
 * 
 * The LED is illuminated on the "high" side. If the "roll" (left/right tilt) is low on the left then an LED is illuminated on the right-hand side of the LED matrix. The LED is used to indicate which "edge" is high.
 * 
 * LEDs on the outer edge of the matrix indicate an offset of 10 degrees or more. Inner-LEDs indicate an offset of less than 5 degrees.
 * 
 * The central LED is lit when the offset in either direction is less that 1 degree.
 */
function setpitchrow () {
    pitch = input.rotation(Rotation.Pitch)
    if (pitch > 10) {
        newpitchrow = 0
    } else {
        if (pitch > 5) {
            newpitchrow = 1
        } else {
            if (pitch < -10) {
                newpitchrow = 4
            } else {
                if (pitch < -5) {
                    newpitchrow = 3
                } else {
                    if (pitch < 1 && pitch > -1) {
                        newpitchrow = 2
                    }
                }
            }
        }
    }
}
function setrollcolumn () {
    roll = input.rotation(Rotation.Roll)
    if (roll > 10) {
        newrollcolumn = 0
    } else {
        if (roll > 5) {
            newrollcolumn = 1
        } else {
            if (roll < -10) {
                newrollcolumn = 4
            } else {
                if (roll < -5) {
                    newrollcolumn = 3
                } else {
                    if (roll < 1 && roll > -1) {
                        newrollcolumn = 2
                    }
                }
            }
        }
    }
}
let roll = 0
let pitch = 0
let newrollcolumn = 0
let newpitchrow = 0
let rollcolumn = 0
let pitchrow = 0
pitchrow = -1
rollcolumn = -1
newpitchrow = 0
newrollcolumn = 0
updateindicator()
basic.forever(function () {
    setpitchrow()
    setrollcolumn()
    updateindicator()
})
