# WebDD-NS-Erfgoed

## 16/02/2026
- 09:30, uitleg van Vasilis over het Browser Tech vak en wat voor opdracht wij gaan aanpakken
- 11:00 laptop moest updaten....
- 12:00 eindelijk beginnen aan website bouwen
- 13:00 basis informatie toegevoegd aan website
- 14:30 begonnen aan basis css
- 15:00 Website gelezen over MAC Icons
- 16:00 Checkout met Braham

Gesprek met Braham:
Braham is nieuw bij de minor dus het gesprek was wel interessant. We hebben beide onze websites laten zien en ik heb zelfs wat nieuwe ideeën gekregen voor mijn eigen website.
Zelf heb ik vandaag gewerkt aan mijn erfgoed ns website, ik heb een goede basis kunnen maken met forms en fieldsets waar ik zelf best blij mee ben. Ik moesst de opbouw van de elementen wel een keer opnieuw schrijven omdat ik de opbouw van <fieldset> en <label> verkeerd had gedaan.
Morgen ben ik van plan om de CSS de verbeteren, de content aan de vullen van de volgende pagina's en de input elements correct in te vullen.

## 17/02/2026
- 09:30 begonnen met mini overhoring over document van MAC Icons
- 11:30 workshop over HTML elementen
- 12:30 korte pauze
- 13:00 gewerkt aan de NS stijl website
- 16:00 checkout met Joost

Gesprek met Joost:
Kort vertelt wat ik vandaag heb bereikt, ik heb gewerkt aan de CSS van mijn website en meer met de input elementen. Ik heb overal, indien nodig was, required van gemaakt en de juiste input types gebruikt. Ik heb ervoor gezorgt dat de gebruiker feedback krijgt wanneer zij iets verkeerd hebben ingevuld en heb zelf ervoor gezorgd dat bepaalde elementen uit gaan als ze bepaalde antwoorden hebben gekozen in de form.

Morgen:
Tekst elementen in klappen op bepaalde antwoorden, meer kijken naar eis voorwaarden opdracht

## 02/03/2026
- 09:30 begonnen met een korte intro van Vasilis na de vakantie, we kregen wat snelle uitleg en wat korte opfrissers.
- 10:00 begonnen met verder werken aan de NS erfgoed website (deze keer geen workshop gevolgd)
- 12:30 korte pauze
- 13:00 uitleg over UX opdracht (Links)
- 13:10 verder werken aan de website
- 15:00 Weekly Geek doornemen
- 16:00 checkout met Matthew

Gesprek met Matthew:
Vandaag heb ik verassend veel bereikt voor een eerste dag na de vakantie. Ik ben vandaag begonnen met het omgooien van mijn input types. De types zelf waren correct, maar de opstelling van de CSS niet. Ik had veel input types de verkeerde opmaak gegeven waardoor het rommelig was. Daarnaast heb ik gewerkt aan de feedback voor een invalid en valid input. Ik heb ook gewerkt aan pagination van de website. Ik wil nog meer pagina's toevoegen, 1 grote pagina is niet makkelijk leesbaar en is rommelig, ik heb een dynamische pagination toegevoegd (Nog geen overzichtelijk systeem). Als laatste heb ik opnieuw gewerkt aan het verbergen en vertonen van secties. Vooraf had ik dat een sectie doorzichtig was, maar dit was rommelig, nu heb ik het zo gemaakt dat een sectie doorzichtig is als je nog niet heb aangeklikt, zichtbaar wordt als je op "Ja" klikt, en verdwijnt als je op "Nee" klikt.

Morgen:
Datum input stylen met CSS. Pagination wat verder uitwerken, en meer CSS stylen voor de input types (Bijvoorbeeld als er twee naast elkaar moeten worden geplaats, of kortere input types voor huisnummers). Ook wil ik werken aan de Land codes. Ook ga ik focussen om alle code te kunnen werken zonder Javascript, sommige onderdelen zijn heel erg afhankelijk van Javascript.

