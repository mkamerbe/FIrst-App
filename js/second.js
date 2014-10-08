var second = (function(module){
             module.doit = function(resultObject){
             resultObject.prepend(Date() + '<br/>');
              };
             return module;
             }(second|| {}));