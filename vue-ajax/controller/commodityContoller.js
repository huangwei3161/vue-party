let commodityServer=require("../server/commodityserver");
module.exports.menu=function(req,res){
    
    let commodity=new commodityServer()
    commodity.gettopic(function(data){
        console.log(data);
        res.json(data);
    });
};