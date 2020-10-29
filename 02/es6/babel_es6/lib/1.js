"use strict";

var a = 12;
var b = 5;

var arr = [{ a: a, b: b }, { b: b, a: a }];

arr.sort(function (json1, json2) {
  return json1.a = json2.a;
});
alert(arr[0].a);