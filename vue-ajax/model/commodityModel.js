let SqlBase=require("./sqlbase");
class commodityModel extends SqlBase{
    constructor(){
        super();
    }
    getCommodityById(callback){
        let sql=`select * from commodity`;
        this.connection.query(sql,function(err,rest){
            if(err){
                console.log("[查询] - ", err.message);
                return;
            }
            console.log(rest);
            callback(rest);
        })
    }
    
}
module.exports =commodityModel ;