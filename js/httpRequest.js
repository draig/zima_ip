var xml = createXMLHttpRequest();
function createXMLHttpRequest() {
    var xml;
    if (window.ActiveXObject) {
        try
        {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e)
        {
            xml = false;
        }
    }
    else
    {
        try
        {
            xml = new XMLHttpRequest();
        }
        catch (e)
        {
            xml = false;
        }
    }
    return xml;
}
