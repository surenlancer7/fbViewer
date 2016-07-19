(function() {
    'use strict';
    
var app = angular.module('common.directives.formBuilder', []);

app.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    controller: 'fbFormBuilderController',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        console.log('123dfsd');
        console.log(html);
        var viewModel = html;
        var resultModel = "";
        var textField = "<div class='container'><table class='table'><tbody><tr><td>Label</td><td><input placeholder = 'placeholder' type='text' name='name' value='' id='name'></td></tr><tr><td></td><td>Description</td></tr></tbody></table></div>";
        var generateTextField = function(value) {
            return "<div class='container'><table class='table'><tbody><tr><td style= 'padding-right:35px;padding-left:10px;'>"+(value.label || "")+"</td><td><input placeholder = "+(value.placeholder || "")+" type='text' name='name' value='' id="+(value.id || "")+"></td></tr><tr><td></td><td>"+(value.description || "")+"</td></tr></tbody></table></div>"
        };

        var generateCheckbox = function(value) {
            var tempCheckBox = "";
            var firstItem = "";
            angular.forEach(value.options, function(value,key) {
                if(firstItem == "") {
                    firstItem = "<td><div class='checkbox'><label><input type='checkbox' value='item'>"+(value || "")+"</label></div></td></tr>";
                }
                else {
                    var tempItem = "<tr><td></td><td><div class='checkbox'><label><input type='checkbox' value='item'>"+(value || "")+"</td></tr>"
                    tempCheckBox = tempCheckBox + tempItem;    
                }    
            });
            return "<div class='container'><table class='table'><tbody><tr><td style = 'padding-right:35px;padding-left:10px;'>Title</td>"+firstItem+tempCheckBox+"</tbody></table></div>"
        };

        angular.forEach(viewModel,function(value, key) {
            if(value.component == "textInput" || value.component == "sampleInput") {
                var tempField = generateTextField(value);
                resultModel = resultModel + tempField;
            }
            if(value.component == "checkbox") {
                var tempTextField = generateCheckbox(value);
                resultModel = resultModel + tempTextField;
            }
        });
        ele.html(resultModel);
        $compile(ele.contents())(scope);
      });
    }
  };
});

app.controller('fbFormBuilderController', function($scope) {
    
});
})();