import React from 'react'

function Pas17() {
  return (
    <div>
            <p className='text-4xl text-center'>Pasal XVII</p>
            <p className='text-3xl mb-2 text-center'>Sanksi</p>
            <ol className='list-decimal ml-5'>
              <li>Setiap pelanggaran dikenai sanksi yang terdiri dari:
                <ol className='list-[lower-alpha] ml-8'>
                  <li>Sanksi ringan</li>
                  <li>Sanksi sedang</li>
                  <li>Sanksi berat</li>
                  <li>Sanksi fatal</li>
                </ol>
              </li>
              <br/>
              <li>
              Sanksi ringan sebagaimana yang dimaksud pada ayat (1) huruf a meliputi:
              <ol className='list-[lower-alpha] ml-8'>
                <li>Teguran lisan;</li>
                <li>Permohonan Maaf, Penyesalan, atau Pernyataan Sikap; dalam bentuk tertulis;</li>
              </ol>
              </li>
              <br/>
              <li>
              Sanksi sedang sebagaimana yang dimaksud pada ayat (1) huruf b meliputi:
              <ol className='list-[lower-alpha] ml-8'>
                <li>sanksi ringan;</li>
                <li>Surat Peringatan 1;</li>
                <li>Mengganti semua kerusakan dan kerugian.</li>
              </ol>
              </li>
              <br/>
              <li>
              Sanksi berat sebagaimana yang dimaksud pada ayat (1) huruf c meliputi:
              <ol className='list-[lower-alpha] ml-8'>
                <li>Sanksi sedang;</li>
                <li>Surat Peringatan 2;</li>
                <li>Lulus bersyarat dari O-WEEK.</li>
              </ol>
              </li>
              <br/>
              <li>
              Sanksi fatal sebagaimana yang dimaksud pada ayat (1) huruf d meliputi;
              <ol className='list-[lower-alpha] ml-8'>
                <li>Sanksi berat;</li>
                <li>Tidak lulus O-WEEK.</li>
              </ol>
              </li>
              <br/>
              <li>
              Setiap <span className='italic'>Trainee</span> yang terbukti melakukan pelanggaran:
              <ol className='list-[lower-alpha] ml-8'>
                <li>Pasal 2 ayat 1, 2, 3, 4, 5, 6, 8, dan Pasal 3 ayat 1, 2, 6, 7, 8, akan dikenai sanksi
                ringan;</li>
                <li>Pasal 2 ayat 7, Pasal 3 ayat 3, 4, 5, 9, 10, 11, 12, 14, Pasal 12 ayat 2a, 2b, 2c, 2e,
                2n, 2o, dan Pasal 15 akan dikenai sanksi sedang;</li>
                <li>Pasal 3 ayat 15, Pasal 5, Pasal 6, Pasal 8, Pasal 9, Pasal 11, Pasal 12 ayat 2f, 2j,
                2k, 2l, 2m, Pasal 13, dan Pasal 16 ayat 2a, 2b akan dikenai sanksi berat;</li>
                <li>Pasal 3 ayat 13, Pasal 4, Pasal 7, Pasal 10, Pasal 12 ayat 2d, 2g, 2h, 2i, Pasal 14,
                dan Pasal 16 ayat 2f akan dikenai sanksi fatal.</li>
              </ol>
              </li>
              <br/>
              <li>
              Sanksi yang dijatuhkan akan disesuaikan dengan pengurangan poin yang diterima trainee setiap kali melakukan pelanggaran dan akumulasi dilakukan secara kontinu selama kegiatan O-WEEK berlangsung, dengan perhitungan sebagai berikut:
              <ol className='list-[lower-alpha] ml-8'>
                <li>Pelanggaran & sanksi ringan: -1</li>
                <li>Pelanggaran & sanksi sedang: -5</li>
                <li>Pelanggaran & sanksi berat: -15</li>
                <li>Pelanggaran & sanksi fatal: -30</li>
              </ol>
              Ketika trainee melakukan sebuah pelanggaran, pengurangan poin akan diakumulasikan sesuai prinsip di atas dan trainee akan mendapatkan sanksi ringan/sedang/berat/fatal sesuai jumlah pengurangan poin yang trainee miliki, akibat pelanggaran yang dilakukan.
              </li>
            </ol>
          </div>
  )
}

export default Pas17
