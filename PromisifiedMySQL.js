

function PromisifiedQuery(db, sql, pst) {

    return new Promise((resolve, reject) => {

        if (pst == undefined) {
            db.query(sql, (err, result) => {
                if(err){
                    reject(err)
                    return
                }

                resolve(result)

            })

        } else {
            db.query(sql, pst, (err, result) => {
                if(err){
                    reject(err)
                    return
                }

                resolve(result)

            })

        }


    })
}


