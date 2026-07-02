import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/2dd93f20-681a-4930-9fd3-88e818ffaf5e/files/b06da20c-fcce-4a4d-b8ab-754ec55aaa54.jpg';

const GALLERY = [
  { src: 'https://cdn.poehali.dev/projects/2dd93f20-681a-4930-9fd3-88e818ffaf5e/files/0b50a67e-2ff7-4c32-a372-b41992988c45.jpg', title: 'Ухоженные клумбы' },
  { src: 'https://cdn.poehali.dev/projects/2dd93f20-681a-4930-9fd3-88e818ffaf5e/files/aab1709e-7e1c-497c-9866-d9a9b16d51d4.jpg', title: 'Аккуратные грядки' },
  { src: HERO_IMG, title: 'Зелёный газон' },
];

const PHONE_DISPLAY = '8 (929) 365-63-56';
const PHONE_TEL = 'tel:+79293656356';
const PHONE_SMS = 'sms:+79293656356';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'pricing', label: 'Прайс' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О нас' },
];

const SERVICES = [
  { icon: 'Sprout', title: 'Прополка и уход', text: 'Уберём сорняки, приведём грядки и клумбы в порядок.', color: 'bg-primary' },
  { icon: 'Droplets', title: 'Полив растений', text: 'Регулярный полив газона, огорода и цветников по графику.', color: 'bg-[hsl(200_80%_45%)]' },
  { icon: 'Hammer', title: 'Хозработы', text: 'Мелкий ремонт, сборка, покос травы и другие задачи по участку.', color: 'bg-accent' },
  { icon: 'Trash2', title: 'Уборка участка', text: 'Вывоз мусора, уборка листвы, наведение чистоты вокруг дома.', color: 'bg-[hsl(24_85%_55%)]' },
  { icon: 'Dog', title: 'Уход за питомцами', text: 'Присмотр за животными, кормление и выгул, пока вы в отъезде.', color: 'bg-primary' },
  { icon: 'Home', title: 'Присмотр за домом', text: 'Проверим дом, польём цветы и позаботимся о порядке в ваше отсутствие.', color: 'bg-[hsl(280_50%_50%)]' },
];

const PRICING = [
  { name: 'Разовый выезд', price: '1 500 ₽', unit: 'за визит', features: ['Прополка или полив', 'До 3 часов работы', 'Отчёт с фото'], popular: false },
  { name: 'Регулярный уход', price: '5 900 ₽', unit: 'в месяц', features: ['4 визита в месяц', 'Любые работы по участку', 'Персональный менеджер', 'Скидка 15%'], popular: true },
  { name: 'Питомцы и дом', price: 'от 800 ₽', unit: 'в день', features: ['Кормление и выгул', 'Присмотр за домом', 'Ежедневный отчёт'], popular: false },
];

