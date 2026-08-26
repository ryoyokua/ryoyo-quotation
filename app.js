const S={materials:"ryoyo_materials_v1",waves:"ryoyo_waves_v1",seals:"ryoyo_seal_products_v1",projects:"ryoyo_projects_v1",endpoint:"ryoyo_gas_endpoint_v1"};

const DEFAULT_MATERIALS=[
{id:"n-st",series:"NUKOTE",name:"ST",feature:"標準型",usage:1,unit:"L",packages:[380,38],packageUnit:"L"},
{id:"n-xt",series:"NUKOTE",name:"XT",feature:"耐薬品性能型",usage:1,unit:"L",packages:[380,38],packageUnit:"L"},
{id:"n-al",series:"NUKOTE",name:"AL",feature:"耐紫外線型",usage:1,unit:"L",packages:[380,38],packageUnit:"L"},
{id:"n-fr",series:"NUKOTE",name:"FR",feature:"難燃型",usage:1,unit:"L",packages:[380],packageUnit:"L"},
{id:"n-htd",series:"NUKOTE",name:"HTD",feature:"高強化型",usage:1,unit:"L",packages:[380,38],packageUnit:"L"},
{id:"n-har",series:"NUKOTE",name:"HAR",feature:"耐摩耗型",usage:1,unit:"L",packages:[380,38],packageUnit:"L"},
{id:"n-lp",series:"NUKOTE",name:"LP",feature:"常温硬化",usage:null,unit:"L",packages:[38],packageUnit:"L"},
{id:"n-bg",series:"NUKOTE",name:"BG",feature:"手塗り",usage:null,unit:"L",packages:[19,3.8],packageUnit:"L"},
{id:"n-jf",series:"NUKOTE",name:"JF-HM",feature:"手塗り",usage:null,unit:"L",packages:[3.8],packageUnit:"L"},
{id:"n-pa",series:"NUKOTE",name:"PA",feature:"手塗り",usage:null,unit:"L",packages:[38,7.6],packageUnit:"L"},
{id:"n-ep",series:"NUKOTE",name:"EP-primeⅡ",feature:"エポキシ系プライマー",usage:null,unit:"L",packages:[38,7.6],packageUnit:"L"},
{id:"n-pp",series:"NUKOTE",name:"Poly PrimeⅡ",feature:"ウレタン系プライマー",usage:null,unit:"L",packages:[38,7.6],packageUnit:"L"},
{id:"n-fp",series:"NUKOTE",name:"FP1",feature:"1液",usage:null,unit:"L",packages:[3.8],packageUnit:"L"},
{id:"pg4069",series:"PG",name:"PG 406-9",feature:"標準型",usage:1,unit:"L",packages:[400,36],packageUnit:"L"},
{id:"pg430",series:"PG",name:"PG 430",feature:"屋根用",usage:1,unit:"L",packages:[400,36],packageUnit:"L"},
{id:"pg409",series:"PG",name:"PG 409",feature:"衝撃・耐摩耗",usage:1,unit:"L",packages:[400,36],packageUnit:"L"},
{id:"pg408",series:"PG",name:"PG 408",feature:"耐薬品",usage:1,unit:"L",packages:[400,36],packageUnit:"L"},
{id:"pg411",series:"PG",name:"PG 411",feature:"脂肪族",usage:1,unit:"L",packages:[400,36],packageUnit:"L"},
{id:"pg301",series:"PG",name:"PG 301",feature:"手塗り A:B=1:1",usage:null,unit:"L",packages:[40],packageUnit:"L"},
{id:"pg80920",series:"PG",name:"PG 809-20",feature:"手塗り A:B=1:1",usage:null,unit:"L",packages:[40],packageUnit:"L"},
{id:"pg80940",series:"PG",name:"PG 809-40",feature:"手塗り A:B=1:1",usage:null,unit:"L",packages:[40],packageUnit:"L"},
{id:"spu",series:"SPU",name:"SPU-8010",feature:"難燃性ポリウレア",usage:1,unit:"L",packages:[380,38],packageUnit:"L"},
{id:"hr480",series:"発泡ウレタン",name:"HR480NSG-L",feature:"断熱発泡ウレタン",usage:1.75,unit:"kg",packages:[420],packageUnit:"L",foam:true},
{id:"act",series:"RSPU",name:"RS-アクトPUプライマー",feature:"PUプライマー",usage:.25,unit:"kg",packages:[17],packageUnit:"kg"},
{id:"task",series:"RSPU",name:"RS-タスクPUプライマー",feature:"PUプライマー",usage:.12,unit:"kg",packages:[5],packageUnit:"kg"}
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
<p>入力した寸法は丸めずに計算し、最後に「採用面積」だけ1㎡または0.1㎡単位で切り上げます。立上り・仕切り・役物などは必要に応じて別途拾います。材料のロスは材料計算画面で設定します。</p>
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
material:`<p><b>理論量＝施工面積×標準使用量</b></p><p><b>必要量＝理論量×（1＋ロス率）</b></p>
<p>ロス率は案件ごとに選択。材料もアプリで強制せず、担当者が現場ごとに選択します。</p>`
};

