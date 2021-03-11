# XOR (Fonction OU exclusif)

La fonction OU exclusif, souvent appelée XOR (eXclusive OR) est une fonction obtenue avec un minimum de deux variables.

**Table de vérité Xor**:

| a   | b   | a XOR b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

Si vous avez deux variables booléennes, vous pouvez imiter XOR avec :

```js
if (a != b)
```

Avec deux variables arbitraires, vous pouvez les utiliser ! pour les contraindres à des valeurs booléennes, puis utiliser la même astuce :

```js
if (!a != !b)
```

Vous pouvez l'imiter avec une combinaison d'opérateurs logiques `&&`, `||` et `!` :

```js
if( ( foo && !bar ) || ( !foo && bar ) ) {
  ...
}
```
