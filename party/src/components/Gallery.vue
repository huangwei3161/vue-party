<template>
<div class="boxx">
    <div class="title1">
        <div class="line">
<h2>OUR GALLERY</h2>
        </div>
    </div>
     <div class="text">
      {{title}}
    </div>
<table class="picture">
    <div class="backcolor">
    <tr>
        <th><img src="../../img/portfolio/1.jpg" style="width:304px;height:203px;"></th>
        <th><img src="../../img/portfolio/2.jpg" style="width:304px;height:203px;"></th>
        <th><img src="../../img/portfolio/3.jpg" style="width:304px;height:203px;"></th>
        <th><img src="../../img/portfolio/4.jpg" style="width:304px;height:203px;"></th>
    </tr>
    <tr>
        <th><img src="../../img/portfolio/5.jpg" style="width:304px;height:203px;"></th>
        <th><img src="../../img/portfolio/6.jpg" style="width:304px;height:203px;"></th>
        <th><img src="../../img/portfolio/7.jpg" style="width:304px;height:203px;"></th>
        <th><img src="../../img/portfolio/8.jpg" style="width:304px;height:203px;"></th>
    </tr>
    </div>
</table>

</div>
</template>

<script>

export default {
  name: 'gallery',
  data: function(){
      return {
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
        list:[""],
        itemprice:[
          {text:"",align:""},
          {text:"",align:""},
          {text:"",align:""}
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxx{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
   margin: 0;
   height: 780px;
   background: linear-gradient(45deg, #5b0072 54%, #3a0157 100%);
   padding: 90px 50px;
   color: #ffffff9c;
}
.title1{
    
    display: flex;
    justify-content: center;
    align-items: center;
   font-size: 18px;
   color: #E91E63;
   height: 126px;
}
.line{
    height: 40px;
    border-bottom: 2px solid  #E91E63;
     display: flex;
    justify-content: center;
    align-items: center;
}
.text{
    position:absolute;
    height: 80px;
    margin-top: 120px;
    text-align: center;
   
}
.picture{
    height: 450px;
    margin-top: 20px;
    padding: 0px;
}
.backcolor{
    padding:0;
    margin:0;
    background-color: black;
}
img{  
                cursor: pointer;  
                transition: all 0.6s;  
            }  
img:hover{
  transform: scale(1.08);
  background-color: red;
}

</style>