let materials=load(S.materials,DEFAULT_MATERIALS),waves=load(S.waves,DEFAULT_WAVES),seals=load(S.seals,DEFAULT_SEALS),projects=load(S.projects,[]);

// 屋根材マスタが空・破損していても必ず初期値へ復旧
if(!Array.isArray(waves) || waves.length===0){
  waves=structuredClone(DEFAULT_WAVES);
}
for(const def of DEFAULT_WAVES){
  if(!waves.some(w=>w && w.name===def.name)){
    waves.push(structuredClone(def));
  }
}

let state={roofArea:0,tankArea:0,tankSeal:0,flatArea:0,material:null,sealMode:"volume"};
const $=id=>document.getElementById(id), n=id=>Number($(id).value)||0;
const fmt=(v,d=2)=>Number(v).toLocaleString("ja-JP",{minimumFractionDigits:d,maximumFractionDigits:d});
function load(k,f){try{let v=localStorage.getItem(k);return v?JSON.parse(v):structuredClone(f)}catch{return structuredClone(f)}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

// 既存ブラウザ保存値をv2へ移行
for(const w of waves){
  if(w.name==="大波スレート" && (w.factor==null || w.factor===1.005)) w.factor=1.140;
  if(w.name==="小波スレート" && w.factor==null) w.factor=1.150;
}
save(S.waves,waves);

function show(v){document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===v));document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("active",x.dataset.view===v));scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>show(b.dataset.view));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));

