var navMenuHtml = '\
    <div class="container-fluid">\
        <div class="navbar-header">\
          <a class="navbar-brand" href="home.html" style="color:#cccc33" data-mt="Home"><span class="glyphicon glyphicon-home"></span></a>\
        </div>\
        <div id="navbar" class="navbar-collapse collapse">\
          <ul class="nav navbar-nav navbar-right">\
            <li class="dropdown">\
              <a class="dropdown-toggle" data-toggle="dropdown"><em data-mt="English">英文</em><span class="caret"></span></a>\
              <ul class="dropdown-menu" role="menu">\
                <li><a href="elearn.html" data-mt="English test">單字測驗</a></li>\
                <li><a href="mt.html" data-mt="Translation">逐字翻譯</a></li>\
                <li><a href="dict.html" data-mt="Dictionary Editing">字典編輯</a></li>\
              </ul>\
            </li>\
            <li class="dropdown"> \
              <a class="dropdown-toggle" data-toggle="dropdown"><span id="user"></span> <span data-mt="Account"></span><span class="caret"></span></a>\
              <ul class="dropdown-menu" role="menu">\
                <li><a data-mt="Login" href="account.html#Login" ></a></li>\
                <li><a data-mt="Logout" href="account.html#Logout"></a></li>\
                <li><a data-mt="Sign up" href="account.html#Signup"></a></li>\
              </ul>\
            </li>\
            <li class="dropdown">\
              <a class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-globe"></span><span class="caret"></span></a>\
              <ul class="dropdown-menu" role="menu">\
                <li><a onclick="Mt.switchLang(\'us\')">English</a></li>\
                <li><a onclick="Mt.switchLang(\'tw\')">中文</a></li>\
              </ul>\
            </li>\
          </ul>\
        </div>\
      </div>\
  </nav>\
';

$(function() {
  $('#navbar').html(navMenuHtml);
 Mt.show();
});