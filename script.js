const COLS = 18;
const SAVE_KEY = 'daily-spell-save-v1';

// ---------- ACTOS Y NIVELES ----------

const acts = [
    {
        id: 1, roman: "I",
        title: "Acto I: El Palacio de Cristal",
        levels: [
            { phraseText: "EL ARCANISTA REAL HA ESCAPADO DE LA TORRE DE CRISTAL", story: "Esta mañana las alarmas del Palacio de Cristal sonaron al unísono. Las runas de contención de la torre norte fueron saboteadas desde dentro. Se aconseja a los ciudadanos no interactuar con ningún cuervo que hable." },
            { phraseText: "EL REY HA PERDIDO SU CORONA EN EL BOSQUE OSCURO", story: "Los guardias encontraron el trono vacío y la corona desaparecida. En el bosque oscuro, huellas extrañas conducen hacia un antiguo claro donde la magia aún respira. Se busca voluntario valiente para recuperar la corona." },
            { phraseText: "LA BRUJA DEL PANTANO GUARDA EL SECRETO DEL AMULETO", story: "Entre la niebla del pantano, la vieja bruja observa a quien se atreve a acercarse. Dicen que su amuleto concede un deseo a cambio de un recuerdo. Pocos vuelven con la memoria intacta." },
            { phraseText: "UN CUERVO NEGRO SOBREVUELA LAS MURALLAS AL AMANECER", story: "El cuervo que habla fue visto al alba sobre las murallas del palacio. Llevaba un mensaje atado a la pata, escrito con tinta invisible que solo el fuego puede revelar. Los guardias intentaron derribarlo, pero se desvaneció entre la niebla." },
            { phraseText: "EL AMULETO REVELA EL NOMBRE DEL VERDADERO TRAIDOR", story: "Al sostener el amuleto bajo la luz de la luna, el nombre del traidor apareció grabado en su superficie. La corte entera contuvo el aliento. Una nueva pista se abría ante los ojos del reino." },
            { phraseText: "EL TRAIDOR HUYO HACIA LAS MONTAÑAS DEL NORTE", story: "Con el nombre revelado, el traidor escapó esa misma noche. Los guardias siguieron su rastro hasta las montañas del norte, donde una tormenta sobrenatural borró todo rastro. El consejo del rey se reunió de urgencia." },
            { phraseText: "UNA LUZ AZUL BRILLA EN LA CIMA DEL MONTE HELADO", story: "Desde el valle, los exploradores vieron una luz azul pulsar en la cima del monte helado. Los más ancianos reconocieron el sello de la antigua orden de magos. Se necesita un hechicero que pueda subir sin congelarse." },
            { phraseText: "EL PORTAL DE HIELO SOLO SE ABRE CON UNA PALABRA ANTIGUA", story: "En la cima, un portal de hielo eterno bloqueaba la entrada a la cámara secreta. Las runas talladas revelaron que solo una palabra antigua, pronunciada con el corazón puro, podía abrirlo. Nadie recordaba cuál era." },
            { phraseText: "EL LIBRO DE LOS NOMBRES PERDIDOS YACE SOBRE EL ALTAR", story: "Al cruzar el portal, la cámara secreta se reveló. Sobre un altar de obsidiana descansaba el Libro de los Nombres Perdidos. Sus páginas contenían los nombres de todos los traidores de la historia. Y uno de ellos seguía vivo." },
            { phraseText: "EL REINO DESPIERTA A UNA NUEVA ERA DE LUZ Y SOMBRA", story: "Con el libro en su poder, el rey convocó a todos los reinos. La traición había sido desenmascarada, pero el precio fue alto. Mientras el sol se alzaba sobre el Palacio de Cristal, una nueva era comenzaba. FIN DEL ACTO I." }
        ]
    },
    {
        id: 2, roman: "II",
        title: "Acto II: La Ciudadela Olvidada",
        levels: [
            { phraseText: "LA SOMBRA DEL TRAIDOR AUN ACECHA LOS PASILLOS DEL PALACIO", story: "Aunque el traidor había huido, su sombra seguía presente en cada rincón del palacio. Los sirvientes juraban ver una silueta negra al doblar los pasillos. Los guardias redoblaron la vigilancia, pero nadie encontró nada." },
            { phraseText: "EL CONSEJO DEL REY SE REUNE PARA ELEGIR UN NUEVO GUARDIAN", story: "El rey, cansado y envejecido, convocó al consejo. Se necesitaba un nuevo Guardián del Cristal, alguien capaz de proteger el reino mientras se buscaba al traidor. Tres candidatos se presentaron ante la corte." },
            { phraseText: "UNA CARTA SELLADA CON CERA NEGRA LLEGA AL AMANECER", story: "Al amanecer, un mensajero sin rostro entregó una carta sellada con cera negra. Solo contenía un mapa y una frase: 'Lo que buscas yace donde la ciudad olvidó su nombre'. El rey ordenó investigar de inmediato." },
            { phraseText: "EL MAPA CONDUCE A LAS RUINAS DE LA CIUDADELA OLVIDADA", story: "El mapa conducía más allá de las montañas, a las ruinas de la antigua Ciudadela que los libros llamaban 'Olvidada'. Nadie había pisado esas tierras en generaciones. La expedición partió al alba con el Guardián al frente." },
            { phraseText: "SERPIENTES DE HUMO GUARDAN LA ENTRADA SUBTERRANEA", story: "Al llegar a las ruinas, la entrada estaba custodiada por serpientes de humo que no atacaban, pero bloqueaban el paso. Solo quien conociera el nombre verdadero de la Ciudadela podría atravesarlas sin ser consumido." },
            { phraseText: "EL ECO DE UNA CANCION ANTIGUA ABRE LA PUERTA OCULTA", story: "En los muros de la Ciudadela aún resonaba el eco de una canción antigua. El Guardián la entonó sin saber cómo la conocía, y las piedras se abrieron revelando una puerta secreta que llevaba a las profundidades." },
            { phraseText: "EN EL CORAZON DE LA CIUDADELA DUERME UN DRAGON DE CRISTAL", story: "En el corazón de la Ciudadela, un dragón de cristal dormía desde hacía siglos. Su aliento era hielo y su mirada, tiempo detenido. El Guardián comprendió que la carta no era una amenaza, sino una llamada." },
            { phraseText: "SOLO EL FUEGO DEL CORAZON PUEDE DESPERTAR AL DRAGON", story: "Antiguas runas en el suelo revelaron la verdad: solo el fuego del corazón, un fuego que nace del valor y no de la magia, podía despertar al dragón. El Guardián cerró los ojos y pensó en su reino." },
            { phraseText: "EL DRAGON REVELA EL NOMBRE DE LA VERDADERA AMENAZA", story: "Al despertar, el dragón no atacó. Habló con voz de trueno y reveló el nombre de la verdadera amenaza: la Sombra Primigenia, un ser anterior a los reinos, que había manipulado al traidor desde las sombras." },
            { phraseText: "EL REINO SE PREPARA PARA LA GUERRA CONTRA LA SOMBRA", story: "Con el nombre de la Sombra Primigenia revelado, el reino entero se preparó para la guerra. El dragón de cristal juró lealtad al Guardián. Y en las fronteras, la oscuridad comenzó a moverse. FIN DEL ACTO II." }
        ]
    },
    {
        id: 3, roman: "III",
        title: "Acto III: La Guerra de las Sombras",
        levels: [
            { phraseText: "LAS TROPAS DEL REINO MARCHAN HACIA LA FRONTERA OSCURA", story: "Al amanecer, las tropas del reino cruzaron las puertas del palacio. El Guardián marchaba al frente, con la mirada fija en el horizonte oscuro. Nadie sabía qué encontrarían al otro lado de las montañas, pero todos estaban dispuestos a luchar." },
            { phraseText: "EL DRAGON DE CRISTAL GUIA AL EJERCITO ENTRE LA NIEBLA", story: "El dragón de cristal volaba bajo, tan cerca de las tropas que sus alas casi rozaban los estandartes. Su aliento helado abría camino entre la niebla que la Sombra había esparcido por los valles. Los soldados lo miraban con asombro y temor." },
            { phraseText: "LOS EXPLORADORES ENCUENTRAN UN CAMPAMENTO ABANDONADO", story: "Los exploradores regresaron pálidos. Habían encontrado un campamento entero abandonado, con las tiendas aún levantadas y la comida servida en los platos. No había ni un solo cuerpo, ni una sola señal de lucha. Solo silencio." },
            { phraseText: "LAS SOMBRAS ATACAN AL AMANECER SIN PREVIO AVISO", story: "Sin aviso, las sombras surgieron de la tierra misma. No tenían forma ni rostro, solo hambre. Los soldados lucharon con valor, pero por cada uno que caía, dos más ocupaban su lugar. El Guardián comprendió que la guerra sería larga." },
            { phraseText: "EL GUARDIAN EMPUNA LA ESPADA DE LUZ ANTIGUA", story: "El Guardián desenvainó la Espada de Luz Antigua, forjada en los tiempos en que los dioses aún caminaban entre los mortales. La hoja brilló con un fulgor que las sombras no podían soportar. Por un momento, la esperanza volvió al corazón del ejército." },
            { phraseText: "LA BATALLA DEL VALLE DURA TRES DIAS Y TRES NOCHES", story: "La batalla del valle se extendió durante tres días y tres noches. Los cuervos dejaron de sobrevolar el campo. El río se tiñó de un rojo imposible. Y cuando el sol se alzó por cuarta vez, ambos bandos se detuvieron, exhaustos." },
            { phraseText: "EL DRAGON CAE HERIDO EN EL CORAZON DE LA BATALLA", story: "El dragón de cristal cayó en el corazón de la batalla, atravesado por una lanza de oscuridad pura. Su cuerpo se hizo añicos contra las rocas, y un grito recorrió el ejército. El Guardián cayó de rodillas junto a los fragmentos brillantes." },
            { phraseText: "UNA VOZ ANTIGUA SURGE DE LAS PROFUNDIDADES", story: "Entonces, una voz antigua surgió de las profundidades de la tierra. Era la voz de la Ciudadela Olvidada, que había sido testigo de todas las guerras. Y habló de un lugar donde la Sombra podía ser derrotada: el Reino de los Espejos." },
            { phraseText: "EL REY OFRECE SU VIDA A CAMBIO DE LA VICTORIA", story: "El rey, ya anciano, se postró ante el altar de luz. Ofreció su vida a cambio de la victoria, dispuesto a no volver a ver su reino. Pero el Guardián lo detuvo. 'No será tu vida lo que se entregue', dijo. 'Será la mía.'" },
            { phraseText: "LA SOMBRA PRIMIGENIA SE RETIRA AL REINO DE LOS ESPEJOS", story: "Antes de que el Guardián pudiera partir, la Sombra Primigenia se replegó. Se retiró hacia el este, hacia un lugar donde los espejos reflejaban mundos imposibles. La guerra aún no había terminado, pero una nueva puerta se abría. FIN DEL ACTO III." }
        ]
    },
    {
        id: 4, roman: "IV",
        title: "Acto IV: El Reino de los Espejos",
        levels: [
            { phraseText: "EL GUARDIAN ATRAVIESA EL PORTAL DE LOS ESPEJOS ROTOS", story: "El Guardián cruzó el Portal de los Espejos Rotos al amanecer, solo. Al otro lado, el mundo se invertía: el cielo era suelo y las estrellas brillaban bajo sus pies. Cada paso resonaba contra un reflejo de sí mismo." },
            { phraseText: "CADA ESPEJO MUESTRA UNA VERSION DISTINTA DEL PASADO", story: "Cada espejo mostraba una versión distinta del pasado. En uno, el rey era joven y feliz. En otro, el traidor nunca había traicionado. En un tercero, el Guardián veía su propia infancia, congelada en un instante eterno." },
            { phraseText: "EL REY VE SU PROPIA MUERTE EN UN REFLEJO OSCURO", story: "El Guardián encontró un espejo oscuro del que no podía apartar la vista. En él, el rey yacía muerto en su trono, el reino en ruinas, la Sombra triunfante. 'Esto aún no ha ocurrido', susurró una voz. 'Pero puede ocurrir.'" },
            { phraseText: "LA REINA DE LOS ESPEJOS OFRECE UN TRATO PELIGROSO", story: "La Reina de los Espejos apareció entre los reflejos. Tenía mil rostros y ninguno a la vez. 'Te daré la llave para vencer a la Sombra', dijo, 'pero primero deberás darme lo que más amas.' El Guardián supo que no hablaba de objetos." },
            { phraseText: "EL GUARDIAN DEBE ELEGIR ENTRE VERDAD Y LOCURA", story: "El Guardián caminó durante lo que parecieron siglos. Cada verdad que encontraba estaba envuelta en otra mentira. Cada pista lo acercaba a la locura tanto como a la sabiduría. Solo podía confiar en una cosa: en sí mismo." },
            { phraseText: "EL LABERINTO DE CRISTAL CAMBIA CON CADA PASO", story: "El Laberinto de Cristal cambiaba con cada paso. Los pasillos se alargaban, se acortaban, se multiplicaban. El Guardián dejó de intentar memorizar el camino y comenzó a caminar por instinto, guiado por el pulso de la espada." },
            { phraseText: "UNA LLAMA AZUL ARDE EN EL CENTRO DEL LABERINTO", story: "En el centro del laberinto, una llama azul ardía sin consumir nada. Era el fuego del corazón, el mismo que había despertado al dragón tiempo atrás. El Guardián sumergió la mano en la llama sin temor, y la llama no lo quemó." },
            { phraseText: "EL SECRETO DE LA SOMBRA YACE EN EL ESPEJO ROTO", story: "La llama le mostró el secreto: la Sombra Primigenia no era un ser, sino un espejo roto. Un reflejo de todo lo que los mortales habían temido, rechazado, negado. Para vencerla, el Guardián debía aceptarla, no destruirla." },
            { phraseText: "EL GUARDIAN ROMPE EL ESPEJO Y LIBERA LA LUZ", story: "Con un grito que resonó por todos los reinos de los espejos, el Guardián alzó su espada y golpeó el espejo oscuro. El cristal se rompió en mil pedazos, y una luz cegadora inundó el laberinto entero. La Sombra gritó." },
            { phraseText: "LA SOMBRA PRIMIGENIA REVELA SU VERDADERO ORIGEN", story: "Cuando la luz se disipó, la Sombra Primigenia ya no era una amenaza. Se había convertido en algo más pequeño, más triste, más humano. 'Yo fui como tú', dijo. 'También yo quise salvar un reino'. Y el Guardián comprendió la verdad. FIN DEL ACTO IV." }
        ]
    },
    {
        id: 5, roman: "V",
        title: "Acto V: El Amanecer Final",
        levels: [
            { phraseText: "EL REINO ENTERO SE UNE CONTRA LA OSCURIDAD FINAL", story: "El Guardián regresó al mundo de los vivos con la verdad grabada en el alma. Convocó a todos los reinos, a todos los pueblos, a todas las criaturas de la luz. 'La Sombra no se vence con la espada', proclamó. 'Se vence con la unidad.'" },
            { phraseText: "EL DRAGON HERIDO SE LEVANTA UNA ULTIMA VEZ", story: "El dragón de cristal, que todos creían muerto, se levantó una última vez. Sus fragmentos volaron desde las rocas y se reunieron en el aire. No volvía para luchar, sino para ser testigo del final. Su aliento ya no era hielo, sino brisa." },
            { phraseText: "LOS MAGOS ANTIGUOS REGRESAN DEL OLVIDO", story: "Los magos antiguos, dormidos durante generaciones en las profundidades de la Ciudadela, regresaron. Sus barbas eran ríos, sus ojos constelaciones. No hablaron. Solo se sentaron junto a los vivos, dispuestos a ver cómo terminaba todo." },
            { phraseText: "EL CIELO SE ABRE Y LA LUZ PURA DESCIENDE", story: "El cielo se abrió en dos, y una luz pura descendió sobre el campo de batalla final. No era la luz de un dios, sino la de todos los que alguna vez habían esperado un amanecer. Era la luz de la esperanza misma, hecha visible." },
            { phraseText: "EL GUARDIAN Y LA SOMBRA LUCHAN EN EL VACIO", story: "El Guardián y la Sombra Primigenia se encontraron en el vacío, donde no había tiempo ni espacio. No lucharon con armas, sino con recuerdos. Cada uno mostraba al otro lo que había perdido, lo que había ganado, lo que aún podía salvar." },
            { phraseText: "EL NOMBRE VERDADERO DE LA SOMBRA ES PRONUNCIADO", story: "El Guardián pronunció entonces el Nombre Verdadero de la Sombra, aquel que había aprendido en el Reino de los Espejos. Al escucharlo, la Sombra tembló. Era un nombre simple, casi olvidado: el nombre de un niño que una vez quiso ser héroe." },
            { phraseText: "LA OSCURIDAD SE DESHACE COMO HUMO AL VIENTO", story: "La Oscuridad se deshizo como humo al viento. No hubo grito, no hubo explosión. Solo un suspiro, un alivio, una liberación. Y en su lugar quedó un vacío que, por primera vez, no daba miedo. Era espacio para algo nuevo." },
            { phraseText: "EL REINO CELEBRA LA VICTORIA ENTRE CENIZAS", story: "El reino celebró la victoria entre las cenizas. No hubo grandes banquetes ni desfiles. Solo abrazos silenciosos, miradas compartidas, lágrimas de los que habían sobrevivido. La paz no era alegre, pero era paz al fin y al cabo." },
            { phraseText: "EL REY NOMBRA AL GUARDIAN PROTECTOR ETERNO", story: "El rey, ya al borde de la muerte, nombró al Guardián Protector Eterno del Reino. No como título, sino como verdad. 'Has salvado lo que yo no pude', dijo. 'Ahora descansa'. Y el Guardián, por primera vez en años, durmió sin sueños oscuros." },
            { phraseText: "EL SOL VUELVE A BRILLAR SOBRE EL PALACIO DE CRISTAL", story: "El sol volvió a brillar sobre el Palacio de Cristal. Los cuervos regresaron a las murallas, las brujas a los pantanos, los dragones a sus cielos. Y en la plaza central, una nueva estatua fue erigida: la de un Guardián anónimo que había salvado el mundo. FIN." }
        ]
    }
];

