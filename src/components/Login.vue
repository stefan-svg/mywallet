<template>
    <div>
        <form class="forma1">
            <p class="log" align="center">Log in</p>
            <form class="forma2">
                <i class="fa fa-user-circle" id="userIcon" aria-hidden="true"></i>
                <input type="text" class="username" name="username" v-model="input.usernameLogin" 
                    placeholder="Username" required="required"/>
                <br>
                <i class="fa fa-lock" id="lockIcon" aria-hidden="true"></i>
                <input type="password" class="password" name="password" v-model="input.passwordLogin" 
                    placeholder="Password" align="center" required="required"/>
                <br>
                <button class="submit" v-on:click="login()">Let me in</button>              
                <p class="forgotPassword" align="center">Forgot password?</p>
            </form>
        </form>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            input: {
                usernameLogin: "",
                passwordLogin: ""
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
       padding-top: 25px; 
    }
    .log {
        padding-top: 50px;
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
        margin-left: 16px;
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
        margin-left: 16px;
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
        margin-left: 34%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }
    .forgotPassword {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: rgb(208, 166, 216);
        padding-left: 15px;
        padding-top: 15px;
        margin-top: 5%;
    }
    #userIcon {
		margin-left: 7%;
	}
	#lockIcon {
		margin-left: 7%;
	}
</style>