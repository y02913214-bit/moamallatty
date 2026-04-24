/* ===== Splash ===== */
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
setTimeout(() => {
window.location.href = "login.html";
}, 3000);
}

/* ===== تنقل ===== */
function goRegister() {
window.location.href = "register.html";
}

function goLogin() {
window.location.href = "login.html";
}

function goBack() {
window.location.href = "home.html";
}

function goBackServices() {
window.location.href = "services.html";
}

/* ===== اظهار كلمة المرور ===== */
function togglePassword(id) {
let input = document.getElementById(id);
input.type = (input.type === "password") ? "text" : "password";
}

/* ===== تسجيل ===== */
function register() {
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;
let error = document.getElementById("error");

error.innerText = "";

if (!email || !password || !confirm) {
error.innerText = "املأ كل الحقول";
return;
}

if (!email.includes("@") || !email.includes(".com")) {
error.innerText = "الإيميل غير صحيح";
return;
}

let strongPassword = /^(?=.[A-Za-z])(?=.[\W_]).{5,}$/;

if (!strongPassword.test(password)) {
error.innerText = "كلمة المرور ضعيفة";
return;
}

if (password !== confirm) {
error.innerText = "كلمة المرور غير متطابقة";
return;
}

localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

window.location.href = "login.html";
}

/* ===== تسجيل دخول ===== */

function login() {
let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value;
let error = document.getElementById("loginError");

error.innerText = "";

let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");

if (!savedEmail || !savedPassword) {
error.innerText = "لا يوجد حساب، قم بإنشاء حساب أولاً";
return;
}

if (email !== savedEmail || password !== savedPassword) {
error.innerText = "بيانات غير صحيحة";
return;
}

localStorage.setItem("isLoggedIn", "true");

window.location.href = "home.html";
}

/* ===== فتح الخدمات ===== */
function openServices(type, name) {
localStorage.setItem("serviceType", type);
localStorage.setItem("dirName", name);

window.location.href = "services.html";

}
/* ===== فتح تفاصيل الخدمة ===== */
function openDetails(service) {
localStorage.setItem("serviceName", service);

window.location.href = "details.html";

}
/* ===== تحميل الخدمات ===== */
/* ===== Splash ===== */
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
setTimeout(() => {
window.location.href = "login.html";
}, 3000);
}

/* ===== تنقل ===== */
function goRegister() {
window.location.href = "register.html";
}

function goLogin() {
window.location.href = "login.html";
}

function goBack() {
window.location.href = "home.html";
}

function goBackServices() {
window.location.href = "services.html";
}

/* ===== اظهار كلمة المرور ===== */
function togglePassword(id) {
let input = document.getElementById(id);
input.type = (input.type === "password") ? "text" : "password";
}

/* ===== تسجيل ===== */
function register() {
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;
let error = document.getElementById("error");

error.innerText = "";

if (!email || !password || !confirm) {
error.innerText = "املأ كل الحقول";
return;
}

if (!email.includes("@") || !email.includes(".com")) {
error.innerText = "الإيميل غير صحيح";
return;
}

let strongPassword = /^(?=.[A-Za-z])(?=.[\W_]).{5,}$/;

if (!strongPassword.test(password)) {
error.innerText = "كلمة المرور ضعيفة";
return;
}

if (password !== confirm) {
error.innerText = "كلمة المرور غير متطابقة";
return;
}

localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

window.location.href = "login.html";
}

/* ===== تسجيل دخول ===== */

function login() {
let email = document.getElementById("loginEmail").value.trim();
let password = document.getElementById("loginPassword").value;
let error = document.getElementById("loginError");

error.innerText = "";

let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");

if (!savedEmail || !savedPassword) {
error.innerText = "لا يوجد حساب، قم بإنشاء حساب أولاً";
return;
}

if (email !== savedEmail || password !== savedPassword) {
error.innerText = "بيانات غير صحيحة";
return;
}

localStorage.setItem("isLoggedIn", "true");

window.location.href = "home.html";
}

/* ===== فتح الخدمات ===== */
function openServices(type, name) {
localStorage.setItem("serviceType", type);
localStorage.setItem("dirName", name);

window.location.href = "services.html";

}
/* ===== فتح تفاصيل الخدمة ===== */
function openDetails(service) {
localStorage.setItem("serviceName", service);

window.location.href = "details.html";

}
/* ===== تحميل الخدمات ===== */