// ---------- ESTADO GLOBAL ----------

let allLevels = [];
let levelMeta = [];

let completedCount = 0;
let currentLevel = 0;
let levelLocked = false;
let animationRunning = false;

let dailyData = null;
let linesArray = [];
let poolColumns = Array.from({ length: COLS }, () => []);
let activeCell = null;
let pendingPoolLetter = null;
let lastSwapInfo = null;
let keyboardSetup = false;
let nextLetterId = 1;
let autoFillRunning = false;
let resetRunning = false;
let flyingLetters = new Set();

const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
const SECRET_CODE = "604170";

function buildLevelIndex() {
    allLevels = [];
    levelMeta = [];
    let globalIdx = 0;
    acts.forEach((act, ai) => {
        act.levels.forEach((lvl, li) => {
            levelMeta.push({
                actIndex: ai,
                actRoman: act.roman,
                actTitle: act.title,
                levelInAct: li,
                globalIndex: globalIdx
            });
            allLevels.push(lvl);
            globalIdx++;
        });
    });
}

// ---------- GUARDADO ----------

function saveProgress() {
    const state = {
        completedCount,
        currentLevel,
        levelLocked
    };
    if (!levelLocked) {
        state.board = {
            poolColumns: poolColumns.map(col => col.map(item => ({
                letter: item.letter,
                used: !!item.used,
                id: item.id
            }))),
            nextLetterId,
            cells: Array.from(document.querySelectorAll('.target-cell')).map(cell => ({
                row: parseInt(cell.dataset.row),
                col: parseInt(cell.dataset.col),
                letter: cell.innerText,
                letterId: cell.dataset.letterId || null
            }))
        };
    }
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {}
}

