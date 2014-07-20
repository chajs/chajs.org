(function(global){

    global.packages = function(response){
        var base64 = response.data.content;
        var source = atob(base64);
        var packages  = JSON.parse(source);
        var html = [];
        packages.forEach(function(pkg){
            var name = pkg.name;
            var description = pkg.description;
            var item = '<li><a title="'+ description + '" target="_blank" href="http://npmjs.org/' + name + '">'+ name +'</a></li>';
            html.push(item);
        });

        document.getElementById('packages').innerHTML = html.join(' ');
    };

    var url = 'https://api.github.com/repos/taskjs/packages/contents/packages.json?callback=packages';
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);

})(this);
