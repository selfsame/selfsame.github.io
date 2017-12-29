
# Finding word squares

I came accross this [tweet](https://twitter.com/haggardhawks/status/918483901198323712?lang=en) the other day, which is an example of a [word square](https://en.wikipedia.org/wiki/Word_square), or a block of words where the columns match the rows.

>A word square is a special type of acrostic. It consists of a set of words written out in a square grid, such that the same words can be read both horizontally and vertically. The number of words, which is equal to the number of letters in each word, is known as the "order" of the square. For example, this is an order 5 square:

```clj
'LEAVE
'ELLEN
'ALONE
'VENOM
'ENEMY
```

I decided this looked like a fun puzzle, and to try generating all possible word squares for a given order. 

First we need some word data, the unix words file will be fine for lower order squares:

```clj
(def words (string/split (slurp "/usr/share/dict/words") #"\n"))
```

When trying to solve something, brute force is always a good to look into.  We could loop through every combination of words for a given order, and check if it's a valid square.

```clj
(defn n-letter [n]
  (filter #(= (count %) n) words))

(count (n-letter 5))
;7613
```

