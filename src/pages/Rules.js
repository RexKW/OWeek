import React, { useState, Suspense } from 'react';
import '../styles/Rules.css';
import leftC from '../assets/leftCurtainwLight.svg';
import leftCM from '../assets/leftCurtainsM.svg';
import rightC from '../assets/rightCurtainwLight.svg';
import rightCM from '../assets/rightCurtainsM.svg';
import rules from '../assets/rules board.png';

const RulesContent = React.lazy(() => import('../helpers/RulesContent'));

const Select = React.memo(({ selectedRule, setSelectedRule }) => (
  <div className='select border-radius-5 my-4 mx-5'>
    <select
      id="select"
      className="decorated w-full border-solid border-2 text-center text-sm"
      value={selectedRule}
      onChange={(e) => setSelectedRule(e.target.value)}
      onBlur={(e) => (e.target.size = 1)}
    >
      <option value="pas1">Pasal I (Ruang Lingkup)</option>
      <option value="pas2">Pasal II (Kewajiban Umum)</option>
      <option value="pas3">Pasal III (Larangan Umum)</option>
      <option value="pas4">Pasal IV (Larangan Pemalsuan dan Plagiarisme)</option>
      <option value="pas5">Pasal V (Larangan Merokok)</option>
      <option value="pas6">Pasal VI (Larangan Minuman Beralkohol)</option>
      <option value="pas7">Pasal VII (Larangan Penyalahgunaan Narkotika, Psikotropika, dan Obat-Obatan Terlarang)</option>
      <option value="pas8">Pasal VIII (Larangan Perjudian)</option>
      <option value="pas9">Pasal IX (Larangan Persenjataan & Bahan Peledak)</option>
      <option value="pas10">Pasal X (Larangan Kekerasan Seksual)</option>
      <option value="pas11">Pasal XI (Larangan Perundungan)</option>
      <option value="pas12">Pasal XII (Larangan Melanggar Etika Berlalu lintas/Berkendara secara Tidak Aman)</option>
      <option value="pas13">Pasal XIII (Larangan Intoleransi & Tindakan Radikalisme)</option>
      <option value="pas14">Pasal XIV (Penggunaan Media Sosial & Transaksi Elektronik)</option>
      <option value="pas15">Pasal XV (Aturan Berbusana)</option>
      <option value="pas16">Pasal XVI (Penyampaian Pendapat & Penyelesaian Konflik)</option>
      <option value="him">HIMBAUAN BAGI TRAINEE O-WEEK 2024</option>
      <option value="pas17">Pasal XVII (Sanksi)</option>
      <option value="pas18">Pasal XVIII (Prosedur Penjatuhan Sanksi)</option>
    </select>
  </div>
));

function Rules() {
  const [selectedRule, setSelectedRule] = useState('pas1');

  return (
    <div className='rules'>
      <img src={leftC} className='leftCR' loading="lazy" alt="Left Curtain" />
      <img src={leftCM} className='leftCRM' loading="lazy" alt="Left Curtain Mobile" />
      <img src={rightC} className='rightCR' loading="lazy" alt="Right Curtain" />
      <img src={rightCM} className='rightCRM' loading="lazy" alt="Right Curtain Mobile" />
      <div className='justify-center flex'>
        <img src={rules} className='ruleSign' loading="lazy" alt="Rules Sign" />
      </div>
      <div className='ruleBox'>
        <Select selectedRule={selectedRule} setSelectedRule={setSelectedRule} />
        <div id="content" className='ruleContent p-3 md:p-5'>
          <div className='ruleLights ruleBorder'></div>
          <div className='ruleText'>
            <Suspense fallback={<div className='text-xl'>Loading Rules...</div>}>
              <RulesContent selectedRule={selectedRule} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
