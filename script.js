// Quiz Questions Database
const questionBank = {
    bangladesh: [
        { question: "বাংলাদেশের রাজধানী কোনটি?", options: ["চট্টগ্রাম", "ঢাকা", "সিলেট", "খুলনা"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের স্বাধীনতা দিবস কবে?", options: ["২৫ মার্চ", "২৬ মার্চ", "১৬ ডিসেম্বর", "২১ ফেব্রুয়ারি"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের জাতীয় ফুল কোনটি?", options: ["গোলাপ", "শাপলা", "জুঁই", "বেলি"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের মুদ্রার নাম কী?", options: ["রুপি", "টাকা", "ডলার", "পাউন্ড"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের সবচেয়ে বড় নদী কোনটি?", options: ["পদ্মা", "মেঘনা", "যমুনা", "কর্ণফুলী"], correct: 0, marks: 3 },
        { question: "বাংলাদেশের জাতীয় পাখি কোনটি?", options: ["কাক", "দোয়েল", "ময়ূর", "বাজ"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের মোট জেলা কতটি?", options: ["৬২", "৬৩", "৬৪", "৬৫"], correct: 2, marks: 3 },
        { question: "বাংলাদেশের জাতীয় খেলা কী?", options: ["ফুটবল", "ক্রিকেট", "কাবাডি", "হকি"], correct: 2, marks: 3 },
        { question: "বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?", options: ["শেখ মুজিবুর রহমান", "তাজউদ্দীন আহমদ", "খন্দকার মোশতাক", "এ এইচ এম কামারুজ্জামান"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের বিজয় দিবস কবে?", options: ["২৬ মার্চ", "২১ ফেব্রুয়ারি", "১৬ ডিসেম্বর", "১৪ ডিসেম্বর"], correct: 2, marks: 3 }
    ],
    science: [
        { question: "কোন গ্যাসটি শ্বাস-প্রশ্বাসে সবচেয়ে বেশি প্রয়োজন?", options: ["নাইট্রোজেন", "হাইড্রোজেন", "কার্বন ডাই-অক্সাইড", "অক্সিজেন"], correct: 3, marks: 3 },
        { question: "মানুষের শরীরে সবচেয়ে বড় অঙ্গ কোনটি?", options: ["ফুসফুস", "হৃদপিণ্ড", "ত্বক", "যকৃত"], correct: 2, marks: 3 },
        { question: "পানি কত ডিগ্রি সেলসিয়াসে জমে বরফ হয়?", options: ["১০°", "৫°", "০°", "-৫°"], correct: 2, marks: 3 },
        { question: "কোন গ্রহটি 'লাল গ্রহ' নামে পরিচিত?", options: ["শুক্র", "বৃহস্পতি", "মঙ্গল", "ইউরেনাস"], correct: 2, marks: 3 },
        { question: "বিদ্যুৎ প্রবাহের একক কী?", options: ["ওয়াট", "ভোল্ট", "অ্যাম্পিয়ার", "ওহম"], correct: 2, marks: 3 },
        { question: "পানির রাসায়নিক সংকেত কী?", options: ["H2O", "CO2", "O2", "N2"], correct: 0, marks: 3 },
        { question: "মানুষের শরীরে কতটি হাড় আছে?", options: ["২০৬", "২০৮", "২১০", "২১২"], correct: 0, marks: 3 },
        { question: "আলোর গতি কত?", options: ["৩ লক্ষ কিমি/সেকেন্ড", "২ লক্ষ কিমি/সেকেন্ড", "৪ লক্ষ কিমি/সেকেন্ড", "৫ লক্ষ কিমি/সেকেন্ড"], correct: 0, marks: 3 },
        { question: "অক্সিজেনের পারমাণবিক সংখ্যা কত?", options: ["৬", "৭", "৮", "৯"], correct: 2, marks: 3 },
        { question: "পৃথিবীর বায়ুমণ্ডলে কোন গ্যাস সবচেয়ে বেশি?", options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই-অক্সাইড", "আর্গন"], correct: 1, marks: 3 }
    ],
    history: [
        { question: "দ্বিতীয় বিশ্বযুদ্ধ কত সালে শুরু হয়?", options: ["১৯৩৮", "১৯৩৯", "১৯৪০", "১৯৪১"], correct: 1, marks: 3 },
        { question: "মহাত্মা গান্ধীর জন্ম কোথায়?", options: ["দিল্লি", "মুম্বাই", "পোরবন্দর", "আহমেদাবাদ"], correct: 2, marks: 3 },
        { question: "মুঘল সাম্রাজ্যের প্রতিষ্ঠাতা কে?", options: ["আকবর", "বাবর", "হুমায়ুন", "শাহজাহান"], correct: 1, marks: 3 },
        { question: "তাজমহল কে নির্মাণ করেন?", options: ["আকবর", "জাহাঙ্গীর", "শাহজাহান", "আওরঙ্গজেব"], correct: 2, marks: 3 },
        { question: "প্রথম বিশ্বযুদ্ধ কত সালে শেষ হয়?", options: ["১৯১৭", "১৯১৮", "১৯১৯", "১৯২০"], correct: 1, marks: 3 },
        { question: "আলেকজান্ডার দ্য গ্রেট কোন দেশের রাজা ছিলেন?", options: ["গ্রিস", "মেসিডোনিয়া", "রোম", "মিশর"], correct: 1, marks: 3 },
        { question: "চীনের মহাপ্রাচীর কত সালে নির্মাণ শুরু হয়?", options: ["খ্রিস্টপূর্ব ৭ম শতাব্দী", "খ্রিস্টপূর্ব ৫ম শতাব্দী", "খ্রিস্টপূর্ব ৩য় শতাব্দী", "খ্রিস্টীয় ১ম শতাব্দী"], correct: 0, marks: 3 },
        { question: "নেপোলিয়ন বোনাপার্ট কোন দেশের সম্রাট ছিলেন?", options: ["ইতালি", "ফ্রান্স", "স্পেন", "জার্মানি"], correct: 1, marks: 3 },
        { question: "রোমান সাম্রাজ্যের পতন কত সালে?", options: ["৪৭৬ খ্রিস্টাব্দ", "৪৮০ খ্রিস্টাব্দ", "৪৯০ খ্রিস্টাব্দ", "৫০০ খ্রিস্টাব্দ"], correct: 0, marks: 3 },
        { question: "আমেরিকার স্বাধীনতা যুদ্ধ কত সালে শুরু হয়?", options: ["১৭৭৫", "১৭৭৬", "১৭৭৭", "১৭৭৮"], correct: 0, marks: 3 }
    ],
    geography: [
        { question: "বিশ্বের সবচেয়ে লম্বা নদী কোনটি?", options: ["আমাজন", "নীল", "গঙ্গা", "মিসিসিপি"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে উঁচু পর্বত কোনটি?", options: ["কে২", "এভারেস্ট", "কাঞ্চনজঙ্ঘা", "মাকালু"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় মহাদেশ কোনটি?", options: ["আফ্রিকা", "এশিয়া", "উত্তর আমেরিকা", "দক্ষিণ আমেরিকা"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে গভীর সমুদ্র কোনটি?", options: ["আটলান্টিক", "প্রশান্ত", "ভারত", "আর্কটিক"], correct: 1, marks: 3 },
        { question: "সাহারা মরুভূমি কোন মহাদেশে অবস্থিত?", options: ["এশিয়া", "আফ্রিকা", "অস্ট্রেলিয়া", "দক্ষিণ আমেরিকা"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে ছোট দেশ কোনটি?", options: ["মোনাকো", "ভ্যাটিকান সিটি", "নাউরু", "সান মারিনো"], correct: 1, marks: 3 },
        { question: "আমাজন রেইনফরেস্ট কোন দেশে অবস্থিত?", options: ["ব্রাজিল", "আর্জেন্টিনা", "পেরু", "কলম্বিয়া"], correct: 0, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় দ্বীপ কোনটি?", options: ["গ্রিনল্যান্ড", "অস্ট্রেলিয়া", "বোর্নিও", "মাদাগাস্কার"], correct: 0, marks: 3 },
        { question: "নায়াগ্রা জলপ্রপাত কোন দুই দেশের মধ্যে অবস্থিত?", options: ["যুক্তরাষ্ট্র ও মেক্সিকো", "যুক্তরাষ্ট্র ও কানাডা", "কানাডা ও গ্রিনল্যান্ড", "মেক্সিকো ও গুয়াতেমালা"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে জনবহুল দেশ কোনটি?", options: ["ভারত", "চীন", "যুক্তরাষ্ট্র", "ইন্দোনেশিয়া"], correct: 1, marks: 3 }
    ],
    literature: [
        { question: "রবীন্দ্রনাথ ঠাকুর কত সালে নোবেল পুরস্কার পান?", options: ["১৯১২", "১৯১৩", "১৯১৪", "১৯১৫"], correct: 1, marks: 3 },
        { question: "'গীতাঞ্জলি' কাব্যগ্রন্থের রচয়িতা কে?", options: ["কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "জীবনানন্দ দাশ", "সুকান্ত ভট্টাচার্য"], correct: 1, marks: 3 },
        { question: "বাংলা সাহিত্যের প্রথম মহাকাব্য কোনটি?", options: ["মেঘনাদবধ কাব্য", "চণ্ডীমঙ্গল", "মনসামঙ্গল", "অন্নদামঙ্গল"], correct: 0, marks: 3 },
        { question: "'বিদ্রোহী' কবিতার রচয়িতা কে?", options: ["রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "জীবনানন্দ দাশ", "ফররুখ আহমদ"], correct: 1, marks: 3 },
        { question: "শেক্সপিয়ারের বিখ্যাত নাটক কোনটি?", options: ["হ্যামলেট", "ওথেলো", "ম্যাকবেথ", "সবগুলো"], correct: 3, marks: 3 },
        { question: "'পদ্মা নদীর মাঝি' উপন্যাসের লেখক কে?", options: ["বিভূতিভূষণ বন্দ্যোপাধ্যায়", "মানিক বন্দ্যোপাধ্যায়", "তারাশঙ্কর বন্দ্যোপাধ্যায়", "শরৎচন্দ্র চট্টোপাধ্যায়"], correct: 1, marks: 3 },
        { question: "বাংলা ভাষার আদি কবি কে?", options: ["চণ্ডীদাস", "বিদ্যাপতি", "জয়দেব", "লুইপা"], correct: 3, marks: 3 },
        { question: "'আমার সোনার বাংলা' গানের রচয়িতা কে?", options: ["কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "দ্বিজেন্দ্রলাল রায়", "অতুলপ্রসাদ সেন"], correct: 1, marks: 3 },
        { question: "'লালসালু' উপন্যাসের লেখক কে?", options: ["সৈয়দ ওয়ালীউল্লাহ", "শওকত ওসমান", "আবু ইসহাক", "আলাউদ্দিন আল আজাদ"], correct: 0, marks: 3 },
        { question: "বাংলা একাডেমি কত সালে প্রতিষ্ঠিত হয়?", options: ["১৯৫৪", "১৯৫৫", "১৯৫৬", "১৯৫৭"], correct: 1, marks: 3 }
    ],
    sports: [
        { question: "ফুটবল বিশ্বকাপ কত বছর পর পর অনুষ্ঠিত হয়?", options: ["২ বছর", "৩ বছর", "৪ বছর", "৫ বছর"], correct: 2, marks: 3 },
        { question: "অলিম্পিক গেমস কত বছর পর পর অনুষ্ঠিত হয়?", options: ["২ বছর", "৩ বছর", "৪ বছর", "৫ বছর"], correct: 2, marks: 3 },
        { question: "ক্রিকেটে একটি ওভারে কতটি বল থাকে?", options: ["৪", "৫", "৬", "৮"], correct: 2, marks: 3 },
        { question: "টেনিসে গ্র্যান্ড স্ল্যাম কতটি টুর্নামেন্ট নিয়ে গঠিত?", options: ["৩", "৪", "৫", "৬"], correct: 1, marks: 3 },
        { question: "বাস্কেটবলে একটি দলে কতজন খেলোয়াড় থাকে?", options: ["৪", "৫", "৬", "৭"], correct: 1, marks: 3 },
        { question: "ফুটবলে একটি ম্যাচ কত মিনিট স্থায়ী হয়?", options: ["৮০ মিনিট", "৯০ মিনিট", "১০০ মিনিট", "১২০ মিনিট"], correct: 1, marks: 3 },
        { question: "বক্সিংয়ে কতটি ওজন বিভাগ আছে?", options: ["১৫", "১৬", "১৭", "১৮"], correct: 2, marks: 3 },
        { question: "সাঁতারে ফ্রিস্টাইলের অন্য নাম কী?", options: ["ব্রেস্টস্ট্রোক", "ব্যাকস্ট্রোক", "ফ্রন্ট ক্রল", "বাটারফ্লাই"], correct: 2, marks: 3 },
        { question: "গলফে একটি হোলে সর্বনিম্ন স্ট্রোক কতটি?", options: ["১", "২", "৩", "৪"], correct: 0, marks: 3 },
        { question: "ভলিবলে নেটের উচ্চতা কত?", options: ["২.২৪ মিটার", "২.৪৩ মিটার", "২.৫০ মিটার", "২.৬০ মিটার"], correct: 1, marks: 3 }
    ],
    technology: [
        { question: "ইন্টারনেটের জনক কাকে বলা হয়?", options: ["বিল গেটস", "টিম বার্নার্স লি", "স্টিভ জবস", "মার্ক জাকারবার্গ"], correct: 1, marks: 3 },
        { question: "প্রথম কম্পিউটার ভাইরাস কোনটি?", options: ["ক্রিপার", "মরিস ওয়ার্ম", "আই লাভ ইউ", "মেলিসা"], correct: 0, marks: 3 },
        { question: "HTML এর পূর্ণরূপ কী?", options: ["হাইপার টেক্সট মার্কআপ ল্যাঙ্গুয়েজ", "হাই টেক মার্কআপ ল্যাঙ্গুয়েজ", "হাইপার টেক্সট মেথড ল্যাঙ্গুয়েজ", "হাইপার টুল মার্কআপ ল্যাঙ্গুয়েজ"], correct: 0, marks: 3 },
        { question: "প্রথম প্রোগ্রামিং ভাষা কোনটি?", options: ["ফোরট্রান", "কোবল", "বেসিক", "অ্যাসেম্বলি"], correct: 0, marks: 3 },
        { question: "কোন কোম্পানি আইফোন তৈরি করে?", options: ["স্যামসাং", "গুগল", "অ্যাপল", "মাইক্রোসফট"], correct: 2, marks: 3 },
        { question: "ব্লুটুথ প্রযুক্তি কোন দেশে আবিষ্কৃত হয়?", options: ["যুক্তরাষ্ট্র", "জাপান", "ডেনমার্ক", "সুইডেন"], correct: 2, marks: 3 },
        { question: "প্রথম সোশ্যাল নেটওয়ার্কিং সাইট কোনটি?", options: ["ফেসবুক", "মাইস্পেস", "সিক্সডিগ্রিজ", "ফ্রেন্ডস্টার"], correct: 2, marks: 3 },
        { question: "কোন বছর ইন্টারনেট সর্বসাধারণের জন্য উন্মুক্ত হয়?", options: ["১৯৯০", "১৯৯১", "১৯৯২", "১৯৯৩"], correct: 1, marks: 3 },
        { question: "প্রথম ওয়েব ব্রাউজার কোনটি?", options: ["নেটস্কেপ", "ইন্টারনেট এক্সপ্লোরার", "ওয়ার্ল্ডওয়াইডওয়েব", "মোজাইক"], correct: 2, marks: 3 },
        { question: "কোন কোম্পানি অ্যান্ড্রয়েড অপারেটিং সিস্টেম তৈরি করে?", options: ["অ্যাপল", "মাইক্রোসফট", "গুগল", "স্যামসাং"], correct: 2, marks: 3 }
    ],
    climate: [
        { question: "গ্রিনহাউস গ্যাসের প্রধান উৎস কী?", options: ["কার্বন ডাই-অক্সাইড", "মিথেন", "নাইট্রাস অক্সাইড", "সবগুলো"], correct: 3, marks: 3 },
        { question: "বৈশ্বিক উষ্ণতা বৃদ্ধির প্রধান কারণ কী?", options: ["সৌর বিকিরণ", "মানুষের কার্যকলাপ", "আগ্নেয়গিরি", "সমুদ্রের স্রোত"], correct: 1, marks: 3 },
        { question: "কোন গ্যাস ওজোন স্তর ক্ষয় করে?", options: ["CO2", "CH4", "CFC", "N2O"], correct: 2, marks: 3 },
        { question: "প্যারিস চুক্তি কত সালে স্বাক্ষরিত হয়?", options: ["২০১৫", "২০১৬", "২০১৭", "২০১৮"], correct: 0, marks: 3 },
        { question: "বাংলাদেশে জলবায়ু পরিবর্তনের প্রধান প্রভাব কী?", options: ["সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি", "ঘূর্ণিঝড়", "বন্যা", "সবগুলো"], correct: 3, marks: 3 },
        { question: "নবায়নযোগ্য শক্তির উৎস কোনটি?", options: ["কয়লা", "সৌরশক্তি", "প্রাকৃতিক গ্যাস", "পেট্রোল"], correct: 1, marks: 3 },
        { question: "কার্বন ফুটপ্রিন্ট কমানোর উপায় কোনটি?", options: ["গাছ লাগানো", "সাইকেল ব্যবহার", "শক্তি সাশ্রয়", "সবগুলো"], correct: 3, marks: 3 },
        { question: "বরফ গলার কারণে কোন অঞ্চল বেশি ক্ষতিগ্রস্ত?", options: ["মেরু অঞ্চল", "মরুভূমি", "পাহাড়ি এলাকা", "বনাঞ্চল"], correct: 0, marks: 3 },
        { question: "জলবায়ু পরিবর্তনের ফলে কোন রোগ বৃদ্ধি পায়?", options: ["ম্যালেরিয়া", "ডেঙ্গু", "চিকুনগুনিয়া", "সবগুলো"], correct: 3, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বেশি কার্বন নিঃসরণকারী দেশ কোনটি?", options: ["যুক্তরাষ্ট্র", "চীন", "ভারত", "রাশিয়া"], correct: 1, marks: 3 }
    ],
    general: [
        { question: "জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত?", options: ["জেনেভা", "নিউইয়র্ক", "প্যারিস", "লন্ডন"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় মহাসাগর কোনটি?", options: ["আটলান্টিক", "প্রশান্ত", "ভারত", "আর্কটিক"], correct: 1, marks: 3 },
        { question: "কোন দেশে সূর্য মধ্যরাতে উদয় হয়?", options: ["নরওয়ে", "সুইডেন", "ফিনল্যান্ড", "সবগুলো"], correct: 3, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বেশি ভাষা কোন দেশে বলা হয়?", options: ["ভারত", "চীন", "পাপুয়া নিউগিনি", "ইন্দোনেশিয়া"], correct: 2, marks: 3 },
        { question: "কোন প্রাণী সবচেয়ে বেশি দিন বাঁচে?", options: ["হাতি", "কচ্ছপ", "তিমি", "হাঙর"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে ছোট পাখি কোনটি?", options: ["হামিংবার্ড", "চড়ুই", "ফিঞ্চ", "ক্যানারি"], correct: 0, marks: 3 },
        { question: "কোন গ্রহে একদিন সবচেয়ে দীর্ঘ?", options: ["শুক্র", "মঙ্গল", "বৃহস্পতি", "শনি"], correct: 0, marks: 3 },
        { question: "বিশ্বের সবচেয়ে গভীর সমুদ্রখাত কোনটি?", options: ["মারিয়ানা ট্রেঞ্চ", "পুয়ের্তো রিকো ট্রেঞ্চ", "জাপান ট্রেঞ্চ", "পেরু-চিলি ট্রেঞ্চ"], correct: 0, marks: 3 },
        { question: "কোন ধাতু সবচেয়ে ভারী?", options: ["সোনা", "প্ল্যাটিনাম", "অসমিয়াম", "ইরিডিয়াম"], correct: 2, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় মরুভূমি কোনটি?", options: ["সাহারা", "গোবি", "কালাহারি", "অ্যান্টার্কটিকা"], correct: 3, marks: 3 }
    ]
};

let currentTopic = '';
let studentDetails = {
    name: '',
    school: '',
    age: '',
    class: '',
    principal: '',
    photo: null,
    studentId: ''
};
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

function selectTopic(topic) {
    currentTopic = topic;
    
    // Check if student ID exists
    const savedStudent = localStorage.getItem('studentData');
    if (savedStudent) {
        studentDetails = JSON.parse(savedStudent);
        questions = getQuestionsForId(studentDetails.studentId, topic);
        startQuizDirectly();
    } else {
        document.getElementById('topic-container').style.display = 'none';
        document.getElementById('name-container').style.display = 'block';
    }
}

function getQuestionsForId(studentId, topic) {
    // Get quiz attempt count for this topic
    const attemptKey = `${studentId}_${topic}_attempts`;
    let attempts = parseInt(localStorage.getItem(attemptKey) || '0');
    
    // Different question patterns based on attempt number
    const patterns = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],     // 1st attempt - sequential
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],     // 2nd attempt - reverse
        [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],     // 3rd attempt - even/odd
        [5, 0, 8, 2, 7, 1, 9, 3, 6, 4],     // 4th attempt - mixed
        [3, 7, 1, 9, 0, 5, 2, 8, 4, 6]      // 5th attempt - random pattern
    ];
    
    // Use student ID as additional randomization
    const idSeed = studentId.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const patternIndex = (attempts + idSeed) % patterns.length;
    const selectedPattern = patterns[patternIndex];
    
    // Get all questions for the topic
    const allQuestions = [...questionBank[topic]];
    
    // Select questions based on pattern
    const selectedQuestions = selectedPattern.map(index => 
        allQuestions[index % allQuestions.length]
    ).filter(q => q); // Remove undefined questions
    
    // If we don't have enough questions, fill with remaining ones
    while (selectedQuestions.length < 10 && selectedQuestions.length < allQuestions.length) {
        for (let q of allQuestions) {
            if (!selectedQuestions.includes(q) && selectedQuestions.length < 10) {
                selectedQuestions.push(q);
            }
        }
    }
    
    // Increment attempt count
    localStorage.setItem(attemptKey, (attempts + 1).toString());
    
    return selectedQuestions.slice(0, 10);
}

function startQuizWithDetails() {
    const name = document.getElementById('student-name-input').value.trim();
    const school = document.getElementById('school-name-input').value.trim();
    const age = document.getElementById('student-age-input').value.trim();
    const studentClass = document.getElementById('student-class-input').value.trim();
    const principal = document.getElementById('principal-name-input').value.trim();
    
    if (!name || !school || !age || !studentClass || !principal) {
        alert('অনুগ্রহ করে সব তথ্য পূরণ করুন!');
        return;
    }
    
    const year = new Date().getFullYear();
    const nameCode = name.substring(0, 2).toUpperCase();
    const schoolCode = school.substring(0, 2).toUpperCase();
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const studentId = `${year}${nameCode}${schoolCode}${randomNum}`;
    
    studentDetails = { name, school, age, class: studentClass, principal, photo: studentDetails.photo, studentId };
    
    // Generate questions based on ID
    questions = getQuestionsForId(studentId, currentTopic);
    
    // Save to localStorage
    localStorage.setItem('studentData', JSON.stringify(studentDetails));
    
    // Show ID in nav
    document.getElementById('nav-student-id').style.display = 'block';
    document.getElementById('nav-id-display').textContent = studentId;
    
    startQuizDirectly();
}

function startQuizDirectly() {
    document.getElementById('topic-container').style.display = 'none';
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const topicNames = {
        bangladesh: 'বাংলাদেশ',
        science: 'বিজ্ঞান',
        history: 'ইতিহাস',
        geography: 'ভূগোল',
        literature: 'সাহিত্য',
        sports: 'খেলাধুলা',
        technology: 'প্রযুক্তি',
        climate: 'জলবায়ু',
        general: 'সাধারণ জ্ঞান'
    };
    
    document.getElementById('quiz-topic-title').textContent = topicNames[currentTopic] + ' কুইজ';
    document.getElementById('student-name-display').textContent = `👤 ${studentDetails.name} (আইডি: ${studentDetails.studentId})`;
    startQuiz();
}



function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    loadQuestion();
}

let questionTimer;
let timeLeft = 10;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.style.pointerEvents = 'auto';
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    selectedAnswer = null;
    startTimer();
}

function startTimer() {
    timeLeft = 5;
    document.getElementById('timer').textContent = timeLeft;
    
    questionTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            if (selectedAnswer === null) {
                showTimeUpFeedback();
            }
        }
    }, 1000);
}

function selectOption(index) {
    clearInterval(questionTimer);
    selectedAnswer = index;
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, i) => {
        option.style.pointerEvents = 'none';
        if (i === index && index !== -1) {
            if (i === question.correct) {
                option.classList.add('correct-selected');
                option.innerHTML = option.textContent + ' <span class="check-mark">✅</span>';
                showAnswerFeedback('✅', true);
            } else {
                option.classList.add('incorrect-selected');
                option.innerHTML = option.textContent + ' <span class="cross-mark">❌</span>';
                showAnswerFeedback('❌', false);
            }
        }
        if (i === question.correct && i !== index) {
            option.classList.add('correct');
            option.innerHTML = option.textContent + ' <span class="check-mark">✅</span>';
        }
    });
    
    setTimeout(() => {
        hideAnswerFeedback();
        nextQuestion();
    }, 2000);
}

function showAnswerFeedback(symbol, isCorrect) {
    const overlay = document.getElementById('answer-overlay');
    const symbolElement = document.getElementById('answer-symbol');
    
    symbolElement.textContent = symbol;
    if (symbol === '🚫') {
        symbolElement.className = 'answer-symbol timeout';
    } else {
        symbolElement.className = 'answer-symbol ' + (isCorrect ? 'correct' : 'incorrect');
    }
    
    overlay.style.display = 'flex';
    overlay.classList.add('show');
    
    if (symbol !== '🚫') {
        playSound(isCorrect);
    }
}

function playSound(isCorrect) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    if (isCorrect) {
        // Correct answer sound - pleasant chime
        playTone(audioContext, 523.25, 0.2); // C5
        setTimeout(() => playTone(audioContext, 659.25, 0.2), 100); // E5
        setTimeout(() => playTone(audioContext, 783.99, 0.3), 200); // G5
    } else {
        // Wrong answer sound - buzzer
        playTone(audioContext, 200, 0.5, 'sawtooth');
    }
}

function playTone(audioContext, frequency, duration, waveType = 'sine') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = waveType;
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function showTimeUpFeedback() {
    selectedAnswer = -1;
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, i) => {
        option.style.pointerEvents = 'none';
        if (i === question.correct) {
            option.classList.add('correct');
            option.innerHTML = option.textContent + ' <span class="check-mark">✅</span>';
        }
    });
    
    showAnswerFeedback('🚫', false);
    
    setTimeout(() => {
        hideAnswerFeedback();
        nextQuestion();
    }, 2000);
}

function hideAnswerFeedback() {
    const overlay = document.getElementById('answer-overlay');
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestion];
    userAnswers.push(selectedAnswer);
    
    if (selectedAnswer === question.correct) {
        score += question.marks;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const resultTitle = document.getElementById('result-title');
    const scoreDisplay = document.getElementById('score-display');
    
    // Get attempt count for display
    const attemptKey = `${studentDetails.studentId}_${currentTopic}_attempts`;
    const attemptCount = parseInt(localStorage.getItem(attemptKey) || '1');
    
    scoreDisplay.textContent = `আপনার স্কোর: ${score}/৩০ (${attemptCount}তম চেষ্টা)`;
    
    const topicNames = {
        bangladesh: 'বাংলাদেশ',
        science: 'বিজ্ঞান',
        history: 'ইতিহাস',
        geography: 'ভূগোল',
        literature: 'সাহিত্য',
        sports: 'খেলাধুলা',
        technology: 'প্রযুক্তি',
        climate: 'জলবায়ু',
        general: 'সাধারণ জ্ঞান'
    };
    
    const passed = score >= 20;
    
    // Save result to localStorage for admin panel
    const quizResult = {
        name: studentDetails.name,
        school: studentDetails.school,
        age: studentDetails.age,
        class: studentDetails.class,
        principal: studentDetails.principal,
        topic: currentTopic,
        score: score,
        totalMarks: 30,
        passed: passed,
        answers: userAnswers,
        attempt: attemptCount,
        timestamp: new Date().toISOString()
    };
    
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(quizResult);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));
    
    // Trigger storage event for cross-tab communication
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'quizResults',
        newValue: JSON.stringify(existingResults)
    }));
    
    if (passed) {
        resultTitle.textContent = '🎉 অভিনন্দন! আপনি পাস করেছেন! 🎉';
        resultTitle.className = 'pass';
        
        // Generate and display pass code
        const passCode = generatePassCode();
        document.getElementById('pass-code').textContent = passCode;
        document.getElementById('pass-code-section').style.display = 'block';
        
        // Store pass code
        localStorage.setItem('currentPassCode', passCode);
        
        document.getElementById('id-card').style.display = 'block';
        
        // Populate ID card
        document.getElementById('id-student-name').textContent = studentDetails.name;
        document.getElementById('id-school-name').textContent = studentDetails.school;
        document.getElementById('id-age').textContent = studentDetails.age;
        document.getElementById('id-class').textContent = studentDetails.class;
        document.getElementById('id-principal').textContent = studentDetails.principal;
        document.getElementById('id-topic').textContent = topicNames[currentTopic];
        document.getElementById('id-student-id').textContent = studentDetails.studentId;
        document.getElementById('id-score').textContent = score;
        document.getElementById('id-date').textContent = new Date().toLocaleDateString('bn-BD');
        
        // Display photo in ID card
        const photoElement = document.getElementById('id-card-photo');
        if (studentDetails.photo) {
            photoElement.innerHTML = `<img src="${studentDetails.photo}" alt="Student Photo">`;
        } else {
            photoElement.innerHTML = '📷';
        }
    } else {
        const difficultyMessages = [
            '',
            ' (পরবর্তী চেষ্টায় ভিন্ন প্রশ্ন আসবে)',
            ' (তৃতীয় চেষ্টা - আরও চ্যালেঞ্জিং)',
            ' (চতুর্থ চেষ্টা - কঠিন লেভেল)',
            ' (পঞ্চম চেষ্টা - এক্সপার্ট লেভেল!)'
        ];
        const msgIndex = Math.min(attemptCount - 1, difficultyMessages.length - 1);
        const difficultyMsg = difficultyMessages[msgIndex];
        
        resultTitle.textContent = '😔 দুঃখিত! আপনি ফেল করেছেন' + difficultyMsg;
        resultTitle.className = 'fail';
        document.getElementById('id-card').style.display = 'none';
    }
}

function restartQuiz() {
    studentDetails = { name: '', school: '', age: '', class: '', principal: '', photo: null };
    document.getElementById('student-name-input').value = '';
    document.getElementById('school-name-input').value = '';
    document.getElementById('student-age-input').value = '';
    document.getElementById('student-class-input').value = '';
    document.getElementById('principal-name-input').value = '';
    document.getElementById('photo-input').value = '';
    document.getElementById('photo-preview').innerHTML = '';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('topic-container').style.display = 'block';
}

function downloadIdCard() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size for ID card
    canvas.width = 600;
    canvas.height = 380;
    
    // Orange gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ff6b35');
    gradient.addColorStop(1, '#f7931e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dotted pattern overlay
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for (let x = 0; x < canvas.width; x += 15) {
        for (let y = 0; y < canvas.height; y += 15) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    
    // Header section
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(0, 0, canvas.width, 60);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 স্মার্ট কুইজ সিস্টেম 🎓', canvas.width / 2, 38);
    
    // Photo section
    if (studentDetails.photo) {
        const img = new Image();
        img.onload = function() {
            // White photo frame
            ctx.fillStyle = 'white';
            ctx.fillRect(40, 80, 126, 146);
            ctx.drawImage(img, 43, 83, 120, 140);
            
            // Continue with text after photo loads
            drawTextContent();
            downloadCanvas();
        };
        img.src = studentDetails.photo;
        return;
    } else {
        // Photo placeholder
        ctx.fillStyle = 'white';
        ctx.fillRect(40, 80, 126, 146);
        ctx.fillStyle = '#ccc';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('📷', 103, 165);
    }
    
    drawTextContent();
    downloadCanvas();
    
    function drawTextContent() {
        const topicNames = {
            bangladesh: 'বাংলাদেশ', science: 'বিজ্ঞান', history: 'ইতিহাস',
            geography: 'ভূগোল', literature: 'সাহিত্য', sports: 'খেলাধুলা',
            technology: 'প্রযুক্তি', climate: 'জলবায়ু', general: 'সাধারণ জ্ঞান'
        };
        
        // Student name
        ctx.fillStyle = 'white';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(studentDetails.name.toUpperCase(), 190, 110);
        
        // Student details
        ctx.font = '16px Arial';
        ctx.fillText('স্কুল: ' + studentDetails.school, 190, 140);
        ctx.fillText('শ্রেণী: ' + studentDetails.class + ' | বয়স: ' + studentDetails.age, 190, 165);
        ctx.fillText('প্রধান শিক্ষক: ' + studentDetails.principal, 190, 190);
        ctx.fillText('কুইজ বিষয়: ' + topicNames[currentTopic], 190, 215);
        ctx.fillText('স্কোর: ' + score + '/৩০', 190, 240);
        
        // Footer
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, 320, canvas.width, 60);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('তারিখ: ' + new Date().toLocaleDateString('bn-BD'), canvas.width / 2, 355);
    }
    
    function downloadCanvas() {
        const link = document.createElement('a');
        link.download = studentDetails.name + '_ID_Card.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}

// Mobile Navigation Functions
function toggleNav() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

function goHome() {
    location.reload();
}

function showIdCreator() {
    document.getElementById('topic-container').style.display = 'none';
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('id-creator-container').style.display = 'block';
    document.getElementById('nav-menu').classList.remove('active');
}

let onlyIdData = { photo: null };

function createOnlyId() {
    const name = document.getElementById('id-name-input').value.trim();
    const school = document.getElementById('id-school-input').value.trim();
    const age = document.getElementById('id-age-input').value.trim();
    const studentClass = document.getElementById('id-class-input').value.trim();
    const principal = document.getElementById('id-principal-input').value.trim();
    
    if (!name || !school || !age || !studentClass || !principal) {
        alert('অনুগ্রহ করে সব তথ্য পূরণ করুন!');
        return;
    }
    
    const year = new Date().getFullYear();
    const nameCode = name.substring(0, 2).toUpperCase();
    const schoolCode = school.substring(0, 2).toUpperCase();
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const studentId = `${year}${nameCode}${schoolCode}${randomNum}`;
    
    onlyIdData = { name, school, age, class: studentClass, principal, photo: onlyIdData.photo, studentId };
    
    document.querySelector('#id-creator-container .student-form').style.display = 'none';
    document.getElementById('only-id-display').style.display = 'block';
    document.getElementById('only-student-id').textContent = studentId;
}

function downloadOnlyId() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 600;
    canvas.height = 380;
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ff6b35');
    gradient.addColorStop(1, '#f7931e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 স্মার্ট কুইজ সিস্টেম 🎓', canvas.width / 2, 38);
    
    if (onlyIdData.photo) {
        const img = new Image();
        img.onload = function() {
            ctx.fillStyle = 'white';
            ctx.fillRect(40, 80, 126, 146);
            ctx.drawImage(img, 43, 83, 120, 140);
            drawIdContent();
            downloadCanvas();
        };
        img.src = onlyIdData.photo;
    } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(40, 80, 126, 146);
        ctx.fillStyle = '#ccc';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('📷', 103, 165);
        drawIdContent();
        downloadCanvas();
    }
    
    function drawIdContent() {
        ctx.fillStyle = 'white';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(onlyIdData.name.toUpperCase(), 190, 110);
        
        ctx.font = '16px Arial';
        ctx.fillText('স্কুল: ' + onlyIdData.school, 190, 140);
        ctx.fillText('শ্রেণী: ' + onlyIdData.class + ' | বয়স: ' + onlyIdData.age, 190, 165);
        ctx.fillText('প্রধান শিক্ষক: ' + onlyIdData.principal, 190, 190);
        ctx.fillText('আইডি: ' + onlyIdData.studentId, 190, 215);
        
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, 320, canvas.width, 60);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('তারিখ: ' + new Date().toLocaleDateString('bn-BD'), canvas.width / 2, 355);
    }
    
    function downloadCanvas() {
        const link = document.createElement('a');
        link.download = onlyIdData.name + '_Student_ID.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}

// Pass Code Functions
function generatePassCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function verifyCode() {
    const inputCode = document.getElementById('code-input').value.trim().toUpperCase();
    const storedCode = localStorage.getItem('currentPassCode');
    
    if (inputCode === storedCode) {
        document.getElementById('code-verification').style.display = 'none';
        document.getElementById('ai-input').focus();
        
        const chat = document.getElementById('ai-chat');
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'ai-message';
        welcomeMsg.innerHTML = '<strong>AI:</strong> স্বাগতম! কোড যাচাই সম্পন্ন। আমি আপনার AI সহায়ক। বাংলাদেশ, বিজ্ঞান, প্রযুক্তি, শিক্ষা, স্বাস্থ্য সহ যেকোনো বিষয়ে প্রশ্ন করুন।';
        chat.appendChild(welcomeMsg);
        chat.scrollTop = chat.scrollHeight;
    } else {
        alert('ভুল কোড! কৃপয়া পাস করার পর প্রাপ্ত কোড দিন।');
    }
}

function handleCodeEnter(event) {
    if (event.key === 'Enter') {
        verifyCode();
    }
}

// AI Assistant Functions
function toggleAI() {
    const modal = document.getElementById('ai-modal');
    if (modal.style.display === 'none' || !modal.style.display) {
        modal.style.display = 'flex';
        
        // Reset AI chat and show code verification
        const chat = document.getElementById('ai-chat');
        chat.innerHTML = '<div class="ai-message"><strong>AI:</strong> সালাম! AI সহায়ক ব্যবহার করতে আপনার পাস কোড দিন।</div>';
        document.getElementById('code-verification').style.display = 'flex';
        document.getElementById('code-input').value = '';
        document.getElementById('code-input').focus();
    } else {
        modal.style.display = 'none';
    }
}

function handleAIEnter(event) {
    if (event.key === 'Enter') {
        askAI();
    }
}

// AI Knowledge Base
const aiKnowledge = {
    greetings: ['হ্যালো', 'সালাম', 'আসসালামু আলাইকুম', 'হাই', 'নমস্কার'],
    identity: {
        'brighters': 'হ্যাঁ, আমি জানি। Brighters একটি অলাভজনক সংস্থা।',
        'sohi': 'আমি সোহি। আরও জানতে চান?',
        'বয়স': 'আমি আমার বয়স জানি না।',
        'কে': 'আমি জানি না আমি কে।',
        'আমি কে': 'সোহি।'
    },
    responses: {
        bangladesh: {
            keywords: ['বাংলাদেশ', 'রাজধানী', 'ঢাকা', 'স্বাধীনতা', 'মুক্তিযুদ্ধ', 'জাতীয়'],
            answer: 'বাংলাদেশ দক্ষিণ এশিয়ার একটি স্বাধীন দেশ। রাজধানী ঢাকা। ১৯৭১ সালে স্বাধীনতা লাভ করে।'
        },
        science: {
            keywords: ['বিজ্ঞান', 'পদার্থ', 'রসায়ন', 'জীববিজ্ঞান', 'গণিত', 'পানি', 'অক্সিজেন'],
            answer: 'বিজ্ঞান হলো প্রকৃতি ও মহাবিশ্ব সম্পর্কে জ্ঞান। পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞান এর প্রধান শাখা।'
        },
        technology: {
            keywords: ['প্রযুক্তি', 'কম্পিউটার', 'ইন্টারনেট', 'মোবাইল', 'সফটওয়্যার'],
            answer: 'প্রযুক্তি আমাদের জীবনকে সহজ করেছে। কম্পিউটার, ইন্টারনেট ও মোবাইল আধুনিক প্রযুক্তির উদাহরণ।'
        },
        education: {
            keywords: ['শিক্ষা', 'পড়াশোনা', 'স্কুল', 'কলেজ', 'বিশ্ববিদ্যালয়', 'পরীক্ষা'],
            answer: 'শিক্ষা মানুষের মৌলিক অধিকার। নিয়মিত পড়াশোনা ও অনুশীলনের মাধ্যমে জ্ঞান অর্জন করা যায়।'
        },
        health: {
            keywords: ['স্বাস্থ্য', 'খাবার', 'ব্যায়াম', 'ডাক্তার', 'ওষুধ', 'রোগ'],
            answer: 'স্বাস্থ্যই সম্পদ। সুষম খাবার, নিয়মিত ব্যায়াম ও পর্যাপ্ত বিশ্রাম স্বাস্থ্য ভালো রাখে।'
        },
        medical: {
            keywords: ['ডাক্তার', 'চিকিৎসক', 'হাসপাতাল', 'ক্লিনিক', 'মেডিকেল'],
            answer: 'চিকিৎসা সেবা অত্যন্ত গুরুত্বপূর্ণ। বিশেষজ্ঞ ডাক্তারগণ বিভিন্ন রোগের চিকিৎসা প্রদান করেন।'
        },
        general: {
            keywords: ['কী', 'কেন', 'কিভাবে', 'কোথায়', 'কখন', 'কে'],
            answer: 'এটি একটি সাধারণ প্রশ্ন। আরও নির্দিষ্ট প্রশ্ন করলে আমি ভালো উত্তর দিতে পারব।'
        }
    }
};

function findBestResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Check for greetings
    for (let greeting of aiKnowledge.greetings) {
        if (lowerQuestion.includes(greeting.toLowerCase())) {
            return 'আসসালামু আলাইকুম! আমি আপনার AI সহায়ক। কোন বিষয়ে জানতে চান?';
        }
    }
    
    // Check for identity questions
    for (let key in aiKnowledge.identity) {
        if (lowerQuestion.includes(key.toLowerCase())) {
            return aiKnowledge.identity[key];
        }
    }
    
    // Find best matching topic
    let bestMatch = null;
    let maxMatches = 0;
    
    for (let topic in aiKnowledge.responses) {
        const keywords = aiKnowledge.responses[topic].keywords;
        let matches = 0;
        
        for (let keyword of keywords) {
            if (lowerQuestion.includes(keyword.toLowerCase())) {
                matches++;
            }
        }
        
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = topic;
        }
    }
    
    if (bestMatch && maxMatches > 0) {
        return aiKnowledge.responses[bestMatch].answer;
    }
    
    // Default responses for common questions
    if (lowerQuestion.includes('নাম')) {
        return 'আমি সোহি - স্মার্ট কুইজ সিস্টেমের AI সহায়ক। আপনার যেকোনো প্রশ্নের উত্তর দেওয়ার চেষ্টা করি।';
    }
    
    if (lowerQuestion.includes('সময়')) {
        return 'এখন সময়: ' + new Date().toLocaleString('bn-BD');
    }
    
    if (lowerQuestion.includes('ধন্যবাদ')) {
        return 'আপনাকেও ধন্যবাদ! আরও কোনো প্রশ্ন থাকলে জিজ্ঞাসা করুন।';
    }
    
    // Default response
    return 'দুঃখিত, আমি এই প্রশ্নের উত্তর জানি না। অন্য কোনো প্রশ্ন করুন বা আরও সহজ ভাষায় জিজ্ঞাসা করুন।';
}

function askAI() {
    // Use enhanced AI function if available, otherwise fallback to basic
    if (typeof askAIEnhanced === 'function') {
        askAIEnhanced();
        return;
    }
    
    // Fallback to basic AI
    // Check if code verification is still visible
    if (document.getElementById('code-verification').style.display !== 'none') {
        alert('প্রথমে পাস কোড দিন!');
        return;
    }
    
    const input = document.getElementById('ai-input');
    const question = input.value.trim();
    
    if (!question) return;
    
    const chat = document.getElementById('ai-chat');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message';
    userMsg.innerHTML = `<strong>আপনি:</strong> ${question}`;
    userMsg.style.background = '#e3f2fd';
    chat.appendChild(userMsg);
    
    // Clear input
    input.value = '';
    
    // Add loading message
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'ai-message';
    loadingMsg.innerHTML = '<strong>AI:</strong> চিন্তা করছি... 🤔';
    chat.appendChild(loadingMsg);
    
    // Scroll to bottom
    chat.scrollTop = chat.scrollHeight;
    
    // Generate AI response
    setTimeout(() => {
        const response = findBestResponse(question);
        loadingMsg.innerHTML = `<strong>AI:</strong> ${response}`;
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

// Performance tracking
let quizStartTime = null;
let questionStartTime = null;
let performanceData = [];

// Keyboard shortcuts
function handleKeyboardShortcuts(event) {
    if (document.getElementById('quiz-container').style.display === 'block') {
        const key = event.key;
        if (key >= '1' && key <= '4') {
            const optionIndex = parseInt(key) - 1;
            const options = document.querySelectorAll('.option');
            if (options[optionIndex] && options[optionIndex].style.pointerEvents !== 'none') {
                selectOption(optionIndex);
            }
        }
    }
}

// Auto-save progress
function saveQuizProgress() {
    if (currentQuestion > 0) {
        const progressData = {
            topic: currentTopic,
            currentQuestion: currentQuestion,
            score: score,
            userAnswers: userAnswers,
            studentDetails: studentDetails,
            timestamp: Date.now()
        };
        localStorage.setItem('quizProgress', JSON.stringify(progressData));
    }
}

// Load saved progress
function loadQuizProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        // Check if progress is recent (within 1 hour)
        if (Date.now() - progress.timestamp < 3600000) {
            if (confirm('আপনার একটি অসম্পূর্ণ কুইজ পাওয়া গেছে। এটি চালিয়ে যেতে চান?')) {
                currentTopic = progress.topic;
                currentQuestion = progress.currentQuestion;
                score = progress.score;
                userAnswers = progress.userAnswers;
                studentDetails = progress.studentDetails;
                questions = getQuestionsForId(studentDetails.studentId, currentTopic);
                startQuizDirectly();
                return true;
            }
        }
        localStorage.removeItem('quizProgress');
    }
    return false;
}

// Enhanced analytics
function trackQuestionPerformance(questionIndex, timeTaken, isCorrect) {
    performanceData.push({
        questionIndex,
        timeTaken,
        isCorrect,
        timestamp: Date.now()
    });
}

// Offline support
function checkOnlineStatus() {
    if (!navigator.onLine) {
        showOfflineMessage();
    }
}

function showOfflineMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed; top: 70px; left: 50%; transform: translateX(-50%);
        background: #f39c12; color: white; padding: 10px 20px;
        border-radius: 20px; z-index: 1001; font-weight: bold;
    `;
    message.textContent = '📡 অফলাইন মোড - ডেটা স্থানীয়ভাবে সংরক্ষিত হবে';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 5000);
}

// Print functionality
function printResults() {
    const printContent = document.getElementById('result-container').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>কুইজ ফলাফল - ${studentDetails.name}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .pass { color: #00b894; }
                .fail { color: #e74c3c; }
            </style>
        </head>
        <body>${printContent}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Share results
function shareResults() {
    if (navigator.share) {
        navigator.share({
            title: 'স্মার্ট কুইজ সিস্টেম - আমার ফলাফল',
            text: `আমি ${currentTopic} বিষয়ে কুইজে ${score}/30 পেয়েছি!`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers without Web Share API
        const text = `আমি স্মার্ট কুইজ সিস্টেমে ${currentTopic} বিষয়ে ${score}/30 পেয়েছি!`;
        navigator.clipboard.writeText(text).then(() => {
            alert('ফলাফল কপি হয়েছে! এখন যেকোনো জায়গায় পেস্ট করুন।');
        });
    }
}

window.onload = function() {
    // Check for saved progress first
    if (loadQuizProgress()) {
        return;
    }
    
    // Check if student data exists and show ID in nav
    const savedStudent = localStorage.getItem('studentData');
    if (savedStudent) {
        const student = JSON.parse(savedStudent);
        document.getElementById('nav-student-id').style.display = 'block';
        document.getElementById('nav-id-display').textContent = student.studentId;
    }
    
    // Photo upload handler
    document.getElementById('photo-input').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('ছবির সাইজ ৫ MB এর কম হতে হবে!');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                studentDetails.photo = e.target.result;
                document.getElementById('photo-preview').innerHTML = 
                    `<img src="${e.target.result}" alt="Preview" style="width: 100px; height: 120px; object-fit: cover; border-radius: 10px; border: 2px solid #ddd;">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Online/offline detection
    window.addEventListener('online', () => {
        console.log('অনলাইন হয়েছে');
    });
    
    window.addEventListener('offline', () => {
        showOfflineMessage();
    });
    
    // Auto-save progress every 30 seconds during quiz
    setInterval(() => {
        if (document.getElementById('quiz-container').style.display === 'block') {
            saveQuizProgress();
        }
    }, 30000);
    
    // Close nav menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Check online status
    checkOnlineStatus();
};