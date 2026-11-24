// 'use client';

// import React, { useEffect, useState } from 'react';

// // اگر نام مخزن گیت‌هاب را تغییر دادید، این مقدار را هم هماهنگ کنید
// const BASE_PATH = '/darino';

// // نام پکیج اندروید خود را جایگزین کنید
// const ANDROID_PACKAGE_NAME = 'com.example.darino';

// export default function HomePage() {
//   const [os, setOs] = useState<'ios' | 'android' | 'desktop'>('desktop');
//   const [showIosGuide, setShowIosGuide] = useState(false);

//   useEffect(() => {
//     const userAgent = navigator.userAgent || navigator.vendor;
//     if (/iPad|iPhone|iPod/.test(userAgent)) {
//       setOs('ios');
//     } else if (/android/i.test(userAgent)) {
//       setOs('android');
//     }
//   }, []);

//   const bazaarUrl = `https://cafebazaar.ir/app/${ANDROID_PACKAGE_NAME}`;
//   const myketUrl = `https://myket.ir/app/${ANDROID_PACKAGE_NAME}`;
//   const iosPwaUrl = `${BASE_PATH}/app/index.html`;

//   const features = [
//     {
//       title: 'تداخل‌سنج هوشمند دارویی',
//       desc: 'بررسی ایمنی مصرف همزمان دو دارو، مکانیسم علمی اثر و فاصله زمانی مجاز مصرف',
//       icon: '🛡️',
//     },
//     {
//       title: 'دانشنامه ۱۲۰۰ دارویی',
//       desc: 'اطلاعات کامل کاربرد، نحوه مصرف و عوارض داروها به زبان ساده و روان',
//       icon: '💊',
//     },
//     {
//       title: '۱۲ گروه تخصصی درمانی',
//       desc: 'دسته‌بندی منظم از قلب و گوارش تا مکمل‌های ورزشی، غدد و تنفسی',
//       icon: '🗂️',
//     },
//     {
//       title: 'یادداشت شخصی روی هر دارو',
//       desc: 'ثبت دستور پزشک و ساعت مصرف اختصاصی برای هر دارو به صورت کاملاً آفلاین',
//       icon: '📝',
//     },
//     {
//       title: 'چالش و کوئیز دارویی',
//       desc: 'آزمون‌های زمان‌دار با انتخاب موضوع دلخواه و مرور پاسخ‌های اشتباه',
//       icon: '🎮',
//     },
//     {
//       title: '۱۰۰ نکته طلایی پزشکی',
//       desc: 'مجموعه دانستنی‌های حیاتی روزمره با موتور جستجوی سریع و هوشمند',
//       icon: '💡',
//     },
//   ];

//   return (
//     <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800 font-sans">
//       {/* هدر و بخش معرفی اصلی (Hero) */}
//       <header className="bg-gradient-to-bl from-teal-600 via-emerald-600 to-teal-800 text-white">
//         <div className="max-w-5xl mx-auto px-6 py-16 text-center">
//           <div className="w-24 h-24 mx-auto mb-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
//             <img
//               src={`${BASE_PATH}/icon.png`}
//               alt="لوگوی دارینو"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wide bg-white/15 backdrop-blur-sm rounded-full">
//             نسخه ۲.۰ منتشر شد • کاملاً رایگان و آفلاین
//           </span>

//           <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
//             دارینو؛ داروخانه هوشمند در جیب شما
//           </h1>
//           <p className="text-teal-50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
//             مرجع جامع ۱۲۰۰ دارو به زبان ساده، مجهز به تداخل‌سنج هوشمند دارویی، ثبت یادداشت شخصی و چالش‌های آموزشی برای اندروید و آیفون.
//           </p>

