var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
}
var game = new Phaser.Game(config);

var player;
var cursors;
var shot;
var evo;
var score = 0;
var scoreT;
var upperT;
var lowerT;


function init(){}

function preload()
{
	this.load.image('background','assets/SkyGB.png');
    this.load.image('player','assets/BigFairyGB.png', {frameWidth: 64, frameHeight:64});
    this.load.image('playerHit','assets/BigFairyHitGB.png', {frameWidth: 64, frameHeight:64});
    this.load.image('shot','assets/BulletGB.png');
    this.load.image('evo','assets/UpgradeGB.png');
    this.load.audio('audioBackground', 'assets/FairyDream.mp3');
}

function create()
{
	//Background
    this.add.image(512, 384,'background');
    //Background Sound
    this.sound.add('audioBackground');
    this.sound.play('audioBackground');
    //Player
    player = this.physics.add.sprite(512,384,'player');
    cursors = this.input.keyboard.createCursorKeys();
    player.setCollideWorldBounds(true);
    //Bonus
    evo = this.physics.add.sprite(600,600,'evo');
    this.physics.add.collider;
    evo.setCollideWorldBounds(true);
    evo.setBounce(1);
    this.physics.add.overlap(player, evo, collect, null, this);
	evo.setVelocityX(Phaser.Math.Between(-300,300));
	evo.setVelocityY(Phaser.Math.Between(-300,300));
	//Bullet 1
	shot = this.physics.add.sprite(668, 389,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(300);
	shot.setVelocityY(300);
	//Bullet 2
	shot = this.physics.add.sprite(70,174,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(500);
	shot.setVelocityY(500);
	//Bullet 3
	shot = this.physics.add.sprite(376,468,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(300);
	shot.setVelocityY(300);
    //Text
    scoreT = this.add.text(16, 730, 'Evolve: 0', { fontSize: '32px', fill: '#000' });
    upperT = this.add.text(410, 10, 'Point Get !', { fontSize: '32px', fill: '#000' });
    lowerT = this.add.text(410, 730, 'Land of Cheap and Tune', { fontSize: '32px', fill: '#000' });

}

function update()
{
	if(cursors.left.isDown)
	{
		player.setVelocityX(-300);
        player.setFlipX(true);
	}
 
	else if (cursors.right.isDown)
	{
		player.setVelocityX(300);
        player.setFlipX(false);
	}

	else if (cursors.down.isDown)
	{
		player.setVelocityY(300);
	}

	else if (cursors.up.isDown)
	{
		player.setVelocityY(-300);
	}

	else 
	{
		player.setVelocityX(0)
		player.setVelocityY(0)
	}
}

function collect (player, evo)
{
	evo.setRandomPosition(0,0,1023,765);
	evo.setVelocityX(Phaser.Math.Between(-300,300));
	evo.setVelocityY(Phaser.Math.Between(-300,300));
	score += 100;
	scoreT.setText('Evolve ' + score);
}

function hit (player, shot)
{
    this.physics.pause();
    player.setTint(0xff0000)
    gameOver = true;
}
