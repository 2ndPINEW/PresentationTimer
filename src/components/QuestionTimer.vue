<template>
<div id="timer">
    <v-container>
    <div class="display-4 ma-4">質問時間</div>
    <v-card class="ma-4 text-center">
        <div class="time font-weight-bold">{{ formatTime }}</div>
    </v-card>
    <div class="tool text-right ma-4">
            <v-btn v-on:click="start" v-if="!timerOn">Resume</v-btn>
            <v-btn v-on:click="stop" v-if="timerOn">Pause</v-btn>
            <v-btn v-on:click="toNextTimer">Next</v-btn>
            <v-btn v-on:click="toSetting">Setting</v-btn>
    </div>
    </v-container>
</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    created: function(){
        var min = Number(Cookies.get('question_min'))
        var sec = Number(Cookies.get('question_sec'))
        this.min = min
        this.sec = sec
        this.start()
    },
    data() {
        return {
            min: 0,
            sec: 0,
            timerOn: false,
            timerObj: null,
            tineComplete: false
        };
    },
    methods: {
        toSetting: function(){
            clearInterval(this.timerObj);
            this.$router.push("/setting")
        },
        toNextTimer: function(){
            clearInterval(this.timerObj);
            this.$router.push("/waittimer")
        },
        count: function() {
            if (this.sec <= 0 && this.min >= 1) {
                this.min--;
                this.sec = 59;
            } else if (this.sec <= 0 && this.min <= 0) {
                this.complete();
            } else {
                this.sec--;
            }
            console.log(this.min +":" + this.sec);
        },
        start: function() {
            let self = this;
            this.timerObj = setInterval(function() {self.count();}, 1000);
            this.timerOn = true;
        },

        stop: function() {
            clearInterval(this.timerObj);
            this.timerOn = false;
        },

        complete: function() {
            clearInterval(this.timerObj);
            this.toNextTimer()
        }
    },
    computed: {
        formatTime: function() {
            let timeStrings = [this.min.toString(), this.sec.toString()].map(function(str) {
                if (str.length < 2) {
                return "0" + str;
                } else {
                return str;
                }
            });
            return timeStrings[0] + ":" + timeStrings[1];
        }
    }
};
</script>

<style scoped>
#timer {
    display: flex;
    align-items: center;
    justify-content: center;
}
.time {
    font-size: 400px;
}
</style>