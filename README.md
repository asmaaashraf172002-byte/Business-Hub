# Business Hub — Full Stack V5

نظام إدارة أعمال عربي مبني بـ React + Vite في الواجهة و Node.js + Express + MongoDB في الخادم.

## المزايا
- تسجيل الدخول وإنشاء الحساب باستخدام JWT وbcrypt.
- أدوار: admin / manager / employee.
- CRM للعملاء والصفقات.
- إدارة المهام والموظفين.
- المصروفات والمواعيد.
- Dashboard وإحصائيات مالية.
- تقارير مالية.
- إشعارات وسجل نشاط.
- بحث داخل القوائم.
- حماية الصلاحيات على الـAPI.
- واجهة Responsive وRTL.

## التشغيل
### Backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
ضع `MONGODB_URI` و`JWT_SECRET` في `.env`.

### Frontend
```bash
npm install
npm run dev
```
اختياريًا: `VITE_API_URL=http://localhost:3000/api`.
