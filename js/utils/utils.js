function tipoCambioPrev() {
    var settings = {
        "url":"https://contactbook.mx/PortalV2/rest/home/tcambio/prev/today", 
        "method": "GET",
        "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
        $("#TCDF2").empty();
        $("#TCDF2").append("<div>" + getDateToday() + ":</div>");
        $("#TCDP2").empty();
        $("#TCDP2").append("<b style='color: red;'> $ " + response + " MXN</div></b>");
    });
    var settings = {
        "url": "https://contactbook.mx/PortalV2/rest/home/tcambio/prev/tomorrow", 
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#TCDF3").empty();
        $("#TCDF3").append("<div>" + getDateTomorrow() + ":</div>");
        $("#TCDP3").empty();
        $("#TCDP3").append("<b style='color: red;'> $ " + response + " MXN</div></b>");
    });
}
function getDateToday(){
    const d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }

    var date = dd + '/' + mm + '/' + yyyy;

    return date;
}
function getDateTomorrow(){
    const d = new Date();
    var dd = d.getDate() + 1;
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }

    var date = dd + '/' + mm + '/' + yyyy;

    return date;
}