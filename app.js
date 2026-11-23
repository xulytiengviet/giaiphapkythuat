
(function(){
"use strict";
var items=Array.isArray(window.CATALOG_SOLUTIONS)?window.CATALOG_SOLUTIONS:[];
var groups=Array.isArray(window.CATALOG_GROUPS)?window.CATALOG_GROUPS:[];
var priority=new Set([1,11,12,13,28,32,42,45,51,53,66,91]);
var colors=["#159987","#5781c0","#9268ba","#e39b38","#4273aa","#0ca2ac","#df7e5c","#7d8e54","#bd6787","#687e9c"];
var state={category:-1,search:"",starOnly:false,sort:"id"};
var search=document.getElementById("search");
var cards=document.getElementById("cards");
var tabs=document.getElementById("categoryTabs");
var dialog=document.getElementById("detailDialog");
var modalContent=document.getElementById("modalContent");
var resultCount=document.getElementById("resultCount");
var starFilter=document.getElementById("starFilter");
var sortSelect=document.getElementById("sortSelect");
var toast=document.getElementById("toast");
var lastTrigger=null;
var favorites=new Set();
try {favorites=new Set(JSON.parse(localStorage.getItem("gpk_favorites_v1")||"[]").map(Number))}catch(e){favorites=new Set()}
function safe(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function plain(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase()}
function padded(n){return String(n).padStart(3,"0")}
function itemById(id){return items.find(function(s){return s.id===Number(id)})}
function urlFor(s){return location.href.split("#")[0]+"#"+s.slug}
function notify(s){toast.textContent=s;toast.classList.add("show");clearTimeout(notify.timer);notify.timer=setTimeout(function(){toast.classList.remove("show")},2800)}
function persist(){try{localStorage.setItem("gpk_favorites_v1",JSON.stringify(Array.from(favorites)))}catch(e){}}
function renderTabs(){
var all='<button type="button" class="cat-tab'+(state.category===-1?' active':'')+'" data-category="-1">Tất cả <span>'+items.length+'</span></button>';
tabs.innerHTML=all+groups.map(function(g,i){return '<button type="button" class="cat-tab'+(state.category===i?' active':'')+'" data-category="'+i+'">'+safe(g.name)+' <span>'+items.filter(function(s){return s.category===i}).length+'</span></button>'}).join("");
}
function matches(s){
if(state.category>=0&&s.category!==state.category)return false;
if(state.starOnly&&!favorites.has(s.id))return false;
if(!state.search.trim())return true;
var q=plain(state.search.trim());var bits=q.split(/\s+/).filter(Boolean);
var target=plain(s.id+" "+s.name+" "+s.problem+" "+s.mechanism+" "+s.experiment+" "+groups[s.category].name+" "+groups[s.category].short);
return bits.every(function(w){return target.includes(w)});
}
function cardHtml(s){
var g=groups[s.category],fav=favorites.has(s.id);
return '<article class="solution" style="--cat-color:'+colors[s.category]+'">'+
'<div class="card-top"><span class="number">GIẢI PHÁP '+padded(s.id)+'</span><button type="button" class="fav'+(fav?' saved':'')+'" data-fav="'+s.id+'" aria-pressed="'+fav+'" aria-label="'+(fav?'Bỏ lưu ':'Lưu ')+safe(s.name)+'">'+(fav?'★':'☆')+'</button></div>'+
'<h3>'+safe(s.name)+'</h3>'+
'<p class="desc">'+safe(s.mechanism)+'</p>'+
'<div class="card-footer"><div class="cat"><i aria-hidden="true"></i><span>'+safe(g.short)+'</span>'+(priority.has(s.id)?'<span class="priority">Ưu tiên</span>':'')+'</div><button type="button" class="card-open" data-open="'+s.id+'" aria-label="Xem chi tiết '+safe(s.name)+'">Chi tiết ↗</button></div>'+
'</article>';
}
function render(){
var filtered=items.filter(matches);
filtered.sort(function(a,b){if(state.sort==="name")return a.name.localeCompare(b.name,"vi");if(state.sort==="name-desc")return b.name.localeCompare(a.name,"vi");if(state.sort==="priority")return Number(priority.has(b.id))-Number(priority.has(a.id))||a.id-b.id;return a.id-b.id});
resultCount.textContent=filtered.length+" / "+items.length+" giải pháp";
cards.innerHTML=filtered.length?filtered.map(cardHtml).join(""):'<div class="empty"><b>Không tìm thấy giải pháp phù hợp</b>Thử từ khóa ngắn hơn hoặc chọn lại nhóm công nghệ.<br><button type="button" data-reset>Làm mới bộ lọc</button></div>';
renderTabs();
starFilter.classList.toggle("active",state.starOnly);
starFilter.setAttribute("aria-pressed",String(state.starOnly));
starFilter.textContent=state.starOnly?"★ Đang xem đã lưu":"☆ Đã lưu ("+favorites.size+")";
document.getElementById("searchWrap").classList.toggle("has-value",Boolean(search.value));
}
function renderModal(s){
var g=groups[s.category],saved=favorites.has(s.id);
var idx=s.id,steps=s.steps.map(function(st){return "<li>"+safe(st)+"</li>"}).join("");
modalContent.innerHTML='<div class="modal-layout">'+
'<div class="modal-main">'+
'<div class="modal-topline"><span class="modal-kicker">GIẢI PHÁP '+padded(s.id)+' · '+safe(g.name)+'</span><button class="modal-close" type="button" data-close aria-label="Đóng cửa sổ">×</button></div>'+
'<h2 class="modal-title" id="modalTitle">'+safe(s.name)+'</h2>'+
'<p class="modal-lead">'+safe(s.mechanism)+'</p>'+
'<h3 class="section-label">1. Bài toán kỹ thuật</h3><p class="detail-text">'+safe(s.problem)+'</p>'+
'<h3 class="section-label">2. Nguyên lý và giải pháp đề xuất</h3><p class="detail-text">'+safe(s.mechanism)+' Cần xây dựng nguyên mẫu có thông số kỹ thuật rõ ràng, đối chiếu phương pháp cơ sở và ghi nhận trường hợp giải pháp không cải thiện kết quả. Đây là giả thuyết thiết kế, không phải kết quả đã được chứng minh.</p>'+
'<h3 class="section-label">3. Quy trình nghiên cứu – triển khai</h3><ol class="step-list">'+steps+'</ol>'+
'<h3 class="section-label">4. Thí nghiệm xác minh</h3><p class="detail-text">'+safe(s.experiment)+'</p>'+
'<div class="detail-panel"><strong>Nguyên tắc đối chứng</strong>Giữ cố định dữ liệu đầu vào, điều kiện đo và cấu hình phần cứng khi so sánh. Lặp lại phép đo, báo cáo cả trung bình, độ phân tán, trường hợp thất bại và công khai cấu hình tái lập khi phù hợp.</div>'+
'<h3 class="section-label">5. Tiêu chí đánh giá kỹ thuật</h3><p class="detail-text">'+safe(s.metrics)+'. Các chỉ tiêu này là chỉ số gợi ý; cần định nghĩa phép đo, đơn vị và ngưỡng chấp nhận trước thử nghiệm.</p>'+
'<h3 class="section-label">6. Đầu ra & khả năng ứng dụng</h3><p class="detail-text">Hồ sơ nguyên mẫu gồm đặc tả thiết kế, sơ đồ kiến trúc, mã nguồn hoặc RTL, bộ dữ liệu thử nghiệm có quyền sử dụng, script benchmark, bản ghi kết quả và bảng so sánh phương pháp chuẩn. Chỉ đánh giá áp dụng thực tế khi đã vượt qua thử nghiệm về độ bền, hiệu năng và bảo mật tương ứng.</p>'+
'<h3 class="section-label">7. Rủi ro, giới hạn và sở hữu trí tuệ</h3><p class="detail-text">'+safe(s.risk)+' Cần tra cứu tài liệu sáng chế có trước, kiểm tra giấy phép mã nguồn/trọng số/dữ liệu và cân nhắc nộp đơn trước khi công khai chi tiết có tính mới. Một ý tưởng kỹ thuật không mặc nhiên là sáng chế được cấp bằng.</p>'+
'<div class="modal-bottom"><button class="pager" data-prev="'+(idx-1)+'" '+(idx<=1?'disabled':'')+'>← Mục trước</button><span style="font-size:12px;color:#779099">'+padded(idx)+' / 100</span><button class="pager" data-next="'+(idx+1)+'" '+(idx>=items.length?'disabled':'')+'>Mục sau →</button></div>'+
'</div>'+
'<aside class="modal-side">'+
'<div class="side-group"><span class="side-label">Phân nhóm</span><span class="side-value">'+safe(g.name)+'</span></div>'+
'<div class="side-group"><span class="side-label">Loại hồ sơ</span><span class="side-value">Đề xuất nghiên cứu & phát triển (R&D)</span></div>'+
'<div class="side-group"><span class="side-label">Giai đoạn gợi ý</span><span class="side-value">'+safe(s.stage)+'</span></div>'+
'<div class="side-group"><span class="side-label">Phương pháp đối chứng</span><span class="side-value">'+safe(s.baseline)+'</span></div>'+
'<div class="side-group"><span class="side-label">Chỉ tiêu cần đo</span><span class="side-value">'+safe(s.metrics)+'</span></div>'+
'<div class="side-group"><span class="side-label">Mục tiêu sở hữu trí tuệ</span><span class="side-value">Tra cứu tính mới → nguyên mẫu → thử nghiệm → đánh giá khả năng bảo hộ</span></div>'+
'<div class="side-actions"><button type="button" class="side-button primary" data-copy="'+s.id+'">⧉ Sao chép liên kết</button><button type="button" class="side-button" data-download="'+s.id+'">↓ Tải Markdown</button><button type="button" class="side-button" data-fav="'+s.id+'">'+(saved?'★ Bỏ khỏi đã lưu':'☆ Lưu giải pháp')+'</button></div>'+
'<p class="side-note"><strong>Lưu ý:</strong> Đây là danh mục ý tưởng nghiên cứu; không phải bằng độc quyền đã cấp hoặc cam kết về hiệu quả đã kiểm chứng.</p>'+
'</aside></div>';
}
function openSolution(id,changeHash){
var s=itemById(id);if(!s)return;
if(!dialog.open)lastTrigger=document.activeElement;
renderModal(s);
if(!dialog.open)dialog.showModal();
document.title=padded(s.id)+" · "+s.name+" | 100 Giải pháp Kỹ thuật";
if(changeHash&&location.hash!=="#"+s.slug)history.pushState(null,"","#"+s.slug);
}
function closeDialog(){
if(dialog.open)dialog.close();
document.title="100 Giải pháp Kỹ thuật | CVNSS4.0 · Base27 · TinyLLM";
if(/^#gp-\d{3}$/.test(location.hash))history.replaceState(null,"",location.pathname+location.search);
if(lastTrigger&&typeof lastTrigger.focus==="function")lastTrigger.focus();
}
function markdown(s){
var g=groups[s.category];
return "# "+padded(s.id)+". "+s.name+"\n\n"+
"**Nhóm:** "+g.name+"\n\n**Trạng thái:** Đề xuất R&D; chưa đánh giá tính mới hoặc được cấp bằng\n\n"+
"## Bài toán kỹ thuật\n"+s.problem+"\n\n## Giải pháp và nguyên lý\n"+s.mechanism+"\n\n"+
"## Quy trình triển khai\n"+s.steps.map(function(t,i){return (i+1)+". "+t}).join("\n")+"\n\n"+
"## Kiểm chứng\n"+s.experiment+"\n\n## Đối chứng\n"+s.baseline+"\n\n## Chỉ số đánh giá\n"+s.metrics+"\n\n"+
"## Rủi ro và giới hạn\n"+s.risk+"\n\n## Sở hữu trí tuệ\nTra cứu prior art, đối chiếu giấy phép và đánh giá khả năng bảo hộ trước công bố chi tiết.\n\n"+
"Nguồn danh mục: https://github.com/xulytiengviet/giaiphapkythuat\n";
}
function downloadMarkdown(s){
var blob=new Blob([markdown(s)],{type:"text/markdown;charset=utf-8"});var a=document.createElement("a"),u=URL.createObjectURL(blob);a.href=u;a.download=s.slug+".md";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},1000);notify("Đã tạo tệp Markdown cho giải pháp "+padded(s.id));
}
function copyLink(s){
var u=urlFor(s);
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(function(){notify("Đã sao chép liên kết")}).catch(function(){prompt("Sao chép liên kết:",u)})}
else prompt("Sao chép liên kết:",u);
}
function reset(){
state.category=-1;state.search="";state.starOnly=false;state.sort="id";
search.value="";sortSelect.value="id";render();
}
document.addEventListener("click",function(e){
var target=e.target.closest("[data-open],[data-fav],[data-category],[data-reset],[data-close],[data-prev],[data-next],[data-download],[data-copy]");
if(!target)return;
if(target.hasAttribute("data-open")){openSolution(target.getAttribute("data-open"),true);return}
if(target.hasAttribute("data-category")){state.category=Number(target.getAttribute("data-category"));render();return}
if(target.hasAttribute("data-reset")){reset();return}
if(target.hasAttribute("data-close")){closeDialog();return}
if(target.hasAttribute("data-fav")){
var id=Number(target.getAttribute("data-fav"));if(favorites.has(id))favorites.delete(id);else favorites.add(id);persist();render();
if(dialog.open){var selected=(location.hash.match(/^#gp-(\d{3})$/)||[])[1];if(selected)renderModal(itemById(Number(selected)))}return;
}
if(target.hasAttribute("data-prev")){var previous=Number(target.getAttribute("data-prev"));if(itemById(previous))openSolution(previous,true);return}
if(target.hasAttribute("data-next")){var next=Number(target.getAttribute("data-next"));if(itemById(next))openSolution(next,true);return}
if(target.hasAttribute("data-download")){var item=itemById(target.getAttribute("data-download"));if(item)downloadMarkdown(item);return}
if(target.hasAttribute("data-copy")){var selectedItem=itemById(target.getAttribute("data-copy"));if(selectedItem)copyLink(selectedItem);return}
});
search.addEventListener("input",function(){state.search=search.value;render()});
document.getElementById("clearSearch").addEventListener("click",function(){search.value="";state.search="";render();search.focus()});
starFilter.addEventListener("click",function(){state.starOnly=!state.starOnly;render()});
sortSelect.addEventListener("change",function(){state.sort=sortSelect.value;render()});
dialog.addEventListener("click",function(e){if(e.target===dialog)closeDialog()});
dialog.addEventListener("close",function(){document.title="100 Giải pháp Kỹ thuật | CVNSS4.0 · Base27 · TinyLLM";if(/^#gp-\d{3}$/.test(location.hash))history.replaceState(null,"",location.pathname+location.search)});
window.addEventListener("hashchange",function(){var m=location.hash.match(/^#gp-(\d{3})$/);if(m)openSolution(Number(m[1]),false);else if(dialog.open)dialog.close()});
document.getElementById("countSolutions").textContent=items.length;
document.getElementById("countGroups").textContent=groups.length;
document.getElementById("countPriority").textContent=priority.size;
render();
var initial=location.hash.match(/^#gp-(\d{3})$/);if(initial)openSolution(Number(initial[1]),false);
})();
