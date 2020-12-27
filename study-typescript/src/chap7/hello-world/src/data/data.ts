// モックデータを生成
export type Row = {
  id: string,
  age: string,
  answers: (number | null)[]
};
export type Rows = Row[];
export const rows: Rows = [
  {
    id: 'up20-un30',
    age: '20~30歳',
    answers: [0.18, 0.22, 0.37, 0.23]
  },
  {
    id: 'up30-un40',
    age: '30~40歳',
    answers: [0.12, 0.28, 0.42, 0.18]
  },
  {
    id: 'up40-un50',
    age: '40~50歳',
    answers: [null, null, null, null]
  }
];