document.querySelectorAll(".help").forEach(b=>b.onclick=()=>{$("helpTitle").textContent=b.dataset.help==="tank"?"貯水槽・シーリングの拾い方":"拾い方・計算方法";$("helpBody").innerHTML=HELP[b.dataset.help];$("helpDialog").showModal()});
$("closeHelp").onclick=()=>$("helpDialog").close();

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
function calcRoof(){
  const projection=n("roofL")*n("roofW")*Math.max(1,n("roofFaces"));
  const sun=getRoofSun(), slope=Math.sqrt(1+(sun/10)**2);
  const wave=Math.max(.001,n("roofWaveFactor"));
  const raw=projection*slope*wave,roundUnit=Number($("roofRound").value),adopted=ceilUnit(raw,roundUnit);
  state.roofArea=adopted;
  $("roofArea").textContent=roundUnit===1?`${fmt(adopted,0)}㎡`:`${fmt(adopted,1)}㎡`;
  $("roofRawArea").textContent=`${fmt(raw,2)}㎡`;
  $("roofDetail").innerHTML=
    `<div class="resultline"><span>平面面積</span><b>${fmt(projection,2)}㎡</b></div>`+
    `<div class="resultline"><span>勾配</span><b>${fmt(sun,1)}寸</b></div>`+
    `<div class="resultline"><span>勾配係数</span><b>${fmt(slope,3)}</b></div>`+
    `<div class="resultline"><span>波型係数</span><b>${fmt(wave,3)}</b></div>`;
  $("roofFormula").textContent=
    `${fmt(projection,2)} × ${fmt(slope,3)} × ${fmt(wave,3)} = ${fmt(raw,2)}㎡`+
    (roundUnit>0?`\n→ ${roundUnit===1?"1㎡":"0.1㎡"}単位切り上げ = ${roundUnit===1?fmt(adopted,0):fmt(adopted,1)}㎡`:"");
}
$("calcRoof").onclick=calcRoof;
["roofL","roofW","roofFaces","roofWaveFactor"].forEach(id=>$(id).addEventListener("input",calcRoof));
$("roofRound").addEventListener("change",calcRoof);
$("roofSun").addEventListener("change",()=>{$("roofSunCustomWrap").classList.toggle("hidden",$("roofSun").value!=="custom");calcRoof()});
$("roofSunCustom").addEventListener("input",calcRoof);


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

  const area=floorArea+longWallArea+shortWallArea+ceilingArea;
  const panels=floorPanels+longWallPanels+shortWallPanels+ceilingPanels;
  const sealLength=
    floorSeams+longWallSeams+shortWallSeams+ceilingSeams+
    floorWallCorner+wallVerticalCorners+ceilingWallCorner;

  state.tankArea=area;
  state.tankSeal=sealLength;

  $("tankArea").textContent=`${fmt(area)}㎡`;
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
 const tr=document.createElement("tr");tr.innerHTML=`<td><select class="ft">${Object.keys(types).map(x=>`<option ${x===d.type?"selected":""}>${x}</option>`).join("")}</select></td><td><input class="fn" value="${esc(d.name)}"></td><td><input class="fa" type="number" step=".01" value="${d.a}"></td><td><input class="fb" type="number" step=".01" value="${d.b}"></td><td><input class="fq" type="number" min="1" value="${d.q}"></td><td class="fo">0㎡</td><td><button class="delete">削除</button></td>`;
 $("flatRows").appendChild(tr);tr.querySelectorAll("input,select").forEach(x=>x.oninput=calcFlat);tr.querySelector(".delete").onclick=()=>{tr.remove();calcFlat()};calcFlat();
}
function calcFlat(){let t=0;[...$("flatRows").children].forEach(tr=>{let type=tr.querySelector(".ft").value,a=Number(tr.querySelector(".fa").value)||0,b=Number(tr.querySelector(".fb").value)||0,q=Number(tr.querySelector(".fq").value)||1;let v=type==="直接入力"?a*q:a*b*q;v*=types[type];tr.querySelector(".fo").textContent=`${fmt(v)}㎡`;t+=v});state.flatArea=Math.max(0,t);$("flatArea").textContent=`${fmt(state.flatArea)}㎡`}
$("addFlat").onclick=()=>addFlat();

// material
function renderMaterialSelect(){
 $("matSelect").innerHTML=materials.map((m,i)=>`<option value="${i}">${esc(m.series)}｜${esc(m.name)}（${esc(m.feature||"")}）</option>`).join("");materialChanged();
}
function materialChanged(){
 const m=materials[Number($("matSelect").value)];if(!m)return;$("matUsage").value=m.usage??"";$("matUnit").value=m.unit||"L";$("foamWrap").classList.toggle("hidden",!m.foam);
 $("matInfo").innerHTML=`<b>${esc(m.series)} ${esc(m.name)}</b><br>${esc(m.feature||"")}<br>通常荷姿：${m.packages?.length?m.packages.join(" / ")+" "+(m.packageUnit||""):"未設定"}`;
}
$("matSelect").onchange=materialChanged;
$("foamThickness").onchange=()=>{let u={25:1.75,20:1.4,15:1.2}[$("foamThickness").value];$("matUsage").value=u;$("matUnit").value="kg"};
function bestPlan(req,packs){
 const s=[...packs].filter(x=>x>0).sort((a,b)=>b-a);let best=null;
 function rec(i,total,parts){if(total>=req){let count=parts.reduce((x,p)=>x+p.count,0),over=total-req;if(!best||over<best.over-1e-9||(Math.abs(over-best.over)<1e-9&&count<best.count))best={total,over,count,parts:parts.filter(p=>p.count)};return}if(i>=s.length)return;let size=s[i],max=Math.ceil((req-total)/size)+2;for(let c=0;c<=max;c++)rec(i+1,total+c*size,[...parts,{size,count:c}])}rec(0,0,[]);return best;
}
function calcMat(){
 const area=n("matArea"),usage=n("matUsage"),unit=$("matUnit").value,loss=Number($("matLoss").value),m=materials[Number($("matSelect").value)],theory=area*usage,req=theory*(1+loss);
 let order="—";if(m?.packages?.length&&m.packageUnit===unit){let p=bestPlan(req,m.packages);order=p?p.parts.map(x=>`${x.size}${unit}×${x.count}`).join(" ＋ ")+`（計${fmt(p.total,1)}${unit}）`:"—"}else if(m?.packages?.length)order=`換算不可（使用量:${unit} / 荷姿:${m.packageUnit}）`;
 $("matRequired").textContent=`${fmt(req)}${unit}`;$("matDetail").innerHTML=`<div class="resultline"><span>理論量</span><b>${fmt(theory)}${unit}</b></div><div class="resultline"><span>ロス率</span><b>${fmt(loss*100,0)}%</b></div><div class="resultline"><span>通常荷姿</span><b>${m?.packages?.join(" / ")||"—"} ${m?.packageUnit||""}</b></div><div class="resultline"><span>発注目安</span><b>${order}</b></div>`;
 $("matFormula").textContent=`${fmt(area)}㎡ × ${fmt(usage,3)}${unit}/㎡ × ${fmt(1+loss,2)} = ${fmt(req)}${unit}`;
 state.material={area,usage,unit,loss,required:req,material:m,order};
}
$("calcMat").onclick=calcMat;
document.querySelectorAll(".send").forEach(b=>b.onclick=()=>{let a=b.dataset.source==="roof"?state.roofArea:b.dataset.source==="tank"?state.tankArea:state.flatArea;if(!a)return alert("先に面積を計算してください");$("matArea").value=a.toFixed(2);show("material")});
$("goProject").onclick=()=>show("projects");

