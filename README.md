# Alien Numeral Converter (S.L. Property Co.,Ltd.)

Node.js function to convert alien numeric string to integer
---

## 🧠 Numeral System

| Symbol | Value |
|--------|-------|
| A      | 1     |
| B      | 5     |
| Z      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| R      | 1000  |

### Subtractive Notation Rules:
These pairs represent subtraction:

- `A` before `B` or `Z` → 4 and 9  
- `Z` before `L` or `C` → 40 and 90  
- `C` before `D` or `R` → 400 and 900

---

## 📦 Installation

```bash
git clone https://github.com/your-username/alien-numeral-converter.git
cd alien-numeral-converter
npm install

node test.js