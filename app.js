const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools))
}
const showData = (data) => {
    console.log(data)
    const { description, features, id, links, name, published_in } = data;
    data.forEach(singleData => {
        console.log(singleData)
    })
}
