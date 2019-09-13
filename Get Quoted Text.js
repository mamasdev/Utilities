var fs = require('fs');
fs.readFile("FullText.txt", "utf-8", (err, data) => {
	let arr=[]
	let pattern = /".*?"/g;

	let current;
	while(current = pattern.exec(data))
		arr.push(current);
		
	console.log(arr)

});




function GetQuoted(FileName){
	return new Promise(function(resolve,reject){
		fs.readFile(FileName, "utf-8", (err, data) => {
			if(err) reject(new Error("Error Reading The File"))
			let arr=[]
			let pattern = /".*?"/g;

			let current;
			while(current = pattern.exec(data))
				arr.push(current);
				
			resolve(arr)

		});
	})

}

GetQuoted("FullText.txt").then(function(arr){
	console.log(arr)
})