import { Question, Option } from '../../types.ts';
import { DS_OPTIONS } from '../questions';

// Specific options for A4-Q2
const PS_NUMERICAL_OPTIONS_A4_Q2: Option[] = [
  { label: "A", text: "6" },
  { label: "B", text: "9" },
  { label: "C", text: "12" },
  { label: "D", text: "15" },
  { label: "E", text: "18" }
];

// Specific options for A4-Q3
const PS_NUMERICAL_OPTIONS_A4_Q3: Option[] = [
  { label: "A", text: "2" },
  { label: "B", text: "4" },
  { label: "C", text: "8" },
  { label: "D", text: "16" },
  { label: "E", text: "32" }
];

// Specific options for A4-Q4
const PS_FRACTION_OPTIONS_A4_Q4: Option[] = [
  { label: "A", text: "$\\frac{1}{6}$" },
  { label: "B", text: "$\\frac{1}{4}$" },
  { label: "C", text: "$\\frac{5}{18}$" },
  { label: "D", text: "$\\frac{1}{3}$" },
  { label: "E", text: "$\\frac{7}{18}$" }
];

// Specific options for A4-Q6
const PS_ALGEBRA_OPTIONS_A4_Q6: Option[] = [
  { label: "A", text: "$x$" },
  { label: "B", text: "$x+1$" },
  { label: "C", text: "$2x+1$" },
  { label: "D", text: "$3x+1$" },
  { label: "E", text: "$2x+2$" }
];

// Specific options for A4-Q8
const PS_NUMERICAL_OPTIONS_A4_Q8: Option[] = [
  { label: "A", text: "0" },
  { label: "B", text: "1" },
  { label: "C", text: "2" },
  { label: "D", text: "3" },
  { label: "E", text: "4" }
];

// Specific options for A4-Q12
const PS_NUMERICAL_OPTIONS_A4_Q12: Option[] = [
  { label: "A", text: "1" },
  { label: "B", text: "3" },
  { label: "C", text: "4" },
  { label: "D", text: "6" },
  { label: "E", text: "8" }
];


