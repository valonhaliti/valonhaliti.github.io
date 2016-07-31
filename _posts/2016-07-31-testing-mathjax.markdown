---
layout: post
title:  "Prove that x^n/n! goes to zero when n goes to infinity"
date:   2016-07-31 12:19:41 +0200
categories: jekyll update
---

Let $x$ be an arbitrary real number, then, there exists $k$ such that \[ x\]. 

From this we get:

$$ |x||x|\dots |x| = |x|^{n-k} < k(k+1)\dots (n-1)$$

(Because $\left|x\right| < k \Rightarrow |x|< k+1, \ldots |x|< (n-1)$)

Now,

$$\begin{align} 
  \lim_{n \to \infty} \frac{x^n}{n!} &= \lim_{n \to \infty}\frac{x^{n-k}x^k}{k!(k+1)\dots (n-1)n} \\
                                     &< \lim_{n \to \infty} \frac{x^k k(k+1)\dots (n-1)}{k!(k+1)\dots (n-1)n} \\
                                     &= \lim_{n \to \infty} \frac{x^k}{k!}\frac{1}{n}
\end{align}$$  

Now,because $\frac{x^k}{k!}$ is just a constant,

$$ \lim_{n \to \infty} \frac{x^k}{k!}\frac{1}{n} = 0 $$

From squeze theorem

$$ 0 < \left| \frac{x^n}{n!} \right| < \lim_{n \to \infty} \frac{x^k}{k!}\frac{1}{n} $$

We get that 

$$ \lim{n \to \infty}  \left| \frac{x^n}{n!} \right| = 0$$

we can conlude that:

$$ \lim{n \to \infty}  \frac{x^n}{n!} = 0$$