//           {/* باکس‌های دانلود هوشمند بر اساس سیستم‌عامل */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-right">
//             {/* کارت نسخه آیفون (iOS PWA) */}
//             <div
//               className={`p-6 rounded-3xl transition-all ${
//                 os === 'ios'
//                   ? 'bg-white text-slate-900 ring-4 ring-amber-400 shadow-2xl scale-[1.02]'
//                   : 'bg-white/95 text-slate-900 shadow-xl'
//               }`}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <span className="text-lg font-black flex items-center gap-2">
//                   <span>🍏</span> نسخه آیفون و آیپد (iOS)
//                 </span>
//                 {os === 'ios' && (
//                   <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full">
//                     پیشنهاد برای گوشی شما
//                   </span>
//                 )}
//               </div>
//               <p className="text-xs text-slate-500 mb-5 leading-5">
//                 بدون نیاز به مارکت‌های ایرانی و بدون ابطال گواهی؛ مستقیم در سافاری باز کنید و به صفحه اصلی (Add to Home Screen) بیفزایید.
//               </p>
//               <div className="flex flex-col gap-2.5">
//                 <a
//                   href={iosPwaUrl}
//                   className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-center text-sm transition shadow-md"
//                 >
//                   اجرا و نصب نسخه وب اپل (PWA)
//                 </a>
//                 <button
//                   type="button"
//                   onClick={() => setShowIosGuide(!showIosGuide)}
//                   className="w-full py-2 px-3 text-xs font-bold text-teal-700 hover:bg-teal-50 rounded-xl transition"
//                 >
//                   {showIosGuide ? 'بستن راهنمای نصب ▲' : 'آموزش نصب روی صفحه آیفون (۳ مرحله) ▼'}
//                 </button>
//               </div>

//               {showIosGuide && (
//                 <div className="mt-4 p-3.5 bg-slate-100 rounded-2xl text-xs text-slate-700 space-y-2 leading-5">
//                   <p>۱. دکمه مشکی بالا را بزنید تا برنامه در مرورگر <strong>Safari</strong> باز شود.</p>
//                   <p>۲. دکمه <strong>Share</strong> (مربع و فلش رو به بالا در پایین صفحه) را لمس کنید.</p>
//                   <p>۳. گزینه <strong>Add to Home Screen</strong> و سپس <strong>Add</strong> را بزنید.</p>
//                 </div>
//               )}
//             </div>

//             {/* کارت نسخه اندروید (بازار و مایکت) */}
//             <div
//               className={`p-6 rounded-3xl transition-all ${
//                 os === 'android'
//                   ? 'bg-white text-slate-900 ring-4 ring-amber-400 shadow-2xl scale-[1.02]'
//                   : 'bg-white/95 text-slate-900 shadow-xl'
//               }`}
//             >
//               <div className="flex items-center justify-between mb-3">
//                 <span className="text-lg font-black flex items-center gap-2">
//                   <span>🤖</span> نسخه اندروید (Android)
//                 </span>
//                 {os === 'android' && (
//                   <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full">
//                     پیشنهاد برای گوشی شما
//                   </span>
//                 )}
//               </div>
//               <p className="text-xs text-slate-500 mb-5 leading-5">
//                 دریافت نسخه رسمی و بهینه‌شده اندروید همراه با آپدیت‌های خودکار از طریق کافه‌بازار یا مایکت.
//               </p>
//               <div className="flex flex-col gap-2.5">
//                 <a
//                   href={bazaarUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-center text-sm transition shadow-md"
//                 >
//                   دریافت از کافه‌بازار
//                 </a>
//                 <a
//                   href={myketUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl text-center text-sm transition shadow-md"
//                 >
//                   دریافت از مایکت
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* بخش امکانات کلیدی دارینو */}
//       <main className="max-w-5xl mx-auto px-6 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
//             چرا دارینو بهترین دستیار دارویی شماست؟
//           </h2>
//           <p className="text-slate-500 text-sm">
//             طراحی‌شده برای دسترسی سریع، آفلاین و بدون پیچیدگی‌های پزشکی
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition"
//             >
//               <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-base font-extrabold text-slate-900 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-xs text-slate-600 leading-6">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* فوتر */}
//       <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
//         <p>تمامی حقوق برای اپلیکیشن دارینو محفوظ است • نسخه ۲.۰.۰</p>
//       </footer>
//     </div>
//   );
// }




'use client';

import React, { useEffect, useState } from 'react';

const BASE_PATH = '/darino';
// نام پکیج اندروید خود را در کافه‌بازار و مایکت جایگزین کنید
const ANDROID_PACKAGE_NAME = 'com.example.darino';

