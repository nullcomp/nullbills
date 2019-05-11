console.log("oi")
let Submit = document.querySelector("#botaozinho");

Submit.addEventListener("click", event => {
		event.preventDefault();
		const inputs = document.querySelectorAll("input");
		console.log("out")
		if (inputs[0] && inputs[1] && inputs[2]){
			console.log("insede")
			let jUser = JSON.
					stringfy(
					 {
					"userName":inputs[0].value,
					"password":inputs[1].value,
					"eMail":inputs[2].value	
					}	
				)

			console.log(jUser);
		}

	})