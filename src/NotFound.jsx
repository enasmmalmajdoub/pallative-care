// pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>الصفحة التي تحاول الوصول إليها غير موجودة.</p>
      <Link to="/">العودة إلى الصفحة الرئيسية</Link>
    </div>
  );
};

export default NotFound;
