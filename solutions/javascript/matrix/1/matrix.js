//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this._rows = input
    .trim()
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(Number));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    
  const result = [];
  const rowCount = this._rows.length;
  const colCount = this._rows[0].length;

  for (let c = 0; c < colCount; c++) {
    const col = [];
    for (let r = 0; r < rowCount; r++) {
      col.push(this._rows[r][c]);
    }
    result.push(col);
  }
  return result;

  }
}
