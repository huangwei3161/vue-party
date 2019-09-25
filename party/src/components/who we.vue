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
            
        </div>
    </div>
</template>
<script>
export default {
    name:"who we",
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




</style>