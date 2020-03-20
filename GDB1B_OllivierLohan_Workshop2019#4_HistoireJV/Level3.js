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
	this.load.image('background','assets/SkyA.png');
    this.load.image('player','assets/BigFairyGBA.png', {frameWidth: 64, frameHeight:64});
    this.load.image('playerHit','assets/BigFairyHitGBA.png', {frameWidth: 64, frameHeight:64});
    this.load.image('shot','assets/BulletGBA.png');
    this.load.image('evo','assets/UpgradeGBA.png');
    this.load.audio('audioBackground', 'assets/CuriousLegate.mp3');
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
	evo.setVelocityX(Phaser.Math.Between(-1000,1000));
	evo.setVelocityY(Phaser.Math.Between(-1000,1000));
	//Bullet 1
	shot = this.physics.add.sprite(722, -269,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(250);
	shot.setVelocityY(250);
	//Bullet 2
	shot = this.physics.add.sprite(-824,114,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(250);
	shot.setVelocityY(250);
	//Bullet 3
	shot = this.physics.add.sprite(522,-368,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(450);
	shot.setVelocityY(450);
	//Bullet 4
	shot = this.physics.add.sprite(-266, 23,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(450);
	shot.setVelocityY(450);
	//Bullet 5
	shot = this.physics.add.sprite(300,-259,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(600);
	shot.setVelocityY(600);
	//Bullet 6
	shot = this.physics.add.sprite(-837,379,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(600);
	shot.setVelocityY(600);
	//Bullet 7
	shot = this.physics.add.sprite(642,495,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(700);
	shot.setVelocityY(700);
    //Text
    scoreT = this.add.text(16, 730, 'Evolve: 0', { fontSize: '32px', fill: '#000' });
    lowerT = this.add.text(410, 730, 'Land of Challenge and Bullets', { fontSize: '32px', fill: '#000' });

}

function update()
{
	if(cursors.left.isDown)
	{
		player.setVelocityX(-400);
        player.setFlipX(true);
	}
 
	else if (cursors.right.isDown)
	{
		player.setVelocityX(400);
        player.setFlipX(false);
	}

	else if (cursors.down.isDown)
	{
		player.setVelocityY(400);
	}

	else if (cursors.up.isDown)
	{
		player.setVelocityY(-400);
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
	evo.setVelocityX(Phaser.Math.Between(-1000,1000));
	evo.setVelocityY(Phaser.Math.Between(-1000,1000));
	score += 100;
	scoreT.setText('Evolve ' + score);
}

function hit (player, shot)
{
    this.physics.pause();
    player.setTint(0xff0000)
    gameOver = true;
}
