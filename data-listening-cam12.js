// EngFinite Learning — Listening Test Data (CAM12)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam12: {
    tests: {
      1: {
        title: "Cambridge IELTS 12 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2012%20test%201%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1–10",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "FAMILY EXCURSIONS",
                groups: [
                  {
                    heading: "Cruise on a lake",
                    items: [
                      {n:null, before:"(Example) Travel on an old steamship", input:null, after:""},
                      {n:null, before:"Can take photos of the", input:1, after:"that surround the lake"}
                    ]
                  },
                  {
                    heading: "Farm visit",
                    items: [
                      {n:null, before:"Children can help feed the sheep", input:null, after:""},
                      {n:null, before:"Visit can include a 40-minute ride on a", input:2, after:""},
                      {n:null, before:"Visitors can walk in the farm's", input:3, after:"by the lake"},
                      {n:null, before:"", input:4, after:"is available at extra cost"}
                    ]
                  },
                  {
                    heading: "Cycling trips",
                    items: [
                      {n:null, before:"Cyclists explore the Back Road", input:null, after:""},
                      {n:null, before:"A", input:5, after:"is provided"},
                      {n:null, before:"Only suitable for cyclists who have some", input:6, after:""},
                      {n:null, before:"Bikes can be hired from", input:7, after:"(near the Cruise Ship Terminal)"},
                      {n:null, before:"Cyclists need:", input:null, after:""},
                      {n:null, before:"a repair kit", input:null, after:""},
                      {n:null, before:"food and drink", input:null, after:""},
                      {n:null, before:"a", input:8, after:"(can be hired)"},
                      {n:null, before:"There are no", input:9, after:"or accommodation in the area"}
                    ]
                  },
                  {
                    heading: "Cost",
                    items: [
                      {n:null, before:"Total cost for whole family of cruise and farm visit: $", input:10, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"mountains",2:"horse",3:"gardens",4:"Lunch",5:"map",6:"experience",7:"Ratchesons",8:"helmet",9:"shops",10:"267"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. A visitor asks a tourist centre employee about family-friendly excursions on a lake."},
              {sp:"TC EMPLOYEE", t:"Suggests an old steamship cruise (over 100 years old, several departures a day, about 90 minutes), with great mountain views all around the lake for photos."},
              {sp:"VISITOR", t:"Mentions his children's ages — a 15-year-old daughter and a 7-year-old son."},
              {sp:"TC EMPLOYEE", t:"Describes a popular farm visit on the far side of the lake: the farmer meets visitors off the boat, children can help feed the sheep, and there's a beginner-friendly 40-minute horse ride around the farm. Visitors can also explore on their own (closing gates behind them) and walk through the farm's lakeside gardens, which are at their best now. Lunch is available there but costs extra, paid on arrival."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 5 to 10."},
              {sp:"TC EMPLOYEE", t:"Describes a cycling trip on the 'Back Road' trail (3-4 hours, great scenery) — a free map is provided with the cruise ticket. The trail is fairly challenging and not suitable for the 7-year-old; it needs someone with a bit more cycling experience."},
              {sp:"VISITOR", t:"Suggests he and his cycling-loving daughter could do the ride while his wife and son stay at the farm, and asks about renting bikes."},
              {sp:"TC EMPLOYEE", t:"Recommends a shop called Ratchesons (spelled out), near the cruise ship terminal, where cyclists can also get a repair kit and rent a helmet (strongly recommended). Notes the trail is remote — no shops or places to stay — so they must get back in time for the last boat, and should bring their own food and water from the city."},
              {sp:"TC EMPLOYEE", t:"Works out the pricing: one adult and one child for the cruise with farm tour is $117, plus one adult and one child for the cruise only brings the total to $214 — but since the daughter is 15, she must pay the adult fare ($75) rather than the child fare ($22), bringing the final total to $267."},
              {sp:"ANNOUNCER", t:"That is the end of section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11–14",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Talk to new kitchen assistants",
                items: [
                  {n:11, q:"According to the manager, what do most people like about the job of kitchen assistant?", opts:["the variety of work","the friendly atmosphere","the opportunities for promotion"]},
                  {n:12, q:"The manager is concerned about some of the new staff's", opts:["jewellery.","hair styles.","shoes."]},
                  {n:13, q:"The manager says that the day is likely to be busy for kitchen staff because", opts:["it is a public holiday.","the head chef is absent.","the restaurant is almost fully booked."]},
                  {n:14, q:"Only kitchen staff who are 18 or older are allowed to use", opts:["the waste disposal unit.","the electric mixer.","the meat slicer."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 15 and 16",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>15–16</b>&nbsp; According to the manager, which TWO things can make the job of kitchen assistant stressful?",
                qns: [15,16],
                options: [
                  {letter:"A", text:"They have to follow orders immediately."},
                  {letter:"B", text:"The kitchen gets very hot."},
                  {letter:"C", text:"They may not be able to take a break."},
                  {letter:"D", text:"They have to do overtime."},
                  {letter:"E", text:"The work is physically demanding."}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 17–20",
                inst: "What is the responsibility of each of the following restaurant staff?<br>Choose the correct letter, <b>A–F</b>, next to Questions 17–20.",
                mapTitle: "Responsibilities",
                mapNote: "<b>A.</b> training courses<br><b>B.</b> food stocks<br><b>C.</b> first aid<br><b>D.</b> breakages<br><b>E.</b> staff discounts<br><b>F.</b> timetables",
                options: ["A","B","C","D","E","F"],
                items: [
                  {n:17, label:"Joy Parkins"},
                  {n:18, label:"David Field"},
                  {n:19, label:"Dexter Wills"},
                  {n:20, label:"Mike Smith"}
                ]
              }
            ],
            answers: {11:"A",12:"A",13:"C",14:"C",15:"A",16:"E",17:"F",18:"C",19:"D",20:"B"},
            multiGroups: [[15,16]],
            script: [
              {sp:"ANNOUNCER", t:"Section 2. Joy Parkins, a restaurant manager, welcomes a group of new kitchen assistants on their first day."},
              {sp:"JOY PARKINS", t:"Reassures the group that although kitchen work can mean being shouted at occasionally, most assistants enjoy it because there's so much variety - they never get bored - and good performers may be given more responsibility later."},
              {sp:"JOY PARKINS", t:"Reviews safety basics: everyone arrived on time and in suitable footwear (important since floors get wet and slippery); long hair is tied back, but some staff need to remove rings and bracelets (and leave them at home from tomorrow) since jewellery is a safety hazard."},
              {sp:"JOY PARKINS", t:"Explains today will be especially busy: the restaurant has no free tables this evening and only a few for lunch, and the head chef has just returned from a week's holiday during which the other chefs had extra work."},
              {sp:"JOY PARKINS", t:"Outlines equipment rules: nobody may use the waste disposal system until trained; the two under-18 staff (Emma and Jake) may not use the meat slicer; and nobody may use the electric mixer until shown how."},
              {sp:"JOY PARKINS", t:"Warns the job can be stressful: an 8-hour day to start (with optional overtime later), a break in the middle, but a lot of time on your feet lifting and carrying (physically demanding), and instructions must be carried out immediately. On the plus side, the kitchen has very good air conditioning."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 17 to 20."},
              {sp:"JOY PARKINS", t:"Introduces key staff: she herself (Joy Parkins) decides who works where and for how long, and will rotate the new staff around different colleagues to help them learn."},
              {sp:"JOY PARKINS", t:"David Field handles first aid - any injury, however minor, must be reported to him so it's recorded and properly treated. Dexter Wills should be told about any breakages (e.g. a smashed plate) so they're noted and replaced. Mike Smith manages stores of perishable food (flour, sugar, etc.) and should be told when supplies are running low so he can reorder."},
              {sp:"ANNOUNCER", t:"That is the end of Section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21–30",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21–23",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Paper on Public Libraries",
                items: [
                  {n:21, q:"What will be the main topic of Trudie and Stewart's paper?", opts:["how public library services are organised in different countries","how changes in society are reflected in public libraries","how the funding of public libraries has changed"]},
                  {n:22, q:"They agree that one disadvantage of free digitalised books is that", opts:["they may take a long time to read.","they can be difficult to read.","they are generally old."]},
                  {n:23, q:"Stewart expects that in the future libraries will", opts:["maintain their traditional function.","become centres for local communities.","no longer contain any books."]}
                ]
              },
              {
                type: "notes",
                qlabel: "Questions 24–30",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Study of local library: possible questions",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"whether it has a", input:24, after:"of its own"},
                      {n:null, before:"its policy regarding noise of various kinds", input:null, after:""},
                      {n:null, before:"how it's affected by laws regarding all aspects of", input:25, after:""},
                      {n:null, before:"how the design needs to take the", input:26, after:"of customers into account"},
                      {n:null, before:"what", input:27, after:"is required in case of accidents"},
                      {n:null, before:"why a famous person's", input:28, after:"is located in the library"},
                      {n:null, before:"whether it has a", input:29, after:"of local organisations"},
                      {n:null, before:"how it's different from a library in a", input:30, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {21:"B",22:"C",23:"C",24:"budget",25:"employment",26:"safety",27:"insurance",28:"diary",29:"database",30:"museum"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. Two librarian students, Trudie and Stewart, plan a paper on public libraries."},
              {sp:"STEWART", t:"Wonders whether to focus on how libraries have changed over time, or how different countries organise them."},
              {sp:"TRUDIE", t:"Suggests instead focusing on this country, linking changes in libraries to wider social developments — higher literacy rates and a more linguistically diverse population. Stewart proposes also covering funding changes, but Trudie notes the paper must stay short, so funding shouldn't be covered in depth."},
              {sp:"TRUDIE", t:"Raises the impact of technology, especially the internet — with so many books digitised, people can read them at home, which Stewart suggests could make libraries obsolete."},
              {sp:"STEWART", t:"Points out that free digitised books are mostly out of copyright (copyright here lasts 70 years after the author's death), so they tend to be old works rather than recent bestsellers or up-to-date information."},
              {sp:"TRUDIE", t:"Adds that she personally finds long texts slower and harder to focus on when reading on screen, though Stewart says he prefers screens — just a personal preference."},
              {sp:"TRUDIE", t:"Predicts libraries will keep evolving, possibly becoming more like community centres hosting local club meetings."},
              {sp:"STEWART", t:"Hopes libraries keep their traditional role too, but worries that for financial reasons books and magazines could eventually disappear entirely, replaced by rows of computers — looking nothing like today's libraries."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 24 to 30."},
              {sp:"TRUDIE", t:"Proposes an in-depth case study of their local library as background research, and the pair brainstorm questions to investigate."},
              {sp:"STEWART", t:"Suggests asking staff whether the library controls its own budget or whether the local council does."},
              {sp:"TRUDIE", t:"Wants to know the library's noise policy in detail — food is banned, but she's curious what kinds of noise are restricted (talking seems common, music never)."},
              {sp:"STEWART", t:"Raises how employment law affects the library — working hours, staff facilities, etc."},
              {sp:"TRUDIE", t:"Adds questions about building design and customer safety (non-slip flooring, emergency exits) and what insurance the library needs in case someone is injured."},
              {sp:"STEWART", t:"Mentions a long-standing curiosity: next to the library's archive of old local newspapers is the diary of a 19th-century politician — he wants to know that person's connection to the area."},
              {sp:"TRUDIE", t:"Wonders whether the library keeps a database of local organisations (like sports clubs) or just refers people online."},
              {sp:"STEWART", t:"Says he'd like to find out how a public library differs from one that's part of a museum."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31–40",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31–40",
                inst: "Complete the notes below.<br>Write <b>NO MORE THAN TWO WORDS</b> for each answer.",
                notesTitle: "Four business values",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Many business values can result in", input:31, after:"."},
                      {n:null, before:"Senior managers need to understand and deal with the potential", input:32, after:"that may result."}
                    ]
                  },
                  {
                    heading: "Collaboration",
                    items: [
                      {n:null, before:"During a training course, the speaker was in a team that had to build a", input:33, after:"."},
                      {n:null, before:"Other teams experienced", input:34, after:"from trying to collaborate."},
                      {n:null, before:"The speaker's team won because they reduced collaboration.", input:null, after:""},
                      {n:null, before:"Sales of a", input:35, after:"were poor because of collaboration."}
                    ]
                  },
                  {
                    heading: "Industriousness",
                    items: [
                      {n:null, before:"Hard work may be a bad use of various company", input:36, after:"."},
                      {n:null, before:"The word 'lazy' in this context refers to people who avoid doing tasks that are", input:37, after:"."}
                    ]
                  },
                  {
                    heading: "Creativity",
                    items: [
                      {n:null, before:"An advertising campaign for a", input:38, after:"was memorable but failed to boost sales."},
                      {n:null, before:"Creativity should be used as a response to a particular", input:39, after:"."}
                    ]
                  },
                  {
                    heading: "Excellence",
                    items: [
                      {n:null, before:"According to one study, on average, pioneers had a", input:40, after:"that was far higher than that of followers."},
                      {n:null, before:"Companies that always aim at excellence may miss opportunities.", input:null, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"damage",32:"side effects",33:"bridge",34:"confusion",35:"smartphone",36:"resources",37:"unnecessary",38:"chocolate bar",39:"problem",40:"market share"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. A lecture for business students about four commonly-praised business values: collaboration, hard work, creativity, and excellence."},
              {sp:"SPEAKER", t:"Argues these values are usually seen as unquestionably good, but in practice they're abstract ideas disconnected from day-to-day business — pursued without understanding their side effects, they can cause real damage even when leaders have good intentions."},
              {sp:"SPEAKER", t:"On collaboration: describes a management training exercise where teams had to build a bridge across a stream, with a rule that everyone had to move at least one building block. Most teams descended into confusion trying to collaborate on a task better suited to one person. The speaker's team won by having everyone make a token, minimal move to satisfy the rule, then letting their one puzzle-skilled member build it alone — reducing collaboration rather than increasing it."},
              {sp:"SPEAKER", t:"Gives a second collaboration example: a company launching a smartphone where one director wanted a business-market focus and another wanted a consumer focus. Trying to satisfy both, the company gave it a consumer-friendly name but marketed it to businesses — satisfying neither audience and hurting sales."},
              {sp:"SPEAKER", t:"On hard work: compares it to a hamster running in a wheel — busy but going nowhere. Hard work only has value when properly targeted; otherwise it wastes a company's most valuable resources, time and energy. Describes a model classifying people as clever, hard-working, stupid, or lazy — where 'lazy' means rationally avoiding unnecessary tasks, not avoiding all work. The most valuable people are clever AND lazy: they think clearly, don't rush decisions, and find efficient solutions instead of throwing more hours at a problem."},
              {sp:"SPEAKER", t:"On creativity: notes it can boost sales (e.g. a memorable TV ad), but not always — gives the example of a chocolate bar ad campaign that people remembered vividly without recalling what product it was for, since the creators assumed their own enjoyment of the idea would translate to the audience. Warns that a company launching huge numbers of new products may seem creative but actually make smaller profits; creativity should be targeted at solving a specific identified problem, not pursued for its own sake."},
              {sp:"SPEAKER", t:"On excellence: notes that being first to market is often more profitable than having the best product. Cites a study comparing 'pioneer' companies (first to launch a type of product) with 'follower' companies (who copied and improved it) — pioneers averaged a 29% market share versus only 13% for followers, despite followers sometimes having better products. Concludes that insisting on excellence everywhere wastes time and energy and can mean missing opportunities — 'just get started' often beats 'make sure it's excellent'."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      2: {
        title: "Cambridge IELTS 12 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2012%20test%202%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1–10",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "Events during Kenton Festival",
                example: {label: "Start date:", value: "16th May"},
                groups: [
                  {
                    heading: "Opening ceremony (first day)",
                    items: [
                      {n:null, before:"In town centre, starting at", input:1, after:""},
                      {n:null, before:"The mayor will make a speech", input:null, after:""},
                      {n:null, before:"A", input:2, after:"will perform"},
                      {n:null, before:"Performance of a", input:3, mid:"about Helen Tungate (a", input2:4, after:")"},
                      {n:null, before:"Evening fireworks display situated across the", input:5, after:""}
                    ]
                  },
                  {
                    heading: "Other events",
                    items: [
                      {n:null, before:"Videos about relationships that children have with their", input:6, after:""},
                      {n:null, before:"Venue:", input:7, after:"House"},
                      {n:null, before:"Performance of", input:8, after:"dances"},
                      {n:null, before:"Venue: the", input:9, after:"market in the town centre"},
                      {n:null, before:"Time: 2 and 5 pm every day except 1st day of festival", input:null, after:""},
                      {n:null, before:"Several professional concerts and one by children", input:null, after:""},
                      {n:null, before:"Venue: library", input:null, after:""},
                      {n:null, before:"Time: 6.30 pm on the 18th", input:null, after:""},
                      {n:null, before:"Tickets available online from festival box office and from shops which have the festival", input:10, after:"in their windows"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"2.45",2:"band",3:"play",4:"scientist",5:"river",6:"grandparents",7:"Handsworth",8:"traditional",9:"outdoor",10:"logo"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. A woman planning a holiday in Kenton phones the festival box office to find out about the programme."},
              {sp:"MAN", t:"Confirms the festival runs 16th-19th May, which overlaps with her stay (15th-19th)."},
              {sp:"MAN", t:"Describes the opening ceremony on the first day: people gather from around 2pm in the town centre, with events running from 2.45pm to about 5.30pm. The mayor will officially open the festival with a short welcome speech, attended by all town councillors."},
              {sp:"MAN", t:"Says a band will perform - this year the local army cadets rather than the usual children's choir. A community group will then perform a short self-written play about Helen Tungate, a scientist born in Kenton exactly 100 years ago (hence the centenary celebration). The woman, a biologist, is delighted to learn of the connection."},
              {sp:"MAN", t:"Notes the evening firework display (best viewed from the park) takes place across the river and is one of the festival's most popular events."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 6 to 10."},
              {sp:"MAN", t:"Describes ongoing events: art college students have made videos about relationships between children and their grandparents, shown at Handsworth House (spelled out), near the Town Hall, since the art college itself is in use for classes throughout the festival."},
              {sp:"WOMAN", t:"Asks about ballet, as it's her hobby."},
              {sp:"MAN", t:"Says there's no ballet, but there will be traditional dances from around the country, held in the outdoor market (not the covered one) in the town centre at 2pm and 5pm every day except the first."},
              {sp:"MAN", t:"Mentions several concerts (three by professionals, one by local children) at the library on Part Street, on the 18th at 6.30pm. Tickets can be booked online, or bought on arrival at the festival box office or any shop displaying the festival's logo in its window."},
              {sp:"ANNOUNCER", t:"That is the end of section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11–15",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Theatre trip to Munich",
                items: [
                  {n:11, q:"When the group meet at the airport they will have", opts:["breakfast.","coffee.","lunch."]},
                  {n:12, q:"The group will be met at Munich Airport by", opts:["an employee at the National Theatre.","a theatre manager.","a tour operator."]},
                  {n:13, q:"How much will they pay per night for a double room at the hotel?", opts:["110 euros","120 euros","150 euros"]},
                  {n:14, q:"What type of restaurant will they go to on Tuesday evening?", opts:["an Italian restaurant","a Lebanese restaurant","a typical restaurant of the region"]},
                  {n:15, q:"Who will they meet on Wednesday afternoon?", opts:["an actor","a playwright","a theatre director"]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 16–20",
                inst: "What does the man say about the play on each of the following days?<br>Choose the correct letter, <b>A–G</b>, next to Questions 16–20.",
                mapTitle: "Comments",
                mapNote: "<b>A.</b> The playwright will be present.<br><b>B.</b> The play was written to celebrate an anniversary.<br><b>C.</b> The play will be performed inside a historic building.<br><b>D.</b> The play will be accompanied by live music.<br><b>E.</b> The play will be performed outdoors.<br><b>F.</b> The play will be performed for the first time.<br><b>G.</b> The performance will be attended by officials from the town.",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:16, label:"Wednesday"},
                  {n:17, label:"Thursday"},
                  {n:18, label:"Friday"},
                  {n:19, label:"Saturday"},
                  {n:20, label:"Monday"}
                ]
              }
            ],
            answers: {11:"B",12:"C",13:"A",14:"B",15:"C",16:"F",17:"B",18:"E",19:"G",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Section 2. A man briefs a group on the final plans for their theatre tour of Munich, Germany."},
              {sp:"SPEAKER", t:"Confirms the flight to Munich is on Monday the 4th at 11:30, too early for an airport lunch - he suggests meeting at 10am for coffee, after having breakfast at home first."},
              {sp:"SPEAKER", t:"Says Claus Bauer, who works for a tour operator, will meet them at Munich airport and look after the group throughout their stay. Claus has already liaised with the theatres they'll visit and arranged for a National Theatre staff member to give them a tour one afternoon."},
              {sp:"SPEAKER", t:"Updates the hotel cost: the standard rate is \u20ac150/night for a double room; he'd hoped to negotiate \u20ac120 but managed to get it down to \u20ac110, which will be reflected in this week's final payment."},
              {sp:"SPEAKER", t:"Explains that Tuesday's planned theatre rehearsal visit fell through, so instead they'll take a coach trip to a mountain castle south of Munich. That evening they'll have dinner together - despite some preferring Italian, he's booked a Lebanese restaurant instead of a typical heavy-meat local restaurant, since Italian food is easy to get at home."},
              {sp:"SPEAKER", t:"Says on Wednesday afternoon, the director of that evening's play will talk to the group at the theatre about the production process, including casting and (since it's a modern play) working with the playwright."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 16 to 20."},
              {sp:"SPEAKER", t:"Gives details on each play to help with packing. Wednesday's play is a modern multimedia premiere (first performance) with striking lighting and an electronic soundtrack - a fairly dressy occasion, though the playwright is ill and won't attend."},
              {sp:"SPEAKER", t:"Thursday's play is a revival of a production first staged last year, originally commissioned to mark the centenary of a famous scientist born in that town."},
              {sp:"SPEAKER", t:"Friday's play is performed outdoors in a palace garden - a beautiful but windy setting, so warns the group to pack accordingly."},
              {sp:"SPEAKER", t:"Saturday involves a coach trip to a theatre in a nearby town for the opening of a drama festival, attended by the mayor and town officials, followed by a mayoral reception with a band playing traditional regional music."},
              {sp:"SPEAKER", t:"After a free day on Sunday, the final play on Monday is in the historic Old Town Hall (dating to the 14th century), marking 50 years on stage for the lead actor, performed in the very theatre where he made his professional debut. The group flies home the next day."},
              {sp:"ANNOUNCER", t:"That is the end of section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21–30",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21–25",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Scandinavian Studies",
                items: [
                  {n:21, q:"James chose to take Scandinavian Studies because when he was a child", opts:["he was often taken to Denmark.","his mother spoke to him in Danish.","a number of Danish people visited his family."]},
                  {n:22, q:"When he graduates, James would like to", opts:["take a postgraduate course.","work in the media.","become a translator."]},
                  {n:23, q:"Which course will end this term?", opts:["Swedish cinema","Danish television programmes","Scandinavian literature"]},
                  {n:24, q:"They agree that James's literature paper this term will be on", opts:["19th century playwrights.","the Icelandic sagas.","modern Scandinavian novels."]},
                  {n:25, q:"Beth recommends that James's paper should be", opts:["a historical overview of the genre.","an in-depth analysis of a single writer.","a study of the social background to the literature."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 26–30",
                inst: "Complete the flowchart below.<br>Choose the correct letter, <b>A–G</b>, next to Questions 26–30.",
                mapTitle: "How James will write his paper on the Vikings",
                mapNote: "<b>A.</b> bullet points<br><b>B.</b> film<br><b>C.</b> notes<br><b>D.</b> structure<br><b>E.</b> student paper<br><b>F.</b> textbook<br><b>G.</b> documentary",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:26, label:"He'll read a ___ and choose his topic"},
                  {n:27, label:"He'll borrow a ___ from Beth"},
                  {n:28, label:"He'll plan the ___ of the paper"},
                  {n:29, label:"He'll read source material and write ___"},
                  {n:30, label:"He'll write the paper using ___, then write it in full"}
                ]
              }
            ],
            answers: {21:"C",22:"B",23:"C",24:"A",25:"C",26:"E",27:"G",28:"D",29:"C",30:"A"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. James, a Scandinavian Studies student, has his first tutorial with his tutor Beth Cartwright."},
              {sp:"BETH", t:"Asks why James chose the course."},
              {sp:"JAMES", t:"Explains his mother is Danish but they always lived in England and rarely visited Denmark themselves - instead, her relatives and friends often visited them in England, which sparked his interest. He can speak Danish conversationally, though not very accurately."},
              {sp:"BETH", t:"Mentions the year abroad in year three, and asks about his plans after graduation, noting many students do a master's."},
              {sp:"JAMES", t:"Says he'd love to spend his year abroad in Iceland rather than the more obvious choice of Denmark. After graduating, he feels four years will be enough - he's interested in journalism and would rather write for magazines in Scandinavia than go into translation, which he finds less creative."},
              {sp:"BETH", t:"Asks about this term's courses."},
              {sp:"JAMES", t:"Says he's really enjoying the Swedish cinema course."},
              {sp:"BETH", t:"Confirms Swedish cinema continues next term, but the current Scandinavian literature course will be replaced by more specialised options; a course on Danish television will run the term after next."},
              {sp:"BETH", t:"Asks about James's literature paper, due in a few weeks."},
              {sp:"JAMES", t:"Suggests the Icelandic sagas as a first choice."},
              {sp:"BETH", t:"Advises against the sagas - too popular a topic, with limited library copies - and suggests modern novels or 19th-century playwrights instead."},
              {sp:"JAMES", t:"Says he's read/seen several plays in translation, so 19th-century playwrights sounds good - Beth agrees to set that as his topic."},
              {sp:"BETH", t:"Advises against focusing in depth on a single writer; instead, James should first understand the literature's social context - who it was written for, how it was published - which she finds more useful than a genre-history approach. James agrees."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 26 to 30."},
              {sp:"JAMES", t:"Asks for help with a separate Vikings paper due this week, as he's undecided between topics like settlement abroad, trade, or mythology, and feeling stuck."},
              {sp:"BETH", t:"Suggests reading a well-focused student paper from last year (kept in the library) to help choose a topic, since textbooks cover too many topics to narrow down easily."},
              {sp:"JAMES", t:"Asks whether to rewatch a recent Vikings film on DVD."},
              {sp:"BETH", t:"Says to ignore that film (too fantasy-based), but recommends a documentary recording she has, which raises interesting, focus-sharpening points."},
              {sp:"BETH", t:"Outlines the writing process: first sketch an outline of section headings, then research articles and books, taking notes organised under those headings, then convert the notes into short bullet points under each heading - making sure this skeleton flows well - before writing the full paper."},
              {sp:"ANNOUNCER", t:"That is the end of section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31–40",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31–40",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Conflict at work",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Conflict mostly consists of behaviour in the general category of", input:31, after:""},
                      {n:null, before:"Often a result of people wanting to prove their", input:32, after:""},
                      {n:null, before:"Also caused by differences in", input:33, after:"between people"},
                      {n:null, before:"'", input:34, mid:"' conflicts: people more concerned about own team than about company", input2:null, after:""},
                      {n:null, before:"Conflict-related stress can cause", input:35, after:"that may last for months"}
                    ]
                  },
                  {
                    heading: "Chief Executives (CEOs)",
                    items: [
                      {n:null, before:"Many have both", input:36, after:"and anxiety"},
                      {n:null, before:"May not like to have their decisions questioned", input:null, after:""},
                      {n:null, before:"There may be conflict between people who have different", input:37, after:""}
                    ]
                  },
                  {
                    heading: "Other managers",
                    items: [
                      {n:null, before:"A structure that is more", input:38, after:"may create a feeling of uncertainty about who staff should report to."}
                    ]
                  },
                  {
                    heading: "Minimising conflict",
                    items: [
                      {n:null, before:"Bosses need to try hard to gain", input:39, after:""},
                      {n:null, before:"Someone from outside the company may be given the role of", input:40, after:"in order to resolve conflicts."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"bullying",32:"superiority",33:"personality",34:"Structural",35:"absence",36:"confidence",37:"visions",38:"democratic",39:"respect",40:"mediator"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. A business studies lecturer discusses conflict in the workplace."},
              {sp:"SPEAKER", t:"Notes that while working conditions have improved greatly over time, workplace conflict remains common, and HR managers need to handle it. Defines conflict broadly - any behaviour a victim finds unacceptable, from minor arguments to physical violence - much of which falls under the term 'bullying' (one or more people behaving abusively toward someone in a weaker position)."},
              {sp:"SPEAKER", t:"Explains common causes: often someone needing to feel superior to avoid feeling low in a hierarchy; sometimes simple personality clashes (e.g. an optimist clashing with a habitually pessimistic colleague, though that doesn't excuse mistreatment); and 'structural' conflicts, where people prioritise their own team over the company as a whole (e.g. a sales team looking down on admin staff)."},
              {sp:"SPEAKER", t:"Describes the impact: conflict is highly stressful for victims, sometimes causing absence from work for months, and if unaddressed can spiral and even threaten the business itself."},
              {sp:"SPEAKER", t:"Discusses research on CEOs: many combine high confidence (belief in their own ability to achieve great things) with high anxiety (fear of missing targets), a combination that can make them react badly when their decisions are questioned - especially when colleagues, managers, and board members all have differing visions for the business and can't agree on strategy."},
              {sp:"SPEAKER", t:"Notes that while one might expect autocratic management (where the CEO simply gives orders) to cause more conflict, a more democratic structure can actually cause more conflict, since uncertainty about reporting lines can create conflicting demands."},
              {sp:"SPEAKER", t:"On minimising conflict: the ideal is prevention - good managers at all levels work to earn the respect of those they work with, treating them politely as equals with different roles. When conflict does escalate, HR often gets involved, but if one party sees HR as simply representing the CEO's interests, an external mediator can help by talking to both sides, uncovering the truth, and giving feedback both sides will trust because of its independence."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 12 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2012%20test%203%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1–10",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "PUBLIC LIBRARY",
                example: {label: "(Example) The library re-opened last", value: "month"},
                groups: [
                  {
                    heading: "The library now has",
                    items: [
                      {n:null, before:"a seating area with magazines", input:null, after:""},
                      {n:null, before:"an expanded section for books on", input:1, after:""},
                      {n:null, before:"a new section on local", input:2, after:""},
                      {n:null, before:"a community room for meetings (also possible to", input:3, after:"there)"},
                      {n:null, before:"a new section of books for", input:4, after:""}
                    ]
                  },
                  {
                    heading: "For younger children",
                    items: [
                      {n:null, before:"the next Science Club meeting: experiments using things from your", input:5, after:""},
                      {n:null, before:"Reading Challenge: read six books during the holidays", input:null, after:""}
                    ]
                  },
                  {
                    heading: "For adults",
                    items: [
                      {n:null, before:"this Friday: a local author talks about a novel based on a real", input:6, after:""},
                      {n:null, before:"IT support is available on Tuesdays - no", input:7, after:"is necessary"},
                      {n:null, before:"free check of blood", input:8, after:"and cholesterol levels (over 60s only)"}
                    ]
                  },
                  {
                    heading: "Other information",
                    items: [
                      {n:null, before:"the library shop sells wall-charts, cards and", input:9, after:""},
                      {n:null, before:"evenings and weekends: free", input:10, after:"is available"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"travel",2:"history",3:"study",4:"teenagers",5:"kitchen",6:"crime",7:"appointment",8:"sugar",9:"stamps",10:"parking"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. Paul phones his friend Susie, who recently started working at their local public library, which reopened a month ago."},
              {sp:"PAUL", t:"Says he and his wife Carol have been meaning to join."},
              {sp:"SUSIE", t:"Says membership is free and the new library has much more than books - including a comfortable seating area with magazines, where some people spend whole mornings."},
              {sp:"PAUL", t:"Mentions they're hoping to travel to Greece this summer."},
              {sp:"SUSIE", t:"Says the library now has a much larger travel section, and likely something on Greece specifically."},
              {sp:"PAUL", t:"Says Carol (a teacher) needs material for a history project on the town 100 years ago."},
              {sp:"SUSIE", t:"Says there's a new section on local and regional history - useful since this kind of detail isn't always online. She also mentions the old separate reference room has been merged into the main library, but there's now a 'community room' that can be hired for meetings or used for quiet study when free."},
              {sp:"SUSIE", t:"Mentions a new fiction section specifically for teenagers, though notes Paul's children might be a bit young for it."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 5 to 10."},
              {sp:"SUSIE", t:"Describes activities for younger children: a Science Club whose next meeting involves kitchen-cupboard experiments (sugar, flour, etc.), and a 'Reading Challenge' (read six books over the holidays for a certificate) starting after term ends."},
              {sp:"SUSIE", t:"For adults: this Friday, local author Tanya Streep discusses her new novel 'Catch the Mouse', based on a real crime that happened locally years ago (Paul can't attend Friday but will look out for the book)."},
              {sp:"SUSIE", t:"Mentions free drop-in IT support on Tuesday mornings (popular with older people learning computers, no appointment needed) - Paul thinks his mother might be interested."},
              {sp:"SUSIE", t:"Also mentions a free health check from the hospital - blood sugar and cholesterol levels - but only for over-60s, so Paul's mother (not Paul) would qualify."},
              {sp:"SUSIE", t:"Mentions the small library shop sells wall charts, greeting cards, and stamps (handy for posting cards immediately). Confirms parking is free in the evenings and at weekends, which suits Paul since he'll be driving."},
              {sp:"ANNOUNCER", t:"That is the end of section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 11 and 12",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>11–12</b>&nbsp; Which TWO age groups are taking increasing numbers of holidays with BC Travel?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"16-30 years"},
                  {letter:"B", text:"31-42 years"},
                  {letter:"C", text:"43-54 years"},
                  {letter:"D", text:"55-64 years"},
                  {letter:"E", text:"over 65 years"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>13–14</b>&nbsp; Which TWO are the main reasons given for the popularity of activity holidays?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"Clients make new friends."},
                  {letter:"B", text:"Clients learn a useful skill."},
                  {letter:"C", text:"Clients learn about a different culture."},
                  {letter:"D", text:"Clients are excited by the risk involved."},
                  {letter:"E", text:"Clients find them good value for money."}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 15–17",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "",
                items: [
                  {n:15, q:"How does BC Travel plan to expand the painting holidays?", opts:["by adding to the number of locations","by increasing the range of levels","by employing more teachers"]},
                  {n:16, q:"Why are BC Travel's cooking holidays unusual?", opts:["They only use organic foods.","They have an international focus.","They mainly involve vegetarian dishes."]},
                  {n:17, q:"What does the speaker say about the photography holidays?", opts:["Clients receive individual tuition.","The tutors are also trained guides.","Advice is given on selling photographs."]}
                ]
              },
              {
                type: "table",
                qlabel: "Questions 18–20",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Fitness Holidays",
                headers: ["Location","Main focus","Other comments"],
                rows: [
                  {
                    cells: [
                      [{text:"Ireland and Italy"}],
                      [{text:"general fitness"}],
                      [{text:"personally designed programme; also reduces"},{input:18}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Greece"}],
                      [{input:19},{text:"control"}],
                      [{text:"includes exercise on the beach"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Morocco"}],
                      [{text:"mountain biking"}],
                      [{text:"wide variety of levels; one holiday specially designed for"},{input:20}]
                    ]
                  }
                ]
              }
            ],
            answers: {11:"D",12:"E",13:"A",14:"C",15:"C",16:"B",17:"A",18:"stress",19:"weight",20:"families"},
            multiGroups: [[11,12],[13,14]],
            script: [
              {sp:"ANNOUNCER", t:"Section 2. A trainer at BC Travel briefs new employees on the company's specialised holidays."},
              {sp:"SPEAKER", t:"Reviews market trends by age group: the over-65s market is steadily growing; the 31-42 group books the fewest holidays with no sign of change; the 16-30 group is still the biggest market overall but has seen the sharpest recent decline; the 55-64 group shows noticeable growth; and the 43-54 group is steady but hasn't grown as expected."},
              {sp:"SPEAKER", t:"Describes the rising popularity of 'activity holidays' across most age groups - distinct from high-risk 'adventure holidays' like white-water rafting. Activity holidays (often centred on sports, art, or music) aren't necessarily cheaper, and usually take place away from main tourist centres, giving clients insight into local people and customs - cited as one of the most positive features. While clients also value developing a new skill, the bigger draw, clients say, is forming lasting friendships with like-minded people."},
              {sp:"SPEAKER", t:"Gives examples: painting holidays run at four centres in France and Italy, popular with all skill levels, with five additional artist-tutors joining this year to allow more classes per centre. Cooking holidays are unusual because, unlike competitors who focus on the host country's cuisine, BC Travel covers dishes from many different countries - alongside the now-standard use of organic ingredients and some meat-free recipes."},
              {sp:"SPEAKER", t:"Describes photography holidays across countries from Iceland to Vietnam, with small groups (max 8) allowing one-on-one tuition, guided excursions, and a final exhibition where clients see each other's work and get tutor feedback."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the training session, you have some time to look at questions 18 to 20."},
              {sp:"SPEAKER", t:"Describes fitness holidays: in Ireland and Italy, one-week general fitness courses for all ages/levels start with a trainer consultation to build a personalised plan, and clients often find they shed accumulated stress as well as improving fitness."},
              {sp:"SPEAKER", t:"In Greece, a two-week weight-control holiday includes a personalised diet plan, with the popular twist that exercise classes are held on the beach rather than in a gym."},
              {sp:"SPEAKER", t:"In Morocco, a popular mountain-biking holiday provides bikes and routes suited to different ability levels, including one version specially designed for families."},
              {sp:"ANNOUNCER", t:"That is the end of section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21–30",
            blocks: [
              {
                type: "flowchart",
                qlabel: "Questions 21–26",
                inst: "Complete the flowchart below.<br>Choose the correct letter, <b>A–H</b>, next to Questions 21–26.",
                title: "STAGES IN DOING A TOURISM CASE STUDY",
                mapNote: "<b>A.</b> patterns&nbsp;&nbsp; <b>B.</b> names&nbsp;&nbsp; <b>C.</b> sources&nbsp;&nbsp; <b>D.</b> questions&nbsp;&nbsp; <b>E.</b> employees&nbsp;&nbsp; <b>F.</b> solutions&nbsp;&nbsp; <b>G.</b> headings&nbsp;&nbsp; <b>H.</b> officials",
                options: ["A","B","C","D","E","F","G","H"],
                boxes: [
                  {
                    heading: "RESEARCH",
                    items: [
                      {parts: [{text:"Locate and read relevant articles, noting key information and also"},{input:21},{text:"."}]},
                      {parts: [{text:"Identify a problem or need"}]},
                      {parts: [{text:"Select interviewees - these may be site"},{input:22},{text:", visitors or city"},{input:23},{text:"."}]},
                      {parts: [{text:"Prepare and carry out interviews. If possible, collect statistics."}]},
                      {parts: [{text:"Check whether"},{input:24},{text:"of interviewees can be used"}]}
                    ]
                  },
                  {
                    heading: "ANALYSIS",
                    items: [
                      {parts: [{text:"Select relevant information and try to identify"},{input:25}]},
                      {parts: [{text:"Decide on the best form of visuals"}]}
                    ]
                  },
                  {
                    heading: "WRITING THE CASE STUDY",
                    items: [
                      {parts: [{text:"Give some background before writing the main sections"}]},
                      {parts: [{text:"Do NOT end with"},{input:26}]}
                    ]
                  }
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 27–30",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "The Horton Castle site",
                items: [
                  {n:27, q:"Natalie and Dave agree one reason why so few people visit Horton Castle is that", opts:["the publicity is poor.","it is difficult to get to.","there is little there of interest."]},
                  {n:28, q:"Natalie and Dave agree that the greatest problem with a visitor centre could be", opts:["covering the investment costs.","finding a big enough space for it.","dealing with planning restrictions."]},
                  {n:29, q:"What does Dave say about conditions in the town of Horton?", opts:["There is a lot of unemployment.","There are few people of working age.","There are opportunities for skilled workers."]},
                  {n:30, q:"According to Natalie, one way to prevent damage to the castle site would be to", opts:["insist visitors have a guide.","make visitors keep to the paths.","limit the number of visitors per day."]}
                ]
              }
            ],
            answers: {21:"C",22:"E",23:"H",24:"B",25:"A",26:"F",27:"A",28:"C",29:"B",30:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. Two tourism students, Natalie and Dave, discuss the case study they need to write about the Horton Castle site."},
              {sp:"NATALIE", t:"Admits she missed the lecture on how to write a case study, though she's done some background reading and kept track of her sources."},
              {sp:"DAVE", t:"Explains the process: after reviewing what they've each read, they need to identify a specific problem or need at the site, then decide who to interview - likely site employees and visitors (requiring a site visit), but possibly also city officials involved in tourism, who could be contacted in the city itself."},
              {sp:"DAVE", t:"Suggests asking interviewees for any numerical data to support their findings, and notes Dr Baker's instruction to check with interviewees whether they can be named in the case study or must remain anonymous (Natalie hadn't thought of this)."},
              {sp:"DAVE", t:"Explains the analysis stage: combine all gathered information, select what's relevant to the problem, and look for patterns or trends rather than getting lost in details - then decide on the clearest way to present the data visually (graphs, tables, charts)."},
              {sp:"DAVE", t:"Describes the write-up structure as fairly standard - background then main sections - but notes a key difference from normal reports: instead of ending with proposed solutions, a case study ends with a question (or questions) for readers to consider, leaving them to decide what should be done."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 27 to 30."},
              {sp:"NATALIE", t:"States their case study problem: why so few tourists visit Horton Castle. One online report blamed poor transport access."},
              {sp:"DAVE", t:"Says that report is 10 years old, from when the road was genuinely bad - it's since been improved. He thinks the site itself offers plenty for a great day out, but the castle's website is dry and boring, which might be the real problem (poor publicity)."},
              {sp:"DAVE", t:"Mentions a suggestion that the castle needs a visitor centre, and they discuss researching this - who would use it, and what visitor categories exist (school groups, retirees, etc.) - though staff input would be needed for the latter."},
              {sp:"DAVE", t:"Raises potential problems with a visitor centre: high setup cost (though potentially a good investment), and likely difficulty getting special planning permission since it's a historic site - especially as the only feasible location is right at the entrance, in front of the castle itself."},
              {sp:"DAVE", t:"Notes that a visitor centre could benefit the town of Horton, currently almost a 'ghost town' since young people with skills or qualifications leave for city jobs, leaving mostly children and retirees."},
              {sp:"NATALIE", t:"Raises another angle: the environmental impact of tourists on the site. Currently visitors can wander freely, but if numbers increase, restrictions like staying on marked paths (with guides/wardens enforcing this) might be needed."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31–40",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31–40",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "The effects of environmental change on birds",
                groups: [
                  {
                    heading: "Mercury (Hg)",
                    items: [
                      {n:null, before:"Highly toxic", input:null, after:""},
                      {n:null, before:"Released into the atmosphere from coal", input:null, after:""},
                      {n:null, before:"In water it may be consumed by fish", input:null, after:""},
                      {n:null, before:"It has also recently been found to affect birds which feed on", input:31, after:""}
                    ]
                  },
                  {
                    heading: "Research on effects of mercury on birds",
                    items: [
                      {n:null, before:"Claire Varian-Ramos is investigating:", input:null, after:""},
                      {n:null, before:"the effects on birds'", input:32, after:"or mental processes, e.g. memory"},
                      {n:null, before:"the effects on bird song (usually learned from a bird's", input:33, after:")"}
                    ]
                  },
                  {
                    heading: "Findings",
                    items: [
                      {n:null, before:"songs learned by birds exposed to mercury are less", input:34, after:""},
                      {n:null, before:"this may have a negative effect on birds'", input:35, after:""}
                    ]
                  },
                  {
                    heading: "Lab-based studies",
                    items: [
                      {n:null, before:"allow more", input:36, after:"for the experimenter"}
                    ]
                  },
                  {
                    heading: "Implications for humans",
                    items: [
                      {n:null, before:"Migrating birds such as", input:37, after:"containing mercury may be eaten by humans"},
                      {n:null, before:"Mercury also causes problems in learning", input:38, after:""},
                      {n:null, before:"Mercury in a mother's body from", input:39, after:"may affect the unborn child"},
                      {n:null, before:"New regulations for mercury emissions will affect everyone's energy", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"insects",32:"brain",33:"father",34:"complex",35:"reproduction",36:"control",37:"ducks",38:"language",39:"food",40:"costs"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. A lecture on how mercury contamination affects birds, and the implications for humans."},
              {sp:"SPEAKER", t:"Introduces mercury (Hg) as a highly toxic element, once common in thermometers but now rarely used domestically. Its environmental levels are rising mainly because coal-burning power plants release it into the atmosphere; it settles into lakes and rivers, gets absorbed by fish (where it stays in their bodies), and enters the food chain. Birds that eat fish have long been known to be affected - but it's only recently been discovered that insect-eating birds can be affected too."},
              {sp:"SPEAKER", t:"Introduces researcher Claire Varian-Ramos, who studies subtle sub-lethal effects of mercury on birds - on their brains and mental processes like memory, and especially on bird song. Explains that young birds typically learn their song specifically from their father during a key developmental stage."},
              {sp:"SPEAKER", t:"Reports her finding: young male birds exposed to mercury-contaminated food produce less complex songs than unexposed birds. Even low-level exposure could make these males less attractive to females, reducing their reproductive success in the wild."},
              {sp:"SPEAKER", t:"Describes her mixed research approach - lab-based studies (giving experimenters more control and confidence in results, without needing to locate wild birds) combined with field studies in natural settings."},
              {sp:"SPEAKER", t:"Discusses human implications: migratory birds like ducks can carry mercury long distances - contaminated ducks were found shot by hunters over 1,000km from where they'd fed, raising concerns for human consumption. Mercury also causes language-acquisition developmental delays in humans, in a process strikingly similar (even at the gene level) to the bird-song effect. Mercury from a pregnant mother's food can substantially affect the unborn child."},
              {sp:"SPEAKER", t:"Concludes that new mercury-emission regulations for power plants will cost billions and raise everyone's energy costs - a tradeoff between economic and environmental wellbeing that deserves careful consideration, beyond simple cost arguments."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 12 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2012%20test%204%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1–10",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "Cycle tour leader: Applicant enquiry",
                example: {label: "(Example) Name: Margaret", value: "Smith"},
                groups: [
                  {
                    heading: "About the applicant",
                    items: [
                      {n:null, before:"wants a", input:1, after:"job"},
                      {n:null, before:"will soon start work as a", input:2, after:""},
                      {n:null, before:"has led cycle trips in", input:3, after:""},
                      {n:null, before:"interested in being a leader of a cycling trip for families", input:null, after:""},
                      {n:null, before:"is currently doing voluntary work with members of a", input:4, after:"club"},
                      {n:null, before:"available for five months from the 1st of", input:5, after:""},
                      {n:null, before:"can't eat", input:6, after:""}
                    ]
                  },
                  {
                    heading: "Contact details",
                    items: [
                      {n:null, before:"address: 27", input:7, after:"Place, Dumfries"},
                      {n:null, before:"postcode:", input:8, after:""}
                    ]
                  },
                  {
                    heading: "Interview",
                    items: [
                      {n:null, before:"interview at 2.30 pm on", input:9, after:""},
                      {n:null, before:"will plan a short", input:10, after:"about being a tour guide"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"temporary",2:"doctor",3:"Africa",4:"youth",5:"May",6:"cheese",7:"Arbuthnot",8:"DG74PH",9:"Tuesday",10:"talk"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. Margaret Smith phones Pembroke Cycling Holidays, where Bob handles enquiries, about a job leading cycle tours."},
              {sp:"BOB", t:"Asks if she wants permanent work."},
              {sp:"MARGARET", t:"Says she wants temporary work only, since she has a permanent job starting in a few months - she recently retrained from being a lawyer to becoming a doctor and has just finished her training."},
              {sp:"BOB", t:"Asks about her tour-leading experience."},
              {sp:"MARGARET", t:"Says she's led several bike tours in Africa, and applied here after a planned India trip she was due to lead next month was cancelled."},
              {sp:"BOB", t:"Explains tours usually have 2-3 leaders, and mentions a popular upcoming family cycling holiday in Spain that needs an extra leader, including several teenagers in the group."},
              {sp:"MARGARET", t:"Says a family trip would suit her well - she enjoys working with children and feels she needs more experience before tackling a tougher trip. She's done relevant work with teenagers: she currently volunteers at a youth club helping improve cycling skills, and previously taught beginners at a cycling club."},
              {sp:"BOB", t:"Says the upcoming trip is a two-week (fortnight) commitment, with possible further tours afterward, and asks if that fits her availability."},
              {sp:"MARGARET", t:"Confirms she's free for five months - available from 1st May until late September, since her new job starts on 2nd October."},
              {sp:"BOB", t:"Asks about dietary needs, since the company is careful about food allergies and vegetarians in the group."},
              {sp:"MARGARET", t:"Mentions she's allergic to cheese - Bob says that's fine with enough advance notice."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10."},
              {sp:"MARGARET", t:"Offers to fill in an application form and gives her address: 27 Arbuthnot Place (spelled out), Dumfries, postcode DG7 4PH (confirming the 'P' is for 'papa')."},
              {sp:"BOB", t:"Asks her to return the form by Friday so they can interview her the following Tuesday at 2:30pm."},
              {sp:"MARGARET", t:"Agrees, noting she'll drive over given the distance, and asks what to bring."},
              {sp:"BOB", t:"Asks her to bring any relevant certificates (cycling, first aid, etc.), and to prepare a short 10-minute talk (notes only, no slides needed) about her experience as a tour guide for the interview."},
              {sp:"ANNOUNCER", t:"That is the end of section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11–14",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Visiting the Sheepmarket area",
                items: [
                  {n:11, q:"Which is the most rapidly-growing group of residents in the Sheepmarket area?", opts:["young professional people","students from the university","employees in the local market"]},
                  {n:12, q:"The speaker recommends the side streets in the Sheepmarket for their", opts:["international restaurants.","historical buildings.","arts and crafts."]},
                  {n:13, q:"Clothes designed by entrants for the Young Fashion competition must", opts:["be modelled by the designers themselves.","be inspired by aspects of contemporary culture.","be made from locally produced materials."]},
                  {n:14, q:"Car parking is free in some car parks if you", opts:["stay for less than an hour.","buy something in the shops.","park in the evenings or at weekends."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15–20",
                inst: "Label the map below.<br>Choose the correct letter, <b>A–I</b>, next to Questions 15–20.",
                mapTitle: "Art and History in the Sheepmarket",
                mapImage: "data:image/png;base64,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",
                options: ["A","B","C","D","E","F","G","H","I"],
                items: [
                  {n:15, label:"The Reynolds House"},
                  {n:16, label:"The Thumb"},
                  {n:17, label:"The Museum"},
                  {n:18, label:"The Contemporary Art Gallery"},
                  {n:19, label:"The Warner Gallery"},
                  {n:20, label:"Nucleus"}
                ]
              }
            ],
            answers: {11:"A",12:"C",13:"B",14:"B",15:"H",16:"A",17:"F",18:"G",19:"I",20:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Section 2. A podcast about the Sheepmarket, a historic redeveloped district in a New Zealand city."},
              {sp:"SPEAKER", t:"Explains the area was once a sheep market and is now a vibrant district with one of the city's fastest-growing communities - while university students have always come for the nightlife, it's now young professionals in fashion and design who are buying up new apartments built where market workers' old houses once stood."},
              {sp:"SPEAKER", t:"Describes the narrow old side streets as great for affordable arts, crafts, jewellery, ceramics, and local produce, plus plenty of pavement cafes. The oldest buildings, including the city's first department store (built in the 1880s, still open), are on the main streets."},
              {sp:"SPEAKER", t:"Mentions the area is a fashion hub with a Young Fashion competition for local young designers - this year's brief is to design an outfit inspired by the music and technology of their everyday lives, using natural and man-made fibres, judged by experts with winning entries shown at a gala."},
              {sp:"SPEAKER", t:"Covers parking: roadside pay-and-display is fine for an hour or two, but for a full day the four underground car parks are inexpensive - and free if you can show a receipt from a local shop. After 6pm, most car parks charge a reasonable flat rate."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the podcast, you have some time to look at questions 15 to 20."},
              {sp:"SPEAKER", t:"Introduces a map of the area's art and history highlights, with most visitors starting from Crawley Road at the bottom."},
              {sp:"SPEAKER", t:"The Reynolds House, one of the city's oldest public buildings, is on the north side of Crawley Road, next to the footpath leading into the public gardens."},
              {sp:"SPEAKER", t:"The Thumb, a roughly 10-metre sculpture, is on Hill Road, directly across from the Bank."},
              {sp:"SPEAKER", t:"The Museum, known for its New Zealand landscape collection, is on the east side of City Road, on the opposite side from the public gardens, directly facing the Hill Road junction."},
              {sp:"SPEAKER", t:"The Contemporary Art Gallery is on a short dead-end road off Station Square, close to the public gardens - the road leads only to the gallery."},
              {sp:"SPEAKER", t:"The Warner Gallery, specialising in 19th-century art (free entry, weekdays 9-5), is on City Road near its junction with Crawley Road, on the same side as the public gardens."},
              {sp:"SPEAKER", t:"For Nucleus (a shop for buying quality artwork), the speaker gives directions: from Crawley Road, go up through Station Square and east along Hill Road until a small winding side road appears; follow it up and Nucleus is on the right - if you reach City Road, you've gone too far."},
              {sp:"ANNOUNCER", t:"That is the end of section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21–30",
            blocks: [
              {
                type: "table",
                qlabel: "Questions 21–24",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Presentation on film adaptations of Shakespeare's plays",
                headers: ["Stages of presentation","Work still to be done"],
                rows: [
                  {
                    cells: [
                      [{text:"Introduce Giannetti's book containing a"},{input:21},{text:"of adaptations"}],
                      [{text:"Organise notes"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Ask class to suggest the"},{input:22},{text:"adaptations"}],
                      [{text:"No further work needed"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Present Rachel Malchow's ideas"}],
                      [{text:"Prepare some"},{input:23}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Discuss relationship between adaptations and"},{input:24},{text:"at the time of making the film"}],
                      [{text:"No further work needed"}]
                    ]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25–30",
                inst: "What do the speakers say about each of the following films?<br>Choose the correct letter, <b>A–G</b>, next to Questions 25–30.",
                mapTitle: "Comments",
                mapNote: "<b>A.</b> clearly shows the historical period<br><b>B.</b> contains only parts of the play<br><b>C.</b> is too similar to another kind of film<br><b>D.</b> turned out to be unpopular with audiences<br><b>E.</b> presents the play in a different period from the original<br><b>F.</b> sets the original in a different country<br><b>G.</b> incorporates a variety of art forms",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:25, label:"\"Ran\""},
                  {n:26, label:"\"Much Ado About Nothing\""},
                  {n:27, label:"\"Romeo & Juliet\""},
                  {n:28, label:"\"Hamlet\""},
                  {n:29, label:"\"Prospero's Books\""},
                  {n:30, label:"\"Looking for Richard\""}
                ]
              }
            ],
            answers: {21:"classification",22:"worst",23:"slides",24:"issues",25:"F",26:"A",27:"E",28:"C",29:"G",30:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. Two film studies students, Katie and Joe, discuss Katie's upcoming presentation on film adaptations of Shakespeare's plays."},
              {sp:"KATIE", t:"Wants feedback on her presentation plan. She'll start with film scholar Giannetti's straightforward classification of adaptations based on how faithful they are to the source plays/novels - she's made notes already and just needs to organise them."},
              {sp:"KATIE", t:"Plans next to ask the class for the worst Shakespeare adaptations they've seen (more fun than favourites) - no further prep needed for this part."},
              {sp:"KATIE", t:"Wants to present Rachel Malchow's ideas on film adaptation, originally planning to show film clips."},
              {sp:"JOE", t:"Questions whether there's time to find and prepare all those clips."},
              {sp:"KATIE", t:"Agrees, and decides to prepare slides instead, relating various films to Malchow's ideas to spark discussion."},
              {sp:"KATIE", t:"Also wants to discuss how plays get chosen for adaptation based on the issues of the time the film is made (e.g. patriotism, government) - she has ideas ready, no further work needed."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 25 to 30."},
              {sp:"KATIE", t:"Plans to finish with several adaptations illustrating different approaches. 'Ran' (based on King Lear) is a loose adaptation moving the story to 16th-century Japan instead of Britain - even changing the king's daughters to sons, reflecting Japanese succession customs of the time."},
              {sp:"JOE", t:"Praises the 1993 'Much Ado About Nothing' film, calling it one of the best Shakespeare adaptations - filming it in Italy (the play's setting) vividly conveys the historical period."},
              {sp:"KATIE", t:"Discusses the 1996 'Romeo & Juliet', which sets the story in the present day, turning the feuding families into rival business empires - while keeping the original Shakespearean dialogue, which both found surprisingly easy to get used to."},
              {sp:"KATIE", t:"Picks the 1996 'Hamlet' as a mainstream Hollywood example - it includes the full text but feels like an action movie, full of special effects but lacking a unifying interpretation (Joe: 'all show and no substance')."},
              {sp:"KATIE", t:"Mentions 'Prospero's Books' (based on The Tempest) as stylistically innovative, blending dance, singing, animation, and live actors."},
              {sp:"KATIE", t:"Finally, 'Looking for Richard' - a documentary blended with a few scenes from Richard III, exploring how modern audiences relate to Shakespeare, with the play itself as just a starting point - the planned ending of her presentation."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31–40",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31–40",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Noise in Cities",
                groups: [
                  {
                    heading: "Past research focused on noise level (measured in decibels) and people's responses.",
                    items: []
                  },
                  {
                    heading: "Noise 'maps'",
                    items: [
                      {n:null, before:"show that the highest noise levels are usually found on roads", input:null, after:""},
                      {n:null, before:"do not show other sources of noise, e.g. when windows are open or people's neighbours are in their", input:31, after:""},
                      {n:null, before:"ignore variations in people's perceptions of noise", input:null, after:""},
                      {n:null, before:"have made people realize that the noise is a", input:32, after:"issue that must be dealt with"}
                    ]
                  },
                  {
                    heading: "Problems caused by noise",
                    items: [
                      {n:null, before:"sleep disturbance", input:null, after:""},
                      {n:null, before:"increase in amount of stress", input:null, after:""},
                      {n:null, before:"effect on the", input:33, after:"of schoolchildren"}
                    ]
                  },
                  {
                    heading: "Different types of noise",
                    items: [
                      {n:null, before:"Some noises can be considered pleasant e.g. the sound of a", input:34, after:"in a town"},
                      {n:null, before:"To investigate this, researchers may use methods from", input:35, after:"sciences e.g. questionnaires"}
                    ]
                  },
                  {
                    heading: "What people want",
                    items: [
                      {n:null, before:"Plenty of activity in urban environments which are", input:36, after:", but also allow people to relax"},
                      {n:null, before:"But architects and town planners", input:null, after:""},
                      {n:null, before:"do not get much", input:37, after:"in acoustics"},
                      {n:null, before:"regard sound as the responsibility of engineers", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Understanding sound as an art form",
                    items: [
                      {n:null, before:"We need to know", input:null, after:""},
                      {n:null, before:"how sound relates to", input:38, after:""},
                      {n:null, before:"what can be learnt from psychology about the effects of sound", input:null, after:""},
                      {n:null, before:"whether physics can help us understand the", input:39, after:"of sound"}
                    ]
                  },
                  {
                    heading: "Virtual reality programs",
                    items: [
                      {n:null, before:"advantage: predict the effect of buildings", input:null, after:""},
                      {n:null, before:"current disadvantage: they are", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"gardens",32:"political",33:"work",34:"fountain",35:"social",36:"lively",37:"training",38:"culture",39:"nature",40:"silent"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. A lecture by an acoustic engineer on the science of noise in cities."},
              {sp:"SPEAKER", t:"Explains traditional urban acoustics research: measuring sound levels in decibels and asking people when noise becomes annoying, producing 'noise maps'. These mainly confirm that roads have the highest noise levels, but miss a lot - such as noise from neighbours' open windows or gardens (significant in summer, with no databases on it), and they ignore that people perceive noise differently. Despite being crude, these maps have usefully raised awareness that noise is a political issue requiring rules and regulations."},
              {sp:"SPEAKER", t:"Lists noise-related problems: interrupted sleep for city dwellers (given 24-hour activity), increased stress (via physical changes in blood composition), and effects on schoolchildren's work if they lack a quiet place to study."},
              {sp:"SPEAKER", t:"Points out a flaw in decibel measurement: it doesn't distinguish pleasant sounds (like a fountain in a town square) that score high in decibels but aren't unwanted. To understand this, researchers increasingly use social science methods like questionnaires to study emotional responses to sound."},
              {sp:"SPEAKER", t:"Describes seemingly contradictory findings on what people want from urban soundscapes: cities need to feel lively and active (e.g. footsteps, coffee machines) yet not so intrusive that people can't relax."},
              {sp:"SPEAKER", t:"Identifies a major obstacle: architects and town planners receive very little training in acoustics and tend to treat sound as something to minimise, or purely an engineering concern (like drainage) - rather than an opportunity to enhance urban living, ideally treating sound as an art form."},
              {sp:"SPEAKER", t:"Argues that achieving this requires understanding the relationship between sound and culture, insights from psychology on how sound affects thoughts, feelings, and social relationships, and insights from physics on the fundamental nature of sound."},
              {sp:"SPEAKER", t:"Notes that architects already use virtual reality to preview building designs, but current VR programs are silent - future versions could incorporate realistic soundscapes, letting designers explore how a space will sound before it's built, making future cities pleasant to both eyes and ears."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      }
    }
  }
});
