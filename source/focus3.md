## 前端框架套件 -- jQuery, backbone.js, angular.js 與 react.js

 jQuery, backbone.js, angular.js 與 react.js 等開放原始碼專案都是屬於『前端』的顯示框架，但是初學者要清楚的理解這些框架的差別，與可以適用在哪些情況，其實並不容易，因為太多的javascript框架已經到了令人眼花撩亂的程度了。
 
 因此、雖然筆者只用 jQuery 寫過幾個小程式，看了一本backbone.js的書，沒有寫過angular.js與react.js，但是看了幾篇相關的文章，也斗膽在此分享一下自己對這些框架的理解與看法，讓大家可以在決定要學習哪個框架的時候，能夠不至於迷失在五里霧中。
 
### jQuery
 
 jQuery 其實是用來處理 HTML 的樹狀結構 DOM 的一個函式庫，透過物件導向的  a.b().c.d()....... 這樣的『鏈式語法』讓您可以用簡短的呼叫去巡覽、取得並處理對應的樹狀節點(node)，這種『鏈式語法』可以讓程式碼縮短，用很簡潔的語法完成節點的取得與處理動作。
 
 舉例而言、在w3school網站當中有下列的範例，該範例示範了如何用 jQuery 用很簡潔的語法做出滑動的效果。
 
 * <http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_chaining>
 
```javascript
 $(document).ready(function()
  {
  $("button").click(function(){
    $("#p1").css("color","red").slideUp(2000).slideDown(2000);
  });
});
```
 
 這種『鏈式語法』的設計關鍵其實是在物件的成員函數中，盡可能的用 return this傳回自身。舉例而言，假如我們定義下列這樣一個物件，並在每個成員函數的最後都傳回this，那麼我們就可以用 obj.a().b().c().a().d().c().....這樣的語法進行鏈式呼叫了。
 
```javascript
 var obj = {
   a:function() {... return this; }
   b:function() {... return this; }   
   c:function() {... return this; }   
   d:function() {... return this; }   
 }
```
 
 另外、因為jQuery是集合導向的作法，每次都是處理一大堆節點，搭配上『鏈式語法』之後，就可以用一條鏈式語法對一大堆的節點進行連續的處理動作，這比起每次都要寫迴圈的方式要有效率多了。
 
 另外、jQuery 也支援了一些像 post(), ajax() 與伺服端溝通的函數，讓網頁設計者可以用統一的語法搞定網頁的前端處理工作。
 
