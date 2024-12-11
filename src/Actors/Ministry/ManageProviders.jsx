import React from "react";
import { AddButton } from "./AddButton";
import { BasilLogoutSolid } from "./BasilLogoutSolid";
import { Contacts } from "./Contacts";
import { EvaMessageCircleOutline } from "./EvaMessageCircleOutline";
import { FourConnection } from "./FourConnection";
import { IconoirBellNotificationSolid } from "./IconoirBellNotificationSolid";
import { Property1Dashboard } from "./Property1Dashboard";
import chevronLeftLg2 from "./chevron-left-lg-2.svg";
import chevronLeftLg3 from "./chevron-left-lg-3.svg";
import chevronLeftLg from "./chevron-left-lg.svg";
import group2 from "./group-2.png";
import group3 from "./group-3.png";
import group4 from "./group-4.png";
import group from "./group.png";
import image1 from "./image.png";
import image from "./image.svg";
import reportsIcon from "./reports-icon.svg";
import searchMagnifyingGlass from "./search-magnifying-glass.svg";
import star1 from "./star-1.svg";
import star3 from "./star-3.svg";
import star4 from "./star-4.svg";
import star5 from "./star-5.svg";
import star6 from "./star-6.svg";
import star7 from "./star-7.svg";
import star8 from "./star-8.svg";
import star9 from "./star-9.svg";
import star10 from "./star-10.svg";
import star11 from "./star-11.svg";
import star12 from "./star-12.svg";
import star13 from "./star-13.svg";
import star14 from "./star-14.svg";
import star15 from "./star-15.svg";
import star16 from "./star-16.svg";
import star17 from "./star-17.svg";
import star18 from "./star-18.svg";
import star19 from "./star-19.svg";
import star20 from "./star-20.svg";
import star21 from "./star-21.svg";
import star22 from "./star-22.svg";
import star23 from "./star-23.svg";
import star24 from "./star-24.svg";
import star25 from "./star-25.svg";
import star26 from "./star-26.svg";
import star27 from "./star-27.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector from "./vector.svg";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <img className="vector" alt="Vector" src={vector} />

        <div className="overlap">
          <div className="rectangle" />

          <div className="visits" />

          <div className="text-wrapper-2">ادارة مقدمي الخدمات</div>

          <div className="text-wrapper-3">الرئيسية</div>

          <div className="text-wrapper-4">ادارة الخدمات</div>

          <div className="text-wrapper-5">التقارير</div>

          <div className="text-wrapper-6">الاعدادات</div>

          <img className="img" alt="Vector" src={vector2} />

          <Contacts className="contacts-instance" />
          <Property1Dashboard className="icons" color="white" />
          <img className="reports-icon" alt="Reports icon" src={reportsIcon} />

          <FourConnection
            className="element-connection"
            color="white"
            fill="#FCFDFF"
          />
        </div>

        <div className="overlap-2">
          <img className="vector-2" alt="Vector" src={image} />

          <BasilLogoutSolid className="basil-logout-solid" />
          <IconoirBellNotificationSolid className="iconoir-bell" />
          <EvaMessageCircleOutline className="eva-message-circle" />
        </div>

        <div className="overlap-3">
          <div className="rectangle-2" />

          <AddButton className="add-button-instance" property1="add-button" />
          <div className="text-wrapper-7">اضافة مقدم خدمة</div>
        </div>

        <div className="overlap-4">
          <img
            className="ios-icon-search"
            alt="Ios icon search"
            src={searchMagnifyingGlass}
          />

          <div className="text-wrapper-8">البحت عن مقدم</div>
        </div>

        <div className="overlap-5">
          <img
            className="ios-icon-chevron"
            alt="Ios icon chevron"
            src={chevronLeftLg}
          />

          <img
            className="ios-icon-chevron-2"
            alt="Ios icon chevron"
            src={chevronLeftLg2}
          />

          <img
            className="ios-icon-chevron-3"
            alt="Ios icon chevron"
            src={chevronLeftLg3}
          />

          <div className="div-wrapper">
            <div className="text-wrapper-9">تعيين</div>
          </div>

          <div className="text-wrapper-10">الموقع</div>

          <div className="text-wrapper-11">نوع الخدمة</div>

          <div className="text-wrapper-12">التقييم</div>
        </div>

        <div className="overlap-6">
          <div className="rectangle-3" />

          <div className="rectangle-4" />

          <div className="group">
            <div className="overlap-7">
              <img className="group-2" alt="Group" src={group} />

              <div className="text-wrapper-13">حذف</div>
            </div>
          </div>

          <div className="overlap-wrapper">
            <div className="overlap-7">
              <img className="group-2" alt="Group" src={image1} />

              <div className="text-wrapper-13">حذف</div>
            </div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-7">
              <img className="group-2" alt="Group" src={group2} />

              <div className="text-wrapper-14">حذف</div>
            </div>
          </div>

          <div className="group-3">
            <div className="overlap-7">
              <img className="vector-3" alt="Vector" src={vector3} />

              <div className="text-wrapper-15">تعديل</div>
            </div>
          </div>

          <div className="group-4">
            <div className="overlap-7">
              <img className="vector-3" alt="Vector" src={vector4} />

              <div className="text-wrapper-15">تعديل</div>
            </div>
          </div>

          <div className="group-5">
            <div className="overlap-7">
              <img className="vector-3" alt="Vector" src={vector5} />

              <div className="text-wrapper-15">تعديل</div>
            </div>
          </div>

          <div className="group-6">
            <div className="overlap-7">
              <img className="group-2" alt="Group" src={group3} />

              <div className="text-wrapper-13">حذف</div>
            </div>
          </div>

          <div className="group-7">
            <div className="overlap-7">
              <img className="vector-3" alt="Vector" src={vector6} />

              <div className="text-wrapper-15">تعديل</div>
            </div>
          </div>

          <div className="group-8" />

          <div className="text-wrapper-16">حذف</div>

          <div className="group-9" />

          <div className="text-wrapper-17">تعديل</div>

          <img className="vector-4" alt="Vector" src={vector7} />

          <img className="group-10" alt="Group" src={group4} />

          <div className="text-wrapper-18">الإجراءات</div>

          <div className="rectangle-5" />

          <div className="text-wrapper-19">فعال</div>

          <div className="text-wrapper-20">فعال</div>

          <div className="text-wrapper-21">فعال</div>

          <div className="text-wrapper-22">فعال</div>

          <div className="text-wrapper-23">فعال</div>

          <div className="text-wrapper-24">الحالة</div>

          <div className="rectangle-6" />

          <div className="rectangle-7" />

          <img className="star" alt="Star" src={star27} />

          <img className="star-2" alt="Star" src={star26} />

          <img className="star-3" alt="Star" src={star25} />

          <img className="star-4" alt="Star" src={star24} />

          <img className="star-5" alt="Star" src={star23} />

          <div className="rectangle-8" />

          <img className="star-6" alt="Star" src={star22} />

          <img className="star-7" alt="Star" src={star21} />

          <img className="star-8" alt="Star" src={star20} />

          <img className="star-9" alt="Star" src={star19} />

          <img className="star-10" alt="Star" src={star18} />

          <div className="rectangle-9" />

          <img className="star-11" alt="Star" src={star17} />

          <img className="star-12" alt="Star" src={star16} />

          <img className="star-13" alt="Star" src={star15} />

          <img className="star-14" alt="Star" src={star14} />

          <img className="star-15" alt="Star" src={star13} />

          <div className="rectangle-10" />

          <img className="star-16" alt="Star" src={star12} />

          <img className="star-17" alt="Star" src={star11} />

          <img className="star-18" alt="Star" src={star10} />

          <img className="star-19" alt="Star" src={star9} />

          <img className="star-20" alt="Star" src={star8} />

          <div className="rectangle-11" />

          <div className="text-wrapper-25">دعم نفسي ورعاية</div>

          <div className="text-wrapper-26">طبية وإنسانية</div>

          <div className="text-wrapper-27">دعم نفسي ورعاية</div>

          <div className="text-wrapper-28">طبية وإنسانية</div>

          <div className="text-wrapper-29">دعم نفسي ورعاية</div>

          <div className="rectangle-12" />

          <div className="text-wrapper-30">مؤسسة أطباء بلا حدود</div>

          <div className="text-wrapper-31">مستشفى القدس</div>

          <div className="text-wrapper-32">جمعية الإغاثة الطبية</div>

          <div className="text-wrapper-33">الصليب الأحمر الدولي</div>

          <div className="text-wrapper-34">الهلال الأحمر الفلسطيني</div>

          <div className="text-wrapper-35">الاسم</div>

          <div className="rectangle-13" />

          <div className="text-wrapper-36">غزة</div>

          <div className="text-wrapper-37">غزة</div>

          <div className="text-wrapper-38">غزة</div>

          <div className="text-wrapper-39">الموقع</div>

          <div className="text-wrapper-40">غزة</div>

          <div className="text-wrapper-41">غزة</div>

          <div className="text-wrapper-42">التقييم</div>

          <div className="text-wrapper-43">نوع الخدمة</div>

          <div className="rectangle-14" />

          <img className="star-21" alt="Star" src={star3} />

          <img className="star-22" alt="Star" src={star4} />

          <img className="star-23" alt="Star" src={star5} />

          <img className="star-24" alt="Star" src={star6} />

          <img className="star-25" alt="Star" src={star7} />
        </div>

        <img className="star-26" alt="Star" src={star1} />
      </div>
    </div>
  );
};
