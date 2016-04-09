

module.exports = function (self) {
    var benv = require('benv');
    benv.setup(function(){
        debugger;
        console.log(window, document)
        var angular = require('angular');
        self.addEventListener('message',function (ev){
            var startNum = parseInt(ev.data); // ev.data=4 from main.js

            setInterval(function () {
                var r = startNum / Math.random() - 1;
                self.postMessage([ startNum, r, angular.isNumber(r) ]);
            }, 500);
        });
    })
};
