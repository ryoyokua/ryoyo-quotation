const S={materials:"ryoyo_materials_v1",waves:"ryoyo_waves_v1",seals:"ryoyo_seal_products_v1",projects:"ryoyo_projects_v1",endpoint:"ryoyo_gas_endpoint_v1"};

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
{id:"hr480",series:"発泡ウレタン",name:"HR480NSG-L",feature:"断熱発泡ウレタン",usage:1.75,unit:"kg",packages:[420],packageUnit:"kg",foam:true,calcMode:"foam",standardThickness:25,defaultLoss:0.20},
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
}
save(S.materials,materials);


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
function adoptedArea(value,roundId){const el=$(roundId);const unit=el?Number(el.value):0;return ceilUnit(value,unit)}
function calcRoof(){
  const projection=n("roofL")*n("roofW")*Math.max(1,n("roofFaces"));
  const sun=getRoofSun(), slope=Math.sqrt(1+(sun/10)**2);
  const wave=Math.max(.001,n("roofWaveFactor"));
  const raw=projection*slope*wave,roundUnit=Number($("roofRound").value),adopted=ceilUnit(raw,roundUnit);
  state.roofRawArea=raw;state.roofArea=adopted;
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

  const adopted=adoptedArea(area,"tankRound");
  state.tankRawArea=area;
  state.tankArea=adopted;
  state.tankSeal=sealLength;
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
 const tr=document.createElement("tr");tr.innerHTML=`<td data-label="種別"><select class="ft">${Object.keys(types).map(x=>`<option ${x===d.type?"selected":""}>${x}</option>`).join("")}</select></td><td data-label="名称"><input class="fn" value="${esc(d.name)}"></td><td data-label="長さ"><input class="fa" type="number" step=".01" value="${d.a}"></td><td data-label="幅 / 高さ"><input class="fb" type="number" step=".01" value="${d.b}"></td><td data-label="数量"><input class="fq" type="number" min="1" value="${d.q}"></td><td class="fo" data-label="面積">0㎡</td><td data-label=""><button class="delete">削除</button></td>`;
 $("flatRows").appendChild(tr);tr.querySelectorAll("input,select").forEach(x=>x.oninput=calcFlat);tr.querySelector(".delete").onclick=()=>{tr.remove();calcFlat()};calcFlat();
}
function calcFlat(){
 let t=0,rows=[];
 [...$("flatRows").children].forEach(tr=>{
   const type=tr.querySelector(".ft").value,name=tr.querySelector(".fn").value;
   const a=Number(tr.querySelector(".fa").value)||0,b=Number(tr.querySelector(".fb").value)||0,q=Number(tr.querySelector(".fq").value)||1;
   let v=type==="直接入力"?a*q:a*b*q;v*=types[type];
   tr.querySelector(".fo").textContent=`${fmt(v)}㎡`;t+=v;
   rows.push({type,name,a,b,q,area:v});
 });
 const raw=Math.max(0,t),adopted=adoptedArea(raw,"flatRound");
 state.flatRawArea=raw;state.flatArea=adopted;state.flatRows=rows;
 $("flatArea").textContent=`${fmt(adopted)}㎡`;
}
$("addFlat").onclick=()=>addFlat();if($("flatRound"))$("flatRound").addEventListener("change",calcFlat);

// 他タンク
function calcVessel(){
  const shape=$("vesselShape").value,scope=$("vesselScope").value,q=Math.max(1,n("vesselQty"));
  let area=0,formula="";
  if(shape==="cylinder"){
    const D=n("vesselD"),H=n("vesselH"),side=Math.PI*D*H,disc=Math.PI*D*D/4;
    area=(scope==="side"?side:scope==="inside"?side+disc:side+2*disc)*q;
    formula=`円筒：側面 π×${fmt(D)}×${fmt(H)}${scope==="side"?"":scope==="inside"?" ＋ 底面":" ＋ 上下面"} × ${q}基`;
  }else{
    const L=n("vesselL"),W=n("vesselW"),H=n("vesselRH"),side=2*(L+W)*H,base=L*W;
    area=(scope==="side"?side:scope==="inside"?side+base:side+2*base)*q;
    formula=`角型：側面 2×(${fmt(L)}＋${fmt(W)})×${fmt(H)}${scope==="side"?"":scope==="inside"?" ＋ 底面":" ＋ 上下面"} × ${q}基`;
  }
  const adopted=adoptedArea(area,"vesselRound");state.vesselRawArea=area;state.vesselArea=adopted;$("vesselArea").textContent=`${fmt(adopted)}㎡`;$("vesselFormula").textContent=formula+`\n= ${fmt(area)}㎡`;
}
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
  specRows.push({
    id:"spec-"+Date.now()+"-"+Math.random().toString(16).slice(2),
    materialIndex:Math.max(0,Math.min(prefillIndex,materials.length-1)),
    thickness:(materials[Math.max(0,Math.min(prefillIndex,materials.length-1))]?.standardThickness??2.0),
    foamThickness:(materials[Math.max(0,Math.min(prefillIndex,materials.length-1))]?.standardThickness??25),
    loss:(materials[Math.max(0,Math.min(prefillIndex,materials.length-1))]?.defaultLoss??0.20),
    manualUsage:null, usageOverride:null
  });
  renderSpecRows();
  calcAllSpecMaterials();
}

