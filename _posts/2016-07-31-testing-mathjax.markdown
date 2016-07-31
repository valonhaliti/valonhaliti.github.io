---
layout: post
title:  "Prove that \lim_{n \to\ infty}\frac{x^n}{n!}=$"
date:   2016-07-31 12:19:41 +0200
categories: jekyll update
---

Let $x$ be an arbitrary real number, then, there exists $k$ such that $|x|<k$. From this we get:
$$ |x||x|\dots |x| = |x|^{n-k} < k(k+1)\dots (n-1)$$
(Because if $|x| < k \Rightarrow |x|< k+1, \ldots |x|< (n-1)$
Now, 
$$ \lim_{n \to \infty} \frac{x^n}{n!}= \lim_{n \to \infty}\frac{x^{n-k}x^k}{k!(k+1)\dots (n-1)n} $$
