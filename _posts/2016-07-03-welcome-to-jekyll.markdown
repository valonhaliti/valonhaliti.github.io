---
layout: post
title:  "My first post"
date:   2016-07-03 12:19:41 +0200
categories: jekyll update
---
This is my first post in a blog powered by Jekyll.

Because Jekyll offers powerful support for code snippets, let's test it with some Erlang code:

{% highlight erlang %}
-module(fib).
-export([fib/1]).

fib(1) -> 1;
fib(2) -> 1;
fib(n) -> fib(n - 1) + fib(n - 2).
{% endhighlight %}
