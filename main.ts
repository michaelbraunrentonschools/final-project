function factTwo () {
    turtle.say("On average, 40.4 million Americans rely on SNAP (Supplemental Nutrition Assistance Program) each month to meet their food needs")
}
// creates the player
function hero () {
    // Creates the turtle sprite
    turtle = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . .
        . . . . . . . f 7 7 7 7 7 7 7 7 f . . . . . . . . . . . . . . .
        . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . . . .
        . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . . . .
        . . . . . . f 7 7 7 7 7 7 7 7 7 7 f . . . . . . . . . . . . . .
        . . . . . . f 7 f 7 7 7 7 7 7 f 7 f . . . . . . . . . . . . . .
        . . . . . . f 7 7 7 f f f f 7 7 7 f . . . . . . . . . . . . . .
        . . . . . . . f 7 7 7 7 7 7 7 7 f . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f f f f f . . . . . . . . . . . . . . .
        . . . . . f 7 7 f d d d f 7 7 f 6 f . . . . . . . . . . . . . .
        . . . . . f 7 7 f d d d f 7 7 f 9 6 f . . . . . . . . . . . . .
        . . . . . . f f f d d d d f f f 6 6 f . . . . . . . . . . . . .
        . . . . . . . . f d d d d d d f 6 9 f . . . . . . . . . . . . .
        . . . . . . . . f f d d d d f f 9 6 f . . . . . . . . . . . . .
        . . . . . . . . f 7 f f f f 7 f 6 f . . . . . . . . . . . . . .
        . . . . . . . . f 7 7 f f 7 7 f f . . . . . . . . . . . . . . .
        . . . . . . . . . f f . . f f . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    // It moves the turtles with buttons and it moves at a
    // rate of 150
    controller.moveSprite(turtle, 150, 150)
    // The camera would follow the turtle wherever the
    // turtle goes
    scene.cameraFollowSprite(turtle)
}
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    factThree()
    buildLevel()
})
function food () {
    // It would repeat the following code 30
    for (let index = 0; index < 30; index++) {
        // Creates the strawberry sprite
        strawberry = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f . f f f f . . . . . . . . . . . . . . .
            . . . . . . . . . f f f f f 7 7 f . . . . . . . . . . . . . . .
            . . . . . . . . f f 7 7 7 f 6 7 f . . . . . . . . . . . . . . .
            . . . . . . . . f 7 6 7 f f f f f . . . . . . . . . . . . . . .
            . . . . . . . . f 7 7 6 f 2 2 2 2 f f . . . . . . . . . . . . .
            . . . . f f f f f 7 f f 2 2 2 2 2 2 f f . . . . . . . . . . . .
            . . . f f 7 6 6 f f f 2 2 2 2 5 2 2 2 f f . . . . . . . . . . .
            . . . f f 7 7 6 f f 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . . .
            . . . . f f 7 6 f 2 2 5 2 2 2 2 2 2 2 2 f f . . . . . . . . . .
            . . . . . f f f f 2 2 2 2 2 5 2 2 2 5 2 2 f . . . . . . . . . .
            . . . . . f 6 6 f 2 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . .
            . . . . . f f f f 2 2 5 2 2 2 2 5 2 2 5 2 f . . . . . . . . . .
            . . . . . . . . f 2 2 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . .
            . . . . . . . . f 2 2 2 2 2 2 5 2 2 5 2 2 f . . . . . . . . . .
            . . . . . . . . f f 2 2 2 5 2 2 2 2 2 2 2 f . . . . . . . . . .
            . . . . . . . . . f f 2 2 2 2 2 2 2 2 2 2 f . . . . . . . . . .
            . . . . . . . . . . f f f 2 2 2 5 2 2 5 2 f . . . . . . . . . .
            . . . . . . . . . . . . f f f f 2 2 2 2 2 f . . . . . . . . . .
            . . . . . . . . . . . . . . . f f f f 2 f . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.Food)
        // It'd place the strawberry on a random white tile
        scene.placeOnRandomTile(strawberry, 1)
        // It'd place the strawberry on a random green tile
        scene.placeOnRandomTile(strawberry, 7)
        // It'd place the strawberry on a random beige tile
        scene.placeOnRandomTile(strawberry, 13)
        // It'd place the tile on a random red tile
        scene.placeOnRandomTile(strawberry, 2)
    }
}
// Everytime the player hits the brown wall, it calls
// the function "buildLevel"
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    factOne()
    buildLevel()
})
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    factTwo()
    buildLevel()
})
function factThree () {
    turtle.say("More than 37 million people struggle with hunger in the United States")
}
// The following will happen when the player overlaps
// with the food
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // The score would go up by one every time the player
    // overlaps with the food
    info.changeScoreBy(1)
    // The food would get destroyed every time the player
    // overlaps it
    otherSprite.destroy()
})
function buildLevel () {
    // If the "nextLevel" block is equivalent to the
    // length of the array called "levels" the game is
    // over and the player wins
    if (nextLevel == levels.length) {
        game.over(true)
    }
    // It sets the player to start on the black tile
    for (let value of scene.getTilesByType(15)) {
        value.place(turtle)
    }
    // When you pass a level, it you'd go on to the next
    // level, and the next level is 32x32 pixels
    scene.setTileMap(levels[nextLevel], TileScale.ThirtyTwo)
    info.setLife(5)
    nextLevel += 1
}
function factOne () {
    turtle.say("1 in 6 children in the U.S. are food insecure")
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    factFour()
    buildLevel()
})
// creates the enemy
function enemy () {
    // Repeats the following code 40 times
    for (let index = 0; index < 40; index++) {
        // Creates the raccoon sprite
        raccoon = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . f f . . . . . . . f f . . . . . . . . . . . . . . .
            . . . . . f e e f f f f f f f e e f . . . . . . . . . . . . . .
            . . . . . f 3 e e d d d d d e e 3 f . . . . . . . . . . . . . .
            . . . . . f 3 3 d d d d d d d 3 3 f . . . . . . . . . . . . . .
            . . . . . f 3 d d d d d d d d d 3 f . . . . . . . . . . . . . .
            . . . . . f d d e e d d d e e d d f . . . . . . . . . . . . . .
            . . . . f e e e e e e d e e e e e e f . . . . . . . . . . . . .
            . . . f e e e e e f e e e f e e e e e f . . f f f . . . . . . .
            . . . . f e e e e e e e e e e e e e f . f f d d d f . . . . . .
            . . . . . f e e d d d d d d d e e f . f d d d d d f . . . . . .
            . . . . . . f d d d e e e d d d f . f d e e d d d f . . . . . .
            . . . . . . . f d d d e d d d f . . f d e e e d d d f . . . . .
            . . . . . . f e e d d d d d e e f f e d d e e d d d f . . . . .
            . . . . . f e e d d d d d d d e e f e e e d e e d d f . . . . .
            . . . . . f e e d d d d d d d e e d e e e d e e d f . . . . . .
            . . . . . f e e d d d d d d d e e d d d e e d d f . . . . . . .
            . . . . f e e e d d d d d d d e e e d d e e f f . . . . . . . .
            . . . . f e e e d d d d d d d e e e d d f f . . . . . . . . . .
            . . . . . f e e e f d d d f e e e f f f . . . . . . . . . . . .
            . . . . . . f e e f f d f f e e f f . . . . . . . . . . . . . .
            . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
        // It places the raccoon on a random white tile
        scene.placeOnRandomTile(raccoon, 1)
        // It places the raccoon on a random green tile
        scene.placeOnRandomTile(raccoon, 7)
        // It places the raccoon on a random beige tile
        scene.placeOnRandomTile(raccoon, 13)
        // It places the raccoon on a random red tile
        scene.placeOnRandomTile(raccoon, 2)
    }
}
// The following would happen when the player overlaps
// with the enemy :
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    // Every time the player overlaps with the enemy, you
    // lose a life
    info.changeLifeBy(-1)
    // Every time the player overlaps with the enemy, the
    // enemy gets destroyed
    otherSprite.destroy()
})
function factFour () {
    turtle.say("One in 8 families in America are hungry.")
}
let raccoon: Sprite = null
let strawberry: Sprite = null
let turtle: Sprite = null
let levels: Image[] = []
let nextLevel = 0
// Starts at the first level since counting in arrays
// starts at 0
nextLevel = 0
// Creates the array "levels" (creates the levels in
// the game)
levels = [img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 f 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 8 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 1 8 8 8 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 1 1 8 8 1 8 8 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 8 1 1 1 1 8 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 8 8 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 8 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 8 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8
    8 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 8 1 1 1 1 8 8 8 8 1 1 1 1 1 8
    8 1 1 1 1 1 1 8 1 1 1 1 1 1 1 1 8 8 1 1 1 1 1 1 1 1 8 8 8 8 1 8
    8 1 1 1 1 1 1 8 1 1 1 1 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8
    8 1 1 1 1 1 1 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 7 7 3 3 3 3 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3
    3 f 7 3 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3
    3 7 7 3 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 3 3 7 7 7 7 7 7 7 3
    3 7 7 3 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 3 3 7 7 3 3 7 7 7 7 7 7 3
    3 7 7 3 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 3 3 7 7 7 7 7 3
    3 7 3 3 7 7 3 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 7 3 7 7 7 7 7 3
    3 7 7 7 7 7 3 3 3 3 3 3 7 7 7 3 3 3 3 7 7 7 7 7 3 3 7 7 7 7 7 3
    3 7 7 7 7 3 7 7 7 7 7 3 3 3 3 3 7 7 7 7 7 7 7 7 3 7 7 7 7 7 7 3
    3 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 7 3
    3 7 7 3 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 3 7 7 7 7 7 7 3
    3 7 7 3 7 7 7 7 3 7 7 7 7 7 3 3 3 3 3 3 7 7 7 3 7 7 7 7 7 7 7 3
    3 7 7 7 3 7 7 7 3 7 7 7 3 3 3 7 7 7 7 7 3 3 3 3 7 7 7 7 7 7 7 3
    3 7 7 7 3 7 7 7 3 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3
    3 7 7 7 3 7 7 7 3 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3
    3 7 7 7 3 7 7 7 3 7 7 7 3 3 3 3 7 7 7 7 7 3 3 3 3 3 3 7 7 7 7 3
    3 7 7 7 3 7 7 7 3 7 7 7 7 7 7 7 3 3 3 3 3 3 7 7 7 7 3 7 7 7 7 3
    3 7 7 3 3 7 7 3 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 3
    3 7 7 3 7 7 7 3 7 7 3 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 3
    3 7 7 3 7 7 7 3 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 7 7 7 3 3 7 7 7 3
    3 7 7 3 3 3 3 3 7 7 7 3 7 7 7 3 3 3 3 7 7 7 7 7 7 7 7 3 7 7 7 3
    3 7 7 7 7 7 7 7 7 7 7 3 7 7 7 3 7 7 3 3 3 3 7 7 7 7 7 3 7 7 7 3
    3 7 7 7 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 3
    3 3 3 3 3 7 7 7 7 7 3 7 7 7 7 3 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 3
    3 7 7 7 3 7 7 7 7 7 3 7 7 7 7 3 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 3
    3 7 7 3 3 7 7 7 7 7 3 7 7 7 7 3 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 3
    3 7 3 3 7 7 7 3 3 3 7 7 7 7 7 3 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 3
    3 7 3 7 7 3 3 3 7 7 7 7 7 7 3 3 7 7 7 7 7 7 3 7 7 7 7 3 7 7 7 3
    3 7 3 7 7 3 7 7 7 7 7 7 7 3 3 7 7 7 7 7 7 7 3 3 7 7 7 7 7 7 7 3
    3 7 3 7 3 3 7 7 7 7 7 7 3 3 7 7 7 7 7 7 7 7 7 3 3 7 7 7 7 6 7 3
    3 7 3 7 3 7 7 7 7 7 7 7 3 7 7 7 7 7 7 7 7 7 7 7 3 3 7 7 7 7 7 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`, img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 d d d d d d d d 9 d d d d d d d 9 9 d d 9 9 9 d b d d d d d 9
    9 d f d d d d d d 9 d d d d d d d 9 d d d d d d 9 9 d d d d d 9
    9 d d d d d d d d 9 d d d d d d 9 9 d d d d d d d 9 d d d d d 9
    9 d d d d d d d d 9 9 d d d d d 9 d d d d d d d 9 d d d d d d 9
    9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9
    9 d d d d d d d d d d d 9 9 9 9 9 9 d d d d d d 9 9 d d d d d 9
    9 d d d d d d d d d d d d 9 9 d d d d d d d d d d 9 9 d d d d 9
    9 d d d d d d d d d d d 9 9 d d d d d d d d d d d d 9 9 d d d 9
    9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d 9 d d d 9
    9 d d d d d d d d d 9 9 d d d d d 9 9 9 9 9 d d d d d d 9 d d 9
    9 d d d d d d d 9 9 9 9 9 d d d d d d d d d 9 9 9 d d d 9 d d 9
    9 d d d d d 9 9 9 9 d d 9 9 9 9 9 d d d d d d d 9 9 d d 9 d d 9
    9 d d d 9 9 d d d 9 d d d d d d 9 9 9 9 9 9 9 d d 9 d 9 9 d d 9
    9 d d 9 9 d d d 9 d d d d d d d d d d d d d 9 9 9 9 9 9 d d d 9
    9 d d 9 d d d d 9 d d d d d d d d d d d d d d d 9 9 d d d d d 9
    9 d 9 9 d d d d 9 d d d d d d 9 9 9 9 9 9 9 9 9 d d d d d d d 9
    9 d 9 d d d d d 9 d d 9 9 9 9 9 d d d d d d d d d d 9 9 9 9 9 9
    9 d 9 d d d d d 9 d 9 9 d d d d d d d d d d d d 9 9 d d d d d 9
    9 d 9 d d d d d d 9 9 d d d d d d d d d d d 9 9 d d d d d d d 9
    9 d 9 9 d d d d d 9 9 9 9 d d d d d d d 9 9 d d d d d d d d d 9
    9 d d d 9 9 d d d d 9 9 d d 9 9 9 9 9 9 9 d d d d d d d d d d 9
    9 d d d d d 9 d d d d d d d d d d d 9 9 d 9 9 d d d d d d d d 9
    9 d d d d d d 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9
    9 d d 9 9 9 9 d d d d d d d d 9 9 d 9 9 9 9 9 9 d 9 9 d d d d 9
    9 d d d d d d 9 9 d d d d d d 9 d d d d d 9 9 9 9 9 9 9 d d d 9
    9 d 9 d d d d d d d d 9 9 d 9 9 d d 9 9 9 9 d d d d 9 9 9 9 d 9
    9 d 9 d d d d d d d d d 9 9 9 9 9 9 9 d d d d d d d 9 d d 9 d 9
    9 d 9 d d d d d d d d d 9 9 d d d d d d d d d d d 9 d d d d 9 9
    9 d d 9 d d d d d d d 9 9 d d d d d d d d d d 9 9 d d d d d 9 9
    9 d d d 9 d d d d d 9 9 d d d d d 9 9 9 9 9 9 d d d d d d d 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 4 4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2
    2 4 4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2
    2 4 f 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 4 2
    2 4 4 4 4 4 4 2 4 4 4 4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2
    2 4 4 4 4 4 4 2 2 2 4 4 4 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2
    2 4 4 4 4 4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2
    2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2
    2 4 4 4 2 2 4 4 4 4 4 4 4 2 2 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 4 2
    2 4 4 4 4 2 2 2 2 2 2 2 2 4 2 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 4 2
    2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 4 4 2 2 4 4 4 4 4 4 4 4 4 4 4 4 2
    2 4 4 4 4 2 2 2 2 2 4 4 4 4 2 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 4 2
    2 4 4 2 2 4 4 4 4 4 2 4 4 4 2 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 2 2
    2 4 4 2 4 4 4 4 4 4 4 2 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 2 2 2 4 2
    2 4 4 2 4 4 4 4 4 4 4 4 2 4 4 2 2 2 2 4 4 4 4 4 4 2 2 4 4 4 4 2
    2 4 4 2 4 4 4 4 4 4 4 4 4 2 4 4 4 4 2 4 4 4 4 4 4 2 4 4 4 4 4 2
    2 4 2 2 4 4 4 4 4 4 4 4 4 4 2 4 4 4 2 4 4 4 4 4 4 2 4 4 4 4 4 2
    2 4 2 2 2 2 2 4 4 4 4 4 4 4 4 2 4 4 4 2 4 4 4 4 4 2 2 4 4 4 4 2
    2 4 4 2 2 4 4 2 2 4 4 4 4 4 4 2 4 4 4 4 2 4 4 4 4 4 4 2 4 4 4 2
    2 4 4 4 2 4 4 4 2 4 4 4 4 4 4 2 4 4 4 4 4 2 4 4 4 4 4 2 4 4 4 2
    2 4 4 4 2 4 4 4 2 4 4 4 4 4 4 2 4 4 4 4 4 4 2 2 4 4 4 2 4 4 4 2
    2 4 4 4 2 4 4 4 2 4 4 4 4 4 4 4 2 4 4 4 4 4 4 2 2 4 4 2 2 4 4 2
    2 4 4 4 2 4 4 4 4 2 4 4 4 4 4 4 2 2 4 4 4 4 4 4 2 2 4 4 4 2 4 2
    2 4 2 2 2 2 4 4 4 4 2 2 4 4 4 4 4 4 2 4 4 4 4 4 4 2 4 4 4 4 2 2
    2 4 4 4 2 4 2 2 4 4 4 4 2 2 2 4 4 4 4 2 2 2 4 4 4 2 4 4 4 4 2 2
    2 4 4 4 2 4 4 4 2 4 4 4 4 4 2 2 2 4 4 4 4 4 2 2 4 2 4 4 4 4 2 2
    2 4 4 4 4 2 4 4 4 2 4 4 4 4 4 4 2 2 4 4 4 4 4 2 4 2 4 4 4 4 2 2
    2 4 4 4 4 2 4 4 4 4 2 4 4 4 4 4 4 2 4 4 4 4 4 2 4 4 4 4 4 2 4 2
    2 4 4 4 4 4 2 2 2 2 2 2 2 2 4 4 4 4 2 4 4 4 4 2 4 4 4 4 4 2 4 2
    2 4 4 4 4 4 4 4 4 2 4 4 4 4 2 4 4 4 2 4 4 4 4 2 4 4 4 a 4 2 4 2
    2 4 4 4 4 4 4 4 2 2 4 4 4 4 2 2 4 4 2 4 4 4 4 4 2 4 4 4 4 4 4 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`]
