$(function () {

    $("#sendsendsend").click(function () {
        var name = $("#inputName").val();
        console.log(name);
        var surname = $("#inputSurname").val();
        console.log(surname);
        var email = $("#inputEmail").val();

        var API = "18C9BD218F280C4BA358B61882BFE6D7E533D82F2F5E0DD9636925D3F7067F3B0E7C07690CB346FDAEF92649EA46803B";
        postData('https://api.elasticemail.com/v2/email/send', {
            apikey: API,
            subject: "Yuki Shop Delivery",
            from: "danraiymkulov@gmail.com",
            to: [email],
            bodyText: "Hey! We have recorded your request.",
            isTransactional: false
        })
            .then(data => console.log(JSON.stringify(data))) //JSON String obtained after calling 'response.json()'
            .catch(error => console.error(error));

        function postData(url = '', data = {}) {
            // * means default value
            return fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                body: JSON.stringify(data),
            })
                .then(response => response.json()); // parses JSON response back to JavaScript obect
        }

        var textName = $("<p></p>").text("Thank you for your interest, " + name + " " + surname + ".");
        var textEmail = $("<p></p>").text("We have sent you an email to " + email + ".");
        $("#modalWindow").append(textName, textEmail);
    });

    console.log(checkedCheckboxed);
    // $('.custom-checkbox .custom-control-input').click(()=>{
    //     $('.custom-checkbox ').addClass("check");
    // // });
    // for (i; i< count; i++){
    //     console.log(i);
    //             $('.custom-checkbox .custom-control-input')[i].click(()=>{
    //                 $('.custom-checkbox .custom-control-input').addClass("check");
    //             });
    //     // console.log($('.custom-checkbox .custom-control-input')[i]);
    //     if ($('.custom-checkbox .custom-control-input')[i]  )
    //     {
    //             console.log($('.custom-checkbox .custom-control-label')[i]);
    //     }
    // }

});