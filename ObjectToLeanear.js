
function GetValues(obj) {
    let sql = ""
    let keys = Object.keys(obj)
    keys.forEach(function (e) {

        let what;

        if (typeof (obj[e]) == "string")
            what = '"' + obj[e].replace(/\"/g, '\\"') + '" , '
        else if (typeof (obj[e]) == "number")
            what = obj[e] + " , "
        else if (typeof (obj[e]) == "date")
            what = '`' + obj[e] + '` , '
        else {
            if (obj[e] == null) {
                what = '"" , '
            } else {

                console.log(e + " " + obj[e])
            }
        }


        sql += what
    })

    sql = sql.substring(0, sql.length - 2)

    return sql

}

function GetTitles(obj) {
    let sql = ""
    let keys = Object.keys(obj)
    keys.forEach(function (e) {
        sql += "`" + e + "`,"
    })

    sql = sql.substring(0, sql.length - 1)

    return sql

}

function ObjectToLeanear(obj) {
    let sql = ""
    let keys = Object.keys(obj)
    keys.forEach(function (e) {

        let what;

        if (typeof (obj[e]) == "string")
            what = '"' + obj[e].replace(/\"/g, '\\"') + '" , '
        else if (typeof (obj[e]) == "number")
            what = obj[e] + " , "
        else if (typeof (obj[e]) == "date")
            what = '`' + obj[e] + '` , '
        else {
            if (obj[e] == null) {
                what = '"" , '
            } else {

                console.log(e + " " + obj[e])
            }
        }


        sql += "`" + e + "` = " + what
    })

    sql = sql.substring(0, sql.length - 2)

    return sql
}

