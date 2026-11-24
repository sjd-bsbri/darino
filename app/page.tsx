'use client';

import React, { useEffect, useState } from 'react';

// اگر نام مخزن گیت‌هاب را تغییر دادید، این مقدار را هم هماهنگ کنید
const BASE_PATH = '/darino';

// نام پکیج اندروید خود را جایگزین کنید
const ANDROID_PACKAGE_NAME = 'com.example.darino';

export default function HomePage() {
  const [os, setOs] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [showIosGuide, setShowIosGuide] = useState(false);

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

  const features = [
    {
      title: 'تداخل‌سنج هوشمند دارویی',
      desc: 'بررسی ایمنی مصرف همزمان دو دارو، مکانیسم علمی اثر و فاصله زمانی مجاز مصرف',
      icon: '🛡️',
    },
    {
      title: 'دانشنامه ۱۲۰۰ دارویی',
      desc: 'اطلاعات کامل کاربرد، نحوه مصرف و عوارض داروها به زبان ساده و روان',
      icon: '💊',
    },
    {
      title: '۱۲ گروه تخصصی درمانی',
      desc: 'دسته‌بندی منظم از قلب و گوارش تا مکمل‌های ورزشی، غدد و تنفسی',
      icon: '🗂️',
    },
    {
      title: 'یادداشت شخصی روی هر دارو',
      desc: 'ثبت دستور پزشک و ساعت مصرف اختصاصی برای هر دارو به صورت کاملاً آفلاین',
      icon: '📝',
    },
    {
      title: 'چالش و کوئیز دارویی',
      desc: 'آزمون‌های زمان‌دار با انتخاب موضوع دلخواه و مرور پاسخ‌های اشتباه',
      icon: '🎮',
    },
    {
      title: '۱۰۰ نکته طلایی پزشکی',
      desc: 'مجموعه دانستنی‌های حیاتی روزمره با موتور جستجوی سریع و هوشمند',
      icon: '💡',
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* هدر و بخش معرفی اصلی (Hero) */}
      <header className="bg-gradient-to-bl from-teal-600 via-emerald-600 to-teal-800 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
            <img
              src={`${BASE_PATH}/icon.png`}
              alt="لوگوی دارینو"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wide bg-white/15 backdrop-blur-sm rounded-full">
            نسخه ۲.۰ منتشر شد • کاملاً رایگان و آفلاین
          </span>

          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            دارینو؛ داروخانه هوشمند در جیب شما
          </h1>
          <p className="text-teal-50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            مرجع جامع ۱۲۰۰ دارو به زبان ساده، مجهز به تداخل‌سنج هوشمند دارویی، ثبت یادداشت شخصی و چالش‌های آموزشی برای اندروید و آیفون.
          </p>

          {/* باکس‌های دانلود هوشمند بر اساس سیستم‌عامل */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-right">
            {/* کارت نسخه آیفون (iOS PWA) */}
            <div
              className={`p-6 rounded-3xl transition-all ${
                os === 'ios'
                  ? 'bg-white text-slate-900 ring-4 ring-amber-400 shadow-2xl scale-[1.02]'
                  : 'bg-white/95 text-slate-900 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-black flex items-center gap-2">
                  <span>🍏</span> نسخه آیفون و آیپد (iOS)
                </span>
                {os === 'ios' && (
                  <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full">
                    پیشنهاد برای گوشی شما
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-5 leading-5">
                بدون نیاز به مارکت‌های ایرانی و بدون ابطال گواهی؛ مستقیم در سافاری باز کنید و به صفحه اصلی (Add to Home Screen) بیفزایید.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={iosPwaUrl}
                  className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-center text-sm transition shadow-md"
                >
                  اجرا و نصب نسخه وب اپل (PWA)
                </a>
                <button
                  type="button"
                  onClick={() => setShowIosGuide(!showIosGuide)}
                  className="w-full py-2 px-3 text-xs font-bold text-teal-700 hover:bg-teal-50 rounded-xl transition"
                >
                  {showIosGuide ? 'بستن راهنمای نصب ▲' : 'آموزش نصب روی صفحه آیفون (۳ مرحله) ▼'}
                </button>
              </div>

              {showIosGuide && (
                <div className="mt-4 p-3.5 bg-slate-100 rounded-2xl text-xs text-slate-700 space-y-2 leading-5">
                  <p>۱. دکمه مشکی بالا را بزنید تا برنامه در مرورگر <strong>Safari</strong> باز شود.</p>
                  <p>۲. دکمه <strong>Share</strong> (مربع و فلش رو به بالا در پایین صفحه) را لمس کنید.</p>
                  <p>۳. گزینه <strong>Add to Home Screen</strong> و سپس <strong>Add</strong> را بزنید.</p>
                </div>
              )}
            </div>

            {/* کارت نسخه اندروید (بازار و مایکت) */}
            <div
              className={`p-6 rounded-3xl transition-all ${
                os === 'android'
                  ? 'bg-white text-slate-900 ring-4 ring-amber-400 shadow-2xl scale-[1.02]'
                  : 'bg-white/95 text-slate-900 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-black flex items-center gap-2">
                  <span>🤖</span> نسخه اندروید (Android)
                </span>
                {os === 'android' && (
                  <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full">
                    پیشنهاد برای گوشی شما
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-5 leading-5">
                دریافت نسخه رسمی و بهینه‌شده اندروید همراه با آپدیت‌های خودکار از طریق کافه‌بازار یا مایکت.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={bazaarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-center text-sm transition shadow-md"
                >
                  دریافت از کافه‌بازار
                </a>
                <a
                  href={myketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl text-center text-sm transition shadow-md"
                >
                  دریافت از مایکت
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* بخش امکانات کلیدی دارینو */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            چرا دارینو بهترین دستیار دارویی شماست؟
          </h2>
          <p className="text-slate-500 text-sm">
            طراحی‌شده برای دسترسی سریع، آفلاین و بدون پیچیدگی‌های پزشکی
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* فوتر */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <p>تمامی حقوق برای اپلیکیشن دارینو محفوظ است • نسخه ۲.۰.۰</p>
      </footer>
    </div>
  );
}