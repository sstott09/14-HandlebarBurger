$(".devour-form").on("submit", function(event){
    event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    $.ajax({
        method: "PUT",
        url: "/updateOne/" +burger_id
    }).then(function(data){
        console.log(data)
        location.reload()
    })
})