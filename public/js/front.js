document.querySelector("#botaozinho")
                                    .addEventListener("click", async event => {
                                      event.preventDefault();
                                      const inputs = document.querySelectorAll("input");
                                      console.log("worked.");
                                      if (inputs[0].value && inputs[1].value && inputs[2].value ){

                                        if (!inputs[3].value) inputs[3].value = 0;

                                        let data = JSON.
                                            stringify(
                                            {
                                            "userName":inputs[0].value,
                                            "password":inputs[2].value,
                                            "eMail":inputs[1].value,
                                            "montante":inputs[3].value
                                            }	
                                          )

                                        await fetch('http://127.0.0.1:3000/user/newUserValidation', {
                                          method:'POST',
                                          headers: { "Content-Type": "application/json" },
                                          body: data
                                        })
                                          .then( function(response) {
                                            alert("Conta criada com sucesso!\n");
                                          } )
                                          .catch((err)=>{
                                            console.log(err)
                                          })
                                        
                                      }

	})

// login script
document.querySelector("#botaozinhoLogin").addEventListener("click", async event => {
                                      event.preventDefault();
                                      const inputs = document.querySelectorAll("input");
                                      console.log("worked.")

                                      // a função abaixo precisará ser mudada quanto o front for refeito
                                      if (inputs[3].value && inputs[4].value){

                                        let data = JSON.
                                            stringify(
                                            {
                                            "userName":inputs[4].value,
                                            "password":inputs[5].value, 
                                            } 
                                          )

                                        await fetch('http://127.0.0.1:3000/user/ActionLogin', {
                                          method:'POST',
                                          headers: { "Content-Type": "application/json" },
                                          body: data
                                        })
                                          .then( function(response) {
                                            response.json()
                                              .then(token => {
                                                console.log(token['x-access-token']);
                                                localStorage.setItem("accessToken", token['x-access-token']);
                                                console.log("Redirect....")
                                                window.location.href("http://127.0.0.1:3000/user/userhome");
                                              });
                                          } )
                                          .catch((err)=>{
                                            console.log(err)
                                          })
                                        
                                      }

  })