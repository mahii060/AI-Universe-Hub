// Load partial data
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools.slice(0, 6)))
}

// Load all data
const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools))
}

const showData = (data) => {
    // console.log(data)
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = "";
    data.forEach(singleData => {
        const { description, features, id, links, name, published_in, image } = singleData;
        // console.log(singleData)
        cardsContainer.innerHTML += `
        <div class="col">
            <div class="card h-100 p-3">
                <img src="${image ? image : "https://shorturl.at/CFNTU"}" class="card-img-top" alt="..."
                onerror="this.src='https://shorturl.at/CFNTU'">
                <div class="card-body">
                    <h5 class="">Features</h5>
                    <ol>
                        <li>${features[0]}</li>
                        <li>${features[1]}</li>
                        <li>${features[2]}</li>
                    </ol>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center">  
                        <div>
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text"><i class="fa-solid fa-calendar-days"></i> <span>${published_in}</span></p>
                        </div>
                        <div>
                            <p class="text-danger"><i class="fa-solid fa-circle-arrow-right fa-2xl" onclick="loadCardDetails('${id}')"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
};
const loadCardDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(data => showCardDetails(data.data))
}

const showCardDetails = (cardDetails) => {
    console.log(cardDetails);
    const { accuracy, features, image_link, input_output_examples, integrations, logo, pricing, tool_name, use_cases, description } = cardDetails;
    // document.getElementById('description-title').innerText = description;
    const descriptionBody = document.getElementById('description-body');
    descriptionBody.innerHTML = '';
    descriptionBody.innerHTML += `
    <h5 class="card-title">${description ? description : "Not Available"}</h5>
    <div class="d-flex justify-content-around gap-2 mt-3">
        <div class="bg-body rounded text-center text-success p-2 fw-bold">
            <p>${pricing ? pricing[0].price : "Not Available"}</p>
            <p>${pricing ? pricing[0].plan : "Not Available"}</p>
        </div>
        <div class="bg-body rounded text-center text-warning p-2 fw-bold">
        <p>${pricing ? pricing[1].price : "Not Available"}</p>
        <p>${pricing ? pricing[1].plan : "Not Available"}</p>
        </div>
        <div class="bg-body rounded text-center text-danger p-2 fw-bold">
        <p>${pricing ? pricing[2].price : "Not Available"}</p>
        <p>${pricing ? pricing[2].plan : "Not Available"}</p>
        </div>
    </div>
    <div class="d-flex mt-3">
        <div>
            <h5>Features</h5>
            <ul>
                <li class="text-secondary text-sm">${features[1].feature_name}</li>
                <li class="text-secondary text-sm">${features[2].feature_name}</li>
                <li class="text-secondary text-sm">${features[3].feature_name}</li>
            </ul>
        </div>
        <div>
            <h5>Integrations</h5>
            <ul>
                <li class="text-secondary text-sm">${integrations ? integrations[0] : "Not Available"}</li>
                <li class="text-secondary text-sm">${integrations ? integrations[1] : "Not Available"}</li>
                <li class="text-secondary text-sm">${integrations ? integrations[2] : "Not Available"}</li>
            </ul>
        </div>
    </div>
    `;
    const detailsCard = document.getElementById('details-card');
    detailsCard.innerHTML = '';
    detailsCard.innerHTML += `
    <div class="card p-3 h-100">
        <img src="${image_link ? image_link[0] : image_link[1]} class="card-img-top" alt="..." onerror="this.src='https://shorturl.at/CFNTU'">
        <div class="card-body text-center">
            <h5 class="card-title">${input_output_examples ? input_output_examples[1].input : "Not Available"}</h5>
            <p class="card-text">${input_output_examples ? input_output_examples[1].output : "Not Available"}</p>
        </div>
    </div>
    `;
}