const REVIEWS = [
  { name: 'Ирина В.', text: 'Уезжали на две недели — за участком и котом ухаживали идеально! Всё в отчётах с фото.', rating: 5 },
  { name: 'Дмитрий К.', text: 'Приезжают точно по графику, газон и грядки в отличном состоянии. Рекомендую!', rating: 5 },
  { name: 'Анна и Пётр', text: 'Наконец-то дача перестала быть источником стресса. Спасибо команде за заботу!', rating: 5 },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-display font-extrabold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <Icon name="Leaf" size={20} />
            </span>
            ЗелёныйДом
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium hover:text-primary transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <a href={PHONE_TEL} className="rounded-full font-semibold">
            <Button className="rounded-full font-semibold gap-2">
              <Icon name="Phone" size={16} /> Позвонить
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-24 grain">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 animate-blob" />
        <div className="absolute top-40 -right-10 w-80 h-80 bg-accent/30 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="container grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
              <Icon name="Sparkles" size={16} /> Забота о вашем участке и питомцах
            </span>
            <h1 className="font-display font-black text-5xl md:text-6xl leading-[1.05] mb-6">
              Ваш участок <span className="text-gradient">под надёжной</span> опекой
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Прополка, полив, уборка и хозработы. А пока вы в отъезде — присмотрим за домом и любимыми питомцами.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={PHONE_TEL}>
                <Button size="lg" className="rounded-full font-semibold text-base h-13 px-8 hover-scale gap-2">
                  <Icon name="Phone" size={18} /> Позвонить
                </Button>
              </a>
              <a href={PHONE_SMS}>
                <Button size="lg" variant="outline" className="rounded-full font-semibold text-base h-13 px-8 border-2 gap-2">
                  <Icon name="MessageSquare" size={18} /> Написать SMS
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-8 mt-10">
              <div>
                <div className="font-display font-extrabold text-3xl text-primary">5 лет</div>
                <div className="text-sm text-muted-foreground">опыт работы</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display font-extrabold text-3xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display font-extrabold text-3xl text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">средняя оценка</div>
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-6" />
            <img src={HERO_IMG} alt="Уход за участком" className="relative rounded-[3rem] shadow-2xl object-cover w-full aspect-square" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent text-accent-foreground">
                <Icon name="ShieldCheck" size={22} />
              </span>
              <div>
                <div className="font-semibold text-sm">Отчёт с фото</div>
                <div className="text-xs text-muted-foreground">после каждого визита</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-muted/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр заботы о вашем загородном доме</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group bg-card rounded-3xl p-7 border border-border hover-scale hover:shadow-xl hover:border-primary/40 transition-all">
                <span className={`grid place-items-center w-14 h-14 rounded-2xl text-white mb-5 ${s.color}`}>
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Наши работы</h2>
            <p className="text-muted-foreground text-lg">Так выглядят участки после нашей заботы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {GALLERY.map((g) => (
              <div key={g.title} className="group relative rounded-3xl overflow-hidden hover-scale">
                <img src={g.src} alt={g.title} className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="font-display font-bold text-lg text-background">{g.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-muted/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены без скрытых доплат</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border-2 transition-all hover-scale ${
                  p.popular ? 'border-primary bg-primary text-primary-foreground shadow-2xl' : 'border-border bg-card'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    ПОПУЛЯРНОЕ
                  </span>
                )}
                <h3 className="font-display font-bold text-xl mb-1">{p.name}</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="font-display font-black text-4xl">{p.price}</span>
                  <span className={`text-sm mb-1 ${p.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{p.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={18} className={p.popular ? 'text-accent' : 'text-primary'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollTo('contact')}
                  className={`w-full rounded-full font-semibold ${p.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
                  variant={p.popular ? 'default' : 'outline'}
                >
                  Выбрать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Нам доверяют самое дорогое — дом и питомцев</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card rounded-3xl p-7 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-bold">
                    {r.name[0]}
                  </span>
                  <span className="font-semibold">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-muted/40">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-6">
              «ЗелёныйДом» — команда с опытом работы 5 лет, которая любит порядок и заботу. Мы берём на себя всё, что связано с уходом за участком, домом и питомцами, чтобы вы могли спокойно отдыхать.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'Award', title: '5 лет опыта', text: 'Проверенные и ответственные специалисты' },
                { icon: 'Clock', title: 'Точно по графику', text: 'Приезжаем в удобное вам время' },
                { icon: 'Camera', title: 'Фото-отчёты', text: 'Вы видите результат каждой работы' },
                { icon: 'Heart', title: 'С любовью', text: 'Относимся к вашему дому как к своему' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-secondary text-primary">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Accordion type="single" collapsible className="bg-card rounded-3xl border border-border p-4">
            {[
              { q: 'Как быстро вы приедете?', a: 'Обычно мы выезжаем в течение 1–2 дней после заявки, а в срочных случаях — в тот же день.' },
              { q: 'Работаете ли вы зимой?', a: 'Да, зимой мы чистим снег, присматриваем за домом и питомцами круглый год.' },
              { q: 'Как оплачивать услуги?', a: 'Оплата наличными или переводом после выполнения работ. Для регулярного ухода — раз в месяц.' },
              { q: 'Можно ли доверить вам ключи?', a: 'Конечно. Мы заключаем договор и несём полную ответственность за ваш дом.' },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-semibold text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground grain">
        <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Свяжитесь с нами</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Оставьте заявку — перезвоним в течение 15 минут и подберём удобное время.
            </p>
            <div className="space-y-4 mb-6">
              <a href={PHONE_TEL} className="flex items-center gap-3 hover:opacity-80 transition-opacity font-semibold text-lg">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15"><Icon name="Phone" size={20} /></span>
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15"><Icon name="MapPin" size={20} /></span>
                Москва и область
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={PHONE_TEL}>
                <Button size="lg" className="rounded-full font-semibold bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  <Icon name="Phone" size={18} /> Позвонить
                </Button>
              </a>
              <a href={PHONE_SMS}>
                <Button size="lg" variant="outline" className="rounded-full font-semibold gap-2 border-2 border-white/40 bg-transparent text-primary-foreground hover:bg-white/10">
                  <Icon name="MessageSquare" size={18} /> Написать SMS
                </Button>
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border-4 border-white/20 h-64">
              <iframe
                title="Карта зоны обслуживания"
                src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=9"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-card text-card-foreground rounded-3xl p-8 shadow-2xl flex flex-col gap-5"
          >
            <h3 className="font-display font-bold text-2xl">Оставить заявку</h3>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Иван"
                className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Телефон</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (900) 000-00-00"
                className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Какая услуга нужна?</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Например: полив газона раз в неделю"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="rounded-full font-semibold h-13 text-base">
              Отправить заявку <Icon name="Send" size={18} className="ml-1" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-foreground text-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-extrabold">
            <Icon name="Leaf" size={20} /> ЗелёныйДом
          </div>
          <p className="text-sm text-background/60">© 2026 ЗелёныйДом. Уход за участком и питомцами.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;