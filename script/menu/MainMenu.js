
function generateMainMenuLabels(headerText){
    let labels = [
        new Label(
            Vector2.zero,
            "white",
            "left",
            "Bookman",
            "20px"
        )
    ];

    return labels;
}

function generateMainMenuButtons(inGame){
    let buttons = [];

    let dev = 0;

    if(inGame){
        dev = 200;
        buttons.push(
            new Button
                (
                    // CONTINUE BUTTON
                    sprites.continueButton, 
                    new Vector2(500,290),
                    function(){
                        Game.mainMenu.active = false;
                        GAME_STOPPED = false;
                        setTimeout(Game.continueGame,200);
                        sounds.fadeOut(Game.mainMenu.sound);
                    },
                    sprites.continueButtonHover
                )
        )
    }

    let backButton = new Button
    (
        //BACK
        sprites.backButton, 
        new Vector2(420,290),
        function(){
            Game.mainMenu.labels = generateMainMenuLabels("score-Ball");
            Game.mainMenu.buttons = generateMainMenuButtons(inGame);
        },
        sprites.backButtonHover
    );

    buttons = buttons.concat([
        new Button
        (
            // PLAYER vs PLAYER
            sprites.twoPlayersButton, 
            new Vector2(500,dev+300),
            function(){
                AI_ON = false;
                Game.mainMenu.active = false;
                GAME_STOPPED = false;
                setTimeout(Game.startNewGame,200);
                sounds.fadeOut(Game.mainMenu.sound);
            },
            sprites.twoPlayersButtonHover
        ),
        new Button
        (
            // PLAYER vs COMPUTER
            sprites.onePlayersButton, 
            new Vector2(500,dev+500),
            function(){
                Game.mainMenu.labels = generateMainMenuLabels("Choose Difficulty");

                Mouse.reset();
                Game.mainMenu.buttons = [
                    new Button
                    (
                        //EASY
                        sprites.easyButton, 
                        new Vector2(500,250),
                        function(){
                            AI_PLAYER_NUM = 1;
                            AI_ON = true;
                            TRAIN_ITER = 30;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            sounds.fadeOut(Game.mainMenu.sound);
                        },
                        sprites.easyButtonHover
                    ),
                    new Button
                    (
                        //MEDIUM
                        sprites.mediumButton, 
                        new Vector2(500,400),
                        function(){
                            AI_PLAYER_NUM = 1;
                            AI_ON = true;
                            TRAIN_ITER = 50;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            sounds.fadeOut(Game.mainMenu.sound);
                        },
                        sprites.mediumButtonHover
                    ),
                    new Button
                    (
                        //HARD
                        sprites.hardButton, 
                        new Vector2(500,550),
                        function(){
                            AI_PLAYER_NUM = 1;
                            AI_ON = true;
                            TRAIN_ITER = 100;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            sounds.fadeOut(Game.mainMenu.sound);
                        },
                        sprites.hardButtonHover
                    ),
                    new Button
                    (
                        //INSANE
                        sprites.insaneButton, 
                        new Vector2(500,700),
                        function(){
                            AI_PLAYER_NUM = 0;
                            AI_ON = true;
                            TRAIN_ITER = 700;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            sounds.fadeOut(Game.mainMenu.sound);
                        },
                        sprites.insaneButtonHover
                    ),
                    backButton

                ];
            },
            sprites.onePlayersButtonHover
        ),
    ]);

    return buttons;
}