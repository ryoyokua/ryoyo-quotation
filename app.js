const APP_PIN_HASH="daad2b3adbcb4f72fc3225cb058c64927dc1b2a004b9753892e93080505fd794";
const APP_AUTH_KEY="ryoyo_material_app_authorized_v1";
async function verifyAppPin(){
 const v=document.getElementById("appPinInput").value;
 const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(v));
 const hash=Array.from(new Uint8Array(d)).map(b=>b.toString(16).padStart(2,"0")).join("");
 if(hash===APP_PIN_HASH){localStorage.setItem(APP_AUTH_KEY,"1");document.getElementById("appLock").style.display="none";}
 else document.getElementById("appPinError").style.display="block";
}
document.addEventListener("DOMContentLoaded",()=>{
 if(localStorage.getItem(APP_AUTH_KEY)==="1")document.getElementById("appLock").style.display="none";
 else{
  document.getElementById("appPinButton").onclick=verifyAppPin;
  document.getElementById("appPinInput").addEventListener("keydown",e=>{if(e.key==="Enter")verifyAppPin();});
 }
});
const S={materials:"ryoyo_materials_v1",waves:"ryoyo_waves_v1",seals:"ryoyo_seal_products_v1",projects:"ryoyo_projects_v1",trash:"ryoyo_trash_v1",endpoint:"ryoyo_gas_endpoint_v1",remoteHidden:"ryoyo_remote_hidden_v1"};

