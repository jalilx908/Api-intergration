let prodect = document.getElementById("project-div")
let loadingStatus = document.getElementById('status')

fetch('https://jsonplaceholder.typicode.com/posts')

      .then((res => {
        loadingStatus.classList.add('hidden')
        return res.json()
    }))
    .then((data => {
        console.log(data);
        
        data.forEach((item) => {
            let card = document.createElement("div");
            card.classList.add("card")
            if (item.completed){ card.classList.add("done")}

            card.innerHTML = `
                <span class="card-id">Post #${item.id}</span>
                <bold class="card-title">${item.title}</bold>
                
                <small class="card-body">
                    ${item.body}
                </small>
            `
            prodect.appendChild(card)
        })
    }))
    .catch((check) => {
        console.log(check)
        loadingStatus.innerText = check
    })