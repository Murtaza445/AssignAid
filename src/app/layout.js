import "../app/assets/css/tailwind.css"
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google'
import Script from "next/script";

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600', '700'],
})

export const metadata = {
  title: 'AssignAid - Assignment Help Service for Students | Expert Academic Writing Support',
  description: 'Get professional assignment help service from AssignAid. Expert academic writers available 24/7 for essays, research papers, coursework, dissertations, and homework help. Affordable prices, plagiarism-free, and on-time delivery guaranteed.',

  keywords: [
    "assignment help service",
    "online assignment help",
    "affordable assignment writing service",
    "professional assignment writers",
    "academic writing help",
    "essay writing service",
    "research paper help online",
    "dissertation writing assistance",
    "coursework help service",
    "university assignment support",
    "college homework help",
    "plagiarism-free assignments",
    "urgent assignment help",
    "assignment help for students",
    "custom academic writing services",
    "top rated assignment help",
    "best assignment help websites",
    "24/7 assignment writing support",
    "assignment editing and proofreading service"
  ],

  authors: [{ name: "AssignAid Team" }],
  creator: "AssignAid",
  publisher: "AssignAid",

  openGraph: {
    title: "AssignAid - Trusted Assignment Help Service for Students",
    description: "Expert assignment writing service for students worldwide. Get essays, dissertations, coursework, and research papers written by professionals. Affordable, reliable, and plagiarism-free.",
    url: "https://www.assignaid.com",
    siteName: "AssignAid",
    images: [
      {
        url: "/images/favicon.ico",
        width: 1200,
        height: 630,
        alt: "AssignAid - Assignment Help Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AssignAid - Professional Assignment Help Service",
    description: "Affordable and reliable assignment help for students. Essays, dissertations, and coursework delivered on time by expert academic writers.",
    site: "@assignaid",
    creator: "@assignaid",
    images: ["/images/favicon.ico"],
  },

  alternates: {
    canonical: "https://www.assignaid.com",
    languages: {
      "en-US": "https://www.assignaid.com",
      "en-GB": "https://www.assignaid.com",
    },
  },

  category: "Education, Academic Writing, Student Services",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900`}
      >
        {children}

        {/* WhatsApp Chat Widget */}
        <Script id="wa-plus-script" strategy="afterInteractive">
          {`
            var url = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var options = {
              "enabled": true,
              "chatButtonSetting": {
                "backgroundColor": "#16BE45",
                "ctaText": "Message Us",
                "borderRadius": "8",
                "marginLeft": "20",
                "marginBottom": "20",
                "marginRight": "20",
                "position": "right",
                "textColor": "#ffffff",
                "phoneNumber": "+1 (281) 303-9588‬",
                "messageText": "👋🏻Hello, Welcome to AssignAid. How can we Help you?",
                "trackClick": true
              },
              "brandSetting": {
                "brandName": "AssignAid",
                "brandSubTitle": "Replies within 1 day",
                "headerTextColor": "#fff",
                "brandImg": "https://assign-aid.vercel.app/images/favicon.ico",
                "welcomeText": "Welcome to AssignAid!! \\nHow can we Help you?",
                "messageText": "Hello, I have a question about your services.",
                "backgroundColor": "#f59e0b",
                "ctaText": "Start Chat",
                "borderRadius": "8",
                "autoShow": false,
                "btnColor": "#16BE45",
                "phoneNumber": "+1 (281) 303-9588",
                "trackClick": true
              }
            };
            s.onload = function() {
              CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          `}
        </Script>
      </body>
    </html>
  );
}