function loadServices() {
let list = document.getElementById("servicesList");
let title = document.getElementById("title");

let dir = localStorage.getItem("dirName");  

if (dir && title) {  
    title.innerText = "خدمات " + dir;  
}  

if (!list) return;  

let type = localStorage.getItem("serviceType");

let services = [];

if (dir === "مديرية مرور ديالى") {
services = [
"إصدار إجازة سوق لأول مرة",
"تجديد إجازة السوق",
"تجديد سنوية السيارة",
"تحويل ملكية",
"تغيير فئة إجازة سوق من خصوصي الى عمومي",
"تسجيل مركبة لأول مرة",
"إصدار بدل فاقد أو تالف للسنوية",
"بدل فاقد أو تالف لإجازة السوق"
];
} 
 else if (dir === "دائرة الجوازات ديالى") {
    services = [
        "إصدار جواز سفر لأول مرة",
        "تجديد الجواز",
        "إصدار بدل فاقد",
        "إصدار بدل تالف",
        "تصحيح بيانات الجواز",
        "خدمة الجواز السريع",
        "تغيير صورة الجواز",
        "نقل قيد الجواز بين المحافظات",
        "إقامة الأجانب",
        "تجديد إقامة أجنبي",
        "غرامات الإقامة",
        "تمديد إقامة الزائر"
    ];
  }
     
else if (dir === "دائرة الاحوال المدنية بعقوبة") {
    services = [
        "إصدار البطاقة الموحدة لأول مرة",
        "تجديد البطاقة الوطنية الموحدة",
        "بدل فاقد للبطاقة الوطنية",
        "بدل تالف للبطاقة الوطنية",
        "تصحيح بيانات البطاقة الوطنية",
        "تغيير محل السكن داخل البطاقة",
        "نقل النفوس من دائرة إلى أخرى",
        "إضافة لقب أو تعديل الاسم",
        "حذف اسم أو تعديل قيود مدنية",
        "إصدار بطاقة للمواليد الجدد",
        "تسجيل واقعة الولادة",
        "تسجيل واقعة الوفاة",
        "تسجيل الزواج",
        "تسجيل الطلاق",
        "إصدار قيد عائلي",
        "إصدار تأييد سكن"
    ];
}
    else if (dir === "جامعة ديالى") {

    services = [
        "تسجيل طالب جديد",
        "تأييد استمرار بالدراسة",
        "تأييد تخرج",
        "وثيقة تخرج",
        "وثيقة درجات",
        "صحة صدور وثيقة",
        "اعتراض على النتائج",
        "إعادة تدقيق الدفاتر الامتحانية",
        "نقل طالب من جامعة أخرى",
        "استضافة طالب",
        "تغيير قسم داخل الكلية",
        "تأجيل سنة دراسية",
        "إلغاء تأجيل",
        "إصدار هوية جامعية",
        "بدل ضائع للهوية الجامعية",
        "التقديم على الدراسات العليا",
        "متابعة طلب الدراسات العليا",
        "التقديم على السكن الداخلي",
        "تجديد السكن الداخلي",
        "براءة ذمة (خروج نهائي)"
    ];

}
       else if (dir === "محكمة استئناف ديالى") {
  services = [
    "تقديم استئناف على حكم",
    "متابعة قضايا الطلاق والنفقة",
    "معاملات التعويض",
    "نزاعات الأراضي والعقارات",
    "تنفيذ الأحكام القضائية",
    "إطلاق سراح وكفالات",
    "شكاوى جزائية",
    "متابعة القضايا",
    "تصديق قرارات المحاكم",
    "استفسار عن حالة دعوى"
  ];
} 
else {
services = [
"طلب اصدار",
"تجديد معاملة",
"بدل ضائع",
"استعلام"
];
}

list.innerHTML = "";

services.forEach((service, index) => {
let div = document.createElement("div");
div.className = "card";
div.innerText = service;

let colors = ["#2a5298", "#00a86b", "#ff9800", "#e91e63", "#9c27b0"];  
div.style.borderRight = "5px solid " + colors[index % colors.length];  

div.onclick = function () {  
  openDetails(service);  
};  

list.appendChild(div);

});
}

/* ===== تحميل تفاصيل الخدمة ===== */