function removeSpecMaterial(id){
  specRows=specRows.filter(r=>r.id!==id);
  renderSpecRows();
  calcAllSpecMaterials();
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
        <small class="standard-note">標準：${m.standardThickness??25}mm　※25mm=1.75kg/㎡ / 20mm=1.40kg/㎡ / 15mm=1.20kg/㎡</small>
      </label>`;
    }else if(mode==="manual"){
      fields=`<label>使用量 (${m.unit||"L"}/㎡)
        <input class="spec-manual-usage" data-id="${r.id}" type="number" min="0" step="0.001" value="${r.manualUsage??""}">
        <small class="standard-note">標準：未登録（案件ごとに入力）</small>
      </label>`;
    }else{
      const currentUsage=r.usageOverride??m.usage??0;
      fields=`<label>使用量 (${m.unit||"L"}/㎡)
        <input class="spec-area-usage" data-id="${r.id}" type="number" min="0" step="0.001" value="${currentUsage}">
        <small class="standard-note">標準：${m.usage??"未登録"}${m.usage!=null?m.unit+"/㎡":""}</small>
      </label>`;
    }

    return `<div class="spec-material-row">
      <div class="spec-material-head"><strong>材料 ${idx+1}</strong><button class="delete spec-delete" data-id="${r.id}">削除</button></div>
      <div class="formgrid">
      <label>製品<select class="spec-product" data-id="${r.id}">
      ${materials.map((x,i)=>`<option value="${i}" ${i===r.materialIndex?"selected":""}>${esc(x.series)}｜${esc(x.name)}（${esc(x.feature||"")}）</option>`).join("")}
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
 const s=[...packs].filter(x=>x>0).sort((a,b)=>b-a);let best=null;
 function rec(i,total,parts){
   if(total>=req){
     let count=parts.reduce((x,p)=>x+p.count,0),over=total-req;
     if(!best||over<best.over-1e-9||(Math.abs(over-best.over)<1e-9&&count<best.count))best={total,over,count,parts:parts.filter(p=>p.count)};
     return;
   }
   if(i>=s.length)return;
   let size=s[i],max=Math.ceil((req-total)/size)+2;
   for(let c=0;c<=max;c++)rec(i+1,total+c*size,[...parts,{size,count:c}]);
 }
 rec(0,0,[]);return best;
}

function calcSpecRow(r,area){
  const m=materials[r.materialIndex]; if(!m) return null;
  const mode=getMaterialCalcMode(m);
  let usage=0,basis="";

  if(mode==="thickness"){
    usage=(m.usage||0)*(r.thickness||0);
    basis=`${fmt(area)}㎡ × ${fmt(r.thickness,1)}mm × ${fmt(m.usage||0,3)}${m.unit}/㎡/mm`;
  }else if(mode==="foam"){
    const map={25:1.75,20:1.40,15:1.20}; usage=map[r.foamThickness]||0;
    basis=`${fmt(area)}㎡ × ${r.foamThickness}mm時 ${fmt(usage,2)}kg/㎡`;
  }else if(mode==="manual"){
    usage=r.manualUsage||0; basis=`${fmt(area)}㎡ × ${fmt(usage,3)}${m.unit}/㎡`;
  }else{
    usage=r.usageOverride??m.usage??0;
    basis=`${fmt(area)}㎡ × ${fmt(usage,3)}${m.unit}/㎡`;
  }

  const theory=area*usage,required=theory*(1+r.loss);
  let order="荷姿未設定",plan=null;

  if(m.packages?.length&&m.packageUnit===m.unit){
    plan=bestPlan(required,m.packages);
    if(plan) order=plan.parts.map(x=>`${x.size}${m.unit} × ${x.count}セット`).join(" ＋ ");
  }else if(m.packages?.length){
    order=`換算不可（必要量:${m.unit} / 荷姿:${m.packageUnit||"未設定"}）`;
  }
  return {row:r,material:m,mode,usage,theory,required,order,plan,basis};
}


