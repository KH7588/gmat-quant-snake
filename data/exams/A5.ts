import { Question, Option } from '../../types.ts';
import { DS_OPTIONS } from '../questions';

// Standard Numerical Options 0-4
const PS_NUM_0_4_OPTIONS: Option[] = [
  { label: "A", text: "0" },
  { label: "B", text: "1" },
  { label: "C", text: "2" },
  { label: "D", text: "3" },
  { label: "E", text: "4" }
];

// Standard Numerical Options 1-5
const PS_NUM_1_5_OPTIONS: Option[] = [
  { label: "A", text: "1" },
  { label: "B", text: "2" },
  { label: "C", text: "3" },
  { label: "D", text: "4" },
  { label: "E", text: "5" }
];

export const EXAM_A5_QUESTIONS: Record<number, Question> = {
  1: {
    id: 'A5-q1',
    text: 'If $d_1, d_2, d_3, d_4$ are distinct digits, is the sum of the decimals $0.d_1d_2$ and $0.d_3d_4$ greater than $1$?',
    statements: [
      'The least of these four digits is $4$.',
      '$(0.d_1d_2) \\times (0.d_3d_4) > \\frac{1}{2}$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'D',
    explanation: `We want to determine if $(0.d_1d_2) + (0.d_3d_4) > 1$.

**Statement (1):** The least of these four digits is $4$.
Since $d_1, d_2, d_3, d_4$ are distinct, the smallest possible set of digits is $\{4, 5, 6, 7\}$.
To minimize the sum, we should put the smallest digits in the tenths place.
Minimum sum = $0.46 + 0.57 = 1.03$ (or $0.47+0.56 = 1.03$).
Since the minimum sum is $1.03$, which is greater than $1$, the sum is always greater than $1$.
Statement (1) ALONE is sufficient.

**Statement (2):** $(0.d_1d_2) \\times (0.d_3d_4) > \\frac{1}{2}$.
Let $x = 0.d_1d_2$ and $y = 0.d_3d_4$. We are given $xy > 0.5$.
We want to know if $x+y > 1$.
Using the AM-GM inequality (Arithmetic Mean - Geometric Mean): $\\frac{x+y}{2} \\ge \\sqrt{xy}$.
So, $x+y \\ge 2\\sqrt{xy}$.
Since $xy > 0.5$, $\\sqrt{xy} > \\sqrt{0.5} \\approx 0.707$.
Then $x+y > 2(0.707) = 1.414$.
Since $x+y$ is strictly greater than $1.414$, it is definitely greater than $1$.
Statement (2) ALONE is sufficient.

Thus, the correct answer is D.`
  },
  2: {
    id: 'A5-q2',
    text: 'If $n$ is a positive integer, what is the remainder when $3^{8n+3}+2$ is divided by $5$?',
    options: PS_NUM_0_4_OPTIONS,
    correctAnswer: 'E',
    explanation: `We need to find the remainder of $(3^{8n+3} + 2)$ divided by $5$.
Let's analyze powers of $3 \\pmod 5$:
$3^1 = 3 \\equiv 3 \\pmod 5$
$3^2 = 9 \\equiv 4 \\pmod 5$
$3^3 = 27 \\equiv 2 \\pmod 5$
$3^4 = 81 \\equiv 1 \\pmod 5$
The pattern repeats every $4$ powers: $3, 4, 2, 1$.

The exponent is $8n + 3$.
$8n$ is a multiple of $4$, so $3^{8n} = (3^4)^{2n} \\equiv 1^{2n} \\equiv 1 \\pmod 5$.
Therefore, $3^{8n+3} = 3^{8n} \\times 3^3 \\equiv 1 \\times 3^3 \\pmod 5$.
We know $3^3 = 27 \\equiv 2 \\pmod 5$.
So, $3^{8n+3} \\equiv 2 \\pmod 5$.

The full expression is $3^{8n+3} + 2$.
Remainder $\\equiv 2 + 2 \\equiv 4 \\pmod 5$.

The correct answer is E (4).`
  },
  3: {
    id: 'A5-q3',
    text: 'If $n$ is a positive integer and $x = \\frac{(2n-1)!}{n!(n-1)!}$, is $x$ odd?',
    statements: [
      '$n \\in \\{3, 4, 8\\}$ ($n$ is one of $3, 4,$ or $8$)',
      '$n \\in \\{4, 5, 8\\}$ ($n$ is one of $4, 5,$ or $8$)'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `Let's calculate $x$ for specific values of $n$.
$x = \\frac{(2n-1)!}{n!(n-1)!} = \\frac{1}{2} \\times \\frac{(2n)!}{n!n!} = \\frac{1}{2} \\binom{2n}{n} = \\binom{2n-1}{n}$.

If $n=3$: $x = \\binom{5}{3} = 10$ (Even)
If $n=4$: $x = \\binom{7}{4} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ (Odd)
If $n=5$: $x = \\binom{9}{5} = \\frac{9 \\times 8 \\times 7 \\times 6}{4 \\times 3 \\times 2 \\times 1} = 126$ (Even)
If $n=8$: $x = \\binom{15}{8} = 6435$ (Odd)

**Statement (1):** $n$ could be $3, 4,$ or $8$.
If $n=3$, $x$ is even.
If $n=4$, $x$ is odd.
Not sufficient.

**Statement (2):** $n$ could be $4, 5,$ or $8$.
If $n=5$, $x$ is even.
If $n=4$, $x$ is odd.
Not sufficient.

**Combining (1) and (2):**
$n$ must be in both sets. The common values are $n=4$ and $n=8$.
If $n=4$, $x=35$ (Odd).
If $n=8$, $x=6435$ (Odd).
In both possible cases, $x$ is odd.
Sufficient.

Thus, the correct answer is C.`
  },
  4: {
    id: 'A5-q4',
    text: 'If $x$ is a nonnegative integer, and $f(x)=x+ \\sqrt{x}$. Given $z=y^2$, is $f(z)=y^2+y$?',
    statements: [
      '$y>0$',
      '$z>0$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'A',
    explanation: `We are given $f(x) = x + \\sqrt{x}$ and $z = y^2$.
We need to check if $f(z) = y^2 + y$.
Substitute $z$ into the function:
$f(z) = f(y^2) = y^2 + \\sqrt{y^2}$.
Recall that $\\sqrt{y^2} = |y|$.
So, $f(z) = y^2 + |y|$.
The question asks: Is $y^2 + |y| = y^2 + y$?
This simplifies to: Is $|y| = y$?
This is true if and only if $y \\ge 0$.

**Statement (1):** $y > 0$.
If $y$ is positive, then $|y| = y$.
The equation holds.
Sufficient.

**Statement (2):** $z > 0$.
Since $z = y^2$, $y^2 > 0$ implies $y \\neq 0$.
However, $y$ could be negative.
Example: If $y = -2$, then $z = 4 > 0$.
$f(z) = f(4) = 4 + \\sqrt{4} = 6$.
$y^2 + y = (-2)^2 + (-2) = 4 - 2 = 2$.
$6 \\neq 2$. (Here $|y| \\neq y$).
Statement (2) ALONE is NOT sufficient.

Thus, the correct answer is A.`
  },
  5: {
    id: 'A5-q5',
    text: 'What are the values of $x$ and $y$?',
    statements: [
      '$(x-2)^2+(y-1)=0$',
      '$(x-2)^2+|y-1|=0$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'B',
    explanation: `**Statement (1):** $(x-2)^2 + (y-1) = 0$.
$(x-2)^2 = -(y-1) = 1-y$.
Since a square must be non-negative, $(x-2)^2 \\ge 0$, which implies $1-y \\ge 0$ or $y \\le 1$.
However, there are infinite solutions.
Ex: $x=2, y=1$.
Ex: $x=3, (3-2)^2 + (y-1) = 1 + y - 1 = y = 0 \\Rightarrow y=0$. ($x=3, y=0$).
Not sufficient.

**Statement (2):** $(x-2)^2 + |y-1| = 0$.
Since $(x-2)^2 \\ge 0$ and $|y-1| \\ge 0$, the sum of two non-negative numbers can be zero ONLY if both numbers are zero.
Therefore:
$(x-2)^2 = 0 \\Rightarrow x = 2$.
$|y-1| = 0 \\Rightarrow y = 1$.
We have unique values for $x$ and $y$.
Sufficient.

Thus, the correct answer is B.`
  },
  6: {
    id: 'A5-q6',
    text: 'For a sequence $S$, the $n$th term is defined by $\\frac{1}{s_n} = 2 \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right)$. What is the value of $\\frac{1}{s_1} + \\frac{1}{s_2} + \\frac{1}{s_3} + \\dots + \\frac{1}{s_{99}}$?',
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "1.5" },
      { label: "C", text: "$\\frac{99}{50}$" },
      { label: "D", text: "2" },
      { label: "E", text: "$\\frac{101}{50}$" }
    ],
    correctAnswer: 'C',
    explanation: `We want to calculate the sum $\\sum_{n=1}^{99} \\frac{1}{s_n}$.
Substitute the given formula for $\\frac{1}{s_n}$:
Sum $= \\sum_{n=1}^{99} 2 \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right)$.
Factor out the constant $2$:
Sum $= 2 \\sum_{n=1}^{99} \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right)$.

This is a telescoping sum:
$n=1: (\\frac{1}{1} - \\frac{1}{2})$
$n=2: (\\frac{1}{2} - \\frac{1}{3})$
$n=3: (\\frac{1}{3} - \\frac{1}{4})$
...
$n=99: (\\frac{1}{99} - \\frac{1}{100})$

When we sum these up, the intermediate terms cancel out:
Sum $= 2 \\left[ (1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\dots + (\\frac{1}{99} - \\frac{1}{100}) \\right]$
Sum $= 2 \\left( 1 - \\frac{1}{100} \\right)$
Sum $= 2 \\left( \\frac{99}{100} \\right)$
Sum $= \\frac{99}{50}$ (or $1.98$).

Thus, the correct answer is C.`
  },
  7: {
    id: 'A5-q7',
    text: 'If $n \\neq 0$, $n \\neq -1$, and $\\frac{1}{n+1} > \\frac{1}{n}$, which of the following must be true?',
    options: [
      { label: "A", text: "$-2 < n < -1$" },
      { label: "B", text: "$-1 < n < 0$" },
      { label: "C", text: "$0 < n < 1$" },
      { label: "D", text: "$1 < n < 2$" },
      { label: "E", text: "$n > 2$" }
    ],
    correctAnswer: 'B',
    explanation: `We are given $\\frac{1}{n+1} > \\frac{1}{n}$.
Subtract $\\frac{1}{n}$ from both sides:
$\\frac{1}{n+1} - \\frac{1}{n} > 0$
Combine fractions:
$\\frac{n - (n+1)}{n(n+1)} > 0$
$\\frac{-1}{n(n+1)} > 0$

For a fraction with a negative numerator ($-1$) to be positive, the denominator must also be negative.
So, $n(n+1) < 0$.

The quadratic expression $n(n+1)$ represents a parabola opening upwards with roots at $n=0$ and $n=-1$.
It is negative strictly between the roots.
Therefore, $-1 < n < 0$.

Thus, the correct answer is B.`
  },
  8: {
    id: 'A5-q8',
    text: 'How many distinct real solutions does the equation $(x-5)^2(x+5)^2=(x+5)^2$ have?',
    options: PS_NUM_1_5_OPTIONS,
    correctAnswer: 'C',
    explanation: `Given: $(x-5)^2(x+5)^2 = (x+5)^2$.
Move all terms to one side:
$(x-5)^2(x+5)^2 - (x+5)^2 = 0$.
Factor out $(x+5)^2$:
$(x+5)^2 [ (x-5)^2 - 1 ] = 0$.

This gives two cases:
Case 1: $(x+5)^2 = 0$
$x + 5 = 0 \\Rightarrow x = -5$. (1 solution)

Case 2: $(x-5)^2 - 1 = 0$
$(x-5)^2 = 1$
Take the square root of both sides:
$x - 5 = 1$  or  $x - 5 = -1$.
$x = 6$ or $x = 4$. (2 solutions)

Total distinct real solutions: $\\{-5, 4, 6\\}$.
There are 3 solutions.

Thus, the correct answer is C.`
  },
  9: {
    id: 'A5-q9',
    text: 'Two distinct numbers, $p$ and $q$, are selected from the set $\\{3, 4, 5, 8, 9\\}$ to form an ordered pair $(p, q)$. If $p=a-b$ and $q=a+b$ for some positive integers $a$ and $b$, how many such ordered pairs are possible?',
    options: PS_NUM_1_5_OPTIONS,
    correctAnswer: 'D',
    explanation: `We have $p = a-b$ and $q = a+b$.
Adding the equations: $p+q = 2a$.
Subtracting the equations: $q-p = 2b$.

Since $a$ and $b$ are positive integers:
1. $p+q$ must be an even number (divisible by 2). This means $p$ and $q$ must have the same parity (both even or both odd).
2. $q-p$ must be a positive even number (since $b>0$). This implies $q > p$.

Set $S = \\{3, 4, 5, 8, 9\\}$.
Evens in $S$: $\\{4, 8\\}$.
Odds in $S$: $\\{3, 5, 9\\}$.

Case 1: Both even.
Pairs $(p, q)$ from $\\{4, 8\\}$ with $q > p$:
$(4, 8)$. Check: $a=(4+8)/2=6, b=(8-4)/2=2$. Valid. (1 pair)

Case 2: Both odd.
Pairs $(p, q)$ from $\\{3, 5, 9\\}$ with $q > p$:
$(3, 5)$. Check: $a=4, b=1$. Valid.
$(3, 9)$. Check: $a=6, b=3$. Valid.
$(5, 9)$. Check: $a=7, b=2$. Valid.
(3 pairs)

Total possible ordered pairs = $1 + 3 = 4$.

Thus, the correct answer is D.`
  },
  10: {
    id: 'A5-q10',
    text: 'Mixture 1 contains only peanuts and cashews, such that $\\frac{3}{4}$ of the nuts are peanuts. Mixture 2 contains exactly $8$ fewer peanuts than Mixture 1 and the same number of cashews as Mixture 1. If peanuts constitute $\\frac{7}{10}$ of the total nuts in Mixture 2, what is the total number of nuts in Mixture 1?',
    options: [
      { label: "A", text: "40" },
      { label: "B", text: "44" },
      { label: "C", text: "48" },
      { label: "D", text: "52" },
      { label: "E", text: "56" }
    ],
    correctAnswer: 'C',
    explanation: `Let $T_1$ be the total nuts in Mixture 1.
Peanuts in M1 ($P_1$) = $\\frac{3}{4} T_1$.
Cashews in M1 ($C_1$) = $\\frac{1}{4} T_1$.

For Mixture 2:
Peanuts ($P_2$) = $P_1 - 8 = \\frac{3}{4} T_1 - 8$.
Cashews ($C_2$) = $C_1 = \\frac{1}{4} T_1$.
Total nuts in M2 ($T_2$) = $P_2 + C_2 = (P_1 - 8) + C_1 = T_1 - 8$.

We are given that peanuts constitute $\\frac{7}{10}$ of Mixture 2.
$\\frac{P_2}{T_2} = \\frac{7}{10}$.
$\\frac{\\frac{3}{4} T_1 - 8}{T_1 - 8} = \\frac{7}{10}$.

Cross multiply:
$10(\\frac{3}{4} T_1 - 8) = 7(T_1 - 8)$.
$7.5 T_1 - 80 = 7 T_1 - 56$.
$0.5 T_1 = 24$.
$T_1 = 48$.

The total number of nuts in Mixture 1 is $48$.

Thus, the correct answer is C.`
  },
  11: {
    id: 'A5-q11',
    text: 'If $|2x+7|<9$, what is the value of $x$?',
    statements: [
      '$x$ is an integer',
      '$x$ is a nonnegative number'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `First, solve the inequality $|2x+7|<9$.
$-9 < 2x+7 < 9$.
Subtract 7 from all parts:
$-16 < 2x < 2$.
Divide by 2:
$-8 < x < 1$.

**Statement (1):** $x$ is an integer.
Possible integer values in $(-8, 1)$ are $\\{-7, -6, -5, -4, -3, -2, -1, 0\\}$.
Not sufficient.

**Statement (2):** $x$ is nonnegative ($x \\ge 0$).
Possible real values are $0 \\le x < 1$.
Not sufficient.

**Combining (1) and (2):**
$x$ must be an integer AND $x \\ge 0$.
From the set of integers $\\{-7, \\dots, 0\\}$, the only nonnegative value is $0$.
So $x=0$.
Unique solution found.
Sufficient.

Thus, the correct answer is C.`
  },
  12: {
    id: 'A5-q12',
    text: 'A restaurant pays a seafood distributor $d$ dollars for $6$ pounds of Maine lobster. Each pound can make $v$ vats of lobster bisque, and each vat makes $b$ bowls of lobster bisque. If the cost of the lobster per bowl is an integer, and if $v$ and $b$ are different prime integers, then which of the following is the smallest possible value of $d$?',
    options: [
      { label: "A", text: "15" },
      { label: "B", text: "24" },
      { label: "C", text: "36" },
      { label: "D", text: "54" },
      { label: "E", text: "90" }
    ],
    correctAnswer: 'C',
    explanation: `Total pounds = 6.
Total vats = $6 \\times v$.
Total bowls = $6 \\times v \\times b$.
Total cost = $d$.
Cost per bowl = $\\frac{d}{6vb}$.

We are given that the cost per bowl is an integer.
So $d$ must be divisible by $6vb$.
$d = k \\cdot 6vb$ for some integer $k$.
This implies $d$ must be a multiple of $6$, $v$, and $b$.
We are given $v$ and $b$ are different prime integers.

Let's test the options to see which could be $d$:
A) 15: Not divisible by 6.
B) 24: $24/6 = 4$. So $vb$ must divide 4. Since $v, b$ are distinct primes, their product must be at least $2 \\times 3 = 6$. 4 is not divisible by 6. Impossible.
C) 36: $36/6 = 6$. So $vb$ must divide 6. Since $v, b$ are distinct primes, $v=2, b=3$ works ($2 \\times 3 = 6$). This is possible.
D) 54: $54/6 = 9$. $vb$ must divide 9. Factors of 9 are 1, 3, 9. Can we find distinct primes? No, only prime factor is 3. Impossible.
E) 90: $90/6 = 15$. $vb$ divides 15. $v=3, b=5$ works. Possible.

The question asks for the **smallest** possible value.
Between 36 and 90, 36 is smaller.

Thus, the correct answer is C.`
  }
};