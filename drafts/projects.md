

## Finalpage

A design and layout tool for html/css.

![css2](https://user-images.githubusercontent.com/2467644/33220719-6f4dd770-d118-11e7-9571-4e3bd3d2d191.gif)

## VR programming environment

A tool to build games and other interactive applications from inside VR.  Objects can be created and combined into scenegraph trees.  Behaviours would be written with a clojure code editor or node based visual programming, then attached to objects.  Working "Files" can be played/paused/reset during editing, and are easily published & shared.

Tool architecture could be client/server based, allowing for collaborative editing and multiplayer projects.

![clj-vr](https://s3.amazonaws.com/screenularity/cljvr04.gif)

`STATUS`

* object browser
* scenegraph tree
* object manipulation (position, rotation, scale)
* scene navigation (user teleport)
* filebrowser save/load
* inspector for object properties (expose a subset of components - colliders, rigidbodies, color)
* serialization to/from edn data

### Compiling Node Graphs into S expressions

https://en.wikipedia.org/wiki/Flow-based_programming
http://langnostic.blogspot.com/2013/11/fbp-in-common-lisp.html

A macro over `defn` extracts the argument and type meta for the node. Visual node have input argument slots on the left and a value slot on the right.

```clj
(def-node ^Quaternion look-rotation 
  [^Vector3 point 
   ^Vector3 target 
   ^Vector3 up]
  (Quaternion/LookRotation point target (or up (v3 0 1 0))))
```

![def-node](https://user-images.githubusercontent.com/2467644/33223376-d6383502-d12c-11e7-99cf-d2af4a9756bf.png)



The data direction is reversed, which might be unintuitive.

![flow1](https://user-images.githubusercontent.com/2467644/33224185-b21539ba-d134-11e7-9dde-76a30eca4dce.png)

```clj
(plombis (bar (foo)))
```

Paths will need to connect to an explicit return or `do` body. Order of execution is declared with the variadic `do` args.

![flow4](https://user-images.githubusercontent.com/2467644/33224617-66c53488-d139-11e7-9e37-61c00edbbced.png)


```clj
(do (foo) (bar))
```

Here the "multicast" is a double reference to a `fn`'s return value, a let binding is needed.

![flow2](https://user-images.githubusercontent.com/2467644/33224186-b226b618-d134-11e7-9530-c73dd9915b34.png)

```clj
(let [_p (plombis)]
  (beemis (foo _p) 
          (bar _p)))
```

Control logic example.

![flow5](https://user-images.githubusercontent.com/2467644/33224987-b59d641e-d13d-11e7-8942-d4c1d4fcdae9.png)

```clj
(if (foo) (bar) (baz))
```

1. Nodes only have one output.
2. Node input can only be a single connection, output can multicast.
3. The graph must be acyclical. For recursion, use a graph's collapsed node in itself.



## open VR sculpting app

The tactile input of VR allows you to sculpt volume, a novel concept to digital sculpting.  Several features from traditional mesh based sculpting are missing: pinching vertex density into high resolution details (creases & ridges), and additive manipulation, where the artist builds form from a series of low intensity strokes.

This is a fork of the webgl based [SculptGL](https://github.com/stephomi/sculptgl) for VR.

![sculptgl-vr](https://cloud.githubusercontent.com/assets/2467644/26756270/51157374-486c-11e7-8e4b-ccb7f1e041f4.gif)

## Kingdom Sweeper

A game with minesweeper mechanics to claim more land for a fantasy civilization.  

The player makes macro decisions on where to explore, place roads, and locate government buildings. A villager level simulation is indirectly influenced by these decisions.  "Mine" tiles release advasarial agents into the sim, releasing destructive crowds if revealed by the player.

![dungeon-crop](https://user-images.githubusercontent.com/2467644/33219792-672f548e-d112-11e7-90c9-5ac6f0fdaaff.png)


## Fantasy Lisp Console

A Pico8 style virtual console with a lightweight lisp instead of lua.  Interface would be an amiga/os6 style desktop, resoultion 640x480, 1.44MB "disks", and an 8bit color palette.

## ipfs-desk

A web based file explorer for IPFS.  

![ipfs-desk2](https://user-images.githubusercontent.com/2467644/33220628-c4f3a0ac-d117-11e7-8e23-b3554e0d158b.png)


## 2d code editor

A visual macro layer for editing code.

Text files use whitespace to encode a 2 dimensional structure.  This would take that one step further, encoding a scene graph.  Editing forms would be structural, dispatching behaviour & visual style by the context.

![visual2](https://user-images.githubusercontent.com/2467644/33219699-d61bacae-d111-11e7-8d73-4518d4272dca.png)