// master
function renderMaster(){
 $("materialMaster").innerHTML=materials.map((m,i)=>`<tr><td>${esc(m.series)}</td><td>${esc(m.name)}</td><td>${esc(m.feature||"")}</td><td>${m.usage??"未設定"}</td><td>${m.unit?m.unit+"/㎡":"—"}</td><td>${m.packages?.join(" / ")||"—"} ${m.packageUnit||""}</td><td><button class="secondary editmat" data-i="${i}">編集</button></td></tr>`).join("");
 document.querySelectorAll(".editmat").forEach(b=>b.onclick=()=>openMatEdit(Number(b.dataset.i)));
 $("waveMaster").innerHTML=waves.map((w,i)=>`<tr><td><input class="wn" data-i="${i}" value="${esc(w.name)}"></td><td><input class="wf" data-i="${i}" type="number" step=".001" value="${w.factor??""}"></td><td><input class="wno" data-i="${i}" value="${esc(w.note||"")}"></td></tr>`).join("");
}
function openMatEdit(i){
 const m=i>=0?materials[i]:{series:"",name:"",feature:"",usage:null,unit:"",packages:[],packageUnit:""};$("editIndex").value=i;$("editSeries").value=m.series;$("editName").value=m.name;$("editFeature").value=m.feature||"";$("editUsage").value=m.usage??"";$("editUnit").value=m.unit||"";$("editPackages").value=(m.packages||[]).join(",");$("editPackageUnit").value=m.packageUnit||"";$("materialDialog").showModal()
}
$("addMaterial").onclick=()=>openMatEdit(-1);$("closeMaterial").onclick=()=>$("materialDialog").close();
$("saveMaterialEdit").onclick=()=>{let i=Number($("editIndex").value),m={id:i>=0?materials[i].id:"custom-"+Date.now(),series:$("editSeries").value.trim(),name:$("editName").value.trim(),feature:$("editFeature").value.trim(),usage:$("editUsage").value===""?null:n("editUsage"),unit:$("editUnit").value,packages:$("editPackages").value.split(",").map(x=>Number(x.trim())).filter(Boolean),packageUnit:$("editPackageUnit").value};if(!m.name)return alert("製品名を入力してください");if(i>=0)materials[i]={...materials[i],...m};else materials.push(m);save(S.materials,materials);$("materialDialog").close();renderMaster();renderMaterialSelect()};
$("saveMaster").onclick=()=>{document.querySelectorAll(".wn").forEach(x=>waves[Number(x.dataset.i)].name=x.value);document.querySelectorAll(".wf").forEach(x=>waves[Number(x.dataset.i)].factor=x.value===""?null:Number(x.value));document.querySelectorAll(".wno").forEach(x=>waves[Number(x.dataset.i)].note=x.value);save(S.waves,waves);renderWaveSelect();alert("保存しました")};


