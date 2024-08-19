import React, { Suspense } from "react";

const Pas1 = React.lazy(() => import("./Pasal/Pas1"));
const Pas2 = React.lazy(() => import("./Pasal/Pas2"));
const Pas3 = React.lazy(() => import("./Pasal/Pas3"));
const Pas4 = React.lazy(() => import("./Pasal/Pas4"));
const Pas5 = React.lazy(() => import("./Pasal/Pas5"));
const Pas6 = React.lazy(() => import("./Pasal/Pas6"));
const Pas7 = React.lazy(() => import("./Pasal/Pas7"));
const Pas8 = React.lazy(() => import("./Pasal/Pas8"));
const Pas9 = React.lazy(() => import("./Pasal/Pas9"));
const Pas10 = React.lazy(() => import("./Pasal/Pas10"));
const Pas11 = React.lazy(() => import("./Pasal/Pas11"));
const Pas12 = React.lazy(() => import("./Pasal/Pas12"));
const Pas13 = React.lazy(() => import("./Pasal/Pas13"));
const Pas14 = React.lazy(() => import("./Pasal/Pas14"));
const Pas15 = React.lazy(() => import("./Pasal/Pas15"));
const Pas16 = React.lazy(() => import("./Pasal/Pas16"));
const Him = React.lazy(() => import("./Pasal/Him"));
const Pas17 = React.lazy(() => import("./Pasal/Pas17"));
const Pas18 = React.lazy(() => import("./Pasal/Pas18"));

const RulesContent = ({ selectedRule }) => {
  let Component;

  switch (selectedRule) {
    case 'pas1':
      Component = Pas1;
      break;
    case 'pas2':
      Component = Pas2;
      break;
    case 'pas3':
      Component = Pas3;
      break;
    case 'pas4':
      Component = Pas4;
      break;
    case 'pas5':
      Component = Pas5;
      break;
    case 'pas6':
      Component = Pas6;
      break;
    case 'pas7':
      Component = Pas7;
      break;
    case 'pas8':
      Component = Pas8;
      break;
    case 'pas9':
      Component = Pas9;
      break;
    case 'pas10':
      Component = Pas10;
      break;
    case 'pas11':
      Component = Pas11;
      break;
    case 'pas12':
      Component = Pas12;
      break;
    case 'pas13':
      Component = Pas13;
      break;
    case 'pas14':
      Component = Pas14;
      break;
    case 'pas15':
      Component = Pas15;
      break;
    case 'pas16':
      Component = Pas16;
      break;
    case 'him':
      Component = Him;
      break;
    case 'pas17':
      Component = Pas17;
      break;
    case 'pas18':
      Component = Pas18;
      break;
    default:
      return null;
  }

  return (
    <Suspense fallback={<div className="text-xl">Loading Rules...</div>}>
      <Component />
    </Suspense>
  );
};

export default RulesContent;
