function validasiKartu() {
  let nomorKartu = document.getElementById('nomor_kartu').value;
  let validasiStatus = document.getElementById('validasi-status');

  // Validasi panjang kartu
  if (nomorKartu.length > 15) {
    validasiStatus.innerHTML = `<p style="color: red;">Nomor kartu maksimal 15 digit!</p>`;
    return false;
  }

  // Validasi karakter
  for (let i = 0; i < nomorKartu.length; i++) {
    if (isNaN(nomorKartu[i])) {
      validasiStatus.innerHTML = `<p style="color: red;">Nomor kartu hanya boleh berisi angka!</p>`;
      return false;
    }
  }

  validasiStatus.innerHTML = `<p style="color: green;">Nomor kartu valid!</p>`;
  return true;
}
