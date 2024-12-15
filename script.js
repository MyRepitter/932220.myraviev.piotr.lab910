var lightFlag = false;
var RabbitON = false;
var focusDelay = false;
var switchON = false;

function appearance() {
    curtain.style.transition = "1s";
    curtain.style.bottom = "110%";
}

const switchOff = () => {
    if (switchON) {
        lightSwitch.style.top = '100px';
        if (lightFlag) {
            scene.style.opacity = '0%';
            light.style.opacity = '0%';
        }
        else {
            light.style.opacity = '50%';
            scene.style.opacity = '100%';
        }
        lightFlag = !lightFlag;
        switchON = false;
    }
}

lightTrig.addEventListener("mouseup", switchOff);
lightTrig.addEventListener("mouseleave", switchOff);

lightTrig.addEventListener("mousedown", () => {
    switchON = true;
    lightSwitch.style.top = '110px';
})

function Focus() {
    if (lightFlag && !focusDelay) {
        focusDelay = true;
        subject.style.top = '710px';
        setTimeout(() => {
            if (RabbitON) {
                subject.src = 'img/Bird.png';
                subject.style.top = '500px';
            }
            else {
                subject.src = 'img/Rabbit.png';
                subject.style.top = '530px';
            }
            RabbitON = !RabbitON;
            setTimeout(() => { focusDelay = false; }, 500);
        }, 500);
    }
}