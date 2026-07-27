import { createRoot } from "react-dom/client";
import "./styles.css";

const A = `${import.meta.env.BASE_URL}assets/`;

const specs = [
  ["Толщина, мм", "от 8 до 18", "15", "запас прочности без лишней высоты пола", "оптимально для большинства задач"],
  ["Водопоглощение, %, не более", "≤ 0,05", "0,02", "в 2,5 раза ниже предела ГОСТ", "высочайшая защита на все 25 лет"],
  ["Предел прочности при изгибе, МПа", "≤ 35", "40", "на 14% выше нормы по изгибу", "для ударных и транспортных нагрузок"],
  ["Износостойкость, г/см², не более", "≤ 0,18", "0,15", "на 17% ниже предела износа", "для зон движения техники и серьёзного абразива"],
  ["Морозостойкость, циклы", "≥ 100", "100", "закрывает норму 100 и более циклов", "для холодных складов и переходных зон"],
  ["Удельная активность радионуклидов, Бк/кг", "≤ 370", "115", "в 3,2 раза ниже предела", "без ограничений для промышленных объектов"],
  ["Противоскольжение", "R10–R11", "R11", "верхний класс диапазона", "безопасность персонала на мокрых участках"],
  ["Температурная стойкость", "термошок и >100°C", "соответствует", "подтверждён термошок >100°C", "для мойки паром и температурных перепадов"],
  ["Размеры изделий", "по каталогу производителя", "соответствует", "соответствие каталожным размерам", "упрощает раскладку и расчёт материала"],
  ["Допуск непараллельности кромок, мм", "0,5", "0,2", "в 2,5 раза точнее допуска", "ровнее укладка, меньше подрезки"],
  ["Дефекты", "не допускаются повреждения", "соответствует", "соответствие без повреждений", "снижает риск брака и рекламаций"],
  ["Кислотоупорность", "кислоты / щёлочи / масла", "ULA / HA", "максимальный класс химстойкости", "для кислотных и моечных зон"],
];

const chemical = [
  ["Кислоты и щёлочи", "разрушение покрытия и швов", "ULA / HA + эпоксидное поле", "химический щит без подплиточной коррозии"],
  ["Масла и жиры", "скольжение, загрязнение, впитывание", "R11 + плотная керамика", "безопасное движение и проще санитарная мойка"],
  ["Паровая мойка", "термошок, раскрытие швов", ">100°C + эпоксидная система", "мойка горячим паром без деградации покрытия"],
  ["Вода и влажность", "водонасыщение и бактерии", "0,02% водопоглощение", "минимальное проникновение влаги и загрязнений"],
  ["Дезинфектанты", "потеря поверхности и пятна", "неглазурованная плотная структура", "стойкость без обязательных пропиток"],
  ["Погрузчики и тележки", "удары, истирание, вибрация", "15 мм + 40 МПа + 0,15 г/см²", "ресурс пола при постоянной нагрузке"],
];

const palette = [
  ["Серый", "SG", "#afafaf", "Универсальный стандарт. Производства, склады", "нейтральная рабочая зона"],
  ["Антрацит", "AN", "#282928", "Технические зоны, рампы, зоны масел", "контраст для грязных / масляных участков"],
  ["Белый", "AW", "#fefefe", "«Чистые комнаты», фармацевтика, молочные цеха", "визуальный контроль загрязнений"],
  ["Песочный", "AS", "#cdad88", "Пищевая промышленность, HoReCa", "тёплая безопасная зона для персонала"],
  ["Терракот", "TR", "#b95330", "Опасные зоны, навигация, пути эвакуации", "сигнальный цвет ОТ и ТБ"],
];

