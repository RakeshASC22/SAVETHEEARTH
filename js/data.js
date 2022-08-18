
let test = document.getElementById("submitButton")
let testtext = document.getElementById("crucify")
async function testing() {
    let config = {
        "headers":{
        "Authorization": "Bearer PW9BQHE598M0MPHEDTXZVJ8XV3ZY ",
        "Content-Type": "application/x-www-form-urlencoded",
    }
};

let formRef = document.getElementById("base");
const userText = formRef.value;

let formRef2  = document.getElementById("year_input")
const userText2 = formRef2.value

let formRef3 = document.getElementById("base_unit")
const userText3 = formRef3.value
    let dataX = {
        "emission_factor": {
            "activity_id": "electricity-energy_source_grid_mix",
            "year":  userText2, 

        },
        "parameters":
            {
            "energy": Number(userText),
            "energy_unit": userText3,
            
         
            }, 

        };

    let res = await axios.post("https://beta3.api.climatiq.io/estimate", dataX,config);
    let testout = res.data
    testtext.innerHTML = `Total co2e Amount:  ${testout.co2e}  ${testout.co2e_unit} in ${userText2} `
     console.log(res)
     console.log(res.data)

    }
test.addEventListener('click', testing);

