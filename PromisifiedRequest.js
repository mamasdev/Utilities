
const Request = (options) => {
    return new Promise((resolve, reject) => {


        request(options, function (error, response, body) {

            response.on('data', (d) => {
                process.stdout.write(d)
            })


            if (!error && response.statusCode == 200) {
                resolve(body);


            } else {
                console.log("Error " + response.statusCode)

                reject(error);
            }
        })


    })
}