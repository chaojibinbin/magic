<template>
<div class="bg">  
<svg class="icon biankuang-anniu" aria-hidden="true">
    <use xlink:href="#icon-guanbi"></use>
</svg>
<svg class="icon biankuang-anniu" aria-hidden="true">
    <use xlink:href="#icon-quanping"></use>
</svg>
<svg class="icon biankuang-anniu" aria-hidden="true">
    <use xlink:href="#icon-suoxiao"></use>
</svg>
  
</div>

</template>

<script>
  export default {
    data () {
      return {
        
      }
    },



    computed: {
 
      },
    }
  
</script>
<style lang="scss" scoped>
.bg{
-webkit-app-region: drag;
width: 100%;
height: 30px;

}
.biankuang-anniu{
float: right;
width: 1.2em;
height: 1.2em;
-webkit-app-region: no-drag;
margin-top: 5px;
margin-right: 5px;
padding: left 5px right 5px;; ;
}
</style>
