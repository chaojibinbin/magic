<template>
<div>
<div class="bg">  
<svg class="icon biankuang-anniu" aria-hidden="true" @click="guanbi">
    <use xlink:href="#icon-guanbi"></use>
</svg>
<svg class="icon biankuang-anniu" aria-hidden="true" @click="daxiao">
    <use v-if="fullshow" xlink:href="#icon-quanping"></use>
      <use v-if="unfullshow" xlink:href="#icon-suofang"></use>
</svg>
<svg class="icon biankuang-anniu" aria-hidden="true" @click="suoxiao">
    <use xlink:href="#icon-suoxiao"></use>
</svg>
</div>
<div class="magic">
  <div class="magic-serch">
  <v-text-field
            label="Input something to there to Magic ！"
            single-line
            solo
          
          > </v-text-field>
          <svg class="icon mofabang" aria-hidden="true" @click="suoxiao">
    <use xlink:href="#icon-mofabang"></use>
</svg>

</div>

</div>



</div>


</template>

<script>
  export default {
    data () {
      return {
        fullshow:true,
        unfullshow:false
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
.bg{
-webkit-app-region: drag;
width: 100%;
height: 30px;
}
.magic{
position:relative;
left: 18%;
top: 40vh;
width:70%
}
.magic-serch{
top: 40vh;
width:80%;
float: left;
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
.mofabang{

  width: 2.3em;
  height: 2.3em;
  float: right;
}

</style>
