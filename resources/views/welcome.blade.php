<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>FCAT CPD Tracker</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

  <!-- Styles -->
  <style>
    html, body {
      background-color: #fff;
      color: #636b6f;
      font-family: 'Nunito', sans-serif;
      font-weight: 200;
      height: 100vh;
      margin: 0;
    }

    .full-height {
      height: 100vh;
    }

    .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .position-ref {
      position: relative;
    }

    .top-right {
      position: absolute;
      right: 10px;
      top: 18px;
    }

    .content {
      text-align: center;
    }

    .title {
      font-size: 84px;
    }

    .links > a {
      color: #636b6f;
      padding: 0 25px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
    }

    .m-b-md {
      margin-bottom: 30px;
    }
  </style>




  <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>


  <script>
    tinymce.init({
      selector: '#mytextarea',
      plugins: 'print preview  searchreplace autolink autosave save fullscreen image link media table hr insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
      // mobile: {
      //   plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'
      // },
      menubar: false,
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
      // autosave_ask_before_unload: true,
      autosave_interval: "30s",
      // autosave_prefix: "{path}{query}-{id}-",
      // autosave_restore_when_empty: false,
      // autosave_retention: "2m",
      // image_advtab: true,
      // content_css: '//www.tiny.cloud/css/codepen.min.css',
      // link_list: [
      // { title: 'My page 1', value: 'http://www.tinymce.com' },
      // { title: 'My page 2', value: 'http://www.moxiecode.com' }
      // ],
      // image_list: [
      // { title: 'My page 1', value: 'http://www.tinymce.com' },
      // { title: 'My page 2', value: 'http://www.moxiecode.com' }
      // ],
      // image_class_list: [
      // { title: 'None', value: '' },
      // { title: 'Some class', value: 'class-name' }
      // ],
      // importcss_append: true,
      // height: 400,
      // templates: [
      // { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
      // { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
      // { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
      // ],
      // template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
      // template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
      // height: 600,
      // image_caption: true,
      // quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
      // noneditable_noneditable_class: "mceNonEditable",
      // toolbar_mode: 'sliding',
      // spellchecker_dialog: true,
      // spellchecker_whitelist: ['Ephox', 'Moxiecode'],
      // tinycomments_mode: 'embedded',
      // content_style: ".mymention{ color: gray; }",
      // contextmenu: "link image imagetools table configurepermanentpen",
      // a11y_advanced_options: true,
      // /*
      // The following settings require more configuration than shown here.
      // For information on configuring the mentions plugin, see:
      // https://www.tiny.cloud/docs/plugins/mentions/.
      // */
      // mentions_selector: '.mymention',
      // mentions_fetch: mentions_fetch,
      // mentions_menu_hover: mentions_menu_hover,
      // mentions_menu_complete: mentions_menu_complete,
      // mentions_select: mentions_select,
    });
  </script>


</head>
<body>
  <div class="flex-center position-ref full-height">
    @if (Route::has('login'))
    <div class="top-right links">
      @auth
      <a href="{{ url('/home') }}">Home</a>
      @else
      <a href="{{ route('login') }}">Login</a>

      @if (Route::has('register'))
      <a href="{{ route('register') }}">Register</a>
      @endif
      @endauth
    </div>
    @endif

    <div class="content">
      <div class="title m-b-md">
        CPD Tracker
      </div>

      <div class="links">
        <a href="https://laravel.com/docs">Docs</a>
        <a href="https://laracasts.com">Laracasts</a>
        <a href="https://laravel-news.com">News</a>
        <a href="https://blog.laravel.com">Blog</a>
        <a href="https://nova.laravel.com">Nova</a>
        <a href="https://forge.laravel.com">Forge</a>
        <a href="https://vapor.laravel.com">Vapor</a>
        <a href="https://github.com/laravel/laravel">GitHub</a>
      </div>

      <h1>TinyMCE Quick Start Guide</h1>
      <form method="post">
        <textarea id="mytextarea">Hello, World!</textarea>
      </form>

    </div>
  </div>
</body>
</html>