function cloneSpecRows(rows=specRows){
  return rows.map((r,i)=>({id:"multi-"+Date.now()+"-"+i+"-"+Math.random().toString(16).slice(2),materialIndex:r.materialIndex,thickness:r.thickness,foamThickness:r.foamThickness,loss:r.loss,manualUsage:r.manualUsage??null,usageOverride:r.usageOverride??null}));
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
      if(!groups.has(key))groups.set(key,{material:r.material,required:0,titles:[]});
      const g=groups.get(key); g.required+=r.required; g.titles.push(item.title);
    }
  }
  return [...groups.values()].map(g=>{
    let order="荷姿未設定";
    if(g.material.packages?.length&&g.material.packageUnit===g.material.unit){
      const plan=bestPlan(g.required,g.material.packages);
      if(plan)order=plan.parts.map(x=>`${x.size}${g.material.unit} × ${x.count}セット`).join(" ＋ ");
    }else if(g.material.packages?.length)order=`換算不可（必要量:${g.material.unit} / 荷姿:${g.material.packageUnit||"未設定"}）`;
    return {...g,order};
  });
}
function renderAggregateMaterials(){
  const w=$("aggregateMaterialSummary"); if(!w)return;
  const rows=aggregateCalcItems();
  w.innerHTML=rows.length?rows.map(x=>`<div class="spec-summary-item"><span>${esc(x.material.name)}<br><small>${[...new Set(x.titles)].map(esc).join(" / ")}</small></span><strong>${esc(x.order)}</strong></div>`).join(""):'<div class="info">計算を追加すると表示されます。</div>';
}
function renderCalcItems(){
  const list=$("calcItemList"),total=$("calcItemTotal"); if(!list||!total)return;
  total.textContent=`${fmt(calcItems.reduce((s,x)=>s+Number(x.area||0),0))}㎡`;
  list.innerHTML=calcItems.length?calcItems.map(item=>`<div class="calc-list-item ${item.id===selectedCalcItemId?"active":""}"><div class="calc-list-main"><div><b>${esc(item.title)}</b><br><small>${esc(MULTI_SOURCE_LABELS[item.source]||item.source)} ｜ ${fmt(item.area)}㎡</small></div><div class="calc-list-actions"><button class="secondary multi-select" type="button" data-id="${item.id}">材料設定</button><button class="delete multi-delete" type="button" data-id="${item.id}">削除</button></div></div></div>`).join(""):'<div class="info">まだ追加されていません。</div>';
  document.querySelectorAll(".multi-select").forEach(b=>b.onclick=()=>selectCalcItem(Number(b.dataset.id)));
  document.querySelectorAll(".multi-delete").forEach(b=>b.onclick=()=>deleteCalcItem(Number(b.dataset.id)));
  renderAggregateMaterials();
}
function selectCalcItem(id){
  const item=calcItems.find(x=>x.id===id); if(!item)return;
  selectedCalcItemId=id; state.lastSource=item.source; $("matArea").value=Number(item.area||0).toFixed(2);
  specRows=cloneSpecRows(item.materialConfigs||[]);
  if(!specRows.length)addSpecMaterial(0); else {renderSpecRows();calcAllSpecMaterials();}
  $("selectedCalcLabel").textContent=`${item.title} ｜ ${fmt(item.area)}㎡`; renderCalcItems(); show("material");
}
function deleteCalcItem(id){
  calcItems=calcItems.filter(x=>x.id!==id);
  if(selectedCalcItemId===id){selectedCalcItemId=null;$("selectedCalcLabel").textContent="追加したタイトルを選択すると、材料設定を変更できます。";}
  renderCalcItems();
}
function addCurrentSourceToMaterial(src){
  const area=getSourceArea(src); if(area<=0){alert("先に施工面積を計算してください。");return;}
  const titleInput=$(src+"Title"); const title=(titleInput?.value||"").trim()||defaultCalcTitle(src);
  const item={id:Date.now()+Math.floor(Math.random()*100000),source:src,title,area,materialConfigs:cloneSpecRows()};
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
    $("specDetails").innerHTML="";return;
  }

  $("specSummary").innerHTML=results.map(x=>`<div class="spec-summary-item">
    <span>${esc(x.material.name)}</span><strong>${x.order}</strong>
  </div>`).join("");

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
      <div class="resultline"><span>通常荷姿</span><b>${m.packages?.length?m.packages.join(" / ")+" "+(m.packageUnit||""):"未設定"}</b></div>
      <div class="resultline"><span>発注目安</span><b>${x.order}</b></div>
      <pre>${x.basis} × ${fmt(1+x.row.loss,2)} = ${fmt(x.required,2)}${m.unit}</pre></div>`;
  }).join("");
  syncSelectedCalcItem();
  renderAggregateMaterials();
}

if($("addSpecMaterial")) $("addSpecMaterial").onclick=()=>addSpecMaterial(0);
if($("matArea")) $("matArea").addEventListener("input",calcAllSpecMaterials);
if($("goProject")) $("goProject").onclick=()=>show("projects");
if($("clearAllCalcItems")) $("clearAllCalcItems").onclick=()=>{if(!calcItems.length)return;if(!confirm("追加した計算をすべて削除しますか？"))return;calcItems=[];selectedCalcItemId=null;$("selectedCalcLabel").textContent="追加したタイトルを選択すると、材料設定を変更できます。";renderCalcItems();};

document.querySelectorAll(".send").forEach(btn=>{btn.onclick=()=>addCurrentSourceToMaterial(btn.dataset.source);});

// master
function renderMaster(){
 $("materialMaster").innerHTML=materials.map((m,i)=>{
   const mode=getMaterialCalcMode(m);
   const ml={area:"面積連動",thickness:"膜厚連動",foam:"厚み別",manual:"案件入力"}[mode]||mode;
   const ul=mode==="thickness"?(m.usage!=null?`${m.usage}${m.unit}/㎡/mm`:"未設定"):
            mode==="area"?(m.usage!=null?`${m.usage}${m.unit}/㎡`:"未設定"):
            mode==="foam"?"15/20/25mm別":"案件ごと";
   return `<tr><td>${esc(m.series)}</td><td>${esc(m.name)}</td><td>${esc(m.feature||"")}</td><td>${ml}</td><td>${ul}</td><td>${m.standardThickness!=null?m.standardThickness+"mm":"—"}</td><td>${Math.round((m.defaultLoss??0.20)*100)}%</td><td>${m.packages?.join(" / ")||"—"} ${m.packageUnit||""}</td><td><button class="secondary editmat" data-i="${i}">編集</button></td></tr>`;
 }).join("");
 document.querySelectorAll(".editmat").forEach(b=>b.onclick=()=>openMatEdit(Number(b.dataset.i)));
 $("waveMaster").innerHTML=waves.map((w,i)=>`<tr><td><input class="wn" data-i="${i}" value="${esc(w.name)}"></td><td><input class="wf" data-i="${i}" type="number" step="0.001" value="${w.factor??""}"></td><td><input class="wno" data-i="${i}" value="${esc(w.note||"")}"></td></tr>`).join("");
}
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
 $("materialDialog").showModal();
}
$("addMaterial").onclick=()=>openMatEdit(-1);
$("closeMaterial").onclick=()=>$("materialDialog").close();
$("saveMaterialEdit").onclick=()=>{
 const i=Number($("editIndex").value);
 const m={
   id:i>=0?materials[i].id:"custom-"+Date.now(),
   series:$("editSeries").value.trim(),
   name:$("editName").value.trim(),
   feature:$("editFeature").value.trim(),
   calcMode:$("editCalcMode").value,
   usage:$("editUsage").value===""?null:n("editUsage"),
   standardThickness:$("editStandardThickness").value===""?null:n("editStandardThickness"),
   defaultLoss:Math.max(0,n("editDefaultLoss"))/100,
   unit:$("editUnit").value,
   packages:$("editPackages").value.split(",").map(x=>Number(x.trim())).filter(Boolean),
   packageUnit:$("editPackageUnit").value
 };
 if(!m.name)return alert("製品名を入力してください");
 if(i>=0)materials[i]={...materials[i],...m};else materials.push(m);
 save(S.materials,materials);
 $("materialDialog").close();
 renderMaster();renderSpecRows();calcAllSpecMaterials();
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

// projects
$("gasEndpoint").value=localStorage.getItem(S.endpoint)||"";
$("saveEndpoint").onclick=()=>{localStorage.setItem(S.endpoint,$("gasEndpoint").value.trim());alert("保存しました")};
$("saveProject").onclick=async()=>{
 const editingId=Number($("editingProjectId").value)||null;
 const workItems=calcItems.length?calcItems.map(x=>({id:x.id,source:x.source,title:x.title,area:x.area,materialConfigs:cloneSpecRows(x.materialConfigs||[])})):[{id:Date.now(),source:state.lastSource||"other",title:"単独計算",area:n("matArea"),materialConfigs:cloneSpecRows()}];
 const p={id:editingId||Date.now(),createdAt:editingId?(projects.find(x=>x.id===editingId)?.createdAt||new Date().toISOString()):new Date().toISOString(),updatedAt:new Date().toISOString(),name:$("projectName").value.trim()||"名称未設定",customer:$("projectCustomer").value.trim(),site:$("projectSite").value.trim(),owner:$("projectOwner").value.trim(),memo:$("projectMemo").value.trim(),area:workItems.reduce((s,x)=>s+Number(x.area||0),0),workItems};
 if(editingId){const idx=projects.findIndex(x=>x.id===editingId);if(idx>=0)projects[idx]=p;else projects.unshift(p);}else projects.unshift(p);
 save(S.projects,projects);$("editingProjectId").value=p.id;renderProjects();alert(editingId?"案件を更新しました":"案件を保存しました");
};
function resetProjectForm(){$("editingProjectId").value="";$("projectName").value="";$("projectCustomer").value="";$("projectSite").value="";$("projectOwner").value="";$("projectMemo").value="";}
if($("newProject"))$("newProject").onclick=resetProjectForm;
function openProject(id){
 const p=projects.find(x=>x.id===id);if(!p)return;
 $("editingProjectId").value=p.id;$("projectName").value=p.name||"";$("projectCustomer").value=p.customer||"";$("projectSite").value=p.site||"";$("projectOwner").value=p.owner||"";$("projectMemo").value=p.memo||"";
 calcItems=(p.workItems||[]).map((x,i)=>({id:x.id||Date.now()+i,source:x.source||"other",title:x.title||`計算${i+1}`,area:Number(x.area)||0,materialConfigs:cloneSpecRows(x.materialConfigs||[])}));
 selectedCalcItemId=null;renderCalcItems();if(calcItems.length)selectCalcItem(calcItems[0].id);else show("material");
}
function renderProjects(){
 $("projectList").innerHTML=projects.length?projects.map(p=>{const customerSite=[p.customer,p.site].filter(Boolean).map(esc).join(" ｜ ");const count=Array.isArray(p.workItems)?p.workItems.length:1;return `<div class="project"><div class="headrow"><div><b>${esc(p.name)}</b><br><small>${new Date(p.createdAt).toLocaleString("ja-JP")} ${p.owner?"｜"+esc(p.owner):""}</small></div><button class="secondary openproject" data-id="${p.id}">開く・編集</button></div>${customerSite?`<p>${customerSite}</p>`:""}<p>計算 ${count}件 ｜ 合計施工面積 ${fmt(p.area||0)}㎡</p>${p.memo?`<p>${esc(p.memo)}</p>`:""}</div>`;}).join(""):"<p>まだ案件はありません。</p>";
 document.querySelectorAll(".openproject").forEach(b=>b.onclick=()=>openProject(Number(b.dataset.id)));
}
// init
renderWaveSelect();
renderMaster();
renderSealSelect();
renderSealMaster();
renderProjects();
renderCalcItems();
addFlat({type:"平場",name:"A面",a:10,b:8,q:1});
if($("calcOtherBtn"))$("calcOtherBtn").onclick=calcOther;calcRoof();calcTank();calcFlat();updateVesselFields();calcPipe();updateProductFields();calcOther();
addSpecMaterial(0);
if($("calcSealCount"))$("calcSealCount").onclick=()=>calcSealCount(true);
["sealVolume","sealWidth","sealDepth"].forEach(id=>{if($(id))$(id).addEventListener("input",()=>calcSealCount(false));});
if($("sealReserve"))$("sealReserve").addEventListener("change",()=>calcSealCount(false));