### Backbone.js
 
 熟悉『設計模式』的朋友們應該聽說過MVC這個著名的設計模式，也就是『Model-View-Controller』，該模式將一個系統分成背後的『模型』(Model)、『顯示』(View)與連接的『控制』(Controller)等三大部份，這樣就能將模型與顯示兩者分開，然後再用controller將兩者結合在一起。
 
 傳統上這種方法會用在『網路程式或視窗程式』上。對於web而言，我們通常會將model放在後端的伺服器，而將view放在前端的瀏覽器當中。
 
 但是、由於javascript+HTML5這些技術讓瀏覽器可以承受的工作越來越多，因此前端就越來越複雜了，於是前端本身有時就包含了複雜的模型與控制部份，這時候就有人想到要在前端實現完整的MVC架構，以便處理這些複雜的工作，於是像backbone.js這樣的 前端MVC框架就被實現出來了。
 
 如果您對backbone.js想有個初步的認識，可以參考下列文章，
 
 * [Javascript 前端工具 Backbone.js Framework 初學介紹](http://blog.wu-boy.com/2012/04/backbonejs-framework-tutorial-example-1/)
 
 在 backbone.js 當中，實現的並不是 Model-View-Controller 這樣的模式，而是Model-Collection-View 這三類物件，以及利用event進行串連的方式，除此之外，javascript語言本身就扮演了某種程度的controller角色，因此您也可以輕易的將jQuery與backbone.js 搭在一起使用，兩者可以很完美的融合運作，不會有任何違和感。
 
 backbone.js 由於使用了 Underscore.js 這個框架，可以很容易的進行集合的鏈式處理，而 Underscore.js 框架裡又有一個簡易的樣板引擎，可以用來將樣板轉換成HTML區塊輸出，只要用view物件搭配Underscore.js，就可以得到一個相當完整的 MVC 框架了。
 
 在 model 部份，backbone 的模型資料有任何修改時，都會觸發一些資料修改事件，只要在這些事件當中加入對應的程式碼，例如更新畫面或回傳資料到伺服器，就可以成為一個完整的網頁應用程式了。
 
### React.js
 
 React.js 是 facebook 公司所創建的一個開源專案，扮演的角色主要是 MVC 架構中的 View 角色，在 React.js 的官網中有個非常簡單的範例如下：
 
```html
 <!DOCTYPE html>
<html>
  <head>
    <script src="build/react.js"></script>
    <script src="build/JSXTransformer.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/jsx">
      React.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```
 
 這個範例大概可以說是 React.js 版本的 hello world! 您可以看到其中的關鍵部份是 React.render  這一段。
 
```javascript
      React.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
```
 
 React 的特別之處是在 javascript 裡面放入了 HTML/XML 的內容，以下是 react官網中的一段關鍵描述，說明了react為何要搭配 JSXTransformer 去將 HTML/XML 語法轉換成 javascript 的原因，這樣就可以將　HTML/XML 完全的 javascript 化了。
 
 > The XML syntax inside of JavaScript is called JSX; check out the JSX syntax to learn more about it. In order to translate it to vanilla JavaScript we use `<script type="text/jsx">` and include JSXTransformer.js to actually perform the transformation in the browser.
 
 看清楚上述範例之後，您可以試著看看 [5 Practical Examples For Learning The React Framework](http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/) 這篇文章，該文章用 jsFiddle 提供了五個活生生的線上範例，讓您可以直接感受到 React.js 的功能，這五個範例如下：
  
 * Timer -- <http://jsfiddle.net/martinaglv/3fZT2/light/>
 * Navigation menu -- <http://jsfiddle.net/martinaglv/sY6nX/light/>
 * Real-time search -- <http://jsfiddle.net/martinaglv/3N6D3/light/>
 * Order form -- <http://jsfiddle.net/martinaglv/mr7gY/light/>
 * Image app with AJAX -- <http://jsfiddle.net/martinaglv/Bnhe8/light/>
 
 看完上述的範例，我對 react.js 的認知大概是，一種將 XML/HTML 包在 javascript 裡撰寫的技術，用一套物件架構將網頁呈現過程包在物件內部，將 HTML/XML 的呈現動作完全變成 javascript 的物件。
 
### Angular.js
 
 雖然最近 React.js 的勢頭似乎有點蓋過 Angular.js 了，但是瞭解一下 Angular.js 也是不錯的，您可以看看 [Learn AngularJS With These 5 Practical Examples](http://tutorialzine.com/2013/08/learn-angularjs-5-examples/) 這篇文章與其中的範例。
 
 我發現 Angular.js 的想法似乎與 React.js 完全相反, Angular 感覺是以 HTML 的 `ng-*` 自訂屬性為主，所發展出來的一套顯示框架，像是 ng-app, ng-controller, ng-model, ng-show 等屬性，然後將 `ng-*` 屬性、嵌入的 `{{*}}` 變數以及 `$` 為字首的 javascript 變數或函數關聯起來，形成一套 MVC 架構。
 
所以我認為 Angular.js 應該是一套完整的 MVC 架構, 不需要再和其他框架結合起來就能運作了。相反的， facebook 則建議 React.js  應該和 [Flux 這個架構搭配](http://facebook.github.io/flux/docs/todo-list.html) , 才能形成更完整的架構。（當然您也可以將 React.js 拿來和 backbone.js 搭配）

### 結語

對於這些前端框架的用途，筆者已經困惑好久了，寫完這篇文章，腦袋裏終於有些似懂非懂的概念了，希望我的理解沒有錯誤阿！



 
 