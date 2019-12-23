<template>
	<div>
		<form class="forma1">
			<p class="sign" align="center">New account</p>
			<form class="forma2" id="forma2">
                <i class="fa fa-user-circle" id="userIcon" aria-hidden="true"></i>
                <input type="text" class="username" name="username" v-model="input.usernameRegister" 
                    placeholder="Username" required="required">
                <br>
                <i class="fa fa-envelope" id="envelopeIcon" aria-hidden="true"></i>
                <input type="email" class="email" name="email" v-model="input.emailRegister" 
                    placeholder="Your@email.com" align="center" required="required"/>
                <br>
                <i class="fa fa-lock" id="lockIcon" aria-hidden="true"></i>
                <input type="password" class="password" name="password" v-model="input.passwordRegister" 
                    placeholder="Password" align="center" required="required"/>
                <br>
                <i class="fa fa-lock" id="lockIcon" aria-hidden="true"></i>
                <input type="password" class="password" name="password" v-model="input.confirmedPasswordRegister" 
                    placeholder="Confirmed password" align="center" required="required"/>
                <select class="textarea" form="forma2" required="required">
                    <option value="select">-- Select --</option>
                    <option value="question1">What is the name of your first pet?</option>
                    <option value="question2">Where did you go the first time you flew on a plane?</option>
                    <option value="question3">What is the name of your first school?</option>
                    <option value="question4">Type a significant date in your life?</option>
                    <option value="choose">-- Choose one question --</option>
                </select>
                <div class="iconAndTextarea">
                    <i class="fas fa-edit" id="editIcon"></i>
                    <textarea class="textarea" rows="4" cols="53" form="forma2" 
                        placeholder="Answer the chosen question..." 
                        v-model="input.securityQuestionRegister" required="required"></textarea>
                </div>
                <br><br><br><br><br><br><br>
                <button class="register" v-on:click="login()">Register</button>
			</form>
		</form>	
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			input: {
				usernameRegister: "",
				passwordRegister: "",
				confirmedPasswordRegister: "",
                emailRegister: "",
                securityQuestionRegister: ""
			}
		}
	},
	methods: {

	}
}
</script>

<style>
    div.forma1 {
        display: block;
        text-align: center;
    }
	.forma1 {
        display: inline-block;
        margin-left: 37.5%;
        margin-right: 25%;
        margin-top: 23px;
		background-color: #FFFFFF;
        width: 400px;
        height: 620px;
        /* margin: 7em auto; */
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
	}
	.sign {
		padding-top: 35px;
        color: #19196d;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 24px;
	}
	.forma2 {
        padding-top: 20px; 
	}
	.username {
        width: 304px;
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
        width: 304px;
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
	.email {
		width: 304px;
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
    .username:focus, .password:focus, .email:focus, .textarea:focus {
        border: 2px solid rgba(4, 243, 24, 0.938) !important;      
    }
    .register {
        cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: #19196d;
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 34%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
        margin-bottom: 10%;
    }
	#userIcon {
		margin-left: 7%;
	}
	#lockIcon {
		margin-left: 7%;
	}
	#envelopeIcon {
		margin-left: 7%;
	}
    #editIcon {
        position: relative;
        top: 83.5px;
        left: 25px;
    }
    .iconAndTextarea {
        float: left;
        box-sizing: border-box;
    }
    .textarea {
        margin-left: 20px;
        display: block;
        border: 2px solid rgb(243, 240, 240);
        resize: vertical;
    }
</style>