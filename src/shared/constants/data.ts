import { CertificateIcon } from "../icons/certificate-icon";
import { HandIcon } from "../icons/hand-icon";
import { LikeIcon } from "../icons/like-icon";
import ServiceImage1 from "../../assets/w1.jpg";
import ServiceImage2 from "../../assets/w2.jpg";
import ServiceImage3 from "../../assets/w3.jpg";
import LocationIcon from "../icons/location-icon";
import MailIcon from "../icons/mail-icon";
import PhoneIcon from "../icons/phone-icon";

export const FeaturedData: {
  title: string;
  text: string;
  icon: () => JSX.Element;
}[] = [
  {
    icon: HandIcon,
    title: "Найкращі ціни",
    text: "Всі ремонтні роботи та послуги доступні за доступними цінами",
  },
  {
    icon: LikeIcon,
    title: "100% гарантія",
    text: "На всі наші ремонти та послуги надається гарантія",
  },
  {
    icon: CertificateIcon,
    title: "Сертифіковані механіки",
    text: "Усі наші механіки кваліфіковані та регулярно проходять навчання.",
  },
];

export const ServiceData: { image: string; title: string }[] = [
  {
    image: ServiceImage1,
    title: "Заміна масла та рідин",
  },
  {
    image: ServiceImage2,
    title: "Сервіс балансування коліс",
  },
  {
    image: ServiceImage3,
    title: "послуги з капітального ремонту",
  },
];

export const LatestWorkData = {
  name: "ЗАПЧАСТИНИ SUBARU WRX STI",
  description: "Великий вибір оригінальних запчастин для вашого автомобіля.",
  options: [
    "Модель: Subaru Impreza",
    "Підмодель: 4 doors 2.0L 5MT AWD (152 HP)",
    "Двигун: 2000 cc turbo tipe EJ20.",
    "Колір: Blue",
  ],
};

export const ReviewsData = [
  {
    text: "Професійний автосервіс забезпечив якісний ремонт та обслуговування мого автомобіля. Рекомендую!",
    author: {
      name: "Лісняк Ростик",
      city: "Тернопіль",
    },
  },
  {
    text: "Вражаючий сервіс! Швидкий ремонт і доброзичливий персонал. З задоволенням обернусь ще!",
    author: {
      name: "Шлапак Марта",
      city: "Львів",
    },
  },
  {
    text: "Неймовірний автосервіс! Якісний ремонт за доступною ціною. Велика подяка за професіоналізм!",
    author: {
      name: "Лісняк Максим",
      city: "Київ",
    },
  },
];

export const ContactInfoData = [
  {
    icon: LocationIcon,
    title: "Місцезнаходження",
    text: "Тернопіль, вул. Львівська 6",
  },
  {
    type: "email",
    icon: MailIcon,
    title: "Електронна пошта",
    text: "primadonacars@gmail.com",
  },
  {
    type: "phone",
    icon: PhoneIcon,
    title: "телефон",
    text: "+380 97 670 8905",
  },
];

export const FAQsData = [
  {
    title: "ЯК ЧАСТО ПОТРІБНО ЗМІНЮВАТИ МАСЛО?",
    text: " Масло слід змінювати кожні 5,000-10,000 кілометрів або раз на 6-12 місяців, залежно від стилю водіння та рекомендацій виробника.",
  },
  {
    title: "Коли міняти масло?",
    text: "Коли масло втрачає свою консистенцію, стає забрудненим або пройшов встановлений інтервал обслуговування, слід провести його заміну.",
  },
  {
    title: "Коли я повинен замінити батарею?",
    text: "Батарею рекомендується замінювати кожні 3-5 років або при виявленні ознак слабкості, таких як важке завантаження або проблеми з запуском.",
  },
  {
    title: "Коли потрібно перевіряти рівень рідин?",
    text: "Рівень рідин, таких як охолоджувальна рідина та рідина для гальмівної системи, слід перевіряти щоразу при проведенні технічного обслуговування або щонайменше раз на місяць.",
  },
  {
    title: "Коли слід замінити гальмівні колодки?",
    text: "Гальмівні колодки слід замінювати, коли їх товщина зменшується до 3-4 мм, або коли вони показують ознаки стирання, що виявляється у погіршенні гальмівної реакції або скрипі під час гальмування.",
  },
  {
    title: "Коли потрібно заміняти шини?",
    text: "Потрібно заміняти шини, коли глибина малюнка протектора досягає 2 мм або менше, або коли шини мають ознаки фізичного зносу, пошкоджень, тріщин або видимих ознак старіння",
  },
];
