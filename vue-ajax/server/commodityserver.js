let commodityModel=require("../model/commodityModel");
class commodityServer{
    constructor(){}
    gettopic(callback){
        let commoditymodel=new commodityModel();
        commoditymodel.getCommodityById(function(data){
            console.log(data);
            callback(data);
        })

        }
}
module.exports=commodityServer;