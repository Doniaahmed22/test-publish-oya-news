// استبدال require بـ import الديناميكي
let fetch;

exports.handler = async function (event, context) {
  // تحميل المكتبة بشكل ديناميكي داخل الوظيفة
  if (!fetch) {
    fetch = (await import('node-fetch')).default;
  }

  const { section, type, country, category, q } = event.queryStringParameters;

  const apiKey = "77a799269451407394253d248e88af99"; // استخدم مفتاح API الخاص بك
  let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;

  // إضافة المعلمات بناءً على وجودها في الاستعلام
  if (section && type) {
    url += `&${section}=${type}`;
  }
  if (country) {
    url += `&country=${country}`;
  }
  if (category) {
    url += `&category=${category}`;
  }
  if (q) {
    url += `&q=${q}`;
  }

  try {
    // إرسال الطلب إلى NewsAPI
    const response = await fetch(url);
    
    // التأكد من أن الاستجابة سليمة
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // تحويل الاستجابة إلى JSON
    const data = await response.json();

    // إرجاع البيانات إذا كانت الاستجابة سليمة
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    // في حالة حدوث خطأ، إرجاع رسالة الخطأ
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching news data", details: error.message }),
    };
  }
};