## 03/03/2026
- 09:30 Weekly Geek
- 10:30 Verder werken aan de NS Erfgoed Website (Ook deze keer geen workshop)
- 12:30 Pauze
- 13:15 Verder gewerkt aan de website
- 14:30 Jacco geholpen met Code
- 16:00 Checkout

Gesprek met Teun:
Vandaag heb ik heel veel gedaan. Ik heb bijna al mijn doelen van gisteren bereikt en heb zelfs meer kunnen doen. Ik begon vandaag met Javascript code omzetten naar CSS. Dit was niet heel makkelijk. Hoe één korte functie in javascript makkelijk te maken was, was het moeilijk om dit compact te houden voor CSS. Uiteindelijk heb ik dit met heel veel code moeten aanpakken.
<img width="1199" height="653" alt="image" src="https://github.com/user-attachments/assets/255cb973-acff-42ee-92c8-42d0fa560b1c" />
Daarna ben ik verder gegaan met de pagination. Op dit moment werd dit via javascript gedaan, maar ik wilde een failsafe maken voorals er geen javascript kon worden geladen. In de Javascript en CSS heb ik een systeem gemaakt waar bepaalde css alleen wordt geladen als er javascript aanwezig is, dit geldt ook voor de pagination. De pagination is alleen aanwezig als er javascript is, zo niet dan is het een one-pager.
Daarna ben ik bezig geweest om de max-datum te houden op de huidige datum. Dit heb ik met een paar google searches moeten doen, maar uiteindelijk is het mij gelukt om te de huidige datum te krijgen.
Verder heb ik mij heel erg gefocust op het netjes maekn van CSS elementen en HTML code op te ruimen waar nodig was.

Volgende keer:
Ik wil kijken of ik nog meer Javascript kan omzetten naar CSS. Hoewel dit ver gezocht is, wil ik het wel proberen. Ik wil mijn input types nog verder stylen zodat het nog duidelijker is wanneer is valid is en wanneer niet. Ook wil ik de land codes proberen. Ik heb veel gezocht op google maar kon geen antwoorden vinden, misschien moet ik het proberen met ChatGPT.

## 06/03/2026
- 14:15 Kort gewerkt
- 14:40 Gesprek met Sanne
- 15:30 Gesprek met Vasilis

Uitleg:
Ik heb een kort gesprek gehad met Vasilis over mijn progressie binnen de website en hoe ik ervoor sta. Hij was zeer tevreden en gaf mij zelf wat tips waar ik op moet letten voor volgende week. Ten eerste gebruik ik nu :invalid en :valid voor mijn website. Deze kunnen weer terug veranderd worden naar :user-valid en :user-invalid, deze werken beter. Ik heb deze in eerste instantie niet gebruikt omdat deze niet overeen kwamen met de CSS validation in Visual studio code, maar Vasilis gaf aan dat ik daar niet op hoef te letten. Daarnaast heb ik een Indeterminate state gemaakt , maar op dit moment heb ik dat gedaan met :invalid. Dit kan dus met de indeterminate state gedaan worden in CSS. Als laatste moet ik opletten dat ik de required state gebruik in html. Op dit moment heb ik ze altijd op required staan, maar met javascript moet ik e alleen required maken als ze zichtbaar zijn.

## 09/03/2026
- 09:30 Intro Rijk van Zanten
- 10:30 Verder werken aan de NS Erfgoed Website (Ook deze keer geen workshop)
- 12:00 Pauze
- 12:45 Verder gewerkt aan de website
- 16:00 Checkout

