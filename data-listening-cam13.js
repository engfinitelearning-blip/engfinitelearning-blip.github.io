// EngFinite Learning — Listening Test Data (CAM13)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam13: {
    tests: {
      1: {
        title: "Cambridge IELTS 13 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2013%20test%201%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "table",
                qlabel: "Questions 1–10",
                inst: "Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "COOKERY CLASSES",
                headers: ["Cookery Class","Focus","Other Information"],
                rows: [
                  {
                    cells: [
                      [{text:"(Example) The Food Studio"}],
                      [{text:"how to"},{input:1},{text:"and cook with seasonal products"}],
                      [{text:"small classes<br>also offers"},{input:2},{text:"classes<br>clients who return get a"},{input:3},{text:"discount"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Bond's Cookery School"}],
                      [{text:"food that is"},{input:4}],
                      [{text:"includes recipes to strengthen your"},{input:5},{text:"<br>they have a free"},{input:6},{text:"every Thursday"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"The"},{input:7},{text:"Centre"}],
                      [{text:"mainly"},{input:8},{text:"food"}],
                      [{text:"located near the"},{input:9},{text:"<br>a special course in skills with a"},{input:10},{text:"is sometimes available"}]
                    ]
                  }
                ]
              }
            ],
            answers: {1:"choose",2:"private",3:"20%",4:"healthy",5:"bones",6:"lecture",7:"Arretsa",8:"vegetarian",9:"market",10:"knife"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a phone call between a woman asking about one-day cookery classes and Mike, an official at a tourist information centre; the Food Studio example has already been filled in before the recording proper begins."},
              {sp:"OFFICIAL", t:"Describes the Food Studio's classes: small, focused on seasonal produce, teaching both how to choose and how to cook it; confirms private lessons are available, though most attendees enjoy the social side of the group class; mentions returning clients get a 20 percent discount on a further class."},
              {sp:"WOMAN", t:"Asks about class sizes and whether private lessons are possible."},
              {sp:"OFFICIAL", t:"Introduces Bond's Cookery School, newly opened six months ago, which focuses on healthy cooking with specialist staff, including recipes designed to strengthen bones rather than for weight loss; mentions a free public lecture every Thursday evening at 7:30, no booking required."},
              {sp:"WOMAN", t:"Asks whether Bond's classes are diet-focused, and whether there's a website to find out more."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 7 to 10 before the second half of the conversation continues."},
              {sp:"OFFICIAL", t:"Introduces the Arretsa Centre, located next to the market, which mainly specialises in vegetarian dishes though it also covers some meat and fish cookery; mentions a popular two-hour knife-skills course covering buying, sharpening and chopping techniques, which books up quickly."},
              {sp:"WOMAN", t:"Recognises the Arretsa Centre as being near the market and expresses interest in learning more about vegetarian cooking."},
              {sp:"ANNOUNCER", t:"That is the end of Section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11–13",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Traffic Changes in Granford",
                items: [
                  {n:11, q:"Why are changes needed to traffic systems in Granford?", opts:["The number of traffic accidents has risen.","The amount of traffic on the roads has increased.","The types of vehicles on the roads have changed."]},
                  {n:12, q:"In a survey, local residents particularly complained about", opts:["dangerous driving by parents.","pollution from trucks and lorries.","inconvenience from parked cars."]},
                  {n:13, q:"According to the speaker, one problem with the new regulations will be", opts:["raising money to pay for them.","finding a way to make people follow them.","getting the support of the police."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 14–20",
                inst: "Label the map below.<br>Choose the correct letter, <b>A–I</b>, next to Questions 14–20.",
                mapTitle: "Proposed traffic changes in Granford",
                mapImage: "data:image/jpeg;base64,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7T1kr718uP8AuL/3zVe4sLK4XbPZ20n+/CDQB+avwS+O3jH4T6ReaPothp1/ZXc/2jZexu3lyYCllKlfQV6F/wANofEX/oWfDn/fuX/45X2//YWiN97R9P8A/AVP/iaQ+HfD27f/AGDpefX7LH/hQB8P/wDDZ3xF7+HNB/78y/8AxdSL+2b8RD/zK2it/wABl/xr7dfw94fbrommf+Aif4UsehaGn3NH08fS1T/CgD4kj/bG+I7/AHfCeks/tFL/AI1Ov7YnxJ7+DtJ/79T19sDSdLBBXTLMY6YgX/CpPsGnh9wsbbd6+UtAHxKP2xfiR/0I+l/98T07/hsL4kd/BOm/9+p6+2vstr/z7Rf98LSm1tP+fSD/AL9rQB8Rn9sn4hL/AMyPpZ+qzUi/tkePu3gvTPwSWvt37HZ/8+kH/fsUhsrP/nyt/wDv0tAHw9cftifEdk/deEdMj9C0UprOP7XvxaPTRtI/8A5P8a+8PsGn/wDPjb/9+loawsG/5crY/wDbJaAPg7/hrn4t/wDQK0n/AMAX/wAab/w198We+laR/wCAb/4195f2bp//AD4Wn/flaT+zNL/6B1p/4Dr/AIUAfCa/tffFUf8AMF0lv+3WSpT+1t8Xu3h/TT/24y19zDTdNBythaf9+VqylvAn3YUH0FAHwkf2r/jKUITwxYIf+wdLXJ/EP4+/F3xp4T1Dwvrtjbx6ffqFmEOmskm0MrYB/Kv0cwtJsX/nmKAPln/gnPDPb+APE6TwyxE6omAyN/zzr6ppKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAMUmBS0UAGKTApaKADFGKKKAEwKMClooATAowKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEwKKWigBKKWigBKKWigBKKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEwKKWigBKKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEwKMClooATAowKWigBKKWigBMCjApaKAEwKMClooATAowKWigBMCjApaKAEopaKAEopaKAEopaKAEowKWigBMCilooASilooATAowKWigAxSYFLRQAmBS4oooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkpaSgBaKTJooA//9k=",
                options: ["A","B","C","D","E","F","G","H","I"],
                items: [
                  {n:14, label:"New traffic lights"},
                  {n:15, label:"Pedestrian crossing"},
                  {n:16, label:"Parking allowed"},
                  {n:17, label:"New 'No Parking' sign"},
                  {n:18, label:"New disabled parking spaces"},
                  {n:19, label:"Widened pavement"},
                  {n:20, label:"Lorry loading/unloading restrictions"}
                ]
              }
            ],
            answers: {11:"B",12:"C",13:"B",14:"E",15:"D",16:"B",17:"G",18:"C",19:"F",20:"I"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Phil Sutton, chairman of the Highways Committee, addressing residents about proposed traffic and parking changes in Granford."},
              {sp:"PHIL SUTTON", t:"Explains the changes are prompted by a general rise in overall traffic volume, not specifically an increase in accidents, partly linked to hospital construction traffic; a resident survey found the top complaint was reduced visibility from parked cars along roads, ahead of concerns about school-related congestion or noise and fumes from lorries; notes the proposals fit within budget, but ensuring compliance with the new rules, with police assistance, remains an ongoing challenge."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 14 to 20 before the talk continues."},
              {sp:"PHIL SUTTON", t:"Describes the plan using a map of central Granford: a new set of traffic lights will be added at the School Road junction, in addition to the existing lights at the Station Road junction; a new pedestrian crossing will go on the High Street in front of the supermarket rather than on School Road outside the school, to avoid congestion; parking will now be allowed outside the library on the High Street, while a new no-parking sign will restrict parking for 25 metres near the school entrance on School Road to improve visibility on the bend; two new disabled parking spaces will be added on the side road near the bank, replacing the current spaces outside the supermarket that are also used by lorries; the pavement on School Road will be widened by half a metre on the bend before the school; and lorries will only be allowed to load and unload at the School Road supermarket before 8am, with the High Street supermarket's existing arrangement unchanged."},
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
                qlabel: "Questions 21–25",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Seed germination experiment",
                items: [
                  {n:21, q:"Why is Jack interested in investigating seed germination?", opts:["He may do a module on a related topic later on.","He wants to have a career in plant science.","He is thinking of choosing this topic for his dissertation."]},
                  {n:22, q:"Jack and Emma agree the main advantage of their present experiment is that it can be", opts:["described very easily.","carried out inside the laboratory.","completed in the time available."]},
                  {n:23, q:"What do they decide to check with their tutor?", opts:["whether their aim is appropriate","whether anyone else has chosen this topic","whether the assignment contributes to their final grade"]},
                  {n:24, q:"They agree that Graves' book on seed germination is disappointing because", opts:["it fails to cover recent advances in seed science.","the content is irrelevant for them.","its focus is very theoretical."]},
                  {n:25, q:"What does Jack say about the article on seed germination by Lee Hall?", opts:["The diagrams of plant development are useful.","The analysis of seed germination statistics is thorough.","The findings on seed germination after fires are surprising."]}
                ]
              },
              {
                type: "flowchart",
                qlabel: "Questions 26–30",
                inst: "Complete the flowchart below.<br>Choose the correct letter, <b>A–H</b>, next to Questions 26–30.",
                title: "Stages in the experiment",
                mapNote: "<b>A.</b> container&nbsp;&nbsp; <b>B.</b> soil&nbsp;&nbsp; <b>C.</b> weight&nbsp;&nbsp; <b>D.</b> condition&nbsp;&nbsp; <b>E.</b> height&nbsp;&nbsp; <b>F.</b> colour&nbsp;&nbsp; <b>G.</b> types&nbsp;&nbsp; <b>H.</b> depths",
                options: ["A","B","C","D","E","F","G","H"],
                boxes: [
                  {
                    heading: "",
                    items: [
                      {parts: [{text:"Select seeds of different"},{input:26},{text:"and sizes."}]},
                      {parts: [{text:"Measure and record the"},{input:27},{text:"and size of each one."}]},
                      {parts: [{text:"Decide on the"},{input:28},{text:"to be used."}]},
                      {parts: [{text:"Use a different"},{input:29},{text:"for each seed and label it."}]},
                      {parts: [{text:"After about 3 weeks, record the plant's"},{input:30},{text:"."}]},
                      {parts: [{text:"Investigate the findings."}]}
                    ]
                  }
                ]
              }
            ],
            answers: {21:"A",22:"C",23:"B",24:"C",25:"B",26:"G",27:"C",28:"H",29:"A",30:"E"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. Two biology students, Emma and Jack, discuss an experiment they are going to do together on seed germination."},
              {sp:"JACK", t:"Suggests looking at seed germination — partly because there's an optional 3rd-year module on seed structure and function he might take, which would let him skip a dissertation module (not primarily because he wants a career in plant science, though that is a longer-term goal)."},
              {sp:"JACK", t:"Proposes investigating the relationship between seed size and the way seeds are planted, planting different sized seeds in different ways to compare growth."},
              {sp:"EMMA", t:"Agrees this needs time for seeds to come up, and Jack notes that starting now should be fine — many other possible experiments need much longer, making this one a good choice mainly because it can be completed in the available time (not because it's easy to describe or needs special lab facilities, which they have plenty of anyway)."},
              {sp:"JACK", t:"Says they need to check with the tutor that no one else is doing the same topic, since the assignment is worth 5% (Emma corrects his guess of 10%) of their final mark and it would be boring if everyone chose it — so the main thing to check is whether anyone else has picked this topic, not whether their aim is appropriate or how much it's worth."},
              {sp:"EMMA", t:"Says she found the Graves book on seed germination hard to follow because it was heavily theoretical, when she'd expected something more practical — Jack agrees, though he notes it does usefully cover recent findings on genetically modified seeds."},
              {sp:"JACK", t:"Mentions an article by Lee Hall about seeds that only germinate after a fire — he was impressed by how detailed and thorough Hall's analysis was, comparing the timing of fires with the proportion of seeds that germinated. Emma asks if that was the article with clear diagrams of early plant development stages, but Jack says those diagrams were in a different article."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 26 to 30."},
              {sp:"EMMA", t:"Moves on to planning the experimental procedure, noting they need to get started soon."},
              {sp:"JACK", t:"Says the first step is choosing their seeds — vegetable seeds of about four different types, none the same size."},
              {sp:"EMMA", t:"Agrees four types should be enough, with a good number of seeds of each."},
              {sp:"JACK", t:"Says for each seed they need to record its weight and measure its dimensions (size) carefully."},
              {sp:"EMMA", t:"Notes this will be time-consuming, and that they also need to decide on the planting depths — right on the surface, a few millimetres down, or several centimetres."},
              {sp:"JACK", t:"Asks whether several seeds can share one plant pot; Emma says no — each seed needs its own container, which they'll label with different coloured labels."},
              {sp:"JACK", t:"Estimates germination will take about three weeks depending on weather, after which they'll record whether the plants have come up and measure how tall they've grown (height)."},
              {sp:"EMMA", t:"Says the final step is then to look at the numbers and see if there's any relationship between them."},
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
                notesTitle: "Effects of urban environments on animals",
                groups: [
                  {
                    heading: "Introduction",
                    items: [
                      {n:31, before:"Recent urban developments represent massive environmental changes. It was previously thought that only a few animals were suitable for city life, e.g. the", input:31, after:"– because of its general adaptability"},
                      {n:32, before:"the pigeon – because walls of city buildings are similar to", input:32, after:""},
                      {n:33, before:"In fact, many urban animals are adapting with unusual", input:33, after:"."}
                    ]
                  },
                  {
                    heading: "Recent research",
                    items: [
                      {n:null, before:"Emilie Snell-Rood studied small urbanised mammal specimens from museums in Minnesota.", input:null, after:""},
                      {n:34, before:"She found the size of their", input:34, after:"had increased."},
                      {n:35, before:"She suggests this may be due to the need to locate new sources of", input:35, after:"and to deal with new dangers."},
                      {n:36, before:"Catarina Miranda focused on the", input:36, after:"of urban and rural blackbirds."},
                      {n:37, before:"She found urban birds were often braver, but were afraid of situations that were", input:37, after:"."},
                      {n:null, before:"Jonathan Atwell studies how animals respond to urban environments.", input:null, after:""},
                      {n:38, before:"He found that some animals respond to", input:38, after:"by producing lower levels of hormones."},
                      {n:39, before:"Sarah Partan's team found urban squirrels use their", input:39, after:"to help them communicate."}
                    ]
                  },
                  {
                    heading: "Long-term possibilities",
                    items: [
                      {n:40, before:"Species of animals may develop which are unique to cities. However, some changes may not be", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"crow",32:"cliffs",33:"speed",34:"brains",35:"food",36:"behaviour",37:"new",38:"stress",39:"tails",40:"permanent"},
            script: [
              {sp:"SPEAKER", t:"Introduces a lecture on how animals are adapting to urban environments, noting that these changes represent evolutionary-scale upheaval compressed into a short time; early examples of adaptable urban species include the crow, known for learning new skills, and the pigeon, which perches on city buildings much as it once used cliffs; describes ongoing research into how quickly, not just which, animals are adapting."},
              {sp:"SPEAKER", t:"Describes Emilie Snell-Rood's research at the University of Minnesota, comparing museum specimens of urban small mammals collected over the last century; found an increase in brain size relative to rural mammals, with no other body-size changes, which she links to the cognitive demands of finding food and coping with new dangers in cities."},
              {sp:"SPEAKER", t:"Describes Catarina Miranda's research at the Max Planck Institute comparing the behaviour of urban and rural blackbirds; found urban blackbirds bolder overall, but more fearful specifically of unfamiliar situations."},
              {sp:"SPEAKER", t:"Describes Jonathan Atwell's research at Indiana University on how various animals respond physiologically to urban stress, finding reduced levels of hormones such as corticosterone under stress."},
              {sp:"SPEAKER", t:"Describes Sarah Partan's research on urban squirrels, finding that tail-waving as a communication signal is far more common in cities than in the countryside, possibly because it's effective in noisy environments."},
              {sp:"SPEAKER", t:"Concludes by noting two possibilities for the long term: entirely new urban-specific species may emerge, or some adaptations may not persist once no longer needed."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      2: {
        title: "Cambridge IELTS 13 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2013%20test%202%20.mp3",
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
                notesTitle: "SOUTH CITY CYCLING CLUB",
                example: {label: "Name of club secretary:", value: "Jim Hunter"},
                groups: [
                  {
                    heading: "Membership",
                    items: [
                      {n:1, before:"Full membership costs $260; this covers cycling and", input:1, after:"all over Australia"},
                      {n:null, before:"Recreational membership costs $108", input:null, after:""},
                      {n:2, before:"Cost of membership includes the club fee and", input:2, after:""},
                      {n:3, before:"The club kit is made by a company called", input:3, after:""}
                    ]
                  },
                  {
                    heading: "Training rides",
                    items: [
                      {n:null, before:"Chance to improve cycling skills and fitness", input:null, after:""},
                      {n:4, before:"Level B: speed about", input:4, after:"kph"}
                    ]
                  },
                  {
                    heading: "Weekly sessions",
                    items: [
                      {n:5, before:"Tuesdays at 5.30 am, meet at the", input:5, after:""},
                      {n:6, before:"Thursdays at 5.30 am, meet at the entrance to the", input:6, after:""}
                    ]
                  },
                  {
                    heading: "Further information",
                    items: [
                      {n:null, before:"Rides are about an hour and a half", input:null, after:""},
                      {n:7, before:"Members often have", input:7, after:"together afterwards"},
                      {n:8, before:"There is not always a", input:8, after:"with the group on these rides"},
                      {n:9, before:"Check and print the", input:9, after:"on the website beforehand"},
                      {n:10, before:"Bikes must have", input:10, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"races",2:"insurance",3:"Jerriz",4:"25",5:"stadium",6:"park",7:"coffee",8:"leader",9:"route",10:"lights"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a woman phoning the secretary of a cycling club, Jim Hunter, to ask about membership; the example (Jim Hunter's name) has already been filled in before the recording proper begins."},
              {sp:"WOMAN", t:"Asks about joining the club for herself."},
              {sp:"JIM", t:"Describes full membership at $260, covering ordinary cycling plus races in the city and elsewhere in Australia; since the woman is more of a casual cyclist, recommends recreational membership instead, at $108 for adults over 19 (or $95 under 19), paid quarterly, upgradeable later; explains both types include a $20 club fee and insurance in case of accidents."},
              {sp:"WOMAN", t:"Chooses recreational membership and asks about club activities."},
              {sp:"JIM", t:"Confirms members may wear the club's green-and-white kit, which isn't sold at the club itself but made to order by a Brisbane company called Jerriz, orderable online using a membership number; describes daily training rides at three speed levels \u2014 Level A around 30\u201335 km/h, Level B around 25 km/h, Level C (novices) around 15 km/h."},
              {sp:"WOMAN", t:"Identifies herself as Level B and asks about session times."},
              {sp:"JIM", t:"Describes two weekly Level B sessions, both starting at 5:30am: Tuesdays, meeting at the stadium, and Thursdays, meeting at the main gate to the park, near the shopping mall."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 7 to 10 before the conversation continues."},
              {sp:"WOMAN", t:"Asks how long the rides last."},
              {sp:"JIM", t:"Explains rides last about ninety minutes, easy to fit in before work, and members often go for coffee together afterwards; notes rides don't always have a designated leader since members support one another; explains riders should check the club website beforehand, where each week's route is clearly marked and can be printed out, though it varies slightly week to week; advises bringing water and a phone (not to be used while riding), and in winter, making sure bikes have lights since it's still dark when rides set out."},
              {sp:"WOMAN", t:"Thanks Jim and confirms she'd like to join, asking how to proceed."},
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
                qlabel: "Questions 11\u201316",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Information on company volunteering projects",
                items: [
                  {n:11, q:"How much time for volunteering does the company allow per employee?", opts:["two hours per week","one day per month","8 hours per year"]},
                  {n:12, q:"In feedback almost all employees said that volunteering improved their", opts:["chances of promotion.","job satisfaction.","relationships with colleagues."]},
                  {n:13, q:"Last year some staff helped unemployed people with their", opts:["literacy skills.","job applications.","communication skills."]},
                  {n:14, q:"This year the company will start a new volunteering project with a local", opts:["school.","park.","charity."]},
                  {n:15, q:"Where will the Digital Inclusion Day be held?", opts:["at the company's training facility","at a college","in a community centre"]},
                  {n:16, q:"What should staff do if they want to take part in the Digital Inclusion Day?", opts:["fill in a form","attend a training workshop","get permission from their manager"]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things are mentioned about the participants on the last Digital Inclusion Day?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"They were all over 70."},
                  {letter:"B", text:"They never used their computer."},
                  {letter:"C", text:"Their phones were mostly old-fashioned."},
                  {letter:"D", text:"They only used their phones for making calls."},
                  {letter:"E", text:"They initially showed little interest."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO activities on the last Digital Inclusion Day did participants describe as useful?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"learning to use tablets"},
                  {letter:"B", text:"communicating with family"},
                  {letter:"C", text:"shopping online"},
                  {letter:"D", text:"playing online games"},
                  {letter:"E", text:"sending emails"}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"C",12:"B",13:"C",14:"B",15:"B",16:"A",17:"C",18:"E",19:"B",20:"D"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a company manager talking to new staff about volunteering for local charity projects."},
              {sp:"SPEAKER", t:"Explains the company has run the volunteering scheme for five years; the company pays for 8 hours per year of volunteering time, which can be taken flexibly, though some staff also give up their own free time; notes feedback has been overwhelmingly positive, with almost everyone saying it made them feel more motivated at work (job satisfaction), and some mentioning the benefit for their CVs."},
              {sp:"SPEAKER", t:"Describes last year's Get Working project helping unemployed people improve telephone and communication skills, useful for job interviews; introduces this year's new project, a conservation project in Redfern Park, alongside continuing education and reading projects."},
              {sp:"SPEAKER", t:"Announces the annual Digital Inclusion Day, to be held this year at the ICT suite of Hill College rather than the company's own training facility, since it holds more people; over 60 people from the Silver Age Community Centre are expected; interested staff should complete a form on the volunteering section of the website, and will be paired with an experienced volunteer if new to it."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 17 to 20 before the talk continues."},
              {sp:"SPEAKER", t:"Describes last year's Digital Inclusion Day participants: mostly in their 70s, though ages ranged wider; many owned computers and mobile phones but with outdated models, and knew basic functions like texting but not newer features; most were initially dismissive about learning new skills, though this changed; feedback was very positive, especially about feeling more confident using social media to stay in touch with grandchildren, and enjoying online games for making friends and mental stimulation; participants were less enthusiastic about ordering groceries online, though acknowledged it could help if unwell or in bad weather; several had unused tablets they wanted help with, which will be included in this year's event."},
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
                notesTitle: "Planning a presentation on nanotechnology",
                items: [
                  {n:21, q:"Russ says that his difficulty in planning the presentation is due to", opts:["his lack of knowledge about the topic.","his uncertainty about what he should try to achieve.","the short time that he has for preparation."]},
                  {n:22, q:"Russ and his tutor agree that his approach in the presentation will be", opts:["to concentrate on how nanotechnology is used in one field.","to follow the chronological development of nanotechnology.","to show the range of applications of nanotechnology."]},
                  {n:23, q:"In connection with slides, the tutor advises Russ to", opts:["talk about things that he can find slides to illustrate.","look for slides to illustrate the points he makes.","consider omitting slides altogether."]},
                  {n:24, q:"They both agree that the best way for Russ to start his presentation is", opts:["to encourage the audience to talk.","to explain what Russ intends to do.","to provide an example."]},
                  {n:25, q:"What does the tutor advise Russ to do next while preparing his presentation?", opts:["summarise the main point he wants to make","read the notes he has already made","list the topics he wants to cover"]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 26\u201330",
                inst: "What comments do the speakers make about each of the following aspects of Russ's previous presentation?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 26\u201330.",
                mapTitle: "Comments on Russ's previous presentation",
                mapNote: "A. lacked a conclusion<br>B. useful in the future<br>C. not enough<br>D. sometimes distracting<br>E. showed originality<br>F. covered a wide range<br>G. not too technical",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:26, label:"structure"},
                  {n:27, label:"eye contact"},
                  {n:28, label:"body language"},
                  {n:29, label:"choice of words"},
                  {n:30, label:"handouts"}
                ]
              }
            ],
            answers: {21:"B",22:"A",23:"C",24:"C",25:"A",26:"A",27:"C",28:"D",29:"G",30:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a student, Russ, consulting his tutor about a class presentation on nanotechnology, due the following week."},
              {sp:"RUSS", t:"Explains he's struggling: having researched the topic thoroughly, he now has too much material for his allotted 20 minutes, and is unsure whether to give a general introduction or focus on one aspect that fascinates him."},
              {sp:"TUTOR", t:"Says either approach could work, but Russ needs to decide clearly."},
              {sp:"RUSS", t:"Decides on an overview."},
              {sp:"TUTOR", t:"Suggests working through developments chronologically, or covering the many applications of nanotechnology."},
              {sp:"RUSS", t:"Mentions examples like water-repellent camera coatings and stronger, lighter motorcycle helmets."},
              {sp:"TUTOR", t:"Suggests instead focusing on nanotechnology's impact in one particular field, such as medicine or space exploration, which Russ agrees would make it easier to focus."},
              {sp:"RUSS", t:"Asks about using slides."},
              {sp:"TUTOR", t:"Advises that slides aren't essential and risk shaping the talk around whatever images can be found, or wasting time searching; suggests it may be better to leave them out altogether."},
              {sp:"RUSS", t:"Considers starting by asking the audience what they already know about nanotechnology, rather than the usual outline-first approach."},
              {sp:"TUTOR", t:"Warns that would only work with a much longer time slot, and the responses may not be usable; suggests instead opening with a specific example of nanotechnology in use to capture attention, which Russ agrees with."},
              {sp:"RUSS", t:"Asks what to do next, given he must plan the presentation over the next two days."},
              {sp:"TUTOR", t:"Advises setting aside all his notes and writing one short sentence that captures the whole presentation's central idea, then building the content around that, adjusting the sentence later if needed."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 26 to 30 before the discussion continues."},
              {sp:"TUTOR", t:"Turns to Russ's previous presentation, about an experiment; notes its structure ended abruptly with no proper conclusion; says Russ made too little eye contact, looking down at notes too often; describes his body language as sometimes distracting, turning his back on the audience to view slides and repeatedly scratching his head."},
              {sp:"RUSS", t:"Asks about the language he used, since he simplified things for an audience unfamiliar with the topic."},
              {sp:"TUTOR", t:"Confirms the language came across well \u2014 specialist terms were used but always explained, so not too technical; praises the handouts as a well-thought-out summary that would be useful to refer back to later."},
              {sp:"TUTOR", t:"Wishes Russ well and expects a big improvement next time."},
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
                notesTitle: "Episodic memory",
                groups: [
                  {
                    heading: "Episodic memory",
                    items: [
                      {n:31, before:"the ability to recall details, e.g. the time and", input:31, after:"of past events"},
                      {n:32, before:"different to semantic memory \u2013 the ability to remember general information about the", input:32, after:", which does not involve recalling"},
                      {n:33, before:"", input:33, after:"information"}
                    ]
                  },
                  {
                    heading: "Encoding",
                    items: [
                      {n:null, before:"involves receiving and processing information", input:null, after:""},
                      {n:34, before:"the more", input:34, after:"given to an event, the more successfully it can be encoded"},
                      {n:35, before:"to remember a", input:35, after:", it is useful to have a strategy for encoding such information"}
                    ]
                  },
                  {
                    heading: "Consolidation",
                    items: [
                      {n:null, before:"how memories are strengthened and stored", input:null, after:""},
                      {n:36, before:"most effective when memories can be added to a", input:36, after:"of related information"},
                      {n:37, before:"the", input:37, after:"of retrieval affects the strength of memories"}
                    ]
                  },
                  {
                    heading: "Retrieval",
                    items: [
                      {n:38, before:"memory retrieval often depends on using a prompt, e.g. the", input:38, after:"of an object near to the place where you left your car"}
                    ]
                  },
                  {
                    heading: "Episodic memory impairments",
                    items: [
                      {n:null, before:"these affect people with a wide range of medical conditions", input:null, after:""},
                      {n:39, before:"games which stimulate the", input:39, after:"have been found to help people with schizophrenia"},
                      {n:40, before:"children with autism may have difficulty forming episodic memories \u2013 possibly because their concept of the", input:40, after:"may be absent"},
                      {n:null, before:"memory training may help autistic children develop social skills", input:null, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"location",32:"world",33:"personal",34:"attention",35:"name",36:"network",37:"frequency",38:"colour",39:"brain",40:"self"},
            script: [
              {sp:"SPEAKER", t:"Continues a lecture series on memory, introducing episodic memory \u2014 memory of specific past events, allowing mental time travel, including details like when and where an event happened; illustrates with the example of remembering a restaurant meal."},
              {sp:"SPEAKER", t:"Distinguishes episodic memory from semantic memory, our shared factual knowledge of the world, which unlike episodic memory doesn't rely on recalling personal experience; gives the example that remembering where you parked your car is episodic, while knowing what a car is and how an engine works is semantic."},
              {sp:"SPEAKER", t:"Outlines three stages of episodic memory formation: encoding, consolidation, and retrieval. Encoding is receiving and registering information, and depends heavily on the level of attention given at the time; distraction hampers it; encoding is also aided by using a strategy, such as linking a new name like Charlie to someone you already know with that name."},
              {sp:"SPEAKER", t:"Describes consolidation as the strengthening and storing of encoded memories, most effective when new information can be linked to an existing network of related information; notes that how often memories are retrieved affects how well they're retained, as memories fade if rarely used."},
              {sp:"SPEAKER", t:"Describes retrieval as consciously recalling encoded information, often aided by sensory prompts, such as the colour of a nearby sign helping you recall where you parked."},
              {sp:"SPEAKER", t:"Discusses conditions affecting episodic memory, including Alzheimer's, schizophrenia, and autism; notes that in schizophrenia, medication can control symptoms but episodic memory impairment may still prevent a return to work or study, though brain-stimulating computer games have shown promise in improving it; explains that people with autism often struggle to share personal memories with others, possibly due to an absent sense of self, and that memory-focused treatments may also support their social development."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 13 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2013%20test%203%20.mp3",
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
                notesTitle: "MOVING TO BANFORD CITY",
                example: {label: "Linda recommends living in suburb of:", value: "Dalton"},
                groups: [
                  {
                    heading: "Accommodation",
                    items: [
                      {n:1, before:"Average rent: £", input:1, after:"a month"}
                    ]
                  },
                  {
                    heading: "Transport",
                    items: [
                      {n:2, before:"Linda travels to work by", input:2, after:""},
                      {n:3, before:"Limited", input:3, after:"in city centre"},
                      {n:4, before:"Trains to London every", input:4, after:"minutes"},
                      {n:5, before:"Poor train service at", input:5, after:""}
                    ]
                  },
                  {
                    heading: "Advantages of living in Banford",
                    items: [
                      {n:6, before:"New", input:6, after:"opened recently"},
                      {n:7, before:"", input:7, after:"has excellent reputation"},
                      {n:8, before:"Good", input:8, after:"on Bridge Street"}
                    ]
                  },
                  {
                    heading: "Meet Linda",
                    items: [
                      {n:9, before:"Meet Linda on", input:9, after:"after 5.30 pm"},
                      {n:10, before:"In the", input:10, after:"opposite the station"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"850",2:"bike",3:"parking",4:"30",5:"weekends",6:"cinema",7:"hospital",8:"dentist",9:"Thursday",10:"cafe"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a man, Matt, phoning Linda, a resident of Banford, for advice about moving there; the example (the suburb Dalton) has already been filled in before the recording proper begins."},
              {sp:"MATT", t:"Introduces himself, explains a mutual contact gave him Linda's number, and asks which area to live in."},
              {sp:"LINDA", t:"Recommends her own suburb, Dalton \u2014 nice, not too expensive, with a park; when asked about renting a two-bedroom flat there, says around £850 a month is typical, and no more than £900 excluding bills."},
              {sp:"MATT", t:"Asks about transport links."},
              {sp:"LINDA", t:"Explains she cycles to work in the city centre since it's safe and keeps her fit, whereas driving would mean dealing with barely any parking and heavy rush-hour traffic; mentions a fast train to London every 30 minutes taking 45 minutes, with a decent weekday and late-night service, but weekend engineering works mean a slow bus-and-train replacement via Hadham."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 6 to 10 before the conversation continues."},
              {sp:"LINDA", t:"Describes local advantages: good restaurants, a new cinema that opened only a couple of months ago, a good arts centre, good schools, and a hospital with an excellent reputation, one of the best in the country; offers to share her dentist's details on Bridge Street, whom she's used for years without issue."},
              {sp:"MATT", t:"Thanks her and mentions he and his wife are visiting Banford next week to see estate agents."},
              {sp:"LINDA", t:"Offers to meet and show them around, suggesting Tuesday or Thursday after 5:30pm."},
              {sp:"MATT", t:"Prefers Thursday, since Tuesday he needs to be home before 6pm."},
              {sp:"LINDA", t:"Agrees to meet in the cafe opposite the station, next to the museum, once Matt confirms his train."},
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
                inst: "What advantage does the speaker mention for each of the following physical activities?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 11\u201316.",
                mapTitle: "Advantages of physical activities",
                mapNote: "A. not dependent on season<br>B. enjoyable<br>C. low risk of injury<br>D. fitness level unimportant<br>E. sociable<br>F. fast results<br>G. motivating",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:11, label:"using a gym"},
                  {n:12, label:"running"},
                  {n:13, label:"swimming"},
                  {n:14, label:"cycling"},
                  {n:15, label:"doing yoga"},
                  {n:16, label:"training with a personal trainer"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>For which TWO reasons does the speaker say people give up going to the gym?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"lack of time"},
                  {letter:"B", text:"loss of confidence"},
                  {letter:"C", text:"too much effort required"},
                  {letter:"D", text:"high costs"},
                  {letter:"E", text:"feeling less successful than others"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO pieces of advice does the speaker give for setting goals?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"write goals down"},
                  {letter:"B", text:"have achievable aims"},
                  {letter:"C", text:"set a time limit"},
                  {letter:"D", text:"give yourself rewards"},
                  {letter:"E", text:"challenge yourself"}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"F",12:"D",13:"A",14:"B",15:"C",16:"G",17:"B",18:"C",19:"B",20:"D"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a fitness instructor on the radio discussing different ways to keep fit."},
              {sp:"SPEAKER", t:"Describes gym training as producing a noticeable difference in a relatively short time, though scheduling around crowds can be inconvenient; describes running as accessible to almost anyone regardless of current fitness, doable any time except in snow or ice, though good shoes are a worthwhile investment; describes swimming as usable indoors year-round regardless of season, though it can feel solitary; describes cycling as enjoyable, especially outdoors in a park or countryside, weather permitting; describes yoga as building strength with a lower risk of injury than more active sports, though still challenging, especially for the inflexible; describes a personal trainer as helpful for motivation despite the cost, provided they're properly qualified to avoid injury."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 17 to 20 before the talk continues."},
              {sp:"SPEAKER", t:"Advises against gym membership unless you'll actually use it, since many waste money on unused memberships; argues people don't lose interest in fitness itself, but rather lose confidence and give up hope when progress feels too slow, compounded by underestimating the ongoing effort and commitment required; recommends setting realistic, achievable goals rather than rigid written ones, rewarding yourself when goals are met, and not being discouraged by inevitable setbacks along the way."},
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
                notesTitle: "Project on using natural dyes to colour fabrics",
                items: [
                  {n:21, q:"What first inspired Jim to choose this project?", opts:["textiles displayed in an exhibition","a book about a botanic garden","carpets he saw on holiday"]},
                  {n:22, q:"Jim eventually decided to do a practical investigation which involved", opts:["using a range of dyes with different fibres.","applying different dyes to one type of fibre.","testing one dye and a range of fibres."]},
                  {n:23, q:"When doing his experiments, Jim was surprised by", opts:["how much natural material was needed to make the dye.","the fact that dyes were widely available on the internet.","the time that he had to leave the fabric in the dye."]},
                  {n:24, q:"What problem did Jim have with using tartrazine as a fabric dye?", opts:["It caused a slight allergic reaction.","It was not a permanent dye on cotton.","It was ineffective when used on nylon."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201330",
                inst: "What problem is identified with each of the following natural dyes?<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 25\u201330.",
                mapTitle: "Problems with natural dyes",
                mapNote: "A. It is expensive.<br>B. The colour is too strong.<br>C. The colour is not long-lasting.<br>D. It is very poisonous.<br>E. It can damage the fabric.<br>F. The colour may be unexpected.<br>G. It is unsuitable for some fabrics.<br>H. It is not generally available.",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:25, label:"turmeric"},
                  {n:26, label:"beetroot"},
                  {n:27, label:"Tyrian purple"},
                  {n:28, label:"logwood"},
                  {n:29, label:"cochineal"},
                  {n:30, label:"metal oxide"}
                ]
              }
            ],
            answers: {21:"A",22:"A",23:"A",24:"B",25:"C",26:"F",27:"H",28:"D",29:"A",30:"E"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces textile design student Jim discussing his project on natural dyes with his tutor."},
              {sp:"TUTOR", t:"Asks why Jim chose the topic."},
              {sp:"JIM", t:"Explains he got useful ideas from a textile exhibition at a museum, alongside a longstanding interest in colour dating back to seeing vivid dyed carpets on a family holiday in Turkey; found a book about a Californian botanic garden specialising in dye plants."},
              {sp:"TUTOR", t:"Points out the carpets might not have used natural dyes, and asks about his practical investigation."},
              {sp:"JIM", t:"Explains he initially considered testing only one fibre type against different dyes, but expanded to include cotton, wool and nylon, testing various dyes including some artificial ones for comparison."},
              {sp:"TUTOR", t:"Asks about the experiments."},
              {sp:"JIM", t:"Describes buying some ready-made natural dyes online, which arrived within days, but also making his own \u2014 expecting this to be quick, he was surprised how much raw material was actually needed, such as chopping a large quantity of beetroot for a red dye."},
              {sp:"TUTOR", t:"Suggests food colourings as an alternative."},
              {sp:"JIM", t:"Mentions trying tartrazine, an artificial yellow food dye, on cotton \u2014 it coloured well at first but washed out when rinsed; he abandoned plans to try it on nylon."},
              {sp:"TUTOR", t:"Asks if he was concerned about health and safety, noting tartrazine can occasionally cause allergic reactions."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 25 to 30 before the discussion continues."},
              {sp:"JIM", t:"Describes turmeric as a strong yellow dye, though the tutor notes it fades after a few washes; beetroot, despite staining hands bright red, produced only a disappointing pale cream shade on wool."},
              {sp:"TUTOR", t:"Asks about Tyrian purple."},
              {sp:"JIM", t:"Explains it came from a shellfish and was historically worn only by the powerful due to its rarity; he didn't use it himself, and the tutor notes it's largely been replaced by chemical dyes today."},
              {sp:"TUTOR", t:"Asks about black dyes."},
              {sp:"JIM", t:"Mentions logwood, which required careful fabric preparation and safe handling, since the tutor warns it's extremely dangerous if ingested."},
              {sp:"TUTOR", t:"Asks about an insect-based dye like cochineal."},
              {sp:"JIM", t:"Explains he didn't make it himself due to time constraints and unavailability of the insects locally, but bought the dye online at considerable expense, noting why it's mainly used in small quantities in cooking rather than as a fabric dye; also mentions using metal oxide, letting iron rust in contact with fabric to colour it."},
              {sp:"TUTOR", t:"Notes metal oxide works well on cotton but can weaken the fabric over time, and produces subtle colours that aren't to everyone's taste; praises the amount of work Jim has done."},
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
                notesTitle: "The sleepy lizard (Tiliqua rugosa)",
                groups: [
                  {
                    heading: "Description",
                    items: [
                      {n:null, before:"They are common in Western and South Australia", input:null, after:""},
                      {n:31, before:"They are brown, but recognisable by their blue", input:31, after:""},
                      {n:null, before:"They are relatively large", input:null, after:""},
                      {n:32, before:"Their diet consists mainly of", input:32, after:""},
                      {n:33, before:"Their main predators are large birds and", input:33, after:""}
                    ]
                  },
                  {
                    heading: "Navigation study",
                    items: [
                      {n:34, before:"One study found that lizards can use the", input:34, after:"to help them navigate"}
                    ]
                  },
                  {
                    heading: "Observations in the wild",
                    items: [
                      {n:35, before:"Observations show that these lizards keep the same", input:35, after:"for several years"}
                    ]
                  },
                  {
                    heading: "What people want",
                    items: [
                      {n:null, before:"Possible reasons:", input:null, after:""},
                      {n:36, before:"to improve the survival of their young (but little", input:36, after:"has been noted between parents and children)"},
                      {n:37, before:"to provide", input:37, after:"for female lizards"}
                    ]
                  },
                  {
                    heading: "Tracking study",
                    items: [
                      {n:38, before:"A study was carried out using GPS systems attached to the", input:38, after:"of the lizards"},
                      {n:39, before:"This provided information on the lizards' location and even the number of", input:39, after:"taken"},
                      {n:null, before:"It appeared that the lizards were trying to avoid one another", input:null, after:""},
                      {n:40, before:"This may be in order to reduce chances of", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"tongue",32:"plants",33:"snakes",34:"sky",35:"partner",36:"contact",37:"protection",38:"tail",39:"steps",40:"injury"},
            script: [
              {sp:"SPEAKER", t:"Continues a series on reptiles, turning today to the sleepy lizard (Tiliqua rugosa), so named for its slow movements and habit of dozing under rocks or in the sun; describes it as common in Western and South Australia, brown in colour unlike smaller, faster European lizards, distinctive for its dark blue tongue against a bright pink mouth lining, and notably larger than most European lizards."},
              {sp:"SPEAKER", t:"Describes its varied diet of insects and small animals, though mostly plants; despite strong jaws capable of crushing beetles and snail shells, it has predators \u2014 historically large birds, now more commonly snakes \u2014 as well as the man-made threat of being killed crossing highways."},
              {sp:"SPEAKER", t:"Describes Michael Freake's navigation study at Flinders University, finding that lizards moved some distance from home could usually find their way back using only the sky, without needing ground landmarks."},
              {sp:"SPEAKER", t:"Describes unusual mating habits observed in the wild: lizards tend to be monogamous, returning to the same partner year after year, staying together before and after their young hatch; considers possible reasons \u2014 protecting the young is one theory, though little contact has actually been observed between parents and hatchlings, weakening that idea; another theory is that larger, stronger males in these pairings may be providing protection for females from other males, though this remains uncertain."},
              {sp:"SPEAKER", t:"Describes a GPS tracking study the speaker was personally involved in, attaching tiny GPS devices to lizards' tails and tracking them for 12 days, gathering data on location and even step counts; unexpectedly found far fewer meetings between lizards than predicted, suggesting active avoidance, possibly because male lizards can seriously injure one another, making avoidance a form of self-preservation \u2014 though more data is needed to confirm this."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 13 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2013%20test%204%20.mp3",
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
                notesTitle: "ALEX'S TRAINING",
                example: {label: "Alex completed his training in", value: "2014"},
                groups: [
                  {
                    heading: "About the applicant",
                    items: [
                      {n:1, before:"At first, Alex did his training in the", input:1, after:"department."},
                      {n:2, before:"Alex didn't have a qualification from school in", input:2, after:"."},
                      {n:3, before:"Alex thinks he should have done the diploma in", input:3, after:"skills."},
                      {n:4, before:"Age of other trainees: the youngest was", input:4, after:"."}
                    ]
                  },
                  {
                    heading: "Benefits of doing training at JPNW",
                    items: [
                      {n:null, before:"Lots of opportunities because of the size of the organisation.", input:null, after:""},
                      {n:5, before:"Trainees receive the same amount of", input:5, after:"as permanent staff."},
                      {n:null, before:"The training experience increases people's confidence a lot.", input:null, after:""},
                      {n:6, before:"Trainees go to", input:6, after:"one day per month."},
                      {n:7, before:"The company is in a convenient", input:7, after:"."}
                    ]
                  },
                  {
                    heading: "Advice for interview",
                    items: [
                      {n:8, before:"Don't wear", input:8, after:"."},
                      {n:9, before:"Don't be", input:9, after:"."},
                      {n:10, before:"Make sure you", input:10, after:"."}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Finance",2:"maths",3:"business",4:"17",5:"holiday",6:"college",7:"location",8:"jeans",9:"late",10:"smile"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces a phone call between Martha, applying for a JPNW traineeship, and Alex, who did the same training some years earlier; the example (Alex's training year, 2014) has already been filled in before the recording proper begins."},
              {sp:"MARTHA", t:"Explains she's calling for advice, as she's applying for the same JPNW training Alex did."},
              {sp:"ALEX", t:"Confirms he trained in 2014 and still works there; explains his initial training was in Finance before moving to customer services after two years."},
              {sp:"MARTHA", t:"Notes that's the same department she's applying for, and asks if he enjoyed it."},
              {sp:"ALEX", t:"Admits he was nervous at first, partly due to having failed maths at school, though it didn't matter since he learned through on-the-job courses; mentions taking the IT skills diploma but wishing he'd taken the business skills diploma Martha's considering instead."},
              {sp:"MARTHA", t:"Asks about the other trainees."},
              {sp:"ALEX", t:"Describes about 20 trainees starting together, mostly aged 18\u201320, with only one younger at 17; made good friends, and notes the size of the organisation meant many different areas to work in."},
              {sp:"MARTHA", t:"Asks about pay, aware trainees earn a lower minimum wage."},
              {sp:"ALEX", t:"Confirms the lower wage, but notes trainees get the same holiday entitlement as regular staff, with pay rising significantly if offered a permanent job afterward; agrees the real value is the confidence and variety gained, plus one day a month at college with support from both tutor and manager, and praises the location, close to the train station."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 8 to 10 before the conversation continues."},
              {sp:"ALEX", t:"Asks if Martha has an interview date."},
              {sp:"MARTHA", t:"Confirms the 23rd of the month, and asks what to wear."},
              {sp:"ALEX", t:"Advises against anything too casual like jeans, suggesting a jacket with a skirt or trousers instead; also advises arriving in plenty of time since lateness isn't tolerated, and to smile even if nervous, since it helps people respond better."},
              {sp:"MARTHA", t:"Jokes she'll practice smiling in the mirror, and thanks Alex."},
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
                qlabel: "Questions 11\u201316",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "The Snow Centre",
                items: [
                  {n:11, q:"Annie recommends that when cross-country skiing, the visitors should", opts:["get away from the regular trails.","stop to enjoy views of the scenery.","go at a slow speed at the beginning."]},
                  {n:12, q:"What does Annie tell the group about this afternoon's dog-sled trip?", opts:["Those who want to can take part in a race.","Anyone has the chance to drive a team of dogs.","One group member will be chosen to lead the trail."]},
                  {n:13, q:"What does Annie say about the team relay event?", opts:["All participants receive a medal.","The course is 4 km long.","Each team is led by a teacher."]},
                  {n:14, q:"On the snow-shoe trip, the visitors will", opts:["visit an old gold mine.","learn about unusual flowers.","climb to the top of a mountain."]},
                  {n:15, q:"The cost of accommodation in the mountain hut includes", opts:["a supply of drinking water.","transport of visitors' luggage.","cooked meals."]},
                  {n:16, q:"If there is a storm while the visitors are in the hut, they should", opts:["contact the bus driver.","wait until the weather improves.","use the emergency locator beacon."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 17\u201320",
                inst: "What information does Annie give about skiing on each of the following mountain trails?<br>Choose the correct letter, <b>A\u2013F</b>, next to Questions 17\u201320.",
                mapTitle: "Information about mountain trails",
                mapNote: "A. It has a good place to stop and rest.<br>B. It is suitable for all abilities.<br>C. It involves crossing a river.<br>D. It demands a lot of skill.<br>E. It may be closed in bad weather.<br>F. It has some very narrow sections.",
                options: ["A","B","C","D","E","F"],
                items: [
                  {n:17, label:"Highland Trail"},
                  {n:18, label:"Pine Trail"},
                  {n:19, label:"Stony Trail"},
                  {n:20, label:"Loser's Trail"}
                ]
              }
            ],
            answers: {11:"A",12:"B",13:"A",14:"A",15:"A",16:"B",17:"B",18:"D",19:"A",20:"E"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces Annie, a staff member at a Snow Centre in New Zealand, welcoming a group of visitors."},
              {sp:"ANNIE", t:"Welcomes the group, mentions plenty of activities during the week; describes cross-country skiing as the most popular activity, mostly on flat ground, encouraging visitors to leave the marked trails and explore independently as an experience not to be missed, going at whatever pace suits them."},
              {sp:"ANNIE", t:"Describes the afternoon dog-sled trip, where anyone who wants to can have their own team and learn to drive them behind the lead guide, or simply ride as a passenger; mentions the weekend team relay event, open to all including a visiting school and its teachers, with a medal for every participant regardless of placing, in teams of two to four completing four laps."},
              {sp:"ANNIE", t:"Describes the final snow-shoe expedition to Mount Frenner, an old gold-mining area with few remaining traces, and a long but gentle ascent usually taking a couple of days round trip, with an overnight stay in a mountain hut included in the package, equipped with cooking facilities, firewood, and drinking water (though melted snow is recommended for washing to conserve supplies); luggage can be taken up by snowmobile for a $10 per-person fee, and visitors must bring their own food; in case of storms, visitors should simply stay in the hut rather than worry about the return bus, using the emergency locator beacon only for genuine emergencies like illness or injury."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 17 to 20 before the talk continues."},
              {sp:"ANNIE", t:"Describes the ski trails: Highland Trail, directly accessible and suitable for complete beginners as well as experts practicing technique; Pine Trail, a steep valley overlooking a river, recommended only for those who've mastered hill techniques; Stony Trail, suitable once basics are learned, with a few tricky sections and a halfway shelter to rest and enjoy the sunshine; and Loser's Trail, starting gently along a river valley but with an exposed, weather-dependent final section that may require checking conditions before setting out."},
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
                qlabel: "Questions 21\u201326",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Labels giving nutritional information on food packaging",
                items: [
                  {n:21, q:"What was Jack's attitude to nutritional food labels before this project?", opts:["He didn't read everything on them.","He didn't think they were important.","He thought they were too complicated."]},
                  {n:22, q:"Alice says that before doing this project,", opts:["she was unaware of what certain foods contained.","she was too lazy to read food labels.","she was only interested in the number of calories."]},
                  {n:23, q:"When discussing supermarket brands of pizza, Jack agrees with Alice that", opts:["the list of ingredients is shocking.","he will hesitate before buying pizza again.","the nutritional label is misleading."]},
                  {n:24, q:"Jack prefers the daily value system to other labelling systems because it is", opts:["more accessible.","more logical.","more comprehensive."]},
                  {n:25, q:"What surprised both students about one flavour of crisps?", opts:["The percentage of artificial additives given was incorrect.","The products did not contain any meat.","The labels did not list all the ingredients."]},
                  {n:26, q:"What do the students think about research into the impact of nutritional food labelling?", opts:["It did not produce clear results.","It focused on the wrong people.","It made unrealistic recommendations."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 27 and 28",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things surprised the students about the traffic-light system for nutritional labels?",
                qns: [27,28],
                options: [
                  {letter:"A", text:"its widespread use"},
                  {letter:"B", text:"the fact that it is voluntary for supermarkets"},
                  {letter:"C", text:"how little research was done before its introduction"},
                  {letter:"D", text:"its unpopularity with food manufacturers"},
                  {letter:"E", text:"the way that certain colours are used"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 29 and 30",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things are true about the participants in the study on the traffic-light system?",
                qns: [29,30],
                options: [
                  {letter:"A", text:"They had low literacy levels."},
                  {letter:"B", text:"They were regular consumers of packaged food."},
                  {letter:"C", text:"They were selected randomly."},
                  {letter:"D", text:"They were from all socio-economic groups."},
                  {letter:"E", text:"They were interviewed face-to-face."}
                ]
              }
            ],
            multiGroups: [[27,28],[29,30]],
            answers: {21:"A",22:"A",23:"C",24:"C",25:"B",26:"A",27:"B",28:"C",29:"D",30:"E"},
            script: [
              {sp:"ANNOUNCER", t:"Introduces two students, Jack and Alice, discussing their report on nutritional food labels."},
              {sp:"JACK", t:"Admits he's only ever checked labels for peanut traces due to his allergy, without much concern for overall healthiness."},
              {sp:"ALICE", t:"Says the project taught her to read labels more carefully, realising a yogurt she'd trusted as 'healthy' was actually high in sugar and calories, despite believing claims like 'low in fat' before."},
              {sp:"JACK", t:"Calls supermarket pizza labels an eye-opener regarding calorie content."},
              {sp:"ALICE", t:"Notes the values shown are often for half a pizza, misleading since most people eat the whole thing."},
              {sp:"JACK", t:"Agrees this isn't transparent, though admits it likely won't stop him buying pizza; found comparing labelling systems interesting, preferring the traditional daily value system since it shows the full ingredient picture, not just fat, salt and sugar, even if not the easiest to use; calls for more consistency in portion sizes across supermarkets."},
              {sp:"ALICE", t:"Mentions the differences seen in chicken-flavour crisp brands."},
              {sp:"JACK", t:"Expresses surprise the crisps contain no real chicken at all, only artificial additives."},
              {sp:"ALICE", t:"Agrees, having expected at least some real chicken content; believes nutritional labelling should improve buying habits, especially for parents."},
              {sp:"JACK", t:"Points out a study suggested otherwise, that people didn't necessarily change their buying habits."},
              {sp:"ALICE", t:"Notes those findings weren't conclusive, given the small scale of the study, and that more research is needed."},
              {sp:"ANNOUNCER", t:"Prompts the listener to look at questions 27 to 30 before the discussion continues."},
              {sp:"JACK", t:"Asks about the traffic-light labelling system."},
              {sp:"ALICE", t:"Explains supermarkets favour the colour-coded system for fat, sugar and salt levels, though it isn't universal or compulsory, likely due to pressure from food manufacturers unhappy with flagging their products as unhealthy."},
              {sp:"JACK", t:"Finds it odd it isn't compulsory."},
              {sp:"ALICE", t:"Is surprised it was introduced without sufficient consultation, despite experts having reservations."},
              {sp:"JACK", t:"Suggests there's an argument for researching it now, since consumers are already familiar with the system, and notes survey participants responded positively."},
              {sp:"ALICE", t:"Thinks the wrong people were surveyed, since the labels are meant to help people with low literacy specifically."},
              {sp:"JACK", t:"Counters that it's still useful to get feedback across all socio-economic groups, and that responses didn't vary much."},
              {sp:"ALICE", t:"Notes that interviewing face-to-face limited the possible sample size, and wonders why that method was chosen, along with the fact participants volunteered rather than being selected, and that how often they bought packaged food wasn't recorded, only how often they used the supermarket."},
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
                notesTitle: "The history of coffee",
                groups: [
                  {
                    heading: "Coffee in the Arab world",
                    items: [
                      {n:null, before:"There was small-scale trade in wild coffee from Ethiopia.", input:null, after:""},
                      {n:null, before:"1522: Coffee was approved in the Ottoman court as a type of medicine.", input:null, after:""},
                      {n:31, before:"1623: In Constantinople, the ruler ordered the", input:31, after:"of every coffee house."}
                    ]
                  },
                  {
                    heading: "Coffee arrives in Europe (17th century)",
                    items: [
                      {n:32, before:"Coffee shops were compared to", input:32, after:"."},
                      {n:33, before:"They played an important part in social and", input:33, after:"changes."}
                    ]
                  },
                  {
                    heading: "Coffee and European colonisation",
                    items: [
                      {n:null, before:"European powers established coffee plantations in their colonies.", input:null, after:""},
                      {n:34, before:"Types of coffee were often named according to the", input:34, after:"they came from."},
                      {n:35, before:"In Brazil and the Caribbean, most cultivation depended on", input:35, after:"."},
                      {n:36, before:"In Java, coffee was used as a form of", input:36, after:"."},
                      {n:37, before:"Coffee became almost as important as", input:37, after:"."},
                      {n:38, before:"The move towards the consumption of", input:38, after:"in Britain did not also take place in the USA."}
                    ]
                  },
                  {
                    heading: "Coffee in the 19th century",
                    items: [
                      {n:39, before:"Prices dropped because of improvements in", input:39, after:"."},
                      {n:40, before:"Industrial workers found coffee helped them to work at", input:40, after:"."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"destruction",32:"universities",33:"political",34:"port",35:"slavery",36:"taxation",37:"sugar",38:"tea",39:"transportation",40:"night"},
            script: [
              {sp:"SPEAKER", t:"Introduces a presentation on the economic and social importance of coffee, believed first drunk in the Arab world, though documented only from the 1500s, with early evidence of it gathered from wild bushes in Ethiopia; by the early 1500s it was being traded and spreading through the Middle East, with its medicinal use approved by the court physician in Constantinople in 1522."},
              {sp:"SPEAKER", t:"Describes coffee cultivation in Yemen from the mid-1500s, supplying most of Africa and the Arab world for the next century; highlights coffee's social role, drunk mainly in coffee houses rather than at home, where mostly men gathered to discuss current issues, seen as potentially dangerous enough that the ruler of Constantinople ordered every coffee house in the city destroyed in 1623, though many reopened after his death."},
              {sp:"SPEAKER", t:"Describes coffee's spread to Europe in the 17th century, where coffee shops similarly became gathering places for ordinary men to exchange ideas, likened by some to universities, contributing significantly to social and political change and the origins of various movements."},
              {sp:"SPEAKER", t:"Describes the breakdown of Yemen's coffee monopoly in the late 1600s as production spread globally through European colonisation, with plantations set up in Indonesia and the Caribbean; notes coffee types were often named after the port they were shipped from, like Mocha or Java; describes differing labour systems \u2014 slavery on large plantations in Brazil and the Caribbean, versus a taxation-based system in Dutch-colonised Java where peasants grew coffee and passed a portion to colonial authorities; notes coffee became nearly as important as sugar under 18th-century colonial powers, though still a luxury mostly consumed in public coffee houses rather than at home."},
              {sp:"SPEAKER", t:"Describes tea's introduction to Britain from China, gradually overtaking coffee there despite initially being expensive and reserved for the upper classes, while the USA, after gaining independence in 1776, associated tea with Britain and kept coffee as its preferred drink, as remains true today."},
              {sp:"SPEAKER", t:"Describes 19th-century coffee production booming and prices falling, partly due to cheaper, more efficient transportation, making coffee affordable to working people, not just the middle classes; notes coffee's growing importance as a stimulant for industrial workers whose shifts extended into the night, not just as a morning drink."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      }
    }
  }
});
