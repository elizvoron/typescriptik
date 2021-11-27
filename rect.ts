import dotenv from 'dotenv';

const rectsquer = (hit: number, wit: number): number {
	return hit * wit
}

dotenv.config();

const hight = process.env.hit;
const wight = process.env.wit;
const hit = parseInt(hight, 10);
const wit = parseInt(wight, 10);

if (isNaN(hit)) {
  throw new Error(`Не могу превратить значение ${hight} в число`);
}

if (isNaN(wit)) {
  throw new Error(`Не могу превратить значение ${wight} в число`);
}

if (hit <= 0) or (wit <= 0) {
  throw new Error('Стороны прямоугольника должны быть больше нуля');
}

const square = rectsquer(hit, wit);

console.log(`Площадь прямоугольника равна ${square}`);