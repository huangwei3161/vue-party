<template>
  <div class="hello">
    <h1>CONTACT US</h1>
    <div class="line"></div>
    <div class="text">
      {{title}}
    </div>
    <div class="content">
      <div class="left">
        <div v-for="(item,index) in leftContent" :key="index" class="item">
          <div class="type">
            <span :class="leftContent[index].iclass"></span>
            <span>{{leftContent[index].type}}</span>
          </div>
          <div class="left-text">{{leftContent[index].content}}</div>
        </div>
      </div>
      <div class="right">
        <input type="text" placeholder="Full Name"/>
        <input type="text" placeholder="Email"/>
        <textarea class="message" placeholder="Message"></textarea>
        <div class="send-button">Send</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new2',
  data: function(){
      return {
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
        leftContent:[
          {
            iclass:"iconfont icon-dingwei1",
            type:"ADDRESS",
            content:"MN-12 Lincon Street, NewYork 12356, USA"
          },
          {
            iclass:"iconfont icon-weibiaoti-",
            type:"PHONE NUMBER",
            content:"+1 2345 67890 12"
          },
          {
            iclass:"iconfont icon-youjian",
            type:"EMAIL",
            content:"name@website.com"
          }
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

  .left{
    width: 40%;
    height: 500px;
    float: left;
    background-color: #280045;
    margin-left: 10px;
  }

  .right{
    width: 50%;
    height: 500px;
    float: right;
    background-color: #280045;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }

  .content{
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
  }

  input{
    width: 500px;
    height: 50px;
    padding-left: 20px;
    display: block;
    float: right;
    margin-right: 50px;
  }

  textarea{
    width: 500px;
    height: 200px;
    padding: 15px 0 15px 20px;
    margin-right: 50px;
  }

  .send-button{
    width: 100px;
    height: 50px;
    background-color: #E91E63;
    color: #ffffff;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    margin-right: 50px;
  }

  .send-button:hover{
    background-color:  #081e5b;
  }

  span{
    color: #E91E63;
    margin-right: 10px;
  }

  .left-text{
    color: #BE87CB;
    margin:0 0 20px 25px;
  }

  .item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .type{
    margin-bottom: 20px;
  }
</style>