interface ShowcaseItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  accent: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'main',
    badge: 'رابط کاربری مدرن',
    title: 'نمای اصلی و ۱۲ گروه تخصصی درمانی',
    subtitle: 'طراحی چشم‌نواز در دو تم شب و روز با دسترسی فوری',
    description:
      'دسترسی سریع به جستجوی هوشمند در میان تمام داروها و علائم بیماری، تداخل‌سنج، چالش دارویی و ۱۲ دسته‌بندی منظم پزشکی در یک صفحه یکپارچه.',
    highlights: [
      'پشتیبانی کامل از حالت شب (Dark Mode) و روز',
      'جستجوی آنی بر اساس نام دارو، کاربرد یا علائم',
      'دسته‌بندی ۱۲ گروه دارویی از قلب و اعصاب تا مکمل‌های ورزشی',
    ],
    image: `${BASE_PATH}/screenshots/darino-main_image.jpg`,
    accent: 'from-violet-500 to-amber-400',
  },
  {
    id: 'interaction',
    badge: 'ایمنی مصرف',
    title: 'تداخل‌سنج هوشمند دارویی و غذایی',
    subtitle: 'پیشگیری از خطرات مصرف همزمان داروها و خوراکی‌ها',
    description:
      'کافیست دو دارو را انتخاب کنید تا دارینو شدت تداخل، مکانیسم علمی اثر در بدن، فاصله زمانی مجاز مصرف و علائم هشدار را نمایش دهد.',
    highlights: [
      'بررسی تداخل بین ۱۲۰۰ دارو، مکمل و ویتامین',
      'دانشنامه تداخلات حیاتی روزمره (چای، لبنیات، گریپ‌فروت و...)',
      'نمایش مکانیسم علمی و علائم هشدار نیازمند توجه',
    ],
    image: `${BASE_PATH}/screenshots/darino_interaction_image.jpg`,
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'details',
    badge: 'زبان ساده و روان',
    title: 'توضیحات کاربردی بدون پیچیدگی پزشکی',
    subtitle: 'پاسخ دقیق به سوالات شما درباره هر دارو',
    description:
      'اطلاعات هر دارو در بخش‌های شفاف «به زبون ساده چیه؟»، «چطوری مصرفش کنیم؟»، «عوارضش چیه؟» و «یادداشت شخصی من» دسته‌بندی شده است.',
    highlights: [
      'توضیحات قابل فهم برای عموم مردم بدون اصطلاحات سنگین',
      'نکات طلایی زمان و نحوه صحیح مصرف (صبح یا شب، با غذا یا ناشتا)',
      'امکان نشانه گذاری و ذخیره داروهای پراستفاده',
    ],
    image: `${BASE_PATH}/screenshots/darino_image.jpg`,
    accent: 'from-purple-500 to-pink-500',
  },
  {
    id: 'quiz',
    badge: 'یادگیری تعاملی',
    title: 'چالش و کوئیز داروشناسی',
    subtitle: 'دانش دارویی خود را در رقابت‌های ۱۵ ثانیه‌ای محک بزنید',
    description:
      'با انتخاب دسته‌بندی دلخواه، در آزمون‌های ۱۰ سوالی زمان‌دار شرکت کنید، رکورد امتیاز خود را بشکنید و در پایان پاسخ‌های اشتباه را مرور نمایید.',
    highlights: [
      'انتخاب موضوع آزمون (همه داروها، اعصاب، گوارش و...)',
      'تایمر ۱۵ ثانیه‌ای برای سنجش سرعت عمل و دقت',
      'کارنامه تحلیلی همراه با مرور پاسخ‌های نادرست در پایان',
    ],
    image: `${BASE_PATH}/screenshots/darino_quiz_image.jpg`,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'faq',
    badge: 'دانشنامه جامع',
    title: 'جستجوی هوشمند و ۱۰۰ نکته طلایی پزشکی',
    subtitle: 'پاسخ به سوالات رایج دارویی و تاریخچه جستجوها',
    description:
      'موتور جستجو با پیشنهادات سریع و ذخیره آخرین جستجوها، در کنار بخش اطلاعات عمومی شامل ۱۰۰ نکته کاربردی درباره اشکال دارویی.',
    highlights: [
      'پیشنهادات سریع و تاریخچه جستجو با قابلیت مدیریت آسان',
      'فهرست داروهای ذخیره شده برای دسترسی آفلاین سریع',
      '۱۰۰ نکته طلایی پزشکی (تفاوت شربت و الگزیر، قرص روکش‌دار و...)',
    ],
    image: `${BASE_PATH}/screenshots/darino_faq_image.jpg`,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    id: 'dark',
    badge: 'حالت شب و یادداشت',
    title: 'ثبت یادداشت شخصی روی هر دارو',
    subtitle: 'دستیار اختصاصی برای ثبت دستور پزشک و ساعت مصرف',
    description:
      'برای هر دارو یا مکمل ورزشی یادداشت اختصاصی بنویسید تا دستور مصرف پزشک خود را هرگز فراموش نکنید؛ کاملاً آفلاین و امن روی گوشی شما.',
    highlights: [
      'کادر اختصاصی «یادداشت شخصی من» در صفحه هر دارو',
      'طراحی تاریک استاندارد برای مطالعه راحت در شب',
      'پوشش مکمل‌های ورزشی، گیاهی و داروهای تخصصی',
    ],
    image: `${BASE_PATH}/screenshots/darino_dark_image.jpg`,
    accent: 'from-fuchsia-500 to-amber-500',
  },
];

