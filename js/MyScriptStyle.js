function empty(eltname) {
    var elt = document.getElementById(eltname)
    var result = true;
    if (elt.value.length == 0) {
        elt.setAttribute("class", "textbox-error")
        result = true;
    }
    else
    {
        elt.setAttribute("class", "textbox-normal")
        result = false;
    }
    return result;
}

function valditeform()
{
    if (!empty("loginid") & !empty("passwordid")){
        return true;
    }
    
  return false;
    
}

function valditeform1() {
    if (!empty("userid") & !empty("emailid")) {
        return true;
    }

    return false;

}

function validation(){
    if (!empty("NameR")  & !empty("EmailR") & !empty("MessageR"))
    {
        return true;
    }

    return false;
}
