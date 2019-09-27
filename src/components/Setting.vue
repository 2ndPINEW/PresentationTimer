<template>
    <v-container>
        <v-card class="ma-4 d-xs-8">
            <v-card-title> 発表時間</v-card-title>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="speach_min"
                        class="ma-4"
                        label="分"
                        value=""
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="speach_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="ma-4">
            <v-card-title> 質問時間</v-card-title>
            <v-row >
                <v-col>
                    <v-text-field
                        v-model="question_min"
                        class="ma-4"
                        label="分"
                        value=""
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="question_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="ma-4">
            <v-card-title> 交代時間</v-card-title>
            <v-row >
                <v-col>
                    <v-text-field
                        v-model="wait_min"
                        class="ma-4"
                        label="分"
                        value=""
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="wait_sec"
                        class="ma-4"
                        label="秒"
                        value=""
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card>
        <div class="text-right">
            <v-btn
                class="mx-4 mb-4"
                v-on:click="toTimer"
                >Start Timer
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    data: function(){
        return{
            speach_min: "",
            speach_sec: "",
            question_min: "",
            question_sec: "",
            wait_min: "",
            wait_sec: ""
        }
    },
    methods:{
        toTimer: function(){
            Cookies.set('speach_min', this.speach_min);
            Cookies.set('speach_sec', this.speach_sec);
            Cookies.set('question_min', this.question_min);
            Cookies.set('question_sec', this.question_sec);
            Cookies.set('wait_min', this.wait_min);
            Cookies.set('wait_sec', this.wait_sec);
            this.$router.push({path: '/speachtimer'})
        }
    }
}
</script>