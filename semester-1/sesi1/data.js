const nama = "Jaya";
let usia = 25

function GenerateBiodata() {
    let generasi;
    
    if (usia > 10 && usia < 18 ) {
      generasi = "generasi remaja"
    }
    else if (usia > 18 && usia < 30){
      generasi = "generasi dewasa"
    }
    else if (usia >= 30){
      generasi = "generasi tua"
    }
    else if (usia > 2 && usia < 10) {
      generasi = "generasi bayi"
    }
    else {
      generasi = "generasi gajelas"
    }
    return console.log(`saya adalah ${generasi}`) 
  }


GenerateBiodata()