const DEFAULT_MATERIALS=[
{id:"n-st",series:"NUKOTE",name:"ST",feature:"標準型",usage:1,unit:"L",packages:[380,38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-xt",series:"NUKOTE",name:"XT",feature:"耐薬品性能型",usage:1,unit:"L",packages:[380,38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-al",series:"NUKOTE",name:"AL",feature:"耐紫外線型",usage:1,unit:"L",packages:[380,38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-fr",series:"NUKOTE",name:"FR",feature:"難燃型",usage:1,unit:"L",packages:[380],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-htd",series:"NUKOTE",name:"HTD",feature:"高強化型",usage:1,unit:"L",packages:[380,38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-har",series:"NUKOTE",name:"HAR",feature:"耐摩耗型",usage:1,unit:"L",packages:[380,38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-lp",series:"NUKOTE",name:"LP",feature:"常温硬化",usage:1,unit:"L",packages:[38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-bg",series:"NUKOTE",name:"BG",feature:"手塗り",usage:1,unit:"L",packages:[19,3.8],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-jf",series:"NUKOTE",name:"JF-HM",feature:"手塗り",usage:1,unit:"L",packages:[3.8],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-pa",series:"NUKOTE",name:"PA",feature:"手塗り",usage:1,unit:"L",packages:[38,7.6],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"n-ep",series:"NUKOTE",name:"EP-primeⅡ",feature:"エポキシ系プライマー",usage:0.2,unit:"L",packages:[38,7.6],packageUnit:"L",calcMode:"area",standardThickness:null,defaultLoss:0.20},
{id:"n-pp",series:"NUKOTE",name:"Poly PrimeⅡ",feature:"ウレタン系プライマー",usage:0.225,unit:"L",packages:[38,7.6],packageUnit:"L",calcMode:"area",standardThickness:null,defaultLoss:0.20},
{id:"n-fp",series:"NUKOTE",name:"FP1",feature:"1液",usage:0.05,unit:"L",packages:[3.8],packageUnit:"L",calcMode:"area",standardThickness:null,defaultLoss:0.20},
{id:"pg4069",series:"PG",name:"PG 406-9",feature:"標準型",usage:1,unit:"L",packages:[400,36],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"pg430",series:"PG",name:"PG 430",feature:"屋根用",usage:1,unit:"L",packages:[400,36],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"pg409",series:"PG",name:"PG 409",feature:"衝撃・耐摩耗",usage:1,unit:"L",packages:[400,36],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"pg408",series:"PG",name:"PG 408",feature:"耐薬品",usage:1,unit:"L",packages:[400,36],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"pg411",series:"PG",name:"PG 411",feature:"脂肪族",usage:1,unit:"L",packages:[400,36],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"pg301",series:"PG",name:"PG 301",feature:"手塗り A:B=1:1",usage:null,unit:"L",packages:[40],packageUnit:"L",calcMode:"manual",standardThickness:null,defaultLoss:0.20},
{id:"pg80920",series:"PG",name:"PG 809-20",feature:"手塗り A:B=1:1",usage:null,unit:"L",packages:[40],packageUnit:"L",calcMode:"manual",standardThickness:null,defaultLoss:0.20},
{id:"pg80940",series:"PG",name:"PG 809-40",feature:"手塗り A:B=1:1",usage:null,unit:"L",packages:[40],packageUnit:"L",calcMode:"manual",standardThickness:null,defaultLoss:0.20},
{id:"spu",series:"SPU",name:"SPU-8010",feature:"難燃性ポリウレア",usage:1,unit:"L",packages:[380,38],packageUnit:"L",calcMode:"thickness",standardThickness:2.0,defaultLoss:0.20},
{id:"hr480",series:"発泡ウレタン",name:"HR480NSG-L",feature:"断熱発泡ウレタン",usage:1.75,unit:"kg",packages:[420],packageUnit:"kg",foam:true,calcMode:"foam",standardThickness:25,foamUsages:{15:1.20,20:1.40,25:1.75},defaultLoss:0.20},
{id:"act",series:"RSPU",name:"RS-アクトPUプライマー",feature:"PUプライマー",usage:0.25,unit:"kg",packages:[17],packageUnit:"kg",calcMode:"area",standardThickness:null,defaultLoss:0.20},
{id:"task",series:"RSPU",name:"RS-タスクPUプライマー",feature:"PUプライマー",usage:0.12,unit:"kg",packages:[5],packageUnit:"kg",calcMode:"area",standardThickness:null,defaultLoss:0.20}
];

const DEFAULT_WAVES=[
{name:"平板・折板（係数なし）",factor:1.000,note:"波形補正なし"},
{name:"大波スレート",factor:1.140,note:"菱洋社内採用値"},
{name:"小波スレート",factor:1.150,note:"菱洋社内採用値"},
{name:"波板",factor:null,note:"製品形状に応じて入力"},
{name:"その他",factor:null,note:"現場条件に応じて入力"}
];

const DEFAULT_SEALS=[
{name:"未登録（手入力）",volume:320,note:"製品登録前の仮入力用"}
];

const HELP={
roof:`<p><b>基本式：</b>平面面積 × 勾配係数 × 波型係数</p>
<p>入力した寸法は丸めずに計算し、最後に「面積の端数処理」で、端数処理なし・0.1㎡単位切り上げ・1㎡単位切り上げを選べます。立上り・仕切り・役物などは必要に応じて別途拾います。材料のロスは材料計算画面で設定します。</p>
<table><tr><th>項目</th><th>意味</th></tr><tr><td>平面面積</td><td>図面・真上から見た長さ×幅</td></tr>
<tr><td>勾配係数</td><td>斜面で増える面積を補正。3寸=約1.044、3.5寸=約1.059、4寸=約1.077</td></tr>
<tr><td>波型係数</td><td>大波1.140、小波1.150を初期値として自動入力。必要時は上書き可能</td></tr>
</table>
<p>L字や段違いはA面・B面・C面に分けて計算します。</p>`,
tank:`<p><b>貯水槽は「面積」と「シーリング」を別々に拾います。</b></p>
<p>シーリングは「パネル枚数×4辺」ではありません。<b>隣り合うパネル同士の境界線だけ</b>を拾います。</p>
<pre>4m×3mの床・1mパネル
┌─┬─┬─┬─┐
│ │ │ │ │
├─┼─┼─┼─┤
│ │ │ │ │
├─┼─┼─┼─┤
│ │ │ │ │
└─┴─┴─┴─┘</pre>
<table>
<tr><th>拾う部分</th><th>考え方</th><th>例</th></tr>
<tr><td>床の縦継目</td><td>列数−1</td><td>4列 → 3本 × 3m = 9m</td></tr>
<tr><td>床の横継目</td><td>段数−1</td><td>3段 → 2本 × 4m = 8m</td></tr>
<tr><td>床と壁の入隅</td><td>床の外周</td><td>(4+3)×2 = 14m</td></tr>
<tr><td>壁のパネル継目</td><td>各壁で列間・段間を拾う</td><td>長辺壁・短辺壁ごとに計算</td></tr>
<tr><td>壁四隅</td><td>高さ×4箇所</td><td>高さ2m → 8m</td></tr>
</table>
<p><b>シール延長</b>＝上記を施工対象ごとに合計した長さです。</p>
<p>マンホール、配管貫通、内部柱、補強材、特殊なパネル割などはこの自動計算に含めず、必要に応じて別途確認します。</p>`,
flat:`<table><tr><th>部位</th><th>式</th></tr><tr><td>平場</td><td>長さ×幅</td></tr><tr><td>壁</td><td>幅×高さ×面数</td></tr>
<tr><td>立上り</td><td>周長×高さ</td></tr><tr><td>仕切り</td><td>長さ×高さ×面数</td></tr><tr><td>設備基礎</td><td>周長×高さ</td></tr><tr><td>控除</td><td>未施工面積をマイナス</td></tr></table>`,
material:`<p><b>使用材料を複数追加し、一括で必要量と発注セット数を計算します。</b></p>
<table>
<tr><th>計算方式</th><th>例</th><th>計算</th></tr>
<tr><td>膜厚連動</td><td>NUKOTE ST、PG406-9等</td><td>面積 × 膜厚 × 1mmあたり使用量 ×（1＋ロス率）</td></tr>
<tr><td>面積連動</td><td>RS-アクトPU等</td><td>面積 × 標準使用量 ×（1＋ロス率）</td></tr>
<tr><td>厚み別</td><td>HR480NSG-L</td><td>15 / 20 / 25mmの基準使用量</td></tr>
</table>
<p>「使用材料を選択」で追加・変更した内容は、下の「必要材料一覧」にリアルタイムで反映します。380L / 38Lなど複数荷姿がある製品は、必要量を下回らない範囲で荷姿を組み合わせて自動計算します。</p><p>最終結果は材料の役割分けをせず、<b>製品名　荷姿 × セット数</b>として表示します。</p>`
};

let materials=load(S.materials,DEFAULT_MATERIALS),waves=load(S.waves,DEFAULT_WAVES),seals=load(S.seals,DEFAULT_SEALS),projects=load(S.projects,[]);
let trash=load(S.trash,{projects:[],calcItems:[]});
if(!trash||typeof trash!=="object")trash={projects:[],calcItems:[]};
if(!Array.isArray(trash.projects))trash.projects=[];
if(!Array.isArray(trash.calcItems))trash.calcItems=[];
trash.projects=trash.projects.slice(0,10);
trash.calcItems=trash.calcItems.slice(0,10);
save(S.trash,trash);
function saveTrash(){
 // 削除済み案件・施工対象は、それぞれ直近10件のみ保持
 trash.projects=trash.projects.slice(0,10);
 trash.calcItems=trash.calcItems.slice(0,10);
 save(S.trash,trash);
}

// 屋根材マスタが空・破損していても必ず初期値へ復旧
if(!Array.isArray(waves) || waves.length===0){
  waves=structuredClone(DEFAULT_WAVES);
}
for(const def of DEFAULT_WAVES){
  if(!waves.some(w=>w && w.name===def.name)){
    waves.push(structuredClone(def));
  }
}

let state={roofArea:0,roofRawArea:0,flatArea:0,flatRawArea:0,flatRows:[],tankArea:0,tankRawArea:0,tankPanels:0,tankSeal:0,vesselArea:0,vesselRawArea:0,pipeArea:0,pipeRawArea:0,productArea:0,productRawArea:0,otherArea:100,otherRawArea:100,lastSource:null,material:null,sealMode:"volume"};
const $=id=>document.getElementById(id), n=id=>Number($(id).value)||0;
const fmt=(v,d=2)=>Number(v).toLocaleString("ja-JP",{minimumFractionDigits:d,maximumFractionDigits:d});
const fmtPack=v=>{
 const n=Number(v);
 if(!Number.isFinite(n))return String(v??"");
 return Number.isInteger(n)?String(n):String(n);
};
const ceilTo1=v=>Math.ceil(((Number(v)||0)-1e-12)*10)/10;
const fmtCeil1=v=>ceilTo1(v).toFixed(1);
function load(k,f){try{let v=localStorage.getItem(k);return v?JSON.parse(v):structuredClone(f)}catch{return structuredClone(f)}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

// 既存ブラウザ保存値をv2へ移行
for(const w of waves){
  if(w.name==="大波スレート" && (w.factor==null || w.factor===1.005)) w.factor=1.140;
  if(w.name==="小波スレート" && w.factor==null) w.factor=1.150;
}
save(S.waves,waves);
// 材料マスタの追加項目を既存ブラウザデータへ補完
for(const m of materials){
  const def=DEFAULT_MATERIALS.find(x=>x.id===m.id);
  if(m.defaultLoss==null) m.defaultLoss=def?.defaultLoss ?? 0.20;
  if(m.standardThickness==null) m.standardThickness=def?.standardThickness ?? (m.calcMode==="thickness"?2.0:(m.calcMode==="foam"?25:null));
 if(m.calcMode==="foam" && (!m.foamUsages || typeof m.foamUsages!=="object")) m.foamUsages=def?.foamUsages ? {...def.foamUsages} : {15:1.20,20:1.40,25:1.75};
}
save(S.materials,materials);


const LAST_VIEW_KEY="ryoyo_last_view_v1";
function show(v,{scroll=true}={}){
  document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===v));
  document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  try{sessionStorage.setItem(LAST_VIEW_KEY,v);}catch(e){}
  if(scroll)scrollTo({top:0,behavior:"smooth"});
}
function restoreLastView(){
  let v="";
  try{v=sessionStorage.getItem(LAST_VIEW_KEY)||"";}catch(e){}
  if(v && document.getElementById(v)?.classList.contains("view")){
    show(v);
  }
}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{
  const view=b.dataset.view;
  // HOMEは純粋な画面移動。案件保存・案件切替処理から材料計算へ戻されないようにする。
  if(view==="home"){
    clearTimeout(projectAutoSaveTimer);
    const currentId=Number($("editingProjectId")?.value)||null;
    if(currentId) autoSaveCurrentProject();
    show("home");
    return;
  }
  show(view);
});
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));

document.querySelectorAll(".help").forEach(b=>b.onclick=()=>{$("helpTitle").textContent=b.dataset.help==="tank"?"貯水槽・シーリングの拾い方":"拾い方・計算方法";$("helpBody").innerHTML=HELP[b.dataset.help];$("helpDialog").showModal()});
$("closeHelp").onclick=()=>$("helpDialog").close();

function addDeductionRow(tbodyId,d={}){const body=$(tbodyId);if(!body)return;const tr=document.createElement("tr");tr.innerHTML=`<td><input class="dn" value="${esc(d.name||"")}"></td><td><input class="da" type="number" step="1" min="0" value="${d.a??""}"></td><td><input class="db" type="number" step="1" min="0" value="${d.b??""}"></td><td><input class="dq" type="number" step="1" min="1" value="${d.q??1}"></td><td class="do">0.00㎡</td><td><button class="delete">削除</button></td>`;body.appendChild(tr);tr.querySelectorAll("input").forEach(x=>x.oninput=()=>recalcExtraByBody(tbodyId));tr.querySelector(".delete").onclick=()=>{tr.remove();recalcExtraByBody(tbodyId)};recalcExtraByBody(tbodyId)}
function addJointRow(tbodyId,d={}){const body=$(tbodyId);if(!body)return;const tr=document.createElement("tr");tr.innerHTML=`<td><input class="jn" value="${esc(d.name||"")}"></td><td><input class="ja" type="number" step="1" min="0" value="${d.a??""}"></td><td><input class="jq" type="number" step="1" min="1" value="${d.q??1}"></td><td class="jo">0.00m</td><td><button class="delete">削除</button></td>`;body.appendChild(tr);tr.querySelectorAll("input").forEach(x=>x.oninput=()=>recalcExtraByBody(tbodyId));tr.querySelector(".delete").onclick=()=>{tr.remove();recalcExtraByBody(tbodyId)};recalcExtraByBody(tbodyId)}
function deductionRows(id){const body=$(id);if(!body)return[];return [...body.children].map(tr=>{const name=tr.querySelector(".dn")?.value||"",a=Number(tr.querySelector(".da")?.value)||0,b=Number(tr.querySelector(".db")?.value)||0,q=Math.max(1,Number(tr.querySelector(".dq")?.value)||1),area=a*b*q;tr.querySelector(".do").textContent=`${fmt(area)}㎡`;return{name,a,b,q,area}})}
function jointRows(id){const body=$(id);if(!body)return[];return [...body.children].map(tr=>{const name=tr.querySelector(".jn")?.value||"",a=Number(tr.querySelector(".ja")?.value)||0,q=Math.max(1,Number(tr.querySelector(".jq")?.value)||1),length=a*q;tr.querySelector(".jo").textContent=`${fmt(length)}m`;return{name,a,q,length}})}
function deductionTotal(id){return deductionRows(id).reduce((s,x)=>s+x.area,0)} function jointTotal(id){return jointRows(id).reduce((s,x)=>s+x.length,0)}
function recalcExtraByBody(id){if(id.startsWith("roof"))calcRoof();else if(id.startsWith("flat"))calcFlat();else if(id.startsWith("vessel"))calcVessel();else if(id.startsWith("tank"))calcTank()}
function captureExtraRows(src,data){const m={roof:["roofDeductionRows","roofJointRows"],flat:["flatDeductionRows","flatJointRows"],vessel:["vesselDeductionRows","vesselJointRows"],tank:["tankDeductionRows",null]}[src];if(!m)return;data.deductions=deductionRows(m[0]).map(({name,a,b,q})=>({name,a,b,q}));if(m[1])data.joints=jointRows(m[1]).map(({name,a,q})=>({name,a,q}))}
function restoreExtraRows(src,data){const m={roof:["roofDeductionRows","roofJointRows"],flat:["flatDeductionRows","flatJointRows"],vessel:["vesselDeductionRows","vesselJointRows"],tank:["tankDeductionRows",null]}[src];if(!m)return;if($(m[0])){$(m[0]).innerHTML="";(data.deductions||[]).forEach(r=>addDeductionRow(m[0],r))}if(m[1]&&$(m[1])){$(m[1]).innerHTML="";(data.joints||[]).forEach(r=>addJointRow(m[1],r))}}

function renderWaveSelect(){
  if(!Array.isArray(waves) || waves.length===0){
    waves=structuredClone(DEFAULT_WAVES);
    save(S.waves,waves);
  }
  const sel=$("roofWaveType");
  const previous=sel.value;
  sel.innerHTML=waves.map((w,i)=>`<option value="${i}">${esc((w&&w.name)||`屋根材${i+1}`)}</option>`).join("");
  if(previous!=="" && Number(previous)<waves.length) sel.value=previous;

  sel.onchange=()=>{
    const w=waves[Number(sel.value)];
    if(w && w.factor!=null){
      $("roofWaveFactor").value=Number(w.factor).toFixed(3);
    }
    calcRoof();
  };

  const first=waves[Number(sel.value)||0];
  if(first && first.factor!=null){
    $("roofWaveFactor").value=Number(first.factor).toFixed(3);
  }
}
function getRoofSun(){return $("roofSun").value==="custom" ? n("roofSunCustom") : Number($("roofSun").value)}
function ceilUnit(value,unit){if(!unit||unit<=0)return value;return Math.ceil((value-1e-12)/unit)*unit}
function adoptedArea(value,roundId){const el=$(roundId);const unit=el?Number(el.value):0;return ceilUnit(value,unit)}
function calcRoof(){const projection=n("roofL")*n("roofW")*Math.max(1,n("roofFaces")),sun=getRoofSun(),slope=Math.sqrt(1+(sun/10)**2),wave=Math.max(.001,n("roofWaveFactor")),gross=projection*slope*wave,deduction=deductionTotal("roofDeductionRows"),joint=jointTotal("roofJointRows"),raw=Math.max(0,gross-deduction),roundUnit=Number($("roofRound").value),adopted=ceilUnit(raw,roundUnit);state.roofGrossArea=gross;state.roofDeduction=deduction;state.roofJoint=joint;state.roofRawArea=raw;state.roofArea=adopted;if($("roofGrossSummary"))$("roofGrossSummary").textContent=`${fmt(gross,2)}㎡`;if($("roofDeductionSummary"))$("roofDeductionSummary").textContent=`− ${fmt(deduction,2)}㎡`;$("roofArea").textContent=roundUnit===1?`${fmt(adopted,0)}㎡`:`${fmt(adopted,1)}㎡`;if($("roofJointTotal"))$("roofJointTotal").textContent=`${fmt(joint)}m`;calcCommonSeal("roof");$("roofDetail").innerHTML=`<div class="resultline"><span>平面面積</span><b>${fmt(projection,2)}㎡</b></div><div class="resultline"><span>勾配</span><b>${fmt(sun,1)}寸</b></div><div class="resultline"><span>勾配係数</span><b>${fmt(slope,3)}</b></div><div class="resultline"><span>波型係数</span><b>${fmt(wave,3)}</b></div><div class="resultline"><span>屋根本体面積</span><b>${fmt(gross,2)}㎡</b></div><div class="resultline"><span>施工除外部</span><b>− ${fmt(deduction,2)}㎡</b></div>`;$("roofFormula").textContent=`${fmt(projection,2)} × ${fmt(slope,3)} × ${fmt(wave,3)} = ${fmt(gross,2)}㎡\n− 控除 ${fmt(deduction,2)}㎡ = ${fmt(raw,2)}㎡`+(roundUnit>0?`\n→ ${roundUnit===1?"1㎡":"0.1㎡"}単位切り上げ = ${roundUnit===1?fmt(adopted,0):fmt(adopted,1)}㎡`:"")}
if($("calcRoof"))$("calcRoof").onclick=calcRoof;
["roofL","roofW","roofFaces","roofWaveFactor"].forEach(id=>$(id).addEventListener("input",calcRoof));
$("roofRound").addEventListener("change",calcRoof);
$("roofSun").addEventListener("change",()=>{$("roofSunCustomWrap").classList.toggle("hidden",$("roofSun").value!=="custom");calcRoof()});
$("roofSunCustom").addEventListener("input",calcRoof);


function sealLengthForSource(src){return Number({roof:state.roofJoint,flat:state.flatJoint,vessel:state.vesselJoint,tank:state.tankSeal}[src])||0}
function renderCommonSealSelect(src){const sel=$(src+"SealProduct");if(!sel)return;if(!Array.isArray(seals)||!seals.length){seals=structuredClone(DEFAULT_SEALS);save(S.seals,seals)}const prev=sel.value;sel.innerHTML=seals.map((x,i)=>`<option value="${i}">${esc(x.name)}</option>`).join("");if(prev!==""&&Number(prev)<seals.length)sel.value=prev;const sync=()=>{const x=seals[Number(sel.value)||0];if(x?.volume)$(src+"SealVolume").value=x.volume;calcCommonSeal(src)};sel.onchange=sync;const x=seals[Number(sel.value)||0];if(x?.volume)$(src+"SealVolume").value=x.volume}
function calcCommonSeal(src){const enabled=$(src+"SealEnabled");if(!enabled)return;const box=$(src+"SealBox");box?.classList.toggle("hidden",!enabled.checked);const length=sealLengthForSource(src);const le=$(src+"SealLength");if(le)le.textContent=`${fmt(length)}m`;if(!enabled.checked)return;const volume=Number($(src+"SealVolume")?.value)||0,width=Number($(src+"SealWidth")?.value)||0,depth=Number($(src+"SealDepth")?.value)||0,each=(volume>0&&width>0&&depth>0)?volume/(width*depth):0;$(src+"SealEach").textContent=each?`${fmt(each)}m`:"—";if(!length||!each){$(src+"SealCount").textContent="—";$(src+"SealCountReserve").textContent="—";return}const count=Math.ceil(length/each),reserve=Number($(src+"SealReserve")?.value)||0,withReserve=Math.ceil(count*(1+reserve));$(src+"SealCount").textContent=`${count}本`;$(src+"SealCountReserve").textContent=`${withReserve}本`}
function captureSealConfig(src){const en=$(src+"SealEnabled");if(!en)return null;const p=seals[Number($(src+"SealProduct")?.value)||0];return {enabled:!!en.checked,productIndex:Number($(src+"SealProduct")?.value)||0,productName:p?.name||"",volume:Number($(src+"SealVolume")?.value)||0,width:Number($(src+"SealWidth")?.value)||0,depth:Number($(src+"SealDepth")?.value)||0,reserve:Number($(src+"SealReserve")?.value)||0,length:sealLengthForSource(src),count:Number(($(src+"SealCount")?.textContent||"").replace(/\D/g,""))||0,countReserve:Number(($(src+"SealCountReserve")?.textContent||"").replace(/\D/g,""))||0}}
for(const src of ["roof","flat","vessel"]){renderCommonSealSelect(src);const en=$(src+"SealEnabled");if(en)en.addEventListener("change",()=>calcCommonSeal(src));for(const suf of ["SealVolume","SealWidth","SealDepth"]){const el=$(src+suf);if(el)el.addEventListener("input",()=>calcCommonSeal(src))}const r=$(src+"SealReserve");if(r)r.addEventListener("change",()=>calcCommonSeal(src))}

function renderSealSelect(){
  if(!Array.isArray(seals) || seals.length===0){
    seals=structuredClone(DEFAULT_SEALS);
    save(S.seals,seals);
  }
  const sel=$("sealProduct");
  if(!sel) return;
  const prev=sel.value;
  sel.innerHTML=seals.map((s,i)=>`<option value="${i}">${esc(s.name)}</option>`).join("");
  if(prev!=="" && Number(prev)<seals.length) sel.value=prev;
  sel.onchange=()=>{
    const s=seals[Number(sel.value)];
    if(s && s.volume) $("sealVolume").value=s.volume;
    calcSealCount(false);
  };
  const first=seals[Number(sel.value)||0];
  if(first && first.volume) $("sealVolume").value=first.volume;
}

// tank
function calcTank(){
  const L=n("tankL"),W=n("tankW"),H=n("tankH"),pw=n("panelW"),ph=n("panelH"),pd=n("panelD");
  if(!pw||!ph||!pd){
    $("tankArea").textContent="—";
    $("tankPanels").textContent="—";
    $("tankSeal").textContent="—";
    return;
  }

  const floor=$("tankFloor").checked;
  const walls=$("tankWalls").checked;
  const ceil=$("tankCeiling").checked;
  const internal=$("tankInternal").checked;
  const corners=$("tankCorners").checked;

  const nx=Math.ceil(L/pw);       // 長さ方向パネル数
  const ny=Math.ceil(W/pd);       // 床・天井の幅方向パネル数
  const nz=Math.ceil(H/ph);       // 壁の高さ方向パネル数
  const sx=Math.ceil(W/pw);       // 短辺壁の横方向パネル数

  // 面積
  const floorArea=floor?L*W:0;
  const longWallArea=walls?2*L*H:0;
  const shortWallArea=walls?2*W*H:0;
  const ceilingArea=ceil?L*W:0;

  // パネル枚数
  const floorPanels=floor?nx*ny:0;
  const longWallPanels=walls?2*nx*nz:0;
  const shortWallPanels=walls?2*sx*nz:0;
  const ceilingPanels=ceil?nx*ny:0;

  // パネル継目
  const floorVertical=floor&&internal?Math.max(nx-1,0)*W:0;
  const floorHorizontal=floor&&internal?Math.max(ny-1,0)*L:0;
  const floorSeams=floorVertical+floorHorizontal;

  const longWallVertical=walls&&internal?2*Math.max(nx-1,0)*H:0;
  const longWallHorizontal=walls&&internal?2*Math.max(nz-1,0)*L:0;
  const longWallSeams=longWallVertical+longWallHorizontal;

  const shortWallVertical=walls&&internal?2*Math.max(sx-1,0)*H:0;
  const shortWallHorizontal=walls&&internal?2*Math.max(nz-1,0)*W:0;
  const shortWallSeams=shortWallVertical+shortWallHorizontal;

  const ceilingVertical=ceil&&internal?Math.max(nx-1,0)*W:0;
  const ceilingHorizontal=ceil&&internal?Math.max(ny-1,0)*L:0;
  const ceilingSeams=ceilingVertical+ceilingHorizontal;

  // 入隅・四隅
  const floorWallCorner=(floor&&walls&&corners)?2*(L+W):0;
  const wallVerticalCorners=(walls&&corners)?4*H:0;
  const ceilingWallCorner=(ceil&&walls&&corners)?2*(L+W):0;

  const grossArea=floorArea+longWallArea+shortWallArea+ceilingArea;
  const deduction=deductionTotal("tankDeductionRows");
  const area=Math.max(0,grossArea-deduction);
  const panels=floorPanels+longWallPanels+shortWallPanels+ceilingPanels;
  const sealLength=
    floorSeams+longWallSeams+shortWallSeams+ceilingSeams+
    floorWallCorner+wallVerticalCorners+ceilingWallCorner;

  const adopted=adoptedArea(area,"tankRound");
  state.tankGrossArea=grossArea;
  state.tankDeduction=deduction;
  state.tankRawArea=area;
  state.tankArea=adopted;
  state.tankSeal=sealLength;
  if($("tankDeductionTotal"))$("tankDeductionTotal").textContent=`− ${fmt(deduction)}㎡`;
  state.tankPanels=panels;

  $("tankArea").textContent=`${fmt(adopted)}㎡`;
  $("tankPanels").textContent=`${fmt(panels,0)}枚`;
  $("tankSeal").textContent=`${fmt(sealLength,1)}m`;

  const rows=[
    ["床",floorArea,floorPanels,floorSeams,floorWallCorner],
    ["長辺壁×2",longWallArea,longWallPanels,longWallSeams,0],
    ["短辺壁×2",shortWallArea,shortWallPanels,shortWallSeams,wallVerticalCorners],
    ["天井",ceilingArea,ceilingPanels,ceilingSeams,ceilingWallCorner]
  ];
  $("tankRows").innerHTML=rows.map(r=>`<tr>
    <td>${r[0]}</td>
    <td>${fmt(r[1])}㎡</td>
    <td>${fmt(r[2],0)}枚</td>
    <td>${fmt(r[3],1)}m</td>
    <td>${fmt(r[4],1)}m</td>
  </tr>`).join("");

  $("tankSealBreakdown").innerHTML=`
    <div class="resultline"><span>床：縦方向パネル継目</span><b>${fmt(floorVertical,1)}m</b></div>
    <div class="resultline"><span>床：横方向パネル継目</span><b>${fmt(floorHorizontal,1)}m</b></div>
    <div class="resultline"><span>長辺壁×2：縦方向パネル継目</span><b>${fmt(longWallVertical,1)}m</b></div>
    <div class="resultline"><span>長辺壁×2：横方向パネル継目</span><b>${fmt(longWallHorizontal,1)}m</b></div>
    <div class="resultline"><span>短辺壁×2：縦方向パネル継目</span><b>${fmt(shortWallVertical,1)}m</b></div>
    <div class="resultline"><span>短辺壁×2：横方向パネル継目</span><b>${fmt(shortWallHorizontal,1)}m</b></div>
    ${ceil?`<div class="resultline"><span>天井：縦方向パネル継目</span><b>${fmt(ceilingVertical,1)}m</b></div>
    <div class="resultline"><span>天井：横方向パネル継目</span><b>${fmt(ceilingHorizontal,1)}m</b></div>`:""}
    <div class="resultline"><span>床－壁 入隅</span><b>${fmt(floorWallCorner,1)}m</b></div>
    <div class="resultline"><span>壁四隅</span><b>${fmt(wallVerticalCorners,1)}m</b></div>
    ${ceil?`<div class="resultline"><span>天井－壁 入隅</span><b>${fmt(ceilingWallCorner,1)}m</b></div>`:""}
    <div class="resultline"><span><b>合計 シール延長</b></span><b>${fmt(sealLength,1)}m</b></div>
  `;

  // シーリング本数側も入力済みなら同時更新
  calcSealCount(false);
}
$("calcTank").onclick=calcTank;

// 貯水槽は入力・選択変更と同時にリアルタイム再計算
["tankL","tankW","tankH","panelW","panelH","panelD"].forEach(id=>{
  $(id).addEventListener("input",calcTank);
});
if($("tankRound"))$("tankRound").addEventListener("change",calcTank);
["tankFloor","tankWalls","tankCeiling","tankInternal","tankCorners"].forEach(id=>{
  $(id).addEventListener("change",calcTank);
});


function calcSealCount(showAlert=true){
  if(!$("sealVolume") || !$("sealWidth") || !$("sealDepth")) return;

  if(!state.tankSeal){
    $("sealEach").textContent="—";
    $("sealCount").textContent="—";
    $("sealCountReserve").textContent="—";
    if(showAlert) alert("先に貯水槽の寸法・施工範囲を確認してください");
    return;
  }

  const volume=n("sealVolume");
  const width=n("sealWidth");
  const depth=n("sealDepth");
  const each=(volume>0 && width>0 && depth>0) ? volume/(width*depth) : 0;

  if(!each){
    $("sealEach").textContent="—";
    $("sealCount").textContent="—";
    $("sealCountReserve").textContent="—";
    if(showAlert) alert("容量・目地幅・目地深さを確認してください");
    return;
  }

  const count=Math.ceil(state.tankSeal/each);
  const reserveRate=Number($("sealReserve").value);
  const withReserve=Math.ceil(count*(1+reserveRate));

  $("sealEach").textContent=`${fmt(each,2)}m`;
  $("sealCount").textContent=`${count}本`;
  $("sealCountReserve").textContent=`${withReserve}本`;
}

$("sealReserve").addEventListener("change",()=>calcSealCount(false));

// flat
const types={"平場":1,"壁":1,"立上り":1,"仕切り":1,"設備基礎":1,"直接入力":1,"控除":-1};
function addFlat(d={type:"平場",name:"",a:"",b:"",q:1}){
 const tr=document.createElement("tr");tr.innerHTML=`<td data-label="種別"><select class="ft">${Object.keys(types).map(x=>`<option ${x===d.type?"selected":""}>${x}</option>`).join("")}</select></td><td data-label="名称"><input class="fn" value="${esc(d.name)}"></td><td data-label="長さ"><input class="fa" type="number" step="1" value="${d.a}"></td><td data-label="幅 / 高さ"><input class="fb" type="number" step="1" value="${d.b}"></td><td data-label="数量"><input class="fq" type="number" min="1" value="${d.q}"></td><td class="fo" data-label="面積">0㎡</td><td data-label=""><button class="delete">削除</button></td>`;
 $("flatRows").appendChild(tr);tr.querySelectorAll("input,select").forEach(x=>x.oninput=calcFlat);tr.querySelector(".delete").onclick=()=>{tr.remove();calcFlat()};calcFlat();
}
function calcFlat(){let gross=0,rows=[];[...$("flatRows").children].forEach(tr=>{const type=tr.querySelector(".ft").value,name=tr.querySelector(".fn").value,a=Number(tr.querySelector(".fa").value)||0,b=Number(tr.querySelector(".fb").value)||0,q=Number(tr.querySelector(".fq").value)||1;let v=type==="直接入力"?a*q:a*b*q;v*=types[type];tr.querySelector(".fo").textContent=`${fmt(v)}㎡`;gross+=v;rows.push({type,name,a,b,q,area:v})});gross=Math.max(0,gross);const deduction=deductionTotal("flatDeductionRows"),joint=jointTotal("flatJointRows"),raw=Math.max(0,gross-deduction),adopted=adoptedArea(raw,"flatRound");state.flatGrossArea=gross;state.flatDeduction=deduction;state.flatJoint=joint;state.flatRawArea=raw;state.flatArea=adopted;state.flatRows=rows;$("flatArea").textContent=`${fmt(adopted)}㎡`;if($("flatGrossArea"))$("flatGrossArea").textContent=`${fmt(gross)}㎡`;if($("flatDeductionTotal"))$("flatDeductionTotal").textContent=`− ${fmt(deduction)}㎡`;if($("flatJointTotal"))$("flatJointTotal").textContent=`${fmt(joint)}m`}
$("addFlat").onclick=()=>addFlat();if($("flatRound"))$("flatRound").addEventListener("change",calcFlat);
if($("addRoofDeduction"))$("addRoofDeduction").onclick=()=>addDeductionRow("roofDeductionRows");
if($("addRoofJoint"))$("addRoofJoint").onclick=()=>addJointRow("roofJointRows");
if($("addFlatDeduction"))$("addFlatDeduction").onclick=()=>addDeductionRow("flatDeductionRows");
if($("addFlatJoint"))$("addFlatJoint").onclick=()=>addJointRow("flatJointRows");
if($("addVesselDeduction"))$("addVesselDeduction").onclick=()=>addDeductionRow("vesselDeductionRows");
if($("addVesselJoint"))$("addVesselJoint").onclick=()=>addJointRow("vesselJointRows");
if($("addTankDeduction"))$("addTankDeduction").onclick=()=>addDeductionRow("tankDeductionRows");

// 他タンク
function calcVessel(){const shape=$("vesselShape").value,scope=$("vesselScope").value,q=Math.max(1,n("vesselQty"));let gross=0,formula="";if(shape==="cylinder"){const D=n("vesselD"),H=n("vesselH"),side=Math.PI*D*H,disc=Math.PI*D*D/4;gross=(scope==="side"?side:scope==="inside"?side+disc:side+2*disc)*q;formula=`円筒：側面 π×${fmt(D)}×${fmt(H)}${scope==="side"?"":scope==="inside"?" ＋ 底面":" ＋ 上下面"} × ${q}基`}else{const L=n("vesselL"),W=n("vesselW"),H=n("vesselRH"),side=2*(L+W)*H,base=L*W;gross=(scope==="side"?side:scope==="inside"?side+base:side+2*base)*q;formula=`角型：側面 2×(${fmt(L)}＋${fmt(W)})×${fmt(H)}${scope==="side"?"":scope==="inside"?" ＋ 底面":" ＋ 上下面"} × ${q}基`}const deduction=deductionTotal("vesselDeductionRows"),joint=jointTotal("vesselJointRows"),area=Math.max(0,gross-deduction),adopted=adoptedArea(area,"vesselRound");state.vesselGrossArea=gross;state.vesselDeduction=deduction;state.vesselJoint=joint;state.vesselRawArea=area;state.vesselArea=adopted;$("vesselArea").textContent=`${fmt(adopted)}㎡`;if($("vesselGrossArea"))$("vesselGrossArea").textContent=`${fmt(gross)}㎡`;if($("vesselDeductionTotal"))$("vesselDeductionTotal").textContent=`− ${fmt(deduction)}㎡`;if($("vesselJointTotal"))$("vesselJointTotal").textContent=`${fmt(joint)}m`;calcCommonSeal("vessel");$("vesselFormula").textContent=formula+`\n本体 ${fmt(gross)}㎡ − 控除 ${fmt(deduction)}㎡ = ${fmt(area)}㎡`}
function updateVesselFields(){const c=$("vesselShape").value==="cylinder";document.querySelectorAll(".vessel-cylinder").forEach(x=>x.classList.toggle("hidden",!c));document.querySelectorAll(".vessel-rect").forEach(x=>x.classList.toggle("hidden",c));calcVessel()}
["vesselD","vesselH","vesselL","vesselW","vesselRH","vesselQty"].forEach(id=>$(id).addEventListener("input",calcVessel));
$("vesselShape").addEventListener("change",updateVesselFields);$("vesselScope").addEventListener("change",calcVessel);if($("calcVesselBtn"))$("calcVesselBtn").onclick=calcVessel;

// 配管
function calcPipe(){const D=n("pipeD")/1000,L=n("pipeL"),q=Math.max(1,n("pipeQty")),area=Math.PI*D*L*q;const adopted=adoptedArea(area,"pipeRound");state.pipeRawArea=area;state.pipeArea=adopted;$("pipeArea").textContent=`${fmt(adopted)}㎡`;$("pipeFormula").textContent=`π × 外径 ${fmt(D,3)}m × 長さ ${fmt(L)}m × ${q}本 = ${fmt(area)}㎡`;}
["pipeD","pipeL","pipeQty"].forEach(id=>$(id).addEventListener("input",calcPipe));if($("calcPipeBtn"))$("calcPipeBtn").onclick=calcPipe;

// 製品・部品塗装
function updateProductFields(){const sh=$("productShape").value;document.querySelectorAll(".product-ab").forEach(x=>x.classList.toggle("hidden",!["plate","box"].includes(sh)));document.querySelectorAll(".product-c").forEach(x=>x.classList.toggle("hidden",!["box","cylinder"].includes(sh)));document.querySelectorAll(".product-d").forEach(x=>x.classList.toggle("hidden",sh!=="cylinder"));document.querySelectorAll(".product-direct").forEach(x=>x.classList.toggle("hidden",sh!=="direct"));calcProduct()}
function calcProduct(){const sh=$("productShape").value,q=Math.max(1,n("productQty"));let one=0,formula="";if(sh==="plate"){one=n("productA")*n("productB");formula=`${fmt(n("productA"))} × ${fmt(n("productB"))}`;}else if(sh==="box"){const a=n("productA"),b=n("productB"),c=n("productC");one=2*(a*b+a*c+b*c);formula=`2 × (L×W ＋ L×H ＋ W×H)`;}else if(sh==="cylinder"){const d=n("productD"),h=n("productC")||1;one=Math.PI*d*h+Math.PI*d*d/2;formula=`円筒外面（側面＋両端）`;}else{one=n("productDirect");formula=`直接入力 ${fmt(one)}㎡`;}const area=one*q;const adopted=adoptedArea(area,"productRound");state.productRawArea=area;state.productArea=adopted;$("productArea").textContent=`${fmt(adopted)}㎡`;$("productFormula").textContent=`${formula} × ${q}個 = ${fmt(area)}㎡`;}
$("productShape").addEventListener("change",updateProductFields);["productQty","productA","productB","productC","productD","productDirect"].forEach(id=>$(id).addEventListener("input",calcProduct));if($("calcProductBtn"))$("calcProductBtn").onclick=calcProduct;

// その他
function calcOther(){state.otherArea=Math.max(0,n("otherAreaInput"));$("otherArea").textContent=`${fmt(state.otherArea)}㎡`;}
$("otherAreaInput").addEventListener("input",calcOther);


["vesselRound"].forEach(id=>{if($(id))$(id).addEventListener("change",calcVessel);});
["pipeRound"].forEach(id=>{if($(id))$(id).addEventListener("change",calcPipe);});
["productRound"].forEach(id=>{if($(id))$(id).addEventListener("change",calcProduct);});
["otherRound"].forEach(id=>{if($(id))$(id).addEventListener("change",calcOther);});

// material
let specRows=[];
let calcItems=[];
let selectedCalcItemId=null;

function getMaterialCalcMode(m){
  if(m.calcMode) return m.calcMode;
  if(m.foam) return "foam";
  return m.usage==null ? "manual" : "area";
}

function addSpecMaterial(prefillIndex=0){
  if(materials[prefillIndex]?.deleted){
    const firstActive=materials.findIndex(m=>!m.deleted);
    prefillIndex=firstActive>=0?firstActive:0;
  }
  specRows.push({
    id:"spec-"+Date.now()+"-"+Math.random().toString(16).slice(2),
    materialIndex:Math.max(0,Math.min(prefillIndex,materials.length-1)),
    thickness:(materials[Math.max(0,Math.min(prefillIndex,materials.length-1))]?.standardThickness??2.0),
    foamThickness:(materials[Math.max(0,Math.min(prefillIndex,materials.length-1))]?.standardThickness??25),
    loss:(materials[Math.max(0,Math.min(prefillIndex,materials.length-1))]?.defaultLoss??0.20),
    manualUsage:null, usageOverride:null, packageMode:"optimal"
  });
  renderSpecRows();
  calcAllSpecMaterials();
}

let lastDeletedSpecMaterial=null;
function removeSpecMaterial(id){
  const idx=specRows.findIndex(r=>r.id===id);
  if(idx<0)return;
  lastDeletedSpecMaterial={row:{...specRows[idx]},index:idx,targetId:selectedCalcItemId};
  specRows.splice(idx,1);
  renderSpecRows();
  calcAllSpecMaterials();
  if(confirm("材料を削除しました。\nすぐに元へ戻しますか？")) restoreLastSpecMaterial();
}
function restoreLastSpecMaterial(){
  if(!lastDeletedSpecMaterial)return;
  const x=lastDeletedSpecMaterial;
  specRows.splice(Math.min(x.index,specRows.length),0,x.row);
  lastDeletedSpecMaterial=null;
  renderSpecRows();calcAllSpecMaterials();
}

function renderSpecRows(){
  const wrap=$("specMaterialRows");
  if(!wrap) return;
  if(!specRows.length){
    wrap.innerHTML='<div class="info">使用材料がまだありません。「＋ 使用材料を追加」から追加してください。</div>';
    return;
  }

  wrap.innerHTML=specRows.map((r,idx)=>{
    const m=materials[r.materialIndex]||materials[0];
    const mode=getMaterialCalcMode(m);
    let fields="";

    if(mode==="thickness"){
      fields=`<label>膜厚 (mm)
        <input class="spec-thickness" data-id="${r.id}" type="number" min="0.1" step="0.1" value="${r.thickness}">
        <small class="standard-note">標準：${Number(m.standardThickness??2).toFixed(1)}mm</small>
      </label>`;
    }else if(mode==="foam"){
      fields=`<label>発泡ウレタン厚み
        <select class="spec-foam-thickness" data-id="${r.id}">
          <option value="25" ${r.foamThickness==25?"selected":""}>25mm</option>
          <option value="20" ${r.foamThickness==20?"selected":""}>20mm</option>
          <option value="15" ${r.foamThickness==15?"selected":""}>15mm</option>
        </select>
        <small class="standard-note">標準：${m.standardThickness??25}mm　※${[25,20,15].map(t=>`${t}mm=${fmt(Number(m.foamUsages?.[t]??0),2)}${m.unit}/㎡`).join(" / ")}</small>
      </label>`;
    }else if(mode==="manual"){
      fields=`<label>使用量 (${m.unit||"L"}/㎡)
        <input class="spec-manual-usage" data-id="${r.id}" type="number" min="0" step="0.001" value="${r.manualUsage??""}">
        <small class="standard-note">標準：未登録（案件ごとに入力）</small>
      </label>`;
    }else{
      const currentUsage=r.usageOverride??m.usage??0;
      fields=`<label>使用量 (${m.unit||"L"}/㎡)
        <input class="spec-area-usage" data-id="${r.id}" type="number" min="0" step="1" value="${currentUsage}">
        <small class="standard-note">標準：${m.usage??"未登録"}${m.usage!=null?m.unit+"/㎡":""}</small>
      </label>`;
    }

    return `<div class="spec-material-row">
      <div class="spec-material-head"><strong>材料 ${idx+1}</strong><button class="delete spec-delete" data-id="${r.id}">削除</button></div>
      <div class="formgrid">
      <label>製品<select class="spec-product" data-id="${r.id}">
      ${materials.map((x,i)=>({x,i})).filter(o=>!o.x.deleted||o.i===r.materialIndex).map(({x,i})=>`<option value="${i}" ${i===r.materialIndex?"selected":""}>${esc(x.series)}｜${esc(x.name)}（${esc(x.feature||"")}）</option>`).join("")}
      </select></label>
      ${fields}
      <label>ロス率<select class="spec-loss" data-id="${r.id}">
      ${[0,.05,.1,.15,.2,.25,.3,.35,.4].map(x=>`<option value="${x}" ${Math.abs(x-r.loss)<1e-9?"selected":""}>${Math.round(x*100)}%</option>`).join("")}
      </select><small class="standard-note">標準：${Math.round((m.defaultLoss??0.20)*100)}%</small></label>
      </div></div>`;
  }).join("");

  document.querySelectorAll(".spec-delete").forEach(b=>b.onclick=()=>removeSpecMaterial(b.dataset.id));
  document.querySelectorAll(".spec-product").forEach(el=>el.onchange=()=>{
    const r=specRows.find(x=>x.id===el.dataset.id); if(!r) return;
    r.materialIndex=Number(el.value);
    const nm=materials[r.materialIndex];
    r.thickness=nm?.standardThickness??2.0;
    r.foamThickness=nm?.standardThickness??25;
    r.loss=nm?.defaultLoss??0.20;
    r.manualUsage=null;r.usageOverride=null;
    renderSpecRows();calcAllSpecMaterials();
  });
  document.querySelectorAll(".spec-thickness").forEach(el=>el.oninput=()=>{const r=specRows.find(x=>x.id===el.dataset.id);if(r){r.thickness=Number(el.value)||0;calcAllSpecMaterials();}});
  document.querySelectorAll(".spec-foam-thickness").forEach(el=>el.onchange=()=>{const r=specRows.find(x=>x.id===el.dataset.id);if(r){r.foamThickness=Number(el.value)||25;calcAllSpecMaterials();}});
  document.querySelectorAll(".spec-manual-usage").forEach(el=>el.oninput=()=>{const r=specRows.find(x=>x.id===el.dataset.id);if(r){r.manualUsage=el.value===""?null:Number(el.value);calcAllSpecMaterials();}});
  document.querySelectorAll(".spec-area-usage").forEach(el=>el.oninput=()=>{const r=specRows.find(x=>x.id===el.dataset.id);if(r){r.usageOverride=el.value===""?null:Number(el.value);calcAllSpecMaterials();}});
  document.querySelectorAll(".spec-loss").forEach(el=>el.onchange=()=>{const r=specRows.find(x=>x.id===el.dataset.id);if(r){r.loss=Number(el.value);calcAllSpecMaterials();}});
}

function bestPlan(req,packs){
 const need=Number(req)||0;
 const s=[...new Set((packs||[]).map(Number).filter(x=>x>0))].sort((a,b)=>b-a);
 if(!s.length)return null;

 const counts=Array(s.length).fill(0);

 if(s.length===1){
   counts[0]=Math.ceil(need/s[0]-1e-12);
 }else{
   // 最大荷姿をできるだけ使い、残量を小さい荷姿で補う。
   // 例：2,205.60L、400L/36L → 400L×5 + 36L×6
   counts[0]=Math.floor(need/s[0]+1e-12);
   let remain=need-counts[0]*s[0];

   for(let i=1;i<s.length;i++){
     if(remain<=1e-9)break;
     if(i===s.length-1){
       counts[i]=Math.ceil(remain/s[i]-1e-12);
       remain-=counts[i]*s[i];
     }else{
       counts[i]=Math.floor(remain/s[i]+1e-12);
       remain-=counts[i]*s[i];
     }
   }
 }

 let total=counts.reduce((sum,c,i)=>sum+c*s[i],0);
 while(total+1e-9<need){
   counts[counts.length-1]++;
   total+=s[s.length-1];
 }

 const parts=counts.map((count,i)=>({size:s[i],count})).filter(x=>x.count>0);
 return {total,over:total-need,count:counts.reduce((a,b)=>a+b,0),parts,counts};
}

function calcSpecRow(r,area){
  const m=materials[r.materialIndex]; if(!m) return null;
  const mode=getMaterialCalcMode(m);
  let usage=0,basis="";

  if(mode==="thickness"){
    usage=(m.usage||0)*(r.thickness||0);
    basis=`${fmt(area)}㎡ × ${fmt(r.thickness,1)}mm × ${fmt(m.usage||0,3)}${m.unit}/㎡/mm`;
  }else if(mode==="foam"){
    usage=Number(m.foamUsages?.[r.foamThickness]??0);
    basis=`${fmt(area)}㎡ × ${r.foamThickness}mm時 ${fmt(usage,2)}${m.unit}/㎡`;
  }else if(mode==="manual"){
    usage=r.manualUsage||0; basis=`${fmt(area)}㎡ × ${fmt(usage,3)}${m.unit}/㎡`;
  }else{
    usage=r.usageOverride??m.usage??0;
    basis=`${fmt(area)}㎡ × ${fmt(usage,3)}${m.unit}/㎡`;
  }

  const theory=area*usage,required=theory*(1+r.loss);
  let order="荷姿未設定",plan=null,largeEquivalent=null,largeOrder=null,largePurchase=null;
  const validPacks=(m.packages||[]).filter(x=>Number(x)>0).map(Number);
  const largest=validPacks.length?Math.max(...validPacks):null;

  if(validPacks.length&&m.packageUnit===m.unit){
    plan=bestPlan(required,validPacks);
    if(plan) order=plan.parts.map(x=>`${x.size}${m.unit} × ${x.count}セット`).join(" ＋ ");
    if(largest){
      largeEquivalent=required/largest;
      largeOrder=`${largest}${m.unit}換算 ${fmtCeil1(largeEquivalent)}SET`;
      largePurchase=`発注する場合 ${Math.ceil(largeEquivalent)}SET`;
    }
  }else if(validPacks.length){
    order=`換算不可（必要量:${m.unit} / 荷姿:${m.packageUnit||"未設定"}）`;
  }
  return {row:r,material:m,mode,usage,theory,required,order,plan,basis,largeEquivalent,largeOrder,largePurchase,largestPackage:largest};
}


function cloneSpecRows(rows=specRows){
  return rows.map((r,i)=>({id:"multi-"+Date.now()+"-"+i+"-"+Math.random().toString(16).slice(2),materialIndex:r.materialIndex,thickness:r.thickness,foamThickness:r.foamThickness,loss:r.loss,manualUsage:r.manualUsage??null,usageOverride:r.usageOverride??null,packageMode:r.packageMode||"optimal"}));
}

let editingQuantityItemId=null;

function captureSourceData(src){
  const section=$(src);
  if(!section)return null;
  const controls={};
  section.querySelectorAll("input[id],select[id],textarea[id]").forEach(el=>{
    if(el.id===src+"Title")return;
    controls[el.id]={
      type:el.type||el.tagName.toLowerCase(),
      value:el.value,
      checked:("checked" in el)?!!el.checked:undefined
    };
  });
  const data={controls};
  if(src==="flat"){
    data.flatRows=[...$("flatRows").children].map(tr=>({
      type:tr.querySelector(".ft")?.value||"平場",
      name:tr.querySelector(".fn")?.value||"",
      a:tr.querySelector(".fa")?.value||"",
      b:tr.querySelector(".fb")?.value||"",
      q:tr.querySelector(".fq")?.value||1
    }));
  }
  captureExtraRows(src,data);
  return data;
}

function restoreSourceData(src,data){
  if(!data)return false;
  const section=$(src);if(!section)return false;
  if(src==="flat"&&Array.isArray(data.flatRows)){
    $("flatRows").innerHTML="";
    data.flatRows.forEach(r=>addFlat(r));
    if(!data.flatRows.length)addFlat();
  }
  restoreExtraRows(src,data);
  Object.entries(data.controls||{}).forEach(([id,saved])=>{
    const el=$(id);if(!el)return;
    if("checked" in el&&saved.checked!==undefined)el.checked=!!saved.checked;
    if(saved.value!==undefined){
      const values=el.tagName==="SELECT"?[...el.options].map(o=>String(o.value)):null;
      if(!values||values.includes(String(saved.value)))el.value=String(saved.value);
    }
  });
  recalcSource(src);
  return true;
}

function recalcSource(src){
  if(src==="roof"){
    $("roofSunCustomWrap").classList.toggle("hidden",$("roofSun").value!=="custom");
    calcRoof();
  }else if(src==="flat"){
    calcFlat();
  }else if(src==="tank"){
    calcTank();
  }else if(src==="vessel"){
    updateVesselFields();
  }else if(src==="pipe"){
    calcPipe();
  }else if(src==="product"){
    updateProductFields();
  }else if(src==="other"){
    calcOther();
  }
}

function setQuantityEditMode(item){
  editingQuantityItemId=item?.id||null;
  document.querySelectorAll(".send").forEach(btn=>{
    btn.textContent=(editingQuantityItemId&&btn.dataset.source===item.source)?"変更を反映":"材料計算へ追加";
  });
  document.querySelectorAll(".quantity-edit-cancel").forEach(x=>x.remove());
  if(editingQuantityItemId){
    const send=document.querySelector(`.send[data-source="${item.source}"]`);
    if(send){
      const cancel=document.createElement("button");
      cancel.type="button";cancel.className="secondary quantity-edit-cancel";cancel.textContent="編集をキャンセル";
      cancel.onclick=()=>{editingQuantityItemId=null;setQuantityEditMode(null);show("material");};
      send.insertAdjacentElement("afterend",cancel);
    }
  }
}

function beginQuantityEdit(id){
  syncSelectedCalcItem();
  const item=calcItems.find(x=>x.id===id);if(!item)return;
  if(!item.sourceData){
    alert("この施工対象は、数量入力データ保存機能を追加する前に作成されたデータのため、元の寸法を復元できません。\n\n一度元の計算画面で再計算し直してください。");
    return;
  }
  if(!restoreSourceData(item.source,item.sourceData)){
    alert("数量入力データを復元できませんでした。");
    return;
  }
  const titleInput=$(item.source+"Title");if(titleInput)titleInput.value=item.title||"";
  setQuantityEditMode(item);
  show(item.source);
}

function applyQuantityEdit(item){
  const src=item.source;
  recalcSource(src);
  const area=getSourceArea(src);
  if(area<=0){alert("施工面積が0㎡です。入力内容を確認してください。");return false;}
  const titleInput=$(src+"Title");
  const title=(titleInput?.value||"").trim()||item.title;
  item.title=title;
  item.area=area;
  item.sourceData=captureSourceData(src);
  item.jointLength=sealLengthForSource(src);
  item.sealConfig=captureSealConfig(src);
  if(titleInput)titleInput.value="";
  selectedCalcItemId=item.id;
  $("matArea").value=Number(area).toFixed(2);
  specRows=cloneSpecRows(item.materialConfigs||[]);
  $("selectedCalcLabel").textContent=`${item.title} ｜ ${fmt(item.area)}㎡`;
  editingQuantityItemId=null;
  setQuantityEditMode(null);
  renderCalcItems();
  calcAllSpecMaterials();
  scheduleProjectAutoSave();
  show("material");
  return true;
}

function getSourceArea(src){
  return Number({roof:state.roofArea,flat:state.flatArea,tank:state.tankArea,vessel:state.vesselArea,pipe:state.pipeArea,product:state.productArea,other:state.otherArea}[src])||0;
}
const MULTI_SOURCE_LABELS={roof:"屋根",flat:"屋上・床・壁",tank:"貯水槽",vessel:"他タンク",pipe:"配管",product:"製品・部品塗装",other:"面積直接入力"};
function defaultCalcTitle(src){return `${MULTI_SOURCE_LABELS[src]||"施工対象"}${calcItems.filter(x=>x.source===src).length+1}`;}
function syncSelectedCalcItem(){
  if(!selectedCalcItemId)return;
  const item=calcItems.find(x=>x.id===selectedCalcItemId); if(!item)return;
  item.area=Math.max(0,n("matArea")); item.materialConfigs=cloneSpecRows();
}
function aggregateCalcItems(){
  const groups=new Map();
  for(const item of calcItems){
    for(const row of item.materialConfigs||[]){
      const r=calcSpecRow(row,Number(item.area)||0); if(!r)continue;
      const key=r.material.id;
      if(!groups.has(key))groups.set(key,{material:r.material,required:0,theory:0,titles:[],details:[],losses:new Set(),specs:new Set()});
      const g=groups.get(key);
      g.required+=r.required; g.theory+=r.theory; g.titles.push(item.title); g.losses.add(r.row.loss);
      if(r.mode==="thickness")g.specs.add(`${fmt(r.row.thickness,1)}mm`);
      else if(r.mode==="foam")g.specs.add(`${r.row.foamThickness}mm`);
      else if(r.mode==="area")g.specs.add(`${fmt(r.usage,3)}${r.material.unit}/㎡`);
      g.details.push({title:item.title,result:r});
    }
  }
  return [...groups.values()].map(g=>{
    let order="荷姿未設定",largestPackage=null,largestEquivalent=null,packageCount=0;
    const validPacks=(g.material.packages||[]).filter(x=>Number(x)>0).map(Number);
    packageCount=validPacks.length;
    if(validPacks.length&&g.material.packageUnit===g.material.unit){
      const plan=bestPlan(g.required,validPacks);
      if(plan)order=plan.parts.map(x=>`${fmtPack(x.size)}${g.material.unit} × ${x.count}セット`).join(" ＋ ");
      largestPackage=Math.max(...validPacks);
      largestEquivalent=g.required/largestPackage;
    }else if(validPacks.length)order=`換算不可（必要量:${g.material.unit} / 荷姿:${g.material.packageUnit||"未設定"}）`;
    return {...g,order,largestPackage,largestEquivalent,packageCount};
  });
}
function renderAggregateMaterials(){
  const w=$("aggregateMaterialSummary"),d=$("aggregateDetails"); if(!w)return;
  const rows=aggregateCalcItems();
  if(!calcItems.length){
    w.innerHTML='<div class="info">計算を追加すると表示されます。</div>';
    if(d)d.innerHTML="";
    return;
  }
  const targetDetails=calcItems.map(item=>{
    const materialsHtml=(item.materialConfigs||[]).map(row=>{
      const r=calcSpecRow(row,Number(item.area)||0); if(!r)return "";
      return `<div class="aggregate-target-material"><span>${esc(r.material.name)}</span><strong>${esc(r.order)}</strong><small>${esc(r.basis)} × ${fmt(1+r.row.loss,2)} = ${fmt(r.required,2)}${r.material.unit}${r.plan?` → ${esc(r.order)}`:""}</small></div>`;
    }).join("")||'<small>材料未設定</small>';
    return `<div class="aggregate-target"><b>${esc(item.title)}</b><span>${fmt(item.area)}㎡</span>${materialsHtml}</div>`;
  }).join("");
  const totalHtml=rows.length?rows.map(x=>`<div class="spec-summary-item"><span>${esc(x.material.name)}<br><small>${[...new Set(x.titles)].map(esc).join(" / ")}</small></span><strong>${esc(x.order)}${x.packageCount>1&&x.largestEquivalent!=null?`<br><small>（最大荷姿の場合 ${fmtPack(x.largestPackage)}${x.material.unit} × ${fmtCeil1(x.largestEquivalent)}セット）</small>`:""}</strong></div>`).join(""):'<div class="info">材料を設定すると表示されます。</div>';
  w.innerHTML=`<div class="aggregate-section-title">施工対象ごとの仕様</div>${targetDetails}<div class="aggregate-section-title">案件全体の材料合計</div>${totalHtml}`;

  if(d)d.innerHTML=rows.map(x=>{
    const m=x.material;
    const lossText=x.losses.size===1?`${Math.round([...x.losses][0]*100)}%`:"施工対象ごとに異なる";
    const condition=x.specs.size?`<div class="resultline"><span>${getMaterialCalcMode(m)==="foam"?"発泡厚":getMaterialCalcMode(m)==="thickness"?"膜厚":"使用量"}</span><b>${[...x.specs].join(" / ")}</b></div>`:"";
    const largeOrder=x.largestEquivalent!=null?`${x.largestPackage}${m.unit}換算 ${fmtCeil1(x.largestEquivalent)}SET`:null;
    const largePurchase=x.largestEquivalent!=null?`発注する場合 ${Math.ceil(x.largestEquivalent)}SET`:null;
    return `<div class="spec-detail"><b>${esc(m.series)} ${esc(m.name)}｜案件全体</b>
      ${condition}
      <div class="resultline"><span>合計理論量</span><b>${fmt(x.theory,2)}${m.unit}</b></div>
      <div class="resultline"><span>ロス率</span><b>${lossText}</b></div>
      <div class="resultline"><span>合計必要量</span><b>${fmt(x.required,2)}${m.unit}</b></div>
      <div class="resultline"><span>通常荷姿</span><b>${m.packages?.length?m.packages.map(fmtPack).join(" / ")+" "+(m.packageUnit||""):"未設定"}</b></div>
      ${largeOrder?`<div class="resultline"><span>大容量換算</span><b>${esc(largeOrder)}</b></div>`:""}
      ${largePurchase?`<div class="resultline"><span>大容量のみで発注</span><b>${esc(largePurchase)}</b></div>`:""}
      <div class="resultline"><span>発注目安</span><b>${esc(x.order)}${x.packageCount>1?`<br>（最大荷姿の場合 ${fmtPack(x.largestPackage)}${m.unit} × ${fmtCeil1(x.largestEquivalent)}セット）`:""}</b></div>
      <div class="calc-basis"><b>内訳・計算根拠</b>
      ${x.details.map(v=>`<pre>${esc(v.title)}：${v.result.basis} × ${fmt(1+v.result.row.loss,2)} = ${fmt(v.result.required,2)}${m.unit}</pre>`).join("")}
      </div></div>`;
  }).join("");
}
function beginCalcTitleEdit(id){
  const item=calcItems.find(x=>x.id===id); if(!item) return;
  const wrap=document.querySelector(`.inline-title-wrap[data-title-id="${id}"]`);
  if(!wrap) return;
  const old=item.title||"名称未設定";
  wrap.innerHTML=`<input class="inline-title-input" type="text" value="${esc(old)}" aria-label="施工対象タイトル">`;
  const input=wrap.querySelector("input");
  input.focus(); input.select();
  let finished=false;
  const commit=()=>{
    if(finished)return; finished=true;
    const v=input.value.trim();
    item.title=v||old;
    if(selectedCalcItemId===id){
      $("selectedCalcLabel").textContent=`${item.title} ｜ ${fmt(item.area)}㎡`;
    }
    renderCalcItems();
    syncSelectedCalcItem();
  };
  input.addEventListener("keydown",e=>{
    if(e.key==="Enter"){e.preventDefault();commit();}
    else if(e.key==="Escape"){finished=true;renderCalcItems();}
  });
  input.addEventListener("blur",commit);
}

function clearSelectedCalcState(){
  selectedCalcItemId=null;
  state.lastSource="";
  if($("selectedCalcLabel"))$("selectedCalcLabel").textContent="追加したタイトルを選択すると、材料設定を変更できます。";
  if($("matArea"))$("matArea").value="0.00";
  specRows=[];
  state.specMaterials=[];
  renderSpecRows();
  if($("specSummary"))$("specSummary").innerHTML='<div class="info">施工対象を選択すると表示されます。</div>';
  if($("specDetails"))$("specDetails").innerHTML="";
}

function renderCalcItems(){
  const list=$("calcItemList"),total=$("calcItemTotal"); if(!list||!total)return;
  if(!calcItems.length && (selectedCalcItemId!=null || Number($("matArea")?.value||0)!==0)){
    clearSelectedCalcState();
  }
  total.textContent=`${fmt(calcItems.reduce((s,x)=>s+Number(x.area||0),0))}㎡`;
  list.innerHTML=calcItems.length?calcItems.map(item=>`<div class="calc-list-item calc-item-clickable ${item.id===selectedCalcItemId?"active":""}" data-select-id="${item.id}" role="button" tabindex="0" aria-label="${esc(item.title)}の材料設定を開く"><div class="calc-list-main"><div><span class="inline-title-wrap" data-title-id="${item.id}"><span class="inline-title-text" data-edit-title="${item.id}" title="クリックして名前を変更">${esc(item.title)}</span><button class="inline-title-edit" type="button" data-edit-title="${item.id}" title="名前を変更" aria-label="名前を変更">✎</button></span><br><small>${esc(MULTI_SOURCE_LABELS[item.source]||item.source)} ｜ ${fmt(item.area)}㎡${Number(item.jointLength)>0?` ｜ 目地・取合い ${fmt(item.jointLength)}m`:""}${item.sealConfig?.enabled&&item.sealConfig?.countReserve?` ｜ シーリング ${item.sealConfig.countReserve}本（予備込）`:""}</small></div><div class="calc-list-actions"><button class="multi-select material-setting-btn" type="button" data-id="${item.id}">使用材料</button><button class="secondary quantity-edit-btn" type="button" data-id="${item.id}">数量修正</button><button class="multi-duplicate duplicate-btn" type="button" data-id="${item.id}">複製</button><button class="delete multi-delete" type="button" data-id="${item.id}">削除</button></div></div></div>`).join(""):'<div class="calc-empty-state">まだ追加されていません。</div>';
  document.querySelectorAll(".calc-item-clickable").forEach(row=>{
    row.onclick=e=>{if(e.target.closest("button"))return; selectCalcItem(Number(row.dataset.selectId),{keepScroll:true});};
    row.onkeydown=e=>{if((e.key==="Enter"||e.key===" ")&&!e.target.closest("button")){e.preventDefault();selectCalcItem(Number(row.dataset.selectId),{keepScroll:true});}};
  });
  document.querySelectorAll(".quantity-edit-btn").forEach(b=>b.onclick=e=>{e.stopPropagation();beginQuantityEdit(Number(b.dataset.id));});
  document.querySelectorAll(".multi-select").forEach(b=>b.onclick=e=>{e.stopPropagation();openMaterialSettings(Number(b.dataset.id));});
  document.querySelectorAll(".multi-duplicate").forEach(b=>b.onclick=e=>{e.stopPropagation();duplicateCalcItem(Number(b.dataset.id));});
  document.querySelectorAll(".multi-delete").forEach(b=>b.onclick=e=>{e.stopPropagation();deleteCalcItem(Number(b.dataset.id));});
  document.querySelectorAll("[data-edit-title]").forEach(el=>el.onclick=e=>{
    e.stopPropagation();
    beginCalcTitleEdit(Number(el.dataset.editTitle));
  });
  renderAggregateMaterials();
  scheduleProjectAutoSave();
}
function selectCalcItem(id,{keepScroll=false}={}){
  const item=calcItems.find(x=>x.id===id); if(!item)return;
  selectedCalcItemId=id; state.lastSource=item.source; $("matArea").value=Number(item.area||0).toFixed(2);
  specRows=cloneSpecRows(item.materialConfigs||[]);
  if(!specRows.length)addSpecMaterial(0); else {renderSpecRows();calcAllSpecMaterials();}
  $("selectedCalcLabel").textContent=`${item.title} ｜ ${fmt(item.area)}㎡`;
  renderCalcItems();
  show("material",{scroll:!keepScroll});
}
function openMaterialSettings(id){
  // 選択時の上端スクロールを止め、使用材料欄へだけ移動する。
  selectCalcItem(id,{keepScroll:true});
  const card=$("materialSelectCard");
  if(!card)return;
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      const y=window.scrollY+card.getBoundingClientRect().top-16;
      window.scrollTo({top:y,behavior:"smooth"});
      card.classList.add("material-jump-highlight");
      setTimeout(()=>card.classList.remove("material-jump-highlight"),1000);
    });
  });
}

