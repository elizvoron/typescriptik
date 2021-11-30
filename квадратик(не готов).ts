import dotenv from 'dotenv';

const rectsquer = (x: number): number {
  if (isNaN(x)) {
  throw new Error(`Не могу превратить значение ${x} в число`);
  }

  if (x <= 0) {
  throw new Error('Стороны прямоугольника должны быть больше нуля');
  }
  if (x > 0) {
    const rect = []
  }

  return hit * wit
}

dotenv.config();

const x = process.env.x;
const x = parseInt(x, 10);



const square = rectsquer(x);

console.log(`Площадь прямоугольника равна ${square}`);