function Promise_Resolve(str1 :string , str2:string){
	return new Promise((Resolve)=>{
		setTimeout(() => {
			if (str1 && str2) {
				Resolve(`"${str1} ${str2}"`);
			}

		}, 3000);
		
	});
}

Promise_Resolve("Hello", "World!")
.then((message)=>{
	console.log(message);
})
.catch((Error)=>{
	console.log(Error);
})
