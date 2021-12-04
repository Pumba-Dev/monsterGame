new Vue({
    el: '#app',
    data: {
        gameOn: false,
        healthPlayer: 100,
        healthMonster: 100,
        barColorPlayer: "green",
        barColorMonster: "green",
        gameOverMSG: "",
        gameOverColor: "",
        damageLog: []
    },
    computed: {
        endGame() {
            if(this.healthPlayer <= 0) {
                this.gameOverMSG = "Você Perdeu! =(";
                this.gameOverColor = "red";
                this.gameOn = false;
                return true;
            } else if(this.healthMonster <= 0) {
                this.gameOverMSG = "Você Ganhou! =)";
                this.gameOverColor = "green";
                this.gameOn = false;
                return true;
            }
            return false;
        }
    },
    methods: {
        reset() {
            this.gameOn = false;
            this.healthPlayer = 100;
            this.healthMonster = 100;
            this.barColorPlayer = "green";
            this.barColorMonster = "green";
            this.gameOverMSG = "";
            this.gameOverColor = "";
            this.damageLog = [];
        },
        newGame() {
            this.reset();
            this.gameOn = true;
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        getMonsterAttack() {
            return this.getRandomInt(6, 12);
        },
        getPlayerAttack() {
            return this.getRandomInt(4, 11);
        },
        getPlayerSpecialAttack() {
            return this.getRandomInt(8, 14);
        },
        getPlayerHeal() {
            return this.getRandomInt(8, 13);
        },
        attack() {
            damagePlayer = this.getPlayerAttack();
            damageMonster = this.getMonsterAttack();
            this.damageLog.unshift({
                "player": damagePlayer,
                "monster": damageMonster
            });            
            this.healthMonster -= damagePlayer;
            this.healthPlayer -= damageMonster;
        },
        specialAttack() {
            damagePlayer = this.getPlayerSpecialAttack();
            damageMonster = this.getMonsterAttack();

            this.damageLog.unshift({
                "player": damagePlayer,
                "monster": damageMonster
            }); 

            this.healthMonster -= damagePlayer
            this.healthPlayer -= damageMonster
             
        },
        heal() {
            this.healthPlayer += this.getPlayerHeal();
            this.healthPlayer -= this.getMonsterAttack();
        },
        run() {
            this.reset();
        }
    },
    watch: {
        healthMonster() {
            this.healthMonster <= 20 ? 
                this.barColorMonster = "red" :
                this.barColorMonster = "green";
            if(this.healthMonster <= 0)
                this.healthMonster = 0;
        },
        healthPlayer() {
            this.healthPlayer <= 20 ? 
                this.barColorPlayer = "red" :
                this.barColorPlayer = "green";
            if(this.healthPlayer <= 0)
                this.healthPlayer = 0;
        }
    }
})