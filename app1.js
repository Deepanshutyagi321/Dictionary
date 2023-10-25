let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector("button");
let body = document.querySelector("body");

// Create the <ul> element
let ul = document.createElement("ul");
body.appendChild(ul);

async function getMeaning() {
    try {
        let word = document.querySelector("input").value;
        let res = await axios.get(url + word);
        console.log(res.data);
              
        // Create a new <li> element for each definition and add it to the <ul>
            ul.innerText = "";
            let li = document.createElement("li");
            li.innerText =  res.data[0].meanings[0].definitions[0].definition;
            ul.appendChild(li);
      
    } catch (err) {
        console.log(err);
       ul.innerText = "";
        // Create a new <li> for displaying the error message
        let li = document.createElement("li");
        li.innerText = "Error: " + err;
        ul.appendChild(li);
    }
}

btn.addEventListener("click", getMeaning);
