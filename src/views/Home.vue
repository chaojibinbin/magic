<template>
<div >

<div  class="bg">  
<svg @mouseenter="guanbi1=!guanbi1;uguanbi1=!guanbi1"   @mouseleave="guanbi1=!guanbi1;uguanbi1=!guanbi1" class="icon biankuang-anniu" aria-hidden="true" @click="guanbi">
    <use v-if="uguanbi1" xlink:href="#icon-guanbi"></use>
       <use v-if="guanbi1" xlink:href="#icon-guanbi-copy"></use>
</svg>
<svg  @mouseenter="quanping1=!quanping1;uquanping1=!uquanping1;suofang1=!suofang1;usuofang1=!usuofang1"  
 @mouseleave="quanping1=false;uquanping1=true;suofang1=false;usuofang1=true"  
class="icon biankuang-anniu" aria-hidden="true" @click="daxiao">
    <use v-if="fullshow&uquanping1"  xlink:href="#icon-quanping"></use>
     <use v-if="fullshow&quanping1"  xlink:href="#icon-quanping-copy"></use>
      <use v-if="unfullshow&usuofang1" xlink:href="#icon-suofang"></use>
      <use v-if="unfullshow&suofang1" xlink:href="#icon-suofang-copy"></use>
</svg>
<svg   @mouseenter="suoxiao1=!suoxiao1;usuoxiao=!usuoxiao1"  @mouseleave="suoxiao1=false;usuoxiao=true" class="icon biankuang-anniu" aria-hidden="true" @click="suoxiao">
    <use v-if="usuoxiao1" xlink:href="#icon-suoxiao"></use>
     <use v-if="suoxiao1" xlink:href="#icon-suoxiao-copy"></use>
</svg>
</div>
<router-view/>



</div>


</template>

<script>
  export default {
    data () {

      return {
        guanbi1:false,
        uguanbi1:true,
        fullshow:true,
        quanping1:false,
        uquanping1:true,
        suofang1:false,
        usuofang1:true,
        unfullshow:false,
        suoxiao1:false,
        usuoxiao1:true
      }
    },

methods:{
guanbi:function(){
  const this_win = require('electron').remote.getCurrentWindow()
  this_win.close()
  
},

suoxiao:function(){
  const this_win = require('electron').remote.getCurrentWindow()
  this_win.minimize()
   this.suoxiao1=false
  this.usuoxiao1=true
},
daxiao:function(){
    const this_win = require('electron').remote.getCurrentWindow()
    let full=this_win.isMaximized()
   if(full){
      this_win.unmaximize()
     this.fullshow=true
      this.unfullshow=false
    }else{
      this_win.maximize()
      this.fullshow=false
      this.unfullshow=true
 
    }
 
}

},

    computed: {
 
      },
    }
  
</script>
<style lang="scss" scoped>
// hover





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
