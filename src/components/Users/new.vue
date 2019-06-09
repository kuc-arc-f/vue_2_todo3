<template lang="html">
    <div class="container">
            <h1>User -Add</h1>
            <div class="form-group">
                <label for="emailTitle">email</label>
                <input type="text" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="passwordTitle">password</label>
                <input type="text" class="form-control" id="password" v-model="password">
            </div>
            <button v-on:click="createUser">User-Add</button>        
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    created() {
        this.database = firebase.firestore()
    },
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
        createUser: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                console.log(error);
            })            
        },
    }
}
</script>
