<template>
    <div>
        <h1>User - info</h1>
        User autherize info by Google autherize
        <hr>
        <div v-if="item">
            <h3>email :</h3>
            <p>{{item.email }}</p>
            <hr>
            <h3>displayName :</h3>
            <p>{{item.displayName }}</p>
        </div>

    </div>
</template>

<script>
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created () {
        var items = this.get_exStorage(this.sysConst.STORAGE_KEY_userData);
        this.item = items[0]
//        console.log( this.item)
        this.check_userState(this.sysConst.STORAGE_KEY_userData, this)
    },
    data () {
        return {
            user_id : '',
            item : [],
        }
    },
    methods: {
    }
}
</script>