Gesprek met:
Vandaag heb ik heel veel bereikt wat ik vorige week als doel had opgesteld. Mijn doelen waren voor vandaag:
- :valid/:invalid omzetten naar :user-valid en :user-invalid
- De indeterminate state gebruiken inplaats van invalid
- Required dynamisch toevoegen aan objecten als deze actief zijn.
<br>
Alle drie de doelen zijn vandaag best snel bereikt. De :user-valid oplossing bleek beter te werken omdat deze pas de valid state aanpast als je klaar bent met typen, de :valid state houdt dit constant bij tijdens elke letter die je typt. De indeterminate state is een betere oplossing als er nog geen radio buttons zijn aangeklikt, voorgaande had ik de invalid state, maar dit gaf vaak wat kleine problemen als je nog niks had ingevuld, alles was altijd rood. En als laatste heb ik de required dynamisch gemaakt, deze wordt nu door middel van javascript toegevoegd als hij een opacity van 1 heeft. Natuurlijk heb ik hiervoor ook een fallback gemaakt in de HTML, bepaalde elementen zijn alijd required, maar children zijn vaan niet required.
<br>
// Nog niet geopend, niet required
<img width="1536" height="634" alt="image" src="https://github.com/user-attachments/assets/dbf57b8f-ebfe-48a7-b4b3-5a20d7f9049e" />

// Geopend, met required
<img width="1541" height="650" alt="image" src="https://github.com/user-attachments/assets/b7fce61f-7871-4c27-9ee2-0e76459fa552" />

<br>
Naast deze doelen heb ik verder gewerkt aan de derde pagina, hier moet je namelijk verkrijgers dynamisch toe kunnen voegen met knoppen, dit is mij vandaag evrassend genoeg nog gelukt voor 4 uur, en in deze objecten zit zelfs een validatie. Je moet de vorige verkrijger compleet ingevuld hebben voordat je naar de volgende gaat.
<br><br>
// Neutrale staat
<img width="1550" height="836" alt="image" src="https://github.com/user-attachments/assets/01f346a2-5a0f-4c92-837b-017747cb2151" />

// Toegevoegde staat
<img width="1522" height="823" alt="image" src="https://github.com/user-attachments/assets/4ffb76f8-e78a-41cb-baa3-3a8fa76a1ad7" />

// Nog niet ingevulde staat
<img width="1538" height="785" alt="image" src="https://github.com/user-attachments/assets/b1be85b3-c554-497e-8362-9708f5a0abb5" />
<br><br>
Morgen ga ik werken aan wat simpele styling voor de website, ik wil het logo maken met een svg en deze van kleur laten veranderen op hover. Ik wil wat kleine details toevoegen om het meer als een NS website te laten voelen, en ik wil het dynamisch toevoegen van verkrijgers verbeteren.

## 10/03/2026
- 09:30 Weekly Nerd
- 10:30 Zelfstandig werken
- 12:30 Pauze
- 13:15 Weer zelfstandig doorwerken
- 16:00 Checkout

Gesprek met:
Vandaag was een wat minder productieve dag als het gaat om nieuwe onderdelen. Vandaag heb ik mij meer gefocust op kleine details. Ik ben verder fewerkt met het verbeteren van het toevoegen van meerdere verkrijgers. Dit systeem had nog een paar kleine foutjes zoals:
Als je een nieuwe verkrijger (bijvoorbeeld 2) toevoegt en dan weer verwijdert, dan is het volgende nieuwe nummer 3, ondanks dat nummer 2 is verwijderd. Dit is nu gefixt dor constant te checken hoeveel verkrijgers er aanwezig zijn.
<img width="864" height="158" alt="image" src="https://github.com/user-attachments/assets/71a83493-6091-433b-a6f5-3473b0c89ae5" />
<br><br>

Naast deze verbeterde functie heb ik de stijl van mijn website omgegooid naar een modernere en meer accurate stijl. Mijn eerste stijl had veel geel, maar dit viel (persoonlijk) niet goed op het oog. Dus heb ik de meer witte website van NS zelf aangehouden.
<br>

// Oud
<br>
<img width="946" height="450" alt="image" src="https://github.com/user-attachments/assets/825144b3-ad7f-4dc6-abfb-e41becd8aafe" />

