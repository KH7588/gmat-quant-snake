import { Question, Option } from '../../types';
import { DS_OPTIONS } from '../questions'; // Assuming DS_OPTIONS is now exported separately

export const EXAM_A2_QUESTIONS: Record<number, Question> = {
  1: {
    id: 'A2-q1',
    text: 'If $x$ and $y$ are positive integers, is $x$ even?',
    statements: [
      '$2x+y$ is odd',
      '$5x+3y$ is odd'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `**Statement (1):** $2x + y$ is odd.
      Since $x$ is a positive integer, $2x$ is always an even number.
      For (even $+ y$) to be odd, $y$ must be an odd number.
      However, this statement gives us no information about $x$ ($x$ can be even or odd).
      Therefore, Statement (1) ALONE is NOT sufficient to determine if $x$ is even.
      
      **Statement (2):** $5x + 3y$ is odd.
      We can analyze the parities:
      *   If $x$ is even, then $5x$ is even. For (even $+ 3y$) to be odd, $3y$ must be odd, which means $y$ must be odd. (So, $x=\\text{even}, y=\\text{odd}$ is a possibility)
      *   If $x$ is odd, then $5x$ is odd. For (odd $+ 3y$) to be odd, $3y$ must be even, which means $y$ must be even. (So, $x=\\text{odd}, y=\\text{even}$ is a possibility)
      Since $x$ can be either even or odd, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      From Statement (1), we know $y$ must be odd.
      Substitute $y = \\text{odd}$ into Statement (2): $5x + 3(\\text{odd})$ is odd.
      $5x + \\text{odd}$ is odd.
      For ($5x + \\text{odd}$) to be odd, $5x$ must be even.
      For $5x$ to be even, $x$ must be even.
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
      This means when $(k+32)$ is divided by $k$, the remainder is $8$.
      We know that $(k+32) = 1 \\times k + 32$.
      If $32$ is less than $k$, then $R(k+32)$ would be $32$. But the remainder is given as $8$.
      This implies that $32$ is greater than $k$, and $32$ can be expressed as: $32 = q \\times k + 8$, where $q$ is an integer quotient and $8$ is the remainder.
      Since $8$ is the remainder, it must be true that $8 < k$.
      
      Now, let's analyze possible values for $k$ such that $32 = q \\times k + 8$:
      $32 - 8 = q \\times k$.
      $24 = q \\times k$.
      
      Also, we know $8 < k$.
      Possible integer values for $k$:
      *   If $q=1, k=24$. ($8 < 24$. This works.)
      *   If $q=2, k=12$. ($8 < 12$. This works.)
      *   If $q=3, k=8$. ($8 < 8$. This does NOT work, remainder must be strictly less than divisor.)
      *   If $q=4, k=6$. ($8 < 6$. This does NOT work.)
      
      So, possible values for $k$ are $24$ and $12$.
      In both cases, $k$ ($24$ or $12$) is greater than $10$.
      Therefore, Statement (1) ALONE is sufficient to conclude that $k > 10$.
      
      **Statement (2):** $R(k+42) = 6$.
      Similar to Statement (1), this implies $6 < k$.
      Also, $42 = q \\times k + 6$.
      $42 - 6 = q \\times k$.
      $36 = q \\times k$.
      
      Possible integer values for $k$ such that $6 < k$:
      *   If $q=1, k=36$. ($6 < 36$. This works.)
      *   If $q=2, k=18$. ($6 < 18$. This works.)
      *   If $q=3, k=12$. ($6 < 12$. This works.)
      *   If $q=4, k=9$. ($6 < 9$. This works.)
      *   If $q=6, k=6$. ($6 < 6$. This does NOT work.)
      
      Since $k$ could be $9$ (which is not $> 10$) or $k$ could be $36$ (which is $> 10$), Statement (2) ALONE is NOT sufficient.
      
      Thus, the correct answer is A.`
  },
  3: {
    id: 'A2-q3',
    text: 'If the symbol $\\triangle$ can represent addition, subtraction, multiplication, or division, which operation does it represent?',
    statements: [
      '$2^{4\\triangle2}=4^{1\\triangle1}$',
      '$2^{4\\triangle2} = (4\\triangle2)^2$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'A',
    explanation: `Let's test each operation for both statements.
      
      **Statement (1):** $2^{4\\triangle2} = 4^{1\\triangle1}$
      
      *   **Addition (+):**
          Left side: $2^{4+2} = 2^6 = 64$.
          Right side: $4^{1+1} = 4^2 = 16$.
          $64 \\neq 16$. So, $\\triangle$ is not addition.
      
      *   **Subtraction (-):**
          Left side: $2^{4-2} = 2^2 = 4$.
          Right side: $4^{1-1} = 4^0 = 1$.
          $4 \\neq 1$. So, $\\triangle$ is not subtraction.
      
      *   **Multiplication ($\\times$):**
          Left side: $2^{4\\times2} = 2^8 = 256$.
          Right side: $4^{1\\times1} = 4^1 = 4$.
          $256 \\neq 4$. So, $\\triangle$ is not multiplication.
      
      *   **Division (/):**
          Left side: $2^{4/2} = 2^2 = 4$.
          Right side: $4^{1/1} = 4^1 = 4$.
          $4 = 4$. This works.
      
      So, from Statement (1) alone, the symbol $\\triangle$ MUST represent division. Statement (1) ALONE is sufficient.
      
      **Statement (2):** $2^{4\\triangle2} = (4\\triangle2)^2$
      
      *   **Addition (+):**
          Left side: $2^{4+2} = 2^6 = 64$.
          Right side: $(4+2)^2 = 6^2 = 36$.
          $64 \\neq 36$. This does not work.
      
      *   **Subtraction (-):**
          Left side: $2^{4-2} = 2^2 = 4$.
          Right side: $(4-2)^2 = 2^2 = 4$.
          $4 = 4$. This works.
      
      *   **Multiplication ($\\times$):**
          Left side: $2^{4\\times2} = 2^8 = 256$.
          Right side: $(4\\times2)^2 = 8^2 = 64$.
          $256 \\neq 64$. This does not work.
      
      *   **Division (/):**
          Left side: $2^{4/2} = 2^2 = 4$.
          Right side: $(4/2)^2 = 2^2 = 4$.
          $4 = 4$. This works.
      
      Since subtraction and division satisfy Statement (2), Statement (2) ALONE is NOT sufficient.
      
      Thus, the correct answer is A.`
  },
  4: {
    id: 'A2-q4',
    text: 'A person\'s new daily wage is $125\\%$ greater than his former daily wage. If he works $10\\%$ fewer hours per day, by what percentage does his new hourly wage exceed his former hourly wage?',
    options: [
      { label: "A", text: "125%" },
      { label: "B", text: "150%" },
      { label: "C", "text": "175%" },
      { label: "D", text: "200%" },
      { label: "E", text: "225%" }
    ],
    correctAnswer: 'B',
    explanation: `Let the former daily wage be $D_f$ and former hours per day be $H_f$.
      Former hourly wage ($HW_f$) = $D_f / H_f$.
      
      **1. Calculate New Daily Wage ($D_n$):**
      New daily wage is $125\\%$ greater than former daily wage.
      $D_n = D_f + 1.25 \\times D_f = 2.25 \\times D_f$.
      
      **2. Calculate New Hours per Day ($H_n$):**
      He works $10\\%$ fewer hours per day.
      $H_n = H_f - 0.10 \\times H_f = 0.90 \\times H_f$.
      
      **3. Calculate New Hourly Wage ($HW_n$):**
      $HW_n = D_n / H_n = (2.25 \\times D_f) / (0.90 \\times H_f)$.
      $HW_n = (2.25 / 0.90) \\times (D_f / H_f)$.
      $HW_n = (2.5) \\times HW_f$.
      
      So, the new hourly wage is $2.5$ times the former hourly wage.
      
      **4. Calculate the Percentage Exceeds:**
      Percentage exceed = $\\frac{(HW_n - HW_f)}{HW_f} \\times 100\\%$
      $= \\frac{(2.5 \\times HW_f - HW_f)}{HW_f} \\times 100\\%$
      $= \\frac{1.5 \\times HW_f}{HW_f} \\times 100\\%$
      $= 1.5 \\times 100\\% = 150\\%$.
      
      Thus, the new hourly wage exceeds his former hourly wage by $150\\%$.
      
      The correct answer is B.`
  },
  5: {
    id: 'A2-q5',
    text: 'What is the mean of three numbers $x, y,$ and $z$?',
    statements: [
      '$2x-y+z=6$',
      '$x+4y+2z=9$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `We need to find the mean of $x, y,$ and $z$, which is $(x+y+z)/3$. This means we need to find the value of $(x+y+z)$.
      
      **Statement (1):** $2x - y + z = 6$.
      This is a single linear equation with three variables. We cannot find unique values for $x, y,$ and $z$, nor can we find a unique value for their sum $(x+y+z)$.
      For example:
      *   If $x=1, y=1, z=5 \\Rightarrow 2(1)-1+5 = 6$. Sum = $7$. Mean = $\\frac{7}{3}$.
      *   If $x=2, y=2, z=4 \\Rightarrow 2(2)-2+4 = 6$. Sum = $8$. Mean = $\\frac{8}{3}$.
      Since we get different means, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** $x + 4y + 2z = 9$.
      This is also a single linear equation with three variables. Similarly, we cannot find a unique value for $(x+y+z)$.
      For example:
      *   If $x=1, y=1, z=2 \\Rightarrow 1+4(1)+2(2) = 1+4+4 = 9$. Sum = $4$. Mean = $\\frac{4}{3}$.
      *   If $x=3, y=1, z=1 \\Rightarrow 3+4(1)+2(1) = 9$. Sum = $5$. Mean = $\\frac{5}{3}$.
      Since we get different means, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      We have a system of two linear equations with three variables:
      1) $2x - y + z = 6$
      2) $x + 4y + 2z = 9$
      
      We want to find $(x+y+z)$. Let's try to manipulate the equations to get $(x+y+z)$.
      Multiply equation (1) by $2$:
      $2 \\times (2x - y + z) = 2 \\times 6$
      $4x - 2y + 2z = 12$ (Equation 3)
      
      Subtract Equation 3 from Equation 2:
      $(x + 4y + 2z) - (4x - 2y + 2z) = 9 - 12$
      $x + 4y + 2z - 4x + 2y - 2z = -3$
      $-3x + 6y = -3$
      Divide by $-3$: $x - 2y = 1$.
      So, $x = 2y + 1$.
      
      Substitute $x = 2y + 1$ into equation (1):
      $2(2y + 1) - y + z = 6$
      $4y + 2 - y + z = 6$
      $3y + z = 4$
      So, $z = 4 - 3y$.
      
      Now express $x+y+z$ in terms of $y$:
      $x + y + z = (2y + 1) + y + (4 - 3y)$
      $x + y + z = 2y + y - 3y + 1 + 4$
      $x + y + z = 0y + 5$
      $x + y + z = 5$
      
      The sum $x+y+z$ is uniquely determined as $5$.
      Therefore, the mean $(x+y+z)/3 = \\frac{5}{3}$.
      BOTH statements TOGETHER are sufficient.
      
      Thus, the correct answer is C.`
  },
  6: {
    id: 'A2-q6',
    text: 'An investment yields an annual interest rate of $a$ percent for the first year and $b$ percent for the second year. If the total return over the two-year period is the same as that of an investment that earns a constant annual rate of $x$ percent each year, express $x$ in terms of $a$ and $b$.',
    options: [
      { label: "A", text: '$100\\left(\\sqrt{\\left(1 + \\frac{a}{100}\\right)\\left(1 + \\frac{b}{100}\\right)} - 1\\right)$' },
      { label: "B", text: '$\\sqrt{ \\left( 1 + \\frac{a}{100} \\right) \\left( 1 + \\frac{b}{100} \\right) } - 1$' },
      { label: "C", text: '$\\frac{a+b}{2}$' },
      { label: "D", text: '$100\\left[\\left( 1 + \\frac{a}{100} \\right)\\left( 1 + \\frac{b}{100} \\right) - 1\\right]$' },
      { label: "E", text: '$100  \\frac{a+b}{200} $' }
    ],
    correctAnswer: 'A',
    explanation: `Let $P$ be the initial principal amount.
      
      **Investment with varying rates ($a\\%$ and $b\\%$):**
      After the first year, the principal becomes $P \\times (1 + \\frac{a}{100})$.
      After the second year, this new amount earns $b\\%$ interest, so the total amount becomes:
      Amount_final = $P \\times (1 + \\frac{a}{100}) \\times (1 + \\frac{b}{100})$.
      
      **Investment with constant rate ($x\\%$):**
      If the investment earns $x\\%$ annually for two years, the total amount becomes:
      Amount_final = $P \\times (1 + \\frac{x}{100})^2$.
      
      **Equating the two scenarios:**
      $P \\times (1 + \\frac{x}{100})^2 = P \\times (1 + \\frac{a}{100}) \\times (1 + \\frac{b}{100})$.
      
      Divide both sides by $P$:
      $(1 + \\frac{x}{100})^2 = (1 + \\frac{a}{100}) \\times (1 + \\frac{b}{100})$.
      
      Take the square root of both sides (since rates are positive, $(1+\\text{rate})$ is positive):
      $1 + \\frac{x}{100} = \\sqrt{ \\left( 1 + \\frac{a}{100} \\right) \\left( 1 + \\frac{b}{100} \\right) }$.
      
      Subtract $1$ from both sides:
      $\\frac{x}{100} = \\sqrt{ \\left( 1 + \\frac{a}{100} \\right) \\left( 1 + \\frac{b}{100} \\right) } - 1$.
      
      Multiply by $100$ to solve for $x$:
      $x = 100 \\left( \\sqrt{ \\left( 1 + \\frac{a}{100} \\right) \\left( 1 + \\frac{b}{100} \\right) } - 1 \\right)$.
      
      Thus, the correct answer is A.`
  },
  7: {
    id: 'A2-q7',
    text: 'A product has a cost of $120$. Its profit is $20$ percent of its revenue. If the cost is reduced while the revenue remains unchanged, and the profit then becomes $30$ percent of the revenue, what is the new cost of the product?',
    options: [ 
      { label: "A", text: "$90" },
      { label: "B", text: "$100" },
      { label: "C", text: "$105" },
      { label: "D", text: "$110" },
      { label: "E", text: "$115" }
    ],
    correctAnswer: 'C', 
    explanation: `Let $C$ be the cost, $P$ be the profit, and $R$ be the revenue.
      The relationship is $C + P = R$.
      
      **Initial Situation:**
      Initial Cost ($C_1$) = $120$.
      Initial Profit ($P_1$) = $20\\%$ of Revenue ($R_1$) $\\Rightarrow P_1 = 0.20 \\times R_1$.
      
      Substitute $P_1$ into the relationship: $C_1 + P_1 = R_1$.
      $120 + 0.20 \\times R_1 = R_1$.
      $120 = R_1 - 0.20 \\times R_1$.
      $120 = 0.80 \\times R_1$.
      $R_1 = 120 / 0.80 = 120 / (\\frac{4}{5}) = 120 \\times \\frac{5}{4} = 30 \\times 5 = 150$.
      So, the initial revenue $R_1 = 150$.
      
      **New Situation:**
      Revenue ($R_2$) remains unchanged, so $R_2 = R_1 = 150$.
      New Profit ($P_2$) = $30\\%$ of Revenue ($R_2$) $\\Rightarrow P_2 = 0.30 \\times R_2$.
      $P_2 = 0.30 \\times 150 = 45$.
      
      Let the New Cost be $C_2$.
      Using the relationship: $C_2 + P_2 = R_2$.
      $C_2 + 45 = 150$.
      $C_2 = 150 - 45$.
      $C_2 = 105$.
      
      Thus, the new cost of the product is $105$.
      
      The correct answer is C.`
  },
  8: {
    id: 'A2-q8',
    text: 'Pump A can empty a certain pool in $24$ hours. After Pump A operates alone for $8$ hours, the remaining water is pumped out by Pump B, whose pumping rate is $\\frac{2}{3}$ that of Pump A. How many additional hours are required for Pump B to empty the pool completely?',
    options: [ 
      { label: "A", text: "16 hours" },
      { label: "B", text: "20 hours" },
      { label: "C", text: "24 hours" },
      { label: "D", text: "30 hours" },
      { label: "E", text: "32 hours" }
    ],
    correctAnswer: 'C', 
    explanation: `Let the volume of the pool be $V$ units.
      
      **1. Rate of Pump A ($R_A$):**
      Pump A empties the pool in $24$ hours.
      $R_A = \\frac{V}{24}$ (units per hour).
      
      **2. Water pumped by Pump A in $8$ hours:**
      Amount pumped by A = $R_A \\times 8 = (\\frac{V}{24}) \\times 8 = \\frac{V}{3}$.
      
      **3. Remaining Water:**
      Remaining water = $V - (\\frac{V}{3}) = \\frac{2V}{3}$.
      
      **4. Rate of Pump B ($R_B$):**
      Pump B's rate is $\\frac{2}{3}$ that of Pump A.
      $R_B = \\frac{2}{3} \\times R_A = \\frac{2}{3} \\times (\\frac{V}{24}) = \\frac{2V}{72} = \\frac{V}{36}$ (units per hour).
      
      **5. Time required for Pump B to empty remaining water:**
      Time = $\\frac{\\text{Remaining Water}}{R_B}$
      Time = $(\\frac{2V}{3}) / (\\frac{V}{36})$
      Time = $(\\frac{2V}{3}) \\times (\\frac{36}{V})$
      Time = $(\\frac{2}{3}) \\times 36$
      Time = $2 \\times 12 = 24$ hours.
      
      Thus, $24$ additional hours are required for Pump B to empty the pool completely.
      
      The correct answer is C.`
  },
  9: {
    id: 'A2-q9',
    text: 'How many integers between $10$ and $99$, inclusive, are divisible by $3$ or by $7$?',
    options: [ 
      { label: "A", text: "35" },
      { label: "B", text: "37" },
      { label: "C", text: "39" },
      { label: "D", text: "41" },
      { label: "E", text: "43" }
    ],
    correctAnswer: 'C', 
    explanation: `We need to find the number of integers $N$ such that $10 \\le N \\le 99$ that are divisible by $3$ or by $7$.
      We use the Principle of Inclusion-Exclusion:
      $N(A \\cup B) = N(A) + N(B) - N(A \\cap B)$.
      Where:
      *   $N(A)$ = numbers divisible by $3$
      *   $N(B)$ = numbers divisible by $7$
      *   $N(A \\cap B)$ = numbers divisible by both $3$ and $7$ (i.e., by $\\text{LCM}(3, 7) = 21$)
      
      **1. Numbers divisible by 3:**
      The smallest multiple of $3 \\ge 10$ is $12$ ($3 \\times 4$).
      The largest multiple of $3 \\le 99$ is $99$ ($3 \\times 33$).
      Number of multiples = $(\\text{Last multiple} / \\text{divisor}) - (\\text{First multiple} / \\text{divisor}) + 1$
      $= 33 - 4 + 1 = 30$.
      So, $N(3) = 30$.
      
      **2. Numbers divisible by 7:**
      The smallest multiple of $7 \\ge 10$ is $14$ ($7 \\times 2$).
      The largest multiple of $7 \\le 99$ is $98$ ($7 \\times 14$).
      Number of multiples = $14 - 2 + 1 = 13$.
      So, $N(7) = 13$.
      
      **3. Numbers divisible by 21 (LCM of 3 and 7):**
      The smallest multiple of $21 \\ge 10$ is $21$ ($21 \\times 1$).
      The largest multiple of $21 \\le 99$ is $84$ ($21 \\times 4$).
      Number of multiples = $4 - 1 + 1 = 4$.
      So, $N(21) = 4$.
      
      **4. Apply Inclusion-Exclusion Principle:**
      Total = $N(3) + N(7) - N(21)$
      Total = $30 + 13 - 4$
      Total = $43 - 4 = 39$.
      
      Thus, there are $39$ integers between $10$ and $99$, inclusive, that are divisible by $3$ or by $7$.
      
      The correct answer is C.`
  },
  10: {
    id: 'A2-q10',
    text: 'In a survey of voters concerning two candidates, A and B, $50$ respondents support both candidates, and $100$ respondents support neither candidate. What is the total number of respondents surveyed?',
    statements: [
      'The number of respondents who support candidate A is equal to the number of respondents who do not support candidate A.',
      'The ratio of respondents who support candidate B to those who do not support candidate B is $2:3$.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `Let $T$ be the total number of respondents.
      Let $A$ be the set of respondents who support candidate A.
      Let $B$ be the set of respondents who support candidate B.
      Let $A \\cap B$ be those who support both.
      Let $(A \\cup B)'$ be those who support neither.
      
      We are given:
      *   $|A \\cap B| = 50$ (support both)
      *   $|(A \\cup B)'| = 100$ (support neither)
      
      From set theory, we know that $T = |A \\cup B| + |(A \\cup B)'|$.
      So, $T = |A \\cup B| + 100$.
      And $|A \\cup B| = |A| + |B| - |A \\cap B|$.
      Therefore, $T = |A| + |B| - 50 + 100 = |A| + |B| + 50$.
      To find $T$, we need to find $|A|$ and $|B|$.
      
      **Statement (1):** The number of respondents who support candidate A is equal to the number of respondents who do not support candidate A.
      $|A| = |A'|$.
      Since $|A| + |A'| = T$, we have $2|A| = T$, so $|A| = T/2$.
      
      From the main equation $T = |A| + |B| + 50$:
      $T = T/2 + |B| + 50$.
      $T/2 = |B| + 50$.
      $|B| = T/2 - 50$.
      
      We still have two unknowns, $T$ and $|B|$. This is not sufficient.
      For example:
      *   If $T=200$, then $|A|=100$, $|B|=200/2-50=50$. $|A \\cup B| = 100+50-50=100$. $T = 100+100=200$. This is consistent.
      *   If $T=300$, then $|A|=150$, $|B|=300/2-50=100$. $|A \\cup B| = 150+100-50=200$. $T = 200+100=300$. This is consistent.
      Since $T$ can vary, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** The ratio of respondents who support candidate B to those who do not support candidate B is $2:3$.
      $|B| / |B'| = 2/3$.
      Since $|B| + |B'| = T$, we have $|B'| = T - |B|$.
      $|B| / (T - |B|) = 2/3$.
      $3|B| = 2(T - |B|)$.
      $3|B| = 2T - 2|B|$.
      $5|B| = 2T \\Rightarrow |B| = 2T/5$.
      
      We still have two unknowns, $T$ and $|A|$ (from $T = |A| + |B| + 50$). This is not sufficient.
      For example:
      *   If $T=200$, then $|B|=2(200)/5=80$. $|A| = 200-80-50=70$. $|A \\cup B| = 70+80-50=100$. $T=100+100=200$. Consistent.
      *   If $T=300$, then $|B|=2(300)/5=120$. $|A| = 300-120-50=130$. $|A \\cup B| = 130+120-50=200$. $T=200+100=300$. Consistent.
      Since $T$ can vary, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      From (1): $|A| = T/2$.
      From (2): $|B| = 2T/5$.
      
      Substitute these into the main equation: $T = |A| + |B| + 50$.
      $T = T/2 + 2T/5 + 50$.
      To eliminate fractions, multiply by $10$:
      $10T = 5T + 4T + 500$.
      $10T = 9T + 500$.
      $T = 500$.
      
      The total number of respondents is uniquely determined as $500$.
      Therefore, BOTH statements TOGETHER are sufficient.
      
      Thus, the correct answer is C.`
  },
  11: {
    id: 'A2-q11',
    text: 'The six-digit integer $639,k70$ is formed, where $k$ represents a single digit from $0$ to $9$. Which of the following CANNOT be a divisor of this integer?',
    options: [ 
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "5" },
      { label: "E", "text": "7" }
    ],
    correctAnswer: 'C', 
    explanation: `Let the integer be $N = 639,k70$.
      We need to check which of the given options CANNOT be a divisor of $N$.
      
      **Divisibility by 2:**
      A number is divisible by $2$ if its last digit is even. The last digit of $N$ is $0$, which is even.
      So, $N$ is always divisible by $2$. Option (A) can be a divisor.
      
      **Divisibility by 3:**
      A number is divisible by $3$ if the sum of its digits is divisible by $3$.
      Sum of digits = $6 + 3 + 9 + k + 7 + 0 = 25 + k$.
      We need to check if $(25 + k)$ can be divisible by $3$ for some digit $k$ ($0-9$).
      If $k=2$, Sum = $27$ (divisible by $3$).
      If $k=5$, Sum = $30$ (divisible by $3$).
      If $k=8$, Sum = $33$ (divisible by $3$).
      Since $N$ can be divisible by $3$ for certain values of $k$, Option (B) can be a divisor.
      
      **Divisibility by 4:**
      A number is divisible by $4$ if the number formed by its last two digits is divisible by $4$.
      The last two digits of $N$ are "70".
      Is $70$ divisible by $4$? No, $70 / 4 = 17$ with a remainder of $2$.
      Therefore, no matter what $k$ is, the number $639,k70$ will never be divisible by $4$ because its last two digits ($70$) are not divisible by $4$.
      Option (C) CANNOT be a divisor.
      
      **Divisibility by 5:**
      A number is divisible by $5$ if its last digit is $0$ or $5$. The last digit of $N$ is $0$.
      So, $N$ is always divisible by $5$. Option (D) can be a divisor.
      
      **Divisibility by 7:**
      This requires testing. A number is divisible by $7$ if (the number without the last digit) $- 2 \\times$ (last digit) is divisible by $7$. This is complex for a variable $k$.
      Alternatively, we can express the number as $639,070 + 100k$.
      $639,070 / 7 = 91,295.7\\dots$ (not divisible by $7$)
      Let's check for specific $k$ values.
      If $k=1, N = 639170$. $639170 / 7 = 91310$. This example works ($639170 / 7 = 91310$).
      Since $N$ can be divisible by $7$ for certain values of $k$, Option (E) can be a divisor.
      
      Only Option (C), $4$, CANNOT be a divisor of the integer $639,k70$.
      
      The correct answer is C.`
  },
  12: {
    id: 'A2-q12',
    text: 'If $n$ is an odd number, and the remainder when $n$ is divided by $7$ is $4$. Which of the following could be divisible by $14$?',
    options: [ 
      { label: "A", text: "$n + 3$" },
      { label: "B", text: "$n + 5$" },
      { label: "C", text: "$n + 7$" },
      { label: "D", text: "$n + 9$" },
      { label: "E", text: "$n + 11$" }
    ],
    correctAnswer: 'A', 
    explanation: `We are given that $n$ is an odd number, and when $n$ is divided by $7$, the remainder is $4$.
      This can be written as $n = 7q + 4$ for some integer $q$.
      Since $n$ is odd, $7q + 4$ must be odd.
      Since $4$ is even, $7q$ must be odd for $7q + 4$ to be odd.
      For $7q$ to be odd, $q$ must be an odd integer.
      
      Let's test the given options to see which one could be divisible by $14$.
      A number is divisible by $14$ if it is divisible by both $2$ and $7$.
      
      **Option (A): $n + 3$**
      Substitute $n = 7q + 4$:
      $n + 3 = (7q + 4) + 3 = 7q + 7 = 7(q + 1)$.
      This expression is always divisible by $7$.
      Now check for divisibility by $2$.
      Since $q$ is an odd integer, $(q + 1)$ is an even integer.
      Therefore, $7(q + 1)$ is $7 \\times (\\text{an even number})$, which is always even.
      Since $n+3$ is divisible by both $7$ and $2$, it is divisible by $14$.
      
      Let's verify with an example:
      If $q = 1$ (odd), $n = 7(1) + 4 = 11$. ($n$ is odd, remainder when $11$ is divided by $7$ is $4$).
      $n + 3 = 11 + 3 = 14$. $14$ is divisible by $14$.
      This option works.
      
      **Option (B): $n + 5$**
      $n + 5 = (7q + 4) + 5 = 7q + 9$.
      This is not necessarily divisible by $7$. (e.g., if $q=1, n+5=16$, not div by $7$).
      
      **Option (C): $n + 7$**
      $n + 7 = (7q + 4) + 7 = 7q + 11$.
      This is not necessarily divisible by $7$. (e.g., if $q=1, n+7=18$, not div by $7$).
      Also, since $n$ is odd, $n+7 = \\text{odd}+\\text{odd} = \\text{even}$. So it is divisible by $2$. But not guaranteed by $7$.
      
      **Option (D): $n + 9$**
      $n + 9 = (7q + 4) + 9 = 7q + 13$.
      This is not necessarily divisible by $7$. (e.g., if $q=1, n+9=20$, not div by $7$).
      
      **Option (E): $n + 11$**
      $n + 11 = (7q + 4) + 11 = 7q + 15$.
      This is not necessarily divisible by $7$. (e.g., if $q=1, n+11=22$, not div by $7$).
      
      Thus, only $n+3$ could be divisible by $14$.
      
      The correct answer is A.`
  },
};