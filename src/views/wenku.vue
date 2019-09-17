<template>
<div class="wenku">
 <div class="list-card" >
    
  <div class="pdf"> 
    <img class="tubiao" src="../assets/img/pdf.png" alt="">
    <font class="font">pdf下载</font>
  
  </div>
    <div class="pdf">
    <img class="tubiao" src="../assets/img/word.png" alt="">
    <font class="font">word下载</font>
  </div>
    <div class="pdf">
    <img class="tubiao" src="../assets/img/ppt.png" alt="">
    <font class="font">ppt下载</font>
  </div>
 </div>
</div>
</template>


<script>
  export default {
    data () {
      return {
        
      }
    }

}

</script>
<style lang="scss" scoped>
// hover
.list-card{
  display: flex;
  flex-direction:row;
  justify-content: center;
  margin: 5em;
  position: relative;
  top:12vh;
  width: 80%；
  height：80vh;
}
.pdf{
  display: flex;
  flex-direction: column;
  width: 30%;
 
  margin: 1em;
  align-content: center;
  text-align: center
  
}
.tubiao{
  width: 100%;
  max-height: 50vh;
   background-color: rgba(240, 255, 255, 0.2);
}
.font{
  margin: 0.2em;
  font-size: 1.1em;
  font-weight: 900;
  
}

</style>
