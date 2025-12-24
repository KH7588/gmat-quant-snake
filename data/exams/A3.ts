import { Question, Option } from '../../types';
import { DS_OPTIONS } from '../questions'; // Assuming DS_OPTIONS is now exported separately

// Standard Problem Solving Numerical Options
const PS_NUMERICAL_OPTIONS: Option[] = [
  { label: "A", text: "1" },
  { label: "B", text: "2" },
  { label: "C", text: "3" },
  { label: "D", text: "4" },
  { label: "E", text: "5" }
];

export const EXAM_A3_QUESTIONS: Record<number, Question> = {
  1: {
    id: 'A3-q1',
    text: 'In a certain group of students, each student studies at least one of three instruments: A, B, or C, or studies none of them. If $\\frac{1}{4}$ of the students study instrument A exclusively, $\\frac{1}{6}$ of the students study instrument B exclusively, and $\\frac{1}{8}$ of the students study instrument C exclusively, and the remaining $143$ students do not study any of the three instruments, how many more students study instrument B exclusively than study instrument C exclusively?',
    options: [
      { label: "A", text: "11" },
      { label: "B", text: "13" },
      { label: "C", text: "15" },
      { label: "D", text: "17" },
      { label: "E", "text": "19" }
    ],
    correctAnswer: 'B',
    explanation: `Let $T$ be the total number of students in the group.
    Let $A_{excl}$, $B_{excl}$, $C_{excl}$ be the fractions of students studying instruments A, B, and C exclusively, respectively.
    
    Given:
    $A_{excl} = \\frac{1}{4} T$
    $B_{excl} = \\frac{1}{6} T$
    $C_{excl} = \\frac{1}{8} T$
    
    The remaining $143$ students do not study any of the three instruments. This implies that the sum of the fractions of students who study exclusively one instrument, or combinations, or none, should be $T$.
    
    The problem statement "each student studies at least one of three instruments: A, B, or C, or or studies none of them" implies that *all students fall into these categories*.
    
    So, the fraction of students who fall into the *explicitly mentioned categories* (A exclusively, B exclusively, C exclusively, and None) must account for the total if other categories are zero or implicitly included.
    
    Let's assume there are NO students who study combinations of instruments, based on the problem wording focusing on "exclusively" and "none". This is a standard simplification if not explicitly stated.
    
    So, the fraction of students who study at least one instrument is:
    Fraction_studying = $A_{excl} + B_{excl} + C_{excl} = \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{8}$
    
    Find a common denominator for 4, 6, 8, which is 24.
    Fraction_studying = $\\frac{6}{24} + \\frac{4}{24} + \\frac{3}{24} = \\frac{6+4+3}{24} = \\frac{13}{24}$
    
    This is the fraction of students who study *exactly one* instrument (and thus, at least one).
    
    The fraction of students who do not study any instrument is:
    Fraction_none = $1 - \\text{Fraction_studying} = 1 - \\frac{13}{24} = \\frac{11}{24}$
    
    We are given that $143$ students do not study any of the three instruments.
    So, $\\frac{11}{24} T = 143$
    $T = 143 \\times \\frac{24}{11}$
    $T = 13 \\times 24$
    $T = 312$ total students.
    
    Now, calculate the number of students who study instrument B exclusively and C exclusively:
    Number of students studying B exclusively = $\\frac{1}{6} \\times T = \\frac{1}{6} \\times 312 = 52$ students.
    Number of students studying C exclusively = $\\frac{1}{8} \\times T = \\frac{1}{8} \\times 312 = 39$ students.
    
    The difference between students studying B exclusively and C exclusively is:
    $52 - 39 = 13$ students.
    
    Thus, the correct answer is B.`
  },
  2: {
    id: 'A3-q2',
    text: 'If $2^{-2x} - 2 \\times 2^{-x} - 3 = 0$, then $2^{-x} = ?$',
    options: PS_NUMERICAL_OPTIONS,
    correctAnswer: 'C', // Corresponds to 3
    explanation: `The given equation is $2^{-2x} - 2 \\times 2^{-x} - 3 = 0$.
      We can rewrite the terms using exponent rules:
      *   $2^{-2x} = (2^{-x})^2$
      *   $2 \\times 2^{-x} = 2 \\times 2^{-x}$
      
      Let $y = 2^{-x}$. Since $x$ is a real number, $2^{-x}$ must be positive, so $y > 0$.
      Substitute $y$ into the equation:
      $y^2 - 2y - 3 = 0$.
      
      This is a quadratic equation. We can factor it:
      $(y - 3)(y + 1) = 0$.
      
      This gives two possible values for $y$:
      $y - 3 = 0 \\Rightarrow y = 3$.
      $y + 1 = 0 \\Rightarrow y = -1$.
      
      Since $y = 2^{-x}$ and $y$ must be positive, we discard $y = -1$.
      Therefore, $y = 3$.
      
      Since we defined $y = 2^{-x}$, this means $2^{-x} = 3$.
      The question asks for the value of $2^{-x}$.
      
      Thus, the correct answer is C.`
  },
  3: {
    id: 'A3-q3',
    text: 'If $x=\\sqrt{3}-\\sqrt{7}$, then $(\\frac{x}{2})+(\\frac{2}{x})=?$',
    options: [
      { label: "A", text: '$\\sqrt{3}$' },
      { label: "B", text: '$\\sqrt{7}$' },
      { label: "C", text: '$-\\sqrt{3}$' },
      { label: "D", text: '$-\\sqrt{7}$' },
      { label: "E", text: '$-\\sqrt{10}$' }
    ],
    correctAnswer: 'D',
    explanation: `Given $x = \\sqrt{3} - \\sqrt{7}$.
      We need to find the value of $(\\frac{x}{2}) + (\\frac{2}{x})$.
      
      First, let's combine the terms:
      $(\\frac{x}{2}) + (\\frac{2}{x}) = \\frac{x^2 + 4}{2x}$.
      
      Now, calculate $x^2$:
      $x^2 = (\\sqrt{3} - \\sqrt{7})^2$.
      $x^2 = (\\sqrt{3})^2 - 2(\\sqrt{3})(\\sqrt{7}) + (\\sqrt{7})^2$.
      $x^2 = 3 - 2\\sqrt{21} + 7$.
      $x^2 = 10 - 2\\sqrt{21}$.
      
      Next, substitute $x^2$ into the expression:
      $\\frac{(10 - 2\\sqrt{21}) + 4}{2(\\sqrt{3} - \\sqrt{7})}$
      $= \\frac{14 - 2\\sqrt{21}}{2(\\sqrt{3} - \\sqrt{7})}$
      
      Factor out 2 from the numerator:
      $= \\frac{2(7 - \\sqrt{21})}{2(\\sqrt{3} - \\sqrt{7})}$
      $= \\frac{7 - \\sqrt{21}}{\\sqrt{3} - \\sqrt{7}}$
      
      Now, observe that $\\sqrt{21} = \\sqrt{3} \\times \\sqrt{7}$.
      $= \\frac{7 - \\sqrt{3}\\sqrt{7}}{\\sqrt{3} - \\sqrt{7}}$
      
      Factor out $\\sqrt{7}$ from the numerator:
      $= \\frac{\\sqrt{7}(\\sqrt{7} - \\sqrt{3})}{\\sqrt{3} - \\sqrt{7}}$
      
      Notice that $(\\sqrt{7} - \\sqrt{3})$ is the negative of $(\\sqrt{3} - \\sqrt{7})$.
      Let $A = \\sqrt{3} - \\sqrt{7}$. Then $-A = \\sqrt{7} - \\sqrt{3}$.
      $= \\frac{\\sqrt{7}(-(\\sqrt{3} - \\sqrt{7}))}{\\sqrt{3} - \\sqrt{7}}$
      $= -\\sqrt{7}$.
      
      Thus, the correct answer is D.`
  },
  4: {
    id: 'A3-q4',
    text: 'What is the value of $m-n$=?',
    statements: [
      '$m=n^2-1$',
      '$n=m^2-1$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'E',
    explanation: `We need to find the value of $m - n$.
      
      **Statement (1):** $m = n^2 - 1$.
      This is a single equation with two variables. We cannot find unique values for $m$ and $n$, and thus cannot find a unique value for $m - n$.
      For example:
      *   If $n = 2, m = 2^2 - 1 = 3$. Then $m - n = 3 - 2 = 1$.
      *   If $n = 3, m = 3^2 - 1 = 8$. Then $m - n = 8 - 3 = 5$.
      Since $m - n$ can have different values, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** $n = m^2 - 1$.
      Similar to Statement (1), this is a single equation with two variables. It's not sufficient to find unique values for $m$ and $n$, or $m - n$.
      For example:
      *   If $m = 2, n = 2^2 - 1 = 3$. Then $m - n = 2 - 3 = -1$.
      *   If $m = 3, n = 3^2 - 1 = 8$. Then $m - n = 3 - 8 = -5$.
      Since $m - n$ can have different values, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      We have a system of two equations:
      1) $m = n^2 - 1$
      2) $n = m^2 - 1$
      
      Substitute (1) into (2):
      $n = (n^2 - 1)^2 - 1$.
      $n = n^4 - 2n^2 + 1 - 1$.
      $n = n^4 - 2n^2$.
      $n^4 - 2n^2 - n = 0$.
      $n(n^3 - 2n - 1) = 0$.
      
      One possible solution is $n = 0$.
      If $n = 0$, then from (1), $m = 0^2 - 1 = -1$.
      Check with (2): $n = (-1)^2 - 1 = 1 - 1 = 0$. This is consistent.
      In this case, $m - n = -1 - 0 = -1$.
      
      Now, consider $n^3 - 2n - 1 = 0$.
      We can test integer roots by checking divisors of $-1$ (which are $1$ and $-1$).
      *   If $n = 1: 1^3 - 2(1) - 1 = 1 - 2 - 1 = -2 \\neq 0$.
      *   If $n = -1: (-1)^3 - 2(-1) - 1 = -1 + 2 - 1 = 0$. So $n = -1$ is a solution.
      
      If $n = -1$, then from (1), $m = (-1)^2 - 1 = 1 - 1 = 0$.
      Check with (2): $n = (0)^2 - 1 = -1$. This is consistent.
      In this case, $m - n = 0 - (-1) = 1$.
      
      Since we found two different possible values for $m - n$ (namely $-1$ and $1$), even with both statements combined, we cannot determine a unique value for $m - n$.
      
      Thus, the correct answer is E.`
  },
  5: {
    id: 'A3-q5',
    text: 'Is $|x-y|>||x|-|y||$?',
    statements: [
      '$xy<0$',
      '$x>y$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'A',
    explanation: `We want to determine if $|x-y| > ||x|-|y||$.
      This inequality is a variation of the triangle inequality.
      We know that for any real numbers $a$ and $b$, $|a+b| \\le |a| + |b|$ and $|a-b| \\ge ||a|-|b||$.
      The equality $|a-b| = ||a|-|b||$ holds if and only if $a$ and $b$ have the same sign (or one or both are zero).
      The strict inequality $|x-y| > ||x|-|y||$ holds if and only if $x$ and $y$ have opposite signs (one positive, one negative).
      
      So the question is equivalent to asking: Do $x$ and $y$ have opposite signs? (i.e., is $xy < 0$?)
      
      **Statement (1):** $xy < 0$.
      This directly tells us that $x$ and $y$ have opposite signs.
      Therefore, $|x-y| > ||x|-|y||$ is true. Statement (1) ALONE is sufficient.
      
      **Statement (2):** $x > y$.
      This statement tells us that $x$ is greater than $y$. It does not give us information about their signs.
      *   Case 1: $x=1, y=-1$. Then $xy < 0$. The inequality holds: $|1 - (-1)| = |2| = 2$. $||1|-|-1|| = |1-1| = 0$. $2 > 0$.
      *   Case 2: $x=2, y=1$. Then $xy > 0$. The inequality does NOT hold: $|2 - 1| = |1| = 1$. $||2|-|1|| = |2-1| = 1$. $1$ is not $> 1$. (Here, $|x-y| = ||x|-|y||$)
      *   Case 3: $x=-1, y=-2$. Then $xy > 0$. The inequality does NOT hold: $|-1 - (-2)| = |1| = 1$. $||-1|-|-2|| = |1-2| = |-1| = 1$. $1$ is not $> 1$.
      Since the inequality can be true or false, Statement (2) ALONE is NOT sufficient.
      
      Thus, the correct answer is A.`
  },
  6: {
    id: 'A3-q6',
    text: 'A certain worker is paid at a rate of $52.50$ per hour for the first $8$ hours of work in a day. For any hours worked in excess of $8$ hours in a day, the worker is paid at a rate of $65.00$ per hour. How many hours did the worker work yesterday?',
    statements: [
      'If the worker had worked $4$ more hours yesterday, the worker\'s total earnings for the day would have increased by $260$.',
      'The worker\'s total earnings for yesterday were $550$.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'B',
    explanation: `Let $H$ be the total number of hours the worker worked yesterday.
      The pay structure is:
      *   First $8$ hours: $52.50/\\text{hour}$
      *   Hours in excess of $8$: $65.00/\\text{hour}$
      
      We need to find $H$.
      
      **Statement (1):** If the worker had worked $4$ more hours yesterday, the worker\'s total earnings for the day would have increased by $260$.
      Let $E$ be the worker's earnings for $H$ hours.
      If the worker worked $H+4$ hours, earnings would be $E + 260$.
      The increase in earnings is $260$ for $4$ additional hours.
      So, the average rate for those $4$ additional hours is $\\frac{260}{4} = 65.00$ per hour.
      This means that all $4$ of these additional hours were paid at the overtime rate ($65.00/\\text{hour}$).
      For this to be true, the worker must have worked at least $8$ hours yesterday ($H \\ge 8$). If $H$ were less than $8$, say $H=7$, then the first additional hour would be paid at $52.50$.
      Since the rate is $65.00/\\text{hour}$ for the additional $4$ hours, $H$ must be $\\ge 8$.
      Let's consider two cases for the actual $H$ hours worked:
      *   Case 1: $H = 8$ hours. Earnings = $8 \\times 52.50 = 420$. If worked $4$ more (total $12$ hours), earnings = $8\\times 52.50 + 4\\times 65.00 = 420 + 260 = 680$. Increase = $260$. So $H=8$ is a possibility.
      *   Case 2: $H = 10$ hours. Earnings = $8 \\times 52.50 + 2 \\times 65.00 = 420 + 130 = 550$. If worked $4$ more (total $14$ hours), earnings = $8\\times 52.50 + 6\\times 65.00 = 420 + 390 = 810$. Increase = $260$. So $H=10$ is a possibility.
      Since $H$ could be $8$ or $10$ (or any $H \\ge 8$), Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** The worker's total earnings for yesterday were $550$.
      Let $H$ be the total hours.
      *   If $H \\le 8$, earnings = $H \\times 52.50$.
          $H \\times 52.50 = 550$
          $H = \\frac{550}{52.50} \\approx 10.47$ hours.
          Since $H$ must be $\\le 8$, this case is not possible.
      *   If $H > 8$, earnings = $8 \\times 52.50 + (H - 8) \\times 65.00$.
          $8 \\times 52.50 = 420$.
          So, $420 + (H - 8) \\times 65.00 = 550$
          $(H - 8) \\times 65.00 = 550 - 420$
          $(H - 8) \\times 65.00 = 130$
          $H - 8 = \\frac{130}{65.00}$
          $H - 8 = 2$
          $H = 10$ hours.
      This gives a unique value for $H$ ($10$ hours). Statement (2) ALONE is sufficient.
      
      Thus, the correct answer is B.`
  },
  7: {
    id: 'A3-q7',
    text: 'What is the sum of the remainders when each of the first $50$ positive integers is divided by $6$?',
    options: [
      { label: "A", text: "115" },
      { label: "B", text: "120" },
      { label: "C", text: "123" },
      { label: "D", text: "125" },
      { label: "E", "text": "128" }
    ],
    correctAnswer: 'C',
    explanation: `When a positive integer is divided by $6$, the possible remainders are $0, 1, 2, 3, 4, 5$.
      Let's look at the remainders for the first few integers:
      *   $1 \\div 6 = 0$ R $1$
      *   $2 \\div 6 = 0$ R $2$
      *   $3 \\div 6 = 0$ R $3$
      *   $4 \\div 6 = 0$ R $4$
      *   $5 \\div 6 = 0$ R $5$
      *   $6 \\div 6 = 1$ R $0$
      *   $7 \\div 6 = 1$ R $1$
      The pattern of remainders ($1, 2, 3, 4, 5, 0$) repeats every $6$ integers.
      The sum of one cycle of remainders is $1 + 2 + 3 + 4 + 5 + 0 = 15$.
      
      We need to find the sum of remainders for the first $50$ positive integers.
      Number of full cycles = $50 \\div 6 = 8$ with a remainder of $2$.
      
      So there are $8$ full cycles of remainders, and then $2$ additional remainders.
      Sum from $8$ full cycles = $8 \\times (\\text{sum of one cycle}) = 8 \\times 15 = 120$.
      
      The remaining $2$ integers are $49$ and $50$. Their remainders when divided by $6$ are:
      *   $49 \\div 6 = 8$ R $1$
      *   $50 \\div 6 = 8$ R $2$
      
      Sum of these last two remainders = $1 + 2 = 3$.
      
      Total sum of remainders = (Sum from full cycles) + (Sum from remaining integers)
      Total sum = $120 + 3 = 123$.
      
      Thus, the correct answer is C.`
  },
  8: {
    id: 'A3-q8',
    text: 'The value of $3^{13} \\times 33^{11}$ is closest to which of the following?',
    options: [
      { label: "A", text: '$10^{20}$' },
      { label: "B", text: '$10^{21}$' },
      { label: "C", text: '$10^{22}$' },
      { label: "D", text: '$10^{23}$' },
      { label: "E", "text": "$10^{24}$" }
    ],
    correctAnswer: 'D',
    explanation: `We need to find the value of $3^{13} \\times 33^{11}$.
      We can rewrite $33^{11}$ as $(3 \\times 11)^{11} = 3^{11} \\times 11^{11}$.
      So the expression becomes: $3^{13} \\times 3^{11} \\times 11^{11}$.
      Using the rule of exponents $a^m \\times a^n = a^{(m+n)}$:
      $3^{13} \\times 3^{11} = 3^{(13 + 11)} = 3^{24}$.
      Therefore, the expression is $3^{24} \\times 11^{11}$.
      
      Now, we need to approximate this value to the closest power of $10$.
      
      **Approximating $3^{24}$:**
      We know $3^2 = 9$, which is very close to $10^1$.
      So, $3^{24} = (3^2)^{12} = 9^{12}$.
      A rough approximation is $9^{12} \\approx 10^{12}$.
      
      **Approximating $11^{11}$:**
      Similarly, $11$ is close to $10$.
      So, $11^{11} \\approx 10^{11}$.
      
      **Multiplying the approximations:**
      $3^{24} \\times 11^{11} \\approx 10^{12} \\times 10^{11} = 10^{(12+11)} = 10^{23}$.
      
      For a more precise estimate:
      $3^{24} \\approx 2.82 \\times 10^{11}$
      $11^{11} \\approx 2.85 \\times 10^{11}$
      
      Product = $(2.82 \\times 10^{11}) \\times (2.85 \\times 10^{11}) \\approx (2.82 \\times 2.85) \\times 10^{22} \\approx 8.037 \\times 10^{22}$.
      
      Comparing $8.037 \\times 10^{22}$ to the options:
      A) $10^{20}$
      B) $10^{21}$
      C) $10^{22}$
      D) $10^{23}$
      E) $10^{24}$
      
      To determine which power of $10$ is closest, we can consider the logarithm base $10$:
      $\\log_{10}(8.037 \\times 10^{22}) = \\log_{10}(8.037) + \\log_{10}(10^{22}) \\approx 0.905 + 22 = 22.905$.
      This value, $22.905$, is much closer to $23$ than to $22$.
      
      Thus, the correct answer is D.`
  },
  9: {
    id: 'A3-q9',
    text: `If $x, y,$ and $z$ are three distinct integers, does $y$ lie between $x$ and $z$ on the number line? <br/>* $\\min(A, B)$ means the smaller value between $A$ and $B$. For example, $\\min(5, 3) = 3$.<br/>* $\\max(A, B)$ means the larger value between $A$ and $B$. For example, $\\max(5, 3) = 5$.`,
    statements: [
      '$y$ is the minimum value of the set {max(x, y), max(y, z), max(z, x)}.',
      '$y$ is the maximum value of the set {min(x, y), min(y, z), min(z, x)}.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'D',
    explanation: `We are given that $x, y,$ and $z$ are three distinct integers.
      The question asks if $y$ lies between $x$ and $z$, which means either ($x < y < z$) or ($z < y < x$).

      **Statement (1):** $y$ is the minimum value of the set $\{ \\max(x, y), \\max(y, z), \\max(z, x) \\}$.
      Let $S1 = \{ \\max(x, y), \\max(y, z), \\max(z, x) \\}$.
      If $y$ is the minimum value of this set, it means:
      $y \\le \\max(x, y)$;
      $y \\le \\max(y, z)$;
      $y \\le \\max(z, x)$;
      
      The first two inequalities are always true:
      $y \\le \\max(x, y)$ (since $y$ is one of the arguments for max);
      $y \\le \\max(y, z)$ (since $y$ is one of the arguments for max);
      
      So the crucial condition is $y \\le \\max(z, x)$.
      Since $y$ is the *minimum* value of the set, and $x, y, z$ are distinct, $y$ must be strictly less than at least one of $\\max(z,x)$.
      This means $y$ is less than or equal to both $x$ and $z$, or $y$ is less than or equal to one of them while the other is smaller than $y$.
      
      If $y$ is the smallest value among $x, y, z$, then $y < x$ and $y < z$.
      In this case, $\\max(x, y) = x$, $\\max(y, z) = z$, $\\max(z, x) = \\max(z, x)$.
      Set $S1 = \{x, z, z\}$. The minimum of this set is $\\min(x,z)$. This is a contradiction as $y$ is the smallest of all three.
      
      Consider possible orderings for $x, y, z$:
      *   Case A: $x < y < z$.
          $\\max(x, y) = y$;
          $\\max(y, z) = z$;
          $\\max(z, x) = z$;
          Set $S1 = \{y, z, z\}$. The minimum value of $S1$ is $y$.
          This matches the condition $y$ is the minimum of $S1$. In this case, $y$ lies between $x$ and $z$.
      *   Case B: $z < y < x$.
          $\\max(x, y) = x$;
          $\\max(y, z) = y$;
          $\\max(z, x) = x$;
          Set $S1 = \{x, y, x\}$. The minimum value of $S1$ is $y$.
          This also matches the condition $y$ is the minimum of S1. In this case, $y$ lies between $x$ and $z$.
      *   Case C: $y < x < z$.
          $\\max(x, y) = x$;
          $\\max(y, z) = z$;
          $\\max(z, x) = z$;
          Set $S1 = \{x, z, z\}$. The minimum value of $S1$ is $x$.
          This does NOT match $y$ being the minimum of $S1$.
      *   Case D: $x < z < y$.
          $\\max(x, y) = y$;
          $\\max(y, z) = y$;
          $\\max(z, x) = z$;
          Set $S1 = \{y, y, z\}$. The minimum value of $S1$ is $z$.
          This does NOT match $y$ being the minimum of $S1$.
      
      Based on this analysis, Statement (1) implies either ($x < y < z$) or ($z < y < x$), which means $y$ lies between $x$ and $z$.
      Statement (1) ALONE is sufficient.
      
      **Statement (2):** $y$ is the maximum value of the set $\{ \\min(x, y), \\min(y, z), \\min(z, x) \\}$.
      Let $S2 = \{ \\min(x, y), \\min(y, z), \\min(z, x) \\}$.
      If $y$ is the maximum value of this set, it means:
      $y \\ge \\min(x, y)$;
      $y \\ge \\min(y, z)$;
      $y \\ge \\min(z, x)$;
      
      The first two inequalities are always true:
      $y \\ge \\min(x, y)$ (since $y$ is one of the arguments for min);
      $y \\ge \\min(y, z)$ (since $y$ is one of the arguments for min);
      
      So the crucial condition is $y \\ge \\min(z, x)$.
      
      Consider possible orderings for $x, y, z$:
      *   Case A: $x < y < z$.
          $\\min(x, y) = x$;
          $\\min(y, z) = y$;
          $\\min(z, x) = x$;
          Set $S2 = \{x, y, x\}$. The maximum value of $S2$ is $y$.
          This matches the condition $y$ is the maximum of $S2$. In this case, $y$ lies between $x$ and $z$.
      *   Case B: $z < y < x$.
          $\\min(x, y) = y$;
          $\\min(y, z) = z$;
          $\\min(z, x) = z$;
          Set $S2 = \{y, z, z\}$. The maximum value of $S2$ is $y$.
          This also matches the condition $y$ is the maximum of $S2$. In this case, $y$ lies between $x$ and $z$.
      *   Case C: $y < x < z$.
          $\\min(x, y) = y$;
          $\\min(y, z) = y$;
          $\\min(z, x) = x$;
          Set $S2 = \{y,y,x\}$. The maximum value of $S2$ is $x$.
          This does NOT match $y$ being the maximum of $S2$.
      *   Case D: $y < z < x$.
          $\\min(x, y) = y$;
          $\\min(y, z) = y$;
          $\\min(z, x) = z$;
          Set $S2 = \{y,y,z\}$. The maximum value of S2 is $z$.
          This does NOT match $y$ being the maximum of $S2$.
      *   Case E: $x < z < y$.
          $\\min(x, y) = x$;
          $\\min(y, z) = z$;
          $\\min(z, x) = x$;
          Set $S2 = \{x,z,x\}$. The maximum value of $S2$ is $z$.
          This does NOT match $y$ being the maximum of $S2$.
      *   Case F: $z < x < y$.
          $\\min(x, y) = x$;
          $\\min(y, z) = x$;
          $\\min(z, x) = z$;
          Set $S2 = \{x,x,z\}$. The maximum value of $S2$ is $x$.
          This does NOT match $y$ being the maximum of $S2$.
      
      This confirms that Statement (2) also uniquely identifies $y$ as the middle value among $x, y,$ and $z$.
      Therefore, Statement (2) ALONE is sufficient.
      
      Since EACH statement ALONE is sufficient, the correct answer is D.`
  },
  10: {
    id: 'A3-q10',
    text: 'Let $a, b, c,$ and $d$ be distinct non-zero digits. What is the value of the product $(a+d)(b+c)$?',
    statements: [
      'The sum of the four-digit integer "$\\mathbf{abcd}$" and the four-digit integer "$\\mathbf{dcba}$" is $7,557$. (Where "$\\mathbf{abcd}$" represents the value $1,000a + 100b + 10c + d$).',
      'The sum of the four-digit integer "$\\mathbf{abcd}$" and the three-digit integer "$\\mathbf{dba}$" is $1,957$.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'D',
    explanation: `We are given that $a, b, c,$ and $d$ are distinct non-zero digits (i.e., from $1$ to $9$).
      We need to find the value of $(a+d)(b+c)$.
      
      **Statement (1):** The sum of the four-digit integer "$\\mathbf{abcd}$" and the four-digit integer "$\\mathbf{dcba}$" is $7,557$.
      $(1000a + 100b + 10c + d) + (1000d + 100c + 10b + a) = 7557$
      Group like terms:
      $1001a + 110b + 110c + 1001d = 7557$
      $1001(a + d) + 110(b + c) = 7557$
      
      We know $a, b, c, d$ are distinct non-zero digits (1-9).
      Maximum value for $(a+d)$: $9+8 = 17$
      Minimum value for $(a+d)$: $1+2 = 3$
      Maximum value for $(b+c)$: $9+8 = 17$ (but distinct from $a,d$)
      Minimum value for $(b+c)$: $1+2 = 3$ (but distinct from $a,d$)
      
      Let $A = a+d$ and $B = b+c$.
      $1001A + 110B = 7557$
      
      Let's test values for $A$.
      If $A = 7$: $1001(7) + 110B = 7557 \\Rightarrow 7007 + 110B = 7557 \\Rightarrow 110B = 550 \\Rightarrow B = 5$.
      If $A = 7$ and $B = 5$:
      $a+d = 7$. Possible distinct non-zero pairs: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$.
      $b+c = 5$. Possible distinct non-zero pairs: $(1,4), (2,3), (3,2), (4,1)$.
      
      We need $a, b, c, d$ to be distinct.
      Example: If $a=1, d=6$ (so $A=7$). If $b=2, c=3$ (so $B=5$). All digits $(1,6,2,3)$ are distinct. This solution works.
      Then $(a+d)(b+c) = 7 \\times 5 = 35$.
      
      Could there be other values for $A$ and $B$?
      Try $A = 6$: $1001(6) + 110B = 7557 \\Rightarrow 6006 + 110B = 7557 \\Rightarrow 110B = 1551$. $1551/110$ is not an integer. So $A$ is not $6$.
      Try $A = 8$: $1001(8) + 110B = 7557 \\Rightarrow 8008 + 110B = 7557$. $110B$ is negative, not possible.
      
      So, $A=7$ and $B=5$ is the only integer solution for $A$ and $B$ that satisfies the equation and digit constraints.
      Therefore, $(a+d)(b+c) = A \\times B = 7 \\times 5 = 35$. Statement (1) ALONE is sufficient.
      
      **Statement (2):** The sum of the four-digit integer "$\\mathbf{abcd}$" and the three-digit integer "$\\mathbf{dba}$" is $1,957$.
      $(1000a + 100b + 10c + d) + (100d + 10b + a) = 1957$
      Group like terms:
      $1001a + 110b + 10c + 101d = 1957$
      
      Again, $a, b, c, d$ are distinct non-zero digits (1-9).
      We need to find values for $a, b, c, d$ that satisfy this.
      Since "dba" is a three-digit integer, $d$ cannot be $0$, which is already given.
      
      Consider the units digit: $d + a$.
      From $1001a + 110b + 10c + 101d = 1957$, let's look at the last digit:
      The units digit of $1001a$ is $a$.
      The units digit of $110b$ is $0$.
      The units digit of $10c$ is $0$.
      The units digit of $101d$ is $d$.
      So the units digit of the sum is $(a+d) \\pmod{10} = 7$.
      Possible pairs for $(a,d)$ with distinct non-zero digits summing to $7$ or $17$:
      *   $a+d = 7$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$
      *   $a+d = 17$: $(8,9), (9,8)$
      
      Now consider the thousands place for $1957$. Since it's a four-digit number + a three-digit number, '$a$' must be small.
      If $a = 1$, then the sum is approx $1000 + 100b + 10c + 101d$.
      From $1001a + 110b + 10c + 101d = 1957$
      If $a=1$: $1001(1) + 110b + 10c + 101d = 1957$
      $1001 + 110b + 10c + 101d = 1957$
      $110b + 10c + 101d = 956$
      
      Now, check $d$ based on $a+d=7$ or $a+d=17$. Since $a=1$, $d$ must be $6$ (from $a+d=7$).
      Substitute $d=6$:
      $110b + 10c + 101(6) = 956$
      $110b + 10c + 606 = 956$
      $110b + 10c = 350$
      Divide by $10$: $11b + c = 35$
      
      We need distinct non-zero digits for $b$ and $c$, also distinct from $a=1$ and $d=6$.
      *   If $b=1, c=24$ (not a digit)
      *   If $b=2, 22+c=35 \\Rightarrow c=13$ (not a digit)
      *   If $b=3, 33+c=35 \\Rightarrow c=2$.
          Here, $(a,b,c,d) = (1,3,2,6)$. All are distinct non-zero digits.
          $a+d = 1+6 = 7$
          $b+c = 3+2 = 5$
          Product $(a+d)(b+c) = 7 \\times 5 = 35$.
      
      This solution $(1,3,2,6)$ works and gives $(a+d)(b+c) = 35$.
      Could there be other solutions for $(a,b,c,d)$?
      What if $a=2$? Then $1001(2) = 2002$, which is already $> 1957$. So '$a$' must be $1$.
      This means $(a,b,c,d) = (1,3,2,6)$ is the unique set of digits.
      Therefore, $(a+d)(b+c) = 35$. Statement (2) ALONE is sufficient.
      
      Since EACH statement ALONE is sufficient, the correct answer is D.`
  },
  11: {
    id: 'A3-q11',
    text: 'At least $100$ students at a certain high school study Japanese. If $4\\%$ of the students at the school who study French also study Japanese, do more students at the school study French than Japanese?',
    statements: [
      '$16$ students at the school who study both French and Japanese',
      '$10\\%$ of the students at the school who study Japanese also study French.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'B',
    explanation: `Let $J$ be the number of students who study Japanese.
          Let $F$ be the number of students who study French.
          Let $J \\cap F$ be the number of students who study both French and Japanese.
          
          Given:
          *   $J \\ge 100$
          *   $4\\%$ of students who study French also study Japanese. This means $J \\cap F = 0.04 \\times F$.
              This implies $F = J \\cap F / 0.04 = 25 \\times J \\cap F$.
          
          We need to determine if $F > J$.
          
          **Statement (1):** $16$ students at the school who study both French and Japanese.
          So, $J \\cap F = 16$.
          Using the given information: $F = 25 \\times (J \\cap F) = 25 \\times 16 = 400$.
          Now we have $F = 400$.
          We are also given $J \\ge 100$.
          
          Is $F > J$?
          *   If $J = 100$, then $F = 400$. $400 > 100$. (Yes)
          *   If $J = 300$, then $F = 400$. $400 > 300$. (Yes)
          *   If $J = 500$ (this is possible, as long as $16$ of them also study French), then $F = 400$. $400$ is not $> 500$. (No)
          Since $J$ could be greater than $F$, Statement (1) ALONE is NOT sufficient.
          
          **Statement (2):** $10\\%$ of the students at the school who study Japanese also study French.
          This means $J \\cap F = 0.10 \\times J$.
          
          From the initial given information, we also know $J \\cap F = 0.04 \\times F$.
          So, we can set these two expressions for $J \\cap F$ equal:
          $0.10 \\times J = 0.04 \\times F$
          Divide by $0.04$:
          $F = (0.10 / 0.04) \\times J$
          $F = (10 / 4) \\times J$
          $F = 2.5 \\times J$.
          
          Since $J$ is a number of students ($J > 0$), and $F = 2.5 \\times J$, it is clear that $F$ will always be greater than $J$.
          (e.g., if $J=100, F=250$. $250 > 100$. Always true.)
          Statement (2) ALONE is sufficient.
          
          Thus, the correct answer is B.`
  },
  12: {
    id: 'A3-q12',
    text: 'Is $a > c$?',
    statements: [
      '$b > d$',
      '$ab^2 - b > b^2c - d$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `We need to determine if $a > c$. Assume $a, b, c, d$ are real numbers.
      
      **Statement (1):** $b > d$.
      This tells us about $b$ and $d$, but gives no information about $a$ and $c$.
      For example:
      *   If $b=2, d=1$. We don't know $a$ and $c$. If $a=3, c=1$ ($a>c$). If $a=1, c=3$ ($a<c$).
      Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** $ab^2 - b > b^2c - d$.
      Rearrange the inequality:
      $ab^2 - b^2c > b - d$
      $b^2(a - c) > b - d$
      
      This statement involves $a, c, b,$ and $d$. We need to evaluate $(a-c)$ to determine if $a > c$.
      $(a - c) > \\frac{b - d}{b^2}$.
      
      We still don't know the signs or specific values of $b$ and $d$, or $b^2$.
      *   If $b=1$ ($b^2=1$). Then $(a-c) > (1-d)/1 = 1-d$. If $d=0, a-c > 1$. ($a>c$). If $d=2, a-c > -1$. ($a$ can be $>c$ or $<c$, e.g., if $a=0, c=0$, $a=0,c=1$).
      Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      From Statement (1), we have $b > d$. This means $(b - d) > 0$.
      From Statement (2), we have $b^2(a - c) > b - d$.
      
      Since $b > d$, $(b - d)$ is positive.
      Also, $b^2$ is always positive (since we generally assume $b$ is non-zero in such problems unless specified, and $b=0$ would make the initial inequality undefined. If $b$ were allowed to be $0$, then $0 > 0$ which is false).
      Assuming $b$ is not $0$, $b^2 > 0$.
      
      So we have (positive number) $\\times (a - c)$ > (positive number).
      This implies that $(a - c)$ must be positive.
      $(a - c) > 0$.
      $a > c$.
      
      Therefore, by combining both statements, we can definitively conclude that $a > c$.
      BOTH statements TOGETHER are sufficient.
      
      Thus, the correct answer is C.`
  },
};