const standards = [
  ["Классификация керамики", "DIN EN 14411 / BIa логика", "плотность, тип материала, применимость", "высокоплотная промышленная керамика", "проектная спецификация"],
  ["Водопоглощение", "EN ISO 10545-3", "пористость и влагостойкость", "0,02% / менее 0,05%", "таблица ТХ, тендерный критерий"],
  ["Прочность при изгибе", "EN ISO 10545-4", "механический запас плитки", "40 МПа", "эксплуатационные нагрузки"],
  ["Истираемость", "EN ISO 10545-6", "ресурс поверхности при абразиве", "0,15 г/см²", "склады, транспортные зоны"],
  ["Морозостойкость", "EN ISO 10545-12", "100 циклов замораживания/оттаивания", "100+ циклов", "холодные и неотапливаемые зоны"],
  ["Химическая устойчивость", "EN ISO 10545-13 / ULA / HA", "стойкость к агрессивным средам", "максимальный класс химстойкости", "кислотные, моечные, химические зоны"],
  ["Пятностойкость / уборка", "EN ISO 10545-14 логика", "загрязнения, санитарная мойка", "плотная неглазурованная структура", "пищевая и фармацевтика"],
  ["Монтажная система", "Техкарта MATRIX", "эпоксидное поле + виброукладка", "GLS400 / GLS500 + X-Bond", "ППР, ведомость работ"],
  ["Документы поставки", "ТУ, сертификат, протокол", "проверяемость партии и поставщика", "российская юрисдикция", "44-ФЗ / 223-ФЗ / закупка"],
];

const engineeringApplications = [
  ["food", "пищевое производство"],
  ["dairy", "молочное производство"],
  ["catering", "общественное питание"],
  ["education", "образовательные учреждения"],
  ["office", "офисные помещения"],
  ["retail", "места продаж"],
  ["healthcare", "учреждения здравоохранения"],
  ["auto", "автоиндустрия"],
  ["parking", "паркинги"],
  ["warehouse", "склады"],
];

const classicLayers = [
  "Плитка Fixtile Matrix",
  "Затирка Fixtile SE",
  "Клей Fixtile GLS700",
  "Гидроизоляция Fixtile SPU",
  "Сетка Fixtile X-Bond",
  "Грунтовка Fixtile GLS100",
  "Герметик литьевой Fixtile EGL",
  "Бетон",
];

const proLayers = [
  "Плитка Fixtile Matrix",
  "Затирка Fixtile GLS500",
  "Сетка Fixtile X-Bond",
  "Кварцевый песок",
  "Клей Fixtile GLS400",
  "Грунтовка Fixtile GLS100",
  "Герметик литьевой Fixtile EGL",
  "Бетон",
];

const layerPositions = [15, 23, 48, 57, 69, 77, 86, 94];

function SystemLayers({ image, alt, layers }: { image: string; alt: string; layers: string[] }) {
  return <div className="system-stack">
    <img src={image} alt={alt}/>
    <ol className="layer-callouts">
      {layers.map((name, index) => <li key={name} style={{"--layer-y": `${layerPositions[index]}%`} as React.CSSProperties}>
        <span>{name}</span><em>от 0 000 ₽*</em>
      </li>)}
    </ol>
  </div>;
}

