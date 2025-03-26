'use client'

export const getMenus = (user) => {
    const access = user?.role_id == 1 ? true : false;

    const admin = [
        { title: "dashboard", icon: "Home", href: "/dashboard" },
        
        // مدیریت محصول (کتاب صوتی و کتاب متنی)
        {
            title: "product_management", icon: "Book", open: false,
            childs: [
                { title: "audio_books", icon: "Headphones", href: "/audio-books" },
                { title: "text_books", icon: "BookOpen", href: "/text-books" },
            ]
        },

        // مدیریت اطلاعات پایه (استان و شهر، ملیت، دسته بندی ها، برچسب ها، انتشارات)
        {
            title: "base_management", icon: "Database", open: false,
            childs: [
                { title: "provinces", icon: "MapPin", href: "/provinces" },
                { title: "cities", icon: "Map", href: "/cities" },
                { title: "nationalities", icon: "Globe", href: "/countries" },
                { title: "categories", icon: "Layers", href: "/book-categories" },
                { title: "tags", icon: "Tag", href: "/keywords" },
                { title: "publishers", icon: "Bookmark", href: "/publishers" },
            ]
        },

        // مدیریت پدیدآورندگان (نویسندگان، راویان، مترجمان)
        {
            title: "creators_management", icon: "Users", open: false,
            childs: [
                { title: "authors", icon: "PenTool", href: "/authors" },
                { title: "narrators", icon: "Mic", href: "/narrators" },
                { title: "translators", icon: "Globe", href: "/translators" },
            ]
        },
        
        // مدیریت کاربران (پرسنل، کاربران سایت)
        {
            title: "users_management", icon: "Users", open: false,
            childs: [
                { title: "personnels", icon: "User", href: "/personnels" },
                { title: "users", icon: "Users", href: "/users" },
            ]
        },

        // مدیریت خریدها (پرداخت های موفق و ناموفق)
        {
            title: "purchase_management", icon: "ShoppingCart", open: false,
            childs: [
                { title: "successful_payments", icon: "CheckCircle", href: "/successful-payments" },
                { title: "failed_payments", icon: "XCircle", href: "/failed-payments" },
            ]
        },

        // مدیریت محتوا (بلاگ، دسته بندی بلاگ، اسلایدر و بنر، سوالات متداول، دسته بندی سوالات متداول، تنظیمات، کامنت ها)
        {
            title: "content_management", icon: "FileText", open: false,
            childs: [
                { title: "blogs", icon: "File", href: "/blogs" },
                { title: "blog_categories", icon: "Folder", href: "/blog-subjects" },
                { title: "sliders", icon: "Image", href: "/sliders" },
                { title: "faqs", icon: "HelpCircle", href: "/faqs" },
                { title: "faq_categories", icon: "Folder", href: "/faq-subjects" },
                { title: "contact-us", icon:"MessageCircle", href:"/contact-us"},
                { title: "banners", icon:"Instagram", href:"/banners"}, 
                { title: "banner-positions", icon:"Maximize", href:"/banner-positions"},
                // { title: "settings", icon: "Settings", href: "/settings" },
            ]
        },
    ];

    const commonMenus = [
        { title: "profile", icon: "User", href: "/profile" },
        { title: "change_password", icon: "Lock", href: "/change-password" },
    ];

    return access ? [...admin, ...commonMenus] : [...commonMenus];
};