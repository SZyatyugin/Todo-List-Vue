<template>
    <li :class="{'done':todo.done}"><span class='todo' @click='setTodoDone(todo.id)'>{{todo.name}}</span><span class='todo-btn'><i v-if='todo.done' class="fa fa-check-circle-o"></i><i class="fa fa-exclamation-circle"></i><i class="fa fa-times-circle-o"></i></span></li>
</template>

<script>
export default {
    name:'AppTodoListItems',
    props:['todo'],
    methods:{
        setTodoDone(id){
           this.$emit('settododone',id) 
        }
    }
    
}
</script>

<style lang="scss">
    li{
        list-style-type:none;
        display: flex;
        flex-flow: row nowrap;
        padding:0 1em;
        border-top:1px solid lightgray;
        border-bottom: 1px solid lightgray;
        &>.todo{
            flex:1 0;
            font-size: 2em;
        }
        &>.todo-btn{
            flex:0 0 15%;
            display: flex;
            flex-flow:row nowrap;
            &>i{
                font-size: 2em;
                padding:0.2em;
            }
        }
        &.done{
            &>.todo{
                text-decoration: line-through;
            }
            &>.todo-btn>.fa-check-circle-o{
                color:green
            }
        }
    }
</style>