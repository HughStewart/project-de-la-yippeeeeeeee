let mySprite = Render.getRenderSpriteVariable()
tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 62))
tiles.setCurrentTilemap(tilemap`level`)
let mySprite2 = sprites.create(img`
    . . . f f f f f . . . . . . . . 
    . . . f f 1 1 f . . . . . . . . 
    . . . f 1 1 1 f . . . . . . . . 
    . . f f 1 1 f f f f . . . . . . 
    . . f 1 f 1 1 f 1 1 f . . . . . 
    . f f 1 f f f f 1 1 f f . . . . 
    . f 1 1 1 1 1 1 1 1 1 f . . . . 
    . f 1 1 1 1 1 1 f 1 1 f . . . . 
    f f 1 1 1 1 1 1 1 f 1 1 f . . . 
    f 1 1 f 1 1 1 1 1 f 1 1 f . . . 
    f 1 1 f 1 1 1 1 1 f 1 2 f . . . 
    f f 1 f 1 1 1 1 1 f 2 2 f . . . 
    . f 2 f 1 1 f 1 1 f f 2 . . . . 
    . f 2 f 1 1 f 1 1 f . . 2 . . . 
    2 . f f 1 1 f 1 1 1 f . 2 . . . 
    . . . f 1 1 f 1 1 1 f . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 10))
mySprite2.follow(mySprite, 5)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . . . f 1 1 f f . . . . . 
    . . . . . . f 1 1 1 f . . . . . 
    . . . . . f f 1 1 1 f f f . . . 
    . . . . f f f f f f f 1 1 f . . 
    . . . f f 1 1 1 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 f 1 1 1 f f 1 1 f . . 
    . . f 1 f f 1 1 1 1 f 1 1 f . . 
    . . f 1 f 1 1 1 1 1 f 1 1 f . . 
    . . f 1 f 1 1 1 1 1 f 1 1 f . . 
    . . f 1 f 1 1 f 1 1 f 1 1 f . . 
    . . f 1 f 1 1 f f f f 2 2 f . . 
    . . f 2 f 1 1 f . . f f 2 f . . 
    . . f 2 2 f f f . . . f f f . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . . . f 1 1 f f . . . . . 
    . . . . . . f 1 1 1 f . . . . . 
    . . . . . f f 1 1 1 f f f . . . 
    . . . . f f f f f f f 1 1 f . . 
    . . . f f 1 1 1 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 f 1 1 1 f f 1 1 f . . 
    . . f 1 f f 1 1 1 1 f 1 1 f . . 
    . . f 1 f 1 1 1 1 1 f 1 1 f . . 
    . . f 1 f 1 1 1 1 1 f 1 1 f . . 
    . . f 1 f 1 1 f 1 1 f 1 1 f . . 
    . . f 1 f f f f 1 1 f 2 2 f . . 
    . . f 2 f . . f 1 1 f f 2 f . . 
    . . f 2 2 . . f f f . f f f . . 
    `],
500,
true
)
