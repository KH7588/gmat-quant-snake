import { Question, Option } from '../../types';
import { DS_OPTIONS } from '../questions';

export const EXAM_A6_QUESTIONS: Record<number, Question> = {
  1: {
    id: 'A6-q1',
    text: 'A list consists of n positive integers. If the sum of these n integers is s, is at least one integer in the list odd?',
    statements: [
      'The quotient $\\frac{s}{n}$ is an odd integer',
      'The product ns is an even integer'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'E',
    explanation: `The question asks if at least one integer is odd, which is equivalent to asking if the integers are NOT all even.

**Statement (1):** The quotient $\\frac{s}{n}$ is an odd integer.
This means the average of the integers is an odd number. Let $\\frac{s}{n} = k$, where k is odd. So, $s = nk$.
Let's test two cases:
- Case A: Let n = 2 (even) and the average k = 3 (odd). The sum s = 2 * 3 = 6. The list could be {2, 4}. In this case, all integers are even. The answer to the question is NO.
- Case B: Let n = 2 (even) and the average k = 3 (odd). The sum s is still 6. The list could be {1, 5}. In this case, there are odd integers. The answer to the question is YES.
Since we get both YES and NO, statement (1) is not sufficient.

**Statement (2):** The product ns is an even integer.
This means that either n is even, or s is even, or both are even.
Let's test cases:
- Case A: Let n = 2 (even) and s = 4 (even). The product ns = 8 (even). The list could be {2, 2}. All integers are even. The answer is NO.
- Case B: Let n = 2 (even) and s = 5 (odd). The product ns = 10 (even). The list could be {1, 4} or {2, 3}. In these cases, there is an odd integer. The answer is YES.
Since we get both YES and NO, statement (2) is not sufficient.

**Combining (1) and (2):**
From (1), $\\frac{s}{n}$ is an odd integer. From (2), ns is an even integer.
Let $\\frac{s}{n} = k$ (odd). Then $s = nk$. Substitute this into the second statement: $n \\times (nk) = n^2 \\times k$ is even.
Since k is odd, for $n^2 \\times k$ to be even, $n^2$ must be even, which means n must be even.
So, we know n is even and the average (s/n) is odd.
This brings us back to the same counterexample from statement (1): n=2 (even), average=3 (odd), sum s=6. The list could be {2, 4} (all even, answer NO) or {1, 5} (contains odd, answer YES).
The combined statements are not sufficient.

Thus, the correct answer is E.`
  },
  2: {
    id: 'A6-q2',
    text: 'The greatest common divisor of the positive integers x and y is d. If 1 < d < x and 1 < d < y, for which of the following pairs of integers must the greatest common divisor equal d?',
    romanNumerals: {
      I: 'x and 1',
      II: 'xy and y',
      III: '(x - y) and y'
    },
    options: [
        { label: "A", text: "I only" },
        { label: "B", text: "II only" },
        { label: "C", text: "III only" },
        { label: "D", text: "I and II only" },
        { label: "E", text: "II and III only" }
    ],
    correctAnswer: 'C',
    explanation: `We are given that gcd(x, y) = d. This means we can write x = da and y = db, where a and b are integers and gcd(a, b) = 1.

I. **gcd(x, 1):** The greatest common divisor of any integer and 1 is always 1. Since we are given d > 1, gcd(x, 1) cannot be d.

II. **gcd(xy, y):** Since y is a factor of both y and xy, the greatest common divisor of xy and y is y. We are given d < y, so gcd(xy, y) is not d.

III. **gcd(x - y, y):** This is a property of the Euclidean algorithm for finding the greatest common divisor. The property states that gcd(x, y) = gcd(x - y, y).
Let's prove it:
Let g = gcd(x, y). Then g divides x and g divides y. Therefore, g must also divide their difference, x - y. Since g divides both (x - y) and y, it must be a common divisor.
Now let h = gcd(x - y, y). Then h divides y and h divides x - y. Therefore, h must also divide their sum, (x - y) + y = x. Since h divides both x and y, it must be a common divisor.
Since the common divisors are the same, their greatest common divisor must be the same.
So, gcd(x - y, y) = gcd(x, y) = d. This must be true.

Therefore, only statement III is correct.

Thus, the correct answer is C.`
  },
  3: {
    id: 'A6-q3',
    text: 'Is the arithmetic mean of the five numbers a, b, c, d, and e greater than the median of these five numbers?',
    statements: [
      'a<b<c<d<e',
      'b-a=e-d'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'E',
    explanation: `The question asks if (a+b+c+d+e)/5 > Median.

**Statement (1): a < b < c < d < e**
This tells us that c is the median. The question becomes: Is (a+b+c+d+e)/5 > c?
This simplifies to a+b+c+d+e > 5c, or a+b+d+e > 4c.
- Case A: Let the numbers be 1, 2, 3, 4, 5. The mean is 3 and the median is 3. The mean is not greater than the median. (Answer: NO)
- Case B: Let the numbers be 1, 2, 3, 10, 20. The mean is (1+2+3+10+20)/5 = 36/5 = 7.2. The median is 3. The mean is greater than the median. (Answer: YES)
Since we get both YES and NO, statement (1) is not sufficient.

**Statement (2): b - a = e - d**
This statement gives a relationship between the numbers but does not tell us their order or values.
- Case A: Let a=1, b=2, d=4, e=5. Then c can be 3. The set is {1, 2, 3, 4, 5}. Sorted, the median is 3. The mean is 3. The mean is not greater. (Answer: NO)
- Case B: Let a=1, b=2, d=10, e=11. Then c can be 3. The set is {1, 2, 3, 10, 11}. Sorted, the median is 3. The mean is (1+2+3+10+11)/5 = 27/5 = 5.4. The mean is greater. (Answer: YES)
Statement (2) is not sufficient.

**Combining (1) and (2):**
We know a < b < c < d < e, so c is the median. We also know b - a = e - d.
This can be rewritten as a+e = b+d.
The question is still whether a+b+d+e > 4c.
Substituting b+d = a+e, the question becomes: Is a + (a+e) + e > 4c? Is 2(a+e) > 4c? Is a+e > 2c?
- Case A: Consider the set {1, 2, 3, 4, 5}. The conditions are met. Here a+e = 6 and 2c = 6. a+e is not greater than 2c. The mean is not greater than the median. (Answer: NO)
- Case B: Consider the set {1, 2, 4, 10, 11}. b-a=1 and e-d=1. The conditions are met. Here a+e = 12 and 2c = 8. a+e is greater than 2c. The mean is greater than the median. (Answer: YES)
Even with both statements, we can have different outcomes. They are not sufficient.

Thus, the correct answer is E.`
  },
  4: {
    id: 'A6-q4',
    text: 'How many distinct arrangements of the five letters in the set {b, e, g, i, n} begin with a vowel (e or i)?',
    options: [
        { label: "A", text: "24" },
        { label: "B", text: "48" },
        { label: "C", text: "72" },
        { label: "D", "text": "96" },
        { label: "E", text: "120" }
    ],
    correctAnswer: 'B',
    explanation: `The set of letters is {b, e, g, i, n}. The letters are all distinct.
The vowels in the set are {e, i}.
We need to find the number of arrangements of these five letters that begin with a vowel.

Let's consider the five positions for the letters:
Position 1: Must be a vowel. There are 2 choices (e or i).
Position 2: Can be any of the remaining 4 letters. There are 4 choices.
Position 3: Can be any of the remaining 3 letters. There are 3 choices.
Position 4: Can be any of the remaining 2 letters. There are 2 choices.
Position 5: Must be the last remaining letter. There is 1 choice.

The total number of distinct arrangements is the product of the number of choices for each position:
Total arrangements = 2 × 4 × 3 × 2 × 1 = 2 × 4!
Total arrangements = 2 × 24 = 48.

Thus, there are 48 distinct arrangements. The correct option text is 48.

The correct answer is B.`
  },
  5: {
    id: 'A6-q5',
    text: 'A box contains exactly 10 balls, numbered 1 through 5 distinctively. Five of the balls are white and numbered 1 through 5, and the other five balls are green and numbered 1 through 5. Two balls are selected at random from the box without replacement. If it is known that one selected ball is white, the other is green, and both carry even numbers, can the specific number on the selected green ball be determined?',
    statements: [
      'If one ball were selected at random from the remaining 8 balls in the box, the probability that it is a green ball with an even number would be $\\frac{1}{8}$.',
      'If one ball were selected at random from the remaining 8 balls in the box, the probability that it is a ball numbered with a 4 would be $\\frac{1}{4}$.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'B',
    explanation: `Initial state: White balls {W1, W2, W3, W4, W5}, Green balls {G1, G2, G3, G4, G5}.
Information from the stem: Two balls were selected. One is a white even-numbered ball, one is a green even-numbered ball.
The even-numbered white balls are {W2, W4}. The even-numbered green balls are {G2, G4}.
The selected pair is one of { {W2,G2}, {W2,G4}, {W4,G2}, {W4,G4} }.
The question is: Can we determine if the selected green ball was G2 or G4?

**Statement (1):** The probability of picking a green-even ball from the 8 remaining balls is $\\frac{1}{8}$.
Let G_even_rem be the number of green-even balls remaining.
P(Green-Even) = G_even_rem / 8 = 1/8.
This implies G_even_rem = 1.
Initially, there were two green-even balls (G2, G4). If one remains, it means one was picked. This does not tell us whether G2 or G4 was picked. Not sufficient.

**Statement (2):** The probability of picking a ball numbered 4 from the 8 remaining balls is $\\frac{1}{4}$.
Let N4_rem be the number of balls numbered 4 remaining.
P(Number 4) = N4_rem / 8 = 1/4.
This implies N4_rem = 8/4 = 2.
Initially, there were two balls numbered 4 ({W4, G4}). If two balls numbered 4 remain in the box, it means that neither W4 nor G4 was selected.
The selected pair was a white-even and a green-even ball. Since W4 and G4 were not selected, the selected pair must have been W2 and G2.
This means the number on the selected green ball is 2. The number is uniquely determined. Sufficient.

Thus, the correct answer is B.`
  },
  6: {
    id: 'A6-q6',
    text: 'At a certain party, the following restrictions apply: A and B will not both attend; B and C will not both attend; and E and F will not both attend. Furthermore, if E attends, then A will attend. Will B attend the party?',
    statements: [
      'E attends the party.',
      'A and C are good friends and will both attend the party.'
    ],
    options: DS_OPTIONS,
    correctAnswer: 'D',
    explanation: `Let's formalize the rules:
R1: NOT (A and B)  --> If A attends, B does not. If B attends, A does not.
R2: NOT (B and C)  --> If B attends, C does not. If C attends, B does not.
R3: NOT (E and F)
R4: E --> A (If E attends, A must attend)

The question is: Will B attend?

**Statement (1):** E attends the party.
- If E attends, then from R4, A must attend.
- If A attends, then from R1, B cannot attend.
This gives a definite answer: No, B will not attend. Sufficient.

**Statement (2):** A and C are good friends and will both attend the party.
- We are given that A attends. From R1, if A attends, B cannot attend.
- We are also given that C attends. From R2, if C attends, B cannot attend.
Both pieces of information lead to the same conclusion: No, B will not attend. Sufficient.

Since EACH statement ALONE is sufficient, the correct answer is D.`
  },
  7: {
    id: 'A6-q7',
    text: 'A customer purchased carpeting to cover a rectangular room with length $a$ and width b. To ensure sufficient coverage, the customer purchased a total area of carpeting equal to the area of the room plus an additional x percent of the room\'s area. If a sales tax of r percent was added to the pre-tax price of the carpeting, resulting in a final total price of p, what was the pre-tax price per unit area of the carpeting in terms of a, b, x, p, and r?',
    options: [
        {label: "A", text: "$\\frac{p(1+r/100)}{ab(1+x/100)}$"},
        {label: "B", text: "$\\frac{p}{ab(1+x)(1+r)}$"},
        {label: "C", text: "$\\frac{p}{ab(1+x/100)(1+r/100)}$"},
        {label: "D", text: "$\\frac{10000p}{ab(100+x)(100+r)}$"},
        {label: "E", text: "$\\frac{p}{ab(1+x+r)}$"}
    ],
    correctAnswer: 'C',
    explanation: `Let \\$C be the pre-tax price per unit area.
1.  Area of the room = $a \\times b$.
2.  Additional area purchased = $x$ percent of room's area = $ab \\times \\frac{x}{100}$.
3.  Total area of carpeting purchased = $ab + ab \\frac{x}{100} = ab(1 + \\frac{x}{100})$.
4.  Total pre-tax price = (Price per unit area) × (Total area purchased) = $C \\times ab(1 + \\frac{x}{100})$.
5.  Final total price (p) = (Total pre-tax price) × (1 + tax rate) = $C \\times ab(1 + \\frac{x}{100}) \\times (1 + \\frac{r}{100})$.
6.  Now, solve for $C:
    $C = \\frac{p}{ab(1 + \\frac{x}{100})(1 + \\frac{r}{100})}$.

This matches option C. Note that option D is an algebraic equivalent:
$ab(1 + \\frac{x}{100})(1 + \\frac{r}{100}) = ab(\\frac{100+x}{100})(\\frac{100+r}{100}) = \\frac{ab(100+x)(100+r)}{10000}$.
So $C = \\frac{p}{\\frac{ab(100+x)(100+r)}{10000}} = \\frac{10000p}{ab(100+x)(100+r)}$.
Since the prompt requested LaTeX code, and option C is the most direct representation of the percentages, it's the best answer.

Thus, the correct answer is C.`
  },
  8: {
    id: 'A6-q8',
    text: 'If $x>y, x+y^2=27$, and $x+y=7$, what is the value of $x^2+y$?',
    options: [
      { label: "A", text: "-4" },
      { label: "B", text: "27" },
      { label: "C", text: "117" },
      { label: "D", text: "121" },
      { label: "E", text: "125" }
    ],
    correctAnswer: 'C',
    explanation: `We have a system of two equations:
1) $x + y^2 = 27$
2) $x + y = 7$

From equation (2), we can express x in terms of y: $x = 7 - y$.
Substitute this expression for x into equation (1):
$(7 - y) + y^2 = 27$
$y^2 - y + 7 - 27 = 0$
$y^2 - y - 20 = 0$

Factor the quadratic equation:
$(y - 5)(y + 4) = 0$
This gives two possible values for y: $y = 5$ or $y = -4$.

We are given the condition $x > y$. Let's check both cases:
- Case 1: If $y = 5$. Then $x = 7 - y = 7 - 5 = 2$. Is $x > y$? Is $2 > 5$? No, this is false. So we discard this solution.
- Case 2: If $y = -4$. Then $x = 7 - y = 7 - (-4) = 11$. Is $x > y$? Is $11 > -4$? Yes, this is true. This is our valid solution.

So we have $x = 11$ and $y = -4$.
The question asks for the value of $x^2 + y$.
$x^2 + y = (11)^2 + (-4) = 121 - 4 = 117$.

Thus, the correct answer is C.`
  },
  9: {
    id: 'A6-q9',
    text: 'A total of 10,890 balls are to be placed into baskets on a conveyor belt. There are six distinct types of baskets arranged in a repeating sequence: P, Q, R, S, T, U, P, Q, ... Each basket is filled with exactly 6 balls before the machine moves to the next basket type in the sequence. Into which type of basket will the very last ball be placed?',
    options: [
        { label: "A", text: "P" },
        { label: "B", text: "Q" },
        { label: "C", text: "R" },
        { label: "D", text: "S" },
        { label: "E", text: "T" }
    ],
    correctAnswer: 'C',
    explanation: `First, determine how many baskets are needed in total.
Total balls = 10,890
Balls per basket = 6
Total number of baskets = 10,890 / 6 = 1815.
This means exactly 1815 baskets are filled, and the last ball goes into the 1815th basket.

The sequence of basket types is P, Q, R, S, T, U, which has a cycle length of 6.
We need to find the type of the 1815th basket. To do this, we find the remainder when 1815 is divided by 6.
1815 mod 6
1800 is divisible by 6. So, 1815 mod 6 is the same as 15 mod 6.
15 ÷ 6 = 2 with a remainder of 3.

The mapping from remainder to basket type is:
- Remainder 1 -> 1st type -> P
- Remainder 2 -> 2nd type -> Q
- Remainder 3 -> 3rd type -> R
- Remainder 4 -> 4th type -> S
- Remainder 5 -> 5th type -> T
- Remainder 0 -> 6th type -> U

Since the remainder is 3, the 1815th basket is the 3rd type in the sequence, which is R.

Thus, the correct answer is C.`
  },
  10: {
    id: 'A6-q10',
    text: 'The product of all positive integers from 1 to 250, inclusive, that are multiples of 7 is equal to k. If k can be expressed in the form $a*10^n$, where a and n are integers, what is the maximum possible value of n?',
    options: [
        { label: "A", text: "4" },
        { label: "B", text: "7" },
        { label: "C", text: "8" },
        { label: "D", text: "35" },
        { label: "E", text: "40" }
    ],
    correctAnswer: 'C',
    explanation: `The value of k is the product of {7, 14, 21, ..., 245}.
The last multiple of 7 less than or equal to 250 is $7 \\times 35 = 245$.
So, k = $7 \\times 14 \\times 21 \\times ... \\times 245$.
We can factor out a 7 from each term:
k = $(7 \\cdot 1) \\times (7 \\cdot 2) \\times (7 \\cdot 3) \\times ... \\times (7 \\cdot 35)$.
There are 35 such terms. So we have $7^{35}$ multiplied by the product of the integers from 1 to 35.
k = $7^{35} \\times (1 \\cdot 2 \\cdot 3 \\cdot ... \\cdot 35) = 7^{35} \\times 35!$.

The value of n is the number of trailing zeros in k. The number of trailing zeros is determined by the number of factors of 10. Since $10 = 2 \\times 5$, we need to count the factors of 2 and 5. The smaller of these two counts will be n.
The term $7^{35}$ contributes no factors of 2 or 5. We only need to count the factors of 5 in 35!.
Number of factors of 5 in 35! = $\\lfloor\\frac{35}{5}\\rfloor + \\lfloor\\frac{35}{25}\\rfloor = 7 + 1 = 8$.
The number of factors of 2 is much larger, so the number of factors of 5 is the limiting factor.
There are 8 factors of 5, so we can form 8 pairs of (2x5), meaning there will be 8 trailing zeros.
Therefore, the maximum possible value of n is 8.

Thus, the correct answer is C.`
  },
  11: {
    id: 'A6-q11',
    text: 'Some of the people in Town X are left-handed, some are tall, some are both, and some are neither. In Town Y, three times as many people are left-handed as are left-handed in Town X, three times as many people are tall as are tall in Town X, three times as many people are both as are both in Town X, but no one is neither. If the total number of people in Town X is four times greater than the total number of people in Town Y, which of the following could be the number of people in Town X who are neither left-handed nor tall?',
    options: [
      { label: "A", text: "23" },
      { label: "B", text: "39" },
      { label: "C", text: "70" },
      { label: "D", text: "143" },
      { label: "E", text: "199" }
    ],
    correctAnswer: 'C',
    explanation: `Let L, T, B, N be the number of left-handed, tall, both, and neither people in Town X.
Total(X) = L + T - B + N.
For Town Y: L_y = 3L, T_y = 3T, B_y = 3B, N_y=0.
Total(Y) = L_y + T_y - B_y + N_y = 3L + 3T - 3B = 3(L + T - B).
The phrase "four times greater than" means Total(X) = Total(Y) + 4 * Total(Y) = 5 * Total(Y).
So, Total(X) = 5 * Total(Y).
Let K = L + T - B. This is the number of people in X with at least one trait.
Total(X) = K + N.
Total(Y) = 3K.
Substitute these into the relationship:
K + N = 5 * (3K)
K + N = 15K
N = 14K
This means N, the number of people in Town X who are neither, must be a multiple of 14.
Checking the options:
(A) 23 / 14 is not an integer.
(B) 39 / 14 is not an integer.
(C) 70 / 14 = 5. This is an integer.
(D) 143 / 14 is not an integer.
(E) 199 / 14 is not an integer.
The only possible value is 70.

Thus, the correct answer is C.`
  },
  12: {
    id: 'A6-q12',
    text: 'If there are 10 distinct points lying on the circumference of a circle, how many different triangles can be formed using these points as vertices?',
    options: [
      { label: "A", text: "30" },
      { label: "B", text: "90" },
      { label: "C", text: "120" },
      { label: "D", text: "240" },
      { label: "E", text: "720" }
    ],
    correctAnswer: 'C',
    explanation: `This is a combination problem. To form a triangle, we need to choose 3 distinct points from the available 10 points to serve as its vertices.
Since the order in which we choose the points does not matter, we use the combination formula: C(n, k) = n! / (k!(n-k)!).
Here, n = 10 (total points) and k = 3 (vertices for a triangle).
C(10, 3) = 10! / (3!(10-3)!)
C(10, 3) = 10! / (3!7!)
C(10, 3) = (10 × 9 × 8 × 7!) / ((3 × 2 × 1) × 7!)
C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1)
C(10, 3) = 10 × 3 × 4 = 120.

Thus, there are 120 different triangles that can be formed.

The correct answer is C.`
  }
};