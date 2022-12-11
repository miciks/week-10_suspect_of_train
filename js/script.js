let vagon =  Math.floor(Math.random()*10)+1; //suçlu random bir vagona saklandı
let hak = 4 ; // dört tahmin hakkımız var

for (let tahminsayisi = 1; tahminsayisi <= hak ; tahminsayisi++) {
    let tahmin = parseInt(prompt("10 vagon var. SUÇLU Hangi vagondadır ")); //tahmin girilir

    if (vagon == tahmin) {
        alert (tahminsayisi + "defada buldunuz. TEBRİKLER...Sherlock HOLMES unvanı kazandınız.");
        alert ("puanınız:" (100-(25)*( tahminsayisi - 1))) //kaçıncı tahmin de bulunduysa 100 üzerinden değerlendirilip puan verilir
        
    } else if (vagon < tahmin) {
        alert ("Benden duymuş olma. Suçlu ön tarafta")
        
    }else {
        alert ("Benden duymuş olma. Suçlu arka tarafta. daha  büyük numaralı vagonda.");
    }
    if (tahminsayisi == hak) {
        alert ("Dört hakkın vardı bitti. TREN KALKIYOR. Senden polis olmaz.");
    }
}