<br>
// Nieuw
<br>
<img width="790" height="450" alt="image" src="https://github.com/user-attachments/assets/dd0ecb43-ab1c-48f3-8dfb-d6b66ceea629" />
<br><br>

Daarna heb ik wat kleine details verwerkt. Het logo boven aan de website is nu een `<svg>` inplaats van een `<img>`. Door deze verandering kan ik het logo niet alleen dynamisch maken met de website, maar heb ik er nu ook interactie aan toegevoegd met `:hover` 
<br>
// Zonder hover
<br>
<img width="574" height="228" alt="image" src="https://github.com/user-attachments/assets/2504127b-cb0b-4276-b63f-885852e32e61" />
<br>

// Met Hover
<br>
<img width="574" height="228" alt="image" src="https://github.com/user-attachments/assets/14a2a264-90c8-4cf7-8810-f2d1e347b643" />
<br><br>

En als laatste heb ik de waarschuwing van de website veranderd van de eerste grote `<h1>` text naar een nu mooie gedeelte van de website zoals het op de officiele NS pagina staat
<br>
// Oud
<br>
<img width="715" height="151" alt="image" src="https://github.com/user-attachments/assets/7a5f1df7-875f-47bb-b316-1ff13c64dba4" />

<br>
// Nieuw
<br>
<img width="715" height="151" alt="image" src="https://github.com/user-attachments/assets/e8e0d743-57db-4ace-a383-52c62c2641b5" />

<br><br>
// Officieel
<br>
<img width="500" height="151" alt="image" src="https://github.com/user-attachments/assets/149f63d0-f9cc-4d7d-a233-163e26f0cacc" />
<br><br>
Voor volgende week:
Landcodes fixen, op dit moment zijn het dubbele letters, maar het moeten er 3 zijn
Transition op het logo als hij van kleur veranderd.

## 13/03/2026
- 09:30 Gesprek met Vasilis

Uitleg:
<br>Ik heb vandaag mijn voortgangsgesprek gehad met Vasislis. Hij zag er zeer tevreden uit en was blij met de kleine details op mijn pagina. Ik heb hem alle drie de pagina's laten zien en hij had een paar tips wwaar ik mij volgende week op kan focussen. IK zal iets meer moeten kijken naar detail, sommige teksten/titels hebben veel witruimte of staan net niet goed in hun vakken. Deze kleine details zijn voornamelijk CSS probleme. Vasilis gaf ook aan dat ik nu eerst moest kijken naar detail en opmaak voordat ik nieuwe elementen en functies ga toevoegen. 
<br><br>
Doelen:
- CSS problemen oplossen
- Toevoegen van verkrijgers op pagina 3 anders neerzetten, staat nu bovenaan de pagina, maar doe het onderaan.
- Teksten en h1/h2 minder witruimte geven

## Week overzicht:
Verassend veel progressie gemaakt. Ik heb mij voornamelijk gefocut op het afmaken en opmaken van de website op een manier dat ik het leesbaar vind. Ik heb het hele thema omgegooid naar een meer wit thema en minder geel. Ik heb de elementen wat netter opgemaakt en beter ingedeelt en wil mij vanaf nu focussen op het afmaken van functies en de laatste puntjes op de i zetten.

## 16/02/2026
- 09:30 Kort gesprek met Vasilis of wij alles nog begrepen van de opdracht
- 10:00 laatste loodjes voor BT
- 13:00 Pauze
- 13:30 Verder zelfstandig werken
- 16:00 checkout

