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
// app revision v126 - neutral mobile deduction area display
// app revision v127 - unify mobile deduction area result boxes in green, full width and same shape
// app revision v128 - tank deduction result width aligned with other deduction cards
// app revision v129 - compact collapsible sealing material calculator
// app revision v130 - sync sealing total length into material calculator; flat recalc fixed
// app revision v131 - remove roof "current calculation" display only
// app revision v132 - stability audit
// - restore common sealing config during quantity edit
// - clear stale tank area/sealing state when required dimensions are missing
// - keep v130 direct sealing-length synchronization
// app revision v133 - tank additional sealing
// automatic panel/corner sealing + manually added sealing = total sealing length
// app revision v134 - clearer tank-to-material transfer action
// app revision v135 - tank sealing add button wording
// app revision v136 - keep tank add sealing button on one line
// app revision v137 - simplify tank material transfer layout
// app revision v138 - align tank add sealing button with deduction add button on mobile
// app revision v140 - tank material transfer matches other screens
// preserves pre-v139 button/layout styling
// app revision v141 - unify tank deduction/additional sealing mobile cards
// app revision v142 - emphasize material transfer CTA on all quantity screens
