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
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="">Features</h5>
                    <ol>
                        <li>${features[0]}</li>
                        <li>${features[1]}</li>
                        <li>${features[2]}</li>
                    </ol>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        `
    })
}
