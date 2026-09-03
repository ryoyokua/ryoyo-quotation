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
