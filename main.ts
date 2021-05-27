namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    mySprite3.setPosition(randint(0, 100), randint(0, 100))
    info.changeScoreBy(randint(0, 20))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
info.setLife(100)
let mySprite2 = sprites.create(img`
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 f f f 5 5 . . . . . . 
    . . . 5 5 f 1 f f 5 . . . . . . 
    . . . 5 5 f 1 1 f 5 . . . . . . 
    . . . 5 5 f 1 1 f 5 . . . . . . 
    . . . 5 5 f 1 1 f 5 . . . . . . 
    . . . 5 5 f 1 1 f 5 . . . . . . 
    . . . 5 5 f 1 f f 5 . . . . . . 
    . . . 5 5 f f f 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 f f f f f 7 . . . . . . 
    . . . 7 f f f f f 7 . . . . . . 
    . . . 7 f 7 7 7 f 7 . . . . . . 
    . . . 7 f 7 7 7 f 7 . . . . . . 
    . . . 7 f 7 7 7 f 7 . . . . . . 
    . . . 7 f 7 7 7 f 7 . . . . . . 
    . . . 7 f 7 7 7 f 7 . . . . . . 
    . . . 7 f f f f f 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Coin)
mySprite.setPosition(121, 56)
mySprite.setStayInScreen(true)
if (blockSettings.readString("Name") == "") {
    blockSettings.writeString("Name", game.askForString(""))
    mySprite.say(blockSettings.readString("Name"))
} else {
    mySprite.say(blockSettings.readString("Name"))
}
let E = 0
controller.moveSprite(mySprite)
mySprite2.follow(mySprite, 20)
mySprite2.setStayInScreen(true)
mySprite3.setStayInScreen(true)
forever(function () {
    if (info.life() == 0) {
        if (info.score() > 0) {
            if (game.askForString("Do you want to turn score into lives (y or n)", 1) == "y") {
                info.setLife(info.score())
                info.setScore(0)
                mySprite.setPosition(121, 56)
            } else {
                game.over(false)
            }
        } else {
            game.over(false)
        }
    }
})