const CATEGORIES = [
  { name: 'قلب و خون', icon: '❤️' },
  { name: 'اعصاب و روان', icon: '🧠' },
  { name: 'گوارش و معده', icon: '🩺' },
  { name: 'مسکن و درد', icon: '💊' },
  { name: 'مکمل‌های ورزشی', icon: '🏋️' },
  { name: 'گیاهی و سنتی', icon: '🌿' },
  { name: 'ویتامین‌ها', icon: '✨' },
  { name: 'عفونت‌ها', icon: '🛡️' },
  { name: 'تنفسی و حساسیت', icon: '🤧' },
  { name: 'غدد و دیابت', icon: '🩸' },
  { name: 'کلیه و مجاری ادراری', icon: '💧' },
  { name: 'پوست و مو', icon: '🧴' },
];

export default function HomePage() {
  const [os, setOs] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showIosModal, setShowIosModal] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setOs('ios');
    } else if (/android/i.test(userAgent)) {
      setOs('android');
    }
  }, []);

  const bazaarUrl = `https://cafebazaar.ir/app/${ANDROID_PACKAGE_NAME}`;
  const myketUrl = `https://myket.ir/app/${ANDROID_PACKAGE_NAME}`;
  const iosPwaUrl = `${BASE_PATH}/app/index.html`;

  const currentShowcase = SHOWCASE_ITEMS[activeTab];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#09090f] text-slate-100 selection:bg-violet-500 selection:text-white overflow-x-hidden"
    >
      {/* پس‌زمینه نورانی (Ambient Aurora Glows) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-amber-500/15 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      {/* نوار ناوبری شیشه‌ای (Floating Glass Navbar) */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#09090f]/75 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl overflow-hidden bg-white p-0.5 shadow-lg shadow-violet-500/20 group-hover:scale-105 transition">
              <img
                src={`${BASE_PATH}/icon.png`}
                alt="دارینو"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div>
              <span className="font-black text-lg tracking-tight bg-gradient-to-l from-white via-violet-200 to-amber-200 bg-clip-text text-transparent">
                دارینو
              </span>
              <span className="hidden sm:inline-block mr-2 text-[11px] text-slate-400">
                دستیار هوشمند دارویی
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a href="#showcase" className="hover:text-white transition">
              امکانات و محیط برنامه
            </a>
            <a href="#categories" className="hover:text-white transition">
              گروه‌های دارویی
            </a>
            <a href="#gallery" className="hover:text-white transition">
              تصاویر اپلیکیشن
            </a>
            <a href="#download" className="hover:text-white transition">
              دانلود و نصب
            </a>
          </div>

          <a
            href="#download"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-l from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/30 transition active:scale-95"
          >
            دریافت رایگان
          </a>
        </div>
      </nav>

      {/* بخش اصلی معرفی (Hero Section) */}
      <header id="top" className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* ستون متن و دکمه‌های دانلود */}
            <div className="lg:col-span-7 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amber-300 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>نسخه ۲.۰ منتشر شد • کاملاً رایگان و بدون  تبلیغات آزاردهنده </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight mb-6">
                داروخانه هوشمند در جیب شما؛{' '}
                <span className="bg-gradient-to-l from-violet-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
                  ساده، دقیق و همیشه همراه
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-8 max-w-2xl mx-auto lg:mx-0 mb-8">
                مرجع جامع بیش از{' '}
                <strong className="text-white font-bold">۱۲۰۰ دارو و مکمل</strong> به زبان ساده، مجهز به{' '}
                <strong className="text-emerald-400 font-bold">تداخل‌سنج هوشمند دارویی</strong>، چالش‌های آموزشی و ثبت یادداشت شخصی برای کاربران{' '}
                <strong className="text-white">اندروید و آیفون</strong>.
              </p>

              {/* کارت‌های هوشمند دانلود بر اساس سیستم‌عامل کاربر */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                {/* باکس آیفون (iOS PWA) */}
                <div
                  className={`relative p-5 rounded-3xl border transition-all duration-300 text-right ${
                    os === 'ios'
                      ? 'bg-gradient-to-b from-violet-950/90 to-slate-900/95 border-amber-400/70 shadow-2xl shadow-amber-500/15 ring-2 ring-amber-400/40'
                      : 'bg-white/[0.04] border-white/10 hover:border-white/20 backdrop-blur-xl'
                  }`}
                >
                  {os === 'ios' && (
                    <span className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 shadow-md">
                      پیشنهاد برای آیفون شما
                    </span>
                  )}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.32c.67-.81 1.12-1.94 1-3.07-.96.04-2.13.64-2.82 1.45-.61.7-.15 1.85-1.02 2.95 1.07.08 2.17-.52 2.84-1.33" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-extrabold text-sm text-white">نسخه آیفون و آیپد (iOS)</h2>
                      <p className="text-[11px] text-slate-400">وب‌اپلیکیشن اختصاصی بدون محدودیت</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300/90 leading-5 mb-4">
                    بدون نیاز به مارکت‌های ایرانی؛ مستقیم در سافاری باز کنید و به صفحه اصلی گوشی اضافه کنید.
                  </p>

                  <div className="space-y-2">
                    <a
                      href={iosPwaUrl}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl font-bold text-xs bg-white text-slate-950 hover:bg-amber-300 transition shadow-lg"
                    >
                      <span>اجرا و نصب نسخه وب اپل</span>
                      <span>←</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setShowIosModal(true)}
                      className="w-full py-2 px-3 rounded-xl text-[11px] font-bold text-amber-300 hover:bg-white/5 transition"
                    >
                      راهنمای نصب در آیفون (۳ قدم)
                    </button>
                  </div>
                </div>

                {/* باکس اندروید (بازار و مایکت) */}
                <div
                  className={`relative p-5 rounded-3xl border transition-all duration-300 text-right ${
                    os === 'android'
                      ? 'bg-gradient-to-b from-emerald-950/90 to-slate-900/95 border-emerald-400/70 shadow-2xl shadow-emerald-500/15 ring-2 ring-emerald-400/40'
                      : 'bg-white/[0.04] border-white/10 hover:border-white/20 backdrop-blur-xl'
                  }`}
                >
                  {os === 'android' && (
                    <span className="absolute -top-3 left-4 px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-400 text-slate-950 shadow-md">
                      پیشنهاد برای اندروید شما
                    </span>
                  )}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C4.8 10.85 3.5 12.62 3.5 14.5h17c0-1.88-1.3-3.65-2.9-5.02zM8.5 12.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM3.5 15.5h17v3c0 1.1-.9 2-2 2h-13c-1.1 0-2-.9-2-2v-3z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-extrabold text-sm text-white">نسخه اندروید (Android)</h2>
                      <p className="text-[11px] text-slate-400">نصب رسمی از مارکت‌های معتبر</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300/90 leading-5 mb-4">
                    دریافت نسخه بهینه‌شده اندروید همراه با دریافت خودکار آپدیت‌های جدید از بازار و مایکت.
                  </p>

                  <div className="space-y-2">
                    <a
                      href={bazaarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/20"
                    >
                      <span>دریافت از کافه‌بازار</span>
                    </a>
                    <a
                      href={myketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl font-bold text-xs bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/30 transition"
                    >
                      <span>دریافت از مایکت</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ستون تصویر شاخص (Hero Mockup) */}
            <div className="lg:col-span-5">
              <div className="relative group mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 opacity-50 blur-xl group-hover:opacity-75 transition duration-500" />
                <div
                  onClick={() => setLightboxIndex(0)}
                  className="relative rounded-[32px] overflow-hidden border border-white/20 bg-slate-900 shadow-2xl cursor-zoom-in"
                >
                  <img
                    src={`${BASE_PATH}/screenshots/darino-main_image.jpg`}
                    alt="نمای اصلی اپلیکیشن دارینو در حالت شب و روز"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] text-white flex items-center gap-1.5">
                    <span>🔍</span>
                    <span>برای بزرگ‌نمایی کلیک کنید</span>
                  </div>
                </div>

                {/* بج شناور پایین تصویر */}
                <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-5 px-4 py-3 rounded-2xl bg-[#13131f]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-lg">
                    🛡️
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">تداخل‌سنج هوشمند</div>
                    <div className="text-[11px] text-slate-400">بررسی ایمنی دارو و غذا</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* نوار آمار کلیدی */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '۱۲۰۰+', label: 'دارو و مکمل تخصصی', color: 'text-violet-400' },
              { value: '۱۲ گروه', label: 'دسته‌بندی منظم پزشکی', color: 'text-amber-400' },
              { value: '۱۰۰ نکته', label: 'دانستنی طلایی و کاربردی', color: 'text-emerald-400' },
              { value: '۱۰۰٪', label: 'آفلاین و بدون نیاز به نت', color: 'text-sky-400' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center hover:bg-white/[0.06] transition"
              >
                <div className={`text-2xl sm:text-3xl font-black mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* بخش تب‌های تعاملی امکانات (Interactive Showcase) */}
      <section id="showcase" className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 tracking-wide">
              امکانات منحصربه‌فرد دارینو
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-3">
              هر آنچه برای شناخت داروها نیاز دارید، یکجا
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-6">
              روی هر بخش کلیک کنید تا محیط واقعی برنامه و قابلیت‌های آن را مشاهده نمایید
            </p>
          </div>

          {/* دکمه‌های انتخاب تب */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {SHOWCASE_ITEMS.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-l from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {item.title.split(' و ')[0]}
                </button>
              );
            })}
          </div>

          {/* کارت نمایش تب فعال */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold text-slate-950 bg-gradient-to-l ${currentShowcase.accent} mb-4`}
                >
                  {currentShowcase.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {currentShowcase.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-violet-300 mb-4">
                  {currentShowcase.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-7 mb-6">
                  {currentShowcase.description}
                </p>

                <ul className="space-y-3">
                  {currentShowcase.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2">
                <div
                  onClick={() => setLightboxIndex(activeTab)}
                  className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl cursor-zoom-in group"
                >
                  <img
                    src={currentShowcase.image}
                    alt={currentShowcase.title}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-500"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white">
                    🔍 بزرگ‌نمایی تصویر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش ۱۲ دسته‌بندی دارویی */}
      <section id="categories" className="relative z-10 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-3xl font-black text-white mb-2">
              پوشش ۱۲ گروه تخصصی دارویی و مکمل‌ها
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              دسته‌بندی علمی و سریع برای پیدا کردن دارو در کمتر از چند ثانیه
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.03] hover:bg-gradient-to-br hover:from-violet-600/20 hover:to-amber-500/10 border border-white/10 hover:border-violet-400/40 transition text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div className="text-xs font-bold text-slate-200">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* گالری کامل تمام تصاویر اپلیکیشن (Bento Gallery) */}
      <section id="gallery" className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-violet-400">گالری تصاویر</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2">
              نگاهی نزدیک به صفحات مختلف دارینو
            </h2>
            <p className="text-xs text-slate-400">
              برای مشاهده جزئیات با کیفیت اصلی روی هر تصویر کلیک کنید
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition cursor-zoom-in flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-white mb-1.5 group-hover:text-amber-300 transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-5">{item.subtitle}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-violet-300 font-bold">
                    <span>مشاهده تمام‌صفحه</span>
                    <span>↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* باکس نهایی دانلود و نصب (Final CTA) */}
      <section id="download" className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-[36px] p-8 sm:p-12 overflow-hidden border border-white/15 bg-gradient-to-br from-violet-950/90 via-[#12121e] to-amber-950/40 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
                همین حالا دارینو را روی گوشی خود نصب کنید
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-7">
                چه گوشی آیفون داشته باشید و چه اندروید، دارینو به صورت رایگان و بدون  تبلیغات آزاردهنده، در اختیار شماست.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ستون آیفون */}
              <div className="p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-black text-base text-white">🍏 نصب برای آیفون (iOS)</h3>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300">
                      نسخه PWA
                    </span>
                  </div>
                  <ol className="text-xs text-slate-300 space-y-2 leading-6 mb-6 list-decimal list-inside">
                    <li>روی دکمه زیر بزنید تا برنامه در مرورگر <strong>Safari</strong> باز شود.</li>
                    <li>دکمه <strong>Share</strong> (پایین صفحه) را لمس کنید.</li>
                    <li>گزینه <strong>Add to Home Screen</strong> را انتخاب نمایید.</li>
                  </ol>
                </div>
                <a
                  href={iosPwaUrl}
                  className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-amber-300 text-slate-950 font-black text-xs text-center transition shadow-xl"
                >
                  باز کردن نسخه وب اپل (iOS)
                </a>
              </div>

              {/* ستون اندروید */}
              <div className="p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-black text-base text-white">🤖 دانلود برای اندروید</h3>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300">
                      نسخه ۲.۰.۰
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-6 mb-6">
                    نسخه اندروید دارینو با حجم بهینه و سرعت بالا در مارکت‌های رسمی کافه‌بازار و مایکت منتشر شده است.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={bazaarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs text-center transition shadow-lg"
                  >
                    کافه‌بازار
                  </a>
                  <a
                    href={myketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs text-center transition shadow-lg"
                  >
                    مایکت
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center px-4">
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-6 mb-2">
          ⚠️ مطالب ارائه‌شده در اپلیکیشن دارینو صرفاً جنبه افزایش آگاهی و آموزش دارد و جایگزین تشخیص یا تجویز پزشک و داروساز نیست.
        </p>
        <p className="text-[11px] text-slate-500">
          تمامی حقوق برای اپلیکیشن دارینو محفوظ است • نسخه ۲.۰.۰
        </p>
      </footer>

      {/* مودال راهنمای نصب آیفون */}
      {showIosModal && (
        <div
          onClick={() => setShowIosModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-3xl bg-[#141422] border border-white/15 p-6 shadow-2xl text-right"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-base text-white">
                نصب دارینو روی صفحه اصلی آیفون
              </h3>
              <button
                type="button"
                onClick={() => setShowIosModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-6 mb-6">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">مرحله اول:</strong>
                حتماً لینک برنامه را با مرورگر اصلی آیفون یعنی <strong>Safari</strong> باز کنید.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">مرحله دوم:</strong>
                در نوار پایین سافاری، دکمه <strong>Share</strong> (آیکون مربع و فلش رو به بالا) را لمس کنید.
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">مرحله سوم:</strong>
                صفحه را کمی به پایین بکشید، گزینه <strong>Add to Home Screen</strong> و سپس <strong>Add</strong> را بزنید.
              </div>
            </div>

            <a
              href={iosPwaUrl}
              className="block w-full py-3.5 rounded-2xl bg-gradient-to-l from-violet-600 to-indigo-600 text-white font-bold text-xs text-center shadow-lg"
            >
              ورود به نسخه وب اپل دارینو
            </a>
          </div>
        </div>
      )}

      {/* مودال بزرگ‌نمایی تصاویر (Lightbox) */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="self-end mb-3 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold"
            >
              بستن ✕
            </button>

            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
              <img
                src={SHOWCASE_ITEMS[lightboxIndex].image}
                alt={SHOWCASE_ITEMS[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between w-full max-w-md px-2">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length
                  )
                }
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white"
              >
                → قبلی
              </button>
              <span className="text-xs font-bold text-slate-300">
                {SHOWCASE_ITEMS[lightboxIndex].title}
              </span>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % SHOWCASE_ITEMS.length)
                }
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white"
              >
                بعدی ←
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}