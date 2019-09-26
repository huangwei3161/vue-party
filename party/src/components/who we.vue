<template>
    <div id="whowe">
    <section class="services">
      <div class="container">
        <div class="section-header">
          <h2>Who We Are</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..</p>
        </div>
        </div>
        </section>
        <div class="content"> 
        <div class="left">
            <div><h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2></div> 
            <div><h3>Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident</h3></div> 
            <div><p>Consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat</p></div> 
            <div><p>Dolores quae porro consequatur aliquam, incidunt fugiat culpa.</p></div> 
            <div><p>Dolores quae porro consequatur aliquam, culpa esse aute nulla.</p></div> 
            <div><p>Dolores quae porro esse aute nulla. malis nulla duis fugiat</p></div> 
        </div>
         <div class="right">
           
           <img class="img" src="../../img/about-img.png" >
           
         </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"whowe",
    props: {
    
    text: String
  }
}
</script>
<style scoped>
#whowe{
 margin: 0 auto;
}
.services {
  width: 100%;
  background: #280045;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.services .container {
  color: #e9125a;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
}
.services .container h2 {
  margin: 0 auto;
  width:250px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 3px solid #e9125a;
}
.services p {
  color: #c393c7;
  font-size: 16px;
  width: 70%;
  margin: 0 auto;
}
#whowe{
background: #280045;
}
.content{
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.left{
   height: 500px;
  width: 67%;
}
.left div h2{
  color: #C9CECE;
}
.left div h3{
  color: #D12CBE;
}
.left div{
  height: 60px;
  margin-top: 15px;
  width: 100%;
  color:#C393CB;
  margin-left: 13%;
}
.right{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  height: 500px;
  width: 33%;
  
}
.img{
width: 284px;
height: 327px;


}



</style>