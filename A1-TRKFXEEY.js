import{a as e}from"./chunk-JKPGA2EE.js";import"./chunk-FW4363Y4.js";var t=[{label:"A",text:"I. only"},{label:"B",text:"I. & II. only"},{label:"C",text:"II. & III. only"},{label:"D",text:"All of the above"},{label:"E",text:"None of the above"}],s={1:{id:"A1-q1",text:"If $x$ and $y$ are positive integers, is $x+y$ even?",statements:["\\$3x+5y$ is even","$(x+1)^2(y+1)^2$ is even"],options:e,correctAnswer:"A",explanation:`**Statement (1):** \\$3x + 5y$ is even.
      *   If $x$ is even and $y$ is even: \\$3(\\text{even}) + 5(\\text{even}) = \\text{even} + \\text{even} = \\text{even}$. ($x+y = \\text{even}+\\text{even} = \\text{even}$)
      *   If $x$ is odd and $y$ is odd: \\$3(\\text{odd}) + 5(\\text{odd}) = \\text{odd} + \\text{odd} = \\text{even}$. ($x+y = \\text{odd}+\\text{odd} = \\text{even}$)
      *   If $x$ is even and $y$ is odd: \\$3(\\text{even}) + 5(\\text{odd}) = \\text{even} + \\text{odd} = \\text{odd}$. (Does not satisfy statement)
      *   If $x$ is odd and $y$ is even: \\$3(\\text{odd}) + 5(\\text{even}) = \\text{odd} + \\text{even} = \\text{odd}$. (Does not satisfy statement)
      Therefore, for \\$3x + 5y$ to be even, $x$ and $y$ must have the same parity (both even or both odd). If $x$ and $y$ have the same parity, their sum $x+y$ is always even. Statement (1) ALONE is sufficient.

      **Statement (2):** $(x+1)^2(y+1)^2$ is even.
      This implies that $(x+1)(y+1)$ is even. For a product of two integers to be even, at least one of the integers must be even. So, either $(x+1)$ is even, or $(y+1)$ is even, or both are even.
      *   If $(x+1)$ is even, then $x$ is odd.
      *   If $(y+1)$ is even, then $y$ is odd.
      Case 1: $x$ is odd, $y$ is even. ($x+1$ is even, $y+1$ is odd). ($x+y = \\text{odd}+\\text{even} = \\text{odd}$)
      Case 2: $x$ is even, $y$ is odd. ($x+1$ is odd, $y+1$ is even). ($x+y = \\text{even}+\\text{odd} = \\text{odd}$)
      Case 3: $x$ is odd, $y$ is odd. ($x+1$ is even, $y+1$ is even). ($x+y = \\text{odd}+\\text{odd} = \\text{even}$)
      Since $x+y$ can be either odd or even, Statement (2) ALONE is NOT sufficient.

      Thus, the correct answer is A.`},2:{id:"A1-q2",text:"If $k$ is a positive integer, what is the remainder when $k^2$ is divided by \\$8$?",statements:["The remainder when $k$ is divided by \\$2$ is \\$1$.","The remainder when $k$ is divided by \\$3$ is \\$2$."],options:e,correctAnswer:"A",explanation:`**Statement (1):** The remainder when $k$ is divided by \\$2$ is \\$1$.
      This means $k$ is an odd integer. We can represent $k$ as $(2n + 1)$ for some integer $n$.
      Then $k^2 = (2n + 1)^2 = 4n^2 + 4n + 1 = 4n(n + 1) + 1$.
      Since $n$ and $(n + 1)$ are consecutive integers, one of them must be even. Therefore, $n(n + 1)$ is always an even integer. Let $n(n + 1) = 2m$ for some integer $m$.
      So, $k^2 = 4(2m) + 1 = 8m + 1$.
      This shows that when $k^2$ is divided by \\$8$, the remainder is always \\$1$. Statement (1) ALONE is sufficient.

      **Statement (2):** The remainder when $k$ is divided by \\$3$ is \\$2$.
      Possible values for $k$ are: \\$2, 5, 8, 11, \\dots$
      *   If $k = 2$, then $k^2 = 4$. When \\$4$ is divided by \\$8$, the remainder is \\$4$.
      *   If $k = 5$, then $k^2 = 25$. When \\$25$ is divided by \\$8$, the remainder is \\$1$ (\\$25 = 3 \\times 8 + 1$).
      Since we get different remainders (\\$4$ and \\$1$), Statement (2) ALONE is NOT sufficient.

      Thus, the correct answer is A.`},3:{id:"A1-q3",text:"If \\$2 < x < y < 13$, what is the value of $xy$?",statements:["$x$ and $y$ are prime numbers","$x + y > 12$"],options:e,correctAnswer:"E",explanation:`Given that $x$ and $y$ are integers and \\$2 < x < y < 13$. This means $x$ and $y$ can be any integers from \\$3$ to \\$12$, with $x < y$.

      **Statement (1):** $x$ and $y$ are prime numbers.
      The prime numbers between \\$2$ and \\$13$ are \${3, 5, 7, 11}$.
      Possible pairs $(x, y)$ with $x < y$:
      *   $(3, 5) \\Rightarrow xy = 15$
      *   $(3, 7) \\Rightarrow xy = 21$
      *   $(3, 11) \\Rightarrow xy = 33$
      *   $(5, 7) \\Rightarrow xy = 35$
      *   $(5, 11) \\Rightarrow xy = 55$
      *   $(7, 11) \\Rightarrow xy = 77$
      Since there are multiple possible values for $xy$, Statement (1) ALONE is NOT sufficient.

      **Statement (2):** $x + y > 12$.
      Consider integers between \\$3$ and \\$12$ with $x < y$.
      *   If $x=3, y=10 \\Rightarrow x+y=13 > 12$. $xy = 30$.
      *   If $x=4, y=9 \\Rightarrow x+y=13 > 12$. $xy = 36$.
      *   If $x=5, y=8 \\Rightarrow x+y=13 > 12$. $xy = 40$.
      *   If $x=5, y=9 \\Rightarrow x+y=14 > 12$. $xy = 45$.
      Since there are multiple possible values for $xy$, Statement (2) ALONE is NOT sufficient.

      **Combining Statement (1) and Statement (2):**
      $x$ and $y$ are prime numbers from \${3, 5, 7, 11}$, and $x + y > 12$.
      Let's check the pairs from Statement (1) that also satisfy $x + y > 12$:
      *   $(3, 5) \\Rightarrow x+y = 8$ (Not $> 12$)
      *   $(3, 7) \\Rightarrow x+y = 10$ (Not $> 12$)
      *   $(3, 11) \\Rightarrow x+y = 14$ ($> 12$). So $xy = 33$.
      *   $(5, 7) \\Rightarrow x+y = 12$ (Not $> 12$)
      *   $(5, 11) \\Rightarrow x+y = 16$ ($> 12$). So $xy = 55$.
      *   $(7, 11) \\Rightarrow x+y = 18$ ($> 12$). So $xy = 77$.
      We still have multiple possible values for $xy$ (\\$33, 55, 77$). Therefore, even with both statements, we cannot determine a unique value for $xy$.

      Thus, the correct answer is E.`},4:{id:"A1-q4",text:"A set consists of \\$26$ distinct English letters, which are comprised of \\$21$ consonants and \\$5$ vowels. If \\$3$ distinct letters are chosen from this set, what is the number of possible combinations of these \\$3$ letters that contain at least two vowels?",options:[{label:"A",text:"210"},{label:"B",text:"220"},{label:"C",text:"455"},{label:"D",text:"1,540"},{label:"E",text:"2,600"}],correctAnswer:"B",explanation:`Total letters = \\$26$. Consonants = \\$21$. Vowels = \\$5$.
      We need to choose \\$3$ distinct letters such that they contain at least two vowels. This means two cases:

      **Case 1: Exactly \\$2$ Vowels and \\$1$ Consonant**
      Number of ways to choose \\$2$ vowels from \\$5 = {^5C_2} = \\frac{5 \\times 4}{2 \\times 1} = 10$ ways.
      Number of ways to choose \\$1$ consonant from \\$21 = {^{21}C_1} = 21$ ways.
      Total combinations for Case 1 = \\$10 \\times 21 = 210$.

      **Case 2: Exactly \\$3$ Vowels and \\$0$ Consonants**
      Number of ways to choose \\$3$ vowels from \\$5 = {^5C_3} = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$ ways.
      Number of ways to choose \\$0$ consonants from \\$21 = {^{21}C_0} = 1$ way.
      Total combinations for Case 2 = \\$10 \\times 1 = 10$.

      Total combinations with at least two vowels = Case 1 + Case 2 = \\$210 + 10 = 220$.

      Thus, the correct answer is B.`},5:{id:"A1-q5",text:"A coin is biased such that the probability of landing heads is not $\\frac{1}{2}$. What is the probability that two consecutive tosses of this coin will both land heads?",statements:["The probability of landing heads on a single toss is $\\frac{1}{3}$.","The probability of landing exactly one head in two tosses is $\\frac{2}{9}$."],options:e,correctAnswer:"A",explanation:`Let $P(H)$ be the probability of landing heads on a single toss, and $P(T)$ be the probability of landing tails on a single toss. We know $P(T) = 1 - P(H)$.
      We want to find the probability that two consecutive tosses will both land heads, which is $P(H) \\times P(H) = P(H)^2$.

      **Statement (1):** The probability of landing heads on a single toss is $\\frac{1}{3}$.
      So, $P(H) = \\frac{1}{3}$.
      Then, $P(H)^2 = (\\frac{1}{3})^2 = \\frac{1}{9}$.
      This statement provides a unique value for the probability. Statement (1) ALONE is sufficient.

      **Statement (2):** The probability of landing exactly one head in two tosses is $\\frac{2}{9}$.
      This means $P(HT) + P(TH) = \\frac{2}{9}$.
      $P(H) \\times P(T) + P(T) \\times P(H) = \\frac{2}{9}$.
      \\$2 \\times P(H) \\times P(T) = \\frac{2}{9}$.
      Substitute $P(T) = 1 - P(H)$:
      $P(H) \\times (1 - P(H)) = \\frac{1}{9}$.
      $P(H) - P(H)^2 = \\frac{1}{9}$.
      Multiply by \\$9$: \\$9P(H) - 9P(H)^2 = 1$.
      Rearrange into a quadratic equation: \\$9P(H)^2 - 9P(H) + 1 = 0$.
      This quadratic equation does not factor easily with integers. Using the quadratic formula:
      $P(H) = \\frac{-(-9) \\pm \\sqrt{(-9)^2 - 4(9)(1)}}{2(9)} = \\frac{9 \\pm \\sqrt{81 - 36}}{18} = \\frac{9 \\pm \\sqrt{45}}{18}$.
      This gives two possible values for $P(H)$:
      $P(H) = \\frac{9 + \\sqrt{45}}{18}$ and $P(H) = \\frac{9 - \\sqrt{45}}{18}$.

      Since there are two possible values for $P(H)$, there are two possible values for the required probability $P(H)^2$.
      Therefore, Statement (2) ALONE is NOT sufficient.

      Thus, the correct answer is A.`},6:{id:"A1-q6",text:"If \\$0 < x < z < y < 1$, for which of the following expressions will the value decrease when $y$ is replaced by $x$?",romanNumerals:{I:"$z - y$",II:"$\\frac{z}{y}$",III:"$\\frac{1}{z - \\frac{z}{y}}$"},options:t,correctAnswer:"E",explanation:`Given the inequality \\$0 < x < z < y < 1$. When $y$ is replaced by $x$, a larger value ($y$) is substituted with a smaller value ($x$).

      **I. $z - y$**
      Original value: $z - y$
      New value ($y$ replaced by $x$): $z - x$
      Since $x < y$, then $-x > -y$.
      Therefore, $z - x > z - y$.
      The value **increases**.

      **II. $\\frac{z}{y}$**
      Original value: $\\frac{z}{y}$
      New value ($y$ replaced by $x$): $\\frac{z}{x}$
      Since $x < y$, then $\\frac{1}{x} > \\frac{1}{y}$.
      Since $z$ is positive ($z > 0$), multiplying by $z$ maintains the inequality: $\\frac{z}{x} > \\frac{z}{y}$.
      The value **increases**.

      **III. $\\frac{1}{z - \\frac{z}{y}}$**
      Let's analyze the denominator first: $z - \\frac{z}{y} = z(1 - \\frac{1}{y})$.
      When $y$ is replaced by $x$, the new denominator is: $z(1 - \\frac{1}{x})$.
      Since $x < y$, then $\\frac{1}{x} > \\frac{1}{y}$.
      Therefore, \\$1 - \\frac{1}{x} < 1 - \\frac{1}{y}$.
      Since $z$ is positive, $z(1 - \\frac{1}{x}) < z(1 - \\frac{1}{y})$.
      This means the new denominator is smaller than the original denominator.
      When the denominator of a positive fraction decreases, the value of the fraction **increases**. (Note: $z - \\frac{z}{y}$ must be positive. Since $z < y$, $\\frac{z}{y} < 1$, so \\$1 - \\frac{z}{y} > 0$. Since $z > 0$, the denominator is positive.)

      In all three expressions, the value increases when $y$ is replaced by $x$. Therefore, none of the expressions decrease.

      Thus, the correct answer is E.`},7:{id:"A1-q7",text:"If $a^2-b^2=-21$, what is the value of $a^4-b^4$?",statements:["$a+b=-3$","$a-b=7$"],options:e,correctAnswer:"D",explanation:`We are given $a^2 - b^2 = -21$. We want to find the value of $a^4 - b^4$.
      We know that $a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)$.
      Since $a^2 - b^2 = -21$ is given in the question stem, we need to find the value of $(a^2 + b^2)$ to determine $a^4 - b^4$.
      Also, we know that $a^2 - b^2 = (a + b)(a - b)$. So, $(a + b)(a - b) = -21$.

      **Statement (1):** $a + b = -3$.
      Substitute this into $(a + b)(a - b) = -21$:
      $(-3)(a - b) = -21$.
      $a - b = 7$.
      Now we have a system of two linear equations:
      1) $a + b = -3$
      2) $a - b = 7$
      Adding (1) and (2): \\$2a = 4 \\Rightarrow a = 2$.
      Subtracting (2) from (1): \\$2b = -10 \\Rightarrow b = -5$.
      With $a = 2$ and $b = -5$, we can find $a^2 + b^2 = (2)^2 + (-5)^2 = 4 + 25 = 29$.
      Then $a^4 - b^4 = (a^2 - b^2)(a^2 + b^2) = (-21)(29) = -609$.
      Since we can find a unique value, Statement (1) ALONE is sufficient.

      **Statement (2):** $a - b = 7$.
      Substitute this into $(a + b)(a - b) = -21$:
      $(a + b)(7) = -21$.
      $a + b = -3$.
      This also leads to the same system of equations as in Statement (1):
      1) $a + b = -3$
      2) $a - b = 7$
      Which yields $a = 2$ and $b = -5$, and thus $a^2 + b^2 = 29$.
      So $a^4 - b^4 = (-21)(29) = -609$.
      Since we can find a unique value, Statement (2) ALONE is sufficient.

      Since EACH statement ALONE is sufficient, the correct answer is D.`},8:{id:"A1-q8",text:"Four dice are rolled simultaneously. Do at least two of the four dice show the same number?",statements:["The sum of the numbers shown on the four dice is \\$15$.","The product of the numbers shown on the four dice is \\$120$."],options:e,correctAnswer:"C",explanation:`We need to determine if at least two of the four dice show the same number. This is equivalent to asking: Are the four numbers NOT all distinct?
      If the four numbers are all distinct, they must be four different numbers from \${1, 2, 3, 4, 5, 6}$.

      **Statement (1):** The sum of the numbers shown on the four dice is \\$15$.
      Let the four distinct numbers be $d_1, d_2, d_3, d_4$.
      The minimum sum of four distinct numbers from a die is \\$1+2+3+4 = 10$.
      The maximum sum of four distinct numbers from a die is \\$3+4+5+6 = 18$.
      A sum of \\$15$ is possible with distinct numbers (e.g., \\$1+2+6+6$ is not distinct, but \\$1+3+5+6 = 15$ is distinct. Another distinct set is \\$2+3+4+6=15$).
      *   Example with distinct numbers: \${1, 3, 5, 6}$. Sum = \\$15$. (Answer to question: NO, numbers are distinct)
      *   Example with non-distinct numbers: \${2, 3, 5, 5}$. Sum = \\$15$. (Answer to question: YES, at least two are the same)
      Since we can have both scenarios, Statement (1) ALONE is NOT sufficient.

      **Statement (2):** The product of the numbers shown on the four dice is \\$120$.
      Let's find sets of four numbers (from \\$1$ to \\$6$) whose product is \\$120$.
      *   If the numbers are distinct: \\$1 \\times 2 \\times 3 \\times 4 = 24$; \\$1 \\times 2 \\times 3 \\times 5 = 30$; \\$1 \\times 2 \\times 3 \\times 6 = 36$; \\$1 \\times 2 \\times 4 \\times 5 = 40$; \\$1 \\times 2 \\times 4 \\times 6 = 48$; \\$1 \\times 2 \\times 5 \\times 6 = 60$; \\$1 \\times 3 \\times 4 \\times 5 = 60$; \\$1 \\times 3 \\times 4 \\times 6 = 72$; \\$1 \\times 3 \\times 5 \\times 6 = 90$; \\$1 \\times 4 \\times 5 \\times 6 = 120$. So \${1, 4, 5, 6}$ is a set of distinct numbers with product \\$120$. (Answer to question: NO, numbers are distinct)
      *   Can we find a set with repeated numbers that also product \\$120$?
          *   Possible sets with repeated numbers: \${2, 2, 5, 6} \\Rightarrow 2 \\times 2 \\times 5 \\times 6 = 120$. (Answer to question: YES, at least two are the same)
      Since we can have both scenarios, Statement (2) ALONE is NOT sufficient.

      **Combining Statement (1) and Statement (2):**
      We need four numbers whose sum is \\$15$ AND whose product is \\$120$.
      Case A: Numbers are distinct.
      The only set of distinct numbers from \${1, \\dots, 6}$ whose product is \\$120$ is \${1, 4, 5, 6}$.
      Let's check their sum: \\$1 + 4 + 5 + 6 = 16$. This does NOT satisfy the sum = \\$15$ condition.
      Therefore, the four numbers CANNOT be distinct.
      Case B: Numbers are not distinct (at least two are the same).
      We found \${2, 3, 5, 5}$ sum \\$15$, product \\$150$ (not \\$120$).
      We need to find a set of non-distinct numbers whose sum is \\$15$ and product is \\$120$.
      Let's check combinations:
      *   \${2, 2, 5, 6} \\Rightarrow \\text{Sum} = 2+2+5+6 = 15$. $\\text{Product} = 2 \\times 2 \\times 5 \\times 6 = 120$. This set satisfies both conditions, and it contains repeated numbers (\\$2$ and \\$5$).
      Since the only numbers that satisfy both conditions must be non-distinct, the answer to the question "Do at least two of the four dice show the same number?" is definitively YES.
      Therefore, Statement (1) and (2) TOGETHER are sufficient.

      Thus, the correct answer is C.`},9:{id:"A1-q9",text:"What is the value of \\$2^{2^3} - 2^{3^2}$?",options:[{label:"A",text:"$-2^8$"},{label:"B",text:"$-2^9$"},{label:"C",text:"\\$2^8$"},{label:"D",text:"\\$2^9$"},{label:"E",text:"\\$1$"}],correctAnswer:"A",explanation:`Let's evaluate each term of the expression:
      *   \\$2^{2^3} = 2^8$ (since \\$2^3 = 8$)
      *   \\$2^{3^2} = 2^9$ (since \\$3^2 = 9$)

      So the expression becomes:
      \\$2^8 - 2^9$.

      To simplify this, we can factor out the common term \\$2^8$:
      \\$2^8 - 2^9 = 2^8 - (2^8 \\times 2^1)$
                $= 2^8 \\times (1 - 2)$
                $= 2^8 \\times (-1)$
                $= -2^8$.

      Thus, the correct answer is A.`},10:{id:"A1-q10",text:"$(2.5^2 - 1.5^2)+(4.5^2 - 3.5^2)+(6.5^2 - 5.5^2)+\\dots+(100.5^2-99.5^2)=?$",options:[{label:"A",text:"2550"},{label:"B",text:"3100"},{label:"C",text:"5100"},{label:"D",text:"6200"},{label:"E",text:"10200"}],correctAnswer:"C",explanation:`The expression is a sum of terms in the form $(N.5^2 - (N-1).5^2)$.
      Each term can be simplified using the difference of squares formula: $a^2 - b^2 = (a - b)(a + b)$.

      Let's analyze a generic term $(X.5^2 - (X-1).5^2)$:
      $= (X.5 - (X-1).5) \\times (X.5 + (X-1).5)$
      $= (1) \\times (2X)$
      $= 2X$.

      Now, let's apply this to each term in the sum:
      1. $(2.5^2 - 1.5^2) = 2 \\times 2 = 4$
      2. $(4.5^2 - 3.5^2) = 2 \\times 4 = 8$
      3. $(6.5^2 - 5.5^2) = 2 \\times 6 = 12$
      $\\dots$
      The last term is $(100.5^2 - 99.5^2) = 2 \\times 100 = 200$.

      So the sum is \\$4 + 8 + 12 + \\dots + 200$.
      This is an arithmetic progression. We can factor out \\$4$:
      Sum = \\$4 \\times (1 + 2 + 3 + \\dots + 50)$.

      The sum of the first '$n$' positive integers is given by the formula $\\frac{n(n+1)}{2}$.
      Here, $n = 50$.
      Sum (\\$1$ to \\$50$) = $\\frac{50 \\times (50 + 1)}{2} = \\frac{50 \\times 51}{2} = 25 \\times 51 = 1275$.

      Therefore, the total sum = \\$4 \\times 1275 = 5100$.

      Thus, the correct answer is C.`},11:{id:"A1-q11",text:"Of the films Empty Set Studios released last year, \\$60\\%$ were comedies and the rest were horror films. \\$75\\%$ of the comedies were profitable, but \\$75\\%$ of the horror movies were unprofitable. If the studio made a total of \\$40$ films, and broke even on none of them, how many of their films were profitable?",options:[{label:"A",text:"18"},{label:"B",text:"19"},{label:"C",text:"20"},{label:"D",text:"21"},{label:"E",text:"22"}],correctAnswer:"E",explanation:`Total films released = \\$40$.

      **1. Calculate number of comedies and horror films:**
      Comedies = \\$60\\%$ of \\$40 = 0.60 \\times 40 = 24$ films.
      Horror films = Total films - Comedies = \\$40 - 24 = 16$ films.

      **2. Calculate profitable comedies:**
      \\$75\\%$ of comedies were profitable = \\$0.75 \\times 24 = 18$ films.

      **3. Calculate profitable horror films:**
      \\$75\\%$ of horror films were UNprofitable.
      So, the percentage of profitable horror films = \\$100\\% - 75\\% = 25\\%$.
      Profitable horror films = \\$25\\%$ of \\$16 = 0.25 \\times 16 = 4$ films.
      (Alternatively: Unprofitable horror films = \\$0.75 \\times 16 = 12$ films. Since none broke even, profitable horror films = \\$16 - 12 = 4$ films).

      **4. Calculate total profitable films:**
      Total profitable films = Profitable comedies + Profitable horror films = \\$18 + 4 = 22$ films.

      Thus, the correct answer is E.`},12:{id:"A1-q12",text:"If $(x^2-5x-1)^2-25=(x-a) \\times (x-b) \\times (x-c) \\times (x-d)$, then $a \\times b \\times c \\times d = ?$",options:[{label:"A",text:"-30"},{label:"B",text:"-24"},{label:"C",text:"-12"},{label:"D",text:"12"},{label:"E",text:"24"}],correctAnswer:"B",explanation:`The given equation is $(x^2 - 5x - 1)^2 - 25 = (x - a)(x - b)(x - c)(x - d)$.

      Let $Y = x^2 - 5x - 1$.
      The left side of the equation becomes $Y^2 - 25$.
      This is a difference of squares, which can be factored as $(Y - 5)(Y + 5)$.

      Now, substitute $Y$ back into the factored expression:
      $= [(x^2 - 5x - 1) - 5] \\times [(x^2 - 5x - 1) + 5]$
      $= (x^2 - 5x - 6) \\times (x^2 - 5x + 4)$.

      Next, we factor each quadratic expression:
      1.  Factor $(x^2 - 5x - 6)$:
          We need two numbers that multiply to $-6$ and add to $-5$. These are $-6$ and \\$1$.
          So, $x^2 - 5x - 6 = (x - 6)(x + 1)$.

      2.  Factor $(x^2 - 5x + 4)$:
          We need two numbers that multiply to \\$4$ and add to $-5$. These are $-1$ and $-4$.
          So, $x^2 - 5x + 4 = (x - 1)(x - 4)$.

      Therefore, the complete factorization is:
      $(x - 6)(x + 1)(x - 1)(x - 4)$.
      This is equal to $(x - a)(x - b)(x - c)(x - d)$.

      By comparing the factors, the values of $a, b, c, d$ (in any order) are \\$6, -1, 1,$ and \\$4$.

      Finally, we need to find the product $a \\times b \\times c \\times d$:
      $a \\times b \\times c \\times d = 6 \\times (-1) \\times 1 \\times 4 = -24$.

      Thus, the correct answer is B.`}};export{s as EXAM_A1_QUESTIONS,t as PS_ROMAN_NUMERALS_OPTIONS};
//# sourceMappingURL=A1-TRKFXEEY.js.map
