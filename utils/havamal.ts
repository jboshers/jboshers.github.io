import { Verse } from '../interfaces'
import english from './english'
import norse from './norse'

const findChapter = (i: number): string => {
  if (i>=0 && i<=80) {
    return "Gestaþáttr"
  }
  else if (i>=81 && i<=110) {
    return "Dómi Oðins"
  }
  else if (i>=111 && i<=138) {
    return "Loddfáfnismál"
  }
  else if (i>=139 && i<=146) {
    return "Rúnatal"
  }
  else if (i>=147) {
    return "Ljóðatal"
  }
};

// Builds out english with norse and assigns an id.
export const havamal: Verse[] = english.map((eVerse, i) =>{
  return ({
    id: i + 1,
    english: eVerse,
    norse: norse[i],
    chapter: findChapter(i)
  })
});
