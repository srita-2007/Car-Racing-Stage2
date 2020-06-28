class Form {
    constructor() {
        this.greeting = createElement('h2');
        this.input = createInput('Enter Your Name');
        this.button = createButton('Click Me');
    }
    hide() {
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display() {
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(400,150);
        this.input.position(400,300);
        this.button.position(400,350);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            console.log(player.name);
            playerCount +=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name+" Welcome To The Game");
            this.greeting.position(400,300);
        });
    }
}