function renderSealMaster(){
  const body=$("sealMaster");
  if(!body) return;
  body.innerHTML=seals.map((s,i)=>`<tr>
    <td>${esc(s.name)}</td>
    <td>${s.volume??""}</td>
    <td>${esc(s.note||"")}</td>
    <td><button class="secondary editseal" data-i="${i}">編集</button></td>
  </tr>`).join("");
  document.querySelectorAll(".editseal").forEach(b=>b.onclick=()=>openSealEdit(Number(b.dataset.i)));
}
function openSealEdit(i){
  const s=i>=0?seals[i]:{name:"",volume:320,note:""};
  $("editSealIndex").value=i;
  $("editSealName").value=s.name||"";
  $("editSealVolume").value=s.volume||"";
  $("editSealNote").value=s.note||"";
  $("sealDialog").showModal();
}
if($("addSealProduct")) $("addSealProduct").onclick=()=>openSealEdit(-1);
if($("closeSealDialog")) $("closeSealDialog").onclick=()=>$("sealDialog").close();
if($("saveSealEdit")) $("saveSealEdit").onclick=()=>{
  const i=Number($("editSealIndex").value);
  const item={
    name:$("editSealName").value.trim(),
    volume:Number($("editSealVolume").value)||0,
    note:$("editSealNote").value.trim()
  };
  if(!item.name) return alert("製品名を入力してください");
  if(!item.volume) return alert("容量を入力してください");
  if(i>=0) seals[i]=item; else seals.push(item);
  save(S.seals,seals);
  $("sealDialog").close();
  renderSealMaster();
  renderSealSelect();
};

// projects
$("gasEndpoint").value=localStorage.getItem(S.endpoint)||"";$("saveEndpoint").onclick=()=>{localStorage.setItem(S.endpoint,$("gasEndpoint").value.trim());alert("保存しました")};
$("saveProject").onclick=async()=>{
 if(!state.material)return alert("先に材料計算をしてください");
 const p={id:Date.now(),createdAt:new Date().toISOString(),name:$("projectName").value.trim()||"名称未設定",owner:$("projectOwner").value.trim(),memo:$("projectMemo").value.trim(),roofArea:state.roofArea||null,tankArea:state.tankArea||null,tankSeal:state.tankSeal||null,flatArea:state.flatArea||null,material:{name:`${state.material.material.series} ${state.material.material.name}`,area:state.material.area,required:state.material.required,unit:state.material.unit,loss:state.material.loss,order:state.material.order}};
 projects.unshift(p);save(S.projects,projects);renderProjects();let ep=localStorage.getItem(S.endpoint);if(ep)fetch(ep,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"saveProject",project:p})}).catch(()=>{});alert("案件を保存しました");
};
function renderProjects(){$("projectList").innerHTML=projects.length?projects.map(p=>`<div class="project"><b>${esc(p.name)}</b><br><small>${new Date(p.createdAt).toLocaleString("ja-JP")} ${p.owner?"｜"+esc(p.owner):""}</small><p>${fmt(p.material.area)}㎡ ｜ ${esc(p.material.name)} ｜ ${fmt(p.material.required)}${p.material.unit}${p.tankSeal?` ｜ シール${fmt(p.tankSeal,1)}m`:""}</p>${p.memo?`<p>${esc(p.memo)}</p>`:""}</div>`).join(""):"<p>まだ案件はありません。</p>"}

renderWaveSelect();renderMaterialSelect();renderMaster();renderSealSelect();renderSealMaster();renderProjects();addFlat({type:"平場",name:"A面",a:10,b:8,q:1});calcRoof();calcTank();calcFlat();calcMat();
if($("calcSealCount")) $("calcSealCount").onclick=()=>calcSealCount(true);
["sealVolume","sealWidth","sealDepth"].forEach(id=>{
  if($(id)) $(id).addEventListener("input",()=>calcSealCount(false));
});
if($("sealReserve")) $("sealReserve").addEventListener("change",()=>calcSealCount(false));
