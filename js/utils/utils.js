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
function getINPC(){
    var settings = {
        "url":"https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP1/datos/oportuno?token=258afae10151e5eeab9116d68ba1d03f983297ee5d25881f03a893d18c811106",
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {

        var numb = response.bmx.series[0].datos[0].dato;
        numb = parseFloat(numb).toFixed(4)

        var dat = response.bmx.series[0].datos[0].fecha;

        $("#INPCD").empty();
        $("#INPCD").append("<div>INPC Publicado el 10/10/2025:</div>");
        $("#INPCV").empty();

        $("#INPCV").append("<b style='color: red;'>" + numb + "</b>");
        console.log ();
    });
}
function getDateToday(){
    const d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth() +1 ;
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
    var mm = d.getMonth() + 1;
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