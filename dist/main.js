// const renderer = new Renderer()
const api = new APIManager(new Renderer())

$("#get").on("click", function () {
    const input = $("#input").val()
    api.getPlayers(input)
})