function duplicateCalcItem(id){
  syncSelectedCalcItem();
  const src=calcItems.find(x=>x.id===id); if(!src)return;
  const copy={
    id:Date.now()+Math.floor(Math.random()*100000),
    source:src.source,
    title:`${src.title}（複製）`,
    area:Number(src.area)||0,
    sourceData:src.sourceData?structuredClone(src.sourceData):null,
    jointLength:Number(src.jointLength)||0,
    sealConfig:src.sealConfig?structuredClone(src.sealConfig):null,
    materialConfigs:cloneSpecRows(src.materialConfigs||[])
  };
  const idx=calcItems.findIndex(x=>x.id===id);
  calcItems.splice(idx+1,0,copy);
  selectedCalcItemId=copy.id;
  selectCalcItem(copy.id);
}
function deleteCalcItem(id){
  const item=calcItems.find(x=>x.id===id);if(!item)return;
  if(!confirm(`「${item.title}」を削除しますか？\n削除済みから復元できます。`))return;
  trash.calcItems.unshift({...item,deletedAt:new Date().toISOString()});saveTrash();
  calcItems=calcItems.filter(x=>x.id!==id);
  if(!calcItems.length)clearSelectedCalcState();
  else if(selectedCalcItemId===id)clearSelectedCalcState();
  renderCalcItems();renderProjectTrash();
}
function addCurrentSourceToMaterial(src){
  if(editingQuantityItemId){
    const item=calcItems.find(x=>x.id===editingQuantityItemId);
    if(!item){editingQuantityItemId=null;setQuantityEditMode(null);}
    else{
      if(item.source!==src){alert("編集中の施工対象と計算画面が一致しません。");return;}
      applyQuantityEdit(item);
      return;
    }
  }
  const area=getSourceArea(src); if(area<=0){alert("先に施工面積を計算してください。");return;}
  const titleInput=$(src+"Title"); const title=(titleInput?.value||"").trim()||defaultCalcTitle(src);
  const item={
    id:Date.now()+Math.floor(Math.random()*100000),
    source:src,title,area,
    sourceData:captureSourceData(src),
    jointLength:sealLengthForSource(src),
    sealConfig:captureSealConfig(src),
    materialConfigs:cloneSpecRows()
  };
  calcItems.push(item); selectedCalcItemId=item.id; state.lastSource=src;
  $("matArea").value=Number(area).toFixed(2); if(titleInput)titleInput.value="";
  if(!specRows.length)addSpecMaterial(0);
  item.materialConfigs=cloneSpecRows();
  $("selectedCalcLabel").textContent=`${title} ｜ ${fmt(area)}㎡`;
  calcAllSpecMaterials(); renderCalcItems(); show("material");
}
function calcAllSpecMaterials(){
  const area=n("matArea"),results=specRows.map(r=>calcSpecRow(r,area)).filter(Boolean);
  state.specMaterials=results;
  if(!results.length){
    $("specSummary").innerHTML='<div class="info">使用材料を追加すると、ここに「何を何セット」が表示されます。</div>';
    $("specDetails").innerHTML="";
    syncSelectedCalcItem();scheduleProjectAutoSave();return;
  }

  $("specSummary").innerHTML=results.map(x=>{
    const packCount=(x.material.packages||[]).filter(p=>Number(p)>0).length;
    const maxNote=packCount>1&&x.largeEquivalent!=null
      ?`<br><small>（最大荷姿の場合 ${fmtPack(x.largestPackage)}${x.material.unit} × ${fmtCeil1(x.largeEquivalent)}セット）</small>`
      :"";
    return `<div class="spec-summary-item">
      <span>${esc(x.material.name)}</span><strong>${x.order}${maxNote}</strong>
    </div>`;
  }).join("");

  $("specDetails").innerHTML=results.map(x=>{
    const m=x.material;
    const condition=x.mode==="thickness"
      ?`<div class="resultline"><span>膜厚</span><b>${fmt(x.row.thickness,1)}mm（標準 2.0mm）</b></div>`
      :x.mode==="foam"
      ?`<div class="resultline"><span>発泡厚</span><b>${x.row.foamThickness}mm（標準 25mm）</b></div>`
      :x.mode==="area"
      ?`<div class="resultline"><span>使用量</span><b>${fmt(x.usage,3)}${m.unit}/㎡（標準 ${fmt(m.usage??0,3)}${m.unit}/㎡）</b></div>`
      :"";
    return `<div class="spec-detail"><b>${esc(m.series)} ${esc(m.name)}</b>${condition}
      <div class="resultline"><span>理論量</span><b>${fmt(x.theory,2)}${m.unit}</b></div>
      <div class="resultline"><span>ロス率</span><b>${Math.round(x.row.loss*100)}%</b></div>
      <div class="resultline"><span>必要量</span><b>${fmt(x.required,2)}${m.unit}</b></div>
      <div class="resultline"><span>通常荷姿</span><b>${m.packages?.length?m.packages.map(fmtPack).join(" / ")+" "+(m.packageUnit||""):"未設定"}</b></div>
      ${x.largeOrder?`<div class="resultline"><span>大容量換算</span><b>${esc(x.largeOrder)}</b></div>`:""}
      ${x.largePurchase?`<div class="resultline"><span>大容量のみで発注</span><b>${esc(x.largePurchase)}</b></div>`:""}
      <div class="resultline"><span>発注目安</span><b>${x.order}${((m.packages||[]).filter(p=>Number(p)>0).length>1&&x.largeEquivalent!=null)?`<br>（最大荷姿の場合 ${fmtPack(x.largestPackage)}${m.unit} × ${fmtCeil1(x.largeEquivalent)}セット）`:""}</b></div>
      <div class="calc-basis"><b>計算根拠</b><pre>${x.basis} × ${fmt(1+x.row.loss,2)} = ${fmt(x.required,2)}${m.unit}${x.plan?` → ${x.order}`:""}</pre></div></div>`;
  }).join("");
  syncSelectedCalcItem();
  renderAggregateMaterials();
  scheduleProjectAutoSave();
}

