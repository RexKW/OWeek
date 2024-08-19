import React from 'react';

const DressCode = ({ dressCode }) => {
     if(dressCode==='0'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 0</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Pakaian yang sopan dan rapi</p>
      </div>);
    }else if(dressCode==='1'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 1</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Top: Kemeja Putih</p>
        <p>Pants: Celana Jeans warna gelap (Tidak Sobek)</p>
        <p>Shoes: Sepatu Sneakers (Warna Bebas)</p>
      </div>);
    }else if(dressCode==='2'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 2</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Sesuai ketentuan program studi masing-masing</p>
      </div>);
    }else if(dressCode==='3'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 3</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Top: Kemeja Hitam</p>
        <p>Pants: Celana Panjang Hitam</p>
        <p>Shoes: Sepatu (Bebas, menutupi jari & tumit)</p>
      </div>);
    }else if(dressCode==='4'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 4</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Top: Baju Batik Berkerah</p>
        <p>Pants: Celana Panjang Kain Hitam (Tidak Sobek)</p>
        <p>Shoes: Sepatu Sneakers (Warna Bebas)</p>
      </div>);
    }else if(dressCode==='5'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 5</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Top: Baju Kaos Universitas Ciputra Surabaya </p>
        <p>Pants: Celana Panjang Gelap (Tidak Robek)</p>
        <p>Shoes: Sepatu Sneakers (Warna Bebas)</p>
        <p>Accesories: Atribut/Aksesoris Negara</p>
        <p className='text-xl mb-2 mt-3'>Dresscode Loading in (Kamis, 5 September 2024 22.30 - 01.00):</p>
        <p>Top: Baju Kaos bebas (Tidak Crop/Sleeveless/Tembus Pandang) </p>
        <p>Pants: Celana Panjang Gelap (Tidak Robek dan Tidak Ketat)</p>
        <p>Shoes: Sepatu Sneakers (Warna Bebas)</p>
      </div>);
    }else if(dressCode==='6'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Day 6</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Laki-Laki</p>
        <p>Top:  Kemeja Putih </p>
        <p>Pants: Celana Panjang Kain Hitam</p>
        <p>Shoes: Sepatu Pantofel Hitam</p>
        <p>Perempuan</p>
        <p>Top:  Kemeja Putih </p>
        <p>Pants: Rok Hitam Panjang dibawah lutut</p>
        <p>Shoes: Flat Shoes Hitam</p>

        <p className='mt-2'>*Setiap trainee <span className='font-bold'>WAJIB</span> membawa jas almamater</p>
      </div>);
    }else if(dressCode==='16'){
      return (<div>
        <p className='text-3xl text-start mb-1'>Pra O-Week</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Pakaian yang sopan dan rapi</p>
      </div>);
    }
    else if(dressCode==='17'){
      return (<div>
        <p className='text-3xl text-start mb-1'>17 Aug</p>
        <p className='text-xl mb-2'>Dress Code:</p>
        <p>Top: Kemeja Putih</p>
        <p>Pants: Celana Panjang Hitam Kain (tidak sobek & tidak ketat)</p>
        <p>Shoes: Sepatu Hitam</p>
      </div>);
    }
};

export default DressCode;
