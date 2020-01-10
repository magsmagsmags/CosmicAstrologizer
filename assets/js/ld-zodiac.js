
/* MODAL FUNCTIONALITY SCRIPTS */
class BulmaModal {
    constructor(selector) {
        this.elem = document.querySelector(selector)
        this.close_data()
    }

    show() {
        this.elem.classList.toggle('is-active')
        this.on_show()
    }

    close() {
        this.elem.classList.toggle('is-active')
        this.on_close()
    }

    close_data() {
        var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
        var that = this
        modalClose.forEach(function (e) {
            e.addEventListener("click", function () {

                that.elem.classList.toggle('is-active')

                var event = new Event('modal:close')

                that.elem.dispatchEvent(event);
            })
        })
    }

    on_show() {
        var event = new Event('modal:show')

        this.elem.dispatchEvent(event);
    }

    on_close() {
        var event = new Event('modal:close')

        this.elem.dispatchEvent(event);
    }

    addEventListener(event, callback) {
        this.elem.addEventListener(event, callback)
    }
}

/* START ARIES MODAL SCRIPTS */
var ariesBtn = document.querySelector("#aries1")
var ariesMdl = new BulmaModal("#ariesModal")

ariesBtn.addEventListener("click", function () {
    ariesMdl.show()
})

ariesMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

ariesMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END ARIES MODAL SCRIPTS */

/* START TAURUS MODAL SCRIPTS */
var taurusBtn = document.querySelector("#taurus1")
var taurusMdl = new BulmaModal("#taurusModal")

taurusBtn.addEventListener("click", function () {
    taurusMdl.show()
})

taurusMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

taurusMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END TAURUS MODAL SCRIPTS */

/* START GEMENI MODAL SCRIPTS */
var gemeniBtn = document.querySelector("#gemeni1")
var gemeniMdl = new BulmaModal("#gemeniModal")

gemeniBtn.addEventListener("click", function () {
    gemeniMdl.show()
})

gemeniMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

gemeniMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END GEMENI MODAL SCRIPTS */

/* START CANCER MODAL SCRIPTS */
var cancerBtn = document.querySelector("#cancer1")
var cancerMdl = new BulmaModal("#cancerModal")

// cancerBtn.addEventListener("click", function () {
//     cancerMdl.show()
// })

cancerMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

cancerMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END CANCER MODAL SCRIPTS */

/* START LEO MODAL SCRIPTS */
var leoBtn = document.querySelector("#leo1")
var leoMdl = new BulmaModal("#leoModal")

leoBtn.addEventListener("click", function () {
    leoMdl.show()
})

leoMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

leoMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END LEO MODAL SCRIPTS */

/* START VIRGO MODAL SCRIPTS */
var virgoBtn = document.querySelector("#virgo1")
var virgoMdl = new BulmaModal("#virgoModal")

virgoBtn.addEventListener("click", function () {
    virgoMdl.show()
})

virgoMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

virgoMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END VIRGO MODAL SCRIPTS */

/* START LIBRA MODAL SCRIPTS */
var libraBtn = document.querySelector("#libra1")
var libraMdl = new BulmaModal("#libraModal")

libraBtn.addEventListener("click", function () {
    libraMdl.show()
})

libraMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

libraMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END LIBRA MODAL SCRIPTS */

/* START SCORPIO MODAL SCRIPTS */
var scorpioBtn = document.querySelector("#scorpio1")
var scorpioMdl = new BulmaModal("#scorpioModal")

scorpioBtn.addEventListener("click", function () {
    scorpioMdl.show()
})

scorpioMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

scorpioMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END SCORPIO MODAL SCRIPTS */

/* START SAGITTARIUS MODAL SCRIPTS */
var sagittariusBtn = document.querySelector("#sagittarius1")
var sagittariusMdl = new BulmaModal("#sagittariusModal")

sagittariusBtn.addEventListener("click", function () {
    sagittariusMdl.show()
})

sagittariusMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

sagittariusMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END SAGGITARIUS MODAL SCRIPTS */

/* START CAPRICORN MODAL SCRIPTS */
var capricornBtn = document.querySelector("#capricorn1")
var capricornMdl = new BulmaModal("#capricornModal")

capricornBtn.addEventListener("click", function () {
    capricornMdl.show()
})

capricornMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

capricornMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END CAPRICORN MODAL SCRIPTS */

/* START AQUARIUS MODAL SCRIPTS */
var aquariusBtn = document.querySelector("#aquarius1")
var aquariusMdl = new BulmaModal("#aquariusModal")

aquariusBtn.addEventListener("click", function () {
    aquariusMdl.show()
})

aquariusMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

aquariusMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END AQUARIUS MODAL SCRIPTS */

/* START PISCES MODAL SCRIPTS */
var piscesBtn = document.querySelector("#pisces1")
var piscesMdl = new BulmaModal("#piscesModal")

piscesBtn.addEventListener("click", function () {
    piscesMdl.show()
})

piscesMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

piscesMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END PISCES MODAL SCRIPTS */





