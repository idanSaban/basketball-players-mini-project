class APIManager {
    constructor(renderer) {
        this.renderer = renderer
    }
    getPlayers(input) {
        $.get(`/teams/${input}`,(data) => {
            console.log(data)
            this.renderer.render(data)
        })
    }
}