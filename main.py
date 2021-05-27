mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)