/* ===== تحميل تفاصيل الخدمة ===== */
function loadDetails() {
    let title = document.getElementById("serviceTitle");
    let stepsContainer = document.getElementById("stepsContainer");

    if (!stepsContainer) return;

    let service = localStorage.getItem("serviceName");
    let dir = localStorage.getItem("dirName");
    
    if (title) title.innerText = service;

    let data = [];

    // شرط فحص الخدمة والمديرية
    if (dir === "مديرية مرور ديالى" && service === "إصدار إجازة سوق لأول مرة") {
        data = [
            { title: "📄 المستمسكات المطلوبة", color: "#2a5298", items: ["البطاقة الموحدة", "بطاقة السكن"] },
            { title: "⚙️ خطوات المعاملة", color: "#00a86b", items: ["الحجز الإلكتروني عبر بوابة أور", "تأييد الحجز (الاستمارات)", "مراجعة شعبة الاستمارات", "الفحص الطبي", "التوجه إلى شعبة الاختبار الإلكتروني", "الاختبار النظري (10 أسئلة - النجاح 6)", "التوجه إلى الفحص العملي (السياقة)", "التوجه إلى الحاسبة (الطابور)", "دفع الرسوم", "التوجه إلى حاسبة البصمة", "التدقيق", "الفحص الفني", "التوجه إلى شعبة البصمات", "استلام الإجازة"] },
            { title: "💰 الرسوم", color: "#ff9800", items: ["95 ألف دينار"] },
            { title: "📌 ملاحظات", color: "#e91e63", items: ["الدفع عن طريق الماستر كارد", "في حال الرسوب بالاختبار العملي يتم دفع رسوم إعادة", "المحاولة الثانية والثالثة مجانية"] }
        ];
    } 
    else if (dir === "مديرية مرور ديالى" && service === "تحويل ملكية") {

  data = [
    {
      title: "📄 المستمسكات المطلوبة",
      color: "#2a5298",
      items: [
        "جنسية البائع + بطاقة السكن",
        "جنسية المشتري + بطاقة السكن",
        "السنوية + إجازة السوق"
      ]
    },
    {
      title: "⚙️ خطوات المعاملة",
      color: "#00a86b",
      items: [
        "1- العقد المروري",
        "2- الحجز الإلكتروني عبر بوابة أور",
        "3- تدقيق العقد المروري",
        "4- التوجه إلى شعبة الاستعلامات لغرض الحصول على استمارة تحويل مركبة",
        "5- التوجه إلى حاسبة الغرامات + الوقفات",
        "6- التوجه إلى قسم الفحص الفني (الهزة)",
        "7- التوجه إلى حاسبة الطابور",
        "8- حضور كل من البائع والمشتري لغرض البصمة",
        "9- التوجه إلى حاسبة التدقيق",
        "10- التوجه إلى حاسبة البيمنت (الدفع الإلكتروني)",
        "11- التوجه إلى حاسبة البصمات",
        "12- إكمال المعاملة واستلام السنوية الجديدة"
      ]
    },
    {
      title: "💰 الرسوم",
      color: "#ff9800",
      items: [
        "75 ألف دينار (في حال عدم انتهاء السنوية)",
        "95 ألف دينار (في حال انتهاء السنوية القانونية)"
      ]
    },
    {
      title: "📌 ملاحظات",
      color: "#e91e63",
      items: [
        "الدفع يكون عن طريق الماستر كارد فقط"
      ]
    }
  ];

}



else if (dir === "مديرية مرور ديالى" && service === "تغيير فئة إجازة سوق من خصوصي الى عمومي") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الموحدة",
                "بطاقة السكن",
                "إجازة السوق"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "تأكيد الحجز الإلكتروني من قبل شعبة الباركود في مديرية المرور العامة",
                "التوجه إلى شعبة صرف الاستمارات",
                "الفحص الطبي (فحص النظر)",
                "فحص المخدرات والمؤثرات العقلية",
                "التوجه إلى حاسبة الاختبار الإلكتروني",
                "التوجه إلى ساحة الاختبار العملي",
                "سحب محضر تغيير فئة",
                "التوجه إلى اللجنة المختصة لتوقيع المحضر"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "193 ألف دينار"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "في حالة الرسوب يتم دفع 7 آلاف للمحاولة الثانية",
                "المحاولات التالية مجانية"
            ]
        }

    ];
}
    else if (dir === "مديرية مرور ديالى" && service === "تجديد إجازة السوق") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة (الأصلية + نسخة ملونة)",
                "إجازة السوق القديمة الأصلية",
                "بطاقة السكن"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "سحب استمارة التجديد من شعبة سحب الاستمارات",
                "التوجه إلى الشباك المختص لتدقيق المستمسكات",
                "إجراء الفحص الطبي / فحص النظر",
                "التوجه إلى قسم إدخال البيانات بالنظام الإلكتروني",
                "التوجه إلى البصمة + التقاط الصورة الجديدة للإجازة",
                "دفع الرسوم في شعبة الرسوم داخل المديرية",
                "استلام الإجازة الجديدة بعد الطباعة"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "55 ألف دينار (خصوصي)",
                "75 ألف دينار (عمومي)"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "في حال انتهاء الإجازة منذ مدة طويلة قد توجد غرامة تأخير",
                "الدفع يتم داخل المديرية عن طريق الماستر كارد",
                "تُستلم الإجازة غالباً بنفس اليوم أو بعد مدة قصيرة",
                "مدة الإنجاز تقريباً من ساعة إلى ساعتين"
            ]
        }

    ];
}
        else if (dir === "مديرية مرور ديالى" && service === "تجديد سنوية السيارة") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة الأصلية + نسخة ملونة",
                "سنوية السيارة القديمة",
                "كتاب وكالة (إذا كان المراجع وكيل عن المالك)",
                "بطاقة السكن"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "التوجه إلى شباك تدقيق المستمسكات",
                "الاستعلام عن المخالفات",
                "التوجه إلى قسم فحص السيارة (الفحص الفني)",
                "إدخال البيانات في النظام الإلكتروني",
                "دفع الرسوم داخل المديرية",
                "طباعة السنوية الجديدة"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "السيارة الخصوصي: 62 ألف",
                "سيارة الأجرة: 77 ألف",
                "مركبات الحمل: 112 ألف"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "الدفع يكون عن طريق الماستر كارد",
                "يجب إحضار السيارة للفحص",
                "في حال انتهاء السنوية يتم دفع غرامة (15 ألف)",
                "اختلاف رقم الشاصي أو المحرك يسبب تأخير المعاملة"
            ]
        }

    ];
}
            else if (dir === "مديرية مرور ديالى" && service === "تسجيل مركبة لأول مرة") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة الأصلية + نسخة",
                "بطاقة السكن",
                "مستمسك شراء المركبة (عقد / فاتورة / كمرك)",
                "كتاب الإعفاء الكمركي (للمستورد)",
                "شهادة المنشأ",
                "مستمسكات المالك كاملة"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "تدقيق المستمسكات",
                "إدخال المركبة إلى ساحة الفحص",
                "فتح ملف للمركبة",
                "تقدير الرسوم حسب نوع المركبة",
                "دفع الرسوم",
                "تعيين رقم ولوحات",
                "إصدار السنوية",
                "التسليم النهائي"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "تقريباً 177 ألف دينار (للسيارة الخصوصي الصغيرة)"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "الدفع يكون عن طريق الماستر كارد",
                "نقص مستمسكات الكمرك يوقف المعاملة",
                "الرسوم تختلف حسب نوع وسنة المركبة",
                "بعض السيارات تحتاج فحص خاص"
            ]
        }

    ];
}
                else if (dir === "مديرية مرور ديالى" && service === "إصدار بدل تالف أو فاقد للسنوية") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة (بدل فاقد)",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة الأصلية + نسخة ملونة",
                "حضور المالك أو وكيل رسمي بوكالة نافذة",
                "صورة من السنوية القديمة إن وجدت",
                "كتاب تأييد فقدان أو محضر من مركز الشرطة",
                "بطاقة السكن"
            ]
        },

        {
            title: "📄 المستمسكات المطلوبة (بدل تالف)",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة الأصلية + نسخة",
                "السنوية التالفة الأصلية",
                "حضور المالك أو الوكيل الرسمي"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "تدقيق البيانات",
                "الاستعلام عن المخالفات",
                "دفع الرسوم الرسمية",
                "طباعة السنوية الجديدة",
                "الاستلام (غالباً بنفس اليوم)"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "من 30 ألف إلى 45 ألف (حسب الحالة)"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "الدفع عن طريق الماستر كارد فقط",
                "إذا توجد مخالفات يجب تسديدها أولاً",
                "الأفضل حضور المالك لتسريع الإنجاز",
                "قد يُطلب حضور المركبة أحياناً",
                "في حالة الفاقد قد يُطلب تصريح فقدان أو تعهد خطي",
                "في حالة التالف يتم تسليم السنوية القديمة"
            ]
        }

    ];
}
                    else if (dir === "مديرية مرور ديالى" && service === "بدل فاقد أو تالف لإجازة السوق") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة الأصلية + نسخة",
                "حضور صاحب الإجازة شخصياً",
                "نسخة من إجازة السوق أو صورة إن وجدت",
                "تأييد فقدان أو محضر من مركز شرطة (في حالة الفاقد)",
                "بطاقة السكن",
                "في حالة التلف: إحضار الإجازة التالفة"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "تدقيق البيانات",
                "الفحص أو التحقق (قد يشمل فحص نظر أو بصمة)",
                "إدخال البيانات في النظام",
                "دفع الرسوم",
                "طباعة الإجازة الجديدة",
                "الاستلام غالباً بنفس اليوم"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "من 30 ألف إلى 45 ألف (تقريباً)"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "الدفع عن طريق الماستر كارد فقط",
                "إذا كانت الإجازة منتهية يجب تجديدها أولاً",
                "يفضل حضور صاحب العلاقة شخصياً",
                "في حالة الفقدان قد يُطلب تصريح من الشرطة",
                "في حالة التلف يتم تسليم الإجازة القديمة"
            ]
        }

    ];
}
                        else if (dir === "ؤ" && service === "إصدار جواز سفر لأول مرة") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة (أصلية ونافذة)",
                "بطاقة السكن أو تأييد سكن",
                "صور شخصية حديثة عدد 2 أو 4 (خلفية بيضاء)",
                "حضور الشخص بنفسه",
                "إذا العمر أقل من 18 سنة: حضور ولي الأمر",
                "مستمسكات الأب أو الأم"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "حجز موعد إلكتروني عبر بوابة أور",
                "مراجعة دائرة الجوازات",
                "تدقيق المستمسكات",
                "ملء استمارة الجواز",
                "البصمة والصورة والتوقيع الإلكتروني",
                "دفع الرسوم داخل الدائرة",
                "استلام وصل المراجعة",
                "انتظار الطباعة",
                "استلام الجواز"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "من 30 ألف إلى 60 ألف دينار"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "حضور الشخص بنفسه إلزامي",
                "البطاقة الوطنية يجب أن تكون نافذة وغير تالفة",
                "الاسم بالإنكليزي يعتمد النظام الرسمي",
                "تصحيح الأخطاء قبل التقديم",
                "الأطفال يحتاجون ولي أمر",
                "الدفع يتم عن طريق بطاقة ماستر كارد"
            ]
        }

    ];
}
                            else if (dir === "دائرة الجوازات ديالى" && service === "تجديد الجواز") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "الجواز القديم (الأصلي)",
                "البطاقة الوطنية الموحدة",
                "بطاقة السكن أو تأييد سكن",
                "صور شخصية حديثة خلفية بيضاء",
                "حضور صاحب الجواز بنفسه"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "مراجعة مديرية الجوازات",
                "تقديم المستمسكات",
                "تدقيق المعلومات",
                "ملء استمارة التجديد",
                "إدخال المعلومات بالنظام",
                "البصمة والصورة",
                "دفع الرسوم الرسمية",
                "استلام وصل المراجعة",
                "استلام الجواز الجديد"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "من 30 ألف إلى 60 ألف دينار"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "حضور صاحب الجواز إلزامي",
                "يتم سحب أو إلغاء الجواز القديم عند التجديد",
                "إذا الجواز منتهي منذ مدة طويلة قد يطلب تدقيق إضافي",
                "إذا يوجد خطأ بالاسم يجب تصحيحه أولاً",
                "الدفع يتم عن طريق بطاقة ماستر كارد"
            ]
        }

    ];
}
                                else if (dir === "دائرة الجوازات ديالى" && service === "إصدار بدل فاقد"){
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "البطاقة الوطنية الموحدة",
                "بطاقة السكن أو تأييد سكن",
                "كتاب تأييد أو محضر فقدان من مركز الشرطة",
                "صور شخصية حديثة خلفية بيضاء",
                "حضور صاحب العلاقة بنفسه"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الإبلاغ عن الفقدان في مركز الشرطة",
                "الحصول على تأييد رسمي بمحضر الفقدان",
                "الحجز الإلكتروني عبر بوابة أور",
                "مراجعة مديرية الجوازات",
                "تقديم المستمسكات",
                "تدقيق المعلومات",
                "ملء استمارة بدل فاقد",
                "البصمة والصورة",
                "دفع الرسوم الرسمية",
                "استلام وصل المراجعة",
                "استلام الجواز الجديد"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "من 55 ألف إلى 110 ألف دينار"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "حضور صاحب العلاقة إلزامي",
                "قد تُفرض غرامة بسبب فقدان الجواز",
                "مدة الإنجاز قد تكون أطول من الإصدار العادي",
                "إذا الجواز مفقود خارج العراق تختلف الإجراءات",
                "الدفع يتم عن طريق بطاقة ماستر كارد"
            ]
        }

    ];
}
           else if (dir === "دائرة الجوازات ديالى" && service === "إصدار بدل تالف") {
    data = [

        {
            title: "📄 المستمسكات المطلوبة",
            color: "#2a5298",
            items: [
                "الجواز التالف (الأصلي)",
                "البطاقة الوطنية الموحدة",
                "بطاقة السكن أو تأييد سكن",
                "صور شخصية حديثة خلفية بيضاء",
                "حضور صاحب العلاقة بنفسه"
            ]
        },

        {
            title: "⚙️ خطوات المعاملة",
            color: "#00a86b",
            items: [
                "الحجز الإلكتروني عبر بوابة أور",
                "مراجعة مديرية الجوازات",
                "تقديم المستمسكات",
                "فحص الجواز التالف",
                "تدقيق المعلومات",
                "ملء استمارة بدل تالف",
                "البصمة والصورة",
                "دفع الرسوم الرسمية",
                "استلام وصل المراجعة",
                "استلام الجواز الجديد"
            ]
        },

        {
            title: "💰 الرسوم",
            color: "#ff9800",
            items: [
                "من 30 ألف إلى 60 ألف دينار"
            ]
        },

        {
            title: "📌 ملاحظات",
            color: "#e91e63",
            items: [
                "حضور صاحب العلاقة إلزامي",
                "يجب تسليم الجواز التالف عند التقديم",
                "إذا كان التلف شديد جداً قد يُعامل كفاقد",
                "لا يجوز استخدام الجواز التالف بعد فتح المعاملة",
                "الدفع يتم عن طريق بطاقة ماستر كارد"
            ]
        }

    ];
}                         
    else {
        // باقي الخدمات الافتراضية
        data = [
            { title: "📄 المستمسكات المطلوبة", color: "#2a5298", items: ["مستمسك 1", "مستمسك 2"] },
            { title: "⚙️ خطوات المعاملة", color: "#00a86b", items: ["خطوة 1", "خطوة 2"] },
            { title: "💰 الرسوم", color: "#ff9800", items: ["حسب الخدمة"] },
            { title: "📌 ملاحظات", color: "#e91e63", items: ["لا توجد ملاحظات حالياً"] }
        ];
    }

    // تنظيف الحاوية قبل الرسم
    stepsContainer.innerHTML = "";

    // رسم البيانات (حلقة واحدة فقط)
    data.forEach((section) => {
        let card = document.createElement("div");
        card.className = "section-card";

        let header = document.createElement("div");
        header.className = "section-title";
        header.innerText = section.title;
        header.style.color = section.color;
        card.appendChild(header);

        section.items.forEach((item) => {
            let box = document.createElement("div");
            box.className = "item-box";
            box.innerText = item;
            box.style.borderRight = "5px solid " + section.color;
            card.appendChild(box);
        });

        stepsContainer.appendChild(card);
    });
}
/* ===== البحث ===== */
function searchFunction() {
let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
let text = cards[i].innerText.toLowerCase();
cards[i].style.display = text.includes(input) ? "block" : "none";
}
}

function filterServices() {
let input = document.getElementById("serviceSearch").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
let text = cards[i].innerText.toLowerCase();
cards[i].style.display = text.includes(input) ? "block" : "none";
}
}

/* ===== تشغيل ===== */
window.onload = function () {

// إذا مسجل سابقاً لا يطلب تسجيل دخول  
if (localStorage.getItem("isLoggedIn") === "true" &&  
    window.location.pathname.includes("login.html")) {  
    window.location.href = "home.html";  
}  

// 🔥 هذا اللي أضفناه  
 let dir = localStorage.getItem("dirName"); 
let title = document.getElementById("title");  

if (dir && title) {  
    title.innerText = "خدمات " + dir;  
}  
if (window.location.pathname.includes("services.html")) {
    loadServices();
}

if (window.location.pathname.includes("details.html")) {
    loadDetails();
}
};

