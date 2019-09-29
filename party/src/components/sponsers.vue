<template>
  <div id="spon">
    <section id="clients" class="wow fadeInUp services">
      <div class="container">
        <div class="section-header">
          <h2>Sponsers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
        </div>

        <div class="lunbotu">
          <carousel
            class="index-carousel"
            :autoplay="true"
            :minSwipeDistance="40"
            :scrollPerPage="true"
            :speed="500"
            :perPage="1"
            :paginationPadding="10"
            :paginationSize="10"
            :loop="true" >
            <slide v-for="(item,index) in items" :key="index">
              <img  class="img"  :src='item.img' alt="">
            </slide>
          </carousel>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
       items:[
         {
           img:require("../../img/clients/client-1.png")
         },{
           img:require("../../img/clients/client-2.png")
         },{
            img:require("../../img/clients/client-3.png")
         },{
            img:require("../../img/clients/client-4.png")
         },{
           img:require("../../img/clients/client-5.png")
         },{
           img:require("../../img/clients/client-6.png")
         }, ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
<style scoped>
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
  width: 250px;
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
.lunbotu{
  margin: 0 auto;
  width: 20%;
  height: 110px;
  margin-top: 50px;
}
.img{
  width: 100%;
  height: 100px;
}
</style>