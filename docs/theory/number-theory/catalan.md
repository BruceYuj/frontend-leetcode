 
 
 
# 数论-Catalan

## 原理
令$h(0) = 1$, $h(1) = 1$ 
那么catalan数满足递归式：
$h(n) = h(0)*h(n-1) + ... + h(n-1)*h(0), n>=2$
简化为1阶递推公式:
$h(n) = h(n-1)* \frac{4n-2}{n+1}(n>1)$.
递推公式的解为:$h(n) = \frac{C(2n, n)}{n+1}$

组合数
$C(n,m) = \frac{n!}{m!*(n-m)!}$

$C(n,m) = C(n, n-m)$

## reference
1.[catalan](https://www.cnblogs.com/slp0622/p/9141936.html)