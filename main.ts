function placeTarget (target: Sprite) {
    target.x = randint(0, scene.screenWidth() - 5)
    target.y = randint(0, scene.screenHeight() - 5)
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    char.y = char.y - 1
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    char.x = char.x + 1
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    char.y = char.y + 1
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    char.x = char.x - 1
})
let char: Sprite = null
char = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 f f 3 3 3 f f 3 3 . . . 
    . . 3 3 f f 3 3 3 f f 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 f 3 3 3 f 3 3 3 . . . 
    . . 3 3 3 f f f f f 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let target = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 . . . . . . . . . 
    . . . . 5 5 5 . . . . . . . . . 
    . . . . 5 5 5 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
forever(function () {
	
})
