import React from 'react';
import Layout from '../layout/Layout';
import ExpandText from '../components/ExpandText';
import MemberCard from '../components/MemberCard';

const MEMBERS = [
    {
        "name": "Michael Kaplan",
        "role": "Composition, Vocals, Keyboards",
        "bio": "<p>Michael Kaplan is a songwriter, keyboard player, and vocalist.  Michael has studied piano and jazz theory privately, and at the <a href=\"http://www.musicconservatory.org\" target=\"_blank\">Westchester Conservatory</a>, and <a href=\"http://www.bqcm.org\" target=\"_blank\">Brooklyn Conservatory of Music</a>, where he worked with Richard Thompson, deAndre Hampton, and <a href=\"http://www.bennylackner.com\" target=\"_blank\">Benny Lackner</a>.  He is now studying harmony, counterpoint, and composition with <a href=\"http://www.kendallbriggs.com\" target=\"_blank\">Dr. Kendall Briggs</a> of the Juilliard School.  Previously, Michael held the role of keyboardist and singer for a New-York-based progressive rock group, but ultimately left to pursue his own solo project, now known as Flaud Logic.</p>",
        "thumburl": require(`../images/fl_cast_mkaplan.jpg`),
        "imageurl": require(`../images/gallery/press/press_1.jpg`)
    },
    {
        "name": "Jimmy Wilgus",
        "role": "Production, Engineering, Backing vocals, Tambourine",
        "bio": "<p>Jimmy Wilgus taught himself piano as a small child and studied drums at the age of 12 with jazz legend Joe Morello.  He began writing and recording songs on his 4 track tape player when he was still in high school, and by the time he was 16, he was studying vocals with Marty Lawrence in Manhattan.  Armed with a trained voice and prolific songwriting talent, Jimmy began recording at professional studios including the Power Station,  Skyline,  Sorcerer Sound, Water Music, Waterfront, Trax East, Mixolidian, Brielle Music, and Boulevard Music. His song \"Colorblind\" won the Billboard song writing contest and he's recieved honorable mention certificates for \"Living in a Bad Dream\", \"Where Have You Been?\", and several other songs. Jimmy's music caught the ear of video director, Chuck Fishbein who made videos for Jimmy and won an award for producing the video for the Jimmy Wilgus classic  \"Rock and Roll People\". At this time, Jimmy took his music out of the studio and into the NY club scene with his band \"Jimmy Wilgus &amp; The People\"</p><p>Since then, Jimmy's bands have opened for such artists as Kansas, Marillion, The Spin Doctors and Saga. He's played in such venues as Club Bene,  The Count Basie Theatre, The Morristown Community theatre, NJ Performing Arts Center and The Tito Puente Ampitheatre in Puerto Rico, as well as local favorites such as The Bitter End, CBGB's and The China Club.\t\"Jimmy Wilgus and the People\" were recognized as one of the Best Unsigned Bands in the country by Musician Magazine. </p><p>In addition to his own band, Jimmy has toured with several other groups&#151;Most notably as Keyboardist for prog-rock virtuosos 4-FRONT, and as drummer for New York songstress NICOLA.</p><p>In 2000 Jimmy built his own recording facility called THE DEN. Since then he's produced or recorded hundreds of artists of all genres of music, including FLAUD LOGIC, 9 CIRCLES, NICOLA, FRIDAY'S CHILD, HEERNT, CHRIS RICH, NORWAY, FREAK OF THE DAY, ROB CHIOSSI and ATHENIA. He's written and recorded music for several television and radio commercials including Rolling Rock Beer,  Sprint Communications, Pearle Vision, NBC News and the YMCA. Now, with 20 yrs of experience in all facets of music, Jimmy has formed the band WICKED MONKEY with Russian guitarist Yury Nikolaev. WICKED MONKEY is the vehicle by which Jimmy plans to compose and entertain for many years to come.</p>",
        "thumburl": require(`../images/fl_cast_jwilgus.jpg`),
        "imageurl": require(`../images/fl_cast_jwilgus.jpg`)
    },
    {
        "name": "Joe Bergamini",
        "role": "Drums",
        "bio": "<p>Joe Bergamini maintains a diverse career as a drumming performer and educator. Enjoying various styles of playing, he is most well-known for his progressive rock drumming in the bands <a href=\"http://www.happytheman.com/home.htm\" target=\"_blank\">Happy the Man</a> and <a href=\"http://www.facebook.com/4frontband\" target=\"_blank\">4Front</a>. Joe is very active as a drummer for Broadway shows. He performed in both the New York and national tour productions of the Billy Joel musical Movin' Out, and now plays at In The Heights, The Lion King, and Jersey Boys. For 11 years Joe was the drummer in the popular New York City area band Power Windows, and has performed with many other artists including Dennis DeYoung and Deborah Gibson.</p>\t\t\t<p>Recognized internationally as an educator, Joe has given hundreds of drum clinics in schools, retail stores, and conventions over the past 15 years. He has appeared at the Ultimate Drummers Weekend (Melbourne, Australia), The Cape Breton Drum Festival (Nova Scotia, Canada), KOSA (Vermont USA), and the Sonny Emory Drumset Camp (Atlanta GA, USA). He also maintains a busy private teaching schedule at his studio in New Jersey.</p><p>Joe's interest in writing and education has led to him becoming very active in the music publishing world. He is the Senior Drum Editor for Hudson Music, and a contributing writer for Modern Drummer magazine. An active author, Joe has won three Modern Drummer Readers Poll awards and one Drum! Magazine \"Drummy\" for his drum books. He is the author of <em>Turn It Up & Lay It Down</em>, <em>MD Classic Tracks</em>, <em>It's Your Move</em> (with Dom Famularo), <em>Drum Techniques of Led Zeppelin</em>, <em>Operation: Rockenfield &ndash; The Drumming of Queensryche</em>, <em>Drumming Out Of The Shadows &ndash; The Drumming of Jason Bittner and Shadows Fall</em>, and <em>Polyrhythmic Potential</em> (with Chris Pennie). He has worked on various promotional and R&D projects for Tama drums in addition to being engaged as a spokesperson / artist clinician for their Starclassic Bubinga Omnitune drums.</p>",
        "thumburl": require(`../images/fl_cast_jbergamini.jpg`),
        "imageurl": require(`../images/fl_cast_jbergamini.jpg`)
    },
    {
        "name": "Rich Haddad",
        "role": "Bass",
        "bio": "<p>Rich Haddad has spent the past 15 years working in various studios, serving as producer, engineer, arranger, technical consultant, artist, artist liaison, and combination thereof. As a performer, he has shared the stage with artists such as Cyndi Lauper, Kansas and Dada. Since 2005, Rich has served as Chief Audio Engineer for the DCT broadband concert series, and is responsible for all aspects of audio recording, mixing, mastering and post-production. He currently records and performs with The Audibles and Friday's Child, and is the owner of Handcrafted Sonic Identity, which provides customized audio solutions for albums, singles, radio ads, jingles, voiceovers and films.</p>",
        "thumburl": require(`../images/fl_cast_rhaddad.jpg`),
        "imageurl": require(`../images/fl_cast_rhaddad.jpg`)
    },
    {
        "name": "Michael Romeo",
        "role": "Special Guest - Guitars",
        "bio": "<p>Michael James Romeo (born March 6, 1968) is the guitarist and a founding member of the progressive metal group Symphony X.</p><p>Michael began playing guitar at age 14 and takes his influences from a wide of range sources including Randy Rhoads, Steve Vai, Marty Friedman, Al DiMeola, J.S. Bach, John Williams and Frank Zappa, although he draws most heavily from a neo-classical style reminiscent of Yngwie Malmsteen. Despite this, Michael manages to maintain an identifiable signature that sets him apart from other players in this genre by fusing exotic scales and arpeggios (such as the half-diminished, whole tone and Egyptian scale), non-standard rhythms, time signatures and a raw neo-classical edge. An element of jazz is also present in his music.</p><p>Although Michael has received coverage in many guitar magazines around the world, he is best known for his role as lead guitarist in the progressive metal band Symphony X which he founded in 1994 after a request by a Japanese record label who were impressed by Michael's demo tape, The Dark Chapter.</p><p>An incredibly technical player, Michael is most famous for lightning-fast sweep picking and tapping though he also has great alternate picking technique, despite the fact that his style relies more on a softer legato attack and his trademark sweep-tapping licks. Michael is regarded as not only an exceptional soloist but also for his complex rhythm guitar parts that make heavy use of artificial harmonics for impact.</p>",
        "thumburl": require(`../images/fl_cast_mromeo.jpg`),
        "imageurl": require(`../images/fl_cast_mromeo.jpg`)
    },
    {
        "name": "Scott Thomas Ferreira",
        "role": "Guitars",
        "bio": "<p>Scott Thomas Ferreira has been playing guitar for 17 years and has been performing for 10 years in various bands and styles. In that time he has worked with many talented musicians as both a performer, and an arranger/producer.  Markeisha Ensley, Big Ben Hillman \"The Professor of Funk\", Christina Gaudet, Robbi Kumalo, and hip-hop soul band The Last Broadcast are some of the artists Scott has played with most recently.  His newest and most ambitious endeavor yet is \"Got A Match?\", a tribute to the legendary jazz/fusion musician Chick Corea. </p><p>Throughout his career, Scott has also worked in various performing situations including original bands, pit band orchestras, classical guitar recitals, jazz/fusion combos and his own singer/songwriter project.</p><p>Upon discovering the guitar at age 12 Scott realized he had found the instrument through which he wanted to express himself.  Through private lessons with Jim Cyran, Steve Silverman, and Mark Marino, he established a strong foundation of technique and sight reading.  Those years also helped him become fluent in many styles including Rock, Blues, Jazz, Funk, and Fusion.  In addition he developed a strong knowledge of improvisation in all styles. </p><p>Scott began his college years in a classical setting where he studied theory, harmony, and classical guitar with Long Island greats Steve Leonard and Bill Zito.  He went on to earn his BFA in music from the City College of New York in 2003.  There, he studied jazz theory with legendary musicians including Ron Carter and John Patitucci.  He continued His studies with some of the top modern guitar players including Wayne Krantz, David Gilmore, and Kenny Wessel.  He is currently studying voice with Ron Meixsell and ear training with his son Ethan Meixsell.</p>",
        "thumburl": require(`../images/fl_cast_sferreira.jpg`),
        "imageurl": require(`../images/fl_cast_sferreira.jpg`)
    },
    {
        "name": "Steven Kaplan",
        "role": "Piano, Rhodes in \"One Year\"",
        "bio": "<p>Steven is a classical and jazz trained pianist and composer with 15 years of performing experience.  He musical directed <em>Lucky Stiff</em> at the Stella Adler Conservatory and the new musical <em>Our Man in Chocolate</em> at ASCAP.  Steven is also the pianist for the New York University Drama Cantorum and has had several original choral works performed throughout NYC, many of which he conducted.  He has also arranged and composed pieces for the Susan Chambers Dance Company in Atlanta.  Steven recently scored his first film, <em>Richard Gardner Portrait of a Professor</em>, which will be screening in NYC in 2012.  In addition to music, Steven has been acting since the age of seven and can be seen on the small screen in featured roles on NBC's <em>Smash</em>, <em>Law & Order</em> and <em>Late Night with Conan O'Brien</em> as well as ABC's <em>What Would You Do?</em>.  He made his feature film debut starring opposite William H. Macy in <em>Bart Got a Room</em>, which premiered at the Tribeca Film Festival.  Also, he played the role of Kevin in the film <em>Beware the Gonzo</em>, which also premiered at Tribeca.  Most recently, he performed the role of James in <em>Book Club</em> at the Barrow Group Mainstage and the role of Jay in <em>Lost in Yonkers</em> at the Old Globe.  Other theater credits include Henry Brooks in <em>Terrible Infant</em> at the New York International Fringe Festival, two productions with the Young Playwrights Festival in Connecticut, and several community theatre productions with the Playgroup Theater in White Plains, NY, including <em>Godspell</em> (Jesus), <em>Into the Woods</em> (Jack) and <em>You're a Good Man Charlie Brown</em> (Linus). Steven is also the reader for several audio books including <em>Ten Thousand Saints</em> by Eleanor Henderson, <em>Legend</em> by Marie Lu, and <em>The Future of Us</em> by Asher and Mackler.  Steven is a graduate of the Tisch School of the Arts at NYU.</p>",
        "thumburl": require(`../images/fl_cast_sjkaplan.jpg`),
        "imageurl": require(`../images/fl_cast_sjkaplan.jpg`)
    },
    {
        "name": "Kurt Goedel",
        "role": "Guitars",
        "bio": "<p>After faking his death in 1978, Kurt Goedel took up guitar.  He quit in 1981 (damn barre chords!) Two years later, Goedel felt incomplete, even with a daily diet of sci-fi-inspired prog-metal.  So, one day, after playing Dungeons &amp; Dragons alone (don't ask), Goedel was drawn to the closet wherein was his guitar.  Reportedly, he hadn't been so excited since the publication of <em>&Uuml;ber formal unentscheidbare S&auml;tze der \"Principia Mathematica\" und verwandter Systeme</em>, some fifty years before!</p><p>Goedel became a metalhead, pop aficianado, wannabe jazzbo, and opportunistic folkster.  He studied with jazz guitarist Francis Varrichio.  These ingredients first mixed in The Evelyn Situation, where Goedel worked with Andrew Durkin, now ringleader of <a href=\"http://industrialjazzgroup.com/\" target=\"_blank\">The Industrial Jazz Group</a>.</p><p>In 2000, he completed his first CD, <em>Itch</em>.  Co-produced with Zak Rizvi (4Front), the album explored territory between naturalistic and technological, with songs about instinct, Evil, and seasonal allergies.  In 2003, Goedel finished The <em>Luna Stereo Theater</em>.  This \"immersive headphone experience\" has also been described as \"sound art\" and \"a tribute to Frank Zappa.\"</p><p>A guitar teacher since high school, Goedel is currently writing several guitar books.</p>",
        "thumburl": require(`../images/fl_cast_kgoedel.jpg`),
        "imageurl": require(`../images/fl_cast_kgoedel.jpg`)
    },
    {
        "name": "Yury Nikolaev",
        "role": "Acoustic Guitar",
        "bio": "",
        "thumburl": require(`../images/fl_cast_ynikolaev.jpg`),
        "imageurl": require(`../images/fl_cast_ynikolaev.jpg`)
    },
    {
        "name": "Frank Wyatt",
        "role": "Saxophone",
        "bio": "<p>Composer, keyboardist, saxophonist, engineer and producer- founding member of Happy The Man, Frank Wyatt has worn many hats. From his Crafty Hands Studio he continues to produce innovative and fresh new music, most recently the Pedal Giant Animals project, and now new band Oblivion Sun's debut.</p>",
        "thumburl": require(`../images/fl_cast_fwyatt.jpg`),
        "imageurl": require(`../images/fl_cast_fwyatt.jpg`)
    },
    {
        "name": "Amy Ward",
        "role": "Female Lead Vocals",
        "bio": "<p>Amy Ward delivers her music with a Pop/Rock/Soul sound. With her prolific song writing skills, Ward has had hundreds of  songs air in feature films and various TV shows in the United States, Canada, and Europe on CBS, ABC, FOX, The WB, and Lifetime  As a Singer/Songwriter- Producer-Pianist, her talent is like no other; full of energy and edge, yet at times, calm with a piano-based feel.</p><p>A Native Indiana resident, Amy moved to Boston, MA, where she attended the prestigious Berklee College of Music. Now, a graduate and a resident of the NYC area, Amy has been involved in many musical projects, and has shared the stage with such celebrities as: Richie Cannata (Billy Joel, Beach Boys), Gerardo Valez (Jimi Hendrix, Spyro Gyra), Chick Corea, Andre Crouch, The Flock of Seagulls, Jason Alexander (Seinfeld), Angie Stone, Joe, Billy Cliff (The Gap Band, Kool and the Gang), and Haley Eisenberg (Pepsi, Remember the Titans).</p><p>Ward opened 3 shows for the Dave Matthews Band  in Indiana and Massachusetts (side stage). She has also performed at such famous venues as Shea Stadium, for the NY Mets and Madison Square Garden for various sporting events. Other venues include The Bitter End, The Baggot Inn, CBGB's, Club 101, CODA, The Elbow Room, The Red Lion, Le Bar Bat, Guastivino's, Le Cirque, and Session 73 in NYC. Ward has also toured at various venues in Connecticut, New Jersey, Delaware, Maryland, Massachusetts, Illinois, Indiana, and Florida.</p><p>Amy has been honored at the Songwriter's Hall of Fame 43rd and 46th Songwriter Showcase in NYC.</p>",
        "thumburl": require(`../images/fl_cast_award.jpg`),
        "imageurl": require(`../images/fl_cast_award.jpg`)
    },
    {
        "name": "Ty Blue",
        "role": "Backing Vocal Solos",
        "bio": "<p>Native New Yorker Ty Blue is a sexy Pop/R&amp;B singer, songwriter, and performer. The exotic beauty is best known to her fans for her powerful 5.5 octave vocal range and her keen sexy driven lyrics and grooves. Her voice easily matches the style and demands of different types of songs. Ty Blue's voice can be as soft and sultry as Diana Ross or as high and powerful as Mariah Carey and Chaka Khan. Ty Blue is a classically-trained singer, who studied opera for 4 years. </p>",
        "thumburl": require(`../images/fl_cast_tblue.jpg`),
        "imageurl": require(`../images/fl_cast_tblue.jpg`)
    },
    {
        "name": "Dionne Thornton",
        "role": "Backing Vocals",
        "bio": "",
        "thumburl": require(`../images/fl_cast_dthornton.jpg`),
        "imageurl": require(`../images/fl_cast_dthornton.jpg`)
    },
    {
        "name": "Benny Lackner",
        "role": "Rhodes Solo in \"Say Goodbye\"",
        "bio": "<p>Born in Berlin, Benny Lackner, moved to California at the age of 13. He received his BFA from the California Institute of the Arts under the direction of Charlie Haden and David Roitstein. From 1997 - 1998 he studied privately with his mentor, pianist Brad Mehldau. He has performed at numerous jazz festivals including the North Sea Jazz Festival, Montreux and Monterey. He has worked with artists such as the late Billy Higgins, Marc Ribot, Brad Shepik, Pheeroan akLaff and is now residing in NYC and Berlin where is working with his internationally touring trio and as a sideman and Composer.</p><p>Learn more at <a href=\"http://www.bennylackner.com\" target=\"_blank\">Benny's Website</a>.</p>",
        "thumburl": require(`../images/fl_cast_blackner.jpg`),
        "imageurl": require(`../images/fl_cast_blackner.jpg`)
    },
    {
        "name": "Joe Morrison",
        "role": "Electric Guitars - Shanna",
        "bio": "",
        "thumburl": require(`../images/fl_cast_jmorrison.jpg`),
        "imageurl": require(`../images/fl_cast_jmorrison.jpg`)
    },
    {
        "name": "Eric Kvortek",
        "role": "Engineer - Percussion",
        "bio": "<p>An engineer with over 20 years experience, Eric currently works at the Legendary Trax East recording studio in New Brunswick, NJ, where bands such as <em>Symphony X</em>, <em>Dillinger Escape Plan</em>, <em>Mindfunk</em>, <em>Atreyu</em>, <em>Hatebreed</em>, <em>Phantom's Opera</em> have recorded. Eric has worked with and recorded over 300 bands including <em>God Forbid</em>, <em>Black Daliah Murder</em>, <em>The Red Chord</em>, <em>Dead To Fall</em>, <em>Zao</em>, <em>Twelve Tribes</em>, <em>Sinai Beach</em>, <em>Full Blown Chaos</em>, <em>Looking Forward</em>, <em>Nora</em>, <em>Human Abstract</em>, <em>The Banner</em>, <em>War of Ages</em>, <em>Spitfire</em>, <em>Anchors For Arms</em>, <em>Symphony in Peril</em>, <em>Don the Reader</em>, <em>Death Star</em>, <em>Atomic Bitchwax</em>, <em>Solace</em>, <em>Mush Mouth</em>, <em>The Fins</em>, <em>Break Away</em>, <em>A Life Once Lost</em>, <em>Overlorde</em>, <em>The Noviach</em>, <em>Drive Faster</em>, <em>Delian League</em>, <em>Operatika</em>, <em>Trash Maverics</em>, <em>Annunaki</em>, <em>Last Perfection</em>, <em>Geoff Baker</em>, <em>The Bitter Life Typecast</em>, <em>Sekond Skyn</em>, <em>Love Gas</em>, and <em>Normaljoy</em>.</p>",
        "thumburl": require(`../images/fl_cast_ekvortek.jpg`),
        "imageurl": require(`../images/fl_cast_ekvortek.jpg`)
    },
    {
        "name": "Dave Waxman",
        "role": "Death Growls",
        "bio": "",
        "thumburl": require(`../images/fl_cast_dwaxman.jpg`),
        "imageurl": require(`../images/fl_cast_dwaxman.jpg`)
    }
];

