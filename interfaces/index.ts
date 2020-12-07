export type Verse = {
  id: number
  english: string
  norse: string,
  chapter: string
}
export interface IntroState {
  thing: string; //replace any with suitable type
  who: string;
  for: string;
}

export interface LevelState {
  delta: number;
  bday: any;
  now: any;
  previousLevel: number;
  nextLevel: number;
  score: number;
  progress: any;
}
