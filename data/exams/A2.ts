import { Question, Option } from '../../types.ts';
import { DS_OPTIONS } from '../questions'; // Assuming DS_OPTIONS is now exported separately

export const EXAM_A2_QUESTIONS: Record<number, Question> = {
  1: {
    id: 'A2-q1',
    text: 'If $x$ and $y$ are positive integers, is $x$ even?',
    statements: [
      '\\$2x+y$ is odd',
      '\\$5x+3y$ is odd'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `**Statement (1):** \\$2x + y$ is odd.
      Since $x$ is a positive integer, \\$2x$ is always an even number.
      For (even $+ y$) to be odd, $y$ must be an odd number.
      However, this statement gives us no information about $x$ ($x$ can be even or odd).
      Therefore, Statement (1) ALONE is NOT sufficient to determine if $x$ is even.
      
      **Statement (2):** \\$5x + 3y$ is odd.
      We can analyze the parities:
      *   If $x$ is even, then \\$5x$ is even. For (even $+ 3y$) to be odd, \\$3y$ must be odd, which means $y$ must be odd. (So, $x=\\text{even}, y=\\text{odd}$ is a possibility)
      *   If $x$ is odd, then \\$5x$ is odd. For (odd $+ 3y$) to be odd, \\$3y$ must be even, which means $y$ must be even. (So, $x=\\text{odd}, y=\\text{even}$ is a possibility)
      Since $x$ can be either even or odd, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      From Statement (1), we know $y$ must be odd.
      Substitute $y = \\text{odd}$ into Statement (2): \\$5x + 3(\\text{odd})$ is odd.
      \\$5x + \\text{odd}$ is odd.
      For (\\$5x + \\text{odd}$) to be odd, \\$5x$ must be even.
      For \\$5x$ to be even, $x$ must be even.
      Thus, by combining both statements, we can definitively conclude that $x$ is even.
      Therefore, BOTH statements TOGETHER are sufficient.
      
      Thus, the correct answer is C.`
  },
  2: {
    id: 'A2-q2',
    text: 'If $R(x)$ denotes the remainder when positive integer $x$ is divided by positive integer $k$, is $k > 10$?',
    statements: [
      '$R(k+32)=8$',
      '$R(k+42)=6$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'A',
    explanation: `R(x) denotes the remainder when $x$ is divided by $k$. This means $R(x) = x \\pmod k$.
      Also, the remainder must always be less than the divisor. So, $R(x) < k$.
      
      **Statement (1):** $R(k+32) = 8$.
      This means when $(k+32)$ is divided by $k$, the remainder is \\$8$.
      We know that $(k+32) = 1 \\times k + 32$.
      If \\$32$ is less than $k$, then $R(k+32)$ would be \\$32$. But the remainder is given as \\$8$.
      This implies that \\$32$ is greater than $k$, and \\$32$ can be expressed as: \\$32 = q \\times k + 8$, where $q$ is an integer quotient and \\$8$ is the remainder.
      Since \\$8$ is the remainder, it must be true that \\$8 < k$.
      
      Now, let's analyze possible values for $k$ such that \\$32 = q \\times k + 8$:
      \\$32 - 8 = q \\times k$.
      \\$24 = q \\times k$.
      
      Also, we know \\$8 < k$.
      Possible integer values for $k$:
      *   If $q=1, k=24$. (\\$8 < 24$. This works.)
      *   If $q=2, k=12$. (\\$8 < 12$. This works.)
      *   If $q=3, k=8$. (\\$8 < 8$. This does NOT work, remainder must be strictly less than divisor.)
      
      So, possible values for $k$ are \\$24$ and \\$12$.
      In both cases, $k$ is greater than \\$10$.
      Therefore, Statement (1) ALONE is sufficient.
      
      **Statement (2):** $R(k+42) = 6$.
      Similar to Statement (1), this implies \\$6 < k$.
      Also, \\$42 = q \\times k + 6$.
      \\$36 = q \\times k$.
      
      Possible integer values for $k$ such that \\$6 < k$:
      *   If $q=1, k=36$. (\\$6 < 36$. This works.)
      *   If $q=2, k=18$. (\\$6 < 18$. This works.)
      *   If $q=3, k=12$. (\\$6 < 12$. This works.)
      *   If $q=4, k=9$. (\\$6 < 9$. This works.)
      
      Since $k$ could be \\$9$ (which is not $> 10$) or $k$ could be \\$12$ (which is $> 10$), Statement (2) ALONE is NOT sufficient.
      
      Thus, the correct answer is A.`
  },
  3: {
    id: 'A2-q3',
    text: 'If the symbol $\\triangle$ can represent addition, subtraction, multiplication, or division, which operation does it represent?',
    statements: [
      '\\$2^{4\\triangle2}=4^{1\\triangle1}$',
      '\\$2^{4\\triangle2} = (4\\triangle2)^2$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'A',
    explanation: `Let's test each operation for both statements.
      
      **Statement (1):** \\$2^{4\\triangle2} = 4^{1\\triangle1}$
      *   **Addition (+):** \\$2^{4+2} = 2^6 = 64$; \\$4^{1+1} = 4^2 = 16$. (\\$64 \\neq 16$)
      *   **Subtraction (-):** \\$2^{4-2} = 2^2 = 4$; \\$4^{1-1} = 4^0 = 1$. (\\$4 \\neq 1$)
      *   **Multiplication ($\\times$):** \\$2^{4\\times2} = 2^8 = 256$; \\$4^{1\\times1} = 4^1 = 4$. (\\$256 \\neq 4$)
      *   **Division (/):** \\$2^{4/2} = 2^2 = 4$; \\$4^{1/1} = 4^1 = 4$. (\\$4 = 4$). This works.
      From Statement (1) alone, the symbol $\\triangle$ MUST represent division. Sufficient.
      
      **Statement (2):** \\$2^{4\\triangle2} = (4\\triangle2)^2$
      *   **Addition (+):** \\$2^{4+2} = 64$; $(4+2)^2 = 36$. (\\$64 \\neq 36$)
      *   **Subtraction (-):** \\$2^{4-2} = 4$; $(4-2)^2 = 4$. This works.
      *   **Multiplication ($\\times$):** \\$2^{4\\times2} = 256$; $(4\\times2)^2 = 64$. (\\$256 \\neq 64$)
      *   **Division (/):** \\$2^{4/2} = 4$; $(4/2)^2 = 4$. This works.
      Since subtraction and division both satisfy Statement (2), it is NOT sufficient.
      
      Thus, the correct answer is A.`
  },
  4: {
    id: 'A2-q4',
    // FIX: Changed \\' to \' to correctly escape the apostrophe in the string.
    text: 'A person\'s new daily wage is \\$125\\%$ greater than his former daily wage. If he works \\$10\\%$ fewer hours per day, by what percentage does his new hourly wage exceed his former hourly wage?',
    options: [
      { label: "A", text: "125%" },
      { label: "B", text: "150%" },
      { label: "C", text: "175%" },
      { label: "D", text: "200%" },
      { label: "E", text: "225%" }
    ],
    correctAnswer: 'B',
    explanation: `Let $D_f$ and $H_f$ be the former daily wage and hours. Former hourly wage $W_f = D_f / H_f$.
      New daily wage $D_n = D_f + 1.25 D_f = 2.25 D_f$.
      New hours $H_n = H_f - 0.10 H_f = 0.90 H_f$.
      New hourly wage $W_n = D_n / H_n = (2.25 D_f) / (0.90 H_f) = 2.5 (D_f / H_f) = 2.5 W_f$.
      The new wage is \\$2.5$ times the old wage. This is a \\$150\\%$ increase.
      Percentage increase = $\\frac{W_n - W_f}{W_f} \\times 100\\% = \\frac{2.5 W_f - W_f}{W_f} \\times 100\\% = 1.5 \\times 100\\% = 150\\%$.
      
      Thus, the correct answer is B.`
  },
  5: {
    id: 'A2-q5',
    text: 'What is the mean of three numbers $x, y,$ and $z$?',
    statements: [
      '\\$2x-y+z=6$',
      '$x+4y+2z=9$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `We need to find the value of $(x+y+z)/3$. This requires finding the sum $x+y+z$.
      
      **Statement (1):** \\$2x - y + z = 6$. Insufficient as it's one equation with three variables.
      **Statement (2):** $x + 4y + 2z = 9$. Also insufficient for the same reason.
      
      **Combining (1) and (2):**
      We have a system of two equations. We can try to eliminate variables to find the sum.
      Let's add the two equations:
      $(2x - y + z) + (x + 4y + 2z) = 6 + 9$
      \\$3x + 3y + 3z = 15$
      Divide by 3:
      $x + y + z = 5$.
      Since we found a unique value for the sum, we can find the mean: Mean = \\$5/3$.
      BOTH statements TOGETHER are sufficient.
      
      Thus, the correct answer is C.`
  },
  6: {
    id: 'A2-q6',
    text: 'An investment yields an annual interest rate of $a$ percent for the first year and $b$ percent for the second year. If the total return over the two-year period is the same as that of an investment that earns a constant annual rate of $x$ percent each year, express $x$ in terms of $a$ and $b$.',
    options: [
      { label: "A", text: '\\$100\\left(\\sqrt{\\left(1 + \\frac{a}{100}\\right)\\left(1 + \\frac{b}{100}\\right)} - 1\\right)$' },
      { label: "B", text: '$\\sqrt{ \\left( 1 + \\frac{a}{100} \\right) \\left( 1 + \\frac{b}{100} \\right) } - 1$' },
      { label: "C", text: '$\\frac{a+b}{2}$' },
      { label: "D", text: '\\$100\\left[\\left( 1 + \\frac{a}{100} \\right)\\left( 1 + \\frac{b}{100} \\right) - 1\\right]$' },
      { label: "E", text: '\\$100  \\frac{a+b}{200} $' }
    ],
    correctAnswer: 'A',
    explanation: `Let $P$ be the principal.
      Amount after 2 years with rates a and b: $P(1 + \\frac{a}{100})(1 + \\frac{b}{100})$.
      Amount after 2 years with rate x: $P(1 + \\frac{x}{100})^2$.
      
      Equating the amounts:
      $P(1 + \\frac{a}{100})(1 + \\frac{b}{100}) = P(1 + \\frac{x}{100})^2$
      $(1 + \\frac{a}{100})(1 + \\frac{b}{100}) = (1 + \\frac{x}{100})^2$
      Take the square root of both sides:
      $\\sqrt{(1 + \\frac{a}{100})(1 + \\frac{b}{100})} = 1 + \\frac{x}{100}$
      $\\frac{x}{100} = \\sqrt{(1 + \\frac{a}{100})(1 + \\frac{b}{100})} - 1$
      $x = 100 \\left( \\sqrt{(1 + \\frac{a}{100})(1 + \\frac{b}{100})} - 1 \\right)$.
      
      Thus, the correct answer is A.`
  },
  7: {
    id: 'A2-q7',
    text: 'A product has a cost of \\$120. Its profit is 20 percent of its revenue. If the cost is reduced while the revenue remains unchanged, and the profit then becomes 30 percent of the revenue, what is the new cost of the product?',
    options: [
        {label: "A", text: "\\$90"},
        {label: "B", text: "\\$95"},
        {label: "C", text: "\\$100"},
        {label: "D", text: "\\$105"},
        {label: "E", text: "\\$110"},
    ],
    correctAnswer: 'D',
    explanation: `Let R be Revenue, C be Cost, and P be Profit. The fundamental relationship is Revenue = Cost + Profit.

1.  **Analyze the initial situation:**
    -   Cost (C) = \\$120.
    -   Profit (P) = 20% of Revenue = 0.20 * R.
    -   Substitute into the formula: R = 120 + 0.20 * R.
    -   Solve for R: 0.80 * R = 120.
    -   R = 120 / 0.80 = 150.
    -   So, the initial revenue is \\$150.

2.  **Analyze the new situation:**
    -   Revenue remains unchanged, so R_new = \\$150.
    -   New Profit (P_new) = 30% of Revenue = 0.30 * 150 = \\$45.
    -   We need to find the new cost (C_new).
    -   Using the formula: R_new = C_new + P_new.
    -   150 = C_new + 45.
    -   Solve for C_new: C_new = 150 - 45 = 105.

The new cost of the product is \\$105.

Thus, the correct answer is D.`
  },
  8: {
    id: 'A2-q8',
    text: 'Pump A can empty a certain pool in 24 hours. After Pump A operates alone for 8 hours, the remaining water is pumped out by Pump B, whose pumping rate is 2/3 that of Pump A. How many additional hours are required for Pump B to empty the pool completely?',
    options: [
        {label: "A", text: "12"},
        {label: "B", text: "16"},
        {label: "C", text: "18"},
        {label: "D", text: "24"},
        {label: "E", text: "36"},
    ],
    correctAnswer: 'D',
    explanation: `Let the total work to empty the pool be 1 unit.

1.  **Calculate the rate of Pump A:**
    -   Rate_A = Work / Time = 1 pool / 24 hours = 1/24 pool/hour.

2.  **Calculate the work done by Pump A in 8 hours:**
    -   Work_A = Rate_A * Time = (1/24) * 8 = 1/3 of the pool.

3.  **Calculate the remaining work:**
    -   Remaining Work = 1 - Work_A = 1 - 1/3 = 2/3 of the pool.

4.  **Calculate the rate of Pump B:**
    -   Rate_B = (2/3) * Rate_A = (2/3) * (1/24) = 2/72 = 1/36 pool/hour.

5.  **Calculate the time required for Pump B to finish the remaining work:**
    -   Time_B = Remaining Work / Rate_B = (2/3) / (1/36) = (2/3) * 36 = 2 * 12 = 24 hours.

Thus, 24 additional hours are required for Pump B. The correct answer is D.`
  },
  9: {
    id: 'A2-q9',
    text: 'How many integers between 10 and 99, inclusive, are divisible by 3 or by 7？',
    options: [
        {label: "A", text: "30"},
        {label: "B", text: "35"},
        {label: "C", text: "39"},
        {label: "D", text: "43"},
        {label: "E", text: "47"},
    ],
    correctAnswer: 'C',
    explanation: `We use the Principle of Inclusion-Exclusion: Total = (Divisible by 3) + (Divisible by 7) - (Divisible by both).

1.  **Count integers divisible by 3:**
    -   The multiples of 3 are 12, 15, ..., 99.
    -   To count them: (Last - First)/Step + 1 = (99 - 12)/3 + 1 = 87/3 + 1 = 29 + 1 = 30.

2.  **Count integers divisible by 7:**
    -   The multiples of 7 are 14, 21, ..., 98.
    -   To count them: (98 - 14)/7 + 1 = 84/7 + 1 = 12 + 1 = 13.

3.  **Count integers divisible by both 3 and 7 (i.e., by 21):**
    -   The multiples of 21 are 21, 42, 63, 84. There are 4 such integers.

4.  **Apply the formula:**
    -   Total = (Divisible by 3) + (Divisible by 7) - (Divisible by 21)
    -   Total = 30 + 13 - 4 = 39.

There are 39 such integers. The correct answer is C.`
  },
  10: {
    id: 'A2-q10',
    text: 'In a survey of voters concerning two candidates, A and B, 50 respondents support both candidates, and 100 respondents support neither candidate. What is the total number of respondents surveyed?',
    statements: [
      'The number of respondents who support candidate A is equal to the number of respondents who do not support candidate A.',
      'The ratio of respondents who support candidate B to those who do not support candidate B is 2:3.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `Let T be the total number of respondents.
Let A be the number who support A, B be the number who support B.
From the stem: Total = A + B - (A and B) + (Neither)
T = A + B - 50 + 100 => T = A + B + 50.

**Statement (1):** The number who support A equals the number who do not.
This means A = T - A => 2A = T => A = T/2.
Substitute into the main equation: T = (T/2) + B + 50 => T/2 = B + 50. Two variables remain. Not sufficient.

**Statement (2):** The ratio of who support B to who do not is 2:3.
This means B / (T - B) = 2/3 => 3B = 2(T - B) => 3B = 2T - 2B => 5B = 2T => B = 2T/5.
Substitute into the main equation: T = A + (2T/5) + 50 => 3T/5 = A + 50. Two variables remain. Not sufficient.

**Combining (1) and (2):**
We have A = T/2 and B = 2T/5. Substitute both into T = A + B + 50.
T = (T/2) + (2T/5) + 50
T = (5T/10) + (4T/10) + 50
T = 9T/10 + 50
T - 9T/10 = 50
T/10 = 50 => T = 500.
We can find a unique total. Sufficient.

Thus, the correct answer is C.`
  },
  11: {
    id: 'A2-q11',
    text: 'The six-digit integer 639,k70 is formed, where k represents a single digit from 0 to 9. Which of the following CANNOT be a divisor of this integer?',
    options: [
        {label: "A", text: "2"},
        {label: "B", text: "3"},
        {label: "C", text: "4"},
        {label: "D", text: "5"},
        {label: "E", text: "7"},
    ],
    correctAnswer: 'C',
    explanation: `Let the integer be N = 639,k70.

-   **(A) Divisibility by 2:** N ends in 0, so it is always even. **Possible.**
-   **(B) Divisibility by 3:** The sum of the digits is 6+3+9+k+7+0 = 25+k. If k=2, the sum is 27, which is divisible by 3. **Possible.**
-   **(C) Divisibility by 4:** For an integer to be divisible by 4, the number formed by its last two digits must be divisible by 4. The last two digits are 70. Since 70 is not divisible by 4 (70/4 = 17.5), N can never be divisible by 4, regardless of the value of k. **CANNOT be a divisor.**
-   **(D) Divisibility by 5:** N ends in 0, so it is always divisible by 5. **Possible.**
-   **(E) Divisibility by 7:** We need to check if there is a 'k' for which 639k70 is divisible by 7. Let's test k=1. 639170 / 7 = 91310. Since it divides evenly for k=1, 7 is a possible divisor. **Possible.**

Therefore, 4 cannot be a divisor. The correct answer is C.`
  },
  12: {
    id: 'A2-q12',
    text: 'If n is an odd number, and the remainder when n is divided by 7 is 4. Which of the following could be divisible by 14?',
    options: [
        {label: "A", text: "n+3"},
        {label: "B", text: "n+5"},
        {label: "C", text: "n+7"},
        {label: "D", text: "n+9"},
        {label: "E", text: "n+11"},
    ],
    correctAnswer: 'A',
    explanation: `From the given information:
1.  n is odd.
2.  When n is divided by 7, the remainder is 4. This can be written as n = 7k + 4 for some integer k.

Substitute condition 2 into condition 1:
n = 7k + 4 must be odd. Since 4 is even, 7k must be odd. For 7k to be odd, k must be an odd integer.

Now we need to find which option is divisible by 14 (i.e., divisible by both 2 and 7).

-   **Check for divisibility by 7:**
    (A) n+3 = (7k+4)+3 = 7k+7 = 7(k+1). This is always divisible by 7.
    (B) n+5 = (7k+4)+5 = 7k+9. Not divisible by 7.
    (C) n+7 = (7k+4)+7 = 7k+11. Not divisible by 7.
    (D) n+9 = (7k+4)+9 = 7k+13. Not divisible by 7.
    (E) n+11 = (7k+4)+11 = 7k+15. Not divisible by 7.
    Only option (A) is always divisible by 7.

-   **Check option (A) for divisibility by 2:**
    We need to check if n+3 is even. We are given that n is odd.
    n+3 = (odd) + (odd) = even.
    So, n+3 is always divisible by 2.

Since n+3 is always divisible by 7 and always divisible by 2, it is always divisible by their least common multiple, 14.

Thus, the correct answer is A.`
  },
};