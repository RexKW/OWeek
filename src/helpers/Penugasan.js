
import React from 'react';
import None from './Penugasan/None';
import Aug17 from './Penugasan/Aug17';
import Sep2 from './Penugasan/Sep2';
import Sep3 from './Penugasan/Sep3';
import Sep4 from './Penugasan/Sep4';
import Sep5 from './Penugasan/Sep5';
import Sep6 from './Penugasan/Sep6';
import Sep7 from './Penugasan/Sep7';

const Penugasan = ({ dressCode, currentActivityIndex }) => {
    if (dressCode === '16') {
        return None()
      }else if(dressCode === '17' && currentActivityIndex ===1){
        return Aug17()
      }else if(dressCode === '17' && currentActivityIndex ===2){
        return None()
      }else if(dressCode === '1'){
        return Sep2()
        
      }else if(dressCode === '2'){
        return Sep3()

      }else if(dressCode === '3'){
        return Sep4()
        
      }else if(dressCode === '4'){
        return Sep5()
        
      }else if(dressCode === '5'){
        return Sep6()
      }else if(dressCode === '6'){
        return Sep7()
      }
}

export default Penugasan;
