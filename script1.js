const kokEtiket = document.querySelector("#root")

const imgElemani = document.createElement("img")
imgElemani.src = "iss-photo.jpg"

kokEtiket.append(imgElemani)

const baslikElemani = document.createElement("h2")
baslikElemani.textContent = "ISS Mevcut Konumu:"

kokEtiket.append(baslikElemani)


function guncelle(silinsin) {

    const API_URL = "http://api.open-notify.org/iss-now.json"
    fetch( API_URL ).
        then( (yanit)=>{ return yanit.json() } ).
        then( (veri)=>{

            if( silinsin === true ) { // önceki tüm paragraflar silinecek
                const paragraflar = document.querySelectorAll("#root p")
                paragraflar.forEach( eleman=>eleman.remove() )
            }

            const paragrafElemani = document.createElement("p")
            
            const mesaj = `Enlem: ${veri.iss_position.latitude} Boylam: ${veri.iss_position.longitude}`

            //const mesaj = "Enlem: " + veri.iss_position.latitude + " Boylam: " + veri.iss_position.longitude

            paragrafElemani.textContent = mesaj
            kokEtiket.append(paragrafElemani)
        } )

}

const buton1Elemani = document.querySelector("#buton1")
buton1Elemani.addEventListener( "click", ()=> { guncelle(false) } )

setInterval( ()=> { guncelle(true) }, 5000 )

guncelle()