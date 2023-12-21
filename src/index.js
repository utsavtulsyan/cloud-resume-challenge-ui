let prod_url = 'https://resumechallenge-api.azurewebsites.net/api/GetVisitorCount'
let local_url = 'http://localhost:7071/api/GetVisitorCount'

fetch(prod_url, {
    mode: 'cors'
}).then(res => res.text()).then(data => {
    document.getElementById('vistor_count').textContent = data
})