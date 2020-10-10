module.exports = {
    listToObj:function(mongoarr){
        return mongoarr.map(mongoarr=>mongoarr.toObject());
    },
    ItemtoObj:function(mongoarr){
        return mongoarr ? mongoarr.toObject() : mongoarr;
    }
};