if($("addSpecMaterial")) $("addSpecMaterial").onclick=()=>addSpecMaterial(0);
if($("matArea")) $("matArea").addEventListener("input",calcAllSpecMaterials);
if($("goProject")) $("goProject").onclick=()=>show("projects");
if($("clearAllCalcItems")) $("clearAllCalcItems").onclick=()=>{if(!calcItems.length)return;if(!confirm("追加した計算をすべて削除しますか？"))return;calcItems=[];clearSelectedCalcState();renderCalcItems();};

document.querySelectorAll(".send").forEach(btn=>{btn.onclick=()=>addCurrentSourceToMaterial(btn.dataset.source);});

const MATERIAL_MODE_LABELS={area:"面積 × 標準使用量",thickness:"面積 × 膜厚 × 1mm使用量",foam:"発泡ウレタン厚み別",manual:"案件ごとに使用量入力"};
const MATERIAL_MODE_CODES=Object.fromEntries(Object.entries(MATERIAL_MODE_LABELS).map(([k,v])=>[v,k]));
function setMaterialSyncStatus(text,kind=""){
 const el=$("materialSyncStatus");if(!el)return;el.textContent=text;el.style.color=kind==="error"?"#b42318":kind==="ok"?"#18794e":"";
}
function materialForSheets(m){
 return {sheetId:m.sheetId||"",series:m.series||"",name:m.name||"",feature:m.feature||"",calcMode:MATERIAL_MODE_LABELS[getMaterialCalcMode(m)]||getMaterialCalcMode(m),usage:m.usage,unit:m.unit||"",standardThickness:m.standardThickness,defaultLoss:Math.round((m.defaultLoss??0.20)*100),packages:Array.isArray(m.packages)?m.packages:[],packageUnit:m.packageUnit||"",foamUsages:m.foamUsages||{}};
}
function materialFromSheets(m){
 return {id:"sheet-"+String(m.sheetId||m.id||Date.now()),sheetId:String(m.sheetId||m.id||""),series:m.series||"",name:m.name||"",feature:m.feature||"",calcMode:MATERIAL_MODE_CODES[m.calcMode]||m.calcMode||"manual",usage:m.usage==null?null:Number(m.usage),unit:m.unit||"",standardThickness:m.standardThickness==null||m.standardThickness===""?null:Number(m.standardThickness),defaultLoss:(Number(m.defaultLoss)||0)/100,packages:Array.isArray(m.packages)?m.packages.map(Number):[],packageUnit:m.packageUnit||"",foamUsages:m.foamUsages||undefined};
}
async function loadMaterialsFromSheets({quiet=false}={}){
 try{
   if(!quiet)setMaterialSyncStatus("Google Sheetsから同期中…");
   const data=await sheetGet("listMaterials");
   if(Array.isArray(data.materials)&&data.materials.length){
     const localDeleted=materials.filter(m=>m.deleted);
     materials=data.materials.map(materialFromSheets);
     // 削除済み材料はこの端末の復元用として保持
     for(const d of localDeleted){if(!materials.some(m=>m.sheetId&&m.sheetId===d.sheetId))materials.push(d);}
     save(S.materials,materials);renderMaster();renderSpecRows();calcAllSpecMaterials();
   }
   setMaterialSyncStatus("Google Sheets共通マスタ：同期済み","ok");return true;
 }catch(err){console.error(err);setMaterialSyncStatus("材料マスタ同期失敗","error");if(!quiet)alert("材料マスタを同期できませんでした。\\n\\n"+err.message);return false;}
}
async function saveMaterialsToSheets({quiet=false}={}){
 try{
   if(!quiet)setMaterialSyncStatus("Google Sheetsへ保存中…");
   const active=materials.filter(m=>!m.deleted).map(materialForSheets);
   const data=await sheetPostRaw("saveMaterials",{materials:active});
   if(Array.isArray(data.materials)){
     const deleted=materials.filter(m=>m.deleted);
     materials=data.materials.map(materialFromSheets).concat(deleted);
     save(S.materials,materials);renderMaster();
   }
   setMaterialSyncStatus("Google Sheets共通マスタ：保存済み","ok");return true;
 }catch(err){console.error(err);setMaterialSyncStatus("材料マスタ保存失敗","error");if(!quiet)alert("材料マスタを保存できませんでした。\\n\\n"+err.message);return false;}
}

