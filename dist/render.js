class Renderer{
    constructor(){

    }
    render(data){
        $('#players-container').empty()
        console.log({data})
        const source = $('#players-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $('#players-container').append(newHTML); 
    }
}
