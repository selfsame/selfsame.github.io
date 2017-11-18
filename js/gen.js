window.locals = function(o){var _o = new Array();for(k in o){if(o.hasOwnProperty(k)){_o.push(k);}}return _o;}
theme = {"_":"transparent","lambda":"#00D8FF","var-quote":"#0D1436","backtick":{"color":"#FF0000"},"tilde":{"color":"#00FF04"},"deref":"#FFEA00","variadic":{"color":"#F000FF","font-style":"italic"},"quote":{"color":"#bada55","background":"#03071A"},"meta":{"color":"#FFA800","background":"#082644","font-style":"italic"},"ignore":{"color":"#568299","opacity":0.3},"regex":"#00EF93","keyword":"#984CFF","qualified-kw":"#C01AFE","string":"#10C900","comment":{"color":"#5A687F","background":"black"},"ns":{"color":"#009DFE","font-weight":"bold"},"symbol":"#A8AE6F","char":{"color":"#3B93FF","background":"#291701"},"ratio":"#C92776","float":"#FF8400","int":"#FFDE00","instance":"#00FCFF","illegal":{"color":"#FF0000","text-decoration":"underline"},"rainbows":{"cascade":true,"selector":"exp","stack":["#FF5400","#3292FF","#B51A1A","#1ED7AE","#C821E1","#F0FF00","#8F49F9","#16D60C","#BA8745","#E177D6","#007C37","#4343F5","#2D9A81"]},"core":{"matches":["take-while","take","remove","reducer","reduce","monoid","mapcat","map","folder","foldcat","fold","flatten","filter","drop","cat","append!","->Cat","zipmap","zero?","xml-seq","with-redefs-fn","with-redefs","with-precision","with-out-str","with-open","with-meta","with-local-vars","with-in-str","with-bindings*","with-bindings","while","when-some","when-not","when-let","when-first","when","vswap!","vreset!","volatile?","volatile!","vector?","vector-of","vector","vec","vary-meta","var?","var-set","var-get","var","vals","val","use","update-proxy","update-in","update","unsigned-bit-shift-right","unreduced","underive","unchecked-subtract-int","unchecked-subtract","unchecked-short","unchecked-remainder-int","unchecked-negate-int","unchecked-negate","unchecked-multiply-int","unchecked-multiply","unchecked-long","unchecked-int","unchecked-inc-int","unchecked-inc","unchecked-float","unchecked-double","unchecked-divide-int","unchecked-dec-int","unchecked-dec","unchecked-char","unchecked-byte","unchecked-add-int","unchecked-add","type","try","true?","tree-seq","transient","transduce","trampoline","to-array-2d","to-array","time","throw","thread-bound?","the-ns","test","take-while","take-nth","take-last","take","tagged-literal?","tagged-literal","sync","symbol?","symbol","swap!","supers","subvec","subseq","subs","struct-map","struct","string?","str","split-with","split-at","spit","special-symbol?","sorted?","sorted-set-by","sorted-set","sorted-map-by","sorted-map","sort-by","sort","some?","some-fn","some->>","some->","some","slurp","shutdown-agents","shuffle","shorts","short-array","short","set?","set-validator!","set-error-mode!","set-error-handler!","set-agent-send-off-executor!","set-agent-send-executor!","set!","set","sequential?","sequence","seque","seq?","seq","send-via","send-off","send","select-keys","second","satisfies?","run!","rsubseq","rseq","reversible?","reverse","resultset-seq","restart-agent","rest","resolve","reset-meta!","reset!","require","replicate","replace","repeatedly","repeat","remove-watch","remove-ns","remove-method","remove-all-methods","remove","rem","release-pending-sends","reify","refer-clojure","refer","ref-set","ref-min-history","ref-max-history","ref-history-count","ref","reductions","reduced?","reduced","reduce-kv","reduce","recur","record?","realized?","reader-conditional?","reader-conditional","read-string","read-line","read","re-seq","re-pattern","re-matches","re-matcher","re-groups","re-find","rationalize","rational?","ratio?","range","random-sample","rand-nth","rand-int","rand","quote","quot","pvalues","push-thread-bindings","proxy-super","proxy-mappings","proxy","promise","prn-str","prn","println-str","println","printf","print-str","print","prefers","prefer-method","pr-str","pr","pos?","pop-thread-bindings","pop!","pop","pmap","persistent!","peek","pcalls","partition-by","partition-all","partition","partial","parents","or","odd?","object-array","numerator","number?","num","nthrest","nthnext","nth","ns-unmap","ns-unalias","ns-resolve","ns-refers","ns-publics","ns-name","ns-map","ns-interns","ns-imports","ns-aliases","ns","not=","not-every?","not-empty","not-any?","not","nnext","nil?","nfirst","next","newline","new","neg?","namespace-munge","namespace","name","monitor-exit","monitor-enter","mod","mix-collection-hash","min-key","min","methods","meta","merge-with","merge","memoize","memfn","max-key","max","mapv","mapcat","map?","map-indexed","map","make-hierarchy","make-array","macroexpand-1","macroexpand","loop","longs","long-array","long","locking","loaded-libs","load-string","load-reader","load-file","load","list?","list*","list","line-seq","letfn","let","lazy-seq","lazy-cat","last","keyword?","keyword","keys","key","keep-indexed","keep","juxt","iterator-seq","iterate","isa?","io!","ints","into-array","into","interpose","intern","interleave","integer?","int-array","int","instance?","init-proxy","inc","in-ns","import","ifn?","if-some","if-not","if-let","if","identity","identical?","hash-unordered-coll","hash-set","hash-ordered-coll","hash-map","hash","group-by","get-validator","get-thread-bindings","get-proxy-class","get-method","get-in","get","gensym","gen-interface","gen-class","future?","future-done?","future-cancelled?","future-cancel","future-call","future","frequencies","format","force","for","fnil","fnext","fn?","fn","flush","floats","float?","float-array","float","flatten","first","find-var","find-ns","find-keyword","find","finally","filterv","filter","file-seq","ffirst","false?","extends?","extenders","extend-type","extend-protocol","extend","ex-info","ex-data","every?","every-pred","even?","eval","error-mode","error-handler","enumeration-seq","ensure-reduced","ensure","empty?","empty","eduction","drop-while","drop-last","drop","doubles","double-array","double","doto","dotimes","dosync","doseq","dorun","doall","do","distinct?","distinct","dissoc!","dissoc","disj!","disj","descendants","derive","deref","denominator","deliver","delay?","delay","deftype","defstruct","defrecord","defprotocol","defonce","defn-","defn","defmulti","defmethod","defmacro","definterface","definline","default-data-readers","def","dedupe","declare","decimal?","dec","cycle","create-struct","create-ns","counted?","count","contains?","construct-proxy","constantly","cons","conj!","conj","condp","cond->>","cond->","cond","concat","completing","complement","compile","compare-and-set!","compare","comparator","comp","commute","comment","coll?","clojure-version","clear-agent-errors","class?","class","chars","char?","char-name-string","char-escape-string","char-array","char","catch","cat","cast","case","bytes","byte-array","byte","butlast","bound?","bound-fn*","bound-fn","booleans","boolean-array","boolean","bit-xor","bit-test","bit-shift-right","bit-shift-left","bit-set","bit-or","bit-not","bit-flip","bit-clear","bit-and-not","bit-and","binding","biginteger","bigint","bigdec","bean","bases","await-for","await","atom","associative?","assoc-in","assoc!","assoc","assert","aset-short","aset-long","aset-int","aset-float","aset-double","aset-char","aset-byte","aset-boolean","aset","as->","array-map","areduce","apply","and","ancestors","amap","alter-var-root","alter-meta!","alter","all-ns","alias","alength","aget","agent-errors","agent-error","agent","add-watch","add-classpath","aclone","accessor","Throwable->map",">=",">","==","=","<=","<","->VecSeq","->VecNode","->Vec","->Eduction","->ArrayChunk","->>","->","-","+","*warn-on-reflection*","*unchecked-math*","*read-eval*","*print-readably*","*print-meta*","*print-level*","*print-length*","*print-dup*","*out*","*ns*","*in*","*flush-on-newline*","*file*","*err*","*e","*default-data-reader-fn*","*data-readers*","*compiler-options*","*compile-path*","*compile-files*","*command-line-args*","*clojure-version*","*agent*"],"style":{"color":"#F2840B"}}}
theme_matches = {"core":["take-while","take","remove","reducer","reduce","monoid","mapcat","map","folder","foldcat","fold","flatten","filter","drop","cat","append!","->Cat","zipmap","zero?","xml-seq","with-redefs-fn","with-redefs","with-precision","with-out-str","with-open","with-meta","with-local-vars","with-in-str","with-bindings*","with-bindings","while","when-some","when-not","when-let","when-first","when","vswap!","vreset!","volatile?","volatile!","vector?","vector-of","vector","vec","vary-meta","var?","var-set","var-get","var","vals","val","use","update-proxy","update-in","update","unsigned-bit-shift-right","unreduced","underive","unchecked-subtract-int","unchecked-subtract","unchecked-short","unchecked-remainder-int","unchecked-negate-int","unchecked-negate","unchecked-multiply-int","unchecked-multiply","unchecked-long","unchecked-int","unchecked-inc-int","unchecked-inc","unchecked-float","unchecked-double","unchecked-divide-int","unchecked-dec-int","unchecked-dec","unchecked-char","unchecked-byte","unchecked-add-int","unchecked-add","type","try","true?","tree-seq","transient","transduce","trampoline","to-array-2d","to-array","time","throw","thread-bound?","the-ns","test","take-while","take-nth","take-last","take","tagged-literal?","tagged-literal","sync","symbol?","symbol","swap!","supers","subvec","subseq","subs","struct-map","struct","string?","str","split-with","split-at","spit","special-symbol?","sorted?","sorted-set-by","sorted-set","sorted-map-by","sorted-map","sort-by","sort","some?","some-fn","some->>","some->","some","slurp","shutdown-agents","shuffle","shorts","short-array","short","set?","set-validator!","set-error-mode!","set-error-handler!","set-agent-send-off-executor!","set-agent-send-executor!","set!","set","sequential?","sequence","seque","seq?","seq","send-via","send-off","send","select-keys","second","satisfies?","run!","rsubseq","rseq","reversible?","reverse","resultset-seq","restart-agent","rest","resolve","reset-meta!","reset!","require","replicate","replace","repeatedly","repeat","remove-watch","remove-ns","remove-method","remove-all-methods","remove","rem","release-pending-sends","reify","refer-clojure","refer","ref-set","ref-min-history","ref-max-history","ref-history-count","ref","reductions","reduced?","reduced","reduce-kv","reduce","recur","record?","realized?","reader-conditional?","reader-conditional","read-string","read-line","read","re-seq","re-pattern","re-matches","re-matcher","re-groups","re-find","rationalize","rational?","ratio?","range","random-sample","rand-nth","rand-int","rand","quote","quot","pvalues","push-thread-bindings","proxy-super","proxy-mappings","proxy","promise","prn-str","prn","println-str","println","printf","print-str","print","prefers","prefer-method","pr-str","pr","pos?","pop-thread-bindings","pop!","pop","pmap","persistent!","peek","pcalls","partition-by","partition-all","partition","partial","parents","or","odd?","object-array","numerator","number?","num","nthrest","nthnext","nth","ns-unmap","ns-unalias","ns-resolve","ns-refers","ns-publics","ns-name","ns-map","ns-interns","ns-imports","ns-aliases","ns","not=","not-every?","not-empty","not-any?","not","nnext","nil?","nfirst","next","newline","new","neg?","namespace-munge","namespace","name","monitor-exit","monitor-enter","mod","mix-collection-hash","min-key","min","methods","meta","merge-with","merge","memoize","memfn","max-key","max","mapv","mapcat","map?","map-indexed","map","make-hierarchy","make-array","macroexpand-1","macroexpand","loop","longs","long-array","long","locking","loaded-libs","load-string","load-reader","load-file","load","list?","list*","list","line-seq","letfn","let","lazy-seq","lazy-cat","last","keyword?","keyword","keys","key","keep-indexed","keep","juxt","iterator-seq","iterate","isa?","io!","ints","into-array","into","interpose","intern","interleave","integer?","int-array","int","instance?","init-proxy","inc","in-ns","import","ifn?","if-some","if-not","if-let","if","identity","identical?","hash-unordered-coll","hash-set","hash-ordered-coll","hash-map","hash","group-by","get-validator","get-thread-bindings","get-proxy-class","get-method","get-in","get","gensym","gen-interface","gen-class","future?","future-done?","future-cancelled?","future-cancel","future-call","future","frequencies","format","force","for","fnil","fnext","fn?","fn","flush","floats","float?","float-array","float","flatten","first","find-var","find-ns","find-keyword","find","finally","filterv","filter","file-seq","ffirst","false?","extends?","extenders","extend-type","extend-protocol","extend","ex-info","ex-data","every?","every-pred","even?","eval","error-mode","error-handler","enumeration-seq","ensure-reduced","ensure","empty?","empty","eduction","drop-while","drop-last","drop","doubles","double-array","double","doto","dotimes","dosync","doseq","dorun","doall","do","distinct?","distinct","dissoc!","dissoc","disj!","disj","descendants","derive","deref","denominator","deliver","delay?","delay","deftype","defstruct","defrecord","defprotocol","defonce","defn-","defn","defmulti","defmethod","defmacro","definterface","definline","default-data-readers","def","dedupe","declare","decimal?","dec","cycle","create-struct","create-ns","counted?","count","contains?","construct-proxy","constantly","cons","conj!","conj","condp","cond->>","cond->","cond","concat","completing","complement","compile","compare-and-set!","compare","comparator","comp","commute","comment","coll?","clojure-version","clear-agent-errors","class?","class","chars","char?","char-name-string","char-escape-string","char-array","char","catch","cat","cast","case","bytes","byte-array","byte","butlast","bound?","bound-fn*","bound-fn","booleans","boolean-array","boolean","bit-xor","bit-test","bit-shift-right","bit-shift-left","bit-set","bit-or","bit-not","bit-flip","bit-clear","bit-and-not","bit-and","binding","biginteger","bigint","bigdec","bean","bases","await-for","await","atom","associative?","assoc-in","assoc!","assoc","assert","aset-short","aset-long","aset-int","aset-float","aset-double","aset-char","aset-byte","aset-boolean","aset","as->","array-map","areduce","apply","and","ancestors","amap","alter-var-root","alter-meta!","alter","all-ns","alias","alength","aget","agent-errors","agent-error","agent","add-watch","add-classpath","aclone","accessor","Throwable->map",">=",">","==","=","<=","<","->VecSeq","->VecNode","->Vec","->Eduction","->ArrayChunk","->>","->","-","+","*warn-on-reflection*","*unchecked-math*","*read-eval*","*print-readably*","*print-meta*","*print-level*","*print-length*","*print-dup*","*out*","*ns*","*in*","*flush-on-newline*","*file*","*err*","*e","*default-data-reader-fn*","*data-readers*","*compiler-options*","*compile-path*","*compile-files*","*command-line-args*","*clojure-version*","*agent*"]}

