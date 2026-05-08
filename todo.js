let prodect = document.getElementById("project-div")
let loadingStatus = document.getElementById('status')

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res => {
        loadingStatus.classList.add('hidden')
        return res.json()
    }))
    .then((data => {
        data.forEach((item) => {
            let card = document.createElement("div");
            card.classList.add("card")
            if (item.completed) card.classList.add("done")

            card.innerHTML = `
                <span class="card-id">Todo #${item.id}</span>
                <p class="card-title">${item.title}</p>
                <span class="card-status ${item.completed ? 'completed' : 'pending'}">
                    ${item.completed ? 'Completed' : 'Pending'}
                </span>
            `
            prodect.appendChild(card)
        })
    }))
    .catch((check) => {
        console.log(check)
        loadingStatus.innerText = check
    })
