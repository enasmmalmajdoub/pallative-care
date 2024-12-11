import React, { useState } from "react";
import "./register.css";

export const Screen = () => {
  const [selectedCareType, setSelectedCareType] = useState("");

  const handleCareTypeChange = (event) => {
    setSelectedCareType(event.target.value);
  };

  return (
    <div className="screen">
      <div className="div">
        <div className="overlap">
          <div className="sign-up-form">
            <div className="overlap-group">
              <div className="text-wrapper">الاسم الكامل</div>

              <div className="rectangle" />
            </div>

            <div className="overlap-2">
              <div className="text-wrapper-2">البريد الالكتروني</div>

              <div className="rectangle" />
            </div>

            <div className="overlap-3">
              <div className="text-wrapper-3">رقم الهاتف</div>

              <div className="rectangle" />
            </div>

            <div className="overlap-4">
              <div className="text-wrapper-4">
                العنوان الكامل (مدينة/مخيم/شارع)
              </div>

              <div className="rectangle" />
            </div>

            <div className="overlap-5">
              <div className="text-wrapper-5">رقم الهوية</div>

              <div className="rectangle" />
            </div>

            <div className="overlap-6">
              <div className="text-wrapper-6">تاريخ الميلاد</div>

              <div className="rectangle" />
            </div>

            <div className="overlap-7">
              <div className="text-wrapper-6">نوع الرعاية</div>
              <div className="rectangle">
                <select
                  value={selectedCareType}
                  onChange={handleCareTypeChange}
                  className="dropdown"
                >
                  <option value="ضغط دم"> ضغط دم</option>
                  <option value="السكري"> السكري</option>
                  <option value="السرطان"> السرطان</option>
                  <option value="الصحة النفسية">  الصحة النفسية</option>
                  <option value="المخ و الأعصاب"> المخ و الأعصاب </option>
                  <option value="أمراض الكلى">  أمراض الكلى</option>
                  <option value="أمراض الكبد">  أمراض الكبد</option>
                </select>
              </div>
            </div>

            <div className="text-wrapper-7">الجنس</div>

            <div className="text-wrapper-8">ذكر</div>

            <div className="text-wrapper-9">أنثى</div>

            <div className="radio-button">
              <div className="overlap-group-2">
                <div className="ellipse" />
                <div className="ellipse-2" />
              </div>
            </div>

            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
            </div>
          </div>

          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-10">تسجيل الدخول</div>
            </div>
          </div>

          <div className="text-wrapper-11">انشاء حساب</div>
        </div>

        <div className="navbar">
          <img className="vector" alt="Vector" src={vector} />

          <div className="text-wrapper-6">التقارير</div>

          <div className="text-wrapper-7">الصفحة الرئيسية</div>

          <div className="text-wrapper-8">الخدمات</div>

          <div className="text-wrapper-9">الدعم</div>

          <div className="text-wrapper-10">الأسئلة المتداولة</div>

          <div className="overlap-2">
            <div className="text-wrapper-11">تسجيل الدخول</div>
          </div>

          <div className="text-wrapper-12">العربية</div>

          <img className="icon-globe" alt="Icon globe" src={iconGlobe} />
        </div>
      </div>
    </div>
  );
};
