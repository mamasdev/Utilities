function ObjectToLeanear(obj){
    let sql=""
    let keys=Object.keys(obj)
    keys.forEach(function(e){

        let what;
        if(typeof(obj[e])=="String")
            what='"'+obj[e]+'" , '
        else if(typeof(obj[e])=="Number")
            what=obj[e]+" , "
        else if(typeof(obj[e])=="Date")
            what='`'+obj[e]+'` , '


        sql+= "["+ e +"] = "+what
    })
    return obj
}