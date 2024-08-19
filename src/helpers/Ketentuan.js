import React from 'react';

const Ketentuan = ({ dressCode, currentActivityIndex}) => {
    if (dressCode === '16') {
        return (<div>
          <p className='text-2xl underline text-start mb-1 mt-4'>Ketentuan</p>
          <ul className='list-disc ml-5'>
            <li>Kegiatan Pra O-WEEK akan dibagi menjadi kloter 1 dan 2.</li>
            <li>Trainee <span className='bold'>WAJIB</span> mengikuti kegiatan Pra O-Week yang diselenggarakan secara <span className='bold'>ONLINE</span> via Zoom.</li>
            <li>Trainee <span className='bold'>WAJIB</span> memperhatikan segala informasi dan materi yang disampaikan selama kegiatan Pra - Oweek untuk mengerjakan tes yang akan diberikan.</li>
            <li>Trainee <span className='bold'>WAJIB</span> mengerjakan tes <span className='italic'>Student Development Assessment</span> dan ECC yang diberikan sesuai dengan ketentuan waktu yang berlaku.</li>
          </ul>
          <p className='text-2xl underline text-start mb-1 mt-2'>Ketentuan Zoom</p>
          <ul className='list-disc ml-5'>
            <li>Trainee <span className='bold'>WAJIB</span>  hadir 15 menit sebelum kegiatan dimulai.</li>
            <li>Setiap trainee yang join <span className='bold'>WAJIB</span> rename dengan <span className='bold'>FORMAT</span> sebagai berikut:<br/>(no kelompok) - (nama kelompok) - (nama lengkap)</li>
            <li>Trainee <span className='bold'>WAJIB</span> menyalakan kamera (on camera) sepanjang kegiatan berlangsung.</li>
          </ul>
        </div>)
        
      }else if(dressCode === '17'){
        if(currentActivityIndex === 1){
          return (<div>
            <p className='text-2xl underline text-start mb-1 mt-4'>Ketentuan Upacara</p>
            <ul className='list-disc ml-5'>
              <li>Kegiatan Upacara 17 Agustus hanya boleh diikuti oleh Trainee Batch 1.</li>
              <li>Trainee yang tinggal di daerah <span className='bold'>Gerbangkertosusila</span> (Gresik, Bangkalan, Mojokerto, Surabaya, Sidoarjo, dan Lamongan) <span className='bold'>WAJIB</span> mengikuti keseluruhan kegiatan secara <span className='bold'>OFFLINE</span>.</li>
              <li>Trainee yang tinggal di <span className='bold'>LUAR</span> daerah <span className='bold'>Gerbangkertosusila</span> (Gresik, Bangkalan, Mojokerto, Surabaya, Sidoarjo, dan Lamongan) <span className='bold'>TIDAK DIWAJIBKAN</span> untuk datang secara <span className='bold'>OFFLINE</span> tetapi diperbolehkan untuk datang.</li>
              <li>Bagi trainee yang <span className='bold'>TIDAK HADIR</span> secara <span className='bold'>OFFLINE</span> di Universitas Ciputra Surabaya dapat mengikuti upacara bendera secara <span className='bold'>MANDIRI</span>. Ketentuan lebih lanjut, dapat dilihat pada bagian berikutnya.</li>
              <li>Trainee <span className='bold'>WAJIB</span> mengikuti seminar 1A dan memperhatikan materi yang disampaikan dan bagi yang <span className='bold'>TIDAK HADIR</span> secara offline <span className='bold'>WAJIB</span> mengikuti kegiatan secara <span className='bold'>ONLINE</span> melalui youtube.</li>
            </ul>
            <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan Parkir</p>
          <ul className='list-disc ml-5'>
            <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
            <li>Trainee yang membawa mobil <span className='bold'>DIHIMBAU</span> untuk mengisi mobil dengan minimal 4 trainee dalam satu mobil. </li>
            <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            <li>Lahan parkir yang dapat digunakan yaitu <span className='bold'>PARKIRAN LAPANGAN</span> dan <span className='bold'>PARKIRAN GEDUNG</span></li>
          </ul>
          <p>Pendataan Kehadiran Trainee 17 Agustus:</p>
            <ul className='list-disc ml-5'>
              <li>Gform: <a href='https://bit.ly/RSVPUpacara_O-Week2024' className='bold underline aLink  text-sm md:text-base'>Click here</a></li>
            </ul>
            <p className='text-2xl text-start underline mb-1 mt-2'>Ketentuan Membawa Kendaraan saat menghadiri Upacara secara Offline</p>
            <ul className='list-disc ml-5'>
              <li>Untuk trainee yang membawa mobil, satu mobil <span className='bold'>DIHIMBAU MINIMAL</span> berisikan <span className='bold'>4 ORANG TRAINEE</span></li>
              <li>Lahan parkir yang dapat digunakan yaitu <span className='bold'>PARKIRAN LAPANGAN</span></li>
              <li>Untuk trainee yang membawa motor, satu motor <span className='bold'>WAJIB</span> berisikan <span className='bold'>2 ORANG TRAINEE</span> dan diparkirkan pada parkiran motor lapangan UC.</li>
            </ul>
            <p className='text-2xl text-start underline mb-1 mt-3'>Informasi UPACARA O-WEEK 2024 (MANDIRI)</p>
            <p className='text-2xl text-start underline mb-1 mt-2'>Ketentuan Upacara Bendera Mandiri</p>
            <ul className='list-disc ml-5'>
              <li>Hanya dikhususkan bagi trainee yang berdomisili diluar <span className='bold'> GERBANGKERTOSUSILA</span>.</li>
              <li>Trainee yang <span className='bold'>TIDAK</span> mengikuti upacara bendera secara offline, <span className='bold'>WAJIB</span> mengikuti upacara di daerah tempat tinggal masing-masing dan <span className='bold'>WAJIB</span> mengumpulkan dokumentasi mengikuti upacara berupa foto diri yang memperlihatkan wajah <span className='bold'>minimal setengah badan</span></li>
            </ul>           
          </div>)
        }else if(currentActivityIndex === 2){
          return (<div>
            <p className='text-2xl underline text-start mb-1 mt-4'>Ketentuan</p>
            <ul className='list-disc ml-5'>
              <li>Setiap kelompok <span className='bold'>WAJIB</span> datang yang diwakilkan oleh 2 perwakilan trainee.</li>
              <li>Diusahakan perwaklan trainee adalah trainee yang memahami dan dapat mengoperasikan google sheets.</li>
            </ul>
            <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan Membawa Kendaraan</p>
          <ul className='list-disc ml-5'>
            <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM. </li>
            <li>Trainee yang membawa mobil <span className='bold'>DIHIMBAU</span> untuk mengisi mobil dengan minimal 4 trainee dalam satu mobil. </li>
          </ul>
          </div>)
        }
        
  
      }else if(dressCode === '1'){
        return(<div>
        <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan Membawa Kendaraan</p>
          <ul className='list-disc ml-5'>
          <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
            <li>Trainee yang membawa mobil <span className='bold'>DIHIMBAU</span> untuk mengisi mobil dengan minimal 4 trainee dalam satu mobil. </li>
            <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            <li>Lahan parkir yang dapat digunakan yaitu <span className='bold'>PARKIRAN LAPANGAN</span> dan <span className='bold'>PARKIRAN GEDUNG</span></li>
          </ul>
        </div>
        )
      }else if(dressCode === '2'){
        return(<div>
          <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan Membawa Kendaraan</p>
            <ul className='list-disc ml-5'>
            <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
            <li>Trainee yang membawa mobil <span className='bold'>DIHIMBAU</span> untuk mengisi mobil dengan minimal 4 trainee dalam satu mobil. </li>
            <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            <li>Lahan parkir yang dapat digunakan yaitu <span className='bold'>PARKIRAN LAPANGAN</span> dan <span className='bold'>PARKIRAN GEDUNG</span></li>
            </ul>
          </div>
          )
        
      }else if(dressCode === '3'){
        return(<div>
          <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan Membawa Kendaraan</p>
            <ul className='list-disc ml-5'>
            <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
            <li>Trainee yang membawa mobil <span className='bold'>DIHIMBAU</span> untuk mengisi mobil dengan minimal 4 trainee dalam satu mobil. </li>
            <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            <li>Lahan parkir yang dapat digunakan yaitu <span className='bold'>PARKIRAN LAPANGAN</span> dan <span className='bold'>PARKIRAN GEDUNG</span></li>
            </ul>
          </div>
          )
      }else if(dressCode === '4'){
        return(<div>
          <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan Membawa Kendaraan</p>
            <ul className='list-disc ml-5'>
            <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
            <li>Trainee yang membawa mobil <span className='bold'>DIHIMBAU</span> untuk mengisi mobil dengan minimal 4 trainee dalam satu mobil. </li>
            <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            <li>Lahan parkir yang dapat digunakan yaitu <span className='bold'>PARKIRAN LAPANGAN</span> dan <span className='bold'>PARKIRAN GEDUNG</span></li>
            </ul>
          </div>
          )
      }else if(dressCode === '5'){
        return(<div>
          <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan</p>
            <ul className='list-disc ml-5'>
              <li>Setiap trainee <span className='bold'>WAJIB</span> mengajak minimal 5 orang </li>
              <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
              <li>Trainee yang membawa mobil diwajibkan untuk parkir di parkiran B2 (Seberang Uniqlo) dan masuk melewati east lobby.</li>
              <li>Trainee <span className='bold'>DIHIMBAU</span> untuk membawa mobil dengan minimal 4 orang dalam satu mobil.</li>
              <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            </ul>
          </div>
          )
      }else if(dressCode === '6'){
        return(<div>
          <p className='text-2xl text-start underline mb-1 mt-4'>Ketentuan</p>
            <ul className='list-disc ml-5'>
              <li>Trainee diperbolehkan untuk membawa sepeda motor dengan menggunakan helm dan membawa SIM baik motor maupun mobil. </li>
              <li>Trainee yang membawa mobil diwajibkan untuk parkir di parkiran B2 (Seberang Uniqlo) dan masuk melewati east lobby.</li>
              <li>Trainee <span className='bold'>DIHIMBAU</span> untuk membawa mobil dengan minimal 4 orang dalam satu mobil.</li>
              <li>Trainee yang membawa motor <span className='bold'>DIHIMBAU</span> untuk ditumpangi oleh 2 trainee. </li>
            </ul>
          </div>
          )
      }
}

export default Ketentuan;