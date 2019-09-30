<template>
<div class="boxx">
    <div class="title1">
        <div class="line">
<h2>TESTIMONIALS</h2>
        </div>
    </div>
     <div class="text">
      {{text}}
    </div>
<div class="boxx1">
<div class="box1">
<p>{{text}} </p>
<h3>Willim</h3>
<h4>Marketing</h4>
</div>
<div class="box1">
<p>{{text}} </p>
<h3>Willim</h3>
<h4>Marketing</h4>
</div>
<div class="box1">
<p>{{text}} </p>
<h3>Willim</h3>
<h4>Marketing</h4>
</div>
</div>

    


</div>
</template>

<script>

export default {
  name: 'gallery',
  data: function(){
      return {
        text:" Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
        list:[""],
    
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
   background:#280045;
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
    border-bottom: 1px solid  #E91E63;
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
.boxx1{
    display: flex;
    justify-content: space-between;
    height: 400px;
    transform: translateY(-100px);
}
.box1{
    
    height: 280px;
    width: 340px;
    min-height: 250px;
  
}
p{
     display: block;
     font-style: italic;
    margin: 0 auto 15px auto;
    background: #f1f1f1;
    width: 280px;
    border: 1px solid #dcdcdc;
    border-radius: 15px 15px 0 15px;
    padding: 22px 15px;
    font-size: 15px;
    color: #686868;
}
h3{
 text-align: center;
}
h4{
    text-align: center;
}
</style>
