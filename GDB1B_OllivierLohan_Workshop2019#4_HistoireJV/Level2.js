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
	this.load.image('background','assets/SkyGBC.png');
    this.load.image('player','assets/BigFairyGBC.png', {frameWidth: 64, frameHeight:64});
    this.load.image('playerHit','assets/BigFairyHitGBC.png', {frameWidth: 64, frameHeight:64});
    this.load.image('shot','assets/BulletGBC.png');
    this.load.image('evo','assets/UpgradeGBC.png');
    this.load.audio('audioBackground', 'assets/IceAgeOvertime.mp3');
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
	evo.setVelocityX(Phaser.Math.Between(-600,600));
	evo.setVelocityY(Phaser.Math.Between(-600,600));
	//Bullet 1
	shot = this.physics.add.sprite(291, 6,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(600);
	shot.setVelocityY(600);
	//Bullet 2
	shot = this.physics.add.sprite(-956,-66,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(600);
	shot.setVelocityY(600);
	//Bullet 3
	shot = this.physics.add.sprite(-262,350,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(450);
	shot.setVelocityY(450);
	//Bullet 4
	shot = this.physics.add.sprite(890,-101,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(450);
	shot.setVelocityY(450);
	//Bullet 5
	shot = this.physics.add.sprite(415,495,'shot');
    this.physics.add.collider;
    shot.setCollideWorldBounds(true);
    shot.setBounce(1);
    this.physics.add.collider(player, shot, hit, null, this);
	shot.setVelocityX(250);
	shot.setVelocityY(250);
    //Text
    scoreT = this.add.text(16, 730, 'Evolve: 0', { fontSize: '32px', fill: '#000' });
    lowerT = this.add.text(410, 730, 'Land of Color and Freeze', { fontSize: '32px', fill: '#000' });

}

function update()
{
	if(cursors.left.isDown)
	{
		player.setVelocityX(-350);
        player.setFlipX(true);
	}
 
	else if (cursors.right.isDown)
	{
		player.setVelocityX(350);
        player.setFlipX(false);
	}

	else if (cursors.down.isDown)
	{
		player.setVelocityY(350);
	}

	else if (cursors.up.isDown)
	{
		player.setVelocityY(-350);
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
	evo.setVelocityX(Phaser.Math.Between(-600,600));
	evo.setVelocityY(Phaser.Math.Between(-600,600));
	score += 100;
	scoreT.setText('Evolve ' + score);
}

function hit (player, shot)
{
    this.physics.pause();
    player.setTint(0xff0000)
    gameOver = true;
}
