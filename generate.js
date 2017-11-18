var fs = require('fs')
var marked = require('marked')

var path="markdown"

var read  = function(path){return fs.readFileSync(path, "utf8")}
var write = function(path, text){return fs.writeFileSync(path, text, {encoding: "utf8"})}

var header = read("header")
var footer = read("footer")

var titleize = (s)=>{
	return s.split("-").map((w)=>{
		return w.substr(0,1).toUpperCase()+w.substr(1)}).join(" ")}

var wrap_html = (text, title)=>{
  return header.replace("{post-title}", title)+"  <article>\n"+text+"\n  </article>"+footer}

fs.readdir(path, function(err, items) {
	var links = []
  for (var i=0; i<items.length; i++) {
    var file = items[i]
    var text = read(path+"/"+file)
    var post_name = titleize(file.replace(".md",""))
    var post = wrap_html(marked(text), post_name)
    var post_url = "posts/"+file.replace(".md", ".html")
    write(post_url, post)
    links.push([post_url, post_name])
  }
  console.log(links)
  var menu = links.reduce((s,arr)=>{return s+"<a href='"+arr[0]+"'>"+arr[1]+"</a>\n"},"")
  console.log(menu)
  write("index.html", wrap_html("<div id='index'>"+menu+"</div>" , "selfsame.github.io"))
})