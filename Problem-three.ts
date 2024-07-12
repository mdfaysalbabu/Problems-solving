const square = (x: number): number => x * x;

const double = (x: number): number => x * 2;

const add5 = (x: number): number => x + 5;

const squareDoubleAndAdd5 = (x: number): number => {
  return add5(double(square(x)));
};

const number = 3;
console.log(squareDoubleAndAdd5(number));
