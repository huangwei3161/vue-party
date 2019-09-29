<template>
  <div class="hello">
    <h1>PRICE</h1>
    <div class="line"></div>
    <div class="text">
      {{title}}
    </div>
    <div class="content">
      <div class="item" v-for="(item,index) in itemprice" :key="index">
        <div class="head">Per Day</div>
        <div class="row">
          <div>
            <div class="columnline"></div>
            <div class="row-text">{{item.text}}</div>
          </div>
          <div class="price">{{item.price}}</div>
        </div>
        <div class="con-text">
          {{title}}
        </div>
        <ul>
          <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
        <div class="register">REGISTER</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'new1',
  data: function(){
      return {
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
        list:["Entrance","Lunch & Snacks","Custom Badge","Certificate"],
        itemprice:[
          {text:"Basic",price:"$15"},
          {text:"Standard",price:"$45"},
          {text:"Premium",price:"$85"}
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    margin: 0;
    height: 800px;
    background-color: #280045;
    padding-top: 20px;
  }

  h1{
    text-align:center;
    color: #E91E63;
  }

  .text{
    width: 70%;
    margin :0 auto;
    margin-top: 20px;
    color: #BE87CB;
  }

  .line{
    width: 50px;
    height: 3px;
    background-color: #E91E63;
    margin:20px auto;
  }

  .content{
    width: 70%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .item{
    width: 30%;
    height: 550px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .register{
    width: 200px;
    height: 50px;
    background-color: #F90048;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    align-self: center;
    border-radius: 5px;
    font-weight: 600;
  }

  .register:hover{
    background-color: #c8003a;
  }

  .row{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .head{
    color: #673AB7;
    font-weight: 600;
    margin: 30px 0 0 30px;
  }

  .columnline{
    background-color: #9C27B0;
    width: 5px;
    height: 30px;
    border-radius: 2px;
    margin-left: 20px;
    display: inline-block;
  }

  .row-text{
    color: #F90048;
    font-size: 30px;
    font-weight: 700;
    display: inline-block;
    margin-left: 10px;
  }

  .price{
    color: #673AB7;
    margin-right: 20px;
    font-size: 35px;
    font-weight: 700;
  }

  .con-text{
    width: 90%;
    margin: 0 auto;
    text-align: justify;
  }

  .item>ul{
    margin-left: 40px;
  }

  .item>ul li{
    margin-top: 5px;
    text-align: left;
  }

  .item>ul li:hover{
    color:#F90048;
  }
</style>
