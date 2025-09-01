// عدد المثلثات في الحلزون
let n = 17; // يمكنك تغييره مثلاً 10 أو 20

// الضلع الأول = 1 (من الملف واضح أن الأضلاع الخارجية طولها 1 دائماً)
let side = 1;

// لتجميع المساحات
let totalArea = 0;

// المتغير لحفظ آخر وتر
let lastHypotenuse = 0;

for (let i = 1; i <= n; i++) {
  // الضلع القائم الأول ثابت = 1
  let a = 1;
  let b = side;

  // مساحة المثلث الحالي
  let area = (a * b) / 2;
  totalArea += area;

  // حساب الوتر (سيكون ضلع في المثلث التالي)
  let hypotenuse = Math.sqrt(a * a + b * b);

  console.log(` مثلث ${i}: قاعدة=${b}, ارتفاع=${a}, المساحة=${area.toFixed(2)}, الوتر=${hypotenuse.toFixed(2)}`);

  // تحديث للمثلث التالي
  side = hypotenuse;
  lastHypotenuse = hypotenuse;
}

// مجموع المساحات
console.log("✅ مجموع المساحات =", totalArea.toFixed(2));

// نصف القطر (نصف الوتر الأخير)
let r = lastHypotenuse / 2;
console.log(" نصف القطر =", r.toFixed(2));

// مساحة الدائرة
let circleArea = Math.PI * r * r;
console.log(" مساحة الدائرة =", circleArea.toFixed(2));
