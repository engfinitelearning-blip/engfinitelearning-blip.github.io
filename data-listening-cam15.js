// EngFinite Learning — Listening Test Data (CAM15)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam15: {
    tests: {
      1: {
        title: "Cambridge IELTS 15 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2015%20test%201%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "BANKSIDE RECRUITMENT AGENCY",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Address of agency: 497 Eastside, Docklands", input:null, after:""},
                      {n:1, before:"Name of agent: Becky", input:1, after:""},
                      {n:null, before:"Phone number: 07866 510333", input:null, after:""},
                      {n:2, before:"Best to call her in the", input:2, after:""}
                    ]
                  },
                  {
                    heading: "Typical jobs",
                    items: [
                      {n:null, before:"Clerical and admin roles, mainly in the finance industry", input:null, after:""},
                      {n:3, before:"Must have good", input:3, after:"skills"},
                      {n:4, before:"Jobs are usually for at least one", input:4, after:""},
                      {n:5, before:"Pay is usually £", input:5, after:"per hour"}
                    ]
                  },
                  {
                    heading: "Registration process",
                    items: [
                      {n:6, before:"Wear a", input:6, after:"to the interview"},
                      {n:7, before:"Must bring your", input:7, after:"to the interview"},
                      {n:8, before:"They will ask questions about each applicant's", input:8, after:""}
                    ]
                  },
                  {
                    heading: "Advantages of using an agency",
                    items: [
                      {n:9, before:"The", input:9, after:"you receive at interview will benefit you"},
                      {n:null, before:"Will get access to vacancies which are not advertised", input:null, after:""},
                      {n:10, before:"Less", input:10, after:"is involved in applying for jobs"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Jamieson",2:"afternoon",3:"communication",4:"week",5:"10",6:"suit",7:"passport",8:"personality",9:"feedback",10:"time"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Amber phoning her friend William for information about a job agency."},
              {sp:"AMBER", t:"Asks if it's a good time to talk about the agency William recommended."},
              {sp:"WILLIAM", t:"Confirms it's called Bankside, based in Docklands at 497 Eastside; gives the name of his usual contact there, Becky Jamieson, and her direct line, advising Amber to call in the afternoon since Becky is busy filling last-minute vacancies each morning, but is friendly and worth an informal chat."},
              {sp:"AMBER", t:"Confirms the agency mainly handles clerical and admin work."},
              {sp:"WILLIAM", t:"Explains Becky mostly places temporary staff in finance, which looks good on a CV and tends to pay well; reassures Amber that despite her limited office experience, she'd likely start as a receptionist, where communication skills matter more than technical business or computer knowledge, which she'd pick up quickly on the job."},
              {sp:"AMBER", t:"Asks how long placements typically last, hoping for at least a month."},
              {sp:"WILLIAM", t:"Explains a week-long placement is more typical at first, often extended, with single-day placements being unusual; confirms the pay is decent, around £10 an hour, sometimes £11, better than retail or restaurant work, which pleasantly surprises Amber who expected less."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 6 to 10 before the conversation continues."},
              {sp:"AMBER", t:"Asks about the registration process, aware an interview is required."},
              {sp:"WILLIAM", t:"Explains the interview takes about an hour and should be arranged roughly a week ahead; agrees dressing smartly is wise, suggesting Amber could borrow a suit from her mother, better to look too formal than too casual."},
              {sp:"AMBER", t:"Asks whether she needs exam certificates or her passport."},
              {sp:"WILLIAM", t:"Says certificates aren't needed, but her passport will be requested; reassures her the interview is mainly relationship-building, with fairly basic personality questions, unlikely to include anything as tough as future career plans."},
              {sp:"WILLIAM", t:"Lists benefits of using an agency: useful feedback on interview performance to help her improve, and access to unadvertised vacancies, since most temporary roles aren't publicly listed."},
              {sp:"AMBER", t:"Adds that this approach likely saves a lot of time compared to contacting individual companies directly, which William agrees with."},
              {sp:"ANNOUNCER", t:"That is the end of Part 1. You now have one minute to check your answers to Part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11\u201314",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Matthews Island Holidays",
                items: [
                  {n:11, q:"According to the speaker, the company", opts:["has been in business for longer than most of its competitors.","arranges holidays to more destinations than its competitors.","has more customers than its competitors."]},
                  {n:12, q:"Where can customers meet the tour manager before travelling to the Isle of Man?", opts:["Liverpool","Heysham","Luton"]},
                  {n:13, q:"How many lunches are included in the price of the holiday?", opts:["three","four","five"]},
                  {n:14, q:"Customers have to pay extra for", opts:["guaranteeing themselves a larger room.","booking at short notice.","transferring to another date."]}
                ]
              },
              {
                type: "table",
                qlabel: "Questions 15\u201320",
                inst: "Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "Timetable for Isle of Man holiday",
                headers: ["Day","Activity","Notes"],
                rows: [
                  {
                    cells: [
                      [{text:"Day 1"}],
                      [{text:"Arrive"}],
                      [{text:"Introduction by manager<br>Hotel dining room has view of the"},{input:15}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Day 2"}],
                      [{text:"Tynwald Exhibition and Peel"}],
                      [{text:"Tynwald may have been founded in"},{input:16},{text:", not 979."}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Day 3"}],
                      [{text:"Trip to Snaefell"}],
                      [{text:"Travel along promenade in a tram; train to Laxey; train to the"},{input:17},{text:"of Snaefell"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Day 4"}],
                      [{text:"Free day"}],
                      [{text:"Company provides a"},{input:18},{text:"for local transport and heritage sites."}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Day 5"}],
                      [{text:"Take the"},{input:19},{text:"railway train from Douglas to Port Erin"}],
                      [{text:"Free time, then coach to Castletown - former"},{input:20},{text:"has old castle."}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Day 6"}],
                      [{text:"Leave"}],
                      [{text:"Leave the island by ferry or plane"}]
                    ]
                  }
                ]
              }
            ],
            answers: {11:"A",12:"B",13:"A",14:"C",15:"river",16:"1422",17:"top",18:"pass",19:"steam",20:"capital"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Erica Matthews, owner of the family-run Matthews Island Holidays, presenting the company's offerings."},
              {sp:"ERICA MATTHEWS", t:"Explains the company prioritises personal service over customer numbers, drawing on more years of experience than almost any competing rail holiday company, focused on a small number of well-known destinations; introduces the six-day Isle of Man holiday, describing the island's location relative to Wales, England, Scotland and Northern Ireland."},
              {sp:"ERICA MATTHEWS", t:"Explains the holiday begins in Heysham, where the tour manager meets guests before the ferry crossing, though flying from Luton or taking the train to Liverpool for a ferry are alternatives; describes five hotel nights with breakfast and dinner included, plus lunch on the three organised-trip days, with day four free and lunch typically bought independently in Douglas."},
              {sp:"ERICA MATTHEWS", t:"Confirms the price covers the ferry, all island travel, hotel, and the meals mentioned; highlights fair pricing regardless of booking date, no single-room supplement, and only a small administrative fee to change dates or tours if needed, for example due to illness."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 15 to 20 before the talk continues."},
              {sp:"ERICA MATTHEWS", t:"Outlines the itinerary: Day 1 arrival with a manager's introduction and dinner in the hotel dining room overlooking the river near the harbour; Day 2 a coach trip to Peel via the Tynwald Exhibition, covering the island's own parliament, claimed to date back to 979 though the earliest surviving record is actually from 1422."},
              {sp:"ERICA MATTHEWS", t:"Describes Day 3's trip to Snaefell mountain, starting with a horse-drawn tram ride along the Douglas promenade, an electric train to Laxey, and an eight-kilometre mountain railway ride to the top, with lunch enjoyed at a scenic cafe; Day 4 is free, using a provided pass covering local transport and heritage site entry, ideal for exploring Douglas or shopping."},
              {sp:"ERICA MATTHEWS", t:"Describes Day 5, often the holiday's highlight, riding the steam railway from Douglas to Port Erin, then a coach to a headland overlooking the Calf of Man before continuing to Castletown, the island's former capital, home to a medieval castle; Day 6 involves departure by ferry or plane."},
              {sp:"ANNOUNCER", t:"That is the end of Part 2. You now have 30 seconds to check your answers to Part 2."}
            ]
          },
          3: {
            n: 3,
            label: "Part 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "map_label",
                qlabel: "Questions 21\u201326",
                inst: "What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family?<br>Choose SIX answers from the box and write the correct letter, <b>A\u2013H</b>, next to Questions 21\u201326.",
                mapNoteTitle: "Personality Traits",
                mapTitle: "Position in family",
                mapNote: "A. outgoing<br>B. selfish<br>C. independent<br>D. attention-seeking<br>E. introverted<br>F. co-operative<br>G. caring<br>H. competitive",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:21, label:"the eldest child"},
                  {n:22, label:"a middle child"},
                  {n:23, label:"the youngest child"},
                  {n:24, label:"a twin"},
                  {n:25, label:"an only child"},
                  {n:26, label:"a child with much older siblings"}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 27 and 28",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                items: [
                  {n:27, q:"What do the speakers say about the evidence relating to birth order and academic success?", opts:["There is conflicting evidence about whether oldest children perform best in intelligence tests.","There is little doubt that birth order has less influence on academic achievement than socio-economic status.","Some studies have neglected to include important factors such as family size."]},
                  {n:28, q:"What does Ruth think is surprising about the difference in oldest children's academic performance?", opts:["It is mainly thanks to their roles as teachers for their younger siblings.","The advantages they have only lead to a slightly higher level of achievement.","The extra parental attention they receive at a young age makes little difference."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 29 and 30",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO experiences of sibling rivalry do the speakers agree has been valuable for them?",
                qns: [29,30],
                options: [
                  {letter:"A", text:"learning to share"},
                  {letter:"B", text:"learning to stand up for oneself"},
                  {letter:"C", text:"learning to be a good loser"},
                  {letter:"D", text:"learning to be tolerant"},
                  {letter:"E", text:"learning to say sorry"}
                ]
              }
            ],
            multiGroups: [[29,30]],
            answers: {21:"G",22:"F",23:"A",24:"E",25:"B",26:"C",27:"C",28:"A",29:"B",30:"D"},
            script: [
              {sp:"RUTH", t:"Asks Ed how his reading is going for their presentation on birth order."},
              {sp:"ED", t:"Complains about the volume of material, and argues much of the research on birth order and personality relies on unreliable stereotypes rather than solid evidence."},
              {sp:"RUTH", t:"Suggests starting with an overview of over a century of previous research."},
              {sp:"ED", t:"Summarises common claims: oldest children are often seen as less well-adjusted, struggling to get over a younger sibling's arrival, though also seen positively as good at nurturing, especially historically in large families."},
              {sp:"ED", t:"Notes middle children are less clearly defined but often described as easy-going and cooperative."},
              {sp:"RUTH", t:"Jokes this doesn't match her own difficult middle brother."},
              {sp:"ED", t:"Says as the youngest himself, he doesn't recognise the typical outgoing, confident stereotype at all, having actually been very shy."},
              {sp:"RUTH", t:"Mentions extensive twin studies, mostly about nature versus nurture."},
              {sp:"ED", t:"Cites one study suggesting twins tend to be introverted socially, relying on each other for support."},
              {sp:"RUTH", t:"Recalls her own cousins fitting this pattern as children, though they're sociable now."},
              {sp:"ED", t:"Notes only children are often unfairly labelled selfish loners who think the world revolves around them, from never competing for parental attention."},
              {sp:"RUTH", t:"Finds that harsh, and mentions a less familiar category \u2014 children with much older siblings, said to become more independent, expected to handle basic tasks themselves."},
              {sp:"ED", t:"Agrees this seems plausible, though suspects some such children instead lean into a demanding 'baby' role."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 27 to 30 before the discussion continues."},
              {sp:"RUTH", t:"Asks what the main flaw was in most of these studies."},
              {sp:"ED", t:"Explains many relied on just one sibling per family rating themselves and their siblings."},
              {sp:"RUTH", t:"Notes recent research has confirmed older findings that intelligence test scores decline slightly from oldest to youngest siblings."},
              {sp:"ED", t:"Points out many such studies overlooked family size, since larger families are more likely to have lower socioeconomic status, which itself affects academic performance."},
              {sp:"RUTH", t:"Adds that oldest sons might also be given more opportunities than younger daughters."},
              {sp:"RUTH", t:"Finds it surprising that oldest children's slightly higher academic performance isn't mainly from extra early attention as she'd expected, but from benefiting intellectually by acting as teachers for younger siblings, verbalising processes, which also boosts their confidence and status."},
              {sp:"ED", t:"Asks whether Ruth found sibling rivalry ultimately useful."},
              {sp:"RUTH", t:"Believes so \u2014 her frequent fights with her younger brother taught her to stand up for herself, even though she'd rarely apologise first, and they mostly got along despite the conflict."},
              {sp:"ED", t:"Agrees his situation with two older brothers was similar, admitting he was never willing to share his belongings with them."},
              {sp:"RUTH", t:"Says that's perfectly normal."},
              {sp:"ANNOUNCER", t:"That is the end of Part 3. You now have 30 seconds to check your answers to Part 3."}
            ]
          },
          4: {
            n: 4,
            label: "Part 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "The Eucalyptus Tree in Australia",
                groups: [
                  {
                    heading: "Importance",
                    items: [
                      {n:31, before:"it provides", input:31, after:"and food for a wide range of species"},
                      {n:32, before:"its leaves provide", input:32, after:"which is used to make a disinfectant"}
                    ]
                  },
                  {
                    heading: "Reasons for present decline in number",
                    items: [
                      {n:null, before:"A) Diseases", input:null, after:""},
                      {n:null, before:"(i) 'Mundulla Yellows'", input:null, after:"", indent:true},
                      {n:null, before:"Cause", input:null, after:"", indent:true},
                      {n:33, before:"lime used for making", input:33, after:"was absorbed", indent:true},
                      {n:null, before:"trees were unable to take in necessary iron through their roots", input:null, after:"", indent:true},
                      {n:null, before:"(ii) 'Bell-miner Associated Die-back'", input:null, after:"", indent:true},
                      {n:null, before:"Cause", input:null, after:"", indent:true},
                      {n:34, before:"", input:34, after:"feed on eucalyptus leaves", indent:true},
                      {n:null, before:"they secrete a substance containing sugar", input:null, after:"", indent:true},
                      {n:null, before:"bell-miner birds are attracted by this and keep away other species", input:null, after:"", indent:true}
                    ]
                  },
                  {
                    heading: "B) Bushfires",
                    items: [
                      {n:null, before:"William Jackson's theory:", input:null, after:""},
                      {n:35, before:"high-frequency bushfires have impact on vegetation, resulting in the growth of", input:35, after:""},
                      {n:null, before:"mid-frequency bushfires result in the growth of eucalyptus forests, because they:", input:null, after:""},
                      {n:36, before:"make more", input:36, after:"available to the trees"},
                      {n:37, before:"maintain the quality of the", input:37, after:""},
                      {n:38, before:"low-frequency bushfires result in the growth of '", input:38, after:"rainforest', which is:"},
                      {n:39, before:"a", input:39, after:"ecosystem"},
                      {n:40, before:"an ideal environment for the", input:40, after:"of the bell-miner"}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"shelter",32:"oil",33:"roads",34:"insects",35:"grass",36:"water",37:"soil",38:"dry",39:"simple",40:"nests"},
            script: [
              {sp:"SPEAKER", t:"Introduces the eucalyptus tree, also called the gum tree in Australia, outlining its importance before covering current threats to it."},
              {sp:"SPEAKER", t:"Explains the tree provides shelter and food, especially nectar, for species like birds and bats, supporting biodiversity, and that oil extracted from its leaves is used to make a germ-killing disinfectant; notes eucalyptus can live up to 400 years, making the current nationwide decline in numbers, from trees dying prematurely, particularly alarming."},
              {sp:"SPEAKER", t:"Describes Mundulla Yellows, a disease first seen in the 1970s causing leaves to yellow and trees to die, only identified in 2004 as being caused by lime used in road construction washing into the soil and blocking the trees' iron uptake; injecting iron directly into affected trees allowed immediate recovery, though this disease only affected a relatively small number of trees."},
              {sp:"SPEAKER", t:"Describes Bell-miner Associated Die-back, widespread along Australia's East Coast since 2000, linked to high bell-miner bird populations; insects damage tree leaves while secreting a sugary substance the birds are drawn to, aggressively keeping other species away to protect their food source, eventually killing the tree through leaf damage \u2014 though trees can show signs of decline even before die-back appears, suggesting another cause may be involved."},
              {sp:"SPEAKER", t:"Introduces ecologist William Jackson's decades-old theory that bushfire frequency shapes local vegetation: very frequent fires favour grass growth, while moderately frequent fires favour eucalyptus forests, since fire suppresses competing water-consuming plants and prevents them from depleting soil nutrients needed by eucalyptus; explains eucalyptus actually depends on some regular burning to thrive, a practice indigenous Australians maintained for millennia before European settlement, after which bushfire frequency was heavily reduced."},
              {sp:"SPEAKER", t:"Explains this reduced fire frequency has led to the growth of so-called 'dry rainforest' \u2014 despite the name, a relatively simple ecosystem with dense vegetation but limited species diversity, providing deep shade that suits the bell-miner bird perfectly for nesting in the undergrowth, which in turn continues to harm eucalyptus populations."},
              {sp:"ANNOUNCER", t:"That is the end of Part 4. You now have one minute to check your answers to Part 4."}
            ]
          }
        }
      },
      2: {
        title: "Cambridge IELTS 15 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2015%20test%202%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "table",
                qlabel: "Questions 1\u20134",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Festival information",
                headers: ["Date","Type of event","Details"],
                rows: [
                  {
                    cells: [
                      [{text:"17th"}],
                      [{text:"a concert"}],
                      [{text:"performers from Canada"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"18th"}],
                      [{text:"a ballet"}],
                      [{text:"company called"},{input:1}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"19th\u201320th (afternoon)"}],
                      [{text:"a play"}],
                      [{text:"type of play: a comedy called Jemima has had a good"},{input:2}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"20th (evening)"}],
                      [{text:"a"},{input:3},{text:"show"}],
                      [{text:"show is called"},{input:4}]
                    ]
                  }
                ]
              },
              {
                type: "notes",
                qlabel: "Questions 5\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Workshops",
                groups: [
                  {
                    heading: "Workshops",
                    items: [
                      {n:5, before:"Making", input:5, after:"food"},
                      {n:6, before:"(children only) Making", input:6, after:""},
                      {n:7, before:"(adults only) Making toys from", input:7, after:"using various tools"}
                    ]
                  },
                  {
                    heading: "Outdoor activities",
                    items: [
                      {n:8, before:"Swimming in the", input:8, after:""},
                      {n:9, before:"Walking in the woods, led by an expert on", input:9, after:""},
                      {n:10, before:"See the festival organiser's", input:10, after:"for more information"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Eustatis",2:"review",3:"dance",4:"Chat",5:"healthy",6:"posters",7:"wood",8:"lake",9:"insects",10:"blog"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Jean phoning the tourist information office to ask Tim about next month's festival, ahead of a family visit."},
              {sp:"TIM", t:"Describes the festival opening with a concert on the 17th by a popular Canadian orchestra and singers performing well-known pieces suited to all ages; describes the following day's performance by ballet company Eustatis, who impressed audiences at last year's festival with a similarly all-ages programme."},
              {sp:"JEAN", t:"Hopes for a comedy play during the festival."},
              {sp:"TIM", t:"Confirms a local amateur group is performing an original comedy called Jemima on the 19th and 20th at the town hall, previously staged a few times, with a strong local newspaper review; explains it's actually aimed more at children, hence the afternoon performances."},
              {sp:"JEAN", t:"Asks about dance performances."},
              {sp:"TIM", t:"Describes an evening show on the 20th by a professional company performing modern pieces with electronic music, exploring how people communicate or fail to, hence its unusual title, Chat."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 5 to 10 before the conversation continues."},
              {sp:"TIM", t:"Mentions daily workshops and activities, ensuring everyone gets a chance to join; confirms a cookery workshop focused on healthy eating, showing how to reduce sugar even in treats like cakes."},
              {sp:"TIM", t:"Describes a children-only workshop making posters reflecting the town's history, to help children appreciate how the town and daily life have changed over time, with results displayed at the community centre; describes a separate adults-only woodworking workshop making wooden toys, kept adult-only due to the sharp carpentry tools involved."},
              {sp:"TIM", t:"Introduces outdoor activities, including supervised wild swimming in a nearby lake with lifeguards present, suitable for all ages, and a daily woodland walk led by an insect expert, highlighting their environmental importance."},
              {sp:"TIM", t:"Mentions the festival organiser keeps an online blog documenting festival preparations, easily found by searching for the festival website."},
              {sp:"JEAN", t:"Thanks Tim for the information."},
              {sp:"ANNOUNCER", t:"That is the end of Part 1. You now have one minute to check your answers to Part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11\u201314",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Minster Park",
                items: [
                  {n:11, q:"The park was originally established", opts:["as an amenity provided by the city council.","as land belonging to a private house.","as a shared area set up by the local community."]},
                  {n:12, q:"Why is there a statue of Diane Gosforth in the park?", opts:["She was a resident who helped to lead a campaign.","She was a council member responsible for giving the public access.","She was a senior worker at the park for many years."]},
                  {n:13, q:"During the First World War, the park was mainly used for", opts:["exercises by troops.","growing vegetables.","public meetings."]},
                  {n:14, q:"When did the physical transformation of the park begin?", opts:["2013","2015","2016"]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15\u201320",
                inst: "Label the map below.<br>Choose the correct letter, <b>A\u2013I</b>, next to Questions 15\u201320.",
                mapTitle: "Minster Park",
                mapImage: "data:image/jpeg;base64,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+zyQjfsm3luGFUM9dsvD2gWETxafounWqSQrDIIbZEDoOiNgcjnpUOleEvDGlfYm0rw3pFh9gWQWX2eyRPs4kO6QR7R8m4/ex1r5++F3j7xP4H+DN9f+I4bK8vrnxPcafo3m35xcXUtw4kEhYfIiyBzXVfDv4peKn+I2meDfHE/gy8m1qGaTT7jw5dyP5bxDeUmRy2Mr0NIR7LZ6RpVlqV5qNnp1pBe3uz7TcRwhZJ9q7V3nq2B61pr0opaQgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAAUUCigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAGmvBPijHcaN8fdK8T+F9Q0ObxJNoL2U+iapdG1+02vnFg8UgBG/zK98rmPGfgjwj4zhig8U+HdO1cQ7vKN1EGaPPXaeooKPmzSvDviv4haZ8U4449OudRuPEthJeWlvfH7HfpBGjPaCb8q6jwJ8OvFqfFjwd4tf4deG/BGk6THeLcWOm3KSykyxMoLlQAe1e9+HtC0bw9pMel6DpdtplhHkpb28YSMZ68LWvVAfNsnws8Y6z4M1zwlqGlaTAdJ8TPrnhu7upBNb3xeeSUxTxrkhcPsNbPwm8E6/D46t/EOp/DDwN4Fs7KCRFgsEjnvZ5GG3eJY1UIle80VIXBelLRRQSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQACigUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAlFLSUAG2iiloASjApaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSlpKACiiigD/2Q==",
                options: ["A","B","C","D","E","F","G","H","I"],
                items: [
                  {n:15, label:"statue of Diane Gosforth"},
                  {n:16, label:"wooden sculptures"},
                  {n:17, label:"playground"},
                  {n:18, label:"maze"},
                  {n:19, label:"tennis courts"},
                  {n:20, label:"fitness area"}
                ]
              }
            ],
            answers: {11:"C",12:"A",13:"B",14:"C",15:"E",16:"C",17:"B",18:"A",19:"G",20:"D"},
            script: [
              {sp:"WOMAN", t:"Welcomes guest speaker Mark Logan to the gardening club to talk about Minster Park's recent transformation."},
              {sp:"MARK", t:"Explains the park has existed for over a century under city council responsibility, but originated unusually as waste land that nearby residents began planting with flowers in 1892, with ownership unresolved until the council took possession twenty years later."},
              {sp:"MARK", t:"Introduces the statue of Diane Gosforth near one entrance, explaining that once the council became legal owner and planned to sell the land for housing, local residents, including Gosforth, campaigned through petitions and demonstrations to keep it a shared green space in the densely populated area, successfully changing the council's plans."},
              {sp:"MARK", t:"Describes the park's use during the First World War from 1914, mostly dug up for vegetable growing sold locally, with the army briefly considering it for troop exercises before deciding it was too small, and occasional public meetings held on retained grass areas; after the war it largely returned to its pre-war state and remained mostly unchanged until recently, with transformation plans finalised in 2013, revised in 2015, and construction beginning in 2016, completed on schedule the following year."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 15 to 20 before the talk continues."},
              {sp:"MARK", t:"Describes the park's layout using a map, with the river forming the northern boundary and gates on the other three sides; explains the Diane Gosforth statue has moved from near the south gate to a more prominent spot just north of the lily pond, near the park's centre."},
              {sp:"MARK", t:"Points out a new wooden sculpture area on the riverbank where the path from the east gate bends sharply; describes an enlarged, improved children's playground between the river and the path leading from the pond to the river, and a new circular hedge maze near the west gate, reached by heading north then turning left."},
              {sp:"MARK", t:"Mentions the tennis courts, doubled from four to eight, remaining in the park's south-west corner at a right-angled path bend, and a new fitness area right beside the lily pond on the same side as the west gate."},
              {sp:"ANNOUNCER", t:"That is the end of Part 2. You now have 30 seconds to check your answers to Part 2."}
            ]
          },
          3: {
            n: 3,
            label: "Part 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 21 and 22",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO groups of people is the display primarily intended for?",
                qns: [21,22],
                options: [
                  {letter:"A", text:"students from the English department"},
                  {letter:"B", text:"residents of the local area"},
                  {letter:"C", text:"the university's teaching staff"},
                  {letter:"D", text:"potential new students"},
                  {letter:"E", text:"students from other departments"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 23 and 24",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>What are Cathy and Graham's TWO reasons for choosing the novelist Charles Dickens?",
                qns: [23,24],
                options: [
                  {letter:"A", text:"His speeches inspired others to try to improve society."},
                  {letter:"B", text:"He used his publications to draw attention to social problems."},
                  {letter:"C", text:"His novels are well-known now."},
                  {letter:"D", text:"He was consulted on a number of social issues."},
                  {letter:"E", text:"His reputation has changed in recent times."}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201330",
                inst: "What topic do Cathy and Graham choose to illustrate with each novel?<br>Choose SIX answers from the box and write the correct letter, <b>A\u2013H</b>, next to Questions 25\u201330.",
                mapNoteTitle: "Topics",
                mapTitle: "Novels by Dickens",
                mapNote: "A. poverty<br>B. education<br>C. Dickens's travels<br>D. entertainment<br>E. crime and the law<br>F. wealth<br>G. medicine<br>H. a woman's life",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:25, label:"\"The Pickwick Papers\""},
                  {n:26, label:"\"Oliver Twist\""},
                  {n:27, label:"\"Nicholas Nickleby\""},
                  {n:28, label:"\"Martin Chuzzlewit\""},
                  {n:29, label:"\"Bleak House\""},
                  {n:30, label:"\"Little Dorrit\""}
                ]
              }
            ],
            multiGroups: [[21,22],[23,24]],
            answers: {21:"B",22:"D",23:"B",24:"C",25:"G",26:"B",27:"D",28:"C",29:"H",30:"F"},
            script: [
              {sp:"CATHY", t:"Checks in with Graham about their task, planning a display on mid-19th century British life and literature for the university's open day, with help expected later for materials and setup."},
              {sp:"CATHY", t:"Asks who the display's audience will be."},
              {sp:"GRAHAM", t:"Explains it used to target English students specifically, but low attendance led to it becoming part of a broader open day, publicised locally to raise the university's profile and included in materials sent to prospective applicants; explains current students and staff may attend, but the focus should be on local residents and prospective students instead."},
              {sp:"CATHY", t:"Confirms they don't need to cover the whole range of 19th-century literature."},
              {sp:"GRAHAM", t:"Suggests focusing solely on Charles Dickens."},
              {sp:"CATHY", t:"Agrees, noting his broad familiarity through novels and film adaptations makes him a good entry point into the period."},
              {sp:"GRAHAM", t:"Adds that Dickens's novels exposed harsh living conditions, intentionally shocking readers into action."},
              {sp:"CATHY", t:"Asks if he campaigned beyond writing."},
              {sp:"GRAHAM", t:"Confirms he campaigned for education and social reform through talks too, but suggests focusing only on the novels, which Cathy agrees with."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 25 to 30 before the discussion continues."},
              {sp:"GRAHAM", t:"Shares a chronological list of Dickens's novels, hoping Cathy would agree to focus on him, which she confirms she has."},
              {sp:"CATHY", t:"Starts with The Pickwick Papers (1836), noting its early success and quick stage adaptation."},
              {sp:"GRAHAM", t:"Points out a character's condition inspired the medical term Pickwickian syndrome, leading them to choose medicine as that novel's topic, including quotations from the book."},
              {sp:"GRAHAM", t:"Moves to Oliver Twist, noting the obvious poverty theme, but wanting something less expected."},
              {sp:"CATHY", t:"Suggests focusing on Oliver being taught to steal, illustrating how poor children rarely attended school and learned skills elsewhere, settling on education as the topic."},
              {sp:"CATHY", t:"Suggests Nicholas Nickleby next, recalling its cruel school setting."},
              {sp:"GRAHAM", t:"Notes the novel's touring actors too, suggesting entertainment and amusements of the era as a more positive topic, which they agree on; moves to Martin Chuzzlewit and its American trip."},
              {sp:"CATHY", t:"Notes Dickens himself had visited America shortly before writing it, drawing on that experience."},
              {sp:"GRAHAM", t:"Considers the novel's selfishness theme and social justice as a topic, but decides it's too general, agreeing instead on Dickens's own travels."},
              {sp:"CATHY", t:"Names Bleak House as her favourite Dickens novel."},
              {sp:"GRAHAM", t:"Agrees, praising its sharp satire of the legal system."},
              {sp:"CATHY", t:"Prefers focusing on heroine Esther's life story instead \u2014 mistreated as a child by an unrecognised aunt, later happy under her guardian's care, eventually married and given a home \u2014 settling on a woman's life as the topic."},
              {sp:"CATHY", t:"Moves to Little Dorrit, noting old Mr Dorrit's years in debtor's prison."},
              {sp:"GRAHAM", t:"Notes this mirrors Dickens's own father's experience, then suggests focusing on Mr Dorrit's later inherited fortune and his pretense of always having been wealthy, settling on wealth as the topic."},
              {sp:"GRAHAM", t:"Notes the next challenge will be finding materials to illustrate each chosen topic."},
              {sp:"ANNOUNCER", t:"That is the end of Part 3. You now have 30 seconds to check your answers to Part 3."}
            ]
          },
          4: {
            n: 4,
            label: "Part 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Agricultural programme in Mozambique",
                groups: [
                  {
                    heading: "How the programme was organised",
                    items: [
                      {n:null, before:"It focused on a dry and arid region in Chicualacuala district, near the Limpopo River.", input:null, after:""},
                      {n:null, before:"People depended on the forest to provide charcoal as a source of income.", input:null, after:""},
                      {n:31, before:"", input:31, after:"was seen as the main priority to ensure the supply of water."},
                      {n:32, before:"Most of the work organised by farmers' associations was done by", input:32, after:"."},
                      {n:null, before:"Fenced areas were created to keep animals away from crops.", input:null, after:""},
                      {n:null, before:"<b>The programme provided</b>", input:null, after:""},
                      {n:33, before:"", input:33, after:"for the fences", indent:true},
                      {n:34, before:"", input:34, after:"for suitable crops", indent:true},
                      {n:null, before:"water pumps.", input:null, after:"", indent:true},
                      {n:null, before:"<b>The farmers provided</b>", input:null, after:""},
                      {n:null, before:"labour", input:null, after:"", indent:true},
                      {n:35, before:"", input:35, after:"for the fences on their land.", indent:true}
                    ]
                  },
                  {
                    heading: "Further developments",
                    items: [
                      {n:36, before:"The marketing of produce was sometimes difficult due to lack of", input:36, after:"."},
                      {n:37, before:"Training was therefore provided in methods of food", input:37, after:"."},
                      {n:38, before:"Farmers made special places where", input:38, after:"could be kept."},
                      {n:39, before:"Local people later suggested keeping", input:39, after:"."}
                    ]
                  },
                  {
                    heading: "Evaluation and lessons learned",
                    items: [
                      {n:null, before:"Agricultural production increased, improving incomes and food security.", input:null, after:""},
                      {n:40, before:"Enough time must be allowed, particularly for the", input:40, after:"phase of the programme."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"irrigation",32:"women",33:"wire",34:"seeds",35:"posts",36:"transport",37:"preservation",38:"fish",39:"bees",40:"design"},
            script: [
              {sp:"SPEAKER", t:"Presents a case study of a rural support program in Mozambique's dry, arid Chicualacuala district near the Limpopo River, where three communities had previously relied unsustainably on selling forest-sourced charcoal due to unreliable rainfall for farming."},
              {sp:"SPEAKER", t:"Explains the program prioritised irrigation systems drawing on the Limpopo River to provide a dependable water supply, working closely with the district government, and establishing two new farmers' associations alongside the existing one to manage water, livestock, and agriculture, with women forming the majority of the workforce."},
              {sp:"SPEAKER", t:"Describes fencing off growing areas to protect crops from animals, with the community building the fences using wire supplied by the program; once fenced, land was cultivated with program-supplied seeds suited to the climate, and irrigation pumps brought river water via pipes, while locals supplied all labour and built the supporting fence posts themselves."},
              {sp:"SPEAKER", t:"Explains the program was closely monitored, successfully enabling farmers to grow surplus produce for sale, though lack of transport access caused significant spoilage, especially of vegetables; farmers' associations addressed this by introducing food preservation training."},
              {sp:"SPEAKER", t:"Describes an unplanned initiative where farmers dug water-filled tanks within fenced areas for fish farming, an important protein source, followed later by a community suggestion to introduce beekeeping for honey, both for personal use and sale."},
              {sp:"SPEAKER", t:"Concludes that reliable water access shows strong potential for agricultural development in dry regions, with Chicualacuala seeing marked production improvements benefiting food security and income, though stresses the importance of realistic timelines, especially during the program's design phase, since early mistakes are hard to correct later."},
              {sp:"ANNOUNCER", t:"That is the end of Part 4. You now have one minute to check your answers to Part 4."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 15 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2015%20test%203%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "EMPLOYMENT AGENCY: POSSIBLE JOBS",
                groups: [
                  {
                    heading: "First Job",
                    items: [
                      {n:1, before:"Administrative assistant in a company that produces", input:1, after:"(North London)"},
                      {n:null, before:"Responsibilities", input:null, after:""},
                      {n:null, before:"data entry", input:null, after:"", indent:true},
                      {n:2, before:"go to", input:2, after:"and take notes", indent:true},
                      {n:null, before:"general admin", input:null, after:"", indent:true},
                      {n:3, before:"management of", input:3, after:"", indent:true},
                      {n:null, before:"Requirements", input:null, after:""},
                      {n:null, before:"good computer skills including spreadsheets", input:null, after:"", indent:true},
                      {n:null, before:"good interpersonal skills", input:null, after:"", indent:true},
                      {n:4, before:"attention to", input:4, after:"", indent:true},
                      {n:null, before:"Experience", input:null, after:""},
                      {n:5, before:"need a minimum of", input:5, after:"of experience of teleconferencing", indent:true}
                    ]
                  },
                  {
                    heading: "Second Job",
                    items: [
                      {n:null, before:"Warehouse assistant in South London", input:null, after:""},
                      {n:null, before:"Responsibilities", input:null, after:""},
                      {n:null, before:"stock management", input:null, after:"", indent:true},
                      {n:6, before:"managing", input:6, after:"", indent:true},
                      {n:null, before:"Requirements", input:null, after:""},
                      {n:null, before:"ability to work with numbers", input:null, after:"", indent:true},
                      {n:null, before:"good computer skills", input:null, after:"", indent:true},
                      {n:7, before:"very organised and", input:7, after:"", indent:true},
                      {n:null, before:"good communication skills", input:null, after:"", indent:true},
                      {n:8, before:"used to working in a", input:8, after:"", indent:true},
                      {n:9, before:"able to cope with items that are", input:9, after:"", indent:true},
                      {n:null, before:"Need experience of", input:null, after:""},
                      {n:null, before:"driving in London", input:null, after:"", indent:true},
                      {n:null, before:"warehouse work", input:null, after:"", indent:true},
                      {n:10, before:"", input:10, after:"service", indent:true}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"furniture",2:"meetings",3:"diary",4:"detail",5:"1 year",6:"deliveries",7:"tidy",8:"team",9:"heavy",10:"customer"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Sally Baker, an employment agency representative, meeting Joe about possible job matches based on his CV."},
              {sp:"SALLY", t:"Describes the first role, an administrative assistant at Home Solutions, a North London furniture design and manufacturing company."},
              {sp:"SALLY", t:"Runs through matching requirements: data entry experience, which Joe confirms; attending meetings and taking notes, which Joe has also done; general admin duties like filing and record-keeping, which Joe is comfortable with."},
              {sp:"JOE", t:"Mentions he also managed a diary in his last job."},
              {sp:"SALLY", t:"Notes that's also required here and suggests Joe add it to his CV since it wasn't mentioned; continues listing requirements: strong computer skills, particularly spreadsheets, which Joe confirms; interpersonal skills, to be checked via references; and attention to detail, which Sally feels his CV supports."},
              {sp:"JOE", t:"Asks about any special experience needed."},
              {sp:"SALLY", t:"Mentions teleconferencing experience is wanted, at least one year, and Joe's three years comfortably exceeds that."},
              {sp:"JOE", t:"Expresses interest but notes the North London location would mean a long commute."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 6 to 10 before the conversation continues."},
              {sp:"SALLY", t:"Introduces a second role, a warehouse assistant position in South London, closer to Joe's home; confirms Joe's prior warehouse experience."},
              {sp:"SALLY", t:"Lists requirements: stock and delivery management, which Joe feels confident about given his comfort with numbers; computer literacy, already confirmed; strong organisational skills and tidiness, which go together according to Joe; and good written and oral communication."},
              {sp:"JOE", t:"Mentions enjoying being part of a team in his last warehouse role, finding it essential to the job."},
              {sp:"SALLY", t:"Confirms that's also wanted here, and asks what items Joe previously handled."},
              {sp:"JOE", t:"Mentions mostly bathroom and kitchen equipment like sinks, stoves, and fridges."},
              {sp:"SALLY", t:"Asks if Joe can manage heavy items."},
              {sp:"JOE", t:"Confirms he's strong and trained for it."},
              {sp:"SALLY", t:"Mentions the role also requires a driving licence and London driving experience, which Joe has, along with prior warehouse work and adequate customer service skills based on his CV."},
              {sp:"JOE", t:"Asks about pay for the roles."},
              {sp:"ANNOUNCER", t:"That is the end of Part 1. You now have one minute to check your answers to Part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11\u201316",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Street Play Scheme",
                items: [
                  {n:11, q:"When did the Street Play Scheme first take place?", opts:["two years ago","three years ago","six years ago"]},
                  {n:12, q:"How often is Beechwood Road closed to traffic now?", opts:["once a week","on Saturdays and Sundays","once a month"]},
                  {n:13, q:"Who is responsible for closing the road?", opts:["a council official","the police","local wardens"]},
                  {n:14, q:"Residents who want to use their cars", opts:["have to park in another street.","must drive very slowly.","need permission from a warden."]},
                  {n:15, q:"Alice says that Street Play Schemes are most needed in", opts:["wealthy areas.","quiet suburban areas.","areas with heavy traffic."]},
                  {n:16, q:"What has been the reaction of residents who are not parents?", opts:["Many of them were unhappy at first.","They like seeing children play in the street.","They are surprised by the lack of noise."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO benefits for children does Alice think are the most important?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"increased physical activity"},
                  {letter:"B", text:"increased sense of independence"},
                  {letter:"C", text:"opportunity to learn new games"},
                  {letter:"D", text:"opportunity to be part of a community"},
                  {letter:"E", text:"opportunity to make new friends"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO results of the King Street experiment surprised Alice?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"more shoppers"},
                  {letter:"B", text:"improved safety"},
                  {letter:"C", text:"less air pollution"},
                  {letter:"D", text:"more relaxed atmosphere"},
                  {letter:"E", text:"less noise pollution"}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"B",12:"A",13:"C",14:"B",15:"C",16:"B",17:"B",18:"D",19:"A",20:"E"},
            script: [
              {sp:"PRESENTER", t:"Introduces guest Alice Riches, who started the Street Play Scheme on her own street, Beechwood Road, which has since spread across the city; asks when she started it."},
              {sp:"ALICE", t:"Explains the idea began when her oldest child was a toddler, about six years ago, but two years of campaigning preceded the scheme actually launching, meaning it's now been running three years; notes it began as a once-monthly closure but is now weekly, with hopes to eventually extend to a full weekend."},
              {sp:"PRESENTER", t:"Asks what happens when the road closes."},
              {sp:"ALICE", t:"Describes volunteer wardens, mostly parents plus some elderly residents, blocking the road using council-provided signs, calmly explaining the closure to drivers, rarely needing police involvement; clarifies the road isn't fully closed \u2014 residents' cars may still pass through if driven under 20 km/h, though most avoid driving or park elsewhere during the closure."},
              {sp:"PRESENTER", t:"Asks if anyone can get involved."},
              {sp:"ALICE", t:"Encourages anyone interested to start their own scheme, noting demand is highest on busy roads where children lack safe outdoor space, unlike wealthier areas with private gardens or suburbs with more outdoor space; reports overwhelmingly positive reactions from residents generally, including non-parents, with only a small minority complaining."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 17 to 20 before the conversation continues."},
              {sp:"ALICE", t:"Lists benefits for children: fresh air, unsupervised play with friends, and \u2014 most importantly to her \u2014 growing independence and confidence being outside without parents; also highlights children building relationships with neighbourhood adults, creating a sense of extended community."},
              {sp:"PRESENTER", t:"Moves on to ask about a related King Street experiment."},
              {sp:"ALICE", t:"Explains local residents tried reducing traffic on King Street, the area's busiest road, for one day by blocking street parking rather than raising parking charges, which they felt would be unpopular; reports predicted improvements in air quality, but was surprised by how much quieter it became despite buses still running, and was especially surprised that shop sales actually increased that day, rather than declining as expected."},
              {sp:"PRESENTER", t:"Reacts with interest and begins a further question."},
              {sp:"ANNOUNCER", t:"That is the end of Part 2. You now have 30 seconds to check your answers to Part 2."}
            ]
          },
          3: {
            n: 3,
            label: "Part 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 21\u201326",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "What Hazel should analyse about items in newspapers",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:21, before:"What", input:21, after:"the item is on"},
                      {n:22, before:"the", input:22, after:"of the item, including the headline"},
                      {n:23, before:"any", input:23, after:"accompanying the item"},
                      {n:24, before:"the", input:24, after:"of the item, e.g. what's made prominent"},
                      {n:25, before:"the writer's main", input:25, after:""},
                      {n:26, before:"the", input:26, after:"the writer may make about the reader"}
                    ]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 27\u201330",
                inst: "What does Hazel decide to do about each of the following types of articles?<br>Choose the correct letter, <b>A\u2013C</b>, next to Questions 27\u201330.",
                mapTitle: "Types of articles",
                mapNote: "A. She will definitely look for a suitable article.<br>B. She may look for a suitable article.<br>C. She definitely won't look for an article.",
                options: ["A","B","C"],
                items: [
                  {n:27, label:"national news item"},
                  {n:28, label:"editorial"},
                  {n:29, label:"human interest"},
                  {n:30, label:"arts"}
                ]
              }
            ],
            answers: {21:"page",22:"size",23:"graphics",24:"structure",25:"purpose",26:"assumptions",27:"A",28:"C",29:"C",30:"B"},
            script: [
              {sp:"HAZEL", t:"Asks Tom for advice on her first media studies assignment, comparing newspaper coverage of a single story."},
              {sp:"TOM", t:"Confirms he did the same assignment last year and enjoyed it."},
              {sp:"HAZEL", t:"Asks what aspects to compare."},
              {sp:"TOM", t:"Lists several: which page the story appears on, since placement reflects the editor's sense of its importance; its size, including column inches and headline, all aimed at grabbing attention."},
              {sp:"HAZEL", t:"Asks about graphics."},
              {sp:"TOM", t:"Confirms visuals matter too, sometimes influencing understanding more than the text itself; also recommends examining the story's structure, noting most readers don't get past the first paragraph, so what's placed early versus what's buried near the end (like conflicting opinions) matters."},
              {sp:"HAZEL", t:"Asks about misleading or inaccurate information."},
              {sp:"TOM", t:"Suggests comparing versions across papers to identify what's accurate, tying into a key question: the writer's underlying purpose, which might be informing the public, but is often instead about generating fear, controversy, or ridicule."},
              {sp:"HAZEL", t:"Notes the writer may also make assumptions about readers."},
              {sp:"TOM", t:"Confirms this, covering assumed knowledge, attitudes, and education level, all shaping how a story is written without being patronising."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 27 to 30 before the discussion continues."},
              {sp:"HAZEL", t:"Asks if the story topic matters."},
              {sp:"TOM", t:"Says any topic works as long as it's covered by two or three papers, though a personally interesting topic makes it more enjoyable."},
              {sp:"HAZEL", t:"Decides a national political story would be worth analysing, given her interest in politics, and asks what Tom chose."},
              {sp:"TOM", t:"Explains he wanted to compare editorials expressing explicit opinions, but couldn't find two papers covering the same topic he wanted to analyse."},
              {sp:"HAZEL", t:"Says she wouldn't bother pursuing that option either."},
              {sp:"TOM", t:"Explains he ultimately chose an emotional human interest story about a seriously ill girl whose treatment abroad was crowdfunded by strangers, noting some papers focused purely on the goodwill shown while others examined the wider issue of unavailable local treatment."},
              {sp:"HAZEL", t:"Says such emotional stories affect her too strongly and she'll avoid that type, considering instead an arts topic like film reviews or arts funding."},
              {sp:"TOM", t:"Agrees that could be interesting."},
              {sp:"HAZEL", t:"Thanks Tom for his help."},
              {sp:"ANNOUNCER", t:"That is the end of Part 3. You now have 30 seconds to check your answers to Part 3."}
            ]
          },
          4: {
            n: 4,
            label: "Part 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Early history of keeping clean",
                groups: [
                  {
                    heading: "Prehistoric times",
                    items: [
                      {n:31, before:"water was used to wash off", input:31, after:""}
                    ]
                  },
                  {
                    heading: "Ancient Babylon",
                    items: [
                      {n:32, before:"soap-like material found in", input:32, after:"cylinders"}
                    ]
                  },
                  {
                    heading: "Ancient Greece",
                    items: [
                      {n:null, before:"people cleaned themselves with sand and other substances", input:null, after:""},
                      {n:33, before:"used a strigil - scraper made of", input:33, after:""},
                      {n:null, before:"washed clothes in streams", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Ancient Germany and Gaul",
                    items: [
                      {n:34, before:"used soap to colour their", input:34, after:""}
                    ]
                  },
                  {
                    heading: "Ancient Rome",
                    items: [
                      {n:null, before:"animal fat, ashes and clay mixed through action of rain, used for washing clothes", input:null, after:""},
                      {n:35, before:"from about 312 BC, water carried to Roman", input:35, after:"by aqueducts"}
                    ]
                  },
                  {
                    heading: "Europe in Middle Ages",
                    items: [
                      {n:36, before:"decline in bathing contributed to occurrence of", input:36, after:""},
                      {n:37, before:"", input:37, after:"began to be added to soap"}
                    ]
                  },
                  {
                    heading: "Europe from 17th century",
                    items: [
                      {n:null, before:"1600s: cleanliness and bathing started becoming usual", input:null, after:""},
                      {n:38, before:"1791: Leblanc invented a way of making soda ash from", input:38, after:""},
                      {n:39, before:"early 1800s: Chevreul turned soapmaking into a", input:39, after:""},
                      {n:40, before:"from 1800s, there was no longer a", input:40, after:"on soap"}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"mud",32:"clay",33:"metal",34:"hair",35:"baths",36:"disease",37:"perfume",38:"salt",39:"science",40:"tax"},
            script: [
              {sp:"SPEAKER", t:"Explains that personal, laundry, and household cleaning products as we know them are largely a 20th-century development, though cleanliness itself dates back to prehistoric times, when people settled near water partly for its ability to rinse mud from their hands."},
              {sp:"SPEAKER", t:"Describes evidence from ancient Babylon, around 2800 BC, of inscribed clay cylinders describing fats boiled with ashes, an early soap-making method, though the purpose of the resulting substance isn't recorded."},
              {sp:"SPEAKER", t:"Describes ancient Greek bathing for appearance rather than hygiene, using sand, pumice and ashes rather than soap, followed by oiling the skin and scraping it off with a metal tool called a strigil; clothes were washed in streams without soap; notes the ancient Germans and Gauls also made a soap-like substance from melted animal fat and ashes, using it to dye their hair red."},
              {sp:"SPEAKER", t:"Recounts a Roman legend attributing soap's name to Mount Sapo, where rain washed sacrificial animal fat and wood ash into the clay along the River Tiber, which women found reduced the effort of washing clothes; notes Roman bathing culture advanced with the first major aqueduct-fed baths built around 312 BC, becoming luxurious and popular, with physician Galen recommending soap medicinally by the 2nd century AD."},
              {sp:"SPEAKER", t:"Explains that after Rome's fall in 467 AD, declining bathing habits contributed to unsanitary conditions and disease outbreaks across medieval Europe, notably the 14th-century Black Death; despite this, soap-making persisted as a guarded craft, with perfume added to soap recipes for the first time alongside plant and animal oils and ashes, eventually expanding into soaps for shaving, shampooing, bathing and laundry."},
              {sp:"SPEAKER", t:"Describes French chemist Nicholas LeBlanc's 1791 patented process for producing soda ash from salt, enabling cheaper, higher-quality soap-making; notes the early 19th-century discovery by chemist Michel Eug\u00e8ne Chevreul of the chemistry linking fats, glycerin, and fatty acids turned soap-making into a true science, with further advances making production easier and cheaper."},
              {sp:"SPEAKER", t:"Explains soap was historically a heavily taxed luxury item until the 19th century, when removing this tax made it affordable for ordinary people, improving general cleanliness standards and leading to milder bathing soaps and machine-washing soaps by the turn of the 20th century."},
              {sp:"ANNOUNCER", t:"That is the end of Part 4. You now have one minute to check your answers to Part 4."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 15 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2015%20test%204%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "CUSTOMER SATISFACTION SURVEY",
                groups: [
                  {
                    heading: "Customer details",
                    items: [
                      {n:null, before:"Name: Sophie Bird", input:null, after:""},
                      {n:1, before:"Occupation:", input:1, after:""},
                      {n:2, before:"Reason for travel today:", input:2, after:""}
                    ]
                  },
                  {
                    heading: "Journey information",
                    items: [
                      {n:3, before:"Name of station returning to:", input:3, after:""},
                      {n:4, before:"Type of ticket purchased: standard", input:4, after:"ticket"},
                      {n:5, before:"Cost of ticket: £", input:5, after:""},
                      {n:null, before:"When ticket was purchased: yesterday", input:null, after:""},
                      {n:6, before:"Where ticket was bought:", input:6, after:""}
                    ]
                  },
                  {
                    heading: "Satisfaction with journey",
                    items: [
                      {n:null, before:"Most satisfied with: the wifi", input:null, after:""},
                      {n:7, before:"Least satisfied with: the", input:7, after:"this morning"}
                    ]
                  },
                  {
                    heading: "Satisfaction with station facilities",
                    items: [
                      {n:8, before:"Most satisfied with: how much", input:8, after:"was provided"},
                      {n:9, before:"Least satisfied with: lack of seats, particularly on the", input:9, after:""},
                      {n:10, before:"Neither satisfied nor dissatisfied with: the", input:10, after:"available"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"journalist",2:"shopping",3:"Staunfirth",4:"return",5:"23.70",6:"online",7:"delay",8:"information",9:"platforms",10:"parking"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a train company representative surveying Sophie Bird about her journey while she waits with about ten minutes before her train home."},
              {sp:"MAN", t:"Takes her name and asks about her occupation."},
              {sp:"SOPHIE", t:"Explains she's a journalist, here today on her day off for shopping, though she does sometimes visit for work."},
              {sp:"MAN", t:"Confirms she's travelling back to Staunfirth, where she lives, and that she departed from there that morning; asks about her ticket."},
              {sp:"SOPHIE", t:"Explains she bought a standard return ticket without a railcard discount, meaning she paid full price, £23.70, which she feels is too much for a 45-minute journey; mentions she didn't book in advance since her trip wasn't planned ahead, and bought the ticket online as an e-ticket the day before, since she avoids the station's ticket machines, preferring longer ticket office hours instead."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 7 to 10 before the conversation continues."},
              {sp:"MAN", t:"Asks what Sophie was most satisfied with on her journey."},
              {sp:"SOPHIE", t:"Praises the much-improved onboard wifi, useful for working; mentions today's train was unusually delayed by about 15 minutes, despite normally being reliable."},
              {sp:"MAN", t:"Asks about station facility satisfaction, noting the recent station upgrade."},
              {sp:"SOPHIE", t:"Praises the clearer, expanded train time information now available compared to the previous single, hard-to-see board; mentions modern trains and a nice new cafe, but feels there aren't enough seats, especially on the platforms."},
              {sp:"MAN", t:"Asks about parking satisfaction."},
              {sp:"SOPHIE", t:"Says she has no real opinion since she never uses it, settling on neither satisfied nor dissatisfied."},
              {sp:"MAN", t:"Moves on to ask about further facilities."},
              {sp:"ANNOUNCER", t:"That is the end of Part 1. You now have one minute to check your answers to Part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "map_label",
                qlabel: "Questions 11\u201316",
                inst: "Label the map below.<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 11\u201316.",
                mapTitle: "Croft Valley Park",
                mapImage: "data:image/jpeg;base64,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",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:11, label:"caf\u00e9"},
                  {n:12, label:"toilets"},
                  {n:13, label:"formal gardens"},
                  {n:14, label:"outdoor gym"},
                  {n:15, label:"skateboard ramp"},
                  {n:16, label:"wild flowers"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>What does the speaker say about the adventure playground?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"Children must be supervised."},
                  {letter:"B", text:"It costs more in winter."},
                  {letter:"C", text:"Some activities are only for younger children."},
                  {letter:"D", text:"No payment is required."},
                  {letter:"E", text:"It was recently expanded."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>What does the speaker say about the glass houses?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"They are closed at weekends."},
                  {letter:"B", text:"Volunteers are needed to work there."},
                  {letter:"C", text:"They were badly damaged by fire."},
                  {letter:"D", text:"More money is needed to repair some of the glass."},
                  {letter:"E", text:"Visitors can see palm trees from tropical regions."}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"D",12:"C",13:"G",14:"H",15:"A",16:"E",17:"A",18:"D",19:"A",20:"C"},
            script: [
              {sp:"SPEAKER", t:"Introduces herself as chair of the Town Council Subcommittee on Park Facilities, updating the council on recent changes to Croft Valley Park, referring to a handed-out map."},
              {sp:"SPEAKER", t:"Confirms the park's basic layout is unchanged, still with north and south gates and a central lake; the cafe remains in its usual spot overlooking the lake next to the old museum; explains plans to relocate the toilets closer to the park's centre, since they're currently tucked away in a corner near the adventure playground."},
              {sp:"SPEAKER", t:"Describes the replanted formal gardens, now near the south gate between the park boundary and the lakeside path toward the old museum, previously located behind the museum, expected to look their best within a month or two; introduces the popular new outdoor gym near the glass houses, just off the south gate path but partly hidden among the trees."},
              {sp:"SPEAKER", t:"Describes the successful new skateboard ramp near the old museum, reached via a small path branching off the main lake-to-museum route, heavily used in evenings and holidays; introduces a new wildflower area attracting bees and butterflies, located on a bend in the path along the lake's east side, just south of the adventure playground."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 17 to 20 before the talk continues."},
              {sp:"SPEAKER", t:"Highlights the adventure playground as a major new development in the park's north, built to give children space to be active; explains it's open year-round (closing early in winter) with free entry, open to children of any age for any activity, though adults must supervise rather than leave children unattended, with seating provided nearby for parents."},
              {sp:"SPEAKER", t:"Describes extensive repairs to the glass houses following a serious fire that destroyed their western side, with over £80,000 spent replacing glass walls, metal supports, and lost plants, though the tropical palm tree collection remains too costly to replace so far; notes current opening hours are 10am-3pm, Monday to Thursday only, with hopes to extend to weekends soon, thanking those who contributed time and money to the recovery effort."},
              {sp:"ANNOUNCER", t:"That is the end of Part 2. You now have 30 seconds to check your answers to Part 2."}
            ]
          },
          3: {
            n: 3,
            label: "Part 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21\u201324",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Presentation about refrigeration",
                items: [
                  {n:21, q:"What did Annie discover from reading about icehouses?", opts:["why they were first created","how the ice was kept frozen","where they were located"]},
                  {n:22, q:"What point does Annie make about refrigeration in ancient Rome?", opts:["It became a commercial business.","It used snow from nearby.","It took a long time to become popular."]},
                  {n:23, q:"In connection with modern refrigerators, both Annie and Jack are worried about", opts:["the complexity of the technology.","the fact that some are disposed of irresponsibly.","the large number that quickly break down."]},
                  {n:24, q:"What do Jack and Annie agree regarding domestic fridges?", opts:["They are generally good value for money.","There are plenty of useful variations.","They are more useful than other domestic appliances."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201330",
                inst: "Who is going to do research into each topic?<br>Choose the correct letter, <b>A\u2013C</b>, next to Questions 25\u201330.",
                mapNoteTitle: "People",
                mapTitle: "Topics",
                mapNote: "A. Annie<br>B. Jack<br>C. both Annie and Jack",
                options: ["A","B","C"],
                items: [
                  {n:25, label:"the goods that are refrigerated"},
                  {n:26, label:"the effects on health"},
                  {n:27, label:"the impact on food producers"},
                  {n:28, label:"the impact on cities"},
                  {n:29, label:"refrigerated transport"},
                  {n:30, label:"domestic fridges"}
                ]
              }
            ],
            answers: {21:"B",22:"A",23:"B",24:"A",25:"A",26:"A",27:"B",28:"B",29:"A",30:"C"},
            script: [
              {sp:"ANNIE", t:"Suggests she and Jack discuss their findings so far before planning their refrigeration presentation."},
              {sp:"JACK", t:"Admits he hasn't done much research yet."},
              {sp:"ANNIE", t:"Shares what she learned about 18th and 19th century UK icehouses, often built underground or in shade near lakes that froze in winter, with ice blocks insulated using straw or sawdust, keeping them from melting for months; mentions ancient Roman refrigeration too."},
              {sp:"JACK", t:"Expresses surprise."},
              {sp:"ANNIE", t:"Explains Romans dug pits and imported snow from distant mountains, forming ice at the bottom, with both ice and snow sold, ice fetching a higher price, likely affordable only to the wealthy."},
              {sp:"JACK", t:"Mentions reading about modern fridge technologies, too technically complex for him to fully grasp."},
              {sp:"ANNIE", t:"Wonders what happens to discarded old fridges."},
              {sp:"JACK", t:"Notes the harmful environmental gases they contain."},
              {sp:"ANNIE", t:"Acknowledges recycling organisations exist, though some people still illegally dump old fridges."},
              {sp:"JACK", t:"Agrees this is hard to prevent, noting the UK disposes of around 3 million fridges annually."},
              {sp:"ANNIE", t:"Finds that surprising given how rarely fridges break down."},
              {sp:"JACK", t:"Confirms UK fridges last 11 years on average, sometimes 20 or more, making them relatively good value compared to other appliances when cost is spread over their lifespan."},
              {sp:"ANNIE", t:"Agrees, suggesting manufacturers now encourage extra spending through varied colours and designs, unlike the limited choice her parents had with their first fridge."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 25 to 30 before the discussion continues."},
              {sp:"JACK", t:"Suggests listing presentation topics and dividing research between them."},
              {sp:"ANNIE", t:"Proposes starting with the range of goods refrigerated today, beyond just food and drink."},
              {sp:"JACK", t:"Mentions flowers, medicines, and computers too."},
              {sp:"ANNIE", t:"Offers to take that topic herself, which Jack agrees to."},
              {sp:"JACK", t:"Suggests a topic on refrigeration's health effects, both harmful 19th-century chemicals and benefits like fresh food access, asking if Annie wants it."},
              {sp:"ANNIE", t:"Admits reluctance, and Jack shares the feeling, but Annie agrees to take it as a favour."},
              {sp:"JACK", t:"Suggests a topic on food producers benefiting from refrigerated export, like farmers in poorer countries, offering it to Annie."},
              {sp:"ANNIE", t:"Passes it to Jack instead, who's happy to take it, finding it interesting."},
              {sp:"ANNIE", t:"Suggests covering refrigeration's role in enabling desert cities like Las Vegas to exist."},
              {sp:"JACK", t:"Mentions a relevant economics book chapter he found, offering the title to Annie."},
              {sp:"ANNIE", t:"Declines, finding economics books heavy going, leaving Jack to take that topic."},
              {sp:"ANNIE", t:"Volunteers for the transport topic, covering refrigerated trucks."},
              {sp:"JACK", t:"Adds that refrigerated railroad cars transported milk and butter in the USA as early as the 1840s."},
              {sp:"ANNIE", t:"Thanks him for the train detail, planning to include it in her transport section."},
              {sp:"JACK", t:"Suggests a domestic fridges topic, given how familiar they are to everyone."},
              {sp:"ANNIE", t:"Proposes splitting it \u2014 Jack covering 19th and 20th century fridges, herself covering current models and how manufacturers differentiate their products."},
              {sp:"JACK", t:"Agrees to this split."},
              {sp:"ANNOUNCER", t:"That is the end of Part 3. You now have 30 seconds to check your answers to Part 3."}
            ]
          },
          4: {
            n: 4,
            label: "Part 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "How the Industrial Revolution affected life in Britain",
                groups: [
                  {
                    heading: "19th century",
                    items: [
                      {n:31, before:"For the first time, people's possessions were used to measure Britain's", input:31, after:"."},
                      {n:32, before:"Developments in production of goods and in", input:32, after:"greatly changed lives."}
                    ]
                  },
                  {
                    heading: "MAIN AREAS OF CHANGE",
                    items: []
                  },
                  {
                    heading: "Manufacturing",
                    items: [
                      {n:33, before:"The Industrial Revolution would not have happened without the new types of", input:33, after:"that were used then."},
                      {n:34, before:"The leading industry was", input:34, after:"(its products became widely available)."},
                      {n:35, before:"New", input:35, after:"made factories necessary and so more people moved into towns."}
                    ]
                  },
                  {
                    heading: "Transport",
                    items: [
                      {n:null, before:"The railways took the place of canals.", input:null, after:""},
                      {n:null, before:"Because of the new transport:", input:null, after:""},
                      {n:36, before:"greater access to", input:36, after:"made people more aware of what they could buy in shops.", indent:true},
                      {n:37, before:"when shopping, people were not limited to buying", input:37, after:"goods.", indent:true}
                    ]
                  },
                  {
                    heading: "Retailing",
                    items: [
                      {n:null, before:"The first department stores were opened.", input:null, after:""},
                      {n:null, before:"The displays of goods were more visible:", input:null, after:""},
                      {n:38, before:"inside stores because of better", input:38, after:".", indent:true},
                      {n:39, before:"outside stores, because", input:39, after:"were bigger.", indent:true},
                      {n:40, before:"", input:40, after:"that was persuasive became much more common."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"wealth",32:"technology",33:"power",34:"textiles",35:"machines",36:"newspapers",37:"local",38:"lighting",39:"windows",40:"advertising"},
            script: [
              {sp:"SPEAKER", t:"Introduces a presentation on how the Industrial Revolution affected ordinary British lives, particularly the rise of consumerism, when buying and selling goods became central to daily life and possessions began serving as a measure of national wealth, a stark shift from the minimal possessions typical before this era spanning roughly the mid-18th to late 19th century."},
              {sp:"SPEAKER", t:"Discusses manufacturing changes, noting the Industrial Revolution depended on new power sources like steam and coal, replacing traditional watermills and windmills; identifies textiles as the leading 19th-century industry, making fashionable fabrics widely available; explains that new large-scale machines required much more space than home workshops, driving the construction of factories and mass migration from villages into towns."},
              {sp:"SPEAKER", t:"Discusses transport developments, noting canals gradually replaced slow, limited horse-drawn transport before themselves being replaced by railways, which moved goods and people efficiently nationwide; highlights that railways also distributed newspapers widely, making people more aware of available goods and encouraging more purchasing, no longer limited to local markets."},
              {sp:"SPEAKER", t:"Discusses retailing changes, describing the rise of new department stores at the expense of small shops, with entrepreneurs improving in-store lighting to showcase goods better and using new plate glass technology to create larger shop windows visible from outside; notes a shift from simply informing customers toward a new explosion of persuasive advertising aimed at encouraging shopping."},
              {sp:"SPEAKER", t:"Cites Flanders's view that the Industrial Revolution's major effect was creating widespread choice, turning former luxuries like sugar and cutlery first into everyday conveniences and eventually into necessities people couldn't imagine living without, much like mobile phones today."},
              {sp:"ANNOUNCER", t:"That is the end of Part 4. You now have one minute to check your answers to Part 4."}
            ]
          }
        }
      }
    }
  }
});
