import React from "react";
import { AddButton } from "./AddButton";
import { BasilLogoutSolid } from "./BasilLogoutSolid";
import { Contacts } from "./Contacts";
import { EvaMessageCircleOutline } from "./EvaMessageCircleOutline";
import { FourConnection } from "./FourConnection";
import { IconoirBellNotificationSolid } from "./IconoirBellNotificationSolid";
import { Property1Dashboard } from "./Property1Dashboard";
import group2 from "./group-2.png";
import group3 from "./group-3.png";
import group4 from "./group-4.png";
import group5 from "./group-5.png";
import group6 from "./group-6.png";
import group from "./group.png";
import image1 from "./image.png";
import image from "./image.svg";
import rectangle39917 from "./rectangle-39917.svg";
import rectangle39941 from "./rectangle-39941.svg";
import rectangle39942 from "./rectangle-39942.svg";
import rectangle39945 from "./rectangle-39945.svg";
import reportsIcon from "./reports-icon.svg";
import searchMagnifyingGlass from "./search-magnifying-glass.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector from "./vector.svg";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <img className="vector" alt="Vector" src={vector} />

        <div className="overlap">
          <div className="rectangle" />

          <div className="visits">
            <Property1Dashboard className="icons" color="white" />
          </div>

          <div className="text-wrapper-2">ادارة مقدمي الخدمات</div>

          <div className="text-wrapper-3">الرئيسية</div>

          <div className="text-wrapper-4">ادارة الخدمات</div>

          <div className="text-wrapper-5">التقارير</div>

          <div className="text-wrapper-6">الاعدادات</div>

          <img className="img" alt="Vector" src={vector2} />

          <Contacts className="contacts-instance" />
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

        <div className="text-wrapper-7">ادارة الخدمات</div>

        <div className="overlap-3">
          <div className="rectangle-2" />

          <div className="rectangle-3" />

          <img
            className="ios-icon-search"
            alt="Ios icon search"
            src={searchMagnifyingGlass}
          />

          <div className="rectangle-4" />

          <AddButton className="add-button-instance" property1="add-button" />
          <div className="text-wrapper-8">اضافة خدمة</div>

          <div className="text-wrapper-9">ابحث عن الخدمة</div>
        </div>

        <div className="overlap-4">
          <div className="rectangle-5" />

          <img className="rectangle-6" alt="Rectangle" src={rectangle39941} />

          <img className="rectangle-7" alt="Rectangle" src={rectangle39945} />

          <div className="group">
            <div className="overlap-5">
              <div className="text-wrapper-10">حذف</div>

              <img className="group-2" alt="Group" src={group} />
            </div>
          </div>

          <div className="rectangle-8" />

          <div className="text-wrapper-11">تعديل</div>

          <img className="vector-3" alt="Vector" src={vector3} />

          <div className="text-wrapper-12">لمرضى السرطان</div>

          <p className="p">
            خدمة توصيل الأدوية الكيماوية الخاصة بالمرضى إلى منازلهم لضمان
            استمرار العلاج في الوقت المناسب.
          </p>

          <div className="text-wrapper-13">توصيل الأدوية الكيماوية</div>

          <img className="rectangle-9" alt="Rectangle" src={rectangle39942} />

          <div className="overlap-wrapper">
            <div className="overlap-6">
              <div className="text-wrapper-14">تعديل</div>

              <img className="vector-4" alt="Vector" src={vector4} />
            </div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-6">
              <div className="text-wrapper-15">حذف</div>

              <img className="group-3" alt="Group" src={image1} />
            </div>
          </div>

          <div className="rectangle-10" />

          <div className="text-wrapper-16">استشارات الدعم النفسي</div>

          <p className="text-wrapper-17">
            تقديم جلسات دعم نفسي فردية للمرضى وأسرهم لمساعدتهم على التكيف مع
            التحديات النفسية المرتبطة بالأمراض المزمنة.
          </p>

          <div className="text-wrapper-18">دعم نفسي</div>

          <div className="rectangle-11" />

          <div className="div-wrapper">
            <div className="overlap-5">
              <div className="text-wrapper-19">تعديل</div>

              <img className="vector-5" alt="Vector" src={vector5} />
            </div>
          </div>

          <img className="rectangle-12" alt="Rectangle" src={rectangle39917} />

          <div className="group-4">
            <div className="overlap-7">
              <div className="rectangle-13" />

              <div className="text-wrapper-20">حذف</div>

              <img className="group-5" alt="Group" src={group2} />
            </div>
          </div>

          <div className="group-6">
            <div className="overlap-5">
              <div className="text-wrapper-19">تعديل</div>

              <img className="vector-5" alt="Vector" src={vector6} />
            </div>
          </div>

          <div className="group-7">
            <div className="overlap-7">
              <div className="rectangle-13" />

              <div className="text-wrapper-21">حذف</div>

              <img className="group-8" alt="Group" src={group3} />
            </div>
          </div>

          <div className="rectangle-14" />

          <div className="group-9">
            <div className="overlap-7">
              <div className="rectangle-15" />

              <div className="text-wrapper-22">تعديل</div>

              <img className="vector-6" alt="Vector" src={vector7} />
            </div>
          </div>

          <div className="group-10">
            <div className="overlap-8">
              <div className="rectangle-16" />

              <div className="text-wrapper-23">حذف</div>

              <img className="group-11" alt="Group" src={group4} />
            </div>
          </div>

          <div className="text-wrapper-24">لمرضى السرطان</div>

          <div className="text-wrapper-25">الاجراءات</div>

          <div className="text-wrapper-26">نوع الخدمة</div>

          <div className="text-wrapper-27">الوصف</div>

          <div className="text-wrapper-28">اسم الخدمة</div>

          <div className="rectangle-17" />

          <div className="group-12" />

          <div className="text-wrapper-29">حذف</div>

          <div className="rectangle-18" />

          <div className="group-13">
            <div className="overlap-5">
              <div className="text-wrapper-30">تعديل</div>

              <img className="vector-7" alt="Vector" src={vector8} />
            </div>
          </div>

          <div className="group-14">
            <div className="overlap-8">
              <div className="rectangle-16" />

              <div className="text-wrapper-31">حذف</div>

              <img className="group-15" alt="Group" src={group5} />
            </div>
          </div>

          <div className="text-wrapper-32">دعم العلاجات التلطيفية</div>

          <p className="text-wrapper-33">
            توفير علاجات تلطيفية لتخفيف الألم وتحسين جودة الحياة للمرضى في مراحل
            المرض المتقدمة.
          </p>

          <div className="text-wrapper-34">لمرضى السرطان</div>

          <div className="text-wrapper-35">لمرضى السرطان</div>

          <div className="text-wrapper-36">توصيل الأدوية الكيماوية</div>

          <p className="text-wrapper-37">
            خدمة توصيل الأدوية الكيماوية الخاصة بالمرضى إلى منازلهم لضمان
            استمرار العلاج في الوقت المناسب.
          </p>

          <div className="text-wrapper-38">جلسات دعم نفسي واجتماعي</div>

          <p className="text-wrapper-39">
            {" "}
            تنظيم جلسات دعم نفسي فردية أو جماعية للمرضى وأسرهم لتقليل التوتر
            ومساعدتهم على التكيف
          </p>

          <div className="text-wrapper-16">استشارات الدعم النفسي</div>

          <p className="text-wrapper-17">
            تقديم جلسات دعم نفسي فردية للمرضى وأسرهم لمساعدتهم على التكيف مع
            التحديات النفسية المرتبطة بالأمراض المزمنة.
          </p>

          <div className="text-wrapper-40">دعم نفسي</div>

          <div className="text-wrapper-41">ورش عمل للتثقيف الصحي</div>

          <p className="text-wrapper-42">
            تنظيم ورش عمل دورية لزيادة وعي المرضى حول إدارة الأمراض المزمنة مثل
            السكري وضغط الدم، وتشجيع أسلوب حياة صحي.
          </p>

          <div className="text-wrapper-43">توعية صحية</div>

          <div className="group-16" />

          <img className="vector-8" alt="Vector" src={vector9} />

          <div className="text-wrapper-44">تعديل</div>

          <img className="group-17" alt="Group" src={group6} />
        </div>
      </div>
    </div>
  );
};
