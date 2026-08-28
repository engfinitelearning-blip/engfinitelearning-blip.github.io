// EngFinite Learning — Listening Test Data (CAM14)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam14: {
    tests: {
      1: {
        title: "Cambridge IELTS 14 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2014%20test%201%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                type: "form",
                qlabel: "Questions 1\u201310",
                inst: "Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "CRIME REPORT FORM",
                subtitle: "Type of crime: theft",
                example: {label: "Name", value: "Louise <i>Taylor</i>"},
                groups: [
                  {
                    heading: "Personal information",
                    rows: [
                      {label: "Nationality", parts: [{input:1}]},
                      {label: "Date of birth", parts: [{text:"14 December 1977"}]},
                      {label: "Occupation", parts: [{text:"interior designer"}]},
                      {label: "Reason for visit", parts: [{text:"business (to buy antique"},{input:2},{text:")"}]},
                      {label: "Length of stay", parts: [{text:"two months"}]},
                      {label: "Current address", parts: [{input:3},{text:"Apartments (No 15)"}]}
                    ]
                  },
                  {
                    heading: "Details of theft",
                    rows: [
                      {label: "Items stolen", parts: [{text:"\u2013 a wallet containing approximately £"},{input:4}]},
                      {label: "", parts: [{text:"\u2013 a"},{input:5}]},
                      {label: "Date of theft", parts: [{input:6}]}
                    ]
                  },
                  {
                    heading: "Possible time and place of theft",
                    rows: [
                      {label: "Location", parts: [{text:"outside the"},{input:7},{text:"at about 4 pm"}]},
                      {label: "Details of suspect", parts: [{text:"\u2013 some boys asked for the"},{input:8},{text:"then ran off"}]},
                      {label: "", parts: [{text:"\u2013 one had a T-shirt with a picture of a tiger"}]},
                      {label: "", parts: [{text:"\u2013 he was about 12, slim build with"},{input:9},{text:"hair"}]}
                    ]
                  },
                  {
                    heading: "Crime reference number allocated",
                    rows: [
                      {label: "Crime reference number", parts: [{input:10}]}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Canadian",2:"furniture",3:"Park",4:"250",5:"phone",6:"10 September",7:"museum",8:"time",9:"blonde",10:"8795482361"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a woman, Louise Taylor, reporting a theft to a police officer; the example (her surname, Taylor) has already been filled in before the recording proper begins."},
              {sp:"OFFICER", t:"Takes her name, then asks if she's a UK resident."},
              {sp:"LOUISE", t:"Explains she's Canadian, though her mother was British; gives her date of birth as 14 December 1977, and explains she's visiting on business as an interior designer, buying antique furniture, for a two-month trip ending the following week."},
              {sp:"OFFICER", t:"Asks where she's currently staying."},
              {sp:"LOUISE", t:"Explains she's now at Park Apartments on King Street, apartment 15, having moved from the nearby Riverside Apartments once her six-week booking there ended."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 4 to 10 before the conversation continues."},
              {sp:"OFFICER", t:"Asks about the theft itself, confirming she was carrying the bag when it happened."},
              {sp:"LOUISE", t:"Explains she had her backpack on the whole time, but discovered her wallet missing after visiting a supermarket; explains she keeps credit cards and her passport separately, but the wallet held around £250 in cash, out of £300 she'd withdrawn the day before minus some shopping; later realised her week-old phone was also missing, though her rental car keys were untouched."},
              {sp:"OFFICER", t:"Confirms the theft happened the day before, 10 September, and asks if she has any idea where or when it occurred."},
              {sp:"LOUISE", t:"Explains the backpack had been on her back the whole afternoon since leaving the apartment after lunch, and describes meeting a friend and spending time at a museum; recalls that as they left the museum around 4pm, a group of young boys crowded around asking what time it was, then suddenly ran off."},
              {sp:"OFFICER", t:"Asks for a description of the boys."},
              {sp:"LOUISE", t:"Recalls the boy who did most of the talking wore a T-shirt with a tiger picture, was around 12 years old, thin, and blonde-haired, unlike the others who were dark-haired; couldn't recall further details about the rest of the group."},
              {sp:"OFFICER", t:"Provides a 10-digit crime reference number, 8795482361, for her insurance company."},
              {sp:"ANNOUNCER", t:"That is the end of Section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 11 and 12",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO pieces of advice for the first week of an apprenticeship does the manager give?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"get to know colleagues"},
                  {letter:"B", text:"learn from any mistakes"},
                  {letter:"C", text:"ask lots of questions"},
                  {letter:"D", text:"react positively to feedback"},
                  {letter:"E", text:"enjoy new challenges"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things does the manager say mentors can help with?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"confidence-building"},
                  {letter:"B", text:"making career plans"},
                  {letter:"C", text:"completing difficult tasks"},
                  {letter:"D", text:"making a weekly timetable"},
                  {letter:"E", text:"reviewing progress"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15\u201320",
                inst: "What does the manager say about each of the following aspects of the company policy for apprentices?<br>Choose the correct letter, <b>A\u2013C</b>, next to Questions 15\u201320.",
                mapTitle: "Company policy for apprentices",
                mapNote: "A. It is encouraged.<br>B. There are some restrictions.<br>C. It is against the rules.",
                options: ["A","B","C"],
                items: [
                  {n:15, label:"Using the internet"},
                  {n:16, label:"Flexible working"},
                  {n:17, label:"Booking holidays"},
                  {n:18, label:"Working overtime"},
                  {n:19, label:"Wearing trainers"},
                  {n:20, label:"Bringing food to work"}
                ]
              }
            ],
            multiGroups: [[11,12],[13,14]],
            answers: {11:"A",12:"C",13:"B",14:"E",15:"B",16:"B",17:"C",18:"A",19:"A",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Janet Parker, the HR manager, giving a welcome talk to new apprentices."},
              {sp:"JANET PARKER", t:"Welcomes the group, warning the first week may feel overwhelming with lots of new information, but reassures them their supervisor is approachable and happy to help, encouraging them to check in whenever unsure rather than worry about remembering everything; encourages talking to as many people as possible while rotating through departments in the first week, both to learn and to make friends; explains each apprentice will also get a mentor, a recent apprentice themselves, who'll meet weekly to review progress and discuss areas for improvement, as well as longer-term career ambitions, though they won't do the apprentice's work for them."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 15 to 20 before the talk continues."},
              {sp:"JANET PARKER", t:"Runs through company policies: unlimited internet access for work purposes only, not personal use; flexible working possibly available after the three-month probation period, but depending on department and circumstances, not automatic; holidays not to be booked until after the six-month apprenticeship ends, aside from public holidays, with time off only for illness; a standard 40-hour week with optional but encouraged overtime during busy periods; no formal dress code beyond practical casual clothing, with high heels restricted for safety and trainers preferred; and a subsidised on-site canteen alongside a new no-packed-lunch policy, introduced to encourage healthy eating and discourage eating at workstations."},
              {sp:"ANNOUNCER", t:"That is the end of Section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21\u201325",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Cities built by the sea",
                items: [
                  {n:21, q:"Carla and Rob were surprised to learn that coastal cities", opts:["contain nearly half the world's population.","include most of the world's largest cities.","are growing twice as fast as other cities."]},
                  {n:22, q:"According to Rob, building coastal cities near to rivers", opts:["may bring pollution to the cities.","may reduce the land available for agriculture.","may mean the countryside is spoiled by industry."]},
                  {n:23, q:"What mistake was made when building water drainage channels in Miami in the 1950s?", opts:["There were not enough of them.","They were made of unsuitable materials.","They did not allow for the effects of climate change."]},
                  {n:24, q:"What do Rob and Carla think that the authorities in Miami should do immediately?", opts:["take measures to restore ecosystems","pay for a new flood prevention system","stop disposing of waste materials into the ocean"]},
                  {n:25, q:"What do they agree should be the priority for international action?", opts:["greater coordination of activities","more sharing of information","agreement on shared policies"]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 26\u201330",
                inst: "What decision do the students make about each of the following parts of their presentation?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 26\u201330.",
                mapTitle: "Parts of the presentation",
                mapNote: "A. use visuals<br>B. keep it short<br>C. involve other students<br>D. check the information is accurate<br>E. provide a handout<br>F. focus on one example<br>G. do online research",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:26, label:"Historical background"},
                  {n:27, label:"Geographical factors"},
                  {n:28, label:"Past mistakes"},
                  {n:29, label:"Future risks"},
                  {n:30, label:"International implications"}
                ]
              }
            ],
            answers: {21:"B",22:"A",23:"C",24:"B",25:"C",26:"B",27:"A",28:"F",29:"G",30:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces two urban planning students, Carla and Rob, discussing their presentation on cities built by the sea, following their tutor's instructions."},
              {sp:"TUTOR", t:"Asks the pairs to discuss their presentations, including structure and next steps."},
              {sp:"CARLA", t:"Is glad they chose a specific topic, since it made research easier; notes most of the world's biggest cities are actually coastal, which surprised her."},
              {sp:"ROB", t:"Agrees, and adds that many coastal cities sit where rivers meet the sea, which can cause pollution problems as agriculture and industry spread inland along rivers, carrying pollutants downstream to the cities; mentions reading about Miami, where 1950s drainage channels failed to account for global warming and rising sea levels, making them largely ineffective now during heavy rain."},
              {sp:"CARLA", t:"Asks what authorities are doing about it."},
              {sp:"ROB", t:"Mentions plans to stop ocean waste disposal within a decade, though that won't solve current flooding risk; agrees the priority now is funding a replacement flood prevention system, while considering the wider ecosystem long-term."},
              {sp:"CARLA", t:"Argues coastal cities can't solve these problems alone and need international cooperation."},
              {sp:"ROB", t:"Agrees, noting that while problems and solutions are broadly understood, reaching international agreement on shared principles will take a long time."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 26 to 30 before the discussion continues."},
              {sp:"CARLA", t:"Suggests they have enough content for their 15-minute presentation."},
              {sp:"ROB", t:"Proposes starting with brief historical background, since other students likely already know some of it, so it shouldn't take long."},
              {sp:"CARLA", t:"Suggests covering geographical factors like wetlands, river estuaries, and coastal erosion, proposing a handout with maps."},
              {sp:"ROB", t:"Prefers slides instead, which Carla agrees would work better; mentions a New Orleans flooding case study for the past mistakes section."},
              {sp:"CARLA", t:"Agrees to use that single case study as the basis for that part, expecting the audience to recall the flooding even without having read the case study."},
              {sp:"ROB", t:"Suggests covering future risks with more long-term population growth research."},
              {sp:"CARLA", t:"Admits they lack information there and will need to look at websites, though it shouldn't take too long; suggests ending with international implications, possibly involving the international students in the audience directly."},
              {sp:"ROB", t:"Agrees that could be interesting if time allows."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Marine renewable energy (ocean energy)",
                groups: [
                  {
                    heading: "Introduction",
                    items: [
                      {n:31, before:"More energy required because of growth in population and", input:31, after:""},
                      {n:null, before:"What's needed:", input:null, after:""},
                      {n:null, before:"renewable energy sources", input:null, after:"", indent:true},
                      {n:null, before:"methods that won't create pollution", input:null, after:"", indent:true}
                    ]
                  },
                  {
                    heading: "Wave energy",
                    items: [
                      {n:32, before:"Advantage: waves provide a", input:32, after:"source of renewable energy"},
                      {n:null, before:"Electricity can be generated using offshore or onshore systems", input:null, after:""},
                      {n:null, before:"Onshore systems may use a reservoir", input:null, after:""},
                      {n:null, before:"Problems:", input:null, after:""},
                      {n:33, before:"waves can move in any", input:33, after:"", indent:true},
                      {n:34, before:"movement of sand, etc. on the", input:34, after:"of the ocean may be affected", indent:true}
                    ]
                  },
                  {
                    heading: "Tidal energy",
                    items: [
                      {n:35, before:"Tides are more", input:35, after:"than waves"},
                      {n:null, before:"Planned tidal lagoon in Wales:", input:null, after:""},
                      {n:36, before:"will be created in a", input:36, after:"at Swansea", indent:true},
                      {n:null, before:"breakwater (dam) containing 16 turbines", input:null, after:"", indent:true},
                      {n:null, before:"rising tide forces water through turbines, generating electricity", input:null, after:"", indent:true},
                      {n:37, before:"stored water is released through", input:37, after:", driving the turbines in the reverse direction", indent:true},
                      {n:null, before:"Advantages:", input:null, after:""},
                      {n:null, before:"not dependent on weather", input:null, after:"", indent:true},
                      {n:38, before:"no", input:38, after:"is required to make it work", indent:true},
                      {n:39, before:"likely to create a number of", input:39, after:"", indent:true},
                      {n:null, before:"Problem:", input:null, after:""},
                      {n:40, before:"may harm fish and birds, e.g. by affecting", input:40, after:"and building up silt", indent:true}
                    ]
                  },
                  {
                    heading: "Ocean thermal energy conversion",
                    items: [
                      {n:null, before:"Uses a difference in temperature between the surface and lower levels", input:null, after:""},
                      {n:null, before:"Water brought to the surface in a pipe", input:null, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"industry",32:"constant",33:"direction",34:"floor",35:"predictable",36:"bay",37:"gates",38:"fuel",39:"jobs",40:"migration"},
            script: [
              {sp:"SPEAKER", t:"Introduces marine renewable (ocean) energy, motivated by rising energy demand from population growth and expanding industry, and the environmental damage and finite nature of fossil fuels, in contrast to clean renewable sources like sun, wind, and ocean movement; outlines three categories: wave energy, tidal energy, and ocean thermal energy conversion."},
              {sp:"SPEAKER", t:"Describes wave energy devices with names like Wave Dragon, the Penguin, and Mighty Whale; notes waves offer a constant, unstoppable energy source, generated via onshore or offshore systems, though their erratic, multidirectional movement caused by wind makes efficient technology difficult to design; also notes a risk of disrupting sand and sediment movement on the ocean floor."},
              {sp:"SPEAKER", t:"Describes tidal energy as more predictable than wave energy, since tide timings are known years in advance, though effective sites need at least a 5-metre tidal range, found naturally in only about 40 places worldwide, or artificially via a tidal lagoon; describes a planned lagoon in a bay at Swansea, Wales, enclosed by a U-shaped breakwater containing 16 turbines, generating electricity as the rising tide flows through the turbines, then again as stored water is released through gates in the breakwater to drive the turbines in reverse; notes this would generate power four times daily for about 14 hours total, enough for over 150,000 homes."},
              {sp:"SPEAKER", t:"Lists advantages: independence from weather, no fuel needed to operate the turbines, no greenhouse emissions, minimal maintenance, relatively cheap electricity, and over 2,000 jobs created through component manufacturing; but notes concerns about harming fish and bird migration patterns and causing silt buildup affecting local ecosystems."},
              {sp:"SPEAKER", t:"Introduces ocean thermal energy conversion, relying on temperature differences between surface and deep water in tropical coastal areas, using a submerged pipe to bring cold water to the surface, a concept dating back to 1881."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      2: {
        title: "Cambridge IELTS 14 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2014%20test%202%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "TOTAL HEALTH CLINIC \u2014 PATIENT DETAILS",
                example: {label: "Personal information<br>Name (Example): Julie Anne", value: "Garcia"},
                groups: [
                  {
                    heading: "Personal information",
                    items: [
                      {n:1, before:"Contact phone:", input:1, after:""},
                      {n:2, before:"Date of birth:", input:2, after:", 1992"},
                      {n:3, before:"Occupation: works as a", input:3, after:""},
                      {n:4, before:"Insurance company:", input:4, after:"Life Insurance"}
                    ]
                  },
                  {
                    heading: "Details of the problem",
                    items: [
                      {n:5, before:"Type of problem: pain in her left", input:5, after:""},
                      {n:6, before:"When it began:", input:6, after:"ago"},
                      {n:null, before:"Action already taken: has taken painkillers and applied ice", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Other information",
                    items: [
                      {n:null, before:"Sports played", input:null, after:""},
                      {n:7, before:"belongs to a", input:7, after:"club"},
                      {n:8, before:"goes", input:8, after:"regularly"}
                    ]
                  },
                  {
                    heading: "Medical history",
                    items: [
                      {n:9, before:"injured her", input:9, after:"last year"},
                      {n:null, before:"no allergies", input:null, after:""},
                      {n:10, before:"no regular medication apart from", input:10, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"2194429785",2:"10 October",3:"manager",4:"Cawley",5:"knee",6:"three weeks",7:"tennis",8:"running",9:"shoulder",10:"vitamins"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Julie Anne Garcia's first visit to the Total Health Clinic, meeting Dr Carl Rogers; the example (her surname, Garcia) has already been filled in before the recording proper begins."},
              {sp:"CARL", t:"Confirms her full name, then takes a contact phone number and confirms her date of birth, correcting his own record from 1991 to match Julie's stated 1992; asks about her occupation."},
              {sp:"JULIE", t:"Explains she works full-time as a manager at the Esterhazy's restaurant chain, having started as a waitress there years earlier."},
              {sp:"CARL", t:"Recognises the restaurant chain and asks for her insurance company name."},
              {sp:"JULIE", t:"Gives Cawley Life Insurance."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 5 to 10 before the conversation continues."},
              {sp:"CARL", t:"Asks what brought her in today."},
              {sp:"JULIE", t:"Describes a gradually worsening pain in her left knee, first noticed three weeks ago, worse in the last couple of days; mentions taking Tylenol for the pain, which helps temporarily, and applying ice for the last few days, which helps a little, though she hasn't tried heat."},
              {sp:"CARL", t:"Asks about her general fitness and sporting activities."},
              {sp:"JULIE", t:"Explains she belongs to a tennis club and plays competitively and regularly, though she's stopped since the pain started; also mentions occasional swimming while on vacation, and running three or four times a week normally; mentions a shoulder injury from a fall the previous year, now fully healed, but no other leg problems until now."},
              {sp:"CARL", t:"Asks about allergies and regular medication."},
              {sp:"JULIE", t:"Confirms no known allergies, and that she only regularly takes vitamins, describing herself as generally very healthy."},
              {sp:"CARL", t:"Suggests taking a closer look at the knee."},
              {sp:"ANNOUNCER", t:"That is the end of Section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11\u201315",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Visit to Branley Castle",
                items: [
                  {n:11, q:"Before Queen Elizabeth I visited the castle in 1576,", opts:["repairs were carried out to the guest rooms.","a new building was constructed for her.","a fire damaged part of the main hall."]},
                  {n:12, q:"In 1982, the castle was sold to", opts:["the government.","the Fenys family.","an entertainment company."]},
                  {n:13, q:"In some of the rooms, visitors can", opts:["speak to experts on the history of the castle.","interact with actors dressed as famous characters.","see models of historical figures moving and talking."]},
                  {n:14, q:"In the castle park, visitors can", opts:["see an 800-year-old tree.","go to an art exhibition.","visit a small zoo."]},
                  {n:15, q:"At the end of the visit, the group will have", opts:["afternoon tea in the conservatory.","the chance to meet the castle's owners.","a photograph together on the Great Staircase."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 16\u201320",
                inst: "Label the plan below.<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 16\u201320.",
                mapTitle: "Branley Castle",
                mapImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAK0AskDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7IooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK+AfhR/wmnxDbXbrVf2jNW8Hi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/wCEk/aH/wCia+FP/B6aT/hJ/wBoj/omfhT/AMHtezYoxQB4q/ir9oobsfCzww2MdNfpB4u/aMyM/CDw9j/sYUr2vFGKAPGE8Y/tAYXzfgvpL+pj8URL/SrC+M/jqFXPwT0tj3I8WQ//ABuvX8UYoA8hbxv8cuNvwLsvXnxhb/8Axuj/AITj44goP+FGWJ9T/wAJhb//ABuvXsUYoA8ZPj/47Dr+z+n/AIWFp/hR/wAJ98df+jf0/wDCws69mxRigDxv/hPvjp/0b9H/AOFjaf8Axum/8J98df8AogKf+Fhaf4V7NijFAHij/EX46Jw37Ph/Dxfaf4VMnxH+M/8Ay0/Z8u/+A+KbSvZcUYoA8fHxH+LfH/FgNU6858R2dDfEv4rI5U/ADVvquv2hr2DFGKAPGh8Vfid/0QHxD/4N7ak/4Wt8TFTc/wAAPEWfbVbc17NijFAHjp+KPxNHH/Cg9f8A/Bva01vit8TBz/woLxH/AODS3r2TFGKAPGT8WfiUIwf+FA+JP/Bnb1G3xe+I4fH/AAoHxT+F9DXtWKMUAeLn4tfEkKGPwB8TEEZ41GA03/hb3xHOAvwA8Vc+t9DXtWKMUAeM/wDC4PHIYZ+A3jP3Pmw0D4veOf8Aog/jP8JYK9mxRigDxv8A4XB44yc/Afxp/wB/IqT/AIW744/6IT40x7SQV7LijFAHg/ir4neO9Z8NatpEXwN8YRPe2UtskrSw/KXQrXoHwF0u/wBD+DXhPSNVtZLS/tNLijngk6xsB0NdxijFACUUuKMUAJRS4oxQA6iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:16, label:"Starting point for walking the walls"},
                  {n:17, label:"Bow and arrow display"},
                  {n:18, label:"Hunting birds display"},
                  {n:19, label:"Traditional dancing"},
                  {n:20, label:"Shop"}
                ]
              }
            ],
            answers: {11:"B",12:"C",13:"C",14:"B",15:"A",16:"H",17:"A",18:"C",19:"F",20:"D"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a guide addressing a group of tourists approaching Branley Castle."},
              {sp:"SPEAKER", t:"Gives a brief history: a defensive fort first built on the site in 914 AD by King Alfred the Great's daughter, later replaced by a stone castle built by nobleman Richard de Vere after the Norman conquest, staying in his family for over 400 years; explains that for Queen Elizabeth I's 1576 visit, rather than repair the ageing guest rooms, a new wooden house was built beside the main hall, where she stayed four luxurious nights, though the building later burned down."},
              {sp:"SPEAKER", t:"Describes the 17th-century Fenys family enlarging and improving the castle, before financial difficulties forced a sale in 1982 despite government support, eventually bought by a company owning several amusement parks, though the original atmosphere has been preserved; mentions lifelike, conversing wax models in period costume in the State Rooms, and informational booklets in every room; describes the park's history, including sheep grazing and a 19th-century small zoo with animals like rabbits and a baby elephant, with the old zoo buildings now used for art and sculpture displays; notes the park's oldest tree, 800 years old, was blown down in a 1987 storm."},
              {sp:"SPEAKER", t:"Explains visitors are free until 4:30pm, after which the group will reconvene at the bottom of the great staircase, then visit the Long Gallery to see century-old family photographs, before having afternoon tea and cakes in the conservatory."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 16 to 20 before the talk continues."},
              {sp:"SPEAKER", t:"Describes the castle's four towers joined by a high wall, with the river on two sides; points out the Great Hall in the main tower near the river, extended in the 18th century; explains the walk around the walls starts near the main entrance, down the path to the south gate (not the north gate, which has no way up); gives directions to the archery display (first left after the main entrance, past the bridge, at the end of the path), the hunting birds display (toward the south gate but turning right before reaching it, past the first tower), the traditional dancing performance (across the castle grounds, over the bridge, about a 10-minute walk), and the gift shop (first left after the main entrance, then first right, inside one of the towers)."},
              {sp:"ANNOUNCER", t:"That is the end of Section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21\u201324",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Woolly mammoths on St Paul's Island",
                items: [
                  {n:21, q:"How will Rosie and Martin introduce their presentation?", opts:["with a drawing of woolly mammoths in their natural habitat","with a timeline showing when woolly mammoths lived","with a video clip about woolly mammoths"]},
                  {n:22, q:"What was surprising about the mammoth tooth found by Russell Graham?", opts:["It was still embedded in the mammoth's jawbone.","It was from an unknown species of mammoth.","It was not as old as mammoth remains from elsewhere."]},
                  {n:23, q:"The students will use an animated diagram to demonstrate how the mammoths", opts:["became isolated on the island.","spread from the island to other areas.","coexisted with other animals on the island."]},
                  {n:24, q:"According to Martin, what is unusual about the date of the mammoths' extinction on the island?", opts:["how exact it is","how early it is","how it was established"]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201330",
                inst: "What action will the students take for each of the following sections of their presentation?<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 25\u201330.",
                mapTitle: "Sections of presentation",
                mapNote: "A. make it more interactive<br>B. reduce visual input<br>C. add personal opinions<br>D. contact one of the researchers<br>E. make detailed notes<br>F. find information online<br>G. check timing<br>H. organise the content more clearly",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:25, label:"Introduction"},
                  {n:26, label:"Discovery of the mammoth tooth"},
                  {n:27, label:"Initial questions asked by the researchers"},
                  {n:28, label:"Further research carried out on the island"},
                  {n:29, label:"Findings and possible explanations"},
                  {n:30, label:"Relevance to the present day"}
                ]
              }
            ],
            answers: {21:"B",22:"A",23:"A",24:"A",25:"E",26:"D",27:"A",28:"H",29:"G",30:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces two environmental science students, Rosie and Martin, discussing their presentation on woolly mammoths with their tutor."},
              {sp:"TUTOR", t:"Asks about their presentation on a North American research project."},
              {sp:"MARTIN", t:"Explains they want general background first, establishing mammoths as elephant relatives from the last ice age."},
              {sp:"ROSIE", t:"Suggests either a cartoon video clip (too childish), a timeline diagram with illustrations, or a drawing of mammoths in the ice; they settle on the timeline diagram."},
              {sp:"TUTOR", t:"Asks about the mammoth tooth discovery on St Paul's Island, Alaska."},
              {sp:"ROSIE", t:"Explains Russell Graham found it under a rock in a cave, in remarkably good condition, as if freshly extracted from the jawbone; it was dated to 6,500 years old."},
              {sp:"TUTOR", t:"Asks why that was significant."},
              {sp:"ROSIE", t:"Explains previously found mainland mammoth bones were much older, making this discovery surprising."},
              {sp:"MARTIN", t:"Describes their planned animated diagram showing the island's prehistoric geography, once connected to the mainland, allowing mammoths and other animals like bears to roam freely."},
              {sp:"ROSIE", t:"Explains that as the climate warmed and sea levels rose, the island became cut off, trapping the mammoths there, where they survived thousands of years longer than their mainland relatives."},
              {sp:"TUTOR", t:"Asks why they died out on the mainland."},
              {sp:"ROSIE", t:"Says it's unknown."},
              {sp:"MARTIN", t:"Explains Graham's team dated the island extinction to precisely 5,600 years ago, unusually exact for a prehistoric extinction, based on nearly two years analysing lake-bottom mud samples containing plant fragments, volcanic ash, and mammoth DNA."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 25 to 30 before the discussion continues."},
              {sp:"TUTOR", t:"Asks the students to go through each section of their presentation and its next steps."},
              {sp:"MARTIN", t:"Says the introduction just needs its visual prepared."},
              {sp:"ROSIE", t:"Disagrees, suggesting they write down all their ideas rather than rely on memory, given how important the opening is; suggests contacting the lead researcher for more detail on the tooth discovery, since they currently only have information from one online article."},
              {sp:"MARTIN", t:"Agrees, and asks about the section on the researchers' initial questions, which has plenty of content but needs to be made more engaging."},
              {sp:"ROSIE", t:"Suggests asking the audience to guess some of the questions themselves, which the tutor agrees would add variety."},
              {sp:"MARTIN", t:"Wonders if the mud analysis section has too much information."},
              {sp:"ROSIE", t:"Feels it's not too much, just poorly organised at present."},
              {sp:"MARTIN", t:"Suggests restructuring it chronologically, which Rosie agrees with; says the findings and explanations section is nearly ready but needs practice to check timing."},
              {sp:"TUTOR", t:"Notes the final section, on present-day relevance, needs the students' own viewpoints rather than just other people's ideas."},
              {sp:"MARTIN", t:"Agrees to consider that."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "The history of weather forecasting",
                groups: [
                  {
                    heading: "Ancient cultures",
                    items: [
                      {n:null, before:"many cultures believed that floods and other disasters were involved in the creation of the world", input:null, after:""},
                      {n:31, before:"many cultures invented", input:31, after:"and other ceremonies to make the weather gods friendly"},
                      {n:32, before:"people needed to observe and interpret the sky to ensure their", input:32, after:""},
                      {n:33, before:"around 650 BC, Babylonians started forecasting, using weather phenomena such as", input:33, after:""},
                      {n:34, before:"by 300 BC, the Chinese had a calendar made up of a number of", input:34, after:"connected with the weather"}
                    ]
                  },
                  {
                    heading: "Ancient Greeks",
                    items: [
                      {n:null, before:"a more scientific approach", input:null, after:""},
                      {n:null, before:"Aristotle tried to explain the formation of various weather phenomena", input:null, after:""},
                      {n:35, before:"Aristotle also described haloes and", input:35, after:""}
                    ]
                  },
                  {
                    heading: "Middle Ages",
                    items: [
                      {n:null, before:"Aristotle's work considered accurate", input:null, after:""},
                      {n:36, before:"many proverbs, e.g. about the significance of the colour of the", input:36, after:", passed on accurate information."}
                    ]
                  },
                  {
                    heading: "15th-19th centuries",
                    items: [
                      {n:37, before:"15th century: scientists recognised value of", input:37, after:"for the first time"},
                      {n:38, before:"Galileo invented the", input:38, after:""},
                      {n:null, before:"Pascal showed relationship between atmospheric pressure and altitude", input:null, after:""},
                      {n:null, before:"from the 17th century, scientists could measure atmospheric pressure and temperature", input:null, after:""},
                      {n:39, before:"18th century: Franklin identified the movement of", input:39, after:""},
                      {n:40, before:"19th century: data from different locations could be sent to the same place by", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"dances",32:"survival",33:"clouds",34:"festivals",35:"comets",36:"sky",37:"instruments",38:"thermometer",39:"storms",40:"telegraph"},
            script: [
              {sp:"SPEAKER", t:"Introduces the early history of weather forecasting, noting most ancient cultures had weather gods and creation myths involving floods, attributing weather to divine will, with dances and rites performed to please gods like the Egyptian sun god Ra or the Norse thunder god Thor; explains observing the sky was a matter of survival, and that around 650 BC the Babylonians produced the first short-range forecasts based on cloud observations, while by 300 BC Chinese astronomers had developed a calendar of 24 weather-related festivals."},
              {sp:"SPEAKER", t:"Describes the ancient Greeks' more scientific approach, especially Aristotle, whose 340 BC work on rain, clouds, wind, and storms held authority for nearly 2,000 years; notes he accurately described haloes and comets and correctly linked heat to evaporation, though he also made errors, such as believing winds were breathed out by the earth, later corrected from the Renaissance onward."},
              {sp:"SPEAKER", t:"Notes that in the Middle Ages, weather knowledge was passed down through proverbs like the one about a red sky, many of which modern meteorologists have found to be accurate; explains that for centuries forecasting relied only on personal observation until the 15th century, when scientists began valuing instruments, such as weather vanes, early rain gauges, and the hygrometer for measuring humidity."},
              {sp:"SPEAKER", t:"Describes Galileo inventing the first thermometer in 1592, followed by his student Torricelli's barometer for measuring atmospheric pressure; notes Pascal's 1648 proof that pressure decreases with altitude, later verified by Halley in 1686, who also mapped trade winds; describes Benjamin Franklin's 18th-century work identifying that storms generally travel from west to east."},
              {sp:"SPEAKER", t:"Notes that alongside new instruments, people began keeping weather records in different locations, and the mid-19th-century invention of the telegraph allowed these records to be collated, leading to the first weather services by the century's end, with mathematics and physics not becoming part of meteorology until the early 20th century."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 14 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2014%20test%203%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "FLANDERS CONFERENCE HOTEL",
                example: {label: "Customer Services Manager:", value: "Angela"},
                groups: [
                  {
                    heading: "Date available",
                    items: [
                      {n:null, before:"weekend beginning February 4th", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Conference facilities",
                    items: [
                      {n:1, before:"the", input:1, after:"room for talks (projector and"},
                      {n:2, before:"", input:2, after:"available)"},
                      {n:3, before:"area for coffee and an", input:3, after:""},
                      {n:4, before:"free", input:4, after:"throughout"},
                      {n:5, before:"a standard buffet lunch costs $", input:5, after:"per head"}
                    ]
                  },
                  {
                    heading: "Accommodation",
                    items: [
                      {n:6, before:"Rooms will cost $", input:6, after:"including breakfast."}
                    ]
                  },
                  {
                    heading: "Other facilities",
                    items: [
                      {n:7, before:"The hotel also has a spa and rooftop", input:7, after:"."},
                      {n:8, before:"There's a free shuttle service to the", input:8, after:"."}
                    ]
                  },
                  {
                    heading: "Location",
                    items: [
                      {n:9, before:"Wilby Street (quite near the", input:9, after:")"},
                      {n:10, before:"near to restaurants and many", input:10, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Tesla",2:"microphone",3:"exhibition",4:"wifi",5:"45",6:"135",7:"pool",8:"airport",9:"sea",10:"clubs"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a man phoning the Flanders Conference Hotel about conference facilities, reaching customer services manager Angela; the example (her name, Angela) has already been filled in before the recording proper begins."},
              {sp:"MAN", t:"Explains he's calling from a Perth-based medical company organising a two-day conference in Sydney for around 50-60 clients."},
              {sp:"ANGELA", t:"Checks availability; the weekends of January 28th and 21st are already booked, so they settle on the weekend beginning February 4th instead."},
              {sp:"MAN", t:"Asks about the conference facilities available."},
              {sp:"ANGELA", t:"Describes the Tesla room, holding up to 100 people, fully equipped with a projector and a microphone set up ready to go, plus an audience microphone for questions."},
              {sp:"MAN", t:"Asks for an open coffee area, also large enough for a product exhibition."},
              {sp:"ANGELA", t:"Confirms the central atrium suits this, available for setup before the conference; confirms free wifi throughout the hotel, and offers a standard two-course buffet lunch at $45 per person, or a $25 more expensive special option."},
              {sp:"MAN", t:"Opts for the standard menu and asks Angela to send details."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 6 to 10 before the conversation continues."},
              {sp:"MAN", t:"Asks about Saturday night accommodation for roughly 25 attendees."},
              {sp:"ANGELA", t:"Offers a 25% conference discount, bringing rooms to $135 (down from the standard $180), including breakfast, plus access to the hotel's spa and rooftop pool."},
              {sp:"MAN", t:"Asks about transport links, noting the hotel is downtown."},
              {sp:"ANGELA", t:"Explains it's about 12km from the airport with a complimentary shuttle bus, and just a 10-minute walk from Central Railway station."},
              {sp:"MAN", t:"Asks about the hotel's location, being unfamiliar with Sydney."},
              {sp:"ANGELA", t:"Describes it as downtown on the small Wilby Street, close to the sea, with plenty of restaurants and nightclubs nearby for a Saturday evening out."},
              {sp:"MAN", t:"Asks for pricing information to move forward."},
              {sp:"ANNOUNCER", t:"That is the end of Section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 11 and 12",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO activities that volunteers do are mentioned?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"decorating"},
                  {letter:"B", text:"cleaning"},
                  {letter:"C", text:"delivering meals"},
                  {letter:"D", text:"shopping"},
                  {letter:"E", text:"childcare"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO ways that volunteers can benefit from volunteering are mentioned?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"learning how to be part of a team"},
                  {letter:"B", text:"having a sense of purpose"},
                  {letter:"C", text:"realising how lucky they are"},
                  {letter:"D", text:"improved ability at time management"},
                  {letter:"E", text:"boosting their employment prospects"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15\u201320",
                inst: "What has each of the following volunteers helped someone to do?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 15\u201320.",
                mapTitle: "Volunteers",
                mapNote: "A. overcome physical difficulties<br>B. rediscover skills not used for a long time<br>C. improve their communication skills<br>D. solve problems independently<br>E. escape isolation<br>F. remember past times<br>G. start a new hobby",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:15, label:"Habib"},
                  {n:16, label:"Consuela"},
                  {n:17, label:"Minh"},
                  {n:18, label:"Tanya"},
                  {n:19, label:"Alexei"},
                  {n:20, label:"Juba"}
                ]
              }
            ],
            multiGroups: [[11,12],[13,14]],
            answers: {11:"A",12:"E",13:"B",14:"E",15:"F",16:"A",17:"E",18:"G",19:"D",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Lucy Crittenden, director of operations for a volunteering organisation, addressing a group of college students."},
              {sp:"LUCY CRITTENDEN", t:"Explains volunteers are unpaid teenagers and adults typically giving two or three hours weekly to help people with physical or behavioural difficulties, offering tips like cooking or budgeting advice, doing painting or wallpapering with family members, or babysitting so parents can go out; notes volunteering benefits volunteers too, strengthening CVs for job applications and giving many volunteers a sense of purpose in their lives."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 15 to 20 before the talk continues."},
              {sp:"LUCY CRITTENDEN", t:"Shares examples: Habib brings an elderly woman with early dementia to a weekly community centre singalong, the songs helping her recall her youth; Consuela, who has her own walking difficulties, encourages others with similar struggles to walk more by her own example; Minh takes a housebound young man out to the cinema or to see friends he hadn't visited in a long time; Tanya, a professional dressmaker, inspired an elderly woman she visits to take up making soft toys as a new hobby; Alexei helps a struggling family talk through solutions themselves, boosting their self-esteem by realising they can solve problems independently; and Juba has patiently helped a teenage girl with learning difficulties become much better at expressing herself and understanding others."},
              {sp:"ANNOUNCER", t:"That is the end of Section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 21\u201326",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "Background on school marching band",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:21, before:"It consists of around", input:21, after:"students."},
                      {n:22, before:"It is due to play in a", input:22, after:"band competition."},
                      {n:23, before:"It has been invited to play in the town's", input:23, after:"."},
                      {n:24, before:"They have listened to a talk by a", input:24, after:"."},
                      {n:25, before:"Joe will discuss a", input:25, after:"with the band."},
                      {n:26, before:"Joe hopes the band will attend a", input:26, after:"next month."}
                    ]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 27\u201330",
                inst: "What problem does Joe mention in connection with each of the following band members?<br>Choose the correct letter, <b>A\u2013F</b>, next to Questions 27\u201330.",
                mapTitle: "Band members",
                mapNote: "A. makes a lot of mistakes in rehearsals<br>B. keeps making unhelpful suggestions<br>C. has difficulty with rhythm<br>D. misses too many rehearsals<br>E. has a health problem<br>F. doesn't mix with other students",
                options: ["A","B","C","D","E","F"],
                items: [
                  {n:27, label:"flautist"},
                  {n:28, label:"trumpeter"},
                  {n:29, label:"trombonist"},
                  {n:30, label:"percussionist"}
                ]
              }
            ],
            answers: {21:"50",22:"regional",23:"carnival",24:"drummer",25:"film",26:"parade",27:"D",28:"B",29:"E",30:"F"},
            script: [
              {sp:"LIZZIE", t:"Asks Joe how his teaching practice is going, prompting him to explain he's now in charge of the school marching band and wants to talk it through."},
              {sp:"JOE", t:"Describes the band as having around 50 students aged 11 to 18, a popular activity, much larger than any band he's worked with before; explains they're not good enough for national competitions but are entered in a regional one later in the term, hopefully as motivation to improve; mentions the town council has invited them to perform at a summer carnival, despite the band not yet being ready."},
              {sp:"LIZZIE", t:"Asks what Joe has been doing besides musical practice."},
              {sp:"JOE", t:"Mentions playing an inspiring recording of a drummer's after-dinner speech about how being in a band kept him out of crime, which the students found engaging; plans to show the 1940s film 'Strike Up the Band' and discuss it with students, hoping it will show them what they can achieve together."},
              {sp:"LIZZIE", t:"Agrees this is a good idea."},
              {sp:"JOE", t:"Hopes to take some students to a parade next month featuring other marching bands, pending approval to hire a coach for transport."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 27 to 30 before the discussion continues."},
              {sp:"JOE", t:"Asks for advice about difficult students: a flautist who claims to love the band but rarely attends the twice-weekly rehearsals, offering excuses Joe doesn't fully believe; a trumpeter who overestimates her own ability and constantly offers unhelpful advice to others, complicating Joe's job; a talented, rhythmic trombonist with breathing difficulties who can't produce enough breath for the instrument but refuses to switch to percussion, resulting in him only playing half the notes; and a decent percussionist who never interacts with others and always leaves immediately after rehearsals, which isn't ideal for group cohesion."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "Concerts in university arts festival",
                groups: [
                  {
                    heading: "Concert 1",
                    items: [
                      {n:null, before:"Australian composer: Liza Lim", input:null, after:""},
                      {n:31, before:"studied piano and", input:31, after:"before turning to composition"},
                      {n:null, before:"performers and festivals around the world have given her a lot of commissions", input:null, after:""},
                      {n:32, before:"compositions show a great deal of", input:32, after:"and are drawn from various cultural sources"},
                      {n:33, before:"her music is very expressive and also", input:33, after:""},
                      {n:34, before:"festival will include her", input:34, after:"called The Oresteia"},
                      {n:35, before:"Lim described the sounds in The Oresteia as", input:35, after:""},
                      {n:null, before:"British composers: Ralph Vaughan Williams, Frederick Delius", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Concert 2",
                    items: [
                      {n:null, before:"British composers: Benjamin Britten, Judith Weir", input:null, after:""},
                      {n:null, before:"Australian composer: Ross Edwards", input:null, after:""},
                      {n:null, before:"festival will include The Tower of Remoteness, inspired by nature", input:null, after:""},
                      {n:36, before:"\"The Tower of Remoteness\" is performed by piano and", input:36, after:""},
                      {n:null, before:"compositions include music for children", input:null, after:""},
                      {n:37, before:"celebrates Australia's cultural", input:37, after:""}
                    ]
                  },
                  {
                    heading: "Concert 3",
                    items: [
                      {n:null, before:"Australian composer: Carl Vine", input:null, after:""},
                      {n:null, before:"played cornet then piano", input:null, after:""},
                      {n:38, before:"studied", input:38, after:"before studying music"},
                      {n:null, before:"worked in Sydney as a pianist and composer", input:null, after:""},
                      {n:39, before:"became well known as composer of music for", input:39, after:""},
                      {n:40, before:"festival will include his music for the 1996", input:40, after:""},
                      {n:null, before:"British composers: Edward Elgar, Thomas Ad\u00e8s", input:null, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"violin",32:"energy",33:"complex",34:"opera",35:"disturbing",36:"clarinet",37:"diversity",38:"physics",39:"dance",40:"Olympics"},
            script: [
              {sp:"SPEAKER", t:"Introduces the university's upcoming arts festival, featuring three public concerts in the music department, themed around links between the UK and Australia, each pairing British and Australian composers."},
              {sp:"SPEAKER", t:"Describes Liza Lim, born in Perth in 1966, who learned piano and violin as a child before her teachers encouraged her toward composition, which became her real strength, later studying and teaching it internationally; her vibrant, energetic compositions draw on Asian and Australian Aboriginal cultural sources, including the didgeridoo, featured in her work The Compass; her expressive music, though complex, connects strongly with audiences."},
              {sp:"SPEAKER", t:"Describes the festival's semi-staged performance of Lim's opera The Oresteia, based on Aeschylus's Greek tragedy trilogy, composed in her mid-twenties with text co-written with Barrie Kosky, performed by six singers, a dancer, and an orchestra including electric guitar and a traditional Turkish stringed instrument; Lim included disturbing sounds like breathing, sobbing, laughing, and whistling to convey the difficult stories; the roughly 75-minute work will be followed by orchestral pieces by British composers Vaughan Williams and Delius."},
              {sp:"SPEAKER", t:"Describes the second concert opening with British composers Britten and Weir, followed after the interval by Ross Edwards's The Tower of Remoteness, for piano and clarinet, inspired by nature while sitting alone by a dry creek bed listening to birds and insects \u2014 Edwards later realised its opening phrase subconsciously mirrored a bird call; born in Sydney in 1943 and educated at the Sydney Conservatorium and the universities of Adelaide and Sydney, Edwards is one of Australia's most performed composers, writing everything from symphonies to children's music, celebrated for reflecting Australia's cultural diversity."},
              {sp:"SPEAKER", t:"Describes the third concert's Australian composer, Carl Vine, born in Perth in 1954, who played cornet then piano before studying physics at university and switching to composition; after graduating he moved to Sydney, working as a freelance pianist and composer, becoming a prominent composer for dance with 25 dance scores to his name; the festival will feature his seven-minute orchestral piece written for the 1996 Olympics flag handover ceremony, alongside works by British composers Elgar and Thomas Ad\u00e8s."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 14 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2014%20test%204%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u20137",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "ENQUIRY ABOUT BOOKING HOTEL ROOM FOR EVENT",
                example: {label: "Andrew is the", value: "Events Manager"},
                groups: [
                  {
                    heading: "Rooms \u2014 Adelphi Room",
                    items: [
                      {n:1, before:"number of people who can sit down to eat:", input:1, after:""},
                      {n:null, before:"has a gallery suitable for musicians", input:null, after:""},
                      {n:2, before:"can go out and see the", input:2, after:"in pots on the terrace"},
                      {n:3, before:"terrace has a view of a group of", input:3, after:""}
                    ]
                  },
                  {
                    heading: "Carlton Room",
                    items: [
                      {n:null, before:"number of people who can sit down to eat: 110", input:null, after:""},
                      {n:4, before:"has a", input:4, after:"view of the lake"}
                    ]
                  },
                  {
                    heading: "Options",
                    items: [
                      {n:null, before:"Master of Ceremonies:", input:null, after:""},
                      {n:5, before:"can give a", input:5, after:"while people are eating"},
                      {n:6, before:"will provide", input:6, after:"if there are any problems"},
                      {n:null, before:"Accommodation:", input:null, after:""},
                      {n:7, before:"in hotel rooms or", input:7, after:""}
                    ]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 8\u201310",
                inst: "What is said about using each of the following hotel facilities?<br>Choose the correct letter, <b>A\u2013C</b>, next to Questions 8\u201310.",
                mapTitle: "Hotel facilities",
                mapNote: "A. included in cost of hiring room<br>B. available at extra charge<br>C. not available",
                options: ["A","B","C"],
                items: [
                  {n:8, label:"outdoor swimming pool"},
                  {n:9, label:"gym"},
                  {n:10, label:"tennis courts"}
                ]
              }
            ],
            answers: {1:"85",2:"roses",3:"trees",4:"partial",5:"speech",6:"support",7:"cabins",8:"C",9:"A",10:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Andrew, the events manager at Clare House Hotel, taking a call from Samantha about hiring a room; the example (Andrew's role, Events Manager) has already been filled in before the recording proper begins."},
              {sp:"SAMANTHA", t:"Explains she's organising her parents' 50th wedding anniversary party for next September, needing a room and accommodation for around 80 guests, likely a sit-down meal."},
              {sp:"ANDREW", t:"Describes the Adelphi room, seating 85 (or over 100 standing for a buffet), with a gallery for four or five musicians positioned to keep music loud enough for dancing but not too loud for conversation; explains it's at the back of the hotel with French windows onto a rose-filled terrace, facing southwest for afternoon and evening sun, with a view of a group of trees in the grounds (the river beyond isn't visible from the hotel)."},
              {sp:"ANDREW", t:"Describes the larger Carlton room, holding up to 110, with a stage useful for entertainment or a small band, on the first floor with a partial view of the lake from one side, but no outdoor access."},
              {sp:"SAMANTHA", t:"Finds both rooms suitable and asks about additional options."},
              {sp:"ANDREW", t:"Describes the option of a trained master of ceremonies, who can give a speech during the meal if needed, and provides support throughout, handling anything that goes wrong so Samantha can relax."},
              {sp:"SAMANTHA", t:"Asks about accommodation beyond hotel rooms, like cabins."},
              {sp:"ANDREW", t:"Confirms five self-contained cabins in the grounds, sleeping 2-4 people each, with their own living room, bathroom, and small kitchen."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 8 to 10 before the conversation continues."},
              {sp:"SAMANTHA", t:"Asks whether hotel facilities like the pool are included in the room hire price."},
              {sp:"ANDREW", t:"Explains the outdoor pool will be closed for refurbishment throughout September, but the gym is available at no extra charge, open 6am to midnight daily; the four tennis courts carry a small extra charge and are worth booking ahead due to demand."},
              {sp:"SAMANTHA", t:"Moves on to ask about the food for around 7pm dinner."},
              {sp:"ANNOUNCER", t:"That is the end of Section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "map_label",
                qlabel: "Questions 11\u201316",
                inst: "What information does the speaker give about each of the following excursions?<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 11\u201316.",
                mapTitle: "Excursions",
                mapNote: "A. all downhill<br>B. suitable for beginners<br>C. only in good weather<br>D. food included<br>E. no charge<br>F. swimming possible<br>G. fully booked today<br>H. transport not included",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:11, label:"dolphin watching"},
                  {n:12, label:"forest walk"},
                  {n:13, label:"cycle trip"},
                  {n:14, label:"local craft tour"},
                  {n:15, label:"observatory trip"},
                  {n:16, label:"horse riding"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things does the speaker say about the attraction called Musical Favourites?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"You pay extra for drinks."},
                  {letter:"B", text:"You must book it in advance."},
                  {letter:"C", text:"You get a reduction if you buy two tickets."},
                  {letter:"D", text:"You can meet the performers."},
                  {letter:"E", text:"You can take part in the show."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things does the speaker say about the Castle Feast?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"Visitors can dance after the meal."},
                  {letter:"B", text:"There is a choice of food."},
                  {letter:"C", text:"Visitors wear historical costume."},
                  {letter:"D", text:"Knives and forks are not used."},
                  {letter:"E", text:"The entertainment includes horse races."}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"G",12:"D",13:"A",14:"E",15:"F",16:"B",17:"B",18:"D",19:"A",20:"D"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Jake Stevens, a holiday company representative, addressing tourists about hotel activities."},
              {sp:"JAKE STEVENS", t:"Recommends dolphin-watching boat trips (dolphins virtually guaranteed, free repeat trip otherwise, 35 euros daily), though this afternoon's trip is already fully booked; describes a 7km guided forest walk with steep climbs, drinks and sandwiches provided, 25 euros every Wednesday; a Thursday cycle trip down Mount Larna, a fast 700-metre descent over 20km not suited to inexperienced cyclists; a free Thursday afternoon local craft tour visiting a jewellery factory and ceramics centre, with optional purchases; a Friday observatory trip (90 euros) with an expert talk on the telescopes, followed by a stop at Sunset Beach for a swim; and daily horse riding near Playa Cortino (35 euros), suitable even for complete beginners, riding along the beach and through the waves."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 17 to 20 before the talk continues."},
              {sp:"JAKE STEVENS", t:"Describes Musical Favourites, the top nightlife attraction, featuring a three-course meal with unlimited free drinks and a show moving from Paris to Las Vegas to Copacabana, ending with a chance to meet the costumed cast; strongly advises booking early due to its popularity, on Friday nights, 50 euros per ticket or 60 for a table by the stage."},
              {sp:"JAKE STEVENS", t:"Describes the Saturday evening Castle Feast in a 12th-century castle courtyard, with gown-clad servers, a whole chicken eaten by hand without cutlery, entertainment from jousting-style horseback competitions, and dancing in the ballroom afterward, which guests can join."},
              {sp:"ANNOUNCER", t:"That is the end of Section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21\u201325",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "A discussion about a Literature for Children course and related books",
                items: [
                  {n:21, q:"What does Trevor find interesting about the purpose of children's literature?", opts:["the fact that authors may not realise what values they're teaching","the fact that literature can be entertaining and educational at the same time","the fact that adults expect children to imitate characters in literature"]},
                  {n:22, q:"Trevor says the module about the purpose of children's literature made him", opts:["analyse some of the stories that his niece reads.","wonder how far popularity reflects good quality.","decide to start writing some children's stories."]},
                  {n:23, q:"Stephanie is interested in the Pictures module because", opts:["she intends to become an illustrator.","she can remember beautiful illustrations from her childhood.","she believes illustrations are more important than words."]},
                  {n:24, q:"Trevor and Stephanie agree that comics", opts:["are inferior to books.","have the potential for being useful.","discourage children from using their imagination."]},
                  {n:25, q:"With regard to books aimed at only boys or only girls, Trevor was surprised", opts:["how long the distinction had gone unquestioned.","how few books were aimed at both girls and boys.","how many children enjoyed books intended for the opposite sex."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 26\u201330",
                inst: "What comment is made about each of these stories?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 26\u201330.",
                mapTitle: "Stories",
                mapNote: "A. translated into many other languages<br>B. hard to read<br>C. inspired a work in a different area of art<br>D. more popular than the author's other works<br>E. original title refers to another book<br>F. started a new genre<br>G. unlikely topic",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:26, label:"Perrault's fairy tales"},
                  {n:27, label:"\"The Swiss Family Robinson\""},
                  {n:28, label:"\"The Nutcracker and The Mouse King\""},
                  {n:29, label:"\"The Lord of the Rings\""},
                  {n:30, label:"\"War Horse\""}
                ]
              }
            ],
            answers: {21:"A",22:"C",23:"A",24:"B",25:"B",26:"F",27:"E",28:"C",29:"B",30:"G"},
            script: [
              {sp:"STEPHANIE", t:"Greets Trevor, explaining she's considering a one-year children's literature course he's currently taking, and wants to learn more."},
              {sp:"TREVOR", t:"Describes the course's six compulsory modules, particularly enjoying the one on the purpose of children's literature \u2014 whether it should entertain, inform factually, or teach values \u2014 finding it fascinating that authors aren't always conscious of the messages their stories convey; explains this inspired him to try writing children's stories himself, purely for personal interest, admiring but not competing with hugely popular series like Harry Potter."},
              {sp:"STEPHANIE", t:"Asks whether illustrations are covered."},
              {sp:"TREVOR", t:"Confirms a Pictures module exists, covering how illustrations can be central to a story."},
              {sp:"STEPHANIE", t:"Recalls vivid childhood illustrations still memorable years later, and explains her love of drawing means she intends to pursue illustration after finishing the course."},
              {sp:"TREVOR", t:"Mentions the module also covers comics, which he's less convinced of compared to books, since books require imagination while comics don't."},
              {sp:"STEPHANIE", t:"Argues comics still serve a purpose for children who otherwise wouldn't read at all, given how visual media-saturated they are."},
              {sp:"TREVOR", t:"Agrees it's better than not reading, though still finds it sad when children skip books."},
              {sp:"STEPHANIE", t:"Asks about gender-targeted books."},
              {sp:"TREVOR", t:"Confirms a module covers this, expressing surprise at how many older books were aimed squarely at only boys (adventure) or only girls (domestic play), reflecting the society of their time."},
              {sp:"STEPHANIE", t:"Agrees the course sounds worthwhile, which Trevor confirms enthusiastically."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 26 to 30 before the discussion continues."},
              {sp:"TREVOR", t:"Asks if Stephanie has been reading children's stories to help decide on the course."},
              {sp:"STEPHANIE", t:"Confirms going back to the late 17th century, including Perrault's fairy tales like Cinderella and Sleeping Beauty, the first stories of their kind, essentially starting the genre; mentions The Swiss Family Robinson, whose English title misleadingly suggests Robinson is a surname, when it actually references Robinson Crusoe, a novel from a century earlier, about a similarly shipwrecked Swiss family."},
              {sp:"TREVOR", t:"Hadn't read that, but asks about Hoffmann's The Nutcracker and the Mouse King."},
              {sp:"STEPHANIE", t:"Confirms it, noting it inspired Tchaikovsky's ballet The Nutcracker, and has some bizarre elements."},
              {sp:"TREVOR", t:"Names Oscar Wilde's The Happy Prince as his favourite children's story, surprisingly moving given Wilde's usual wit."},
              {sp:"STEPHANIE", t:"Agrees, contrasting it with Tolkien's The Lord of the Rings, which she found too long and gave up on after one book, despite Trevor loving it; mentions also reading War Horse, an unusual First World War-set children's story that's nonetheless been very successful."},
              {sp:"ANNOUNCER", t:"That is the end of Section 3. You now have half a minute to check your answers."}
            ]
          },
          4: {
            n: 4,
            label: "Section 4",
            qlabel: "Questions 31\u201340",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 31\u201340",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "The hunt for sunken settlements and ancient shipwrecks",
                groups: [
                  {
                    heading: "ATLIT-YAM",
                    items: [
                      {n:null, before:"was a village on coast of eastern Mediterranean", input:null, after:""},
                      {n:null, before:"thrived until about 7,000 BC", input:null, after:""},
                      {n:null, before:"stone homes had a courtyard", input:null, after:""},
                      {n:31, before:"had a semicircle of large stones round a", input:31, after:""},
                      {n:null, before:"cause of destruction unknown - now under the sea", input:null, after:""},
                      {n:null, before:"biggest settlement from the prehistoric period found on the seabed", input:null, after:""},
                      {n:32, before:"research carried out into structures,", input:32, after:"and human remains"}
                    ]
                  },
                  {
                    heading: "TRADITIONAL AUTONOMOUS UNDERWATER VEHICLES (AUVs)",
                    items: [
                      {n:33, before:"used in the oil industry, e.g. to make", input:33, after:""},
                      {n:34, before:"problems: they were expensive and", input:34, after:""}
                    ]
                  },
                  {
                    heading: "LATEST AUVs",
                    items: [
                      {n:null, before:"much easier to use, relatively cheap, sophisticated", input:null, after:""},
                      {n:null, before:"Tests:", input:null, after:""},
                      {n:35, before:"Marzamemi, Sicily: found ancient Roman ships carrying architectural elements made of", input:35, after:""},
                      {n:null, before:"Underwater internet:", input:null, after:""},
                      {n:36, before:"", input:36, after:"is used for short distance communication, acoustic waves for long distance"},
                      {n:null, before:"plans for communication with researchers by satellite", input:null, after:""},
                      {n:37, before:"AUV can send data to another AUV that has better", input:37, after:", for example"}
                    ]
                  },
                  {
                    heading: "Planned research in Gulf of Baratti",
                    items: [
                      {n:null, before:"to find out more about wrecks of ancient Roman ships, including", input:null, after:""},
                      {n:38, before:"one carrying", input:38, after:"supplies; tablets may have been used for cleaning the"},
                      {n:39, before:"", input:39, after:""},
                      {n:40, before:"others carrying containers of olive oil or", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"spring",32:"tools",33:"maps",34:"heavy",35:"marble",36:"light",37:"cameras",38:"medical",39:"eyes",40:"wine"},
            script: [
              {sp:"SPEAKER", t:"Introduces marine archaeology, the study of human interaction with seas, lakes and rivers through ships, cargoes, and related remains, illustrated by Atlit-Yam, a thriving eastern Mediterranean coastal village until around 7,000 BC, whose residents kept cattle, fished, stored grain, and had wells, stone courtyard houses, and an impressive semicircle of seven half-tonne stones around a spring, likely used ceremonially."},
              {sp:"SPEAKER", t:"Explains Atlit-Yam's destruction, whether by sudden tsunami or gradual flooding from rising sea levels, remains unclear, but it now lies 10 metres deep under Mediterranean sand, described as the largest, best-preserved prehistoric seabed settlement found, with research into its structures, tools, and human remains revealing much about how the village functioned and even the diseases residents suffered."},
              {sp:"SPEAKER", t:"Explains that finding more such settlements is difficult; underwater research once relied on divers, but autonomous underwater vehicles (AUVs), used for example in the oil industry to make seabed maps using sensors like compasses and sonar, transformed the field \u2014 older versions were expensive and heavy, requiring launch from large vessels with winches, but newer AUVs are cheaper, more manoeuvrable, launchable from shore, and sophisticated enough to communicate and coordinate survey strategies with each other."},
              {sp:"SPEAKER", t:"Describes a 2015 trial where three AUVs searched for wrecks at Marzamemi, Sicily, mapping the site of a 6th-century Roman ship carrying prefabricated marble elements for a church, along with other ships carrying the same material; explains underwater communication challenges, since Wi-Fi's electromagnetic waves barely travel underwater, requiring light for short distances and acoustic waves for longer ones, alongside emerging systems where AUVs relay data to a surfacing AUV that beams it home via satellite, or where an AUV finding an intriguing object shares its coordinates with a nearby AUV carrying better cameras for closer inspection."},
              {sp:"SPEAKER", t:"Describes planned AUV deployment in the Gulf of Baratti, Italy, where a 2,000-year-old Roman vessel carrying medical supplies was found in 1974, including tablets likely dissolved to make an eye-cleansing liquid; mentions other nearby Roman wrecks carrying terracotta containers of olive oil or wine, of which often only the containers remain, the wooden ships themselves long buried under seabed silt."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      }
    }
  }
});