function ApplicationIcon({ kind }: { kind: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg viewBox="0 0 24 24" aria-hidden="true">
    {kind === "food" && <><circle {...common} cx="7.5" cy="15.5" r="4.5"/><path {...common} d="M5.5 11c-.4-2.6 1-4.5 3-5.2m.6 2.8 1.8 3M14 3h4.5l-.8 3.8 2.3 3.7V21h-8V10.5l2.4-3.7L14 3Z"/></>}
    {kind === "dairy" && <><path {...common} d="M5 8c2.5 0 4.5-1.8 5.2-4M19 8c-2.5 0-4.5-1.8-5.2-4M7 8.5 4 12l3 2 1 6h8l1-6 3-2-3-3.5c-3-2.6-7-2.6-10 0Z"/><circle cx="9.5" cy="12" r=".8" fill="currentColor"/><circle cx="14.5" cy="12" r=".8" fill="currentColor"/></>}
    {kind === "catering" && <path {...common} d="M5 3v7m-2-7v4.5c0 2 4 2 4 0V3m-2 7v11m7-18v18m0-18c-3 3-3 7.5 0 9m5-9v8c0 2.7 4 2.7 4 0V3m-2 12v6"/>}
    {kind === "education" && <path {...common} d="M3 7h18v8H3zM6 15v4h12v-4M4 19h16M4 7V5h16v2m-15 8-2 3 2 2"/>}
    {kind === "office" && <><path {...common} d="M3 9h18v11H3zm0 8h18m4 3v1m14-1v1"/><circle {...common} cx="15" cy="6" r="3"/><path {...common} d="M12 11c1-2.2 5-2.2 6 0v6m-3-6v5m-3 1 3-4 3 4"/></>}
    {kind === "retail" && <><path {...common} d="M3 5h4l2.5 11h9l2.5-7H8m2-1 4 8m5-7-4 7"/><circle {...common} cx="11" cy="20" r="1.4"/><circle {...common} cx="18" cy="20" r="1.4"/></>}
    {kind === "healthcare" && <path {...common} d="M3 9h6V3h6v6h6v12H3zM7 13v5m-2.5-2.5h5M15 13h3m-3 4h3"/>}
    {kind === "auto" && <path {...common} d="M7 21V3h6.5c8 0 8 10 0 10H7m0-6h6c3 0 3 4 0 4H7"/>}
    {kind === "parking" && <><path {...common} d="M3 11 12 4l9 7v10H3zm2 4h14"/><path {...common} d="m7 18 2-4h6l2 4v2H7Z"/><circle cx="9" cy="20" r="1" fill="currentColor"/><circle cx="15" cy="20" r="1" fill="currentColor"/></>}
    {kind === "warehouse" && <path {...common} d="M3 21V10l9-7 9 7v11zm0-7h18M8 14v7m8-7v7M4 20l5-5m-5 0 5 5m2-11h3v3h-3z"/>}
  </svg>;
}

function DataTable({ headers, rows, icons = false, className = "" }: { headers: string[]; rows: string[][]; icons?: boolean; className?: string }) {
  return <div className={`table-shell ${className}`}><table><thead><tr>{headers.map((h, i) => <th key={`${h}-${i}`}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={r[0]}>{r.map((c, j) => <td key={j} data-label={headers[j]}><span className="cell-content">{icons && j === 0 && <img className="row-icon" src={`${A}${className.startsWith("spec") ? "spec" : "chem"}-${String(i + 1).padStart(2, "0")}.svg`} alt="" />}{c}</span></td>)}</tr>)}</tbody></table></div>;
}

function App() {
  return <main className="prototype">
    <section className="scene hero-edit" data-node-id="22:454">
      <img className="psl" src={`${A}edit-psl.svg`} alt="PSL" />
      <div className="hex-pattern" />
      <div className="hero-mark"><img src={`${A}edit-logo.svg`} alt="" /><div><b>FIXTILE<br/>MATRIX</b><span>Промышленная плиточная система</span></div></div>
      <div className="hero-dark" />
      <img className="hero-tile hero-tile--one" src={`${A}edit-hero-tile.png`} alt="Плитка FIXTILE MATRIX" />
      <img className="hero-tile hero-tile--two" src={`${A}edit-hero-tile.png`} alt="" />
      <div className="hero-metrics">{[["25 лет","проектный срок службы системы"],["0,02%","водопоглощение керамики"],["ULA / HA","химическая стойкость"],["РФ","производство и тендерная поддержка"]].map(x=><article key={x[0]}><b>{x[0]}</b><span>{x[1]}</span></article>)}</div>
    </section>

    <section className="scene specs-scene" data-node-id="73:505">
      <h2 className="center-title">Технические характеристики</h2>
      <DataTable className="spec-table" icons headers={["","","ГОСТ и ТУ","FIXTILE MATRIX","",""]} rows={specs.map(r=>["",...r])} />
    </section>

    <section className="scene detail-scene" data-node-id="105:89">
      <h2>ХИМСТОЙКОСТЬ И САНИТАРНАЯ<br/>ЭКСПЛУАТАЦИЯ</h2>
      <p className="lead">В промышленных каталогах химическая устойчивость, влажность, противоскольжение и очистка подаются вместе: это единый эксплуатационный сценарий пищевых, химических и фармацевтических зон.</p>
      <div className="chem-grid">
        <DataTable className="chem-table" icons headers={["Эксплуатационная среда","Проверяемый риск","MATRIX-решение","Результат для объекта"]} rows={chemical} />
        <aside><h3>Почему это важно<br/>для главного инженера</h3>{["Химия не должна уходить под плитку и разрушать основание.","Шов и плитка работают как часть единой химстойкой системы.","Мойка, жиры и вода — штатный режим, а не аварийная нагрузка.","Технические свойства должны быть проверяемы в проекте и тендере."].map((x,i)=><p key={x}><b>0{i+1}</b>{x}</p>)}</aside>
      </div>
      <div className="application-cards">{[["Пищевая промышленность","мойка, жиры, кислоты, HACCP-контур"],["Химические зоны","реагенты, щёлочи, дезинфектанты"],["Фармацевтика","чистота, контроль загрязнений, стабильность"],["Логистика и склады","погрузчики, холодные зоны, абразив"]].map((x,i)=><article key={x[0]}><img src={`${A}app-0${i+1}.svg`} alt="" /><div><b>{x[0]}</b><span>{x[1]}</span></div></article>)}</div>
    </section>

    <section className="scene palette-scene" data-node-id="15:157">
      <h2>Цвет как инструмент<br/>промышленного зонирования</h2>
      <p className="lead">Палитра помогает разделять потоки сырья, персонала, мойки, готовой продукции и технических зон прямо на поверхности пола.</p>
      <div className="table-shell palette-table"><table><thead><tr>{["Цвет","Код","Визуал","Применение","Технический смысл"].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{palette.map(r=><tr key={r[0]}><td data-label="Цвет"><span className="cell-content"><b>{r[0]}</b></span></td><td data-label="Код"><span className="cell-content"><b>{r[1]}</b></span></td><td data-label="Визуал"><span className="cell-content"><i style={{background:r[2]}}/></span></td><td data-label="Применение"><span className="cell-content">{r[3]}</span></td><td data-label="Технический смысл"><span className="cell-content">{r[4]}</span></td></tr>)}</tbody></table></div>
      <div className="palette-note"><img src={`${A}palette.svg`} alt="" />Цветовая палитра MATRIX используется как инструмент зонирования: AW + SG + TR для пищевых производств; AN + AS для складов и маршрутов движения.</div>
    </section>

    <section className="scene hex-scene" data-node-id="22:64">
      <div className="hex-word">FIXTILE<br/>MATRIX<br/>HEX</div>
      <div className="hex-size">125<br/>×<br/>108</div>
      <img src={`${A}edit-hex-tile.png`} className="hex-product" alt="FIXTILE MATRIX HEX" />
      <div className="shape-switch"><button>▰</button><button>⬢</button><button>■</button></div>
    </section>

    <section className="scene standard-scene" data-node-id="105:155">
      <h2>НОРМАТИВНАЯ КАРТА<br/>ТЕХНИЧЕСКИХ ХАРАКТЕРИСТИК</h2>
      <p className="lead">Блок можно использовать как «доказательную» секцию: каждая характеристика привязана к норме, методу испытаний или проектной логике приёмки материала.</p>
      <DataTable className="standard-table" headers={["Группа требований","Норма / метод","Что проверяет","Данные MATRIX","Куда вставлять"]} rows={standards} />
      <div className="conclusion"><b>◎ &nbsp; Итоговая идея блока</b><span>FIXTILE MATRIX нужно подавать не как «ещё одну плитку», а как промышленную систему с проверяемым запасом: материал + химстойкая укладка + документы + применимость.</span></div>
    </section>

    <section className="scene geometry-scene" data-node-id="22:333">
      <div className="split-head"><h2>ГЕОМЕТРИЯ</h2><p>Геометрия FixTile MATRIX упрощает процесс укладки. Благодаря трапециевидной форме плитка самостоятельно формирует одинаковый шов, сокращая время монтажа и уменьшая вероятность ошибок на объекте.</p></div>
      <img className="geometry-left" src={`${A}edit-geometry-left.png`} alt="" />
      <div className="geometry-points">{[["01","Геометрия формирует одинаковый шов."],["02","Ускоряет монтаж и снижает риск ошибок."],["03","Обеспечивает стабильную геометрию и экономию материалов."]].map(x=><article key={x[0]}><b>{x[0]}</b><i/><p>{x[1]}</p></article>)}</div>
      <img className="geometry-row" src={`${A}edit-geometry-row.png`} alt="Геометрия плитки" />
    </section>

    <section className="scene systems-scene" data-node-id="22:113">
      <div className="split-head"><p>FixTile MATRIX применяется в нескольких системах, что позволяет подобрать оптимальное решение для объекта</p><h2>СИСТЕМНОСТЬ</h2></div>
      <div className="systems">
        <article><h3>СИСТЕМА<br/>CLASSIC <em>AGGRESSIVE</em></h3><SystemLayers image={`${A}edit-system-classic.png`} alt="Слои системы Classic Aggressive" layers={classicLayers}/><b>ЦЕНА ЗА М² <em>от 9 785 ₽*</em></b></article>
        <article><h3>СИСТЕМА<br/>PRO <em>AGGRESSIVE</em></h3><SystemLayers image={`${A}edit-system-pro.png`} alt="Слои системы Pro Aggressive" layers={proLayers}/><b>ЦЕНА ЗА М² <em>от 7 764 ₽*</em></b></article>
      </div>
      <p className="systems-price-note">* Указаны ориентировочные цены при идеальных условиях монтажа — для предварительной оценки. Точная цена с учётом всех скрытых работ и особенностей каждого объекта формируется индивидуально и указывается в приложении к договору.</p>
    </section>

    <section className="scene monolith-scene" data-node-id="22:267">
      <img src={`${A}edit-monolith.png`} alt="Монолитная система FIXTILE MATRIX"/>
      <h2><em>ПОЛНОСТЬЮ</em><span>МОНОЛИТНАЯ</span>СИСТЕМА</h2>
    </section>

    <section className="scene engineering-scene" data-node-id="73:485">
      <div className="split-head"><h2>ИНЖЕНЕРНАЯ<br/>СИСТЕМА</h2><p>FIXTILE MATRIX — это монолитная химически стойкая система защиты промышленного пола. Плитка работает не отдельно, а вместе с эпоксидной посадкой, армированием, затиркой и технологией виброукладки.</p></div>
      <div className="engineering-cards">
        <article className="engineering-card engineering-card--title">ПРИМЕНЕНИЕ<br/>НА ОБЪЕКТАХ</article>
        {engineeringApplications.map(([kind, label]) => <article className="engineering-card" key={kind}>
          <ApplicationIcon kind={kind}/>
          <span>{label}</span>
        </article>)}
      </div>
    </section>

    <section className="scene safety-scene" data-node-id="22:318">
      <div className="split-head"><p>Fixtile MATRIX выпускается только с классами противоскольжения R11 и R12 — это осознанное решение в пользу безопасности эксплуатации.</p><h2>ПОВЕРХНОСТЬ И<br/>БЕЗОПАСНОСТЬ</h2></div>
      <h3>Поверхность плитки имеет микротекстуру промышленного назначения и относится к типу UGL (through-body).</h3>
      <div className="slip-meter">
        <article><i className="slip-ramp slip-ramp--r11"/><div><b>R11</b><span>&gt;19°–27°</span><small>рабочие и производственные зоны</small></div></article>
        <article><i className="slip-ramp slip-ramp--r12"/><div><b>R12</b><span>&gt;27°–35°</span><small>зоны повышенного риска скольжения</small></div></article>
        <p>DIN EN 16165 · испытание в рабочей обуви на наклонной плоскости</p>
      </div>
      <div className="safety-visual"><span/><img className="safety-tile" src={`${A}edit-surface-tile.png`} alt="Промышленная плитка FIXTILE MATRIX"/><img className="work-boot" src={`${A}industrial-work-boot.png`} alt="Промышленный защитный ботинок с противоскользящим протектором"/></div>
    </section>
  </main>;
}

createRoot(document.getElementById("root")!).render(<App />);
