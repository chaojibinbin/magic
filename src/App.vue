<template >
<div class="com">
 <router-view/>
</div>
 
</template>
<script>


export default {
  name: 'App',
  components: {
  
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" >

.com{
background:url('./assets/bg.jpg');
background-size: cover;

}
::-webkit-scrollbar { /*滚动条整体样式*/
    width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(228, 57, 60, 0.2);
    background: rgba(20, 20, 50, 0.6);
    position: absolute;
}

::-webkit-scrollbar-track { /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(228, 57, 60, 0.2);
    border-radius: 10px;
    background: #EDEDED;
    position: absolute;
}
       
</style>
