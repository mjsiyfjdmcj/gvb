# Google OAuth সেটআপ গাইড

## ১. Google Cloud Console সেটআপ

### ধাপ ১: Google Cloud Console এ যান
- https://console.cloud.google.com এ যান
- নতুন প্রজেক্ট তৈরি করুন বা বিদ্যমান প্রজেক্ট নির্বাচন করুন

### ধাপ ২: OAuth 2.0 সেটআপ
1. **APIs & Services** > **Credentials** এ যান
2. **+ CREATE CREDENTIALS** > **OAuth 2.0 Client IDs** ক্লিক করুন
3. **Application type**: Web application নির্বাচন করুন
4. **Name**: আপনার অ্যাপের নাম দিন
5. **Authorized JavaScript origins** এ যোগ করুন:
   - `http://localhost:5000`
   - `https://localhost:5001`
6. **Authorized redirect URIs** এ যোগ করুন:
   - `http://localhost:5000`
   - `https://localhost:5001`

### ধাপ ৩: Client ID কপি করুন
- তৈরি হওয়া Client ID কপি করুন

## ২. কোড আপডেট

### script.js ফাইলে:
```javascript
const GOOGLE_CLIENT_ID = 'আপনার_CLIENT_ID_এখানে_পেস্ট_করুন';
```

### appsettings.json ফাইলে:
```json
{
  "GoogleAuth": {
    "ClientId": "আপনার_CLIENT_ID_এখানে_পেস্ট_করুন"
  }
}
```

## ৩. অ্যাপ্লিকেশন চালানো

```bash
dotnet restore
dotnet run
```

## ৪. ব্যবহার

1. **Google দিয়ে লগইন**: প্রথমে Google অ্যাকাউন্ট দিয়ে লগইন করুন
2. **বিষয় নির্বাচন**: আপনার পছন্দের বিষয় বেছে নিন বা কাস্টম বিষয় লিখুন
3. **AI কুইজ**: AI আপনার জন্য প্রশ্ন তৈরি করবে
4. **কুইজ দিন**: ১০টি প্রশ্নের উত্তর দিন
5. **ফলাফল**: ২০+ মার্ক পেলে সার্টিফিকেট পাবেন

## বৈশিষ্ট্য

- ✅ Google OAuth লগইন
- ✅ বিষয়ভিত্তিক কুইজ
- ✅ AI-powered প্রশ্ন তৈরি
- ✅ রিয়েল-টাইম স্কোরিং
- ✅ সার্টিফিকেট জেনারেশন
- ✅ অ্যাডমিন প্যানেল
- ✅ রেসপন্সিভ ডিজাইন