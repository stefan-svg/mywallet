<template>
    <div>
        <form class="forma1">
            <p class="sign" align="center">Sign in</p>
            <form class="forma2">
                <input type="text" class="username" name="username" v-model="input.username" 
                    placeholder="Username" required="required"/>
                <br>
                <input type="password" class="password" name="password" v-model="input.password" 
                    placeholder="Password" align="center" required="required"/>
                <br>
                <button class="submit" v-on:click="login()">Let me in</button>
            </form>
        </form>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
    }
}
</script>

<style>
    .forma1 {
        background-color: #FFFFFF;
        width: 400px;
        height: 400px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }
    .forma2 {
       padding-top: 40px; 
    }
    .sign {
        padding-top: 60px;
        color: #19196d;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 24px;
    }
    .username {
        width: 76%;
        color: rgb(38, 50, 56);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        background: rgba(136, 126, 126, 0.04);
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
        margin-bottom: 50px;
        margin-left: 46px;
        text-align: center;
        margin-bottom: 27px;
        font-family: 'Ubuntu', sans-serif;
    }
    .password {
        width: 76%;
        color: rgb(38, 50, 56);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        background: rgba(136, 126, 126, 0.04);
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
        margin-bottom: 50px;
        margin-left: 46px;
        text-align: center;
        margin-bottom: 27px;
        font-family: 'Ubuntu', sans-serif;
    }
    .username:focus, .password:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;      
    }
    .submit {
        cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: #19196d;
        /* background: linear-gradient(to right, #9C27B0, #E040FB); */
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 35%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }
</style>