function src_dims(s){
	var lines = s.split("\n")
	var max_width = 0
	lines.map(function(line){
		if (line.length > max_width){
			max_width = line.length;}})
	return [max_width, lines.length * 2]}

function new_canvas(w, h){
	var canvas = document.createElement("canvas");
	canvas.width = w
	canvas.height = h
	return canvas}

function canvas_png(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image}

function draw_src(s) {
	var dims = src_dims(s);
	var canvas = new_canvas(dims[0], dims[1]);
	var ctx = canvas.getContext("2d")
	ctx.fillStyle = "rgba(0,0,0,1.0)"
	var lines = s.split("\n")
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i]
		for (var j = 0; j < line.length; j++) {
			var char = line[j]
			if (char !== " "){
				ctx.fillRect( j, i, 1, 1 )}}}
	return canvas}

function request(url, fn){
  var httpRequest = new XMLHttpRequest()
  var callback = function(){
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        fn(httpRequest.responseText)} 
      else {console.error("Request failure: "+ url)}}}
  httpRequest.onreadystatechange = callback
  httpRequest.open('GET', url)
  httpRequest.send()}

function obj_to_css(k, o){
	var res = "";
	locals(o).map(function(g){
		res += "\t"+g+": "+o[g]+";\n";})
	return "\n  ."+k+" {\n" + res + "}";}

