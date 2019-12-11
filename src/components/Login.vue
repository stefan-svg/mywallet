<template>
    <div>
        <h1>Sign in</h1>
        <form action="">
            <input type="text" name="username" v-model="input.username" 
                placeholder="Username" required="required"/>
            <br>
            <input type="password" name="password" v-model="input.password" 
                placeholder="Password" required="required"/>
            <br>
            <button type="button" v-on:click="login()">Let me in</button>
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

</style>