(function (global) {

  var ajaxUtils = {};

  // Returns an HTTP request object
  function getRequestObject() {
    if (global.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } else {
      global.alert("Ajax is not supported!");
      return (null);
    }
  }

  // Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendGetRequest =
    function(requestUrl, responseHandler, isJsonResponse) {
      var request = getRequestObject();
      request.onreadystatechange =
        function() {
          handleResponse(request, responseHandler, isJsonResponse);
        };
      request.open("GET", requestUrl, true);
      request.send(null); // for POST only
    };

  // Only calls user-provided 'responseHandler' function
  // if response is ready and not an error
  function handleResponse(request, responseHandler, isJsonResponse) {
    if ((request.readyState == 4) && (request.status == 200)) {

      // Default to isJsonResponse = true
      if (isJsonResponse === undefined) {
        isJsonResponse = true;
      }

      if (isJsonResponse) {
        // Automatically parse JSON if requested
        responseHandler(JSON.parse(request.responseText));
      }
      else {
        // Otherwise, return raw text/HTML
        responseHandler(request.responseText);
      }
    }
  }

  // Expose utility to the global object
  global.$ajaxUtils = ajaxUtils;

})(window);