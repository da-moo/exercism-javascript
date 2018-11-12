export default class Raindrops {
  convert(num) {
    let output = num % 3 === 0 ? 'Pling' : '';
    output += num % 5 === 0 ? 'Plang' : '';
    output += num % 7 === 0 ? 'Plong' : '';
    return output.length === 0 ? num.toString() : output;
  }
}
