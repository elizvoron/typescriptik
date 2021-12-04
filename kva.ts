import dotenv from 'dotenv';

const rectsquer = (x: number): any => {
  const rect: string[] = [];
  if (isNaN(x)) {
  throw new Error(`Не могу превратить значение ${x} в число`);
  }

  if (x <= 0) {
  throw new Error('Стороны прямоугольника должны быть больше нуля');
  }
  if (x > 0) {
    let num = 0;
    for (num = 0; num < x; num++) {
      let a = `* `;
      let nam = 0;
      for (nam = 0; nam < x - 1; nam++) {
       a = a + `* `;
      }
      rect.push(a);
    }
    return rect;
  }
}

dotenv.config();

const xx = process.env.x;
const x = parseInt(xx, 10);


let num = 0;
const square = rectsquer(x);
for(num = 0; num < x; num++) {
  console.log(square[num]);
}
