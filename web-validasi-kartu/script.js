function validasiKartu(nomorKartu) {

  if (nomorKartu.length !== 12) {
    return {
      valid: false,
      message: 'Nomor kartu harus 12 angka!'
    };
  }

  let checksum = 0;
  for (let i = nomorKartu.length - 1; i >= 0; i--) {
    let angka = parseInt(nomorKartu[i]);
    if (i % 2 === 0) {
      angka *= 2;
      if (angka > 9) {
        angka -= 9;
      }
    }
    checksum += angka;
  }

  return {
    valid: checksum % 10 === 0,
    message: checksum % 10 === 0 ? 'Valid' : 'Tidak Valid'
  };
}