function loadProgress() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function clearProgress() {
    try {
        localStorage.removeItem(SAVE_KEY);
    } catch (e) {}
}

function restoreFromSave(saved) {
    if (!saved || typeof saved !== 'object') {
        startLevel(0, 'play');
        return;
    }
    const savedCurrent = (typeof saved.currentLevel === 'number') ? saved.currentLevel : 0;
    const savedCompleted = (typeof saved.completedCount === 'number') ? saved.completedCount : 0;

    if (savedCurrent < 0 || savedCurrent >= allLevels.length) {
        startLevel(0, 'play');
        return;
    }

    completedCount = Math.min(savedCompleted, allLevels.length);

    if (saved.levelLocked) {
        startLevel(savedCurrent, 'view');
    } else if (saved.board) {
        restoreBoard(savedCurrent, saved.board);
    } else {
        startLevel(savedCurrent, 'play');
    }
}

function restoreBoard(idx, boardData) {
    if (idx < 0 || idx >= allLevels.length) return;

    currentLevel = idx;
    dailyData = allLevels[idx];
    levelLocked = false;
    animationRunning = false;
    linesArray = [];
    poolColumns = Array.from({ length: COLS }, () => []);
    activeCell = null;
    pendingPoolLetter = null;
    lastSwapInfo = null;
    flyingLetters = new Set();

    document.getElementById('story-section').style.display = 'none';
    closeHintPanel();

    updateHeader();
    generateLines();

    if (boardData.poolColumns && Array.isArray(boardData.poolColumns)) {
        for (let c = 0; c < COLS; c++) {
            const savedCol = boardData.poolColumns[c];
            if (Array.isArray(savedCol)) {
                poolColumns[c] = savedCol.map(item => ({
                    letter: item.letter,
                    used: !!item.used,
                    id: item.id
                }));
            }
        }
    }

    if (typeof boardData.nextLetterId === 'number') {
        nextLetterId = Math.max(nextLetterId, boardData.nextLetterId);
    }

    renderPool();
    renderTargets();
    setupKeyboard();

    if (boardData.cells && Array.isArray(boardData.cells)) {
        boardData.cells.forEach(c => {
            if (!c.letter) return;
            const cell = document.querySelector(
                `.target-cell[data-row="${c.row}"][data-col="${c.col}"]`
            );
            if (cell) {
                cell.innerText = c.letter;
                if (c.letterId) cell.dataset.letterId = c.letterId;
            }
        });
    }

    updateNextLevelMeta();
    renderMenu();
    updateControlsState();

    const firstCell = document.querySelector('.target-cell');
    if (firstCell) selectCell(firstCell);

    saveProgress();
}

// ---------- AUDIO ----------

let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            return null;
        }
    }
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    return audioCtx;
}

