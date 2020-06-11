import React from 'react';
import PropTypes from 'prop-types';
import './Imprint.scss';

const Imprint = props => {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-12">

                    <button type={"button"} className={"dom-btn close-imprint"} onClick={() => props.setShowImprint(false)}>X Close</button>
                    <h1>Impressum</h1><br/><br/>
                    Informationspflicht laut § 5 TMG.
                    <br/><br/>
                    Dominik Amrugiewicz
                    <br/><br/>

                    Bensheimer Straße,
                    67547 Worms,
                    Deutschland
                    <br/><br/>

                    Tel.: 017632902967
                    E-Mail: hi@domthedev.com
                    <br/><br/>

                    Quelle: Erstellt mit dem Impressum Generator von AdSimple in Kooperation mit hashtagmann.de
                    <br/><br/>

                    <h3>EU-Streitschlichtung</h3>
                    <br/><br/>
                    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten
                    wir
                    Sie
                    über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der
                    Europäischen
                    Kommission unter http://ec.europa.eu/odr?tid=321185052 zu richten. Die dafür notwendigen
                    Kontaktdaten
                    finden
                    Sie oberhalb in unserem Impressum.
                    <br/><br/>

                    Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    <br/><br/>

                    <h3>Haftung für Inhalte dieser Website</h3>
                    <br/><br/>
                    Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle
                    Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für
                    eigene
                    Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich.
                    Leider
                    können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell
                    für
                    jene
                    die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir
                    nicht
                    verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach
                    Umständen
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    <br/><br/>

                    Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von
                    Informationen
                    nach
                    den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im
                    Falle
                    unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt.

                    Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu
                    kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im
                    Impressum.
                    <br/><br/>

                    <h3>Haftung für Links auf dieser Website</h3>
                    Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind.
                    Haftung
                    für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten
                    hatten
                    und
                    haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort
                    entfernen
                    würden, wenn uns Rechtswidrigkeiten bekannt werden.
                    <br/><br/>

                    Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie
                    finden
                    die Kontaktdaten im Impressum.
                    <br/><br/>

                    <h3>Urheberrechtshinweis</h3>
                    Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der
                    Bundesrepublik
                    Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen
                    oder
                    verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir
                    die
                    unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                    <br/><br/>

                    Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns
                    zu
                    kontaktieren.
                    <br/><br/>


                    <h2>Datenschutzerklärung</h2><br/>
                    <h3>Datenschutz</h3>
                    <br/><br/>
                    Wir haben diese Datenschutzerklärung (Fassung 10.06.2020-321185052) verfasst, um Ihnen gemäß der
                    Vorgaben
                    der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln, wie wir
                    Daten
                    verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.

                    <br/><br/>
                    Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns
                    bei
                    der
                    Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.

                    <br/><br/>
                    <h3>Automatische Datenspeicherung</h3>
                    Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und
                    gespeichert,
                    so auch auf dieser Webseite.

                    <br/><br/>
                    Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem
                    diese
                    Webseite gespeichert ist) automatisch Daten wie

                    <br/><br/>
                    die Adresse (URL) der aufgerufenen Webseite
                    Browser und Browserversion
                    das verwendete Betriebssystem
                    die Adresse (URL) der zuvor besuchten Seite (Referrer URL)
                    den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird
                    Datum und Uhrzeit
                    in Dateien (Webserver-Logfiles).

                    <br/><br/>
                    In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir
                    geben
                    diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
                    rechtswidrigem Verhalten eingesehen werden.

                    <br/><br/>
                    <h3>Cookies</h3>
                    Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.
                    Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende
                    Datenschutzerklärung besser verstehen.

                    <br/><br/>
                    <h3>Was genau sind Cookies?</h3>
                    Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
                    beispielsweise
                    Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern
                    kleine
                    Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.

                    <br/><br/>
                    Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten
                    verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für
                    andere
                    Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem
                    Computer
                    gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres
                    Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines
                    Cookies
                    müssen zusätzlich ein oder mehrere Attribute angegeben werden.

                    <br/><br/>
                    Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
                    Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
                    „userbezogenen“
                    Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet
                    Ihnen
                    Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in
                    anderen
                    wie
                    beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.

                    <br/><br/>
                    Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden
                    direkt
                    von
                    unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics)
                    erstellt.
                    Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die
                    Ablaufzeit
                    eines
                    Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine
                    Software-Programme
                    und
                    enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf
                    Informationen
                    Ihres
                    PCs zugreifen.

                    <br/><br/>
                    So können zum Beispiel Cookie-Daten aussehen:

                    <br/><br/>
                    Name: _ga
                    Ablaufzeit: 2 Jahre
                    Verwendung: Unterscheidung der Webseitenbesucher
                    Beispielhafter Wert: GA1.2.1326744211.152321185052
                    Ein Browser sollte folgende Mindestgrößen unterstützen:

                    <br/><br/>
                    Ein Cookie soll mindestens 4096 Bytes enthalten können
                    Pro Domain sollen mindestens 50 Cookies gespeichert werden können
                    Insgesamt sollen mindestens 3000 Cookies gespeichert werden können
                    Welche Arten von Cookies gibt es?
                    Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird
                    in
                    der
                    folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die
                    verschiedenen Arten von HTTP-Cookies eingehen.

                    <br/><br/>
                    Man kann 4 Arten von Cookies unterscheiden:

                    <br/><br/>
                    <h4>Unbedingt notwendige Cookies</h4>
                    Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel
                    braucht
                    es
                    diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft
                    und
                    später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der
                    User
                    sein
                    Browserfenster schließt.

                    <br/><br/>
                    <h4>Funktionelle Cookies</h4>
                    Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt.
                    Zudem
                    werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen
                    Browsern
                    gemessen.

                    <br/><br/>
                    <h4>Zielorientierte Cookies</h4>
                    Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene
                    Standorte,
                    Schriftgrößen oder Formulardaten gespeichert.

                    <br/><br/>
                    <h4>Werbe-Cookies</h4>
                    Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste
                    Werbung
                    zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.

                    <br/><br/>
                    Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten
                    Sie
                    zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.

                    <br/><br/>
                    <h4>Wie kann ich Cookies löschen?</h4>
                    Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder
                    welcher
                    Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise
                    zuzulassen
                    oder zu deaktivieren. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle
                    anderen
                    Cookies zulassen.

                    <br/><br/>
                    Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
                    Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen
                    finden:

                    <br/><br/>
                    Chrome: Cookies in Chrome löschen, aktivieren und verwalten

                    <br/><br/>
                    Safari: Verwalten von Cookies und Websitedaten mit Safari

                    <br/><br/>
                    Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben
                    <br/><br/>

                    Internet Explorer: Löschen und Verwalten von Cookies
                    <br/><br/>

                    Microsoft Edge: Löschen und Verwalten von Cookies

                    <br/><br/>
                    Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er
                    Sie
                    immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
                    entscheiden,
                    ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten
                    ist
                    es
                    Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies
                    deaktivieren
                    Chrome” im Falle eines Chrome Browsers oder tauschen das Wort “Chrome” gegen den Namen Ihres
                    Browsers,
                    z.B.
                    Edge, Firefox, Safari aus.
                    <br/><br/>

                    <h3>Wie sieht es mit meinem Datenschutz aus?</h3>
                    Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern
                    von
                    Cookies eine Einwilligung des Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder
                    gibt
                    es
                    allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die
                    Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser
                    Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).

                    <br/><br/>

                    Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen,
                    empfehlen
                    wir https://tools.ietf.org/html/rfc6265, dem Request for Comments der Internet Engineering Task
                    Force
                    (IETF)
                    namens “HTTP State Management Mechanism”.

                    <br/><br/>

                    <h3>Rechte laut Datenschutzgrundverordnung</h3>
                    Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:

                    <br/><br/>

                    Recht auf Berichtigung (Artikel 16 DSGVO)
                    Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)
                    Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)
                    Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung
                    personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
                    Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)
                    Widerspruchsrecht (Artikel 21 DSGVO)
                    Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling
                    —
                    beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
                    Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                    datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die
                    Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.

                    <br/><br/>

                    <h3>TLS-Verschlüsselung mit https</h3>
                    Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch
                    Technikgestaltung
                    Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem
                    Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz
                    vertraulicher
                    Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen
                    Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil
                    unserer
                    Internetadresse.

                    <br/><br/>

                    <h3>Google Fonts Lokal Datenschutzerklärung</h3>
                    Auf unserer Website nutzen wir Google Fonts der Firma Google Inc. Für den europäischen Raum ist das
                    Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich.
                    Wir
                    haben
                    die Google-Schriftarten lokal, d.h. auf unserem Webserver – nicht auf den Servern von Google –
                    eingebunden.
                    Dadurch gibt es keine Verbindung zu Google-Servern und somit auch keine Datenübertragung oder
                    Speicherung.

                    <br/><br/>

                    <h3>Was sind Google Fonts?</h3>
                    Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es sich um ein interaktives
                    Verzeichnis
                    mit über 800 Schriftarten, die Google kostenlos bereitstellt. Mit Google Fonts könnte man Schriften
                    nutzen,
                    ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zu
                    Google-Servern zu unterbinden, haben wir die Schriftarten auf unseren Server heruntergeladen. Auf
                    diese
                    Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts weiter.

                    <br/><br/>

                    Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten.
                    Wir
                    können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere
                    Webseite
                    rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf
                    https://developers.google.com/fonts/faq?tid=321185052.

                    <br/><br/>

                    <h4>Eingebettete Social Media Elemente Datenschutzerklärung</h4> <br/><br/>
                    Wir binden auf unserer Webseite Elemente von Social Media Diensten ein um Bilder, Videos und Texte
                    anzuzeigen.
                    Durch den Besuch von Seiten die diese Elemente darstellen, werden Daten von Ihrem Browser zum
                    jeweiligen
                    Social Media Dienst übertragen und dort gespeichert. Wir haben keinen Zugriff auf diese Daten.
                    Die folgenden Links führen Sie zu den Seiten der jeweiligen Social Media Dienste wo erklärt wird,
                    wie
                    diese
                    mit Ihren Daten umgehen:

                    <br/><br/>

                    Instagram-Datenschutzrichtlinie: https://help.instagram.com/519522125107875
                    Für YouTube gilt die Google Datenschutzerklärung: https://policies.google.com/privacy?hl=de
                    Facebook-Datenrichtline: https://www.facebook.com/about/privacy
                    Twitter Datenschutzrichtlinie: https://twitter.com/de/privacy <br/><br/>

                    <h4>Google Maps Datenschutzerklärung</h4>

                    <br/><br/>
                    Wir benützen auf unserer Website Google Maps der Firma Google Inc. Für den europäischen Raum ist das
                    Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle
                    Google-Dienste
                    verantwortlich. Mit Google Maps können wir Ihnen Standorte besser zeigen und damit unser Service an
                    Ihre
                    Bedürfnisse anpassen. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf
                    den
                    Google-Servern gespeichert. Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum
                    wir
                    diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies
                    unterbinden
                    können.

                    <br/><br/>

                    <h4>Was ist Google Maps?</h4>
                    <br/><br/>
                    Google Maps ist ein Internet-Kartendienst der Firma Google. Mit Google Maps können Sie online über
                    einen
                    PC,
                    ein Tablet oder eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder
                    Unternehmen
                    suchen. Wenn Unternehmen auf Google My Business vertreten sind, werden neben dem Standort noch
                    weitere
                    Informationen über die Firma angezeigt. Um die Anfahrtsmöglichkeit anzuzeigen, können
                    Kartenausschnitte
                    eines Standorts mittels HTML-Code in eine Website eingebunden werden. Google Maps zeigt die
                    Erdoberfläche
                    als Straßenkarte oder als Luft- bzw. Satellitenbild. Dank der Street View Bilder und den
                    hochwertigen
                    Satellitenbildern sind sehr genaue Darstellungen möglich.

                    <br/><br/>

                    <h4>Warum verwenden wir Google Maps auf unserer Webseite?</h4><br/><br/>
                    All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit
                    auf
                    unserer Webseite zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten
                    Informationen zu diversen Standorten liefern. Sie sehen auf einen Blick wo wir unseren Firmensitz
                    haben.
                    Die
                    Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten Weg zu uns. Sie können den Anfahrtsweg
                    für
                    Routen mit dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem Fahrrad abrufen. Für uns
                    ist
                    die
                    Bereitstellung von Google Maps Teil unseres Kundenservice.

                    <br/><br/>

                    <h4>Welche Daten werden von Google Maps gespeichert?</h4>
                    Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen
                    aufnehmen
                    und
                    speichern. Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und auch die
                    Breiten-
                    bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene
                    Startadresse
                    gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps. Wir
                    können
                    Sie
                    darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Webseite
                    eingebunden
                    haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser. Dieses Cookie speichert
                    Daten
                    über
                    Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu optimieren und
                    individuelle, personalisierte Werbung für Sie bereitzustellen.

                    <br/><br/>

                    Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:

                    <br/><br/>

                    Name: NID
                    Wert: 188=h26c1Ktha7fCQTx8rXgLyATyITJ321185052-5
                    Verwendungszweck: NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen.
                    Mit
                    Hilfe
                    des Cookies „erinnert“ sich Google an Ihre am häufigsten eingegebenen Suchanfragen oder Ihre frühere
                    Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält
                    eine
                    einzigartige ID, die Google benutzt, um Ihre persönlichen Einstellungen für Werbezwecke zu sammeln.
                    Ablaufdatum: nach 6 Monaten

                    <br/><br/>

                    Anmerkung: Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit gewährleisten.
                    Speziell
                    bei der Verwendung von Cookies sind Veränderungen nie auszuschließen. Um das Cookie NID zu
                    identifizieren,
                    wurde eine eigene Testseite angelegt, wo ausschließlich Google Maps eingebunden war.

                    <br/><br/>

                    <h4>Wie lange und wo werden die Daten gespeichert?</h4>
                    Die Google-Server stehen in Rechenzentren auf der ganzen Welt. Die meisten Server befinden sich
                    allerdings
                    in Amerika. Aus diesem Grund werden Ihre Daten auch vermehrt in den USA gespeichert. Hier können Sie
                    genau
                    nachlesen wo sich die Google-Rechenzentren befinden:
                    https://www.google.com/about/datacenters/inside/locations/?hl=de

                    <br/><br/>

                    Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar
                    und
                    werden vor etwaigen Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat auch spezielle
                    Notfallprogramme. Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine
                    Naturkatastrophe
                    die
                    Server lahm legt, bleiben die Daten ziemlich sicher trotzdem geschützt.

                    <br/><br/>

                    Manche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google
                    lediglich
                    die
                    Möglichkeit, diese manuell zu löschen. Weiters anonymisiert das Unternehmen auch Informationen (wie
                    zum
                    Beispiel Werbedaten) in Serverprotokollen, indem es einen Teil der IP-Adresse und
                    Cookie-Informationen
                    nach
                    9 bzw.18 Monaten löscht.

                    <br/><br/>

                    <h4>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h4> <br/> <br/>
                    Mit der 2019 eingeführten automatischen Löschfunktion von Standort- und Aktivitätsdaten werden
                    Informationen
                    zur Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer Entscheidung – entweder 3 oder 18
                    Monate
                    gespeichert und dann gelöscht. Zudem kann man diese Daten über das Google-Konto auch jederzeit
                    manuell
                    aus
                    dem Verlauf löschen. Wenn Sie Ihre Standorterfassung vollständig verhindern wollen, müssen Sie im
                    Google-Konto die Rubrik „Web- und App-Aktivität“ pausieren. Klicken Sie „Daten und Personalisierung“
                    und
                    dann auf die Option „Aktivitätseinstellung“. Hier können Sie die Aktivitäten ein- oder ausschalten.

                    <br/><br/>

                    In Ihrem Browser können Sie weiters auch einzelne Cookies deaktivieren, löschen oder verwalten. Je
                    nach
                    dem
                    welchen Browser Sie verwenden, funktioniert dies immer etwas anders. Die folgenden Anleitungen
                    zeigen,
                    wie
                    Sie Cookies in Ihrem Browser verwalten:

                    <br/><br/>

                    Chrome: Cookies in Chrome löschen, aktivieren und verwalten

                    <br/><br/>

                    Safari: Verwalten von Cookies und Websitedaten mit Safari

                    <br/><br/>
                    Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben

                    <br/><br/>
                    Internet Explorer: Löschen und Verwalten von Cookies

                    <br/><br/>
                    Microsoft Edge: Löschen und Verwalten von Cookies

                    <br/><br/>
                    Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er
                    Sie
                    immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
                    entscheiden,
                    ob Sie es erlauben oder nicht.

                    <br/><br/>
                    Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und
                    sichere
                    Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf
                    https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI. Wenn Sie mehr über die
                    Datenverarbeitung
                    von Google erfahren wollen, empfehlen wir Ihnen die hauseigene Datenschutzerklärung des Unternehmens
                    unter
                    https://policies.google.com/privacy?hl=de.

                    <br/><br/>
                    <h3>Google Fonts Datenschutzerklärung</h3>
                    Auf unserer Website verwenden wir Google Fonts. Das sind die “Google-Schriften” der Firma Google
                    Inc.
                    Für
                    den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin
                    4,
                    Irland) für alle Google-Dienste verantwortlich.

                    <br/><br/>
                    Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort
                    hinterlegen.
                    Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS,
                    Schriftarten/Fonts)
                    werden
                    über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die
                    Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein
                    Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der
                    Verwendung
                    von
                    Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style
                    Sheets)
                    und
                    der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau
                    aussieht,
                    werden wir uns noch im Detail ansehen.

                    <br/><br/>
                    <h4>Was sind Google Fonts?</h4>
                    Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die Google
                    seinen
                    Nutzern kostenlos zu Verfügung stellt.

                    <br/><br/>
                    Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter
                    der
                    Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.

                    <br/><br/>
                    <h4>Warum verwenden wir Google Fonts auf unserer Webseite?</h4>
                    Mit Google Fonts können wir auf unserer eigenen Webseite Schriften nutzen, doch müssen sie nicht auf
                    unseren
                    eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite
                    hoch
                    zu
                    halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und
                    ist
                    speziell für die Verwendung mit mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite
                    besuchen,
                    sorgt
                    die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sichere Web
                    Fonts.
                    Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und
                    mobilen
                    Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten
                    optisch
                    verzerren. Dank des schnellen Content Delivery Networks (CDN) gibt es mit Google Fonts keine
                    plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser (Google Chrome,
                    Mozilla
                    Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten modernen mobilen
                    Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod). Wir verwenden die
                    Google
                    Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen
                    können.

                    <br/><br/>
                    <h4>Welche Daten werden von Google gespeichert?</h4>
                    Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch
                    diesen
                    externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw.
                    Ihre
                    IP-Adresse unsere Webseite besuchen. Die Google Fonts API wurde entwickelt, um Verwendung,
                    Speicherung
                    und
                    Erfassung von Endnutzerdaten auf das zu reduzieren, was für eine ordentliche Bereitstellung von
                    Schriften
                    nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als
                    Datenübermittler im Softwarebereich.

                    <br/><br/>
                    Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch
                    die
                    gesammelten Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen. Die
                    Ergebnisse
                    veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem
                    verwendet
                    Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften
                    verwenden.
                    Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. Unternehmer und
                    Entwickler
                    nützen das Google-Webservice BigQuery, um große Datenmengen untersuchen und bewegen zu können.

                    <br/><br/>
                    Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie
                    Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des
                    Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden,
                    ist
                    nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.

                    <br/><br/>
                    <h4>Wie lange und wo werden die Daten gespeichert?</h4>
                    Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen Servern, die hauptsächlich
                    außerhalb
                    der
                    EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu
                    nutzen.
                    Ein
                    Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die
                    Schriftart
                    einer Webseite ändern kann.

                    <br/><br/>
                    Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die
                    Ladezeit
                    von
                    Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften
                    verweisen,
                    werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später
                    besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu
                    reduzieren,
                    die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.

                    <br/><br/>
                    <h4>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h4>
                    Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden.
                    Die
                    Daten
                    werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu
                    können,
                    müssen Sie den Google-Support auf https://support.google.com/?hl=de&tid=321185052 kontaktieren.
                    Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.

                    <br/><br/>
                    Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten.
                    Wir
                    können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere
                    Webseite
                    rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf
                    https://developers.google.com/fonts/faq?tid=321185052. Dort geht zwar Google auf
                    datenschutzrelevante
                    Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht
                    enthalten. Es
                    ist relativ schwierig, von Google wirklich präzise Informationen über gespeicherten Daten zu
                    bekommen.

                    <br/><br/>
                    Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können
                    Sie
                    auch
                    auf https://www.google.com/intl/de/policies/privacy/ nachlesen.

                    <br/><br/>
                    Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mit 123familie.de
                    <br/><br/>
                    <br/><br/>
                </div>
            </div>
        </div>
    );
};

Imprint.propTypes = {
    setShowImprint: PropTypes.func.isRequired
};

export default Imprint;
