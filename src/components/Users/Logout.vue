<template lang="html">
    <div class="container">
    </div>
</template>

<script>
import firebase from 'firebase'
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created() {
        this.database = firebase.firestore()
        this.procLogout()
    },
    data() {
        return {
        }
    },
    methods: {
        procLogout: function() {
            console.log('#users-Logout')
            var self = this
            firebase.auth().signOut().then(function() {
                console.log('#sign-out-OK');
                localStorage.removeItem( self.sysConst.STORAGE_KEY_userData );
                self.$router.push('/users/login')
            }).catch(function(error) {
                console.log(error);
            })            
        },
    }
}
</script>
