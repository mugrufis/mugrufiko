(function(){
var doc = new jsPDF();
var specialElementHandlers = {
    '#score': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
	console.log("HI")
    doc.fromHTML($('#score').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});
})();