function playKeySound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const duration = 0.055;
    const pitchVar = 0.9 + Math.random() * 0.2;
    const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2600 * pitchVar, now);
    filter.frequency.exponentialRampToValueAtTime(1400 * pitchVar, now + duration);
    filter.Q.value = 1.4;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.13, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(ctx.destination);
    noise.start(now); noise.stop(now + duration);
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(190 * pitchVar, now);
    osc.frequency.exponentialRampToValueAtTime(85 * pitchVar, now + 0.04);
    oscGain.gain.setValueAtTime(0.07, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(oscGain); oscGain.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.06);
}

function playDeleteSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const duration = 0.13;
    const pitchVar = 0.9 + Math.random() * 0.2;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(620 * pitchVar, now);
    osc.frequency.exponentialRampToValueAtTime(140 * pitchVar, now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.075, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now); osc.stop(now + duration);
}

function playTickSound(index) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const freq = 700 + index * 25;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.08);
}

function playWinSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
        const t = now + i * 0.09;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.11, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(t); osc.stop(t + 0.4);
    });
}

function playLoseSound() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const duration = 0.4;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.type = 'sawtooth'; osc2.type = 'sawtooth';
    osc1.frequency.setValueAtTime(220, now);
    osc1.frequency.exponentialRampToValueAtTime(80, now + duration);
    osc2.frequency.setValueAtTime(233, now);
    osc2.frequency.exponentialRampToValueAtTime(85, now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
    osc1.start(now); osc2.start(now);
    osc1.stop(now + duration + 0.02); osc2.stop(now + duration + 0.02);
}

// ---------- HELPERS ----------

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function updateHeader() {
    const fecha = new Date().toLocaleDateString('es-ES', opciones);
    const meta = levelMeta[currentLevel];
    const actLabel = meta ? ` • Acto ${meta.actRoman}` : '';
    document.getElementById('current-date').innerText =
        `Vol. 1${actLabel} • Nivel ${currentLevel + 1} • ${fecha}`;
}

function updateNextLevelMeta() {
    const metaEl = document.getElementById('next-level-meta');
    if (!metaEl) return;
    if (currentLevel + 1 < allLevels.length) {
        const nextMeta = levelMeta[currentLevel + 1];
        metaEl.textContent = `Nivel ${currentLevel + 2} · Acto ${nextMeta.actRoman}`;
    } else {
        metaEl.textContent = '';
    }
}

function updateControlsState() {
    const disabled = levelLocked || animationRunning;
    document.querySelectorAll('.controls button, .hint-panel button').forEach(btn => {
        btn.disabled = disabled;
    });
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) hintBtn.style.display = levelLocked ? 'none' : 'inline-block';
    if (levelLocked) closeHintPanel();
}

function toggleHintPanel() {
    if (levelLocked || animationRunning) return;
    const wrapper = document.getElementById('hint-panel-wrapper');
    if (wrapper) wrapper.classList.toggle('open');
}

function closeHintPanel() {
    const wrapper = document.getElementById('hint-panel-wrapper');
    if (wrapper) wrapper.classList.remove('open');
}

function getSortedCells() {
    return Array.from(document.querySelectorAll('.target-cell'))
        .sort((a, b) => {
            const ra = parseInt(a.dataset.row), rb = parseInt(b.dataset.row);
            if (ra !== rb) return ra - rb;
            return parseInt(a.dataset.col) - parseInt(b.dataset.col);
        });
}

function generateLines() {
    let text = dailyData.phraseText.toUpperCase();
    linesArray = [];
    while (text.length > 0) {
        let chunk = text.substring(0, COLS);
        if (chunk.length < COLS) chunk = chunk.padEnd(COLS, " ");
        linesArray.push(chunk);
        text = text.substring(COLS);
    }
}

function startLevel(idx, mode = 'play') {
    if (idx < 0 || idx >= allLevels.length) return;
    currentLevel = idx;
    dailyData = allLevels[idx];
    levelLocked = (mode === 'view');
    animationRunning = false;
    linesArray = [];
    poolColumns = Array.from({ length: COLS }, () => []);
    activeCell = null;
    pendingPoolLetter = null;
    lastSwapInfo = null;
    flyingLetters = new Set();
    document.getElementById('story-section').style.display = 'none';
    closeHintPanel();
    updateHeader();
    generateLines();
    if (mode === 'play') {
        for (let c = 0; c < COLS; c++) {
            for (let r = 0; r < linesArray.length; r++) {
                let char = linesArray[r][c];
                if (char && char !== " ") {
                    poolColumns[c].push({ letter: char, used: false, id: nextLetterId++ });
                }
            }
            poolColumns[c].sort(() => Math.random() - 0.5);
        }
    }
    renderPool();
    renderTargets();
    setupKeyboard();
    updateNextLevelMeta();
    renderMenu();
    updateControlsState();
    if (mode === 'view') {
        document.querySelectorAll('.target-cell').forEach(cell => {
            cell.innerText = cell.dataset.correct;
        });
        showViewMode();
    } else {
        const firstCell = document.querySelector('.target-cell');
        if (firstCell) selectCell(firstCell);
    }
    saveProgress();
}

function liberarLetraById(id) {
    const numericId = parseInt(id);
    for (let c = 0; c < COLS; c++) {
        const item = poolColumns[c].find(i => i.id === numericId);
        if (item) { item.used = false; return item; }
    }
    return null;
}

function setCellContent(cell, letter, itemId) {
    cell.innerText = letter;
    if (itemId != null && itemId !== '') cell.dataset.letterId = itemId;
    else delete cell.dataset.letterId;
}

function getCellsInColumn(col) {
    return Array.from(document.querySelectorAll('.target-cell'))
        .filter(c => parseInt(c.dataset.col) === col);
}

function snapshotPool() {
    const snap = new Map();
    document.querySelectorAll('#pool-grid-container [data-letter-id]').forEach(el => {
        snap.set(el.dataset.letterId, el.getBoundingClientRect());
    });
    return snap;
}

function flipPool(snap) {
    document.querySelectorAll('#pool-grid-container [data-letter-id]').forEach(el => {
        const id = el.dataset.letterId;
        if (!snap.has(id)) return;
        const oldRect = snap.get(id);
        const newRect = el.getBoundingClientRect();
        const dx = oldRect.left - newRect.left;
        const dy = oldRect.top - newRect.top;
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
        el.style.transition = 'none';
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        requestAnimationFrame(() => {
            el.style.transition = 'transform 0.3s ease';
            el.style.transform = 'translate(0, 0)';
            setTimeout(() => {
                el.style.transition = '';
                el.style.transform = '';
            }, 320);
        });
    });
}

function flyGhost(fromRect, toRect, letter, onDone) {
    const ghost = document.createElement('div');
    ghost.className = 'cell ghost';
    ghost.textContent = letter;
    Object.assign(ghost.style, {
        left: fromRect.left + 'px',
        top: fromRect.top + 'px',
        width: fromRect.width + 'px',
        height: fromRect.height + 'px',
    });
    document.body.appendChild(ghost);
    requestAnimationFrame(() => {
        ghost.style.left = toRect.left + 'px';
        ghost.style.top = toRect.top + 'px';
    });
    setTimeout(() => {
        ghost.remove();
        if (onDone) onDone();
    }, 270);
}

