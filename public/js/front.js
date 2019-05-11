//let Submit = ;

document.querySelector("#botaozinho")
                                    .addEventListener("click", event => {
                                      event.preventDefault();
                                      const inputs = document.querySelectorAll("input");
                                      console.log("worked.")
                                      if (inputs[0].value && inputs[1].value && inputs[2].value ){

                                        let jUser = JSON.
                                            stringify(
                                            {
                                            "userName":inputs[0].value,
                                            "password":inputs[1].value,
                                            "eMail":inputs[2].value	
                                            }	
                                          )

                                        fetch('http://127.0.0.1:8081/User', {
                                          method:'POST',
                                          body: jUser
                                        })
                                          .then(console.log("Ok!"))
                                      }

	})