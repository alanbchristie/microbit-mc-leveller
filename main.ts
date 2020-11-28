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
