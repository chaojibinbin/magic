<template>


<div class="magic">
  <div class="magic-serch">
  <v-text-field
            label="Input something to there to Magic ！"
            single-line
            solo
          
          > </v-text-field>
          <svg class="icon mofabang" aria-hidden="true" @click="Magic">
               <use xlink:href="#icon-sousuo"></use>
          </svg>
</div>
</div>


</template>

<script>

  export default {
    data () {
      return {

      }
    },

methods:{

Magic:function(){
  this.$axios.get('api/search?ct=17&pn=0&tn=ikaslist&rn=10&lm=0&ie=utf-8&word=%E5%A3%81%E7%BA%B8',{
  }).then((Response)=>{

    console.log(Response)
  }
  )

//this.$router.push({name:'wenku'})
}



  }
  

  }
</script>
<style lang="scss" scoped>
.magic{
position:relative;
left: 15%;
top: 40vh;
width:70%
}
.magic-serch{
top: 40vh;
width:100%;
float: left;
}
.mofabang{
position: relative;
  top: -4.5em;
  width: 2.3em;
  height: 2.3em;
  float: right;
}

</style>