// Sets the wall of the maze
scene.setTile(8, img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8
    8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, true)
scene.setTile(3, img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3
    3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 5 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 5 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3
    3 3 3 3 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`, true)
scene.setTile(9, img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9
    9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9
    9 9 9 9 9 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9
    9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 8 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 8 8 8 8 8 9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 8 8 8 9 9 9 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9
    9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 8 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 8 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 8 9 9 9 9 9 9
    9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 8 9 9 9 9 9 8 8 9 9 9 9 9 9 9
    9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, true)
scene.setTile(2, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 5 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 5 5 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, true)
// Sets the background of the maze
scene.setTile(4, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, false)
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, false)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 5 5 5 5 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7
    7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 6 7 7 7 7 7 7 7 7 7
    7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 5 6 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 5 5 5 6 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 5 5 6 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 5 6 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 5 5 5 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 5 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 5 5 5 5 7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 5 7 7 6 5 5 5 5 5 5 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 5 5 5 6 7 7 7 7 7 7 7 7 7 6 5 5 5 7 7 7 7 7
    7 7 7 7 7 7 7 5 5 5 5 6 7 7 7 7 7 7 7 5 5 5 5 5 7 6 5 7 7 7 7 7
    7 7 7 7 7 5 5 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`, false)
scene.setTile(13, img`
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d b d d d d d d d d d d b d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d b d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d b d d d d d d d d d d d d d d d d d d b d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d b d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d b d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d b d d d d d d d d d d d
    d d d d d d d b d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d
`, false)
// Creates the "portal" to the next level
scene.setTile(14, img`
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e
    e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e 1 e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e 1 e e e e e e 1 1 e e e e e
    e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e 1 1 e e e e e e e e e e
    e e e e 1 e e e e e e e e 1 e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e 1 e e e e e e
    1 e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e 1 e e e e e e e e e e e e 1 e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e 1 e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e
    e e e e e e e e e e e e e 1 e e e e e e e e e e e e 1 e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e 1 e e e e e e e e e 1 e e e e e e e e e e e e e e e
    e e e e e e e e e e e 1 e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e 1 e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e 1 e e e e e e e e e e e e e e e 1 e e e e e
    e e e 1 e e e e e e e e e e e e e e e 1 e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
`, true)
scene.setTile(6, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6
    6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 1 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 1 1 6 6 6 6 6
    6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 1 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6
    1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 1 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6
    6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`, true)
scene.setTile(11, img`
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 b b b
    b b b 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b 1 b b b b b b 1 b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b 1 b b b b b b 1 1 b b b b b
    b b b b b b 1 b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b 1 1 b b b b b b b b b b
    b b b b 1 b b b b b b b b 1 b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b 1 b b b b b b
    1 b b b b b b b b b b b b b b b b 1 b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b 1 b b b b b b b b b b b b 1 b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b 1 b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b 1 b b b b b b b b b b b b b b b b 1 b b b b b b b b b b b b
    b b b b b b b b b b b b b 1 b b b b b b b b b b b b 1 b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b 1 b b b b b b b b b 1 b b b b b b b b b b b b b b b
    b b b b b b b b b b b 1 b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b 1 b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b 1 b b b b b b b b b b b b 1 b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b 1 b b b b b b b b b b b b b b b 1 b b b b b
    b b b 1 b b b b b b b b b b b b b b b 1 b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b
`, true)
scene.setTile(10, img`
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a 1 a a a
    a a a 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a 1 a a a a a a 1 a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a 1 a a a a a a 1 1 a a a a a
    a a a a a a 1 a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a 1 1 a a a a a a a a a a
    a a a a 1 a a a a a a a a 1 a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a 1 a a a a a a
    1 a a a a a a a a a a a a a a a a 1 a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a 1 a a a a a a a a a a a a 1 a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a 1 a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a 1 a a a a a a a a a a a a a a a a 1 a a a a a a a a a a a a
    a a a a a a a a a a a a a 1 a a a a a a a a a a a a 1 a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a 1 a a a a a a a a a 1 a a a a a a a a a a a a a a a
    a a a a a a a a a a a 1 a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a 1 a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a 1 a a a a a a a a a a a a 1 a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a 1 a a a a a a a a a a a a a a a 1 a a a a a
    a a a 1 a a a a a a a a a a a a a a a 1 a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a
`, true)
// Starting point of the maze
scene.setTile(15, img`
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f 1 f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f
    f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f 1 f f f f f f f f f f f f f f f f 1 f f f f f
    f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
`, false)
// Displays the text before the game starts
game.showLongText("Hello player!", DialogLayout.Full)
game.showLongText("Welcome to \"Eat the strawberry\"!", DialogLayout.Full)
game.showLongText("Use the arrow keys to move", DialogLayout.Full)
game.showLongText("Help the turtle collect food to feed people in its community!", DialogLayout.Full)
game.showLongText("Avoid the raccoons, who will try to take the food!", DialogLayout.Full)
game.showLongText("Find the special tile in each level to go on to the next level!", DialogLayout.Full)
game.showLongText("Every time you complete a level, you'll get a fact!", DialogLayout.Full)
// starts the game off with 5 lives
info.setLife(5)
// Calls the function "buildLevel"
buildLevel()
// calls the "hero" function
hero()
// calls the function "enemy"
enemy()
// calls the "food" function
food()
