const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools))
}
const showData = (data) => {
    // console.log(data)
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = "";
    data = data.slice(0, 6)
    data.forEach(singleData => {
        const { description, features, id, links, name, published_in, image } = singleData;
        console.log(singleData)
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
                            <p class="text-danger"><i class="fa-solid fa-circle-arrow-right fa-2xl"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
};
