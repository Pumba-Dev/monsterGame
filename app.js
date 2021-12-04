new Vue({
    el: '#app',
    data: {
        gameOn: false,
        healthPlayer: 100,
        healthMonster: 100,
        barColorPlayer: "green",
        barColorMonster: "green",
        gameOverMSG: "",
        gameOverColor: ""
    },
    computed: {
        endGame() {
            if(this.healthPlayer <= 0) {
                this.gameOverMSG = "Você Perdeu! =(";
                this.gameOverColor = "red";
                return true;
            } else if(this.healthMonster <= 0) {
                this.gameOverMSG = "Você Ganhou! =)";
                this.gameOverColor = "green";
                return true;
            }
            return false;
        }
    },
    methods: {
        newGame() {
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
        attack() {
            this.healthMonster -= this.getPlayerAttack();
            this.healthPlayer -= this.getMonsterAttack();
        },
        specialAttack() {
            this.healthMonster -= this.getPlayerSpecialAttack();
            this.healthPlayer -= this.getMonsterAttack();
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