Gesprek met Joost:
<br>Vandaag was een dag voor reparatie. Ik heb mij eerst gefocust op het verbeteren van de witruimte tussen tekst elementen. Ik mijn vorige versie hadden de `<legend>` elementen veel witruimte. Om dit te fixen heb ik gewerkt met `margin-top` en `margin-bototm` zodat ik niet de hele indeling van de pagina hoefde te veranderen:
<br><br>
// Oude versie <br>
<img width="611" height="128" alt="image" src="https://github.com/user-attachments/assets/a9256550-6964-4ee0-95c9-42fd442244eb" />
<br>
// Nieuwe versie <br>
<img width="813" height="165" alt="image" src="https://github.com/user-attachments/assets/cffaca0c-80c1-42de-8c6b-ea9d61a36846" />
<br><br>
Daarnaast ben ik verder gaan werken aan de intro pagina van het erfbelasting formulier. In het officiele formulier is de eerste pagina een 'informatie' pagina waar standaarden en voorbereidingen worden aangegeven voordat je begint met het invullen van het document. Dit wilde ik wel op mijn pagina zetten sinds dit een belangrijk onderdeel is.
<br>
// Officiele A4 <br>
<img width="724" height="833" alt="image" src="https://github.com/user-attachments/assets/f28bcadd-fca4-4031-8726-2e628eda83a3" />
<br>
// Mijn indeling (Gesloten) <br>
<img width="1092" height="453" alt="image" src="https://github.com/user-attachments/assets/7b400c01-e51b-4b67-9673-3b6131ce49d8" /> 
<br>
// Mijn indeling (Open) <br>
<img width="1090" height="878" alt="image" src="https://github.com/user-attachments/assets/895faf4b-83fd-4d9a-9170-c7a57ad08604" />
<br><br>
Als laatste heb ik de derde pagina afgemaakt, maar op het einde van de derde pagina moet je een handtekening zetten, dus ben ik druk bezig geweest om dit toe te kunnen voegen aan mijn website. Ik wist dat je dit met `<canvas>` kon doen, maar het tekenen zelf was nog ebst pittig, hier had ik hulp bij nodig van het internet. Na het afmaken van de teken functie kwam ik erachter dat het niet responsive is. In dit gevoel bedoel ik hiermee: Als je eerst tekent en daarna de pagina naar beneden schaalt in breedte, dan schaalt de tekening niet mee. Hoewel het nog steeds niet perfect is, is er een vorm van schalen: <br>

// Canvas <br>
<img width="824" height="474" alt="image" src="https://github.com/user-attachments/assets/cc2477d7-1fcc-4ed2-a4c1-83627f423cc0" />
<br>

// Canva (Getekent) <br>
<img width="811" height="466" alt="image" src="https://github.com/user-attachments/assets/cfb67604-f1ae-457a-b7c1-d9617d54166a" />
<br>

// Canvas code <br>
// HTML <br><br>
<img width="634" height="162" alt="image" src="https://github.com/user-attachments/assets/590c8a02-92aa-4e30-8838-82419f7dd3e2" /> <br>
// CSS <br><br>
<img width="454" height="606" alt="image" src="https://github.com/user-attachments/assets/ca7a2c99-5713-40c9-84d0-20517f9e1716" /> <br>
// Javascript <br><br>
<img width="1480" height="817" alt="image" src="https://github.com/user-attachments/assets/45140307-8d14-4b4e-bec4-2720862e1d58" /> <br>
<img width="787" height="276" alt="image" src="https://github.com/user-attachments/assets/2d7fc704-84e6-4507-8cb2-3d1e8845ba8d" /> <br><br>

