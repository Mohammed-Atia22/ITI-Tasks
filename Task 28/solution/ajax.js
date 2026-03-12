$("#send").click(function(){
    $("#h1id").load("./ajax.json", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});


//${$("#name").val()}
$("#submit").click(function(){
    $.get("./ajax.json", function(data, status){
        const person = data.filter(d => {
            return d.name === $("#name").val();
        });
        console.log(person);
        $("#person").text(JSON.stringify(person));
    });
});