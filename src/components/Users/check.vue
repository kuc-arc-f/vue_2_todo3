<template lang="html">
    <div class="container">
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    created() {
        this.database = firebase.firestore()
        this.procCheck()
    },
    data() {
        return {
        }
    },
    methods: {
        procCheck: function() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log(user.email);
                    console.log(user.uid);
                } else {
                    console.log('#no-User');
                }
            })
        },
    }
}
</script>
