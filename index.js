function alienToInteger(s) {
    const values = {
      A: 1,
      B: 5,
      Z: 10,
      L: 50,
      C: 100,
      D: 500,
      R: 1000
    };
  
    const subtractCases = new Set([
      'AB', 'AZ',
      'ZL', 'ZC',
      'CD', 'CR'
    ]);
  
    let total = 0;
    for (let i = 0; i < s.length; ) {
      const pair = s[i] + (s[i + 1] || '');
      if (i + 1 < s.length && subtractCases.has(pair)) {
        total += values[s[i + 1]] - values[s[i]];
        i += 2;
      } else {
        total += values[s[i]];
        i += 1;
      }
    }
  
    return total;
  }
  
  module.exports = alienToInteger;
  