function renderPool() {
    const container = document.getElementById('pool-grid-container');
    container.innerHTML = '';
    const maxLetters = Math.max(...poolColumns.map(col => col.length), 0);
    for (let r = 0; r < maxLetters; r++) {
        const row = document.createElement('div');
        row.className = 'grid-row pool-row';
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const unused = poolColumns[c].filter(i => !i.used);
            const firstRowWithItem = maxLetters - unused.length;
            const idx = r - firstRowWithItem;
            if (idx >= 0 && idx < unused.length) {
                const item = unused[idx];
                cell.innerText = item.letter;
                cell.dataset.col = c;
                cell.dataset.letterId = item.id;
                cell.addEventListener('click', () => handlePoolCellClick(item, c));
                if (pendingPoolLetter && pendingPoolLetter.id === item.id) cell.classList.add('pending');
                if (flyingLetters.has(item.id)) cell.style.visibility = 'hidden';
            } else {
                cell.style.visibility = 'hidden';
            }
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function renderTargets() {
    const container = document.getElementById('target-grid-container');
    container.innerHTML = '';
    let wordId = 0;
    let prevWasSpace = true;
    for (let r = 0; r < linesArray.length; r++) {
        const row = document.createElement('div');
        row.className = 'grid-row target-row';
        for (let c = 0; c < COLS; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const correctChar = linesArray[r][c];
            if (correctChar === " ") {
                cell.classList.add('black');
                prevWasSpace = true;
            } else {
                if (prevWasSpace) wordId++;
                cell.classList.add('target-cell');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.dataset.correct = correctChar;
                cell.dataset.word = wordId;
                cell.innerText = "";
                cell.addEventListener('click', () => selectCell(cell));
                cell.addEventListener('dblclick', () => {
                    if (levelLocked || animationRunning) return;
                    if (lastSwapInfo && lastSwapInfo.cellB === cell &&
                        (Date.now() - lastSwapInfo.time) < 500) {
                        const a = lastSwapInfo.cellA, b = lastSwapInfo.cellB;
                        const aL = a.innerText, aId = a.dataset.letterId;
                        setCellContent(a, b.innerText, b.dataset.letterId || null);
                        setCellContent(b, aL, aId || null);
                    }
                    lastSwapInfo = null;
                    if (cell.innerText !== "") returnLetterToPool(cell);
                });
                prevWasSpace = false;
            }
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

// ---------- ACCIONES ----------

function placeFromPoolInCell(item, cell) {
    if (levelLocked || animationRunning) return;
    const cellRect = cell.getBoundingClientRect();
    const oldId = cell.dataset.letterId;
    const oldLetter = cell.innerText;
    const srcEl = document.querySelector(`#pool-grid-container [data-letter-id="${item.id}"]`);
    const srcRect = srcEl ? srcEl.getBoundingClientRect() : cellRect;
    const poolSnap = snapshotPool();
    let oldItem = null;
    if (oldId) oldItem = liberarLetraById(oldId);
    item.used = true;
    setCellContent(cell, item.letter, item.id);
    renderPool();
    flipPool(poolSnap);
    if (oldItem) playDeleteSound();
    cell.style.color = 'transparent';
    flyGhost(srcRect, cellRect, item.letter, () => {
        cell.style.color = '';
        playKeySound();
    });
    if (oldItem) {
        const newPoolEl = document.querySelector(`#pool-grid-container [data-letter-id="${oldItem.id}"]`);
        if (newPoolEl) {
            const newRect = newPoolEl.getBoundingClientRect();
            newPoolEl.style.visibility = 'hidden';
            flyGhost(cellRect, newRect, oldLetter, () => { newPoolEl.style.visibility = ''; });
        }
    }
}

function returnLetterToPool(cell) {
    if (levelLocked || animationRunning) return;
    const id = cell.dataset.letterId;
    if (!id) return;
    const letter = cell.innerText;
    const cellRect = cell.getBoundingClientRect();
    const poolSnap = snapshotPool();
    const item = liberarLetraById(id);
    if (!item) return;
    setCellContent(cell, "", null);
    playDeleteSound();
    renderPool();
    flipPool(poolSnap);
    const newPoolEl = document.querySelector(`#pool-grid-container [data-letter-id="${item.id}"]`);
    if (newPoolEl) {
        const newRect = newPoolEl.getBoundingClientRect();
        newPoolEl.style.visibility = 'hidden';
        flyGhost(cellRect, newRect, letter, () => { newPoolEl.style.visibility = ''; });
    }
}

function moveLetterBetweenCells(target, source) {
    if (levelLocked || animationRunning) return;
    const targetRect = target.getBoundingClientRect();
    const sourceRect = source.getBoundingClientRect();
    const targetLetter = target.innerText;
    const targetId = target.dataset.letterId;
    const sourceLetter = source.innerText;
    const sourceId = source.dataset.letterId;
    setCellContent(target, sourceLetter, sourceId || null);
    if (targetLetter) setCellContent(source, targetLetter, targetId || null);
    else setCellContent(source, "", null);
    target.style.color = 'transparent';
    flyGhost(sourceRect, targetRect, sourceLetter, () => {
        target.style.color = '';
        playKeySound();
    });
    if (targetLetter) {
        source.style.color = 'transparent';
        flyGhost(targetRect, sourceRect, targetLetter, () => { source.style.color = ''; });
    }
}

function selectCell(cell, skipInteractions = false) {
    if (levelLocked || animationRunning) return;
    if (!skipInteractions) {
        if (pendingPoolLetter) {
            if (parseInt(cell.dataset.col) === pendingPoolLetter.col) {
                const item = poolColumns[pendingPoolLetter.col].find(i => i.id === pendingPoolLetter.id && !i.used);
                if (item) placeFromPoolInCell(item, cell);
                pendingPoolLetter = null;
                renderPool();
                if (activeCell) activeCell.classList.remove('active-focus');
                activeCell = cell;
                cell.classList.add('active-focus');
                return;
            } else {
                pendingPoolLetter = null;
                renderPool();
            }
        }
        if (activeCell && activeCell !== cell &&
            activeCell.innerText !== "" && cell.innerText !== "" &&
            activeCell.dataset.col === cell.dataset.col) {
            const oldActive = activeCell;
            moveLetterBetweenCells(cell, oldActive);
            lastSwapInfo = { cellA: oldActive, cellB: cell, time: Date.now() };
            oldActive.classList.remove('active-focus');
            activeCell = cell;
            cell.classList.add('active-focus');
            return;
        }
    }
    if (activeCell) activeCell.classList.remove('active-focus');
    activeCell = cell;
    cell.classList.add('active-focus');
}

function handlePoolCellClick(item, col) {
    if (levelLocked || animationRunning) return;
    if (pendingPoolLetter && pendingPoolLetter.id === item.id) pendingPoolLetter = null;
    else pendingPoolLetter = { col, letter: item.letter, id: item.id };
    renderPool();
}

function insertarLetraEnActiva(key, col) {
    if (levelLocked || animationRunning || !activeCell) return;
    if (activeCell.innerText === key) { moverFoco(1); return; }
    const unusedItem = poolColumns[col].find(i => i.letter === key && !i.used);
    if (unusedItem) { placeFromPoolInCell(unusedItem, activeCell); moverFoco(1); return; }
    const otherCell = getCellsInColumn(col).find(c => c !== activeCell && c.innerText === key);
    if (otherCell) { moveLetterBetweenCells(activeCell, otherCell); moverFoco(1); }
}

function setupKeyboard() {
    if (keyboardSetup) return;
    keyboardSetup = true;
    document.addEventListener('keydown', (e) => {
        const codeModal = document.getElementById('code-modal');
        if (codeModal && codeModal.classList.contains('open')) return;
        const bookModal = document.getElementById('book-modal');
        if (bookModal && bookModal.classList.contains('open')) {
            if (e.key === 'Escape') { e.preventDefault(); closeBookModal(); }
            return;
        }
        if (e.key === "Escape" && document.body.classList.contains('menu-open')) {
            closeMenu();
            return;
        }
        if (document.body.classList.contains('menu-open')) return;
        if (e.key === "Enter") {
            e.preventDefault();
            if (levelLocked || animationRunning) return;
            cancelarPending();
            if (e.shiftKey) {
                autoFillTrivialColumns();
            } else {
                checkSolution();
            }
            return;
        }
        if (levelLocked || animationRunning) return;
        if (!activeCell) return;
        if (e.key === "Escape") {
            if (pendingPoolLetter) { pendingPoolLetter = null; renderPool(); }
            return;
        }
        if (e.key === " ") { e.preventDefault(); cancelarPending(); moverFoco(e.shiftKey ? -1 : 1); return; }
        if (e.key === "ArrowLeft") { e.preventDefault(); cancelarPending(); moverFoco(-1); return; }
        if (e.key === "ArrowRight") { e.preventDefault(); cancelarPending(); moverFoco(1); return; }
        if (e.key === "ArrowUp") { e.preventDefault(); cancelarPending(); moverVertical(-1); return; }
        if (e.key === "ArrowDown") { e.preventDefault(); cancelarPending(); moverVertical(1); return; }
        if (e.key === "Tab") { e.preventDefault(); cancelarPending(); moverPalabra(e.shiftKey ? -1 : 1); return; }
        const col = parseInt(activeCell.dataset.col);
        if (e.key === "Backspace" || e.key === "Delete") {
            if (activeCell.innerText !== "") returnLetterToPool(activeCell);
            moverFoco(-1);
            return;
        }
        if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.isComposing && e.key.length === 1) {
            const key = e.key.toUpperCase();
            cancelarPending();
            insertarLetraEnActiva(key, col);
        }
    });
}

function cancelarPending() {
    if (pendingPoolLetter) { pendingPoolLetter = null; renderPool(); }
}

function moverFoco(direccion) {
    if (levelLocked || animationRunning) return;
    const targets = Array.from(document.querySelectorAll('.target-cell'));
    const currentIdx = targets.indexOf(activeCell);
    const nextIdx = currentIdx + direccion;
    if (nextIdx >= 0 && nextIdx < targets.length) selectCell(targets[nextIdx], true);
}

function moverVertical(direccion) {
    if (levelLocked || animationRunning || !activeCell) return;
    const currentRow = parseInt(activeCell.dataset.row);
    const currentCol = parseInt(activeCell.dataset.col);
    const cellsInCol = getCellsInColumn(currentCol)
        .map(c => ({ cell: c, row: parseInt(c.dataset.row) }))
        .sort((a, b) => a.row - b.row);
    const currentIdx = cellsInCol.findIndex(item => item.row === currentRow);
    if (currentIdx === -1) return;
    const targetIdx = currentIdx + direccion;
    if (targetIdx >= 0 && targetIdx < cellsInCol.length) selectCell(cellsInCol[targetIdx].cell, true);
}

function moverPalabra(direccion) {
    if (levelLocked || animationRunning || !activeCell) return;
    const currentWord = parseInt(activeCell.dataset.word);
    if (isNaN(currentWord)) return;
    const targets = Array.from(document.querySelectorAll('.target-cell'));
    const wordIds = [...new Set(targets.map(t => parseInt(t.dataset.word)))].sort((a, b) => a - b);
    const currentIdx = wordIds.indexOf(currentWord);
    if (currentIdx === -1) return;
    const nextIdx = (currentIdx + direccion + wordIds.length) % wordIds.length;
    const nextWordId = wordIds[nextIdx];
    const cellsInNextWord = targets.filter(t => parseInt(t.dataset.word) === nextWordId);
    const firstEmpty = cellsInNextWord.find(t => t.innerText === "");
    const target = firstEmpty || cellsInNextWord[0];
    if (target) selectCell(target, true);
}

function shuffleRemainingPool() {
    if (levelLocked || animationRunning) return;
    closeHintPanel();
    const snap = snapshotPool();
    for (let c = 0; c < COLS; c++) {
        const unusedIndices = [];
        for (let i = 0; i < poolColumns[c].length; i++) {
            if (!poolColumns[c][i].used) unusedIndices.push(i);
        }
        const unusedItems = unusedIndices.map(i => poolColumns[c][i]);
        unusedItems.sort(() => Math.random() - 0.5);
        for (let k = 0; k < unusedIndices.length; k++) {
            poolColumns[c][unusedIndices[k]] = unusedItems[k];
        }
    }
    renderPool();
    flipPool(snap);
    saveProgress();
}

async function autoFillTrivialColumns() {
    if (levelLocked || autoFillRunning || resetRunning || animationRunning) return;
    closeHintPanel();
    autoFillRunning = true;
    try {
        const fills = [];
        for (let c = 0; c < COLS; c++) {
            const unusedItems = poolColumns[c].filter(i => !i.used);
            if (unusedItems.length === 0) continue;
            const uniqueLetters = new Set(unusedItems.map(i => i.letter));
            if (uniqueLetters.size !== 1) continue;
            const letter = unusedItems[0].letter;
            const targetCells = getCellsInColumn(c)
                .filter(cell => cell.innerText === "" && cell.dataset.correct === letter)
                .sort((a, b) => parseInt(a.dataset.row) - parseInt(b.dataset.row));
            if (targetCells.length === 0) continue;
            const count = Math.min(targetCells.length, unusedItems.length);
            for (let k = 0; k < count; k++) {
                fills.push({ cell: targetCells[k], item: unusedItems[k], letter, col: c, row: parseInt(targetCells[k].dataset.row) });
            }
        }
        if (fills.length === 0) return;
        fills.sort((a, b) => a.row - b.row || a.col - b.col);
        const ghostPromises = [];
        for (let i = 0; i < fills.length; i++) {
            const fill = fills[i];
            if (fill.item.used) continue;
            const srcEl = document.querySelector(`#pool-grid-container [data-letter-id="${fill.item.id}"]`);
            const fromRect = srcEl ? srcEl.getBoundingClientRect() : fill.cell.getBoundingClientRect();
            const toRect = fill.cell.getBoundingClientRect();
            fill.item.used = true;
            setCellContent(fill.cell, fill.letter, fill.item.id);
            fill.cell.style.color = 'transparent';
            renderPool();
            ghostPromises.push(new Promise(resolve => {
                flyGhost(fromRect, toRect, fill.letter, () => {
                    fill.cell.style.color = '';
                    playKeySound();
                    resolve();
                });
            }));
            if (i < fills.length - 1) await sleep(60);
        }
        await Promise.all(ghostPromises);
    } finally {
        autoFillRunning = false;
        saveProgress();
    }
}

async function resetAllLettersToPool() {
    if (levelLocked || resetRunning || autoFillRunning || animationRunning) return;
    closeHintPanel();
    resetRunning = true;
    try {
        const cells = Array.from(document.querySelectorAll('.target-cell'))
            .filter(c => c.innerText !== "")
            .map(c => ({
                cell: c, row: parseInt(c.dataset.row), col: parseInt(c.dataset.col),
                letter: c.innerText, id: c.dataset.letterId
            }));
        if (cells.length === 0) return;
        cells.sort((a, b) => a.row - b.row || a.col - b.col);
        const ghostPromises = [];
        for (let i = 0; i < cells.length; i++) {
            const info = cells[i];
            const cell = info.cell;
            const cellRect = cell.getBoundingClientRect();
            const poolSnap = snapshotPool();
            const item = liberarLetraById(info.id);
            if (!item) continue;
            setCellContent(cell, "", null);
            playDeleteSound();
            flyingLetters.add(item.id);
            renderPool();
            flipPool(poolSnap);
            const newPoolEl = document.querySelector(`#pool-grid-container [data-letter-id="${item.id}"]`);
            if (newPoolEl) {
                const newRect = newPoolEl.getBoundingClientRect();
                ghostPromises.push(new Promise(resolve => {
                    flyGhost(cellRect, newRect, info.letter, () => {
                        flyingLetters.delete(item.id);
                        const el = document.querySelector(`#pool-grid-container [data-letter-id="${item.id}"]`);
                        if (el) el.style.visibility = '';
                        resolve();
                    });
                }));
            } else {
                flyingLetters.delete(item.id);
            }
            if (i < cells.length - 1) await sleep(60);
        }
        await Promise.all(ghostPromises);
    } finally {
        resetRunning = false;
        saveProgress();
    }
}

// ---------- FEEDBACK ----------

function shakeGrid() {
    const board = document.getElementById('board-container');
    board.classList.remove('shake');
    void board.offsetWidth;
    board.classList.add('shake');
    setTimeout(() => board.classList.remove('shake'), 500);
}

async function highlightSuccessSequence() {
    const cells = getSortedCells();
    let tickIdx = 0;
    for (const cell of cells) {
        cell.classList.add('pop-cell');
        playTickSound(tickIdx++);
        setTimeout(() => cell.classList.remove('pop-cell'), 250);
        await sleep(25);
    }
    await sleep(200);
}

// ---------- PISTAS ----------

function ensureCorrectLetterInCell(cell) {
    const correct = cell.dataset.correct;
    if (cell.innerText === correct) return;
    const col = parseInt(cell.dataset.col);
    const current = cell.innerText;
    const currentId = cell.dataset.letterId;
    const poolSnap = snapshotPool();
    const unusedItem = poolColumns[col].find(i => i.letter === correct && !i.used);
    if (unusedItem) {
        if (current !== "") liberarLetraById(currentId);
        unusedItem.used = true;
        setCellContent(cell, correct, unusedItem.id);
        renderPool();
        flipPool(poolSnap);
        return;
    }
    const otherCell = getCellsInColumn(col).find(c => c !== cell && c.innerText === correct);
    if (otherCell) {
        const otherId = otherCell.dataset.letterId;
        if (current !== "") {
            setCellContent(otherCell, current, currentId);
            setCellContent(cell, correct, otherId);
        } else {
            setCellContent(otherCell, "", null);
            setCellContent(cell, correct, otherId);
        }
        renderPool();
        flipPool(poolSnap);
    }
}

async function showCorrectCells() {
    if (animationRunning || levelLocked) return;
    animationRunning = true;
    updateControlsState();
    closeHintPanel();
    pendingPoolLetter = null;
    if (activeCell) { activeCell.classList.remove('active-focus'); activeCell = null; }
    try {
        const cells = getSortedCells();
        let tickIdx = 0;
        for (const cell of cells) {
            if (cell.innerText === "") {
                cell.classList.add('shake-cell');
                setTimeout(() => cell.classList.remove('shake-cell'), 350);
                await sleep(100);
                continue;
            }
            if (cell.innerText === cell.dataset.correct) {
                cell.classList.add('pop-cell');
                playTickSound(tickIdx++);
                setTimeout(() => cell.classList.remove('pop-cell'), 250);
            } else {
                cell.classList.add('shake-cell');
                setTimeout(() => cell.classList.remove('shake-cell'), 350);
                const id = cell.dataset.letterId;
                if (id) {
                    const poolSnap = snapshotPool();
                    liberarLetraById(id);
                    setCellContent(cell, "", null);
                    playDeleteSound();
                    renderPool();
                    flipPool(poolSnap);
                }
            }
            await sleep(100);
        }
        await sleep(200);
    } finally {
        animationRunning = false;
        updateControlsState();
        saveProgress();
    }
}

async function showFullSolution() {
    if (animationRunning || levelLocked) return;
    animationRunning = true;
    updateControlsState();
    closeHintPanel();
    pendingPoolLetter = null;
    if (activeCell) { activeCell.classList.remove('active-focus'); activeCell = null; }
    try {
        const cells = getSortedCells();
        let tickIdx = 0;
        for (const cell of cells) {
            ensureCorrectLetterInCell(cell);
            cell.classList.add('pop-cell');
            playTickSound(tickIdx++);
            setTimeout(() => cell.classList.remove('pop-cell'), 250);
            await sleep(90);
        }
        await sleep(200);
        levelLocked = true;
        const wasAdvance = (currentLevel === completedCount);
        if (wasAdvance) completedCount++;
        animationRunning = false;
        updateControlsState();
        playWinSound();
        showSolvedStory(wasAdvance);
        updateHeader();
        renderMenu();
        saveProgress();
    } catch (e) {
        animationRunning = false;
        updateControlsState();
    }
}

// ---------- COMPROBACIÓN ----------

async function checkSolution() {
    if (animationRunning || levelLocked) return;
    closeHintPanel();
    const targets = document.querySelectorAll('.target-cell');
    let totalCorrectas = 0;
    targets.forEach(cell => {
        if (cell.innerText === cell.dataset.correct) totalCorrectas++;
    });
    if (totalCorrectas === targets.length) {
        animationRunning = true;
        levelLocked = true;
        updateControlsState();
        activeCell = null;
        try {
            await highlightSuccessSequence();
            playWinSound();
            const wasAdvance = (currentLevel === completedCount);
            if (wasAdvance) completedCount++;
            animationRunning = false;
            showSolvedStory(wasAdvance);
            updateHeader();
            renderMenu();
            saveProgress();
        } catch (err) {
            animationRunning = false;
        }
    } else {
        playLoseSound();
        shakeGrid();
    }
}

// ---------- HISTORIA ----------

function setStoryContent(title, storyText) {
    document.getElementById('story-title').innerText = title;
    const list = document.getElementById('story-list');
    list.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = storyText;
    list.appendChild(p);
}

function showSolvedStory(wasAdvance) {
    const nextBtn = document.getElementById('next-level-btn');
    const returnBtn = document.getElementById('return-btn');
    const replayBtn = document.getElementById('replay-btn');
    nextBtn.style.display = 'none';
    replayBtn.style.display = 'none';
    returnBtn.style.display = 'none';
    if (wasAdvance) {
        setStoryContent('✨ ¡Hechizo Resuelto! ✨', dailyData.story);
        if (currentLevel + 1 < allLevels.length) {
            nextBtn.style.display = 'inline-block';
            updateNextLevelMeta();
        } else {
            const meta = levelMeta[currentLevel];
            setStoryContent(`🎉 ¡Has completado el Acto ${meta.actRoman}! 🎉`, dailyData.story);
            const hint = document.createElement('p');
            hint.className = 'story-hint';
            hint.textContent = 'Has llegado al final de la historia. ¡Gracias por jugar!';
            document.getElementById('story-list').appendChild(hint);
        }
    } else {
        setStoryContent('✨ ¡Hechizo Resuelto! ✨', dailyData.story);
        if (completedCount < allLevels.length) {
            returnBtn.style.display = 'inline-block';
            returnBtn.textContent = `Volver al nivel ${completedCount + 1}`;
        }
    }
    document.getElementById('story-section').style.display = 'block';
    setTimeout(() => {
        document.getElementById('story-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function showViewMode() {
    const nextBtn = document.getElementById('next-level-btn');
    const returnBtn = document.getElementById('return-btn');
    const replayBtn = document.getElementById('replay-btn');
    nextBtn.style.display = 'none';
    returnBtn.style.display = 'none';
    setStoryContent('📖 Nivel Completado', dailyData.story);
    replayBtn.style.display = 'inline-block';
    replayBtn.textContent = 'Reiniciar nivel';
    if (completedCount < allLevels.length) {
        returnBtn.style.display = 'inline-block';
        returnBtn.textContent = `Volver al nivel ${completedCount + 1}`;
    }
    document.getElementById('story-section').style.display = 'block';
}

function loadNextLevel() {
    if (currentLevel + 1 >= allLevels.length) return;
    startLevel(currentLevel + 1, 'play');
}

function replayCurrentLevel() {
    if (currentLevel >= completedCount) return;
    startLevel(currentLevel, 'play');
}

function returnToProgress() {
    if (completedCount >= allLevels.length) return;
    startLevel(completedCount, 'play');
}

// ---------- MENÚ ----------

function openMenu() {
    document.body.classList.add('menu-open');
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('open');
    renderMenu();
}

function closeMenu() {
    document.body.classList.remove('menu-open');
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
}

function toggleMenu() {
    if (document.body.classList.contains('menu-open')) closeMenu();
    else openMenu();
}

function renderMenu() {
    const list = document.getElementById('levels-list');
    if (!list) return;
    list.innerHTML = '';
    const firstNonEmptyIdx = acts.findIndex(a => a.levels.length > 0);
    let globalIdx = 0;
    acts.forEach((act, ai) => {
        const actStartIdx = globalIdx;
        const actEndIdx = globalIdx + act.levels.length - 1;
        const actDetails = document.createElement('details');
        actDetails.className = 'sidebar-section act-details';
        const containsCurrent = act.levels.length > 0 && currentLevel >= actStartIdx && currentLevel <= actEndIdx;
        if (containsCurrent || ai === firstNonEmptyIdx) actDetails.open = true;
        const summary = document.createElement('summary');
        summary.textContent = act.title;
        actDetails.appendChild(summary);
        const actContent = document.createElement('div');
        actContent.className = 'act-content';
        if (act.levels.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'act-empty';
            empty.textContent = 'Próximamente...';
            actContent.appendChild(empty);
        } else {
            act.levels.forEach(() => {
                const idx = globalIdx;
                const isCompleted = idx < completedCount;
                const isNext = idx === completedCount;
                const isCurrent = idx === currentLevel;
                actContent.appendChild(buildLevelItem(idx, isCompleted, isNext, isCurrent));
                globalIdx++;
            });
        }
        actDetails.appendChild(actContent);
        list.appendChild(actDetails);
    });
}

function buildLevelItem(idx, isCompleted, isNext, isCurrent) {
    const label = `Nivel ${idx + 1}${isCurrent && !isCompleted ? ' · En curso' : ''}`;
    if (isCompleted) {
        const details = document.createElement('details');
        details.className = 'level-item completed';
        const summary = document.createElement('summary');
        summary.className = 'level-summary';
        summary.innerHTML = `<span class="level-badge">✓</span><span>${label}</span>`;
        details.appendChild(summary);
        const storyDiv = document.createElement('div');
        storyDiv.className = 'level-story';
        storyDiv.textContent = allLevels[idx].story;
        const actions = document.createElement('div');
        actions.className = 'level-actions';
        const viewBtn = document.createElement('button');
        viewBtn.className = 'level-action-btn';
        viewBtn.textContent = 'Ver nivel';
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
            startLevel(idx, 'view');
        });
        const replayBtn = document.createElement('button');
        replayBtn.className = 'level-action-btn';
        replayBtn.textContent = 'Reiniciar nivel';
        replayBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
            startLevel(idx, 'play');
        });
        actions.appendChild(viewBtn);
        actions.appendChild(replayBtn);
        storyDiv.appendChild(actions);
        details.appendChild(storyDiv);
        return details;
    }
    if (isNext) {
        const wrapper = document.createElement('div');
        wrapper.className = 'level-item next';
        const summary = document.createElement('div');
        summary.className = 'level-summary';
        summary.innerHTML = `<span class="level-badge">${isCurrent ? '★' : '▶'}</span><span>${label}</span>`;
        wrapper.appendChild(summary);
        const btn = document.createElement('button');
        btn.className = 'level-start-btn';
        btn.textContent = isCurrent ? 'Seguir jugando' : 'Comenzar este nivel';
        btn.addEventListener('click', () => {
            closeMenu();
            if (idx === currentLevel) return;
            startLevel(idx, 'play');
        });
        wrapper.appendChild(btn);
        return wrapper;
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'level-item locked';
    const summary = document.createElement('div');
    summary.className = 'level-summary';
    summary.innerHTML = `<span class="level-badge">🔒</span><span>${label}</span>`;
    wrapper.appendChild(summary);
    return wrapper;
}

// ---------- MODAL DE CÓDIGO ----------

function openCodeModal() {
    const overlay = document.getElementById('code-modal');
    const input = document.getElementById('code-input');
    input.value = '';
    input.classList.remove('shake');
    document.getElementById('code-error').style.display = 'none';
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 80);
}

function closeCodeModal() {
    document.getElementById('code-modal').classList.remove('open');
}

function confirmCode() {
    const input = document.getElementById('code-input');
    const code = input.value.trim();
    if (code === SECRET_CODE) {
        closeCodeModal();
        completedCount = allLevels.length;
        playWinSound();
        closeMenu();
        const targetIdx = Math.min(currentLevel, allLevels.length - 1);
        startLevel(targetIdx, 'view');
    } else {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);
        document.getElementById('code-error').style.display = 'block';
        playLoseSound();
    }
}

function confirmResetProgress() {
    if (!confirm('¿Borrar todo el progreso guardado y empezar desde el principio?')) return;
    clearProgress();
    completedCount = 0;
    currentLevel = 0;
    closeMenu();
    startLevel(0, 'play');
}

// ---------- LIBRO MODAL ----------

function openBookModal() {
    renderBookContent();
    document.getElementById('book-modal').classList.add('open');
}

function closeBookModal() {
    document.getElementById('book-modal').classList.remove('open');
}

function renderBookContent() {
    const content = document.getElementById('book-content');
    let html = '';
    let globalIdx = 0;
    let hasAnyChapter = false;
    acts.forEach((act) => {
        const startIdx = globalIdx;
        globalIdx += act.levels.length;
        const anyCompleted = act.levels.some((_, li) => startIdx + li < completedCount);
        if (!anyCompleted) return;
        html += `<div class="book-act-title">${act.title}</div>`;
        html += `<div class="book-act-divider">❦ ❦ ❦</div>`;
        act.levels.forEach((lvl, li) => {
            const idx = startIdx + li;
            if (idx >= completedCount) return;
            hasAnyChapter = true;
            html += `<div class="book-chapter">`;
            html += `<div class="book-chapter-title">Capítulo ${idx + 1}</div>`;
            html += `<p class="book-chapter-text">${lvl.story}</p>`;
            html += `</div>`;
        });
    });
    if (!hasAnyChapter) {
        html = `<p class="book-empty">Aún no has descubierto ninguna historia.<br>Completa niveles para desbloquear los capítulos y poder leerlos aquí.</p>`;
    } else {
        const hasMore = completedCount < allLevels.length;
        html += `<div class="book-end">❦</div>`;
        html += `<p class="book-end-text">${hasMore ? 'La historia continúa…' : 'Fin.'}</p>`;
    }
    content.innerHTML = html;
    content.scrollTop = 0;
}

// ---------- BOOTSTRAP ----------

window.onload = function () {
    buildLevelIndex();
    const saved = loadProgress();
    if (saved) {
        restoreFromSave(saved);
    } else {
        startLevel(0, 'play');
    }

    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); confirmCode(); }
            else if (e.key === 'Escape') { e.preventDefault(); closeCodeModal(); }
        });
    }

    window.addEventListener('beforeunload', saveProgress);
    window.addEventListener('pagehide', saveProgress);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') saveProgress();
    });
};