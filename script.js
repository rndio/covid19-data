$.ajax({
    url: 'https://api.kawalcorona.com',
    type: 'get',
    dataType: 'json',

    success: function (result) {
        console.log(result);
    }
});

console.log()