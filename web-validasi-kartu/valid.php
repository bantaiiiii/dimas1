<?php

$nomorKartu = $_POST['nomor_kartu'];

// Validasi panjang kartu
if (strlen($nomorKartu) !== 15) {
  echo '<p style="color: red;">Nomor kartu harus 15 digit!</p>';
  exit();
}

// Validasi Luhn
$validLuhn = validasiLuhn($nomorKartu);

if (!$validLuhn) {
  echo '<p style="color: red;">Nomor kartu tidak valid!</p>';
  exit();
}

echo '<p style="color: green;">Nomor kartu valid!</p>';

function validasiLuhn($nomorKartu) {

  $checksum = 0;
  for ($i = strlen($nomorKartu) - 1; $i >= 0; $i--) {
    $angka = parse_ini_string($nomorKartu[$i]);
    if ($i % 2 === 0) {
      $angka *= 2;
      if ($angka > 9) {
        $angka -= 9;
      }
    }
    $checksum += $angka;
  }

  return $checksum % 10 === 0;
}

?>