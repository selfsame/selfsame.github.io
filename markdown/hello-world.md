# Hello World

I am the very model of a modern major general. Some more textBuilt-in input event data. InputEvent is a built-in engine datatype, given that it's passed around and used so much. Depending on its type. Some more textBuilt-in input event data. InputEvent is a built-in engine datatype, given that it's passed around and used so much. Depending on its type.

Some more textBuilt-in input event data. InputEvent is a built-in engine datatype, given that it's passed around and used so much. Depending on its type.

![surface8](https://user-images.githubusercontent.com/2467644/32984802-52b0775e-cc7b-11e7-947c-fdc0e0589871.gif)

>Just testing some markdown. Some more textBuilt-in input event data. InputEvent is a built-in engine datatype, given that it's passed around and used so much.

```clj
(defn mutate-in! [path f & shards] 
  (om.next/transact! @botnik.data/RECONCILER 
    `[(std/update-in ~{:path path :fn f}) ~@shards]))

(defn mutate-val! [path f & shards] 
  (om.next/transact! @botnik.data/RECONCILER 
    `[(std/update-in ~{:path path :fn #(identity f)}) ~@shards]))
```

### h3 title

* thing
* `game.entity/make-entity`
	* more thing

![desktop](https://user-images.githubusercontent.com/2467644/32984814-726154d8-cc7b-11e7-8035-542f965513aa.jpg)

Some more textBuilt-in input event data. InputEvent is a built-in engine datatype, given that it's passed around and used so much. Depending on its type, `:foo` the members contained can be different, so read the documentation well! `(::bar @atomic)` Input events can also represent actions (editable from the project settings).

```clj
;rainbows
(quote 
  ((((((((((((((((())))))))))))))))))

;symbols
methods userland foo.core/qualified
[[ \newline23] ]

;literals
12 2.9 3/6 0xBADA55 9r8012 07123 -1.2e-5 4.2M 18N 

:keyword ::qualified :foo.core/resolved
"hello \"world\""  #"rgb$[\(]" 
#<GameObject Foo (UnityEngine.GameObject)>

;specials
@(atomic) @foo
#(re-find #"rgb$\(" (str %3))

'(reader [quoted @(form) `(~@[1 2 3])])

;macro-specials
(defmacro fun [sym args & code] 
  `(do #_'(prn ~[sym args]) 
      '~@[sym args]
       (comment (def ~'foo 7))
       (def ~sym [~'a b] 
          ~@code)))

;TODO illegalize
[foo/ /baz %1 ::foo.bar/quaz .67 #(#()) {1 2 3 #_4 } \newline23]

;TODO legalize
[ :./d :. :./. a:b ] \newline

;TODO scope
[clojure.pprint/*thing* #'foo foo#
 #?(:cljs reader-conditional) ^{:meta 'form }]
```