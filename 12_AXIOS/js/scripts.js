// 1 - instalação

console.log(axios);

// 2 - primeiro request

const getData = async () => {

    try {
         const response = await postsFetch.get("/users",
         // 4 - definindo headers
        {
            headers: {
                "Content-Type": "application/json",
                custom: "header"
            },
        }
        );

         console.log(response);

         return response.data;
    } catch (error) {
        console.log(error);
    }
}

getData()

// 3 - imprimindo dados na tela

const container = document.querySelector("#user-container");

const printData = async() => {

    const data = await getData()

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");

        const emailElement = document.createElement("p");

        const phoneElement = document.createElement("p");

        phoneElement.textContent = user.phone

        emailElement.textContent = user.email;

        nameElement.textContent = user.name;

        div.appendChild(phoneElement)

        div.appendChild(emailElement)

        div.appendChild(nameElement)

        container.appendChild(div)
    })
}

printData()

// 5 - post

const form = document.querySelector("#post-form");

const titleInput= document.querySelector("#title");

const bodyInput = document.querySelector("#body");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
    });
});

