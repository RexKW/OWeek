import React from 'react';
import Aug16 from './Rundown/Aug16';
import Aug17 from './Rundown/Aug17';
import Aug17_2 from './Rundown/Aug17_2';
import Sep2 from './Rundown/Sep2';
import Sep3 from './Rundown/Sep3';
import Sep4 from './Rundown/Sep4';
import Sep5 from './Rundown/Sep5';
import Sep6 from './Rundown/Sep6';
import Sep7 from './Rundown/Sep7';

const Rundown = ({ runDown, currentActivityIndex }) => {
  const renderRundownContent = () => {
    switch (runDown) {
      case '0':
        return <div><p className='text-2xl mb-2'>No Rundown</p></div>;
      case '16Aug':
        return Aug16()
      case '17Aug':
        if (currentActivityIndex === 1) {
          return Aug17()
        } else if (currentActivityIndex === 2) {
          return Aug17_2()
        }
        break;

      case '2Sep':
        return Sep2()
      

      case '3Sep':
        return Sep3()

       case '4Sep':
        return Sep4()

        case '5Sep':
          return Sep5()

          case '6Sep':
            return Sep6()

          case '7Sep':
            return Sep7()
      default:
        return (
          <div>
            <p className='text-2xl mb-2'>No Rundown</p>
          </div>
        );
    }
  };

  return (
    <div>
      {renderRundownContent()}
    </div>
  );
};

export default Rundown;
