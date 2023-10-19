let kitapListe = []

fetch( "kitap-liste.json" )
.then( yanit => yanit.json() )
.then( kitaplar => { 
  kitapListe = kitaplar 
  kitapListele(kitapListe) 
} )

const kokEtiket = document.querySelector("#root")
const filtreInputEleman = document.querySelector("#filtre-fiyat")
const filtreButonEleman = document.querySelector("#filtre-buton")
const filtreYonEleman = document.querySelector("#filtre-yonu")

filtreButonEleman.addEventListener("click", ()=>{
    const filtreFiyat = parseInt(filtreInputEleman.value)
    
    const filtreliKitaplar = kitapListe.filter( eleman => { 

        if ( filtreYonEleman.checked === true ) {
            return eleman.fiyat >= filtreFiyat 
        } else {
            return eleman.fiyat <= filtreFiyat 
        }
        
    } )

    kitapListele(filtreliKitaplar)
})

function kitapListele( kitapListe ) {
    const paragraflar = document.querySelectorAll("#root p")
    paragraflar.forEach( eleman => eleman.remove() )

    kitapListe.forEach( (eleman)=> {  
        const yeniparagraf = document.createElement("p")
        const kitapBilgisi = ` <strong>Adı</strong>: ${eleman.ad} <strong>Yazar</strong>: ${eleman.yazar} <strong>Fiyat</strong>: ${eleman.fiyat} `
        yeniparagraf.innerHTML = kitapBilgisi
        kokEtiket.append(yeniparagraf)
    } )
}