// master
function renderMaster(){
 $("materialMaster").innerHTML=materials.map((m,i)=>({m,i})).filter(o=>!o.m.deleted).map(({m,i})=>{
   const mode=getMaterialCalcMode(m);
   const ml={area:"面積連動",thickness:"膜厚連動",foam:"厚み別",manual:"案件入力"}[mode]||mode;
   const ul=mode==="thickness"?(m.usage!=null?`${m.usage}${m.unit}/㎡/mm`:"未設定"):
            mode==="area"?(m.usage!=null?`${m.usage}${m.unit}/㎡`:"未設定"):
            mode==="foam"?(m.foamUsages?Object.keys(m.foamUsages).sort((a,b)=>Number(a)-Number(b)).map(k=>`${k}mm:${m.foamUsages[k]}${m.unit}/㎡`).join(" / "):"厚み別未設定"):"案件ごと";
   return `<tr><td>${esc(m.series)}</td><td>${esc(m.name)}</td><td>${esc(m.feature||"")}</td><td>${ml}</td><td>${ul}</td><td>${m.standardThickness!=null?m.standardThickness+"mm":"—"}</td><td>${Math.round((m.defaultLoss??0.20)*100)}%</td><td>${m.packages?.join(" / ")||"—"} ${m.packageUnit||""}</td><td><div class="material-master-actions"><button class="secondary editmat" data-i="${i}">編集</button><button class="delete deletemat" data-i="${i}">削除</button></div></td></tr>`;
 }).join("");
 document.querySelectorAll(".editmat").forEach(b=>b.onclick=()=>openMatEdit(Number(b.dataset.i)));
 document.querySelectorAll(".deletemat").forEach(b=>b.onclick=()=>deleteMaterialMaster(Number(b.dataset.i)));
 renderMaterialTrash();
 $("waveMaster").innerHTML=waves.map((w,i)=>`<tr><td><input class="wn" data-i="${i}" value="${esc(w.name)}"></td><td><input class="wf" data-i="${i}" type="number" step="0.001" value="${w.factor??""}"></td><td><input class="wno" data-i="${i}" value="${esc(w.note||"")}"></td></tr>`).join("");
}
function deleteMaterialMaster(i){
 const m=materials[i];if(!m||m.deleted)return;
 if(!confirm(`「${m.series} ${m.name}」を材料マスタから削除しますか？\n削除済み材料から復元できます。`))return;
 m.deleted=true;m.deletedAt=new Date().toISOString();save(S.materials,materials);renderMaster();saveMaterialsToSheets({quiet:true});
}
function restoreMaterialMaster(i){
 const m=materials[i];if(!m)return;
 delete m.deleted;delete m.deletedAt;save(S.materials,materials);renderMaster();saveMaterialsToSheets({quiet:true});
}
function renderMaterialTrash(){
 const w=$("materialTrashList");if(!w)return;
 const deleted=materials.map((m,i)=>({m,i})).filter(o=>o.m.deleted);
 w.innerHTML=deleted.length?deleted.map(({m,i})=>`<div class="trash-item"><div><b>${esc(m.series)}｜${esc(m.name)}</b><br><small>${m.deletedAt?`削除：${new Date(m.deletedAt).toLocaleString("ja-JP")}`:"削除済み"}</small></div><button class="secondary restore-btn restore-mat" data-i="${i}">復元</button></div>`).join(""):'<div class="info">削除済み材料はありません。</div>';
 document.querySelectorAll(".restore-mat").forEach(b=>b.onclick=()=>restoreMaterialMaster(Number(b.dataset.i)));
}
if($("toggleMaterialTrash"))$("toggleMaterialTrash").onclick=()=>{const w=$("materialTrashList");w.hidden=!w.hidden;if(!w.hidden)renderMaterialTrash();};

