export type CardData = typeof cardData;

export const DomainLinks = {
  MainDomain: { name: "Ayspire", href: "/" },
  Policy: {
    Terms: { name: "Terms of Service", href: "/policy/terms" },
    PrivacyPolicy: { name: "Privacy Policy", href: "/policy/privacy" },
    UseRestrictionsPolicy: {
      name: "Use Restrictions Policy",
      href: "/policy/usage-restrictions",
    },
    CancellationPolicy: {
      name: "Cancellation Policy",
      href: "/policy/cancellation",
    },
    RefundPolicy: { name: "Refund Policy", href: "/policy/refund" },
    SupportPolicy: { name: "Support Policy", href: "/policy/support" },
  },
  SupportUrl: { name: "Help Center", href: "https://support.ayspire.in" },
  Email: {
    CompanyEmail: {
      name: "Corporate Email",
      href: "info@ayspire.com",
    },
    EnquiryEmail: {
      name: "Enquiry Email",
      href: "info@ayspire.com",
    },
    CareerEmail: {
      name: "Career Email",
      href: "info@ayspire.com",
    },
  },
  Phone: {
    CompanyPhone: {
      name: "Ayspire Phone",
      href: "+1 647 526 5661",
    },
  },
  Address: {
    RegisteredOffice: {
      name: "Canada",
      href: "https://goo.gl/maps/ACD8X7nirZqJKdcE9", //update this with actual address
    },
    GenericAddress:{
      name: "Canada ",
      href: "#",
    },
  },
};

export const cardData = [
  {
    title: "The Future of Artificial Intelligence",
    description:
      "Artificial intelligence is transforming industries, from healthcare to finance. Learn how AI is shaping the future.",
    imageUrl: "/images/blogs/1.jpg",
    readMoreLink: "/blog/future-of-ai",
  },
  {
    title: "Make Better Decisions with Analytics",
    description:
      "Unlock the power of data-driven insights to make smarter, faster and more impactful decisions for your business.",
    imageUrl: "/images/blogs/2.jpg",
    readMoreLink: "/blog/better-decision-with-analytics",
  },
  {
    title: "Master Your Personal Finance",
    description:
      "Take control of your financial future with smart strategies and tools. Learn how to budget, save and invest for long-term success.",
    imageUrl: "/images/blogs/3.jpg",
    readMoreLink: "/blog/personal-finance",
  },
];

export const ProductsAndServices = [
  {
    alt: "Financial Planning",
    text: "Strategic budgeting for better financial stability.",
  },
  {
    alt: "Business Insights",
    text: "Data-driven insights to optimize business decisions.",
  },
  {
    alt: "Expense Analytics",
    text: "Track and analyze spending patterns effectively.",
  },
  {
    alt: "Revenue Forecasting",
    text: "Predict future earnings with advanced analytics.",
  },
  {
    alt: "Personal Budgeting",
    text: "Manage personal finances with smart budgeting tools.",
  },
  {
    alt: "Profit Optimization",
    text: "Maximize profitability through strategic planning.",
  },
  {
    alt: "Manpower Outsourcing",
    text: "Efficient workforce solutions for business growth.",
  },
];