function gen_theme(s){
	theme = JSON.parse(s);
	theme_matches = {};
	var css = ""
	locals(theme).map(function(k){
		if (typeof(theme[k]) == "object") {
			if (theme[k]["cascade"] == true) {
				var idx = 0
				theme[k]["stack"].map(function(v){
					var s = Array(idx+2).join(theme[k]["selector"]+" ");
					css += "\n"+s+"{color:"+theme[k]["stack"][idx]+";}";
					idx += 1;})}
			else if (theme[k]["matches"]) {
				theme_matches[k] = theme[k]["matches"];
				css += obj_to_css(k + " .symbol", theme[k]["style"])}
			else {
				css += obj_to_css(k, theme[k])}}
		else {
			css += "\n  ."+k+" {color:"+theme[k]+";}";}})
	return css}

record = {
	"list": {
		"open": {"char": "<open>(</open>", "tag": "<exp class='list'>"},
		"shut": {"char": "<close>)</close>", "tag": "</exp>"}},
	"vector": {
		"open": {"char": "<open>[</open>", "tag": "<exp class='vector'>"},
		"shut": {"char": "<close>]</close>", "tag": "</exp>"}},
	"map": {
		"open": {"char": "<open>{</open>", "tag": "<exp class='map'>"},
		"shut": {"char": "<close>}</close>", "tag": "</exp>"}},
	"set": {
		"open": {"char": "<open>#{</open>", "tag": "<exp class='set'>"},
		"shut": {"char": "<close>}</close>", "tag": "</exp>"}},
	"lambda": {
		"open": {"char": "<open>#(</open>", "tag": "<exp class='lambda'>"},
		"shut": {"char": "<close>)</close>", "tag": "</exp>"}},
	"char": {
		"open": {"char": "\\", "tag": "<atom class='char'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"string": {
		"open": {"char": "\"", "tag": "<atom class='string'>"},
		"shut": {"char": "\"", "tag": "</atom>"}},
	"keyword": {
		"open": {"char": ":", "tag": "<atom class='keyword'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"ns": {
		"open": {"char": "", "tag": "<atom class='ns'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"symbol": {
		"open": {"char": "", "tag": "<atom class='symbol'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"int": {
		"open": {"char": "", "tag": "<atom class='int'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"float": {
		"open": {"char": "", "tag": "<atom class='float'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"illegal": {
		"open": {"char": "", "tag": "<atom class='illegal'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"qualified-kw": {
		"open": {"char": "::", "tag": "<atom class='qualified-kw'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"comment": {
		"open": {"char": ";", "tag": "<atom class='comment'>"},
		"shut": {"char": "", "tag": "</atom>"}},
	"quote": {
		"open": {"char": "'", "tag": "<atom class='quote'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"backtick": {
		"open": {"char": "`", "tag": "<atom class='backtick'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"tilde": {
		"open": {"char": "~", "tag": "<atom class='tilde'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"deref": {
		"open": {"char": "@", "tag": "<atom class='deref'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"variadic": {
		"open": {"char": "&", "tag": "<atom class='variadic'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"var-quote": {
		"open": {"char": "#'", "tag": "<atom class='var-quote'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"meta": {
		"open": {"char": "^", "tag": "<atom class='meta'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"ignore": {
		"open": {"char": "#_", "tag": "<atom class='ignore'>"},
		"shut": {"char": "", "tag": "</atom>"}}, 
	"regex": {
		"open": {"char": "#\"", "tag": "<atom class='regex'>"},
		"shut": {"char": "\"", "tag": "</atom>"}},
	"instance": {
		"open": {"char": "#<", "tag": "<atom class='instance'>"},
		"shut": {"char": ">", "tag": "</atom>"}}}

function wrap(type, content){
	return ""+record[type]["open"]["tag"]+record[type]["open"]["char"]+
		content+record[type]["shut"]["char"]+record[type]["shut"]["tag"]}

function is(col, x){return (col.indexOf(x) != -1)}

wrapped = ["list", "vector", "map", "set", "lambda", "keyword", "string", "ns", "symbol", "int", "float", 
	"illegal", "qualified-kw", "comment", "char", "quote", "backtick", "tilde", "deref", "variadic", "var-quote", 
	"meta", "ignore", "regex", "instance"];

form = ["list", "vector", "map", "set", "lambda"]

atom = ["keyword", "symbol", "int", "float", "illegal", "qualified-kw", "comment", "illegal", "string", "regex"]

function draw_token(o, color){
	if (color) {
		fill = color}
	else {
		var rule = theme[o["tag"]];
		var fill = rule || "silver";
		if (typeof(rule) == "object") {fill = rule["color"] || fill};
		if (is(form, o["tag"])) {fill = theme["rainbows"]["stack"][stack.length-1] || fill;}}
	ctx.fillStyle = fill;
	if (is(form, o["tag"])){
		x1 = o["meta"][0][2];
		y1 = o["meta"][0][1];
		x2 = o["meta"][1][2];
		y2 = o["meta"][1][1];
		ctx.fillRect(x1, y1*2, 1, 1);
		ctx.fillRect(x2-1, y2*2, 1, 1);} 
	else if (is(atom, o["tag"])){
		x1 = o["meta"][0][2];
		y1 = o["meta"][0][1];
		x2 = o["meta"][1][2];
		y2 = o["meta"][1][1];
		ctx.fillRect(x1, y1*2, x2 - x1, (y2 - y1) * 2 + 1);} 
	else {}}

stackpush = function(o){if (is(form, o["tag"])) {stack.push(o["tag"])}}
stackpop 	= function(o){if (is(form, o["tag"])) {stack.pop()}}

function walk(o, fn){
	if (o instanceof Array) {
		return o.map(function(m){return walk(m, fn)}).join("");} 
	else if (typeof(o) == "object") {
		stackpush(o);
		ns_match = is(theme_matches["core"], o["value"]);
		if (o["meta"]) {draw_token(o, ns_match ? "#FF8600" : false);}
		if (is(wrapped, o["tag"])) {
			if (o["tag"] == "symbol") {
				if (ns_match){
					var res = "<span class='core'>"+wrap(o["tag"] , walk(o["value"]))+"</span>";
					stackpop(o);
					return res;}}
			var res = wrap(o["tag"] , walk(o["value"]));
			stackpop(o);
			return res;}
		else {
			var res = null;
			switch (o["tag"]) {
				case "_": 
					var ss = o["value"].split(/(\r\n|\n\r|\r|\n)/g);
					if (ss.length > 1){
						res = o["value"]
						.replace(/(\r\n|\n\r|\r|\n)/, "<indent>")
						.replace(/(\r\n|\n\r|\r|\n)/g, "</indent><indent>\n")
						.replace(/(\<indent\>)/, "<indent>\n")+"</indent>";
						break;}
					else {
						res = "<ws>"+o["value"]+"</ws>";
						break;
						}
				default: res = walk(o["value"]);}
			return res;}} 
	else {return "" + o;}}

function mount(s, target){
	// dims = src_dims(s)
	// canvas = new_canvas(dims[0], dims[1])
	// ctx = canvas.getContext("2d")
	target.innerHTML = walk(peg.parse(s))
	//target.appendChild(canvas_png(canvas))
	return target}

function cljhtml(s){
	try{return walk(peg.parse(s))}
	catch (e){return ""+e}}

	stack = [];
	canvas = new_canvas(1, 1);
	ctx = canvas.getContext("2d");


function syntax(){
	var targets = Array.prototype.slice.apply(document.querySelectorAll(".lang-clj, p code"))
	targets.map((el)=>{mount(el.innerText, el)})
}