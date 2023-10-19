const kokEtiket = document.querySelector("#root")
const adSoyadEleman = document.querySelector("#adsoyad")
const butonEleman = document.querySelector("#buton1")

butonEleman.addEventListener("click", ()=> {
    localStorage.setItem( "rehber", adSoyadEleman.value )
})

//ziyaretçinin bilgisayarında(tarayıcıda) saklanan önceden varsa rehber bilgisi alınıp bir paragrafa aktarılıyor. Paragraf kök etikete ekleniyor.
const kayitliRehber = localStorage.getItem("rehber")
if ( kayitliRehber !== null ) {
    const yeniParagraf = document.createElement("p")
    yeniParagraf.textContent = kayitliRehber
    kokEtiket.append(yeniParagraf)
}
