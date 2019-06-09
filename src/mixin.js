export const Mixin =  {
  created:function(){
    this.set_sysConst()  
  },
  methods:{
    set_sysConst(){
        this.sysConst={
            URL_BASE : '/cms2',
            /* API_BASE : 'http://localhost/apiphp3/', */
            API_BASE : 'http://192.168.10.104/apiphp4/',
            SITE_NAME : 'todo3',
            STORAGE_KEY_showId : 'key_show_id',
            STORAGE_KEY_tasksData : 'key_tasks_dat',
            STORAGE_KEY_userData : 'key_todo3_user_dat',
            STORAGE_KEY_flash : 'strage_flash_key',
            AJAX_MAX_TIME : 8000,       
            TBL_BLOGS : 'todo_items',
        }
    },
    /* local storage */
    set_exStorage(key, message){
        localStorage.setItem( key, JSON.stringify(message))
    },
    get_exStorage(key){
        var dat = JSON.parse(localStorage.getItem(key) || '[]')
//        console.log( 'dat.len='+ dat.length )
        return dat
    },
    remove_exStorage(key){
        localStorage.removeItem( key );
    },
    /* user */
    check_userState(key, self){
        var store = this.get_exStorage(key)
        if( store.length >0){
            /* var user = store[0] */
            /* console.log(user.uid ) */
        }else{
            self.$router.push('/users/login')            
        }
    },
    get_userId(key ){
        var ret = '';
        var store = this.get_exStorage(key)
        if( store.length >0){
            var user = store[0]
            /* console.log(user.uid ) */
            ret = user.uid
        }       
        return ret
    },
    get_complete_name(value){
        var items =[];
        var ret = 0;
        items.push({ id : 0, name : '未完了' })
        items.push({ id : 1, name : '完了済' })
        items.forEach( function (item) {
            if(item.id == value){
                ret = item.name
//                console.log( ret );
            }
        });
        return ret
    },
    test_func(){
        return 'ABC'
    },

  }
}