function openMatEdit(i){
 const m=i>=0?materials[i]:{series:"",name:"",feature:"",calcMode:"manual",usage:null,standardThickness:null,defaultLoss:0.20,unit:"",packages:[],packageUnit:""};
 $("editIndex").value=i;
 $("editSeries").value=m.series||"";
 $("editName").value=m.name||"";
 $("editFeature").value=m.feature||"";
 $("editCalcMode").value=getMaterialCalcMode(m);
 $("editUsage").value=m.usage??"";
 $("editStandardThickness").value=m.standardThickness??"";
 $("editDefaultLoss").value=Math.round((m.defaultLoss??0.20)*100);
 $("editUnit").value=m.unit||"";
 $("editPackages").value=(m.packages||[]).join(",");
 $("editPackageUnit").value=m.packageUnit||"";
 const fu=m.foamUsages||{};
 if($("editFoamUsage15"))$("editFoamUsage15").value=fu[15]??"";
 if($("editFoamUsage20"))$("editFoamUsage20").value=fu[20]??"";
 if($("editFoamUsage25"))$("editFoamUsage25").value=fu[25]??"";
 if($("foamUsageMasterFields"))$("foamUsageMasterFields").style.display=getMaterialCalcMode(m)==="foam"?"grid":"none";
 $("materialDialog").showModal();
}
if($("editCalcMode"))$("editCalcMode").onchange=()=>{if($("foamUsageMasterFields"))$("foamUsageMasterFields").style.display=$("editCalcMode").value==="foam"?"grid":"none";};
$("addMaterial").onclick=()=>openMatEdit(-1);
if($("syncMaterialMaster"))$("syncMaterialMaster").onclick=()=>loadMaterialsFromSheets();
$("closeMaterial").onclick=()=>$("materialDialog").close();
$("saveMaterialEdit").onclick=()=>{
 const i=Number($("editIndex").value);
 const m={
   id:i>=0?materials[i].id:"custom-"+Date.now(),
   sheetId:i>=0?(materials[i].sheetId||""):"",
   series:$("editSeries").value.trim(),
   name:$("editName").value.trim(),
   feature:$("editFeature").value.trim(),
   calcMode:$("editCalcMode").value,
   usage:$("editUsage").value===""?null:n("editUsage"),
   standardThickness:$("editStandardThickness").value===""?null:n("editStandardThickness"),
   defaultLoss:Math.max(0,n("editDefaultLoss"))/100,
   unit:$("editUnit").value,
   packages:$("editPackages").value.split(",").map(x=>Number(x.trim())).filter(Boolean),
   packageUnit:$("editPackageUnit").value,
   foamUsages:$("editCalcMode").value==="foam"?{
     15:Number($("editFoamUsage15").value)||0,
     20:Number($("editFoamUsage20").value)||0,
     25:Number($("editFoamUsage25").value)||0
   }:(i>=0?materials[i].foamUsages:undefined)
 };
 if(!m.name)return alert("製品名を入力してください");
 if(i>=0)materials[i]={...materials[i],...m};else materials.push(m);
 save(S.materials,materials);
 $("materialDialog").close();
 renderMaster();renderSpecRows();calcAllSpecMaterials();
 saveMaterialsToSheets({quiet:true});
};
$("saveMaster").onclick=()=>{
 document.querySelectorAll(".wn").forEach(x=>waves[Number(x.dataset.i)].name=x.value);
 document.querySelectorAll(".wf").forEach(x=>waves[Number(x.dataset.i)].factor=x.value===""?null:Number(x.value));
 document.querySelectorAll(".wno").forEach(x=>waves[Number(x.dataset.i)].note=x.value);
 save(S.waves,waves);renderWaveSelect();alert("保存しました");
};

function renderSealMaster(){
 const body=$("sealMaster");if(!body)return;
 body.innerHTML=seals.map((s,i)=>`<tr><td>${esc(s.name)}</td><td>${s.volume??""}</td><td>${esc(s.note||"")}</td><td><button class="secondary editseal" data-i="${i}">編集</button></td></tr>`).join("");
 document.querySelectorAll(".editseal").forEach(b=>b.onclick=()=>openSealEdit(Number(b.dataset.i)));
}
function openSealEdit(i){
 const s=i>=0?seals[i]:{name:"",volume:320,note:""};
 $("editSealIndex").value=i;$("editSealName").value=s.name||"";$("editSealVolume").value=s.volume||"";$("editSealNote").value=s.note||"";$("sealDialog").showModal();
}
if($("addSealProduct"))$("addSealProduct").onclick=()=>openSealEdit(-1);
if($("closeSealDialog"))$("closeSealDialog").onclick=()=>$("sealDialog").close();
if($("saveSealEdit"))$("saveSealEdit").onclick=()=>{
 const i=Number($("editSealIndex").value),item={name:$("editSealName").value.trim(),volume:Number($("editSealVolume").value)||0,note:$("editSealNote").value.trim()};
 if(!item.name)return alert("製品名を入力してください");
 if(!item.volume)return alert("容量を入力してください");
 if(i>=0)seals[i]=item;else seals.push(item);
 save(S.seals,seals);$("sealDialog").close();renderSealMaster();renderSealSelect();
};


async function saveCurrentWorkAsProject(){
 const currentId=Number($("editingProjectId")?.value)||null;
 if(currentId){
   await autoSaveCurrentProject({syncNow:true});
   setProjectAutoSaveStatus("Google Sheetsへ自動上書き保存済み","saved");
   return;
 }
 if(!calcItems.length){
   alert("案件として保存する計算がありません。");
   return;
 }
 const name=prompt("案件名を入力してください。","");
 if(name===null)return;
 if(!name.trim()){
   alert("案件名を入力してください。");
   return;
 }
 const now=new Date().toISOString();
 const p={
   id:Date.now()+Math.floor(Math.random()*100000),
   createdAt:now,updatedAt:now,name:name.trim(),
   customer:"",site:"",owner:"",memo:"",
   area:calcItems.reduce((s,x)=>s+(Number(x.area)||0),0),
   workItems:currentWorkItemsSnapshot(),
   _sheetUpdatedAt:""
 };
 projects.unshift(p);save(S.projects,projects);
 await saveProjectToSheets(p);
 $("editingProjectId").value=p.id;
 $("projectName").value=p.name;
 updateCurrentProjectLabel();
 renderProjects();
 renderQuickProjectSwitcher();
 setProjectAutoSaveStatus("この案件を保存しました","saved");
}

// project autosave / quick switching
let projectAutoSaveTimer=null;
let projectAutoSaveBusy=false;

function currentWorkItemsSnapshot(){
  syncSelectedCalcItem();
  return calcItems.map(x=>({
    id:x.id,
    sheetItemId:String(x.sheetItemId||""),
    source:x.source,title:x.title,area:Number(x.area)||0,
    sourceData:x.sourceData?structuredClone(x.sourceData):null,
    materialConfigs:cloneSpecRows(x.materialConfigs||[])
  }));
}
function generatedDraftProjectName(){
  const d=new Date(),p=n=>String(n).padStart(2,"0");
  return `未保存案件 ${d.getFullYear()}/${p(d.getMonth()+1)}/${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}
function setProjectAutoSaveStatus(text,kind=""){
  const el=$("projectAutoSaveStatus"); if(!el)return;
  el.textContent=text;el.classList.remove("saving","saved");if(kind)el.classList.add(kind);
}
function renderQuickProjectSwitcher(){
  const sel=$("quickProjectSelect");if(!sel)return;
  const currentId=Number($("editingProjectId")?.value)||null;
  const opts=[];
  if(!currentId)opts.push('<option value="" selected>未保存の計算</option>');
  [...projects].sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0)).forEach(p=>{
    const pj=String(p.sheetId||"").trim();
    const label=`${p.name||"名称未設定"}${pj?` ｜ ${pj}`:""}`;
    opts.push(`<option value="${p.id}" ${p.id===currentId?"selected":""}>${esc(label)}</option>`);
  });
  sel.innerHTML=opts.join("")||'<option value="">未保存の計算</option>';

  const saveBtn=$("quickSaveAsProject");
  const dupBtn=$("duplicateCurrentProject");
  const rule=$("projectSaveRule");
  const p=currentId?projects.find(x=>x.id===currentId):null;

  if(saveBtn)saveBtn.hidden=!!currentId;
  const saveBlock=$("unsavedProjectSaveBlock");
  if(saveBlock)saveBlock.hidden=!!currentId;
  const manualSaveBlock=$("manualProjectSaveBlock");
  if(manualSaveBlock)manualSaveBlock.hidden=!currentId;
  if(dupBtn)dupBtn.hidden=!currentId;
  const dupBlock=$("duplicateProjectBlock");
  if(dupBlock)dupBlock.hidden=!currentId;

  if(rule){
    if(p){
      const pj=String(p.sheetId||"").trim();
      rule.textContent=pj
        ? `${pj} を編集中。変更内容は同じ案件IDへGoogle Sheets自動上書き保存されます。`
        : "保存済み案件を編集中。変更内容は同じ案件へGoogle Sheets自動上書き保存されます。";
    }else{
      rule.textContent="この案件を保存するとPJ-IDを発行し、Google Sheetsへ新規登録します。";
    }
  }
}
async function autoSaveCurrentProject({createIfNeeded=false,syncNow=false}={}){
 if(syncNow){
   clearTimeout(sheetSyncTimer);
   clearTimeout(projectAutoSaveTimer);
 }
 const id=Number($("editingProjectId")?.value)||null;
 if(!id){
   setProjectAutoSaveStatus(calcItems.length?"未保存の新規案件":"未保存の計算","");
   return false;
 }
 const p=projects.find(x=>x.id===id);
 if(!p)return false;

 // まず端末へ即時保存。ここではGoogle Sheets通信を待たない。
 p.workItems=currentWorkItemsSnapshot();
 p.area=calcItems.reduce((s,x)=>s+(Number(x.area)||0),0);
 const enteredName=($("projectName")?.value||"").trim();
 if(enteredName)p.name=enteredName;
 p.updatedAt=new Date().toISOString();
 save(S.projects,projects);
 renderProjects();
 renderQuickProjectSwitcher();

 if(syncNow){
   setProjectAutoSaveStatus("Google Sheetsへ保存中…","saving");
   const ok=await saveProjectToSheets(p,{quiet:true,manualConflict:true});
   if(ok){
     setProjectAutoSaveStatus(`Google Sheetsへ保存済み ${new Date().toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit"})}`,"saved");
   }
   return ok;
 }

 // 連続編集中はSheetsへ毎回送らず、最後の変更から4秒後にまとめて1回同期。
 setProjectAutoSaveStatus("端末に保存済み","");
 scheduleSheetProjectSave(p);
 return true;
}
function scheduleProjectAutoSave(){
  if(!Number($("editingProjectId")?.value))return;
  clearTimeout(projectAutoSaveTimer);
  // 入力のたびに通信待ち表示は出さず、少し落ち着いてから端末保存へまとめる。
  setProjectAutoSaveStatus("編集中…","");
  projectAutoSaveTimer=setTimeout(()=>autoSaveCurrentProject(),250);
}
async function createQuickNewProject(){
  clearTimeout(projectAutoSaveTimer);
  await autoSaveCurrentProject({createIfNeeded:true});
  const name=prompt("新しい案件名を入力してください。","");
  if(name===null)return;
  const now=new Date().toISOString();
  const p={id:Date.now()+Math.floor(Math.random()*100000),createdAt:now,updatedAt:now,name:name.trim()||"名称未設定",customer:"",site:"",owner:"",memo:"",area:0,workItems:[],_sheetUpdatedAt:""};
  projects.unshift(p);save(S.projects,projects);
  $("editingProjectId").value=p.id;$("projectName").value=p.name;
  $("projectCustomer").value="";$("projectSite").value="";$("projectOwner").value="";$("projectMemo").value="";
  calcItems=[];selectedCalcItemId=null;specRows=[];
  $("selectedCalcLabel").textContent="追加したタイトルを選択すると、材料設定を変更できます。";
  renderCalcItems();updateCurrentProjectLabel();renderProjects();renderQuickProjectSwitcher();
  setProjectAutoSaveStatus("新規案件を作成しました","saved");show("material");
}

