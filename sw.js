self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.registration.unregister()));
// app revision v82
// app revision v83
// app revision v84
// app revision v85
// app revision v86
// app revision v87 - cache bust fixed
// app revision v88 - project list recovery
// app revision v89 - Sheets project list is source of truth
// app revision v90 - deductions and joints
// app revision v91 - common sealing calculation and raw-area display cleanup
// app revision v92 - seal field alignment
// app revision v93 - quantity UI unified
// app revision v94 - desktop two-column quantity screens
// app revision v95 - sealing width/depth spinner step 1
// app revision v96 - roof/flat/vessel stacked vertical layout
// app revision v97 - quantity add button alignment
// app revision v98 - mobile/local stale project duplicate cleanup
// app revision v99 - remove stale local projects missing from Sheets
// app revision v100 - persistent device auth via localStorage + cookie fallback
// app revision v101 - lower quantity section add buttons
// app revision v102 - mobile quantity heading/button layout fix
// app revision v103 - desktop quantity add buttons right aligned
// app revision v104 - rebuilt mobile quantity input cards
// app revision v105 - separate construction area and sealing UI
// app revision v106 - result separation, sealing flow, spinner consistency, tank UI
// app revision v107 - terminology, realtime calculations, unentered sealing, spinner fix
// app revision v108 - unified mobile deduction cards
// app revision v109 - integer spinner normalization
// app revision v110 - tank deduction mobile layout fix
// app revision v111 - explicit tank deduction mobile card layout
// app revision v112 - hide unused sealing from results
// app revision v113 - roof wave UI alignment and legacy direct-area cleanup
// app revision v114 - selectable/direct/auto roof coefficients
// app revision v115 - roof coefficient UI rebuilt and runtime fix
// app revision v116 - grouped roof slope/wave coefficient cards
// app revision v117 - five roof slope input methods and conversion display
// app revision v120 - restore v117 roof UI; percent field label fixed as 勾配（%）
// app revision v121 - roof wave guidance and live calculation formula
// app revision v122 - roof material order and slate preset coefficient defaults
// app revision v123 - default area rounding: ceil to 0.1 square meter
// app revision v124 - merge roof wave material choices: folded plate and other
// app revision v125 - lower roof deduction and sealing add buttons slightly
