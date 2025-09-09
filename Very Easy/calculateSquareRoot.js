/* دوال شائعة:
Math.sqrt(x) → الجذر التربيعي

Math.pow(x, y) → القوة (x أس y)

Math.abs(x) → القيمة المطلقة

Math.round(x) → التقريب لأقرب عدد صحيح

Math.floor(x) → التقريب لأسفل

Math.ceil(x) → التقريب لأعلى

Math.trunc(x) → حذف الجزء العشري

Math.max(a, b, ...) و Math.min(a, b, ...) → أكبر وأصغر قيمة

Math.random() → رقم عشوائي بين 0 و 1

📐 دوال مثلثية:
Math.sin(x)، Math.cos(x)، Math.tan(x) → الزوايا بالراديان

للتحويل من درجات إلى راديان: x * Math.PI / 180

🧮 ثوابت رياضية:
Math.PI → π (3.14159)

Math.E → ثابت أولر (2.718)

Math.SQRT2 → الجذر التربيعي لـ 2

Math.LN2, Math.LN10 → اللوغاريتم الطبيعي لـ 2 و 10 */

/* 
Instructions

Return the square root of the given . num */

const calculateSquareRoot = (num) => {
    return Math.sqrt(num);
}
console.log(calculateSquareRoot(16)) // 4
console.log(calculateSquareRoot(25)) // 5   