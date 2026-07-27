import { FormEvent, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const A = `${import.meta.env.BASE_URL}assets/`;

type SectionHeadProps = {
  number: string;
  label: string;
  title: string;
  intro?: string;
  light?: boolean;
};

function SectionHead({ number, label, title, intro, light }: SectionHeadProps) {
  return (
    <header className={`section-head ${light ? "section-head--light" : ""}`}>
      <div className="eyebrow"><span />РАЗДЕЛ {number} / {label}</div>
      <div className="section-head__grid">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}

const philosophy = [
  ["01", "Нет подплиточных пустот", "Эпоксидное поле и виброукладка формируют жёсткую посадку плитки."],
  ["02", "Химическая защита", "Система рассчитана на кислоты, щёлочи, воду, мойку и производственные нагрузки."],
  ["03", "Тендерная логика", "Документы, ТУ, испытания и паспорта качества упрощают защиту решения."],
];

const specs = [
  ["Толщина, мм", "от 8 до 18", "15", "Запас прочности без лишней высоты"],
  ["Водопоглощение, не более", "0,05%", "0,02%", "В 2,5 раза ниже предела ГОСТ"],
  ["Предел прочности при изгибе", "35 МПа", "40 МПа", "На 14% выше нормы"],
  ["Износостойкость, не более", "0,18 г/см²", "0,15 г/см²", "Для зон движения техники"],
  ["Морозостойкость", "100 циклов", "100 циклов", "Закрывает норму"],
  ["Радиационная безопасность", "370 Бк/кг", "115 Бк/кг", "Класс 1, без ограничений"],
  ["Противоскольжение", "R10–R11", "R11 / R12", "Для мокрых зон"],
  ["Термостойкость", "Термошок", ">100°C", "Стабильность при перепадах"],
  ["Химическая стойкость", "по EN 14411", "ULA / HA", "Кислоты и щёлочи"],
];

const install = [
  ["01", "Основание", "Бетон ≥25 МПа, отрыв ≥1,5 МПа; чистое и обеспыленное"],
  ["02", "Грунтовка GLS100", "Сплошной глянцевый слой без пор и матовых пятен"],
  ["03", "GLS400 / GLS500", "Смола + отвердитель; рабочее время 30 / 45 минут"],
  ["04", "Кварцевый песок", "0,3–0,6 мм; 3–7 кг песка на 1 кг смолы"],
  ["05", "X-Bond", "Армирующая сетка с перекрытием полотен в клеевом слое"],
  ["06", "Виброукладка", "Корректировки в течение 60 минут после нанесения"],
  ["07", "Затирка", "Через 8–16 часов; затирочная машина"],
];

const documents = [
  ["Техкарта MATRIX", "100×200×15 мм, R10/R11, <0,05%, термошок >100°C"],
  ["Техкарта виброукладки", "GLS400/GLS500, X-Bond, кварцевый песок"],
  ["FixTile X-Bond", "4×4 мм, 145–160 г/м², ≥1500 Н, pH 12–13"],
  ["Сертификат соответствия", "РОСС RU.32001.04ИБФ1.ОСП28.97016"],
  ["Протокол испытаний", "№90237-ПРГ/26 от 26.03.2026"],
  ["Комплект для тендера", "ТУ, протокол, сертификат и система укладки"],
];

const tenderRows = [
  ["ТУ", "23.31.10-001-33035953-2026", "нормативная база изделия", "проект, закупка"],
  ["Сертификат соответствия", "РОСС RU.32001.04ИБФ1", "соответствие требованиям", "допуск в тендер"],
  ["Протокол испытаний", "№90237-ПРГ/26", "фактические показатели", "техническое обоснование"],
  ["Техкарта виброукладки", "GLS400/GLS500 + X-Bond", "порядок монтажа", "ППР и подрядчик"],
  ["Паспорт качества партии", "на каждую поставку", "входной контроль", "приёмка материала"],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell">
          <a className="brand" href="#top" aria-label="FIXTILE MATRIX">
            <b>M</b><span>FIXTILE MATRIX</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu}>
            {menu ? "Закрыть" : "Меню"}
          </button>
          <div className={`nav__links ${menu ? "nav__links--open" : ""}`}>
            <a href="#product">Продукт</a>
            <a href="#specs">Характеристики</a>
            <a href="#installation">Система укладки</a>
            <a href="#documents">Документы</a>
            <a className="button button--small" href="#request">Рассчитать проект</a>
          </div>
        </nav>

        <div className="hero__content shell">
          <div className="hero__copy">
            <div className="eyebrow eyebrow--light"><span />РОССИЙСКАЯ ПРОМЫШЛЕННАЯ ПЛИТКА</div>
            <h1>FIXTILE MATRIX — монолитная система защиты промышленных полов</h1>
            <p>Кислотоупорная керамическая плитка + виброукладка в эпоксидную смолу.</p>
            <div className="actions">
              <a className="button" href="#documents">Получить каталог PDF</a>
              <a className="button button--ghost" href="#request">Рассчитать проект</a>
              <a className="text-link" href="#formats">Запросить образец ↗</a>
            </div>
          </div>
          <div className="hero__visual" aria-label="Система плитки MATRIX">
            <div className="hero__badge">ВИБРОУКЛАДКА MATRIX</div>
            <div className="hex-field" aria-hidden="true">
              {Array.from({ length: 30 }).map((_, i) => <i key={i} />)}
            </div>
            <div className="visual-stat"><b>0,02%</b><span>водопоглощение промышленной керамики</span></div>
          </div>
        </div>

        <div className="metrics shell">
          <article><b>15 мм</b><span>типовая толщина</span></article>
          <article><b>0,02%</b><span>водопоглощение керамики</span></article>
          <article><b>ULA / HA</b><span>химическая стойкость</span></article>
          <article><b>РФ</b><span>производство и поддержка</span></article>
        </div>
      </section>

      <section className="section philosophy" id="product">
        <div className="shell">
          <SectionHead
            number="02"
            label="ФИЛОСОФИЯ ПРОДУКТА"
            title="Не просто плитка, а инженерная система"
            intro="FIXTILE MATRIX — это монолитная химически стойкая система защиты промышленного пола. Плитка работает вместе с эпоксидной посадкой, армированием, затиркой и технологией виброукладки."
          />
          <div className="philosophy__grid">
            <div className="layer-card">
              <div className="layer-card__top"><span>MATRIX SYSTEM</span><b>04</b></div>
              {["Кислотоупорная керамическая плитка", "Эпоксидная посадка без пустот", "Армирование и системные компоненты", "Подготовленное бетонное основание"].map((item, i) => (
                <div className="layer-row" key={item}><span>0{i + 1}</span>{item}</div>
              ))}
            </div>
            <img src={`${A}figma-04.png`} alt="Слои промышленного пола FIXTILE MATRIX" />
          </div>
          <div className="card-row">
            {philosophy.map(([num, title, text]) => (
              <article className="info-card" key={num}><b>{num}</b><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="specs">
        <div className="shell">
          <SectionHead number="03" label="ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ" title="Технические характеристики" />
          <div className="table-wrap">
            <table className="spec-table">
              <thead><tr><th>Показатель</th><th>НД / норма</th><th>Испытания</th><th>Технический эффект</th></tr></thead>
              <tbody>{specs.map((row) => <tr key={row[0]}>{row.map((cell, i) => <td className={i === 2 ? "tested" : ""} key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="proof-note">Полученные фактические значения подтверждают запас к нормативным требованиям и применимость системы в промышленной эксплуатации.</p>
        </div>
      </section>

      <section className="section installation" id="installation">
        <div className="shell">
          <SectionHead number="06" label="СИСТЕМА УКЛАДКИ" title="Пирог промышленного пола" />
          <div className="installation__main">
            <div className="steps">
              {install.map(([num, title, text]) => <article key={num}><b>{num}</b><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <img src={`${A}figma-04.png`} alt="Схема слоёв пола" />
          </div>
          <div className="green-note">FixTile X-Bond — щелочестойкая стеклотканевая армирующая сетка: формирует монолитную армированную мембрану и повышает трещиностойкость.</div>
        </div>
      </section>

      <section className="section section--muted docs" id="documents">
        <div className="shell">
          <SectionHead
            number="07"
            label="ЦЕНТР ЗАГРУЗКИ ДОКУМЕНТАЦИИ"
            title="Документы для проекта, закупки и тендера"
            intro="Техкарты, сертификат соответствия и протокол испытаний можно использовать как основу для спецификации, проектной документации и закупочного обоснования."
          />
          <div className="doc-grid">
            {documents.map(([title, desc]) => (
              <a href="#request" className="doc-card" key={title}><span>PDF</span><b>{title}</b><p>{desc}</p><i>↓</i></a>
            ))}
          </div>
          <div className="green-note">Документы собраны как комплект для проектировщика, снабжения и тендерной комиссии.</div>
        </div>
      </section>

      <section className="section tender">
        <div className="shell">
          <SectionHead number="08" label="ТЕНДЕРНАЯ ЗАЩИТА И СЕРТИФИКАЦИЯ" title="Аргументы, которые проходят через проектировщика и закупку" />
          <img className="tender__shoe" src={`${A}figma-01.png`} alt="" />
          <div className="table-wrap">
            <table className="tender-table">
              <thead><tr><th>Документ</th><th>Номер / статус</th><th>Что подтверждает</th><th>Где используется</th></tr></thead>
              <tbody>{tenderRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <div className="tender-metrics">
            {[["0,02%", "водопоглощение"], ["40 МПа", "прочность на изгиб"], ["115 Бк/кг", "радиационная безопасность"], ["25 лет", "проектный ресурс"]].map(([v, l]) => <article key={v}><b>{v}</b><span>{l}</span></article>)}
          </div>
        </div>
      </section>

      <section className="request" id="request">
        <div className="request__background" />
        <div className="shell request__grid">
          <div>
            <div className="eyebrow eyebrow--light"><span />РАЗДЕЛ 09 / ЗАЯВКА И РАСЧЁТ</div>
            <h2>Нужен расчёт промышленного пола?</h2>
            <p>Отправьте параметры объекта — подготовим подбор системы, спецификацию и комплект документов для тендера.</p>
            <a className="button button--ghost" href="#documents">Скачать каталог</a>
          </div>
          <form onSubmit={submit}>
            <h3>{sent ? "Заявка подготовлена" : "Параметры для расчёта"}</h3>
            {sent ? <p className="success">Спасибо! Форма работает как демонстрационный прототип. Подключите корпоративный обработчик для отправки данных.</p> : <>
              <label>Тип производства<input required name="industry" placeholder="Например, пищевая промышленность" /></label>
              <label>Площадь пола, м²<input required type="number" name="area" placeholder="1500" /></label>
              <label>Агрессивные среды<input name="environment" placeholder="Кислоты, щёлочи, влажность" /></label>
              <label>Сроки проекта<input name="timeline" placeholder="III квартал 2026" /></label>
              <button className="button" type="submit">Получить расчёт</button>
            </>}
          </form>
        </div>
      </section>

      <section className="section formats" id="formats">
        <div className="shell split-heading">
          <h2>ФОРМАТЫ</h2>
          <p>Коллекция Fixtile MATRIX выпускается в трёх форматах: прямоугольном, квадратном и шестигранном.<br /><br />Такой набор форм позволяет адаптировать укладку под геометрию помещения.</p>
        </div>
        <div className="shell format-grid">
          {[
            ["ПРЯМОУГОЛЬНАЯ", "200 × 100", "figma-14.png"],
            ["ШЕСТИГРАННАЯ", "125 × 108", "figma-05.png"],
            ["КВАДРАТНАЯ", "200 × 200", "figma-19.png"],
          ].map(([name, size, image]) => <article key={name}><img src={`${A}${image}`} alt={`${name} плитка`} /><h3>{name}</h3><p>{size}</p><span /></article>)}
        </div>
      </section>

      <section className="section geometry">
        <div className="shell split-heading">
          <h2>ГЕОМЕТРИЯ</h2>
          <p>Геометрия FixTile MATRIX упрощает процесс укладки. Благодаря трапециевидной форме плитка самостоятельно формирует одинаковый шов, сокращая время монтажа и уменьшая вероятность ошибок на объекте.</p>
        </div>
        <div className="shell geometry__grid">
          <div className="geometry__points">
            {[["01", "Формирует одинаковый шов."], ["02", "Ускоряет монтаж и снижает риск ошибок."], ["03", "Обеспечивает стабильную геометрию."]].map(([n, t]) => <article key={n}><b>{n}</b><p>{t}</p></article>)}
          </div>
          <div className="geometry__visual"><img src={`${A}figma-06.png`} alt="Трапециевидная геометрия плитки" /><img src={`${A}figma-09.png`} alt="Ровный шов между плитками" /></div>
        </div>
      </section>

      <footer><div className="shell"><a className="brand" href="#top"><b>M</b><span>FIXTILE MATRIX</span></a><p>Инженерная система защиты промышленных полов</p><a href="#top">Наверх ↑</a></div></footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
