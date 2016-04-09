require('benv').setup(function(){
    console.log(window.angular);
    console.log('Loaded window?')
})


var service ={};
service.test = function(){
    return 'Service Booted Up! :)';
};
service.logs = [];
service.log = function(msg){
    msg = Date.now() + ': ' + msg;
    service.logs.push(msg);
    if (service.testDefer){
        service.testDefer.notify(msg);
    }
};
service.promiseOrderTest = function(){
    service.log("Doing wait 5...");//1
    var prom10 = $q.defer();
    //Wait 7.5 seconds for the 5 second wait to finish
    $timeout(function(){
        prom10.resolve();
        service.log("doing wait10...");//1
    }, 7500);

    var testDefer = $q.defer();

    $q.all([
        service.doWait5().then(function(val){
            service.log('Result of DoWait5: ' + val);//9
        }),
        prom10.promise.then(function(){
            return service.doWait10().then(function(val){
                service.log('Result of DoWait10: ' + val);//9
            })
        })
    ]).then(function(result){
        testDefer.resolve(result);
    });

    service.testDefer = testDefer;
    return testDefer.promise.then(function(result){
        return 'Promise Test Done ' + service.logs.join('\r\n') + '\r\n Result was ' + result;
    });

};

service.doWait5 = function(){
    var promise = service.wait5().then(function doWait5Then1(val){
        service.log('doWait5: Then #1 - Resolved and doing something  with val ' + val); //5
        return 'Hello From doWait5Then1';
    }).then(function doWait5Then2(val){
        service.log('doWait5: Then #2 - Resolved and doing something else with val ' + val); //6
        return 'Hello From doWait5Then2';
    }).finally(function doWait5Finally(val){
        service.log('doWait5: Finally - FINALLY DONE! With val ' + val); //7
        return 'Hello From doWait5Finally';
    });
    return promise.then(function(val){
        service.log('doWait5: Then #3 - Another Then before Returning! With val ' + val); //8
        return 'doWait5 Is done';
    });
};
service.wait5 = function(){
    var defer1 = $q.defer();
    var defer2 = $q.defer();
    defer2.resolve('immediate Resolve');
    defer2.promise.then(function terribleSyncFn(val){
        service.log('wait5: defer2: Then #1 - spinning for 5 seconds val: ' +val); //2
        var ts = Date.now();
        var tsTo = ts + 5000;
        var count = 0;
        while (ts<tsTo){
            //SPINNNNNNNN
            ts = Date.now();
            count++;
        }
        service.log('wait5: defer2: Then #1 - Done Spinning for 5 seconds (Looped ' + count + ' times in 5000ms, ' +count/5000+'loop/ms)'); //3
        return 'Hello From wait5:terribleSyncFn'
    }).finally(function defer2Finally(val){
        service.log('wait5: defer2: Finally - resolved with ' + val); //4
        defer1.resolve('Hello from defer2Finally');
    });
    return defer1.promise;
};

service.doWait10 = function(){
    var promise = service.wait10().then(function doWait10Then1(val){
        service.log('dowait10: Then #1 - Resolved and doing something  with val ' + val);//2
        return 'Hello From doWait10Then1';
    }).then(function doWait10Then2(val){
        service.log('dowait10: Then #2 - Resolved and doing something else with val ' + val);//5
        return 'Hello From doWait10Then2';
    }).finally(function doWait10Finally(val){
        service.log('dowait10: Finally - FINALLY DONE! With val ' + val);//7
        return 'Hello From doWait10Finally';
    });
    return promise.then(function(val){
        service.log('dowait10: Then #3 - Another Then before Returning! With val ' + val);//8
        return 'dowait10 Is done. The ending value is ' + val;
    });
};
service.wait10 = function(){
    var defer1 = $q.defer();
    defer1.promise.then(function terribleSyncFn(val){
        service.log('wait10: defer1: Then #1 - spinning for 5 seconds val: ' + val);//3
        var ts = Date.now();
        var tsTo = ts + 10000;
        while (ts<tsTo){
            //SPINNNNNNNN
            ts = Date.now();
        }
        service.log('wait10: defer1: Then #1 - Done Spinning for 5 seconds ');//4
        return 'Hello From wait10:terribleSyncFn'
    }).finally(function(val){
        service.log('wait10: defer1: Finally - resolved with ' + val);//6
        return 'Hello From wait10 Finally'
    });
    defer1.resolve('Immediate Resolve');
    return defer1.promise;
};


function worker(self){
    self.onMessage = function(e){
        service.promiseOrderTest().then(function(result){
            self.postMessage(result);
        })
    }
}
//This will be required through browserify, so export the service
module.exports = worker;