// Google Sheetsへ保存する「種別」の表示名
const SHEET_SOURCE_LABELS={
  roof:"屋根",
  flat:"屋上・床・壁",
  tank:"貯水槽",
  vessel:"他タンク",
  pipe:"配管",
  product:"製品・部品塗装",
  other:"面積直接入力"
};
const SHEET_SOURCE_CODES=Object.fromEntries(
  Object.entries(SHEET_SOURCE_LABELS).map(([code,label])=>[label,code])
);
function sourceToSheetLabel(source){
  const s=String(source||"");
  return SHEET_SOURCE_LABELS[s]||s;
}
function sourceFromSheetLabel(source){
  const s=String(source||"");
  return SHEET_SOURCE_CODES[s]||s;
}
function projectForSheets(project){
  return {
    ...project,
    id:project.sheetId||"",
    legacyId:String(project.id||""),
    workItems:(Array.isArray(project.workItems)?project.workItems:[]).map(item=>({
      ...item,
      id:item.sheetItemId||"",
      legacyId:String(item.id||""),
      source:sourceToSheetLabel(item.source)
    }))
  };
}
function projectFromSheets(project){
  if(!project)return project;
  return {
    ...project,
    sheetId:String(project.id||""),
    id:project.legacyId&&/^\\d+$/.test(String(project.legacyId))?Number(project.legacyId):null,
    workItems:(Array.isArray(project.workItems)?project.workItems:[]).map((item,i)=>({
      ...item,
      sheetItemId:String(item.id||""),
      id:item.legacyId&&/^\\d+$/.test(String(item.legacyId))?Number(item.legacyId):(Date.now()+i+Math.floor(Math.random()*100000)),
      source:sourceFromSheetLabel(item.source)
    }))
  };
}

// Google Sheets shared project storage
const DEFAULT_GAS_ENDPOINT="https://script.google.com/macros/s/AKfycbxcq_MAMSH1wP9yXbngsyIcUVt5ytXA5K5SSAED_1UtaiBRp1SCgOA2d4O8vmNq5Yg/exec";
let sheetSyncTimer=null;
let remoteHiddenIds=load(S.remoteHidden,[]);
if(!Array.isArray(remoteHiddenIds))remoteHiddenIds=[];

function getGasEndpoint(){
 return ($("gasEndpoint")?.value||localStorage.getItem(S.endpoint)||DEFAULT_GAS_ENDPOINT).trim();
}
function setSheetSyncStatus(text,kind=""){
 const el=$("sheetSyncStatus");if(!el)return;
 el.textContent=text;
 el.style.color=kind==="error"?"#b42318":kind==="ok"?"#18794e":"";
}
async function sheetGet(action,params={}){
 const endpoint=getGasEndpoint();
 if(!endpoint)throw new Error("Apps Script URLが設定されていません。");
 const u=new URL(endpoint);
 u.searchParams.set("action",action);
 Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,String(v)));
 const r=await fetch(u.toString(),{method:"GET",redirect:"follow",cache:"no-store"});
 if(!r.ok)throw new Error(`通信エラー ${r.status}`);
 const data=await r.json();
 if(!data||data.ok===false)throw new Error(data?.error||"Google Sheets処理に失敗しました。");
 return data;
}
async function sheetPost(action,project,{force=false}={}){
 const endpoint=getGasEndpoint();
 if(!endpoint)throw new Error("Apps Script URLが設定されていません。");
 const r=await fetch(endpoint,{
   method:"POST",
   redirect:"follow",
   headers:{"Content-Type":"text/plain;charset=utf-8"},
   body:JSON.stringify({
     action,
     project,
     expectedUpdatedAt: force ? "" : (project._sheetUpdatedAt || "")
   })
 });
 if(!r.ok)throw new Error(`通信エラー ${r.status}`);
 const data=await r.json();
 if(data?.conflict){
   const err=new Error(data.message||"この案件は別の端末で更新されています。");
   err.code="PROJECT_CONFLICT";
   err.latestUpdatedAt=data.latestUpdatedAt||"";
   throw err;
 }
 if(!data||data.ok===false)throw new Error(data?.error||"Google Sheets保存に失敗しました。");
 return data;
}
async function saveProjectToSheets(project,{quiet=false,force=false,manualConflict=false}={}){
 if(!project)return false;
 try{
   if(!quiet)setSheetSyncStatus("Sheetsへ保存中…");
   const data=await sheetPost("saveProject",projectForSheets(project),{force});
   if(data.projectId)project.sheetId=String(data.projectId);
   if(Array.isArray(data.itemIds)&&Array.isArray(project.workItems)){
     const byLegacy=new Map(data.itemIds.map(x=>[String(x.legacyId||""),String(x.itemId||"")]));
     project.workItems.forEach(item=>{const sid=byLegacy.get(String(item.id));if(sid)item.sheetItemId=sid;});
   }
   if(data.updatedAt){
     project.updatedAt=data.updatedAt;
     project._sheetUpdatedAt=data.updatedAt;
   }
   project._sheetMeta=false;
   project._remoteNewer=false;
   save(S.projects,projects);
   if(!quiet)setSheetSyncStatus("Sheets保存済み","ok");
   return true;
 }catch(err){
   console.error("Sheets save failed",err);
   if(err?.code==="PROJECT_CONFLICT"){
     setSheetSyncStatus("別端末の更新を検出","error");
     project._remoteNewer=true;
     save(S.projects,projects);

     // 「今すぐ保存」はユーザーの明示操作なので、競合確認を出さず
     // 現在画面の内容を同じ案件IDへ強制上書き保存する。
     if(manualConflict){
       return await saveProjectToSheets(project,{quiet,force:true,manualConflict:false});
     }

     // 自動保存・バックグラウンド同期では競合時に上書きしない。
     const isStillOpen=String($("editingProjectId")?.value||"")===String(project.id);
     if(isStillOpen){
       setProjectAutoSaveStatus("別端末の更新あり・「今すぐ保存」で確認してください","");
     }
     return false;
   }
         setSheetSyncStatus("Sheets保存失敗","error");
   if(!quiet)alert("Googleスプレッドシートへの保存に失敗しました。\nローカルには保存されています。\n\n"+err.message);
   return false;
 }
}
async function sheetPostRaw(action,payload={}){
 const endpoint=getGasEndpoint();if(!endpoint)throw new Error("Apps Script URLが設定されていません。");
 const r=await fetch(endpoint,{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action,...payload})});
 if(!r.ok)throw new Error(`通信エラー ${r.status}`);const data=await r.json();if(!data||data.ok===false)throw new Error(data?.error||"Google Sheets処理に失敗しました。");return data;
}
function scheduleSheetProjectSave(project){
 clearTimeout(sheetSyncTimer);
 sheetSyncTimer=setTimeout(async()=>{
   const latest=projects.find(x=>String(x.id)===String(project.id))||project;
   const ok=await saveProjectToSheets(latest,{quiet:true});
   const isStillOpen=String($("editingProjectId")?.value||"")===String(project.id);
   if(isStillOpen){
     if(ok)setProjectAutoSaveStatus(`Google Sheetsへ自動保存済み ${new Date().toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit"})}`,"saved");
     else if(latest._remoteNewer)setProjectAutoSaveStatus("別端末の更新あり・「今すぐ保存」で確認してください","");
     else setProjectAutoSaveStatus("端末に保存済み・Sheets同期失敗","");
   }
 },4000);
}
async function fetchProjectFromSheets(id){
 const local=projects.find(x=>String(x.id)===String(id));
 const projectId=local?.sheetId||id;
 const data=await sheetGet("getProject",{projectId});
 const remote=projectFromSheets(data.project||null);
 if(remote&&local)remote.id=local.id;
 return remote;
}
async function checkOpenedProjectForRemoteUpdate(projectId,openedSheetStamp){
 if(!getGasEndpoint())return;
 try{
   const remote=await fetchProjectFromSheets(projectId);
   if(!remote)return;
   const latest=remote.updatedAt||"";
   const current=projects.find(x=>String(x.id)===String(projectId));
   if(!current)return;
   const isStillOpen=String($("editingProjectId")?.value||"")===String(projectId);
   if(!isStillOpen)return;

   if(latest&&openedSheetStamp&&latest!==openedSheetStamp){
     current._remoteNewer=true;
     save(S.projects,projects);
     setSheetSyncStatus("別端末の更新あり","error");
     setProjectAutoSaveStatus("別端末の更新あり・「今すぐ保存」で確認してください","");
     // 画面を開いただけでは何も上書き・再読込しない。
     return;
   }

   if(latest){
     current._sheetUpdatedAt=latest;
     current._remoteNewer=false;
     current._sheetMeta=false;
     save(S.projects,projects);
   }
 }catch(err){
   console.warn("Background Sheets check failed",err);
 }
}
async function loadProjectsFromSheets({quiet=false}={}){
 try{
   if(!quiet)setSheetSyncStatus("案件一覧を同期中…");
   const data=await sheetGet("listProjects");

   // Google Sheetsを保存済み案件の正本として扱う。
   // Sheets上に存在するPJ-IDは、過去のローカル非表示情報に関係なく必ず表示する。
   const remoteIds=new Set((data.projects||[]).map(r=>String(r.id||"")).filter(Boolean));
   remoteHiddenIds=remoteHiddenIds.filter(x=>!remoteIds.has(String(x)));
   save(S.remoteHidden,remoteHiddenIds);

   for(const rp of (data.projects||[])){
     const sheetId=String(rp.id||"");
     const legacyId=String(rp.legacyId||"");
     let local=projects.find(p=>String(p.sheetId||"")===sheetId);
     if(!local&&legacyId)local=projects.find(p=>String(p.id)===legacyId);
     if(local){
       local.sheetId=sheetId;
       const remoteStamp=rp.updatedAt||"";
       const cachedStamp=local._sheetUpdatedAt||"";
       local._remoteNewer=!!(remoteStamp&&cachedStamp&&remoteStamp!==cachedStamp);
       local.name=rp.name||local.name;
       local.createdAt=rp.createdAt||local.createdAt;
       if(!Array.isArray(local.workItems))local.updatedAt=rp.updatedAt||local.updatedAt;
       if(!cachedStamp)local._sheetUpdatedAt=remoteStamp;
       local._sheetMeta=!Array.isArray(local.workItems);
     }else{
       projects.push({
         id:Date.now()+Math.floor(Math.random()*100000),
         sheetId,
         name:rp.name||"名称未設定",
         createdAt:rp.createdAt||"",
         updatedAt:rp.updatedAt||"",
         customer:"",site:"",owner:"",memo:"",
         _sheetUpdatedAt:rp.updatedAt||"",
         _remoteNewer:false,
         _sheetMeta:true
       });
     }
   }
   // Sheetsにある案件はすべて保持。ローカルだけの未同期案件も消さない。
   save(S.projects,projects);
   renderProjects();renderQuickProjectSwitcher();updateCurrentProjectLabel();
   setSheetSyncStatus(`同期済み ${new Date().toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit"})}`,"ok");
   return true;
 }catch(err){
   console.error("Sheets list failed",err);
   setSheetSyncStatus("同期失敗","error");
   if(!quiet)alert("Googleスプレッドシートから案件一覧を取得できませんでした。\\n\\n"+err.message);
   return false;
 }
}

// projects
$("gasEndpoint").value=localStorage.getItem(S.endpoint)||DEFAULT_GAS_ENDPOINT;
$("saveEndpoint").onclick=()=>{localStorage.setItem(S.endpoint,$("gasEndpoint").value.trim());setSheetSyncStatus("URL保存済み","ok");alert("Apps Script URLを保存しました")};
if($("syncSheetsNow"))$("syncSheetsNow").onclick=()=>loadProjectsFromSheets();

function renameProject(projectId,newName){
 const p=projects.find(x=>x.id===Number(projectId));if(!p)return false;
 const name=String(newName||"").trim();
 if(!name)return false;
 p.name=name;p.updatedAt=new Date().toISOString();
 save(S.projects,projects);
 scheduleSheetProjectSave(p);
 const currentId=Number($("editingProjectId")?.value)||null;
 if(currentId===p.id&&$("projectName"))$("projectName").value=name;
 return true;
}
function beginProjectNameEdit(projectId,source="projects"){
 const p=projects.find(x=>x.id===Number(projectId));if(!p)return;
 const el=source==="material"?$("currentProjectNameEdit"):document.querySelector(`.project-name-inline[data-project-id="${p.id}"]`);
 if(!el||el.querySelector("input"))return;
 const oldName=p.name||"";
 const input=document.createElement("input");
 input.type="text";input.className="inline-title-input project-name-input";input.value=oldName;
 el.textContent="";el.appendChild(input);input.focus();input.select();
 let done=false;
 const finish=saveName=>{
   if(done)return;done=true;
   const val=input.value.trim();
   if(saveName&&val&&val!==oldName)renameProject(p.id,val);
   updateCurrentProjectLabel();renderProjects();renderQuickProjectSwitcher();
 };
 input.addEventListener("keydown",e=>{
   if(e.key==="Enter"){e.preventDefault();finish(true);}
   if(e.key==="Escape"){e.preventDefault();finish(false);}
 });
 input.addEventListener("blur",()=>finish(true));
}
function updateCurrentProjectLabel(){
 const id=Number($("editingProjectId")?.value)||null;
 const p=id?projects.find(x=>x.id===id):null;
 const label=$("currentProjectLabel");
 if(label){
   label.innerHTML=p
     ?`現在：<span class="project-name-edit-wrap"><span class="project-name-inline" id="currentProjectNameEdit" title="クリックして案件名を編集">${esc(p.name)}</span><button type="button" class="project-name-pen" id="currentProjectNamePen" title="案件名を編集">✎</button></span>`
     :"現在：未保存の計算";
   if(p){
     const start=()=>beginProjectNameEdit(p.id,"material");
     $("currentProjectNameEdit").onclick=start;
     $("currentProjectNamePen").onclick=start;
   }
 }
 renderQuickProjectSwitcher();
}

$("saveProject").onclick=async()=>{
 const editingId=Number($("editingProjectId").value)||null;
 syncSelectedCalcItem();
 const workItems=calcItems.length?currentWorkItemsSnapshot():[{id:Date.now(),sheetItemId:"",source:state.lastSource||"other",title:"単独計算",area:n("matArea"),materialConfigs:cloneSpecRows()}];
 const now=new Date().toISOString();
 let p=editingId?projects.find(x=>x.id===editingId):null;
 if(p){
   // 既存案件は同じオブジェクトを更新し、Sheets側のPJ-ID・更新時刻を保持する。
   p.name=$("projectName").value.trim()||"名称未設定";
   p.customer=$("projectCustomer").value.trim();
   p.site=$("projectSite").value.trim();
   p.owner=$("projectOwner").value.trim();
   p.memo=$("projectMemo").value.trim();
   p.area=workItems.reduce((sum,x)=>sum+Number(x.area||0),0);
   p.workItems=workItems;
   p.updatedAt=now;
 }else{
   p={
     id:Date.now()+Math.floor(Math.random()*100000),
     sheetId:"",
     createdAt:now,updatedAt:now,
     name:$("projectName").value.trim()||"名称未設定",
     customer:$("projectCustomer").value.trim(),site:$("projectSite").value.trim(),owner:$("projectOwner").value.trim(),memo:$("projectMemo").value.trim(),
     area:workItems.reduce((sum,x)=>sum+Number(x.area||0),0),workItems,
     _sheetUpdatedAt:""
   };
   projects.unshift(p);
 }
 save(S.projects,projects);$("editingProjectId").value=p.id;await saveProjectToSheets(p);renderProjects();updateCurrentProjectLabel();alert(editingId?"案件を更新しました":"案件を保存しました");
};

