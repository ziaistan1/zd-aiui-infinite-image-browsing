import{cF as g,cG as d,b_ as h,aS as M,be as E,cH as O,bg as P,cI as p,bc as y,bL as C}from"./index-13d31bf2.js";function I(n){return function(r){return r==null?void 0:r[n]}}var L=1,G=2;function b(n,r,e,i){var t=e.length,A=t,a=!i;if(n==null)return!A;for(n=Object(n);t--;){var f=e[t];if(a&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++t<A;){f=e[t];var u=f[0],s=n[u],o=f[1];if(a&&f[2]){if(s===void 0&&!(u in n))return!1}else{var l=new g;if(i)var R=i(s,o,u,n,r,l);if(!(R===void 0?d(o,s,L|G,i,l):R))return!1}}return!0}function _(n){return n===n&&!h(n)}function D(n){for(var r=M(n),e=r.length;e--;){var i=r[e],t=n[i];r[e]=[i,t,_(t)]}return r}function c(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function F(n){var r=D(n);return r.length==1&&r[0][2]?c(r[0][0],r[0][1]):function(e){return e===n||b(e,n,r)}}function w(n,r,e){var i=n==null?void 0:E(n,r);return i===void 0?e:i}var S=1,m=2;function x(n,r){return O(n)&&_(r)?c(P(n),r):function(e){var i=w(e,n);return i===void 0&&i===r?p(e,n):d(r,i,S|m)}}function K(n){return function(r){return E(r,n)}}function N(n){return O(n)?I(P(n)):K(n)}function U(n){return typeof n=="function"?n:n==null?y:typeof n=="object"?C(n)?x(n[0],n[1]):F(n):N(n)}export{U as b};
