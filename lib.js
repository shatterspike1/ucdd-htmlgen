var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "not yet implemented"
}

lib.generateOrderedList = function(arrayOfText) {
    return "not yet implemented"
}

lib.generateUnorderedList = function(arrayOfText) {
    return "not yet implemented"
}

lib.generateTableRow = function (arrayOfText) {
    var outStr = '<tr>';
    for (var i = 0 ; i < arrayOfText.length ; i++){
        outStr = outStr + '<td>' + arrayOfText[i] + '</td>';
    }

    outStr = outStr + '</tr>'
    return outStr;

}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var outStr = '<table>';
	for (var i = 0; i < twoDimensionalArrayOfText.length ; i++){
	    outStr = outStr + '<tr>';
	    for (var j = 0; j < twoDimensionalArrayOfText[0].length ; j++){
		    outStr = outStr + '<td>' + twoDimensionalArrayOfText[i][j] + '</td>';
		}
		outStr = outStr + '</tr>';
	}
	outStr = outStr + '</table>';
    return outStr;
}

lib.generateHyperLink = function(url, text) {
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextField = function(name) {
    return "not yet implemented"
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "not yet implemented"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    return "not yet implemented"
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib
