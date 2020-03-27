let Calculator = {};
Calculator.currentState = 0;
Calculator.add = function (operand) {
  if (operand !== undefined) {
    Calculator.currentState += operand;
  }
  return Calculator.add;  
}
Calculator.subtract = function (operand) {
  if (operand !== undefined) {
    Calculator.currentState -= operand;
  }
  return Calculator.subtract;
}
Calculator.divide = function (operand) {
  if (operand !== undefined) {
    Calculator.currentState /= operand;  
  }
  return Calculator.divide;
}
Calculator.multiply = function (operand) {
  if (operand !== undefined) {
    Calculator.currentState *= operand;
  }
  return Calculator.multiply;
}
Calculator.getResult = function () {
  return Calculator.currentState;
}
Calculator.reset = function () {
  Calculator.currentState = 0;
}
module.exports = Calculator;