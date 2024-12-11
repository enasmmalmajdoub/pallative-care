import React from "react";
import { EntypoEmail } from "./EntypoEmail";
import { FlatColorIconsGoogle } from "./FlatColorIconsGoogle";
import { IcOutlinePassword } from "./IcOutlinePassword";
import { TdesignUser1Filled } from "./TdesignUser1Filled";
import iconGlobe from "./icon-globe.png";
import "./login.css";
import vector from "./vector.svg";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="div-wrapper">
                <div className="text-wrapper">تسجيل الدخول</div>
              </div>

              <div className="text-wrapper-2">تسجيل دخول</div>

              <div className="text-wrapper-3">أنشئ حساب</div>

              <div className="text-wrapper-4">
                البريد الالكتروني/ اسم المستخدم
              </div>

              <div className="text-wrapper-5">كلمة المرور</div>

              <div className="entypo-email-wrapper">
                <EntypoEmail className="icon-instance-node" />
              </div>

              <div className="flat-color-icons-wrapper">
                <FlatColorIconsGoogle className="icon-instance-node" />
              </div>

              <IcOutlinePassword className="ic-outline-password" />
              <TdesignUser1Filled className="tdesign-user" />
            </div>
          </div>
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