export default class AboutPage extends React.Component {

    render() {
        return (
            <Layout pageClass="about-page">
                <h1>
                  <em data-text="about">About</em>
                </h1>
                <ExpandText>
                    <section>
                    <blockquote>
                        <p>"...really grabbing — like a black hole that just sucked me in from
                            the get-go."</p>
          					    <small>— Chris Rich, Composer, Theater of the Mind Rock Opera</small>
                    </blockquote>
                        <p>Flaud Logic originated in Brooklyn, New York in 2008. Originally an attempt to demo some song
                            ideas composer Michael Kaplan had written over the years, it gradually evolved into a
                            full-length album featuring performances from a cadre of talented musicians including
                            Michael Romeo (guitar), Frank Wyatt (saxophone), Joe Bergamini (drums), and Benny Lackner
                            (Rhodes).</p>
                        <span>
                            <p>Over a period of months, Michael composed and arranged these musical ideas into what
                                would become the album's core: Four tracks—one, a 23-minute epic—that take the
                                listener through a variety of soundscapes and stories.</p>
                            <p>The Flaud Logic sound can best be described as progressive rock, a genre true to
                                Michael's love of sonic experimentation. The album spans a range of styles and
                                moods—from elation to sorrow—painted by careful instrumentation and vivid
                                lyrics. Moments of bone-crushing metal, the clockwork intricacy of mathcore, and retro
                                Beatles-era rock, meet soaring and uplifting passages and catchy hooks.</p>
                        </span>
                    </section>
                </ExpandText>
                <h2>Cast</h2>
                <p>Click for bios.</p>
                {MEMBERS.map((item, i) =>
                    <MemberCard member={item} key={i}/>
                )}
            </Layout>
        )
    }
}
