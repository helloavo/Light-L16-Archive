/*
* TypeWatch 2.2.2
*
* Examples/Docs: github.com/dennyferra/TypeWatch
*
*  Copyright(c) 2014
* Denny Ferrassoli - dennyferra.com
*   Charles Christolini
*
*  Dual licensed under the MIT and GPL licenses:
*  http://www.opensource.org/licenses/mit-license.php
*  http://www.gnu.org/licenses/gpl.html
*/
!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(e.jQuery)}(this,function(e){"use strict";e.fn.typeWatch=function(t){function n(t,n){var i=e(t.el).val();(i.length>=r.captureLength&&i.toUpperCase()!=t.text||n&&i.length>=r.captureLength||0==i.length&&t.text)&&(t.text=i.toUpperCase(),t.cb.call(t.el,i))}function i(t){var i=t.type.toUpperCase();if(e.inArray(i,r.inputTypes)>=0){var a={timer:null,text:e(t).val().toUpperCase(),cb:r.callback,el:t,wait:r.wait};r.highlight&&e(t).click(function(){this.select()});var c=function(t){var i=a.wait,c=!1,u=this.type.toUpperCase();"undefined"!=typeof t.keyCode&&13==t.keyCode&&"TEXTAREA"!=u&&e.inArray(u,r.inputTypes)>=0&&(i=1,c=!0);var p=function(){n(a,c)};clearTimeout(a.timer),a.timer=setTimeout(p,i)};e(t).on("keydown paste cut input change",c)}}var a=["TEXT","TEXTAREA","PASSWORD","TEL","SEARCH","URL","EMAIL","DATETIME","DATE","MONTH","WEEK","TIME","DATETIME-LOCAL","NUMBER","RANGE"],r=e.extend({wait:750,callback:function(){},highlight:!0,captureLength:2,inputTypes:a},t);return this.each(function(){i(this)})}});