## Week 4
Deze week heb ik mijn project zo goed als af kunnen maken. Niet alleen heb ik een mooie form kunnen maken, maar de styling is nog heel erg accuraat naar de NS ook! Ik ben super blij met het resultaat dat ik nu heb opgezet. Ik heb een form met veel details en leuke extraa'tjes, maar het geweldige aan deze website is dat het ook werkt zelfs als de javascript het niet doen. Ik heb een fallback gemaakt voor als de laptop (voor wat voor reden dan ook) geen javascript ondersteunt! Tijdens deze korte periode heb ik zo veel geleerd over form element dat ik haast zou kunnen zeggen dat ik begon met dit project als een code beginner, en dat ik nu weg loop met een advanced level, zo een groot evrschil zit erin. Ik bene cht super blij met het resultaat dat ik op heb geleverd en zou het zo nog een keer willen doen! Het enige dat ik jammer vind is dat ik niet mere dat 3 pagina's heb kunnen uitwerken. Het liefst had ik er zo veel mogelijk gemaakt, maar dit is alles dat mogelijk was binnen 4 weken.
<br>
De volgende keer wil ik meer functies vanaf het begin maken. Deze keer heb ik alles tegelijkertijd gedaan, maar de volgende keer wil ik eerst heel veel functies klaarzetten en daarna alles mooi maken en klaarzetten.

## Bronnenlijst
// Links <br>
- Flex shrink https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-shrink
- Gemaakt met een box-shadow generator: https://cssgenerator.org/box-shadow-css-generator.html
- Voor de drawing pad: https://medium.com/@divbydiv/build-a-signature-pad-in-html-css-js-canvas-bd174d999392
- Tekenen zelf: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
- VOor .onbeforeunload: https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
- Max datepicker https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today

// Prompts <br>
- Vraag aan Gemini: rare vraag, maar ik wil window.print(); doen, maar dan zonder een specifieke ID, hoe kan ik het zo maken dat hij wel correct print zonder de "huidige" pagina te pakken
- Antwoord: Gebruik @media print in CSS (De meest "CSS" manier). Dit is vaak de makkelijkste methode. Je gebruikt nog steeds de normale window.print(), maar je vertelt de browser via CSS dat hij alles moet verbergen behalve wat jij wilt zien op papier. Omdat je geen classes mag gebruiken, doen we dit op basis van tags: 
<br><br>
- Vraag: Ik heb geprobeert deze code toe te passen, maar sommige onderdelen zijn ontzichtbaar, wat gaat er fout? *Gedeelte van de code toegevoegd*.
- Antwoord: Deze code ziet er heel goed uit, je bent er bijna! In CSS is de gouden regel: de meest specifieke selector wint. Omdat jij in je normale code al heel krachtige en specifieke selectors gebruikt (zoals .activeJs fieldset:has(:indeterminate) > div), is een simpele regel in @media print vaak niet "sterk" genoeg om die te overrulen. Daarom voegen wij !important toe om deze code te overschrijven.
<br><br>
- ChatGPT Prompt: Zou je mij kunnen helpen met een filter maken voor de inputs die niet te zien zijn (Door Opacity: 0;?) Ik krijg de filter niet voor elkaar.
- Antwoord: Je hoeft de opacity niet mee te nemen in de filter! Alleen de pointer events van jouw CSS! Bijvoorbeeld:
<br><br>
- Vraag: De pagina herlaadt soms, hoe kan ik dit fixen + [code]
- Antwoord: Voorkom dat de pagina herlaadt (als de knop in een form staat) met e.preventDefault(); Optioneel kan je ook onderaan de functie de required state herberekenen met de logica van een andere functie die je gebruikt: if (typeof syncRequiredFields === "function") {syncRequiredFields();}
<br><br>
- Vraagje aan gemini: Ik heb nu een canvas gemaakt voor mijn form om een handtekening te kunnen zetten, maar deze lijkt niet responsive (als ik al heb getekent, is dit te fixen?)
- Antwoord: Kleine fix voor je JavaScript: Omdat het canvas nu responsive is via CSS (width: 100%), kan de tekenpositie soms verschuiven als je het venster groter of kleiner maakt. Gebruik deze verbeterde draw functie om dat op te vangen:
<br><br>
- ChatGPT: Van GetElementByID naar querySelectorAll.
- Antwoord: Ik zie het probleem al! Op dit moment roep je de naam 'datePickerID' aan als element en niet als class, verander dit naar .datePickerID. Daarna moet je elke datePicker aanreoepen in de javascript met een forEach.



