function resetProjectForm(clearCalculations=false){
 $("editingProjectId").value="";$("projectName").value="";$("projectCustomer").value="";$("projectSite").value="";$("projectOwner").value="";$("projectMemo").value="";
 if(clearCalculations){
   calcItems=[];
   clearSelectedCalcState();
   renderCalcItems();
 }
 updateCurrentProjectLabel();
}
if($("newProject"))$("newProject").onclick=async()=>{
 await autoSaveCurrentProject({createIfNeeded:true});
 resetProjectForm(true);
 show("home");
};

async function openProject(id,{skipAutoSave=false,forceRemote=false,skipBackgroundCheck=false}={}){
 const currentId=Number($("editingProjectId")?.value)||null;

 // 切替元はローカルへ即時保存し、Sheets保存はバックグラウンドで行う
 if(!skipAutoSave){
   if(currentId&&String(currentId)!==String(id)){
     autoSaveCurrentProject();
   }else if(!currentId&&calcItems.length){
     // 未保存計算は呼び出し側で確認する。ここでは自動案件化しない。
   }
 }

 let p=projects.find(x=>String(x.id)===String(id));if(!p)return;

 // この端末に詳細キャッシュがない案件だけは、初回のみSheets取得を待つ
 if(getGasEndpoint()&&(forceRemote||!Array.isArray(p.workItems))){
   try{
     setProjectAutoSaveStatus("案件データを取得中…","saving");
     const remote=await fetchProjectFromSheets(id);
     if(remote){
       const remoteItems=Array.isArray(remote.workItems)?remote.workItems:[];
       const localItems=Array.isArray(p.workItems)?p.workItems:[];
       // Sheets側が空でもローカルに施工対象が残っている場合は、ローカル施工対象を優先する。
       // これにより「案件行だけSheetsにあり、施工対象行が欠落」の案件を今すぐ保存で復旧できる。
       const normalized={
         ...p,...remote,
         id:p.id,
         sheetId:remote.sheetId||p.sheetId||"",
         workItems:(remoteItems.length||!localItems.length)?remoteItems:localItems,
         customer:p.customer||"",site:p.site||"",owner:p.owner||"",memo:p.memo||"",
         _sheetUpdatedAt:remote.updatedAt||"",
         _remoteNewer:false,
         _sheetMeta:false
       };
       const idx=projects.findIndex(x=>String(x.id)===String(id));
       if(idx>=0)projects[idx]=normalized;
       p=normalized;
       save(S.projects,projects);
       renderProjects();renderQuickProjectSwitcher();
     }
   }catch(err){
     console.error("Sheets project fetch failed",err);
     if(!Array.isArray(p.workItems)){
       alert("案件詳細をGoogleスプレッドシートから取得できませんでした。\n\n"+err.message);
       return;
     }
   }
 }

 const openedSheetStamp=p._sheetUpdatedAt||"";
 $("editingProjectId").value=p.id;
 $("projectName").value=p.name||"";
 $("projectCustomer").value=p.customer||"";
 $("projectSite").value=p.site||"";
 $("projectOwner").value=p.owner||"";
 $("projectMemo").value=p.memo||"";
 calcItems=(p.workItems||[]).map((x,i)=>({
   id:x.id||Date.now()+i,
   sheetItemId:String(x.sheetItemId||""),
   source:x.source||"other",
   title:x.title||`計算${i+1}`,
   area:Number(x.area)||0,
   sourceData:x.sourceData?structuredClone(x.sourceData):null,
   materialConfigs:cloneSpecRows(x.materialConfigs||[])
 }));
 if(calcItems.length){
   selectedCalcItemId=null;
 }else{
   clearSelectedCalcState();
 }
 renderCalcItems();updateCurrentProjectLabel();
 setProjectAutoSaveStatus(p._remoteNewer?"別端末の更新あり・「今すぐ保存」で確認してください":"変更内容は自動保存されます");
 // openProjectが完了する前にユーザーが別画面（HOME等）へ移動した場合は画面を奪わない。
 const activeView=document.querySelector(".view.active")?.id||"";
 if(activeView==="material"||activeView==="projects"){
   if(calcItems.length)selectCalcItem(calcItems[0].id,{keepScroll:true});else show("material",{scroll:false});
 }

 // 表示後に裏側で最新版を確認。画面切替えは待たせない。
 if(!skipBackgroundCheck&&Array.isArray(p.workItems)){
   setTimeout(()=>checkOpenedProjectForRemoteUpdate(p.id,openedSheetStamp),0);
 }
}

function duplicateProject(id){
 const src=projects.find(x=>x.id===id);if(!src)return;
 const now=new Date().toISOString();
 const copy={
   ...src,
   id:Date.now()+Math.floor(Math.random()*100000),
   createdAt:now,updatedAt:now,
   name:`${src.name}（別パターン）`,
   _sheetUpdatedAt:"",
   _sheetMeta:false,
   workItems:(src.workItems||[]).map((x,i)=>({
     ...x,
     id:Date.now()+i+Math.floor(Math.random()*100000),
     sheetItemId:"",
     sourceData:x.sourceData?structuredClone(x.sourceData):null,
     materialConfigs:cloneSpecRows(x.materialConfigs||[])
   }))
 };
 projects.unshift(copy);save(S.projects,projects);scheduleSheetProjectSave(copy);renderProjects();openProject(copy.id);
}

function deleteProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 if(!confirm(`「${p.name}」を削除しますか？\n削除済みから復元できます。`))return;
 trash.projects.unshift({...p,deletedAt:new Date().toISOString()});saveTrash();
 const remoteKey=String(p.sheetId||id);
 if(!remoteHiddenIds.map(String).includes(remoteKey))remoteHiddenIds.unshift(remoteKey);
 remoteHiddenIds=remoteHiddenIds.slice(0,200);
 save(S.remoteHidden,remoteHiddenIds);
 projects=projects.filter(x=>String(x.id)!==String(id));
 save(S.projects,projects);
 if(Number($("editingProjectId").value)===id) resetProjectForm(true);
 renderProjects();renderProjectTrash();
}

function restoreDeletedProject(idx){
 const p=trash.projects[idx];if(!p)return;
 const restored={...p,updatedAt:new Date().toISOString()};delete restored.deletedAt;
 if(projects.some(x=>x.id===restored.id))restored.id=Date.now()+Math.floor(Math.random()*100000);
 projects.unshift(restored);trash.projects.splice(idx,1);
 const restoreKeys=new Set([String(restored.id||""),String(restored.sheetId||"")]);
 remoteHiddenIds=remoteHiddenIds.filter(x=>!restoreKeys.has(String(x)));
 save(S.remoteHidden,remoteHiddenIds);
 save(S.projects,projects);saveTrash();scheduleSheetProjectSave(restored);renderProjects();renderQuickProjectSwitcher();renderProjectTrash();
}
function restoreDeletedCalcItem(idx){
 const item=trash.calcItems[idx];if(!item)return;
 const restored={...item,id:Date.now()+Math.floor(Math.random()*100000)};delete restored.deletedAt;
 calcItems.push(restored);trash.calcItems.splice(idx,1);saveTrash();renderCalcItems();renderProjectTrash();
}
function renderProjectTrash(){
 const w=$("projectTrashList");if(!w)return;
 const pHtml=trash.projects.map((p,i)=>`<div class="trash-item"><div><b>案件｜${esc(p.name||"名称未設定")}</b><br><small>削除：${new Date(p.deletedAt).toLocaleString("ja-JP")}</small></div><button class="secondary restore-btn restore-project" data-i="${i}">復元</button></div>`).join("");
 const cHtml=trash.calcItems.map((p,i)=>`<div class="trash-item"><div><b>施工対象｜${esc(p.title||"計算")}</b><br><small>${fmt(p.area||0)}㎡ ｜ 削除：${new Date(p.deletedAt).toLocaleString("ja-JP")}</small></div><button class="secondary restore-btn restore-calc" data-i="${i}">現在の作業へ復元</button></div>`).join("");
 w.innerHTML=(pHtml+cHtml)||'<div class="info">削除済みの案件・施工対象はありません。</div>';
 document.querySelectorAll(".restore-project").forEach(b=>b.onclick=()=>restoreDeletedProject(Number(b.dataset.i)));
 document.querySelectorAll(".restore-calc").forEach(b=>b.onclick=()=>restoreDeletedCalcItem(Number(b.dataset.i)));
}
if($("toggleProjectTrash"))$("toggleProjectTrash").onclick=()=>{const w=$("projectTrashList");w.hidden=!w.hidden;if(!w.hidden)renderProjectTrash();};
if($("projectSearch"))$("projectSearch").addEventListener("input",renderProjects);

function renderProjects(){
 const currentId=Number($("editingProjectId").value)||null;
 const q=($("projectSearch")?.value||"").trim().toLowerCase();
 const visibleProjects=[...projects].sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0)).filter(p=>!q||String(p.name||"").toLowerCase().includes(q));
 $("projectList").innerHTML=visibleProjects.length?visibleProjects.map(p=>{
   const customerSite=[p.customer,p.site].filter(Boolean).map(esc).join(" ｜ ");
   const detailLoaded=Array.isArray(p.workItems);
   const count=detailLoaded?p.workItems.length:null;
   const isCurrent=String(p.id)===String(currentId);
   return `<div class="project ${isCurrent?"project-current":""}">
     <div class="headrow project-card-head">
       <div class="project-title-area"><span class="project-name-edit-wrap"><b><span class="project-name-inline" data-project-id="${p.id}" title="クリックして案件名を編集">${esc(p.name)}</span></b><button type="button" class="project-name-pen renameproject" data-id="${p.id}" title="案件名を編集">✎</button></span>${isCurrent?'<span class="project-current-badge">作業中</span>':""}<br>
       <small>更新：${new Date(p.updatedAt||p.createdAt).toLocaleString("ja-JP")} ${p.owner?"｜"+esc(p.owner):""}</small></div>
       <div class="project-actions">
         <button class="secondary openproject" data-id="${p.id}">${isCurrent?"開いています":"開く"}</button>
         <button class="secondary duplicateproject duplicate-btn" data-id="${p.id}">複製</button>
         <button class="delete deleteproject" data-id="${p.id}">削除</button>
       </div>
     </div>
     ${customerSite?`<p>${customerSite}</p>`:""}
     ${detailLoaded?`<p>計算 ${count}件 ｜ 合計施工面積 ${fmt(p.area||0)}㎡</p>`:`<p><small>開くと施工対象・材料設定を取得します。</small></p>`}${p.memo?`<p>${esc(p.memo)}</p>`:""}
   </div>`;
 }).join(""):(projects.length?"<p>検索条件に一致する案件はありません。</p>":"<p>まだ案件はありません。</p>");
 document.querySelectorAll(".project-name-inline[data-project-id]").forEach(el=>el.onclick=()=>beginProjectNameEdit(Number(el.dataset.projectId),"projects"));
 document.querySelectorAll(".renameproject").forEach(b=>b.onclick=()=>beginProjectNameEdit(Number(b.dataset.id),"projects"));
 document.querySelectorAll(".openproject").forEach(b=>b.onclick=()=>openProject(Number(b.dataset.id)));
 document.querySelectorAll(".duplicateproject").forEach(b=>b.onclick=()=>duplicateProject(Number(b.dataset.id)));
 document.querySelectorAll(".deleteproject").forEach(b=>b.onclick=()=>deleteProject(Number(b.dataset.id)));
 renderProjectTrash();
}

if($("goProjectsFromMaterial"))$("goProjectsFromMaterial").onclick=async()=>{await autoSaveCurrentProject({createIfNeeded:true});renderProjects();show("projects");};
if($("quickProjectSelect"))$("quickProjectSelect").onchange=async e=>{
 const id=Number(e.target.value)||null,currentId=Number($("editingProjectId").value)||null;
 if(!id||id===currentId){renderQuickProjectSwitcher();return;}
 if(!currentId&&calcItems.length){
   const ok=confirm("現在の計算は案件として保存されていません。\n\n選択した案件を開くと現在の計算内容は破棄されます。\n保存せずに開きますか？");
   if(!ok){renderQuickProjectSwitcher();return;}
 }
 if(currentId){
   clearTimeout(projectAutoSaveTimer);
   autoSaveCurrentProject();
 }
 await openProject(id,{skipAutoSave:true});
};
if($("quickNewProject"))$("quickNewProject").onclick=()=>{
 const currentId=Number($("editingProjectId")?.value)||null;

 // 既存案件はローカルへ即時保存し、Google Sheets保存はバックグラウンドで行う。
 if(currentId){
   autoSaveCurrentProject();
 }else if(calcItems.length>0){
   const ok=confirm("現在の計算は案件として保存されていません。\n\n現在の未保存の計算を破棄して、新規案件を開始しますか？");
   if(!ok)return;
 }

 clearTimeout(projectAutoSaveTimer);
 resetProjectForm(true);
 specRows=[];
 renderCalcItems();
 renderMaterialCalc();
 renderQuickProjectSwitcher();
 renderProjects();
 setProjectAutoSaveStatus("未保存の新規案件","");
 show("material");
};
if($("manualProjectSave"))$("manualProjectSave").onclick=async()=>{
 const id=Number($("editingProjectId")?.value)||null;
 if(!id)return;
 const btn=$("manualProjectSave");
 btn.disabled=true;
 const oldText=btn.textContent;
 btn.textContent="保存中…";
 try{
   const ok=await autoSaveCurrentProject({syncNow:true});
   if(!ok && !projects.find(x=>x.id===id)?._remoteNewer){
     setProjectAutoSaveStatus("保存できませんでした","");
   }
 }catch(err){
   console.error("Manual project save failed",err);
   setProjectAutoSaveStatus("保存に失敗しました","");
   alert("Google Sheetsへの保存に失敗しました。\n\n"+(err?.message||err));
 }finally{
   btn.disabled=false;
   btn.textContent=oldText;
 }
};
if($("quickSaveAsProject"))$("quickSaveAsProject").onclick=saveCurrentWorkAsProject;
["projectName","projectCustomer","projectSite","projectOwner","projectMemo"].forEach(id=>{const el=$(id);if(el)el.addEventListener("input",scheduleProjectAutoSave);});
if($("duplicateCurrentProject"))$("duplicateCurrentProject").onclick=async()=>{
 await autoSaveCurrentProject({createIfNeeded:true});
 const id=Number($("editingProjectId").value)||null;
 if(id){duplicateProject(id);return;}
 if(!calcItems.length){alert("複製する計算内容がありません。");return;}
 $("editingProjectId").value="";
 $("projectName").value=($("projectName").value.trim()||"名称未設定")+"（別パターン）";
 updateCurrentProjectLabel();
 show("projects");
};
// init
renderWaveSelect();
renderMaster();
renderSealSelect();
renderSealMaster();
renderProjects();
renderQuickProjectSwitcher();
updateCurrentProjectLabel();
loadProjectsFromSheets({quiet:true}).then(ok=>{
  if(ok){
    renderQuickProjectSwitcher();
    renderProjects();
    updateCurrentProjectLabel();
  }
});
loadMaterialsFromSheets({quiet:true});
renderCalcItems();
addFlat({type:"平場",name:"A面",a:10,b:8,q:1});
if($("calcOtherBtn"))$("calcOtherBtn").onclick=calcOther;calcRoof();calcTank();calcFlat();updateVesselFields();calcPipe();updateProductFields();calcOther();
addSpecMaterial(0);
if($("calcSealCount"))$("calcSealCount").onclick=()=>calcSealCount(true);
["sealVolume","sealWidth","sealDepth"].forEach(id=>{if($(id))$(id).addEventListener("input",()=>calcSealCount(false));});
if($("sealReserve"))$("sealReserve").addEventListener("change",()=>calcSealCount(false));
// ページ更新・アプリ更新後も、このタブで最後に開いていた画面を維持する。
restoreLastView();