export const EXAM_A4_QUESTIONS: Record<number, Question> = {
  1: {
    id: 'A4-q1',
    text: 'If $n$ and $r$ are positive integers such that $n$ is divisible by $10^r$ but is not divisible by $10^{r+1}$, what is the value of $r$?',
    statements: [
      '$n$ is divisible by $2^5$ but is not divisible by $2^6$.',
      '$n$ is divisible by $5^6$ but is not divisible by $5^7$.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `The question asks for the number of trailing zeros in the integer $n$. The number of trailing zeros is determined by the highest power of $10$ that divides $n$. Since $10 = 2 \\times 5$, the number of trailing zeros, $r$, is the minimum of the powers of $2$ and $5$ in the prime factorization of $n$.
    So, $r = \\min(\\text{power of 2 in } n, \\text{power of 5 in } n)$.

    **Statement (1):** $n$ is divisible by $2^5$ but is not divisible by $2^6$.
    This tells us that the highest power of $2$ in the prime factorization of $n$ is exactly $5$.
    So, $r = \\min(5, \\text{power of 5 in } n)$.
    We don't know the power of $5$. For example, if the power of $5$ is $3$, then $r = \\min(5, 3) = 3$. If the power of $5$ is $7$, then $r = \\min(5, 7) = 5$.
    Since $r$ could be different values, Statement (1) ALONE is NOT sufficient.

    **Statement (2):** $n$ is divisible by $5^6$ but is not divisible by $5^7$.
    This tells us that the highest power of $5$ in the prime factorization of $n$ is exactly $6$.
    So, $r = \\min(\\text{power of 2 in } n, 6)$.
    We don't know the power of $2$. For example, if the power of $2$ is $4$, then $r = \\min(4, 6) = 4$. If the power of $2$ is $8$, then $r = \\min(8, 6) = 6$.
    Since $r$ could be different values, Statement (2) ALONE is NOT sufficient.

    **Combining Statement (1) and Statement (2):**
    From Statement (1), the power of $2$ in the prime factorization of $n$ is exactly $5$.
    From Statement (2), the power of $5$ in the prime factorization of $n$ is exactly $6$.
    Therefore, $r = \\min(5, 6) = 5$.
    The value of $r$ is uniquely determined as $5$.
    BOTH statements TOGETHER are sufficient.

    Thus, the correct answer is C.`
  },
  2: {
    id: 'A4-q2',
    text: 'A certain machine performs an operation that rearranges the order of the letters in the input string "ABCDEFG" according to a fixed rule, resulting in the output string "DABCGEF". If the machine repeatedly performs this same operation on the output of the previous operation, starting with the initial input "ABCDEFG", what is the minimum number of operations required until the output string is "ABCDEFG" again?',
    options: PS_NUMERICAL_OPTIONS_A4_Q2,
    correctAnswer: 'C',
    explanation: `Let's analyze the permutation performed by the machine. We can track the position of each letter:
      Initial String: A B C D E F G
      Positions:      1 2 3 4 5 6 7
      
      Output String:  D A B C G E F
      
      By comparing the initial and output strings, we can see where each letter moves:
      *   A (from position 1) moves to position 2.
      *   B (from position 2) moves to position 3.
      *   C (from position 3) moves to position 4.
      *   D (from position 4) moves to position 1.
      *   E (from position 5) moves to position 7.
      *   F (from position 6) moves to position 5.
      *   G (from position 7) moves to position 6.
      
      We can represent this as a permutation of positions:
      $1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 4 \\rightarrow 1$ (Cycle 1: $(1 \\ 2 \\ 3 \\ 4)$)
      $5 \\rightarrow 7 \\rightarrow 6 \\rightarrow 5$ (Cycle 2: $(5 \\ 7 \\ 6)$)
      
      The length of Cycle 1 is $4$ operations.
      The length of Cycle 2 is $3$ operations.
      
      For the original string "ABCDEFG" to reappear, all letters must return to their initial positions simultaneously. This will happen after a number of operations equal to the least common multiple (LCM) of the lengths of all disjoint cycles in the permutation.
      
      Minimum number of operations = $\\text{LCM}(\\text{Length of Cycle 1, Length of Cycle 2})$
      Minimum number of operations = $\\text{LCM}(4, 3) = 12$.
      
      Thus, $12$ operations are required until the output string is "ABCDEFG" again.
      
      The correct answer is C.`
  },
  3: {
    id: 'A4-q3',
    text: 'If $a=x+\\frac{1}{x}$, $b=x-\\frac{1}{x}$, then $\\frac{2^{a^2}}{2^{b^2}}=?$',
    options: PS_NUMERICAL_OPTIONS_A4_Q3,
    correctAnswer: 'D',
    explanation: `Given:
      $a = x + \\frac{1}{x}$
      $b = x - \\frac{1}{x}$
      
      We need to evaluate $\\frac{2^{a^2}}{2^{b^2}}$.
      Using the exponent rule $\\frac{P^M}{P^N} = P^{M-N}$, the expression simplifies to $2^{(a^2 - b^2)}$.
      
      First, let's calculate $a^2$:
      $a^2 = \\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2(x)\\left(\\frac{1}{x}\\right) + \\left(\\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2}$.
      
      Next, let's calculate $b^2$:
      $b^2 = \\left(x - \\frac{1}{x}\\right)^2 = x^2 - 2(x)\\left(\\frac{1}{x}\\right) + \\left(\\frac{1}{x}\\right)^2 = x^2 - 2 + \\frac{1}{x^2}$.
      
      Now, let's find the difference $a^2 - b^2$:
      $a^2 - b^2 = \\left(x^2 + 2 + \\frac{1}{x^2}\\right) - \\left(x^2 - 2 + \\frac{1}{x^2}\\right)$.
      $a^2 - b^2 = x^2 + 2 + \\frac{1}{x^2} - x^2 + 2 - \\frac{1}{x^2}$.
      $a^2 - b^2 = 2 + 2 = 4$.
      
      Finally, substitute this back into the expression:
      $\\frac{2^{a^2}}{2^{b^2}} = 2^{(a^2 - b^2)} = 2^4$.
      
      $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$.
      
      Thus, the correct answer is D.`
  },
  4: {
    id: 'A4-q4',
    text: 'There are three boxes, A, B, and C, containing keys. Box A contains $2$ keys, exactly one of which will unlock a certain car door. Box B contains $3$ keys, exactly one of which will unlock the car door. Box C contains $2$ keys, neither of which will unlock the car door. If one of the three boxes is selected at random, and then one key is selected at random from that box, what is the probability that the selected key will unlock the car door?',
    options: PS_FRACTION_OPTIONS_A4_Q4,
    correctAnswer: 'C',
    explanation: `We want to find the total probability that the selected key will unlock the car door. This can be broken down into three mutually exclusive events:
      1.  Selecting Box A AND picking an unlocking key from A.
      2.  Selecting Box B AND picking an unlocking key from B.
      3.  Selecting Box C AND picking an unlocking key from C.
      
      **Step 1: Calculate the probability of selecting each box.**
      Since one of the three boxes is selected at random, the probability of selecting any specific box is $\\frac{1}{3}$.
      $P(\\text{Box A}) = \\frac{1}{3}$
      $P(\\text{Box B}) = \\frac{1}{3}$
      $P(\\text{Box C}) = \\frac{1}{3}$
      
      **Step 2: Calculate the probability of picking an unlocking key from each box, given the box is selected.**
      *   **Box A:** Contains $2$ keys, $1$ of which unlocks the car door.
          $P(\\text{Unlock | Box A}) = \\frac{1}{2}$
      *   **Box B:** Contains $3$ keys, $1$ of which unlocks the car door.
          $P(\\text{Unlock | Box B}) = \\frac{1}{3}$
      *   **Box C:** Contains $2$ keys, $0$ of which unlock the car door.
          $P(\\text{Unlock | Box C}) = \\frac{0}{2} = 0$
      
      **Step 3: Calculate the probability of each event.**
      *   $P(\\text{Unlock from A}) = P(\\text{Box A}) \\times P(\\text{Unlock | Box A}) = \\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$
      *   $P(\\text{Unlock from B}) = P(\\text{Box B}) \\times P(\\text{Unlock | Box B}) = \\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$
      *   $P(\\text{Unlock from C}) = P(\\text{Box C}) \\times P(\\text{Unlock | Box C}) = \\frac{1}{3} \\times 0 = 0$
      
      **Step 4: Sum the probabilities of these events.**
      $P(\\text{Selected key unlocks car door}) = P(\\text{Unlock from A}) + P(\\text{Unlock from B}) + P(\\text{Unlock from C})$
      $= \\frac{1}{6} + \\frac{1}{9} + 0$
      
      To sum these fractions, find a common denominator, which is $18$.
      $= \\frac{3}{18} + \\frac{2}{18} = \\frac{5}{18}$.
      
      Thus, the probability that the selected key will unlock the car door is $\\frac{5}{18}$.
      
      The correct answer is C.`
  },
  5: {
    id: 'A4-q5',
    text: 'Players A, B, and C take turns playing a card game, individually and in the fixed order A, B, C, A, B, C, and so on. If no other players participated, how many rounds did player C play?',
    statements: [
      'Player A played the first round and the last round.',
      'Player B played exactly $17$ rounds.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `Let $N$ be the total number of rounds played.
      The players play in the order A, B, C, A, B, C, ...
      
      *   Player A plays on rounds: $1, 4, 7, \\dots$ (rounds of the form $3k+1$)
      *   Player B plays on rounds: $2, 5, 8, \\dots$ (rounds of the form $3k+2$)
      *   Player C plays on rounds: $3, 6, 9, \\dots$ (rounds of the form $3k$)
      
      We need to find the number of rounds Player C played.
      
      **Statement (1):** Player A played the first round and the last round.
      Since A plays the first round, this is consistent.
      For A to play the last round (round $N$), $N$ must be of the form $3k+1$.
      If $N = 1$ (A plays), C plays $0$ rounds.
      If $N = 4$ (A,B,C,A), C plays $1$ round.
      Since the number of rounds C played can vary, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** Player B played exactly $17$ rounds.
      Let the number of rounds B played be $N_B$. So $N_B = 17$.
      B plays on rounds $2, 5, \\dots$, up to the last round B played.
      *   If the total number of rounds $N$ is of the form $3k$ (meaning C played last), then $N_A = k, N_B = k, N_C = k$. So $k = 17$. $N = 3 \\times 17 = 51$. C plays $17$ rounds.
      *   If the total number of rounds $N$ is of the form $3k+1$ (meaning A played last), then $N_A = k+1, N_B = k, N_C = k$. So $k = 17$. $N = 3 \\times 17 + 1 = 52$. C plays $17$ rounds.
      *   If the total number of rounds $N$ is of the form $3k+2$ (meaning B played last), then $N_A = k+1, N_B = k+1, N_C = k$. So $k+1 = 17 \\Rightarrow k = 16$. $N = 3 \\times 16 + 2 = 48 + 2 = 50$. C plays $16$ rounds.
      Since C could have played $17$ rounds (if $N=51$ or $N=52$) or $16$ rounds (if $N=50$), Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      From Statement (1), $N$ must be of the form $3k+1$.
      From Statement (2), $N_B = 17$.
      Looking at the possibilities from Statement (2) that are consistent with Statement (1):
      *   If $N = 3k+1$, then $N_B = k$. So, $k = 17$.
      *   This means $N = 3(17) + 1 = 51 + 1 = 52$ rounds.
      
      Now, with $N = 52$ rounds, let's calculate the rounds played by each player:
      *   Player A: $N_A = k+1 = 17+1 = 18$ rounds. (The first and the last round checks out, since $52$ is $3 \\times 17+1$).
      *   Player B: $N_B = k = 17$ rounds. (Checks out with Statement 2).
      *   Player C: $N_C = k = 17$ rounds.
      
      Both statements together uniquely determine the total number of rounds ($N=52$) and thus the number of rounds Player C played ($17$ rounds).
      
      Thus, the correct answer is C.`
  },
  6: {
    id: 'A4-q6',
    text: 'If $x^2=x+1$, then $x^3=?$',
    options: PS_ALGEBRA_OPTIONS_A4_Q6,
    correctAnswer: 'C',
    explanation: `We are given the equation: $x^2 = x+1$.
      We need to find the value of $x^3$.
      
      We can express $x^3$ in terms of $x^2$:
      $x^3 = x \\times x^2$.
      
      Now, substitute the given expression for $x^2$ into this equation:
      $x^3 = x \\times (x+1)$.
      
      Distribute $x$:
      $x^3 = x^2 + x$.
      
      We can substitute $x^2 = x+1$ again:
      $x^3 = (x+1) + x$.
      
      Combine like terms:
      $x^3 = 2x + 1$.
      
      Thus, the correct answer is C.`
  },
  7: {
    id: 'A4-q7',
    text: 'Is $|a-b-c|-(a-b-c)>0$?',
    statements: [
      '$a>b>c$',
      '$a>0, b>0, c>0$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'E',
    explanation: `Let $X = a-b-c$.
      The question is asking: Is $|X| - X > 0$?
      This inequality is true if and only if $|X| > X$, which occurs if and only if $X$ is a negative number ($X < 0$).
      So, the question is equivalent to asking: Is $a-b-c < 0$? or Is $a < b+c$?
      
      **Statement (1):** $a > b > c$.
      This implies that $a, b,$ and $c$ are distinct numbers in decreasing order.
      *   Case 1: Let $a=3, b=2, c=1$.
          Then $a-b-c = 3-2-1 = 0$.
          In this case, $a-b-c$ is not $< 0$. (No)
      *   Case 2: Let $a=4, b=3, c=2$.
          Then $a-b-c = 4-3-2 = -1$.
          In this case, $a-b-c$ is $< 0$. (Yes)
      Since we can get different answers, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** $a > 0, b > 0, c > 0$.
      This implies that $a, b,$ and $c$ are all positive numbers.
      *   Case 1: Let $a=5, b=2, c=1$.
          Then $a-b-c = 5-2-1 = 2$.
          In this case, $a-b-c$ is not $< 0$. (No)
      *   Case 2: Let $a=1, b=2, c=3$.
          Then $a-b-c = 1-2-3 = -4$.
          In this case, $a-b-c$ is $< 0$. (Yes)
      Since we can get different answers, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      We have $a > b > c$ AND $a > 0, b > 0, c > 0$.
      *   We already found an example from Statement (1) where $a-b-c = 0$ ($a=3, b=2, c=1$). Here, $a-b-c$ is not $< 0$. (No)
      *   We also found an example from Statement (1) where $a-b-c < 0$ ($a=4, b=3, c=2$). Here, $a-b-c$ is $< 0$. (Yes)
      Since both conditions ($a > b > c$ and $a, b, c > 0$) are met in both examples, and we get different answers to the question, the combined statements are still NOT sufficient.
      
      Thus, the correct answer is E.`
  },
  8: {
    id: 'A4-q8',
    text: 'For a sequence defined by $S_n$, $S_1=1, S_2=2, S_3=3$, and $S_{n+3}=S_n-S_{n+1}+S_{n+2}$ for all integers $n \\ge 1$. What is the value of $S_{10}$?',
    options: PS_NUMERICAL_OPTIONS_A4_Q8,
    correctAnswer: 'C',
    explanation: `We are given the first three terms of a sequence and a recursive formula:
      $S_1 = 1$
      $S_2 = 2$
      $S_3 = 3$
      $S_{n+3} = S_n - S_{n+1} + S_{n+2}$ for $n \\ge 1$
      
      Let's calculate the next terms of the sequence:
      *   For $n=1$:
          $S_4 = S_1 - S_2 + S_3 = 1 - 2 + 3 = 2$
      *   For $n=2$:
          $S_5 = S_2 - S_3 + S_4 = 2 - 3 + 2 = 1$
      *   For $n=3$:
          $S_6 = S_3 - S_4 + S_5 = 3 - 2 + 1 = 2$
      *   For $n=4$:
          $S_7 = S_4 - S_5 + S_6 = 2 - 1 + 2 = 3$
      *   For $n=5$:
          $S_8 = S_5 - S_6 + S_7 = 1 - 2 + 3 = 2$
      *   For $n=6$:
          $S_9 = S_6 - S_7 + S_8 = 2 - 3 + 2 = 1$
      *   For $n=7$:
          $S_{10} = S_7 - S_8 + S_9 = 3 - 2 + 1 = 2$
      
      The sequence is: $1, 2, 3, 2, 1, 2, 3, 2, 1, 2, \\dots$
      We can observe that the sequence of values $(1, 2, 3, 2)$ repeats every $4$ terms.
      
      To find $S_{10}$, we can use the pattern:
      $S_1 = 1$
      $S_2 = 2$
      $S_3 = 3$
      $S_4 = 2$
      $S_5 = 1$ (same as $S_1$)
      $S_6 = 2$ (same as $S_2$)
      $S_7 = 3$ (same as $S_3$)
      $S_8 = 2$ (same as $S_4$)
      
      So, the value of $S_n$ is determined by $(n \\pmod 4)$.
      *   If $n \\pmod 4 = 1, S_n = 1$
      *   If $n \\pmod 4 = 2, S_n = 2$
      *   If $n \\pmod 4 = 3, S_n = 3$
      *   If $n \\pmod 4 = 0, S_n = 2$
      
      For $S_{10}$:
      $10 \\pmod 4 = 2$.
      Therefore, $S_{10} = S_2 = 2$.
      
      Thus, the correct answer is C.`
  },
  9: {
    id: 'A4-q9',
    text: 'If $a, b, c, d, e, f,$ and $g$ are $7$ prime numbers, what is the value of $a$?',
    statements: [
      'The mean of the $7$ prime numbers is $48$.',
      '$a < b < c < d < e < f < g$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `We are given that $a, b, c, d, e, f,$ and $g$ are $7$ prime numbers. We need to find the value of $a$.
      
      **Statement (1):** The mean of the $7$ prime numbers is $48$.
      The sum of the $7$ prime numbers = Mean $\\times$ Number of primes = $48 \\times 7 = 336$.
      The sum of $7$ prime numbers is an even number ($336$).
      A sum of several integers is even if there is an even number of odd integers, or all are even.
      Since all prime numbers except $2$ are odd, if all $7$ primes were odd, their sum would be odd (odd $+$ odd $+$ ... (7 times) $=$ odd).
      Therefore, for the sum to be even, at least one of the prime numbers must be $2$.
      However, we don't know which of the $7$ primes is $2$. It could be '$a$', or any other prime in the set.
      For example: $\{2, 3, 5, 7, 11, 13, 295\}$ ($295$ is not prime, just an example to sum to $336$). If $a=2$, then $a=2$. If $a=3$, then $a=3$.
      So, Statement (1) ALONE is NOT sufficient to find $a$.
      
      **Statement (2):** $a < b < c < d < e < f < g$.
      This statement tells us that '$a$' is the smallest of the $7$ prime numbers.
      However, it does not give us the value of '$a$'. '$a$' could be $2, 3, 5$, etc.
      For example: The set of primes could be $\{2, 3, 5, 7, 11, 13, 17\}$ or $\{3, 5, 7, 11, 13, 17, 19\}$. In the first case $a=2$, in the second $a=3$.
      So, Statement (2) ALONE is NOT sufficient to find $a$.
      
      **Combining Statement (1) and Statement (2):**
      From Statement (1), we know that one of the $7$ prime numbers must be $2$.
      From Statement (2), we know that '$a$' is the smallest of the $7$ prime numbers.
      Since $2$ is the smallest prime number, and '$a$' is the smallest prime number in the set, it must be that $a = 2$.
      Both statements together uniquely determine the value of $a$.
      
      Thus, the correct answer is C.`
  },
  10: {
    id: 'A4-q10',
    text: 'A driver traveled a total distance of $85$ miles in $1$ hour and $24$ minutes. The driver traveled at a constant speed of $x$ miles per hour through a construction zone and at a constant speed of $y$ miles per hour through the remainder of the trip. What is the value of $y$?',
    statements: [
      '$y = 2x$',
      'The distance traveled through the construction zone was $5$ miles.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `Let $D$ be the total distance and $T$ be the total time.
      $D = 85$ miles.
      $T = 1$ hour and $24$ minutes = $1 + \\frac{24}{60}$ hours = $1 + \\frac{2}{5}$ hours = $\\frac{7}{5}$ hours.
      
      Let $d_x$ be the distance in the construction zone, and $t_x$ be the time in the construction zone.
      Let $d_y$ be the distance in the remainder of the trip, and $t_y$ be the time in the remainder of the trip.
      
      We know:
      1) $d_x + d_y = D = 85$
      2) $t_x + t_y = T = \\frac{7}{5}$
      3) $d_x = x \\times t_x \\Rightarrow t_x = \\frac{d_x}{x}$
      4) $d_y = y \\times t_y \\Rightarrow t_y = \\frac{d_y}{y}$
      
      Substituting (3) and (4) into (2):
      $\\frac{d_x}{x} + \\frac{d_y}{y} = \\frac{7}{5}$
      We need to find the value of $y$.
      
      **Statement (1):** $y = 2x$.
      Substitute this into the combined equation:
      $\\frac{d_x}{x} + \\frac{d_y}{2x} = \\frac{7}{5}$
      Multiply by $2x$:
      $2d_x + d_y = \\frac{14x}{5}$
      We also know $d_y = 85 - d_x$. Substitute this:
      $2d_x + (85 - d_x) = \\frac{14x}{5}$
      $d_x + 85 = \\frac{14x}{5}$
      This equation has two unknowns ($d_x$ and $x$, and thus $y$). We cannot find a unique value for $y$.
      For example, if $d_x = 5$, then $5 + 85 = \\frac{14x}{5} \\Rightarrow 90 = \\frac{14x}{5} \\Rightarrow x = \\frac{450}{14} = \\frac{225}{7}$. Then $y = \\frac{450}{7}$.
      If $d_x = 10$, then $10 + 85 = \\frac{14x}{5} \\Rightarrow 95 = \\frac{14x}{5} \\Rightarrow x = \\frac{475}{14}$. Then $y = \\frac{950}{14} = \\frac{475}{7}$.
      Since $y$ can have different values, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** The distance traveled through the construction zone was $5$ miles. So, $d_x = 5$.
      From $d_x + d_y = 85$, we get $d_y = 85 - 5 = 80$ miles.
      Substitute these values into the combined equation:
      $\\frac{5}{x} + \\frac{80}{y} = \\frac{7}{5}$
      This is a single equation with two unknowns ($x$ and $y$). We cannot find a unique value for $y$.
      For example, if $x = 25$, then $\\frac{5}{25} + \\frac{80}{y} = \\frac{7}{5} \\Rightarrow \\frac{1}{5} + \\frac{80}{y} = \\frac{7}{5} \\Rightarrow \\frac{80}{y} = \\frac{6}{5} \\Rightarrow y = \\frac{400}{6} = \\frac{200}{3}$.
      If $x = 50$, then $\\frac{5}{50} + \\frac{80}{y} = \\frac{7}{5} \\Rightarrow \\frac{1}{10} + \\frac{80}{y} = \\frac{7}{5} \\Rightarrow \\frac{80}{y} = \\frac{7}{5} - \\frac{1}{10} = \\frac{14-1}{10} = \\frac{13}{10} \\Rightarrow y = \\frac{800}{13}$.
      Since $y$ can have different values, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      From Statement (1): $y = 2x$
      From Statement (2): $d_x = 5$, and therefore $d_y = 80$.
      
      Substitute these into the equation $\\frac{d_x}{x} + \\frac{d_y}{y} = \\frac{7}{5}$:
      $\\frac{5}{x} + \\frac{80}{2x} = \\frac{7}{5}$
      $\\frac{5}{x} + \\frac{40}{x} = \\frac{7}{5}$
      $\\frac{45}{x} = \\frac{7}{5}$
      $7x = 45 \\times 5$
      $7x = 225$
      $x = \\frac{225}{7}$ miles per hour.
      
      Now find $y$ using $y = 2x$:
      $y = 2 \\times \\frac{225}{7} = \\frac{450}{7}$ miles per hour.
      
      Both statements together uniquely determine the value of $y$.
      
      Thus, the correct answer is C.`
  },
  11: {
    id: 'A4-q11',
    text: 'If $||x-a|-b|=c$, what is the sum of all possible values of $x$?',
    statements: [
      '$a-b-c=2$',
      '$a+b+c=2$'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'C',
    explanation: `The equation is $||x-a|-b|=c$. We want to find the sum of all possible values of $x$.
      For an equation $|Z|=C$ to have solutions, $C$ must be greater than or equal to $0$ ($c \\ge 0$).
      
      From the definition of absolute value, $|Z|=C$ implies $Z=C$ or $Z=-C$.
      So, $|x-a|-b = c$  (Equation 1)  OR  $|x-a|-b = -c$ (Equation 2).
      
      Rearranging:
      Equation 1: $|x-a| = b+c$
      Equation 2: $|x-a| = b-c$
      
      For $|x-a|=K$ to have solutions, $K$ must be greater than or equal to $0$.
      If solutions exist, then $x-a=K$ or $x-a=-K$, which gives $x = a+K$ or $x = a-K$. The sum of these two solutions is $(a+K) + (a-K) = 2a$.
      If $K=0$, then $x-a=0$, so $x=a$. The sum of solutions is just '$a$'.
      
      **Analysis of the sum of solutions:**
      *   If $b+c > 0$, Equation 1 yields two solutions: $x = a+(b+c)$ and $x = a-(b+c)$. Sum = $2a$.
      *   If $b+c = 0$, Equation 1 yields one solution: $x = a$. Sum = $a$.
      *   If $b+c < 0$, Equation 1 yields no solutions.
      
      *   If $b-c > 0$, Equation 2 yields two solutions: $x = a+(b-c)$ and $x = a-(b-c)$. Sum = $2a$.
      *   If $b-c = 0$, Equation 2 yields one solution: $x = a$. Sum = $a$.
      *   If $b-c < 0$, Equation 2 yields no solutions.
      
      The overall sum of *all* possible values of $x$ will depend on which of these branches ($b+c$ and $b-c$) yield solutions, and whether $x=a$ is a repeated solution.
      
      **Statement (1):** $a-b-c = 2$.
      This tells us nothing about $c$ (whether $c \\ge 0$).
      If $c=0$, then $a-b=2$. The original equation becomes $||x-a|-b|=0 \\Rightarrow |x-a|-b=0 \\Rightarrow |x-a|=b$.
      If $b=2$ (from $a-b=2$, so $a=4$), $|x-4|=2 \\Rightarrow x-4 = 2$ or $x-4 = -2 \\Rightarrow x=6$ or $x=2$. Sum = $8$.
      If $b=-2$ (from $a-b=2$, so $a=0$), $|x|=|x-0|=-2$ (no solution).
      Since '$a$' (and thus '$x$' values) can vary, Statement (1) ALONE is NOT sufficient.
      
      **Statement (2):** $a+b+c = 2$.
      Similarly, '$a$' is not uniquely determined.
      If $c=0$, then $a+b=2$. The original equation becomes $|x-a|=b$.
      If $b=1$ (from $a+b=2$, so $a=1$), $|x-1|=1 \\Rightarrow x-1=1$ or $x-1=-1 \\Rightarrow x=2$ or $x=0$. Sum = $2$.
      If $b=2$ (from $a+b=2$, so $a=0$), $|x|=2 \\Rightarrow x=2$ or $x=-2$. Sum = $0$.
      Since the sum can vary, Statement (2) ALONE is NOT sufficient.
      
      **Combining Statement (1) and Statement (2):**
      We have a system of two equations:
      1) $a-b-c = 2$
      2) $a+b+c = 2$
      
      Add (1) and (2):
      $(a-b-c) + (a+b+c) = 2 + 2$
      $2a = 4 \\Rightarrow a = 2$.
      
      Substitute $a=2$ into Equation 1:
      $2-b-c = 2 \\Rightarrow b+c = 0$.
      
      Since we established $c \\ge 0$ for solutions to exist, and $b+c=0$, it implies $b$ must be less than or equal to $0$ ($b \\le 0$).
      
      Now, let's re-evaluate the two branches for solutions:
      
      **Branch 1: $|x-a| = b+c$**
      Since $b+c=0$, this becomes $|x-a| = 0$.
      $|x-2| = 0 \\Rightarrow x-2 = 0 \\Rightarrow x = 2$.
      This branch yields a single solution: $x=2$.
      
      **Branch 2: $|x-a| = b-c$**
      We know $b+c=0$, so $b=-c$.
      Substitute $b=-c$ into $b-c$: $b-c = (-c)-c = -2c$.
      So, this branch becomes $|x-a| = -2c$.
      $|x-2| = -2c$.
      
      For $|x-2| = -2c$ to have solutions, $-2c$ must be $\\ge 0$.
      Since $c \\ge 0$ (from the initial condition for the outermost absolute value), the only way for $-2c$ to be $\\ge 0$ is if $c=0$.
      
      *   **Case A: If $c = 0$**
          Then $b+c = 0$ and $b-c = 0$.
          Both branches become $|x-a| = 0$, which means $|x-2|=0 \\Rightarrow x=2$.
          In this case, there is only one solution, $x=2$. The sum of all possible values of $x$ is $2$.
          
      *   **Case B: If $c > 0$**
          Then $b+c = 0$, so $b = -c$ (which means $b < 0$).
          Branch 1: $|x-2| = 0 \\Rightarrow x=2$ (one solution).
          Branch 2: $|x-2| = -2c$. Since $c > 0$, $-2c < 0$. An absolute value cannot be negative, so this branch yields NO solutions.
          In this case, there is only one solution, $x=2$. The sum of all possible values of $x$ is $2$.
          
      In both possible cases ($c=0$ or $c>0$), the only solution is $x=2$. Therefore, the sum of all possible values of $x$ is $2$.
      The value is uniquely determined as $2$.
      
      Thus, the correct answer is C.`
  },
  12: {
    id: 'A4-q12',
    text: 'Bag A contains red, white and blue marbles such that the red to white marble ratio is $1:3$ and the white to blue marble ratio is $2:3$. Bag B contains red and white marbles in the ratio of $1:4$. Together, the two bags contain $30$ white marbles. How many red marbles could be in bag A?',
    options: PS_NUMERICAL_OPTIONS_A4_Q12,
    correctAnswer: 'D',
    explanation: `**1. Analyze Bag A Ratios:**
      Red : White = $1 : 3$
      White : Blue = $2 : 3$
      
      To combine these ratios, find a common multiple for 'White'. The LCM of $3$ and $2$ is $6$.
      *   Multiply (Red : White) by $2$: Red : White = $2 : 6$
      *   Multiply (White : Blue) by $3$: White : Blue = $6 : 9$
      
      So, the ratio of Red : White : Blue in Bag A is $2 : 6 : 9$.
      Let the number of marbles in Bag A be $2k, 6k,$ and $9k$ for Red, White, and Blue, respectively, where $k$ is a positive integer.
      Red marbles in Bag A = $2k$
      White marbles in Bag A = $6k$
      
      **2. Analyze Bag B Ratios:**
      Red : White = $1 : 4$
      Let the number of marbles in Bag B be $j$ and $4j$ for Red and White, respectively, where $j$ is a positive integer.
      Red marbles in Bag B = $j$
      White marbles in Bag B = $4j$
      
      **3. Use the total white marbles information:**
      Together, the two bags contain $30$ white marbles.
      White marbles from Bag A + White marbles from Bag B = $30$
      $6k + 4j = 30$
      
      Divide the equation by $2$:
      $3k + 2j = 15$
      
      Since $k$ and $j$ must be positive integers, let's find the possible pairs $(k, j)$:
      *   If $k = 1: 3(1) + 2j = 15 \\Rightarrow 3 + 2j = 15 \\Rightarrow 2j = 12 \\Rightarrow j = 6$. (Valid: $k=1, j=6$)
      *   If $k = 2: 3(2) + 2j = 15 \\Rightarrow 6 + 2j = 15 \\Rightarrow 2j = 9$. (Not valid, $j$ must be an integer)
      *   If $k = 3: 3(3) + 2j = 15 \\Rightarrow 9 + 2j = 15 \\Rightarrow 2j = 6 \\Rightarrow j = 3$. (Valid: $k=3, j=3$)
      *   If $k = 4: 3(4) + 2j = 15 \\Rightarrow 12 + 2j = 15 \\Rightarrow 2j = 3$. (Not valid, $j$ must be an integer)
      *   If $k = 5: 3(5) + 2j = 15 \\Rightarrow 15 + 2j = 15 \\Rightarrow 2j = 0 \\Rightarrow j = 0$. (Not valid, $j$ must be a positive integer)
      
      So, the possible $(k, j)$ pairs are $(1, 6)$ and $(3, 3)$.
      
      **4. Determine how many red marbles could be in Bag A:**
      Red marbles in Bag A = $2k$.
      *   If $k = 1$, Red marbles in Bag A = $2(1) = 2$.
      *   If $k = 3$, Red marbles in Bag A = $2(3) = 6$.
      
      The possible number of red marbles in Bag A are $2$ or $6$.
      Looking at the options, $6$ is one of the choices.
      
      Thus, the correct answer is D.`
  },
};