import{a as e}from"./chunk-JKPGA2EE.js";import"./chunk-FW4363Y4.js";var i={1:{id:"A7-q1",text:"If r and s are positive integers, is (r-s) divisible by 3?",statements:["rs is divisible by 9","s is divisible by 3"],options:e,correctAnswer:"E",explanation:`The question asks if (r-s) is a multiple of 3.

**Statement (1):** rs is divisible by 9.
This tells us about the product of r and s.
- Case A: Let r=9, s=1. Then rs=9, which is divisible by 9. (r-s) = 9-1 = 8, which is not divisible by 3. (Answer: NO)
- Case B: Let r=3, s=3. Then rs=9, which is divisible by 9. (r-s) = 3-3 = 0, which is divisible by 3. (Answer: YES)
Since we get both YES and NO answers, Statement (1) ALONE is not sufficient.

**Statement (2):** s is divisible by 3.
This tells us s is a multiple of 3, but gives no information about r.
- Case A: Let s=3 and r=4. (r-s) = 4-3 = 1, which is not divisible by 3. (Answer: NO)
- Case B: Let s=3 and r=6. (r-s) = 6-3 = 3, which is divisible by 3. (Answer: YES)
Since we get both YES and NO answers, Statement (2) ALONE is not sufficient.

**Combining (1) and (2):**
We know s is a multiple of 3 (s = 3k for some integer k).
We also know rs is a multiple of 9. So r(3k) is a multiple of 9, which means rk is a multiple of 3.
This implies that either r is a multiple of 3, or k is a multiple of 3.
- Case A: Assume r is a multiple of 3. Then r=3m. (r-s) = 3m - 3k = 3(m-k), which is always divisible by 3. (Answer: YES)
- Case B: Assume r is NOT a multiple of 3. Then k must be a multiple of 3.
  Let r=1 (not a multiple of 3) and k=3. This makes s = 3k = 9.
  Let's check our conditions: s=9 is divisible by 3. rs = 1*9 = 9 is divisible by 9. The conditions hold.
  Now, is (r-s) divisible by 3? (1-9) = -8, which is not divisible by 3. (Answer: NO)
Since we can still get both YES and NO answers, the combined statements are NOT sufficient.

Thus, the correct answer is E.`},2:{id:"A7-q2",text:"From a group consisting of 5 Spaniards, 4 Germans, and 3 Frenchmen, a team is to be formed that includes exactly one Spaniard, one German, and one Frenchman. How many distinct teams can be formed?",options:[{label:"A",text:"12"},{label:"B",text:"60"},{label:"C",text:"120"},{label:"D",text:"360"},{label:"E",text:"720"}],correctAnswer:"D",explanation:`This problem involves two stages: selection and arrangement, as the term "distinct teams" can imply that the roles or order within the team matter.

1.  **Selection (Combination):** First, we need to choose one person from each nationality.
    -   Number of ways to choose 1 Spaniard from 5: $^5C_1 = 5$
    -   Number of ways to choose 1 German from 4: $^4C_1 = 4$
    -   Number of ways to choose 1 Frenchman from 3: $^3C_1 = 3$
    The total number of combinations of 3 people (one from each country) is \\$5 \\times 4 \\times 3 = 60$.

2.  **Arrangement (Permutation):** If the roles within the team are distinct (e.g., team captain, navigator, etc.), or if the order of selection creates a distinct team, we must arrange the 3 chosen people.
    -   Number of ways to arrange 3 people: \\$3! = 3 \\times 2 \\times 1 = 6$.

Total number of distinct teams = (Number of combinations) $\\times$ (Number of arrangements)
Total = \\$60 \\times 6 = 360$.

Thus, there are 360 distinct teams that can be formed.`},3:{id:"A7-q3",text:"A set consists of five positive integers. The arithmetic mean of the five integers is 10, the median is 12, and the mode is 15. Which of the following integers could be members of the set?",romanNumerals:{I:"1",II:"9",III:"13"},options:[{label:"A",text:"I only"},{label:"B",text:"II only"},{label:"C",text:"I and II only"},{label:"D",text:"I and III only"},{label:"E",text:"All of the above"}],correctAnswer:"A",explanation:`Let the set of five positive integers be \${a, b, c, d, e}$ arranged in ascending order, so $a le b le c le d le e$.

1.  **Mean is 10:** The sum of the five integers is \\$5 \\times 10 = 50$.
    $a + b + c + d + e = 50$.

2.  **Median is 12:** The middle number is 12, so $c = 12$.

3.  **Mode is 15:** The number that appears most frequently is 15. Since the median is 12, the mode (15) must appear in the upper half of the set. For it to be the mode, it must appear more than any other number. This means at least two numbers must be 15. Therefore, $d = 15$ and $e = 15$.

Now we have the set \${a, b, 12, 15, 15}$, with the conditions that $a$ and $b$ are positive integers and $a le b le 12$.

Substitute the known values into the sum equation:
$a + b + 12 + 15 + 15 = 50$
$a + b + 42 = 50$
$a + b = 8$.

We need to find possible pairs of positive integers $(a, b)$ such that $a+b=8$ and $a le b le 12$.
Possible pairs are:
-   (1, 7)
-   (2, 6)
-   (3, 5)
-   (4, 4)
All these pairs satisfy the condition $a le b le 12$.

Now let's check the given Roman numerals:
I.  Could **1** be a member? Yes, if the set is \${1, 7, 12, 15, 15}$.
II. Could **9** be a member? No. The only unknown members are $a$ and $b$, which must sum to 8. The largest possible value for $b$ is 7 (when $a=1$). So 9 cannot be in the set.
III. Could **13** be a member? No. The members greater than the median (12) are $d$ and $e$, which are both 15.

Therefore, only I could be a member of the set.

Thus, the correct answer is A.`},4:{id:"A7-q4",text:"In a certain company, the ratio of the number of men to the number of women is 3 to 5. The employees are divided into two groups, A and B, having an equal number of employees. If the ratio of men to women in Group A is 5 to 7, what is the ratio of men to women in Group B?",options:[{label:"A",text:"1:1"},{label:"B",text:"1:2"},{label:"C",text:"2:3"},{label:"D",text:"3:4"},{label:"E",text:"4:5"}],correctAnswer:"B",explanation:`Let the total number of employees be a number divisible by the denominators of the ratios to avoid fractions.
Total men-to-women ratio is 3:5 (8 parts).
Group A ratio is 5:7 (12 parts).
The two groups A and B are equal in size.
Let the total number of employees in each group be the LCM of 8 and 12, which is 24. Let's set the size of Group A = Group B = 24.
Total employees in the company = 24 (Group A) + 24 (Group B) = 48.

1.  **Calculate total men and women in the company:**
    Total ratio parts = 3 + 5 = 8.
    Total men = $(3/8) \\times 48 = 18$.
    Total women = $(5/8) \\times 48 = 30$.

2.  **Calculate men and women in Group A:**
    Group A ratio parts = 5 + 7 = 12.
    Group A size = 24.
    Men in Group A = $(5/12) \\times 24 = 10$.
    Women in Group A = $(7/12) \\times 24 = 14$.

3.  **Calculate men and women in Group B:**
    Men in Group B = Total men - Men in Group A = \\$18 - 10 = 8$.
    Women in Group B = Total women - Women in Group A = \\$30 - 14 = 16$.

4.  **Find the ratio of men to women in Group B:**
    Ratio = Men in Group B : Women in Group B = 8 : 16.
    Simplifying the ratio by dividing both sides by 8 gives 1 : 2.

Thus, the correct answer is B.`},5:{id:"A7-q5",text:"In sequence $S$, the first two terms are $S_1 = S_2 = 3$, and the recursive formula is $S_n = \\left(\\frac{S_{n-1}}{S_{n-2}}\\right)^2$. What is the value of $S_6$?",options:[{label:"A",text:"1"},{label:"B",text:"$\\frac{1}{3}$"},{label:"C",text:"$\\frac{1}{9}$"},{label:"D",text:"$\\frac{1}{27}$"},{label:"E",text:"$\\frac{1}{81}$"}],correctAnswer:"E",explanation:`We are given the sequence definition:
$S_1 = 3$
$S_2 = 3$
$S_n = \\left(\\frac{S_{n-1}}{S_{n-2}}\\right)^2$ for $n > 2$.

We need to calculate the terms up to $S_6$:
-   $S_3 = \\left(\\frac{S_2}{S_1}\\right)^2 = \\left(\\frac{3}{3}\\right)^2 = 1^2 = 1$.
-   $S_4 = \\left(\\frac{S_3}{S_2}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$.
-   $S_5 = \\left(\\frac{S_4}{S_3}\\right)^2 = \\left(\\frac{1/9}{1}\\right)^2 = \\left(\\frac{1}{9}\\right)^2 = \\frac{1}{81}$.
-   $S_6 = \\left(\\frac{S_5}{S_4}\\right)^2 = \\left(\\frac{1/81}{1/9}\\right)^2 = \\left(\\frac{1}{81} \\times 9\\right)^2 = \\left(\\frac{1}{9}\\right)^2 = \\frac{1}{81}$.

The value of $S_6$ is $\\frac{1}{81}$.

Thus, the correct answer is E.`},6:{id:"A7-q6",text:"Is st < 0?",statements:["$s^2t^3 < 0$","$|s+t| < |s| + |t|$"],options:e,correctAnswer:"B",explanation:`The question asks if s and t have opposite signs.

**Statement (1):** $s^2t^3 < 0$.
The term $s^2$ is always non-negative (i.e., $ge 0$). Since the product is negative, $s^2$ cannot be zero, so $s \\neq 0$ and $s^2$ must be positive.
For a positive number ($s^2$) multiplied by $t^3$ to be negative, $t^3$ must be negative.
If $t^3 < 0$, then $t$ must be negative ($t < 0$).
This statement tells us that $t$ is negative, but it gives no information about the sign of $s$ (s could be positive or negative, as long as it's not zero).
- If $s > 0$ and $t < 0$, then $st < 0$. (Answer: YES)
- If $s < 0$ and $t < 0$, then $st > 0$. (Answer: NO)
Statement (1) ALONE is not sufficient.

**Statement (2):** $|s+t| < |s| + |t|$.
This is the strict form of the triangle inequality.
The equality $|s+t| = |s| + |t|$ holds if and only if $s$ and $t$ have the same sign (or one or both are zero).
The strict inequality $|s+t| < |s| + |t|$ holds if and only if $s$ and $t$ have opposite signs.
Therefore, this statement directly tells us that $st < 0$.
Statement (2) ALONE is sufficient.

Thus, the correct answer is B.`},7:{id:"A7-q7",text:"Three identical machines, working together at their respective constant rates, can complete a certain job in 120 minutes. How many of these machines are required to complete two such jobs in 80 minutes?",options:[{label:"A",text:"6"},{label:"B",text:"8"},{label:"C",text:"9"},{label:"D",text:"12"},{label:"E",text:"18"}],correctAnswer:"C",explanation:`Let R be the rate of one machine (in jobs per minute).
Let W be the amount of work for one job. We can set W = 1 job.

1.  **Find the rate of one machine:**
    Work = Rate $\\times$ Time $\\times$ Number of Machines
    1 job = R $\\times$ 120 minutes $\\times$ 3 machines
    1 = R $\\times$ 360
    R = $\\frac{1}{360}$ jobs per minute.

2.  **Calculate the number of machines needed for the new task:**
    Let M be the required number of machines.
    Work needed = 2 jobs
    Time available = 80 minutes
    Work = Rate $\\times$ Time $\\times$ Number of Machines
    2 jobs = ($\\frac{1}{360}$ jobs/min) $\\times$ 80 minutes $\\times$ M
    2 = $\\frac{80}{360} \\times M$
    2 = $\\frac{8}{36} \\times M$
    2 = $\\frac{2}{9} \\times M$
    $M = 2 \\times \\frac{9}{2}$
    $M = 9$.

    Therefore, 9 machines are required.

    Thus, the correct answer is C.`},8:{id:"A7-q8",text:"Person A traveled a distance of 80 miles at an average speed of x miles per hour, taking (y-3) hours to complete the trip. Person B traveled the same distance of 80 miles at an average speed of (x-4) miles per hour, taking (y-2) hours to complete the trip. What is the ratio of A's average speed to B's average speed?",options:[{label:"A",text:"4:3"},{label:"B",text:"3:2"},{label:"C",text:"5:3"},{label:"D",text:"5:4"},{label:"E",text:"6:5"}],correctAnswer:"D",explanation:`We are given two scenarios based on the formula Distance = Speed $\\times$ Time.

1.  **Person A:**
    \\$80 = x(y-3)$  (Equation 1)

2.  **Person B:**
    \\$80 = (x-4)(y-2)$ (Equation 2)

We need to find the ratio of A's speed to B's speed, which is $\\frac{x}{x-4}$.

From the equations, we can set the right-hand sides equal to each other:
$x(y-3) = (x-4)(y-2)$
$xy - 3x = xy - 2x - 4y + 8$
$-3x = -2x - 4y + 8$
$-x = -4y + 8$
$x = 4y - 8$

Now substitute this expression for $x$ back into Equation 1:
\\$80 = (4y-8)(y-3)$
\\$80 = 4(y-2)(y-3)$
\\$20 = (y-2)(y-3)$
\\$20 = y^2 - 5y + 6$
$y^2 - 5y - 14 = 0$

Factor the quadratic equation:
$(y-7)(y+2) = 0$
Since time must be positive (y-3 > 0), we must have $y > 3$. So, $y=7$.

Now find the value of x:
$x = 4y - 8 = 4(7) - 8 = 28 - 8 = 20$.

A's speed is $x = 20$ mph.
B's speed is $x-4 = 20-4 = 16$ mph.

The ratio of A's speed to B's speed is \\$20:16$, which simplifies to \\$5:4$.

Thus, the correct answer is D.`},9:{id:"A7-q9",text:"Of a total shipment of porcelain pieces, $\\frac{1}{3}$ were chipped, $\\frac{2}{3}$ were cracked, and $\\frac{1}{6}$ were both chipped and cracked. If 150 pieces were neither chipped nor cracked, what was the total number of pieces in the shipment?",options:[{label:"A",text:"300"},{label:"B",text:"450"},{label:"C",text:"600"},{label:"D",text:"750"},{label:"E",text:"900"}],correctAnswer:"E",explanation:`Let T be the total number of pieces in the shipment.
Let C be the fraction of chipped pieces, and K be the fraction of cracked pieces.
Given:
-   Fraction Chipped, $P(C) = 1/3$
-   Fraction Cracked, $P(K) = 2/3$
-   Fraction Both, $P(C \\cap K) = 1/6$

The fraction of pieces that were either chipped OR cracked (or both) is given by the inclusion-exclusion principle:
$P(C \\cup K) = P(C) + P(K) - P(C \\cap K)$
$P(C \\cup K) = \\frac{1}{3} + \\frac{2}{3} - \\frac{1}{6}$
$P(C \\cup K) = 1 - \\frac{1}{6} = \\frac{5}{6}$

This means 5/6 of the total shipment had at least one defect.
The fraction of pieces with NEITHER defect is the remainder:
Fraction Neither = \\$1 - P(C \\cup K) = 1 - \\frac{5}{6} = \\frac{1}{6}$.

We are given that 150 pieces were neither chipped nor cracked.
So, $(\\frac{1}{6}) \\times T = 150$.
$T = 150 \\times 6 = 900$.

The total number of pieces in the shipment was 900.

Thus, the correct answer is E.`},10:{id:"A7-q10",text:"How many tons of a 10% salt solution must be added to 300 tons of a 15% salt solution to create a resulting solution that is 12% salt by weight?",options:[{label:"A",text:"150"},{label:"B",text:"300"},{label:"C",text:"450"},{label:"D",text:"600"},{label:"E",text:"750"}],correctAnswer:"C",explanation:`Let x be the number of tons of the 10% salt solution to be added.

The principle of mixtures states that the total amount of solute (salt) in the initial solutions must equal the total amount of solute in the final mixture.

1.  **Salt from the 10% solution:** \\$0.10 \\times x$
2.  **Salt from the 15% solution:** \\$0.15 \\times 300 = 45$ tons.
3.  **Total solution weight after mixing:** $x + 300$ tons.
4.  **Total salt in the final 12% solution:** \\$0.12 \\times (x + 300)$

Now, set up the equation:
(Salt from 10% solution) + (Salt from 15% solution) = (Salt in final solution)
\\$0.10x + 45 = 0.12(x + 300)$
\\$0.10x + 45 = 0.12x + 36$

Subtract \\$0.10x$ from both sides:
\\$45 = 0.02x + 36$

Subtract 36 from both sides:
\\$9 = 0.02x$

Solve for x:
$x = \\frac{9}{0.02} = \\frac{9}{2/100} = 9 \\times 50 = 450$.

Therefore, 450 tons of the 10% solution must be added.

Thus, the correct answer is C.`},11:{id:"A7-q11",text:"How many distinct real solutions does the equation $x^4 - 2x^3 + x^2 = 0$ have?",options:[{label:"A",text:"0"},{label:"B",text:"1"},{label:"C",text:"2"},{label:"D",text:"3"},{label:"E",text:"4"}],correctAnswer:"C",explanation:`The given equation is $x^4 - 2x^3 + x^2 = 0$.

First, we can factor out the greatest common factor, which is $x^2$:
$x^2(x^2 - 2x + 1) = 0$.

Next, we recognize that the expression in the parentheses is a perfect square trinomial: $a^2 - 2ab + b^2 = (a-b)^2$.
In this case, $a=x$ and $b=1$.
So, $x^2 - 2x + 1 = (x-1)^2$.

The equation becomes:
$x^2(x-1)^2 = 0$.

To find the solutions, we set each factor equal to zero:
1.  $x^2 = 0 \\implies x = 0$. This is a real solution (with multiplicity 2).
2.  $(x-1)^2 = 0 \\implies x - 1 = 0 \\implies x = 1$. This is a real solution (with multiplicity 2).

The distinct (unique) real solutions are $x=0$ and $x=1$.
Therefore, the equation has 2 distinct real solutions.

Thus, the correct answer is C.`},12:{id:"A7-q12",text:"A taxi fare consists of a base charge of \\$6.00, a distance charge of \\$0.90 for each 0.2 kilometers traveled, and a waiting charge of \\$0.60 per minute spent stopped in traffic. If a certain 5-kilometer trip took a total of 20 minutes, during which 30 percent of the time was spent stopped in traffic, what was the total fare for the trip?",options:[{label:"A",text:"\\$29.10"},{label:"B",text:"\\$31.50"},{label:"C",text:"\\$32.10"},{label:"D",text:"\\$33.60"},{label:"E",text:"\\$35.70"}],correctAnswer:"C",explanation:`Let's break down the total fare into its three components: base charge, distance charge, and waiting charge.

1.  **Base Charge:**
    The base charge is given as \\$6.00.

2.  **Distance Charge:**
    -   Total distance = 5 km.
    -   Rate = \\$0.90 per 0.2 km.
    -   First, find the number of 0.2 km units in the trip: $\\frac{5 \\text{ km}}{0.2 \\text{ km}} = 25$ units.
    -   Total distance charge = (Number of units) $\\times$ (Rate per unit) = \\$25 \\times \\$0.90 = \\$22.50$.

3.  **Waiting Charge:**
    -   Total trip time = 20 minutes.
    -   Time spent stopped = 30% of total time = \\$0.30 \\times 20$ minutes = 6 minutes.
    -   Rate = \\$0.60 per minute.
    -   Total waiting charge = (Minutes stopped) $\\times$ (Rate per minute) = \\$6 \\times \\$0.60 = \\$3.60$.

4.  **Total Fare:**
    Total Fare = Base Charge + Distance Charge + Waiting Charge
    Total Fare = \\$6.00 + \\$22.50 + \\$3.60
    Total Fare = \\$32.10.

    The total fare for the trip was \\$32.10.

    Thus, the correct answer is C.`}};export{i as EXAM_A7_QUESTIONS};
//# sourceMappingURL=A7-R5AROZVW.js.map
