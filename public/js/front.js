//let Submit = ;

document.querySelector("#botaozinho")
                                    .addEventListener("click", async event => {
                                      event.preventDefault();
                                      const inputs = document.querySelectorAll("input");
                                      console.log("worked.")
                                      if (inputs[0].value && inputs[1].value && inputs[2].value ){

                                        let data = JSON.
                                            stringify(
                                            {
                                            "userName":inputs[0].value,
                                            "password":inputs[1].value,
                                            "eMail":inputs[2].value	
                                            }	
                                          )

                                        await fetch('http://127.0.0.1:3000/user/newUserValidation', {
                                          method:'POST',
                                          headers: { "Content-Type": "application/json" },
                                          body: data
                                        })
                                          .then( function(response) {
                                            console.log(response.json())
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
                                            "userName":inputs[3].value,
                                            "password":inputs[4].value, 
                                            } 
                                          )

                                        await fetch('http://127.0.0.1:3000/user/ActionLogin', {
                                          method:'POST',
                                          headers: { "Content-Type": "application/json" },
                                          body: data
                                        })
                                          .then( function(response) {
                                            console.log(response.json())
                                          } )
                                          .catch((err)=>{
                                            console.log(err)
                                          })
                                        
                                      }

  })