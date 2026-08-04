// EngFinite Learning — Listening Test Data (CAM11)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam11: {
    tests: {
      1: {
        title: "Cambridge IELTS 11 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2011%20test%201%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u201310",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "HIRING A PUBLIC ROOM",
                example: {label: "the Main Hall – seats", value: "200"},
                groups: [
                  {
                    heading: "Room and cost",
                    items: [
                      {n:1, before:"the", input:1, after:"Room – seats 100"},
                      {n:2, before:"Cost of Main Hall for Saturday evening: £", input:2, after:""},
                      {n:3, before:"+ £250 deposit (", input:3, after:"payment is required)"},
                      {n:4, before:"Cost includes use of tables and chairs and also", input:4, after:""},
                      {n:null, before:"Additional charge for use of the kitchen: £25", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Before the event",
                    items: [
                      {n:5, before:"We need a", input:5, after:"licence"},
                      {n:6, before:"Need to contact caretaker (Mr Evans) in advance to arrange", input:6, after:""}
                    ]
                  },
                  {
                    heading: "During the event",
                    items: [
                      {n:null, before:"The building is no smoking", input:null, after:""},
                      {n:7, before:"The band should use the", input:7, after:"door at the back"},
                      {n:null, before:"Don't touch the system that controls the volume", input:null, after:""},
                      {n:null, before:"For microphones, contact the caretaker", input:null, after:""}
                    ]
                  },
                  {
                    heading: "After the event",
                    items: [
                      {n:8, before:"Need to know the", input:8, after:"for the cleaning cupboard"},
                      {n:9, before:"The", input:9, after:"must be washed and rubbish placed in black bags"},
                      {n:10, before:"All", input:10, after:"must be taken down"},
                      {n:null, before:"Chairs and tables must be piled up", input:null, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Charlton",2:"115",3:"cash",4:"parking",5:"music",6:"entry",7:"stage",8:"code",9:"floors",10:"decorations"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. You will hear a telephone conversation between an official at a village hall and a woman who wants to hire a public room. First, you have some time to look at questions 1 to 6. You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first."},
              {sp:"OFFICIAL", t:"Hello?"},
              {sp:"WOMAN", t:"Oh hello, I wanted to inquire about hiring a room in the village hall for the evening of September the first."},
              {sp:"OFFICIAL", t:"Let me just see. Uh. Yes, we have both rooms available that evening. There's our Main Hall, that's got seating for 200 people. Or there's the Charlton Room."},
              {sp:"ANNOUNCER", t:"The Main Hall seats 200, so 200 has been written in the space. Now, we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully, and answer questions 1 to 6."},
              {sp:"OFFICIAL", t:"Hello?"},
              {sp:"WOMAN", t:"Oh hello, I wanted to inquire about hiring a room in the village hall for the evening of September the first."},
              {sp:"OFFICIAL", t:"Let me just see. Uh. Yes, we have both rooms available that evening. There's our Main Hall, that's got seating for 200 people. Or there's the Charlton Room."},
              {sp:"WOMAN", t:"Sorry?"},
              {sp:"OFFICIAL", t:"The Charlton Room, CHARLTON. That's got seating for up to 100."},
              {sp:"WOMAN", t:"Well, we're organizing a dinner to raise money for a charity, and we're hoping for at least 150 people. So, I think we'll go for the Main Hall. How much would that cost?"},
              {sp:"OFFICIAL", t:"Let's see, um, you wanted it for the evening of September the first."},
              {sp:"WOMAN", t:"Yes, that's a Saturday."},
              {sp:"OFFICIAL", t:"So from 6 pm to midnight, that would be £115 that's the weekend price. It's £75 on weekdays."},
              {sp:"WOMAN", t:"That's all right."},
              {sp:"OFFICIAL", t:"And I have to tell you there's also a deposit of £250 which is returnable of course, as long as there's no damage. But we do insist that this is paid in cash. We don't take cards for that. You can pay the actual rent of the room, however you like though. Cash, credit card, cheque..."},
              {sp:"WOMAN", t:"Oh, well, I suppose that's OK. So does the charge include use of tables and chairs and so on?"},
              {sp:"OFFICIAL", t:"Oh, yes."},
              {sp:"WOMAN", t:"And what about parking?"},
              {sp:"OFFICIAL", t:"Yeah, that's all included. The only thing that isn't included is... you said you were organizing a dinner."},
              {sp:"WOMAN", t:"Yeah."},
              {sp:"OFFICIAL", t:"Well, you'll have to pay extra for the kitchen if you want to use that. It's £25. It's got very good facilities, good quality cookers and fridges and so on."},
              {sp:"WOMAN", t:"OK, well I suppose that's all right. We can cover the cost in our entry charges."},
              {sp:"OFFICIAL", t:"Right, so I'll make a note of that. Now, there are just one or two things you need to think about before the event. For example, you'll have to see about getting a license if you're planning to have any music during the meal."},
              {sp:"WOMAN", t:"Oh, really?"},
              {sp:"OFFICIAL", t:"It's quite straightforward. I'll give you the details later on. And about a week or 10 days before your event, you'll need to contact the caretaker, that's Mr Evans. Uh. To make the arrangements for entry, he'll sort that out with you."},
              {sp:"WOMAN", t:"And do I give him the payment as well?"},
              {sp:"OFFICIAL", t:"No, you do that directly with me."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10. Now listen and answer questions 7 to 10."},
              {sp:"WOMAN", t:"Right, now is there anything I need to know about what happens during the event?"},
              {sp:"OFFICIAL", t:"Well, as you'll be aware, of course, the building is no smoking throughout."},
              {sp:"WOMAN", t:"Of course."},
              {sp:"OFFICIAL", t:"Now are you having a band?"},
              {sp:"WOMAN", t:"Yes."},
              {sp:"OFFICIAL", t:"Well, they'll have a lot of equipment, so rather than using the front door, they should park their van round the back, and use the stage door there. You can open that from inside, but don't forget to lock it at the end."},
              {sp:"WOMAN", t:"OK."},
              {sp:"OFFICIAL", t:"And talking of bands, I'm sure I don't need to tell you this, but you must make sure that no one fiddles about with the black box by the fire door. That's a system that cuts in when the volume reaches a certain level, it's a legal requirement."},
              {sp:"WOMAN", t:"Sure. Anyway, we want people to be able to talk to one another. So we don't want anything too loud. Oh, that reminds me, we'll be having speeches. Are there any microphones available?"},
              {sp:"OFFICIAL", t:"Yeah. Just let the caretaker know, he'll get those for you. Right, now when the event is over, we do ask that the premises are left in good condition. So there's a locked cupboard, and you'll be informed of the code you need to open that. It's got all the cleaning equipment, brushes and detergent and so on."},
              {sp:"WOMAN", t:"Right, so what do we need to do after everyone's gone? Uh. Sweep the floors, I suppose."},
              {sp:"OFFICIAL", t:"Well, actually they have to be washed, not just swept. Then you'll be provided with black plastic bags, so all the rubbish must be collected up and left outside the door."},
              {sp:"WOMAN", t:"Of course, we'll make sure everything's left tidy. Oh, and I forgot to ask. I presume we can have decorations in the room."},
              {sp:"OFFICIAL", t:"Yes, but you must take them down afterwards."},
              {sp:"WOMAN", t:"Sure."},
              {sp:"OFFICIAL", t:"And the chairs and tables should be stacked up neatly at the back of the room."},
              {sp:"WOMAN", t:"I'll make sure I've got a few people to help me."},
              {sp:"ANNOUNCER", t:"That is the end of section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 11\u201314",
                inst: "Complete the notes below.<br>Write <b>ONE WORD</b> for each answer.",
                notesTitle: "Fiddy Working Heritage Farm",
                groups: [
                  {
                    heading: "Advice about visiting the farm",
                    items: [
                      {n:null, before:"Visitors should take care not to harm any", input:11, after:""},
                      {n:null, before:"not touch any", input:12, after:""},
                      {n:null, before:"wear", input:13, after:""},
                      {n:null, before:"not bring", input:14, after:"into the farm, with certain exceptions"}
                    ]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15–20",
                inst: "Label the map below.<br>Choose the correct letter, <b>A–I</b>, next to Questions 15–20.",
                mapTitle: "Fiddy Working Heritage Farm — Map",
                mapImage: "data:image/png;base64,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",
                options: ["A","B","C","D","E","F","G","H","I"],
                items: [
                  {n:15, label:"Scarecrow"},
                  {n:16, label:"Maze"},
                  {n:17, label:"Café"},
                  {n:18, label:"Black Barn"},
                  {n:19, label:"Covered picnic area"},
                  {n:20, label:"Fiddy House"}
                ]
              }
            ],
            answers: {11:"animals",12:"tools",13:"shoes",14:"dogs",15:"H",16:"B",17:"G",18:"A",19:"F",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Section 2. You will hear a guide talking to a group of visitors to a farm. First, you have some time to look at questions 11 to 14. Listen carefully, and answer questions 11 to 14."},
              {sp:"SPEAKER", t:"Welcome to the Fiddy Working Heritage Farm. This open air museum gives you the experience of agriculture and rural life in the English countryside at the end of the 19th century. So you'll see a typical farm of that period, and like me, all the staff are dressed in clothes of that time. I must give you some advice and safety tips before we go any further. As it's a working farm, please don't frighten or injure the animals. We have a lot here, and many of them are breeds that are now quite rare. And do stay at a safe distance from the tools. Some of them have sharp points, which can be pretty dangerous, so please don't touch them. We don't want any accidents, do we? The ground is very uneven, and you might slip if you're wearing sandals. So I'm glad to see you're all wearing shoes. We always advise people to do that. Now, children of all ages are very welcome here, and usually even very young children love the ducks and lambs, so do bring them along next time you come. I don't think any of you have brought dogs with you, but in case you have, I'm afraid they'll have to stay in the car park, unless they're guide dogs. I'm sure you'll understand that they could cause a lot of problems on a farm."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 15 to 20. Now listen and answer questions 15 to 20."},
              {sp:"SPEAKER", t:"Now let me give you some idea of the layout of the farm. The building where you bought your tickets is the New Barn, immediately to your right, and we're now at the beginning of the main path to the farmland. And of course, the car park is on your left. The scarecrow you can see in the car park in the corner beside the main path is a traditional figure for keeping the birds away from crops. But our scarecrow is a permanent sculpture. It's taller than a human being, so you can see it from quite a distance. If you look ahead of you, you'll see a maze. It's opposite the New Barn, beside the side path that branches off to the right, just over there. The maze is made out of hedges, which are too tall for young children to see over them, but it's quite small, so you can't get lost in it. Now, can you see the bridge crossing the fish pool further up the main path? If you want to go to the cafe, go towards the bridge and turn right just before it. Walk along the side path, and the café's on the first bend you come to. The building was originally the schoolhouse, and it's well over 100 years old. As you may know, we run skills workshops here, where you can learn traditional crafts like woodwork and basket making. You can see examples of the work, and talk to someone about the courses in the Black Barn. If you take the side path to the right here, just by the New Barn, you'll come to the Black Barn, just where the path first bends. Now I mustn't forget to tell you about picnicking, as I can see some of you have brought your lunch with you. You can picnic in the field, though do clear up behind you, of course. Or if you'd prefer a covered picnic area, there's one near the farmyard, just after you cross the bridge. There's a covered picnic spot on the right. And the last thing to mention is Fiddy House itself. From here you can cross the bridge, then walk along the footpath through the field to the left of the farmyard. That goes to the house, and it'll give you a lovely view of it. It's certainly worth a few photographs, but as it's a private home, I'm afraid you can't go inside. Right. Well, if you're all ready, we'll set off on our tour of the farm."},
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
                qlabel: "Questions 21–30",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Study on Gender in Physics",
                items: [
                  {n:21, q:"The students in Akira Miyake's study were all majoring in", opts:["physics.","psychology or physics.","science, technology, engineering or mathematics."]},
                  {n:22, q:"The aim of Miyake's study was to investigate", opts:["what kind of women choose to study physics.","a way of improving women's performance in physics.","whether fewer women than men study physics at college."]},
                  {n:23, q:"The female physics students were wrong to believe that", opts:["the teachers marked them in an unfair way.","the male students expected them to do badly.","their test results were lower than the male students'."]},
                  {n:24, q:"Miyake's team asked the students to write about", opts:["what they enjoyed about studying physics.","the successful experiences of other people.","something that was important to them personally."]},
                  {n:25, q:"What was the aim of the writing exercise done by the subjects?", opts:["to reduce stress","to strengthen verbal ability","to encourage logical thinking"]},
                  {n:26, q:"What surprised the researchers about the study?", opts:["how few students managed to get A grades","the positive impact it had on physics results for women","the difference between male and female performance"]},
                  {n:27, q:"Greg and Lisa think Miyake's results could have been affected by", opts:["the length of the writing task.","the number of students who took part.","the information the students were given."]},
                  {n:28, q:"Greg and Lisa decide that in their own project, they will compare the effects of", opts:["two different writing tasks.","a writing task with an oral task.","two different oral tasks."]},
                  {n:29, q:"The main finding of Smolinsky's research was that class teamwork activities", opts:["were most effective when done by all-women groups.","had no effect on the performance of men or women.","improved the results of men more than of women."]},
                  {n:30, q:"What will Lisa and Greg do next?", opts:["talk to a professor","observe a science class","look at the science timetable"]}
                ]
              }
            ],
            answers: {21:"C",22:"B",23:"B",24:"C",25:"A",26:"B",27:"C",28:"A",29:"B",30:"A"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. You will hear two psychology students called Lisa and Greg discussing a project they have to do. First, you have some time to look at questions 21 to 27. Now listen carefully, and answer questions 21 to 27."},
              {sp:"LISA", t:"OK, Greg. So I finally managed to read the article you mentioned, the one about the study on gender in physics."},
              {sp:"GREG", t:"About the study of college students done by Akira Miyake and his team? Yeah, I was interested that the researchers were actually a mix of psychologists and physicists. That's an unusual combination."},
              {sp:"LISA", t:"Yeah. I got a little confused at first about which students the study was based on. They weren't actually majoring in physics, they were majoring in what's known as the STEM disciplines. That's science, technology, engineering, and..."},
              {sp:"GREG", t:"...and math. Yes, but they were all doing physics courses as part of their studies."},
              {sp:"LISA", t:"That's correct. So, as I understood it, Miyake and co started from the fact that women are underrepresented in introductory physics courses at college. And also that on average, the women who do enroll on these courses perform more poorly than the men. No one really knows why this is the case."},
              {sp:"GREG", t:"Yeah, but what the researchers wanted to find out was basically what they could do about the relatively low level of the women's results, but in order to find a solution, they needed to find out more about the nature of the problem."},
              {sp:"LISA", t:"Right. Now let's see if I can remember, it was that in the physics class, the female students thought the male students all assumed that women weren't any good at physics. Was that it? And they thought that the men expected them to get poor results in their tests."},
              {sp:"GREG", t:"That's what the women thought, and that made them nervous, so they did get poor results. But actually they were wrong. No one was making any assumptions about the female students at all."},
              {sp:"LISA", t:"Anyway, what Miyake's team did was quite simple. Getting the students to do some writing before they went into the physics class. What did they call it?"},
              {sp:"GREG", t:"Values-affirmation. They had to write an essay focusing on things that were significant to them. Not particularly to do with the subject they were studying, but more general things like music or people who mattered to them."},
              {sp:"LISA", t:"Right. So the idea of doing the writing is that this gets the students thinking in a positive way."},
              {sp:"GREG", t:"And putting these thoughts into words can relax them and help them overcome the psychological factors that lead to poor performance. Yeah. But what the researchers in the study hadn't expected was that this one activity raised the women's physics grades from the C to the B range."},
              {sp:"LISA", t:"A huge change. Pity it wasn't to an A, but still! No, but it does suggest that the women were seriously underperforming beforehand in comparison with the men."},
              {sp:"GREG", t:"Yes. Mind you, Miyake's article left out a lot of details, like did the students do the writing just once or several times, and had they been told why they were doing the writing? That might have affected the results."},
              {sp:"LISA", t:"You mean if they know the researchers thought it might help them to improve, then they'd just try to fulfill that expectation?"},
              {sp:"GREG", t:"Exactly."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 28 to 30. Now listen and answer questions 28 to 30."},
              {sp:"GREG", t:"So anyway, I thought for our project we could do a similar study, but investigate whether it really was the writing activity that had that result."},
              {sp:"LISA", t:"OK, so we could ask them to do a writing task about something completely different, something more factual, like a general knowledge topic."},
              {sp:"GREG", t:"Maybe, or we could have half the students doing a writing task, and half doing something else like an oral task."},
              {sp:"LISA", t:"Or even, half do the same writing task as in the original research, and half do a factual writing task. Then we'd see if it really is the topic that made the difference, or something else."},
              {sp:"GREG", t:"That's it. Good. So, at our meeting with the supervisor on Monday, we can tell him we've decided on our project. We should have our aims ready by then. I suppose we need to read the original study. The article is just a summary."},
              {sp:"LISA", t:"And there was another article I read by Smolinsky. It was about her research on how women and men perform in mixed teams in class, compared with single-sex teams and on their own."},
              {sp:"GREG", t:"Let me guess... the women were better at teamwork."},
              {sp:"LISA", t:"That's what I expected, but actually the men and the women got the same results. Whether they were working in teams or on their own. Hmm. But I guess it's not that relevant to us."},
              {sp:"GREG", t:"What worries me anyway is how we're going to get everything done in the time."},
              {sp:"LISA", t:"We'll be OK, now we know what we're doing. Though, I'm not clear how we assess whether the students in our experiment actually make any progress or not."},
              {sp:"GREG", t:"No, we may need some advice on that. The main thing's to make sure we have the right size sample, uh, not too big or too small."},
              {sp:"LISA", t:"That shouldn't be difficult. Right, what do we need to do next? We could have a look at the timetable for the science classes, or perhaps we should just make an appointment to see one of the science professors. That'd be better."},
              {sp:"GREG", t:"Great. And we could even get to observe one of the classes."},
              {sp:"LISA", t:"What for?"},
              {sp:"GREG", t:"Well, OK, maybe let's just go with your idea. Right, well, I think that's everything for now."},
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
                notesTitle: "Ocean Biodiversity",
                groups: [
                  {
                    heading: "Biodiversity hotspots",
                    items: [
                      {n:null, before:"areas containing many different species", input:null, after:""},
                      {n:null, before:"important for locating targets for", input:31, after:""},
                      {n:null, before:"at first only identified on land", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Boris Worm, 2005",
                    items: [
                      {n:null, before:"identified hotspots for large ocean predators, e.g. sharks", input:null, after:""},
                      {n:null, before:"found that ocean hotspots:", input:null, after:""},
                      {n:null, before:"were not always rich in", input:32, after:""},
                      {n:null, before:"had higher temperatures at the", input:33, after:""},
                      {n:null, before:"had sufficient", input:34, after:"in the water"}
                    ]
                  },
                  {
                    heading: "Lisa Ballance, 2007",
                    items: [
                      {n:null, before:"looked for hotspots for marine", input:35, after:""},
                      {n:null, before:"found these were all located where ocean currents meet", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Census of Marine Life",
                    items: [
                      {n:null, before:"found new ocean species living:", input:null, after:""},
                      {n:null, before:"under the", input:36, after:""},
                      {n:null, before:"near volcanoes on the ocean floor", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Global Marine Species Assessment",
                    items: [
                      {n:null, before:"want to list endangered ocean species, considering:", input:null, after:""},
                      {n:null, before:"population size", input:null, after:""},
                      {n:null, before:"geographical distribution", input:null, after:""},
                      {n:null, before:"rate of", input:37, after:""},
                      {n:null, before:"Aim: to assess 20,000 species and make a distribution", input:38, after:"for each one"}
                    ]
                  },
                  {
                    heading: "Recommendations to retain ocean biodiversity",
                    items: [
                      {n:null, before:"increase the number of ocean reserves", input:null, after:""},
                      {n:null, before:"establish", input:39, after:"corridors (e.g. for turtles)"},
                      {n:null, before:"reduce fishing quotas", input:null, after:""},
                      {n:null, before:"catch fish only for the purpose of", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"conservation",32:"food",33:"surface",34:"oxygen",35:"mammals",36:"ice",37:"decline",38:"map",39:"migration",40:"consumption"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. You will hear part of a student presentation about the variety of different species that live in the world's oceans. First, you have some time to look at questions 31 to 40. Now listen carefully, and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"I've been looking at ocean biodiversity. That's the diversity of species that live in the world's oceans. About 20 years ago, biologists developed the idea of what they called biodiversity hotspots. These are the areas which have the greatest mixture of species, so one example is Madagascar. These hotspots are significant, because they allow us to locate key areas for focusing efforts at conservation. Biologists can identify hotspots on land fairly easily, but until recently, very little was known about species distribution and diversity in the oceans, and no one even knew if hotspots existed there. Then a Canadian biologist called Boris Worm did some research in 2005 on data on ocean species that he got from the fishing industry. Worm located five hotspots for large ocean predators like sharks, and looked at what they had in common. The main thing he'd expected to find was that they had very high concentrations of food. But to his surprise, that was only true for four of the hotspots. The remaining hotspots were quite badly off in that regard. But what he did find was that in all cases, the water at the surface of the ocean had relatively high temperatures, even when it was cool at greater depths, so this seemed to be a factor in supporting a diverse range of these large predators. However, this wasn't enough on its own, because he also found that the water needed to have enough oxygen in it. So these two factors seem necessary to support the high metabolic rate of these large fish."},
              {sp:"SPEAKER", t:"A couple of years later, in 2007, a researcher called Lisa Balance, who was working in California, also started looking for ocean hotspots. But not for fish. What she was interested in was marine mammals, things like seals. And she found three places in the oceans which were hotspots. And what these had in common was that these hotspots were all located at boundaries between ocean currents, and this seems to be the sort of place that has lots of the plankton that some of these species feed on."},
              {sp:"SPEAKER", t:"So now people who want to protect the species that are endangered need to get as much information as possible. For example, there's an international project called the Census of Marine Life. They've been surveying oceans all over the world, including the Arctic. One thing they found there, which stunned other researchers, was that there were large numbers of species which live below the ice, sometimes under a layer up to 20 meters thick. Some of these species had never been seen before. They've even found species of octopus living in these conditions. And other scientists working on the same project, but researching very different habitats on the ocean floor, have found large numbers of species congregating around volcanoes, attracted to them by the warmth and nutrients there."},
              {sp:"SPEAKER", t:"However, biologists still don't know how serious the threat to their survival is for each individual species. So a body called the Global Marine Species Assessment is now creating a list of endangered species on land, so they consider things like the size of the population, how many members of one species there are in a particular place. And then they look at their distribution in geographical terms, although this is quite difficult when you're looking at fish, because they're so mobile, and then thirdly, they calculate the rate at which the decline of the species is happening. So far, only 1,500 species have been assessed, but they want to increase this figure to 20,000 for each one they assess. They use the data they collect on that species to produce a map showing its distribution. Ultimately, they will be able to use these to figure out not only where most species are located, but also where they are most threatened."},
              {sp:"SPEAKER", t:"So finally, what can be done to retain the diversity of species in the world's oceans? Firstly, we need to set up more reserves in our oceans, places where marine species are protected. We have some, but not enough. In addition, to preserve species such as leatherback turtles, which live out in the high seas, but have their nesting sites on the American coast, we need to create corridors for migration, so they can get from one area to another safely. As well as this, action needs to be taken to lower the levels of fishing quotas, to prevent overfishing of endangered species. And finally, there's the problem of 'by-catch'. This refers to the catching of unwanted fish by fishing boats. They're returned to the sea, but they're often dead or dying. If these commercial fishing boats used equipment which was more selective, so that only the fish wanted for consumption were caught, this problem could be overcome. So does anyone have any questions..."},
              {sp:"ANNOUNCER", t:"That is the end of section 4. You now have half a minute to check your answers."}
            ]
          }

        }
      },
      2: {
        title: "Cambridge IELTS 11 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2011%20test%202%20.mp3",
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
                notesTitle: "Enquiry about joining Youth Council",
                example: {label: "Name: Roger", value: "Brown"},
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Age: 18", input:null, after:""},
                      {n:null, before:"Currently staying in a", input:1, after:"during the week"},
                      {n:null, before:"Postal address: 17,", input:2, after:"Street, Stamford, Lincs"},
                      {n:null, before:"Postcode:", input:3, after:""},
                      {n:null, before:"Occupation: student and part-time job as a", input:4, after:""},
                      {n:null, before:"Studying", input:5, after:"(major subject) and history (minor subject)"},
                      {n:null, before:"Hobbies: does a lot of", input:6, mid:", and is interested in the", input2:7, after:""},
                      {n:null, before:"On Youth Council, wants to work with young people who are", input:8, after:""},
                      {n:null, before:"Will come to talk to the Elections Officer next Monday at", input:9, after:"pm"},
                      {n:null, before:"Mobile number:", input:10, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"hostel",2:"Buckleigh",3:"PE97QT",4:"waiter",5:"politics",6:"cycling",7:"cinema",8:"disabled",9:"4.30",10:"07788136711"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. You will hear a young man phoning a town's youth council. First, you have some time to look at questions 1 to 5. You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first."},
              {sp:"CAROLINE", t:"Good morning, Youth Council, Caroline speaking."},
              {sp:"ROGER", t:"Oh, hello. I'm interested in standing for election to the Youth Council, and I was told to give you a call."},
              {sp:"CAROLINE", t:"That's good. Could I have your name please?"},
              {sp:"ROGER", t:"Yes, it's Roger Brown."},
              {sp:"CAROLINE", t:"Thank you."},
              {sp:"ANNOUNCER", t:"The young man's name is Roger Brown. So Brown has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully, and answer questions 1 to 5."},
              {sp:"CAROLINE", t:"Good morning, Youth Council, Caroline speaking."},
              {sp:"ROGER", t:"Oh, hello. I'm interested in standing for election to the Youth Council, and I was told to give you a call."},
              {sp:"CAROLINE", t:"That's good. Could I have your name please?"},
              {sp:"ROGER", t:"Yes, it's Roger Brown."},
              {sp:"CAROLINE", t:"Thank you. I'm Caroline, the Youth Council administrator. So do you know much about what the Council does, Roger?"},
              {sp:"ROGER", t:"I've talked to Stephanie. I think she's the chair of the Council."},
              {sp:"CAROLINE", t:"That's right."},
              {sp:"ROGER", t:"And she told me a lot about it. How it's a way for young people to discuss local issues, for example, and make suggestions to the town council. That's what made me interested."},
              {sp:"CAROLINE", t:"Fine, well let me take down some of your details. Uh. First of all, how old are you? You know the Council is for young people aged from 13 to 18."},
              {sp:"ROGER", t:"I've just turned 18."},
              {sp:"CAROLINE", t:"And where do you live, Roger?"},
              {sp:"ROGER", t:"Uh. Well, that's a bit complicated. At the moment, I'm looking for a flat to rent here, so I'm in a hostel from Monday to Friday. I go back to my parents' place at the weekend."},
              {sp:"CAROLINE", t:"OK, so where's the best place to send you some information about the Council?"},
              {sp:"ROGER", t:"Oh, to my parents' address please. That's 17, Buckleigh Street - BUCKLEIGH. Street, Stamford, Lincolnshire, though you don't really need the country."},
              {sp:"CAROLINE", t:"Oh, I know Stamford. It's a lovely town. And what's the postcode?"},
              {sp:"ROGER", t:"P, e, nine, seven, q, t."},
              {sp:"CAROLINE", t:"Right, thank you. Uh. So are you working here, or are you a student?"},
              {sp:"ROGER", t:"I started studying at the university a couple of weeks ago, and I've got a part-time job for a few hours a week."},
              {sp:"CAROLINE", t:"What do you do?"},
              {sp:"ROGER", t:"Well, I've done several different things. I've just finished a short-term contract as a courier, and now I'm working as a waiter in one of the big hotels."},
              {sp:"CAROLINE", t:"Uh huh. That can't leave you much time for studying."},
              {sp:"ROGER", t:"Oh, it's not too bad. I manage to fit it all in."},
              {sp:"CAROLINE", t:"What are you studying?"},
              {sp:"ROGER", t:"My ambition is to go into Parliament eventually, so my major subject is politics. That's partly why I think the Youth Council is important, and want to be a part of it."},
              {sp:"CAROLINE", t:"And I suppose you're also taking a minor subject, aren't you? I know a lot of people study economics too."},
              {sp:"ROGER", t:"I chose history, to be honest, I'm not finding it as interesting as I expected."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the phone call, you have some time to look at questions 6 to 10. Now listen and answer questions 6 to 10."},
              {sp:"CAROLINE", t:"OK, so with your studying and your part-time job, do you have time for any other interests or hobbies?"},
              {sp:"ROGER", t:"Well, I spend quite a lot of time cycling. Both around town to get to university and to work, and also long distance from here to London for instance."},
              {sp:"CAROLINE", t:"That's pretty impressive, anything else?"},
              {sp:"ROGER", t:"For relaxation, I'm also keen on the cinema. I used to go at least once a week, but I can't manage to go so often now."},
              {sp:"CAROLINE", t:"Right, are you sure you'll have enough time for the Youth Council?"},
              {sp:"ROGER", t:"Yes, I've worked out that I can afford to reduce my hours at work, and that will make the time."},
              {sp:"CAROLINE", t:"So, is there any particular aspect of the Youth Council's work that appeals to you, Roger?"},
              {sp:"ROGER", t:"Well, my sister is blind, so I'm particularly interested in working with disabled young people to try and improve the quality of their lives."},
              {sp:"CAROLINE", t:"That's great. Well, the best way to get involved is to be nominated by some people who you know."},
              {sp:"ROGER", t:"Right. Can you tell me how to set about organizing that?"},
              {sp:"CAROLINE", t:"You should talk to Jeffrey, our Elections Officer. I can arrange a meeting in the Council office with him if you like."},
              {sp:"ROGER", t:"Yes, please."},
              {sp:"CAROLINE", t:"He'll be here next Monday, if that suits you."},
              {sp:"ROGER", t:"That's the 14th, isn't it? Yes, I can manage late afternoon."},
              {sp:"CAROLINE", t:"Would you like to suggest a time? He generally leaves around 5:30."},
              {sp:"ROGER", t:"Well, would 4:30 be OK? My last class finishes at 4, so I'd have plenty of time to get to your office."},
              {sp:"CAROLINE", t:"Right, that's fine. Oh, and could I have a phone number we can contact you on?"},
              {sp:"ROGER", t:"Yes, my mobile number is 07788136711."},
              {sp:"CAROLINE", t:"Thank you. Well, we'll look forward to seeing you next week."},
              {sp:"ROGER", t:"Thanks very much. Goodbye."},
              {sp:"CAROLINE", t:"Bye."},
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
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>11–12</b>&nbsp; Which TWO changes have been made so far during the refurbishment of the theatre?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"Some rooms now have a different use."},
                  {letter:"B", text:"A different type of seating has been installed."},
                  {letter:"C", text:"An elevator has been installed."},
                  {letter:"D", text:"The outside of the building has been repaired."},
                  {letter:"E", text:"Extra seats have been added."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>13–14</b>&nbsp; Which TWO facilities does the theatre currently offer to the public?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"rooms for hire"},
                  {letter:"B", text:"backstage tours"},
                  {letter:"C", text:"hire of costumes"},
                  {letter:"D", text:"a bookshop"},
                  {letter:"E", text:"a café"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 15 and 16",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>15–16</b>&nbsp; Which TWO workshops does the theatre currently offer?",
                qns: [15,16],
                options: [
                  {letter:"A", text:"sound"},
                  {letter:"B", text:"acting"},
                  {letter:"C", text:"making puppets"},
                  {letter:"D", text:"make-up"},
                  {letter:"E", text:"lighting"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 17–20",
                inst: "Label the plan below.<br>Choose the correct letter, <b>A–G</b>, next to Questions 17–20.",
                mapTitle: "Ground floor plan of theatre",
                mapImage: "data:image/png;base64,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",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:17, label:"box office"},
                  {n:18, label:"theatre manager's office"},
                  {n:19, label:"lighting box"},
                  {n:20, label:"artistic director's office"}
                ]
              }
            ],
            answers: {11:"A",12:"B",13:"B",14:"D",15:"C",16:"E",17:"G",18:"D",19:"B",20:"C"},
            multiGroups: [[11,12],[13,14],[15,16]],
            script: [
              {sp:"ANNOUNCER", t:"Section 2. You will hear a woman who works in a theater talking to two new staff members on their first day of work. First, you have some time to look at questions 11 to 16. Now listen carefully and answer questions 11 to 16."},
              {sp:"JODY", t:"Hi, great to see you. I'm Jody, and I'll be looking after both of you for the first month you're working here at the Amersham Theater. I'll tell you something about the theater now, then take you to meet two of the other staff. It's an old building, and it's been modernized several times. In fact, as you can see, we're carrying out a major refurbishment at the moment. The interior has just been repainted, and we're about to start on the exterior of the building. That'll be a big job. The work's running over budget, so we've had to postpone installing an elevator. I hope you're happy running up and down stairs. When the theater was built, people were generally slimmer and shorter than now, and the seats were very close together. We've replaced them with larger seats with more legroom. This means fewer seats in total, but we've taken the opportunity to install seats that can easily be moved to create different acting spaces. We've also turned a few storerooms over to other purposes like using them for meetings."},
              {sp:"JODY", t:"We try hard to involve members of the public in the theater. One way is by organizing backstage tours, so people can be shown round the building, and learn how a theater operates. These are proving very popular. What we're finding is that people want to have lunch or a cup of coffee while they're here, so we're looking into the possibility of opening a café in due course. We have a bookshop, which specializes in books about drama, and that attracts plenty of customers. Then there are two large rooms that will be decorated next month, and they'll be available for hire, for conferences and private functions such as parties. We're also considering hiring out costumes to amateur drama clubs."},
              {sp:"JODY", t:"Now I want to tell you about our workshops. We recently started a program of workshops that anyone can join. Eventually, we intend to run courses in acting, but we're waiting until we've got the right people in place as trainers. That's proving more difficult than we'd expected. There's a big demand to learn about the technical side of putting on a production, and our lighting workshop has already started with great success. We're going to start one on sound next month. A number of people have inquired about workshops on makeup, and that's something we're considering for the future. A surprise success is the workshop on making puppets. We happen to have someone working here, who does it as a hobby, and she offered to run a workshop. It was so popular, we're now running them every month."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 17 to 20. Now listen and answer questions 17 to 20."},
              {sp:"JODY", t:"Now, a word about the layout of the building. The auditorium, stage and dressing rooms for the actors are all below ground level. Here on the ground floor, we have most of the rooms that the public doesn't see. The majority are internal, so they have windows in the roof to light them. Standing here in the foyer, you're probably wondering why the box office isn't here, where the public would expect to find it. Well, you might have noticed it on your way in. Although it's part of this building, it's next door, with a separate entrance from the road."},
              {sp:"JODY", t:"For the theater manager's office, you go across the foyer, and through the double doors, turn right, and it's the room at the end of the corridor, with the door on the left. The lighting box is where the computerized stage lighting is operated, and it's at the back of the building. When you're through the double doors, turn left, turn right at the water cooler, and right again at the end. It's the second room along that corridor. The lighting box has a window into the auditorium, which of course is below us. The artistic director's office is through the double doors, turn right, and it's the first room you come to on the right-hand side. And finally, for the moment, the room where I'll take you next, the relaxation room. So, if you'd like to come with me."},
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
                qlabel: "Questions 21–26",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Rocky Bay field trip",
                items: [
                  {n:21, q:"What do the students agree should be included in their aims?", opts:["factors affecting where organisms live","the need to preserve endangered species","techniques for classifying different organisms"]},
                  {n:22, q:"What equipment did they forget to take on the Field Trip?", opts:["string","a compass","a ruler"]},
                  {n:23, q:"In Helen's procedure section, Colin suggests a change in", opts:["the order in which information is given.","the way the information is divided up.","the amount of information provided."]},
                  {n:24, q:"What do they say about the method they used to measure wave speed?", opts:["It provided accurate results.","It was simple to carry out.","It required special equipment."]},
                  {n:25, q:"What mistake did Helen make when first drawing the map?", opts:["She chose the wrong scale.","She stood in the wrong place.","She did it at the wrong time."]},
                  {n:26, q:"What do they decide to do next with their map?", opts:["scan it onto a computer","check it using photographs","add information from the internet"]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 27 and 28",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>27–28</b>&nbsp; Which TWO problems affecting organisms in the splash zone are mentioned?",
                qns: [27,28],
                options: [
                  {letter:"A", text:"lack of water"},
                  {letter:"B", text:"strong winds"},
                  {letter:"C", text:"lack of food"},
                  {letter:"D", text:"high temperatures"},
                  {letter:"E", text:"large waves"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 29 and 30",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>29–30</b>&nbsp; Which TWO reasons for possible error will they include in their report?",
                qns: [29,30],
                options: [
                  {letter:"A", text:"inaccurate records of the habitat of organisms"},
                  {letter:"B", text:"influence on behaviour of organisms by observer"},
                  {letter:"C", text:"incorrect identification of some organisms"},
                  {letter:"D", text:"making generalisations from a small sample"},
                  {letter:"E", text:"missing some organisms when counting"}
                ]
              }
            ],
            answers: {21:"A",22:"A",23:"C",24:"B",25:"B",26:"B",27:"A",28:"D",29:"C",30:"E"},
            multiGroups: [[27,28],[29,30]],
            script: [
              {sp:"ANNOUNCER", t:"Section 3. You will hear two biology students called Helen and Colin talking about the report they're writing on their recent field trip to a seaside area called Rocky Bay. First, you have some time to look at questions 21 to 26. Now listen carefully, and answer questions 21 to 26."},
              {sp:"HELEN", t:"I've brought my notes on our biology field trip to Rocky Bay, Colin. So we can work on our report on the research we did together."},
              {sp:"COLIN", t:"OK, I've got mine too. Let's look at the aims of the trip first."},
              {sp:"HELEN", t:"Right, what did you have?"},
              {sp:"COLIN", t:"I just put something about getting experience of the different sorts of procedures used on a field trip, but we need something about what causes different organisms to choose particular habitats."},
              {sp:"HELEN", t:"I agree. And something about finding out how to protect organisms in danger of dying out?"},
              {sp:"COLIN", t:"In our aims? But we weren't really looking at that."},
              {sp:"HELEN", t:"I suppose not. OK, now there's the list of equipment we all had to bring on the field trip. What did they tell us to bring a ruler for?"},
              {sp:"COLIN", t:"It was something about measuring the slope of the shore. But of course we didn't need it, because we were measuring wind direction, and we'd brought the compass for that."},
              {sp:"HELEN", t:"But not the piece of string to hold up in the air. Didn't Mr Blake make a fuss about us leaving that behind?"},
              {sp:"COLIN", t:"Yeah. He does go on. Anyway, it was easy to get one from another of the students."},
              {sp:"HELEN", t:"Now, the next section's the procedure, I sent you the draft of that."},
              {sp:"COLIN", t:"Yeah. It was clear, but I don't think we need all these details of what time we left and what time we got back, and how we divided up the different research tasks."},
              {sp:"HELEN", t:"OK. I'll look at that again."},
              {sp:"COLIN", t:"Then we have to describe our method of investigation in detail. So let's begin with how we measured wave speed. I was surprised how straightforward that was."},
              {sp:"HELEN", t:"I'd expected us to have some sort of high-tech device, not just stand there and count the number of waves per minute. Not very precise, but I suppose it was good enough. But the way we measured the amount of salt was interesting, in the water from the rock pools. Yeah, oh, I wanted to check the chemicals we used in the lab when we analyze those samples. Uh. Was it potassium chromate and silver nitrate?"},
              {sp:"COLIN", t:"That's right."},
              {sp:"HELEN", t:"OK, and we need the map of the seashore. You just left that to me. I had to do it while the tide was low. Well, that was OK, but the place I started it from was down on the beach. Then I realized I should have gone up higher to get better visibility. So I had to start all over again, but at least I'd got the squared paper, or I'd have had problems drawing it all to scale."},
              {sp:"COLIN", t:"Yeah, it looks good. We could get a map of the region off the internet and see if we need to make any changes."},
              {sp:"HELEN", t:"Hmm, I had a look, but I couldn't find anything. But you took some pictures, didn't you?"},
              {sp:"COLIN", t:"Yeah, I'll email you them if you want."},
              {sp:"HELEN", t:"OK, I'll make my amendments using those, then I can scan it into our report. Great."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 27 to 30. Now listen and answer questions 27 to 30."},
              {sp:"HELEN", t:"Now, when we get to our findings, I thought we could divide them up into the different zones we identified on the shore, and the problems organisms face in each zone. So for the highest area..."},
              {sp:"COLIN", t:"The splash zone."},
              {sp:"HELEN", t:"Yeah, we found mostly those tiny shellfish that have strong hard shells that act as protection."},
              {sp:"COLIN", t:"But not from other organisms that might eat them. Predators."},
              {sp:"HELEN", t:"No, that's not the main danger for them, but the shells prevent them from drying out, because they're in the open air for most of the time."},
              {sp:"COLIN", t:"Right. And since they're exposed they need to be able to find some sort of shelter or cover themselves up, so they don't get too hot. Then in the middle and lower zones nearer the sea, we need to discuss the effects of wave action."},
              {sp:"HELEN", t:"Yes, and how organisms develop structures to prevent themselves from being swept away. Or even destroyed by being smashed against the rocks."},
              {sp:"COLIN", t:"Hmm. I haven't done anything on the geological changes. I don't know what to put for that."},
              {sp:"HELEN", t:"Hmm. No, we weren't concentrating on that. Maybe we need to find some websites."},
              {sp:"COLIN", t:"Good idea. I've got the lecture notes from Mr Blake's geology course, but they're too general. But we could ask him which books on our reading list might be most helpful."},
              {sp:"HELEN", t:"Right. OK, now, I did a draft of the section of sources of possible error in our research. But I don't know if you agree, uh, for example, the size of the sample, and whether it's big enough to make any general conclusions from. But I thought actually we did have quite a big sample."},
              {sp:"COLIN", t:"We did. And our general method of observation seemed quite reliable, but we might not be all that accurate as far as the actual numbers go."},
              {sp:"HELEN", t:"Yeah, we might have missed some organisms, if they were hiding under a rock for example. I wasn't sure about the way we described their habitats. I decided it was probably OK."},
              {sp:"COLIN", t:"Yeah, and the descriptions we gave of the smaller organisms, they weren't very detailed, but they were adequate in this context. I'm not sure we identified all the species correctly though."},
              {sp:"HELEN", t:"OK, we'd better mention that. Now, how are we going to..."},
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
                notesTitle: "DESIGNING A PUBLIC BUILDING: THE TAYLOR CONCERT HALL",
                groups: [
                  {
                    heading: "Introduction",
                    items: [
                      {n:null, before:"The designer of a public building may need to consider the building's", input:null, after:""},
                      {n:null, before:"function", input:null, after:""},
                      {n:null, before:"physical and", input:31, after:"context"},
                      {n:null, before:"symbolic meaning", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Location and concept of the Concert Hall",
                    items: [
                      {n:null, before:"On the site of a disused", input:32, after:""},
                      {n:null, before:"Beside a", input:33, after:""},
                      {n:null, before:"The design is based on the concept of a mystery", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Building design",
                    items: [
                      {n:null, before:"It's approached by a", input:34, after:"for pedestrians"},
                      {n:null, before:"The building is the shape of a", input:35, after:""},
                      {n:null, before:"One exterior wall acts as a large", input:36, after:""}
                    ]
                  },
                  {
                    heading: "In the auditorium",
                    items: [
                      {n:null, before:"The floor is built on huge pads made of", input:37, after:""},
                      {n:null, before:"the walls are made of local wood and are", input:38, after:"in shape"},
                      {n:null, before:"ceiling panels and", input:39, after:"on walls allow adjustment of acoustics"}
                    ]
                  },
                  {
                    heading: "Evaluation",
                    items: [
                      {n:null, before:"Some critics say the", input:40, after:"style of the building is inappropriate"}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"social",32:"factory",33:"canal",34:"bridge",35:"box",36:"screen",37:"rubber",38:"curved",39:"curtains",40:"international"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. You will hear part of a lecture to students of architecture about the design of a public building. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"We've been discussing the factors the architect has to consider when designing domestic buildings. I'm going to move on now to consider the design of public buildings. And I'll illustrate this by referring to the new Taylor Concert Hall that's recently been completed here in the city. So, as with a domestic building, when designing a public building, an architect needs to consider the function of the building. Uh. For example, is it to be used primarily for entertainment? Or for education, or for administration. The second thing the architect needs to think about is the context of the building. This includes its physical location obviously, but it also includes the social meaning of the building. How it relates to the people it's built for. And finally, for important public buildings, the architect may also be looking for a central symbolic idea on which to base the design. A sort of metaphor for the building, and the way in which it is used."},
              {sp:"SPEAKER", t:"Let's look at the new Taylor Concert Hall in relation to these ideas. The location chosen was a site in a rundown district that has been ignored in previous redevelopment plans. It was occupied by a factory that had been empty for some years. The whole area was some distance from the high-rise office blocks of the central business district and shopping center. But it was only 1 km from the ring road. The site itself was bordered to the north by a canal, which had once been used by boats bringing in raw materials when the area was used for manufacturing."},
              {sp:"SPEAKER", t:"The architect chosen for the project was Tom Harrison. He found the main design challenge was the location of the site, in an area that had no neighboring buildings of any importance. To reflect the fact that the significance of the building in this quite run-down location was as yet unknown, he decided to create a building centered around the idea of a mystery. Something whose meaning still has to be discovered."},
              {sp:"SPEAKER", t:"So, how was this reflected in the design of the building? Well, Harrison decided to create pedestrian access to the building, and to make use of the presence of water on the site. As people approach the entrance, they therefore have to cross over a bridge. He wanted to give people a feeling of suspense, as they see the building first from a distance, and then close up. And the initial impression he wanted to create from the shape of the building as a whole was that of a box. The first side that people see, the southern wall, is just a high flat wall, uninterrupted by any windows. Ha, this might sound off-putting. But it supports Harrison's concept of the building, that the person approaching is intrigued, and wonders what will be inside. And this flat wall also has another purpose. At night time, projectors are switched on, and it functions as a huge screen onto which images are projected."},
              {sp:"SPEAKER", t:"The auditorium itself seats 1500 people. The floor's supported by 10 massive pads. These are constructed from rubber, and so are able to absorb any vibrations from outside, and prevent them from affecting the auditorium. The walls are made of several layers of honey colored wood, all sourced from local beech trees. In order to improve the acoustic properties of the auditorium and to amplify the sound, they are not straight, they are curved. The acoustics are also adjustable. According to the size of orchestra and the type of music being played, in order to achieve this, there are nine movable panels in the ceiling above the orchestra, which are all individually motorized, and the walls also have curtains, which can be opened or closed to change the acoustics."},
              {sp:"SPEAKER", t:"The reaction of the public to the new building has generally been positive. However, the evaluation of some critics has been less enthusiastic. In spite of Harrison's efforts to use local materials, they criticize the style of the design as being international, rather than local, and say it doesn't reflect features of the landscape or society for which it is built."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 11 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2011%20test%203%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 1–6",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Free activities in the Burnham area",
                items: [
                  {n:1, q:"The 'Family Welcome' event in the art gallery begins at", opts:["10 am.","10.30 am.","2 pm."]},
                  {n:2, q:"The film that is now shown in the 'Family Welcome' event is about", opts:["sculpture.","painting.","ceramics."]},
                  {n:3, q:"When do most of the free concerts take place?", opts:["in the morning","at lunchtime","in the evening"]},
                  {n:4, q:"Where will the 4 pm concert of Latin American music take place?", opts:["in a museum","in a theatre","in a library"]},
                  {n:5, q:"The boat race begins at", opts:["Summer Pool.","Charlesworth Bridge.","Offord Marina."]},
                  {n:6, q:"One of the boat race teams", opts:["won a regional competition earlier this year.","has represented the region in a national competition.","has won several regional competitions."]}
                ]
              },
              {
                type: "notes",
                qlabel: "Questions 7–10",
                inst: "Complete the sentences below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Paxton Nature Reserve",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Paxton is a good place for seeing rare", input:7, after:"all year round."},
                      {n:null, before:"This is a particularly good time for seeing certain unusual", input:8, after:"."},
                      {n:null, before:"Visitors will be able to learn about", input:9, after:"and then collect some."},
                      {n:null, before:"Part of the", input:10, after:"has been made suitable for swimming."}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"B",2:"C",3:"B",4:"A",5:"C",6:"A",7:"birds",8:"flowers",9:"mushrooms",10:"river"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. You will hear a woman telephoning a tourist office to ask about free activities. First, you have some time to look at questions 1 to 6. You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first."},
              {sp:"MARTIN", t:"Good morning, this is Burnham tourist office, Martin speaking."},
              {sp:"SUE", t:"Oh, hello. I saw a poster about free things to do in the area, and it said people should phone you for information. I'm coming to Burnham with my husband and two children for a few days on June the 27th, or possibly the 28th, and I'd like some ideas for things to do on the 29th."},
              {sp:"MARTIN", t:"Yes, of course."},
              {sp:"ANNOUNCER", t:"The date that the woman wants information about is 29 June. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully, and answer questions 1 to 6."},
              {sp:"MARTIN", t:"Good morning, this is Burnham tourist office, Martin speaking."},
              {sp:"SUE", t:"Oh, hello. I saw a poster about free things to do in the area, and it said people should phone you for information. I'm coming to Burnham with my husband and two children for a few days on June the 27th, or possibly the 28th, and I'd like some ideas for things to do on the 29th."},
              {sp:"MARTIN", t:"Yes, of course. OK. Then let's start with a couple of events especially for children. The art gallery is holding an event called Family Welcome that day, when there are activities and trails to use throughout the gallery."},
              {sp:"SUE", t:"That sounds interesting. What time does it start?"},
              {sp:"MARTIN", t:"The gallery opens at 10, and the Family Welcome event runs from 10:30 until 2:00. The gallery stays open until 5. And several times during the day, they're going to show a short film that the gallery has produced. It demonstrates how ceramics are made, and there'll be equipment and materials for children to have a go themselves. Last time they ran the event, there was a film about painting, which went down very well with the children, and they're now working on one about sculpture."},
              {sp:"SUE", t:"I like the sound of that. And what other events happen in Burnham?"},
              {sp:"MARTIN", t:"Well, do you all enjoy listening to music?"},
              {sp:"SUE", t:"Oh, yes."},
              {sp:"MARTIN", t:"Well, there are several free concerts taking place at different times, 1 or 2 in the morning. The majority at lunchtime and a couple in the evening, and they range from pop music to Latin American."},
              {sp:"SUE", t:"The Latin American could be fun. What time is that?"},
              {sp:"MARTIN", t:"It's being repeated several times in different places. They're performing in the Central Library at 1 o'clock, then at 4 it's in the City Museum, and in the evening at 7.30 there's a longer concert in the theater."},
              {sp:"SUE", t:"Right, I'll suggest that to the rest of the family."},
              {sp:"MARTIN", t:"Something else you might be interested in is the boat race along the river."},
              {sp:"SUE", t:"Oh, yes, do tell me about that."},
              {sp:"MARTIN", t:"The race starts at Offord Marina, to the north of Burnham, and goes as far as Summer Pool. The best place to watch it from is Charlesworth Bridge, though that does get rather crowded."},
              {sp:"SUE", t:"And who's taking part?"},
              {sp:"MARTIN", t:"Well, local boat clubs, but the standard is very high. One of them came first in the west of England regional championship in May this year. It was the first time a team from Burnham has won. It means that next year, they'll be representing the region in the national championship."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10. Now listen and answer questions 7 to 10."},
              {sp:"SUE", t:"Now, I've heard something about Paxton Nature Reserve. It's a good place for spotting unusual birds, isn't it?"},
              {sp:"MARTIN", t:"That's right throughout the year. There is a lake there, as well as a river. And they provide a very attractive habitat, so it's a good idea to bring binoculars if you have them. And just at the moment you can see various flowers that are pretty unusual. The soil at Paxton isn't very common. They're looking good right now."},
              {sp:"SUE", t:"Right. My husband will be particularly interested in that."},
              {sp:"MARTIN", t:"And there's going to be a talk and slide show about mushrooms, and you'll be able to go out and pick some afterwards, and study the different varieties."},
              {sp:"SUE", t:"Huh, and is it possible for children to swim in the river?"},
              {sp:"MARTIN", t:"Yes, part of it has been fenced off to make it safe for children to swim in. It's very shallow, and there's a life guard on duty whenever it's open. The lake is too deep, so swimming isn't allowed there."},
              {sp:"SUE", t:"OK, we must remember to bring their swimming things, in case we go to Paxton. How long does it take to get there by car from Burnham?"},
              {sp:"MARTIN", t:"Hmm. About 20 minutes, but parking is very limited, so it's usually much easier to go by bus, and it takes about the same time."},
              {sp:"SUE", t:"Right. Well, I'll discuss the options with the rest of the family. Thanks very much for all your help."},
              {sp:"MARTIN", t:"You're welcome."},
              {sp:"SUE", t:"Goodbye."},
              {sp:"MARTIN", t:"Bye."},
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
                notesTitle: "Changes in Barford over the last 50 years",
                items: [
                  {n:11, q:"In Shona's opinion, why do fewer people use buses in Barford these days?", opts:["The buses are old and uncomfortable.","Fares have gone up too much.","There are not so many bus routes."]},
                  {n:12, q:"What change in the road network is known to have benefited the town most?", opts:["the construction of a bypass","the development of cycle paths","the banning of cars from certain streets"]},
                  {n:13, q:"What is the problem affecting shopping in the town centre?", opts:["lack of parking spaces","lack of major retailers","lack of restaurants and cafés"]},
                  {n:14, q:"What does Shona say about medical facilities in Barford?", opts:["There is no hospital.","New medical practices are planned.","The number of dentists is too low."]},
                  {n:15, q:"The largest number of people are employed in", opts:["manufacturing.","services.","education."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 16–20",
                inst: "What is planned for each of the following facilities?<br>Choose the correct letter, <b>A–G</b>, next to Questions 16–20.",
                mapTitle: "Plans",
                mapNote: "<b>A.</b> It will move to a new location.<br><b>B.</b> It will have its opening hours extended.<br><b>C.</b> It will be refurbished.<br><b>D.</b> It will be used for a different purpose.<br><b>E.</b> It will have its opening hours reduced.<br><b>F.</b> It will have new management.<br><b>G.</b> It will be expanded.",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:16, label:"railway station car park"},
                  {n:17, label:"cinema"},
                  {n:18, label:"indoor market"},
                  {n:19, label:"library"},
                  {n:20, label:"nature reserve"}
                ]
              }
            ],
            answers: {11:"C",12:"B",13:"B",14:"A",15:"C",16:"G",17:"A",18:"C",19:"B",20:"F"},
            script: [
              {sp:"ANNOUNCER", t:"Section 2. You will hear a talk given by a woman called Shona Ferguson about changes in a town called Barford. First, you have some time to look at questions 11 to 15. Now listen carefully and answer questions 11 to 15."},
              {sp:"MAN", t:"First of all, let me thank you all for coming to this public meeting to discuss the future of our town. Our first speaker is Shona Ferguson from Barford Town Council. Shona."},
              {sp:"SHONA", t:"Thank you. First I'll briefly give you some background information, then I'll be asking you for your comments on developments in the town. Well, as you don't need me to tell you, Barford has changed a great deal in the last 50 years. These are some of the main changes. 50 years ago, buses linked virtually every part of the town and the neighboring towns and villages. Most people use them frequently, but not now, because the bus companies concentrate on just the routes that attract most passengers. So parts of the town are no longer served by buses. Even replacing old uncomfortable buses with smart new ones has had little impact on passenger numbers. It's sometimes said that bus fares are too high. But in relation to average incomes, fares are not much higher than they were 50 years ago."},
              {sp:"SHONA", t:"Changes in the road network are affecting the town. The center was recently closed to traffic on a trial basis, making it much safer for pedestrians. The impact of this is being measured. The new cycle paths separating bikes from cars in most main roads are being used far more than was expected, reducing traffic and improving air quality. And although the council's attempts to have a bypass constructed have failed, we haven't given up hope of persuading the government to change its mind."},
              {sp:"SHONA", t:"Shopping in the town center has changed over the years. Many of us can remember when the town was crowded with people going shopping. Numbers have been falling for several years, despite efforts to attract shoppers, for instance by opening new car parks. Some people combine shopping with visits to the town's restaurants and cafes. Most shops are small independent stores, which is good, but many people prefer to use supermarkets and department stores in nearby large towns, as there are so few well-known chain stores here."},
              {sp:"SHONA", t:"Turning now to medical facilities, the town is served by family doctors in several medical practices, fewer than 50 years ago, but each catering for far more patients. Our hospital closed 15 years ago, which means journeys to other towns are unavoidable. On the other hand, there are more dentists than there used to be."},
              {sp:"SHONA", t:"Employment patterns have changed along with almost everything else. The number of schools and colleges has increased, making that the main employment sector. Services such as website design and accountancy have grown in importance, and surprisingly perhaps, manufacturing hasn't seen the decline that has affected it in other parts of the country."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 16 to 20. Now listen and answer questions 16 to 20."},
              {sp:"SHONA", t:"Now, I'll very quickly outline current plans for some of the town's facilities before asking for your comments. As you'll know, if you regularly use the car park at the railway station, it's usually full. The railway company applied for permission to replace it with a multi-storey car park, but that was refused. Instead, the company has bought some adjoining land, and this will be used to increase the number of parking spaces."},
              {sp:"SHONA", t:"The grand, the old cinema in the High Street, will close at the end of the year, and reopen on a different site. You've probably seen the building under construction. The plan is to have three screens with fewer seats, rather than just the one large auditorium in the old cinema."},
              {sp:"SHONA", t:"I expect many of you shop in the indoor market. It's become more and more shabby-looking, and because of fears about safety, it was threatened with demolition. The good news is that it will close for 6 weeks to be made safe and redecorated, and the improved building will open in July."},
              {sp:"SHONA", t:"Lots of people use the library, including school and college students who go there to study. The council has managed to secure funding to keep the library open later into the evening, twice a week. We would like to enlarge the building in the not too distant future, but this is by no means definite."},
              {sp:"SHONA", t:"There's no limit on access to the nature reserve on the edge of town, and this will continue to be the case. What will change though, is that the council will no longer be in charge of the area. Instead, it will become the responsibility of a national body that administers most nature reserves in the country. OK, now let me ask you, if you have..."},
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
                qlabel: "Questions 21–26",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "",
                headers: ["Subject of drawing","Change to be made"],
                rows: [
                  {
                    col1: [{text:"A"},{input:21},{text:"surrounded by trees"}],
                    col2: [{text:"Add Malcolm and a"},{input:22},{text:"noticing him"}]
                  },
                  {
                    col1: [{text:"People who are"},{input:23},{text:"outside the forest"}],
                    col2: [{text:"Add Malcolm sitting on a tree trunk and"},{input:24}]
                  },
                  {
                    col1: [{text:"Ice-skaters on"},{input:25},{text:"covered with ice"}],
                    col2: [{text:"Add a"},{input:26},{text:"for each person"}]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 27–30",
                inst: "Who is going to write each of the following parts of the report?<br>Choose the correct letter, <b>A–D</b>, next to Questions 27–30.",
                mapTitle: "Parts of the report",
                mapNote: "<b>A.</b> Helen only<br><b>B.</b> Jeremy only<br><b>C.</b> both Helen and Jeremy<br><b>D.</b> neither Helen nor Jeremy",
                options: ["A","B","C","D"],
                items: [
                  {n:27, label:"how they planned the project"},
                  {n:28, label:"how they had ideas for their stories"},
                  {n:29, label:"an interpretation of their stories"},
                  {n:30, label:"comments on the illustrations"}
                ]
              }
            ],
            answers: {21:"cave",22:"tiger",23:"dancing",24:"crying",25:"grass",26:"scarf",27:"A",28:"C",29:"D",30:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Section 3. You will hear two students called Helen and Jeremy, who are studying creative writing, discussing a project for their course, which involves writing and illustrating stories for children. First, you have some time to look at questions 21 to 26. Now listen carefully, and answer questions 21 to 26."},
              {sp:"JEREMY", t:"Hello, Helen. Sorry I'm late."},
              {sp:"HELEN", t:"Hi, Jeremy. No problem. Well, we'd better work out where we are on our project, I suppose."},
              {sp:"JEREMY", t:"Yeah, I've looked at the drawings you've done for my story, 'The Forest'. And I think they're brilliant. They really create the atmosphere I had in mind when I was writing it."},
              {sp:"HELEN", t:"Uh. I'm glad you like them."},
              {sp:"JEREMY", t:"There are just a few suggestions I'd like to make."},
              {sp:"HELEN", t:"Go ahead."},
              {sp:"JEREMY", t:"Now, I'm not sure about the drawing of the cave. It's got trees all around it, which is great, but the drawing's a bit too static, isn't it? I think it needs some action."},
              {sp:"HELEN", t:"Yes, there's nothing happening. Perhaps I should add the boy Malcolm, isn't it? He would be walking up to it."},
              {sp:"JEREMY", t:"Yes, let's have Malcolm in the drawing. And what about putting in a tiger? The one that he makes friends with a bit later. Maybe it could be sitting under a tree washing itself."},
              {sp:"HELEN", t:"And the tiger stops in the middle of what it's doing when it sees Malcolm walking past."},
              {sp:"JEREMY", t:"That's a good idea."},
              {sp:"HELEN", t:"OK, I'll have a go at that."},
              {sp:"JEREMY", t:"Then there's the drawing of the crowd of men and women dancing. They're just outside the forest, and there's a lot going on."},
              {sp:"HELEN", t:"That's right. You wanted them to be watching a carnival procession, but I thought it would be too crowded. Do you think it works like this?"},
              {sp:"JEREMY", t:"Yes, I like what you've done. The only thing is, could you add Malcolm to it without changing what's already there?"},
              {sp:"HELEN", t:"What about having him sitting on the tree trunk on the right of the picture?"},
              {sp:"JEREMY", t:"Yes, that would be fine."},
              {sp:"HELEN", t:"And do you want him watching the other people?"},
              {sp:"JEREMY", t:"No, he's been left out of all the fun, so I'd like him to be crying. That'll contrast nicely with the next picture. Where he's laughing at the clowns in the carnival."},
              {sp:"HELEN", t:"Right, I'll do that."},
              {sp:"JEREMY", t:"And then the drawing of the people ice skating in the forest."},
              {sp:"HELEN", t:"I wasn't too happy with that one. Because they're supposed to be skating on grass, aren't they?"},
              {sp:"JEREMY", t:"That's right, and it's frozen over. At the moment, it doesn't look quite right."},
              {sp:"HELEN", t:"I see what you mean. I'll have another go at that."},
              {sp:"JEREMY", t:"and I like the wool hats they're wearing. Maybe you could give each of them a scarf as well."},
              {sp:"HELEN", t:"Yeah, that's easy enough. They can be streaming out behind the people to suggest they're skating really fast."},
              {sp:"JEREMY", t:"great. Well, that's all on the drawings."},
              {sp:"HELEN", t:"Right. So you've finished writing your story, and I just need to finish illustrating it. And my story and your drawings are done."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 27 to 30. Now listen and answer questions 27 to 30."},
              {sp:"HELEN", t:"So, the next thing is to decide what exactly we need to write about in the report that goes with the stories, and how we're going to divide the work."},
              {sp:"JEREMY", t:"Right, Helen."},
              {sp:"HELEN", t:"What do you think about including a section on how we planned the project as a whole, Jeremy? That's probably quite important."},
              {sp:"JEREMY", t:"Yeah, well you've had most of the good ideas so far. How do you feel about drafting something? Then we can go through it together and discuss it."},
              {sp:"HELEN", t:"OK, that seems reasonable. And I could include something on how we came up with the ideas for our two stories, couldn't I?"},
              {sp:"JEREMY", t:"Well, I've started writing something about that, so why don't you do the same, and we can include the two things."},
              {sp:"HELEN", t:"Right. So what about our interpretation of the stories? Do we need to write about what we think they show, like the value of helping other people, all that sort of thing?"},
              {sp:"JEREMY", t:"That's gonna come up later, isn't it? I think everyone in the class is going to read each other's stories and come up with their own interpretations. Which we're going to discuss."},
              {sp:"HELEN", t:"Oh, I missed that. So it isn't going to be part of the report at all."},
              {sp:"JEREMY", t:"No, but we need to write about the illustrations because they're an essential element of children's experience of reading the stories. It's probably easiest for you to write that section, as you know more about drawing than I do."},
              {sp:"HELEN", t:"Maybe, but I find it quite hard to write about. I'd be happier if you did it."},
              {sp:"JEREMY", t:"OK, so when do you think..."},
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
                notesTitle: "ETHNOGRAPHY IN BUSINESS",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Ethnography: research which explores human cultures", input:null, after:""},
                      {n:null, before:"It can be used in business:", input:null, after:""},
                      {n:null, before:"to investigate customer needs and", input:31, after:""},
                      {n:null, before:"to help companies develop new designs", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Examples of ethnographic research in business",
                    items: [
                      {n:null, before:"Kitchen equipment", input:null, after:""},
                      {n:null, before:"Researchers found that cooks could not easily see the", input:32, after:"in measuring cups."},
                      {n:null, before:"Cell phones", input:null, after:""},
                      {n:null, before:"In Uganda, customers paid to use the cell phones of entrepreneurs.", input:null, after:""},
                      {n:null, before:"These customers wanted to check the", input:33, after:"used."},
                      {n:null, before:"Computer companies", input:null, after:""},
                      {n:null, before:"There was a need to develop", input:34, after:"to improve communication between system administrators and colleagues."},
                      {n:null, before:"Hospitals", input:null, after:""},
                      {n:null, before:"Nurses needed to access information about", input:35, after:"in different parts of the hospital."},
                      {n:null, before:"Airlines", input:null, after:""},
                      {n:null, before:"Respondents recorded information about their", input:36, after:"while travelling."}
                    ]
                  },
                  {
                    heading: "Principles of ethnographic research in business",
                    items: [
                      {n:null, before:"The researcher does not start off with a hypothesis.", input:null, after:""},
                      {n:null, before:"Participants may be selected by criteria such as age,", input:37, after:"or product used."},
                      {n:null, before:"The participants must feel", input:38, after:"about taking part in the research."},
                      {n:null, before:"There is usually direct", input:39, after:"of the participants."},
                      {n:null, before:"The interview is guided by the participant.", input:null, after:""},
                      {n:null, before:"A lot of time is needed for the", input:40, after:"of the data."},
                      {n:null, before:"Researchers look for a meaningful pattern in the data.", input:null, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"attitudes",32:"numbers",33:"time",34:"software",35:"patients",36:"emotions",37:"income",38:"comfortable",39:"observation",40:"analysis"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. You will hear part of a lecture to business students about the use of one particular type of research known as ethnography. First, you have some time to look at questions 31 to 40. Now listen carefully, and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"So what I'm going to talk about to you today is something called ethnography. This is a type of research aimed at exploring the way human cultures work. It was first developed for use in anthropology, and it's also been used in sociology and communication studies. So, what's it got to do with business? You may ask. Well, businesses are finding that ethnography can offer them deeper insight into the possible needs of customers, either present or future, as well as providing valuable information about their attitudes towards existing products. And ethnography can also help companies to design new products or services that customers really want."},
              {sp:"SPEAKER", t:"Let's look at some examples of how ethnographic research works in business. One team of researchers did a project for a company manufacturing kitchen equipment. They watched how cooks used measuring cups to measure out things like sugar and flour. They saw that the cooks had to check and recheck the contents, because although the measuring cups had numbers inside them, the cooks couldn't see these easily. So, a new design of cup was developed to overcome this problem, and it was a top seller."},
              {sp:"SPEAKER", t:"Another team of ethnographic researchers looked at how cell phones were used in Uganda in Africa. They found that people who didn't have their own phones could pay to use the phones of local entrepreneurs, because these customers paid in advance for their calls. They were eager to know how much time they'd spent on the call so far. So the phone company designed phones for use globally with this added feature."},
              {sp:"SPEAKER", t:"Ethnographic research has also been carried out in computer companies. In one company, IT systems administrators were observed for several weeks. It was found that a large amount of their work involved communicating with colleagues in order to solve problems, but that they didn't have a standard way of exchanging information from spreadsheets and so on. So, the team came up with an idea for software that would help them to do this."},
              {sp:"SPEAKER", t:"In another piece of research, a team observed and talked to nurses working in hospitals. This led to the recognition that the nurses needed to access the computer records of their patients, no matter where they were. This led to the development of a portable computer tablet that allowed the nurses to check records in locations throughout the hospital."},
              {sp:"SPEAKER", t:"Occasionally, research can be done even in environments where the researchers can't be present. For example, in one project done for an airline, respondents used their smartphones to record information during airline trips, in a study aiming at tracking the emotions of passengers during a flight."},
              {sp:"SPEAKER", t:"So, what makes studies like these different from ordinary research? Let's look at some of the general principles behind ethnographic research in business. First of all, the researcher has to be completely open-minded. He or she hasn't thought up a hypothesis to be tested, as is the case in other types of research. Instead, they wait for the participants in the research to inform them."},
              {sp:"SPEAKER", t:"As far as choosing the participants themselves is concerned, that's not really all that different from ordinary research. The criteria according to which the participants are chosen may be something as simple as the age bracket they fall into, or the researchers may select them according to their income. Or they might try to find a set of people who all use a particular product for example, but it's absolutely crucial to recruit the right people as participants. As well as the criteria I've mentioned, they have to be comfortable talking about themselves, and being watched as they go about their activities. Actually, most researchers say that people open up pretty easily. Maybe because they're often in their own home or workplace."},
              {sp:"SPEAKER", t:"So, what makes this type of research special is that it's not just a matter of sending a questionnaire to the participants. Instead, the research is usually based on first-hand observation of what they are doing at the time. But that doesn't mean that the researcher never talks to the participants. However, unlike in traditional research, in this case, it's the participant rather than the researchers who decides what direction the interview will follow. This means that there's less likelihood of the researcher imposing his or her own ideas on the participant."},
              {sp:"SPEAKER", t:"But after they've said goodbye to their participants and got back to their office, the researcher's work isn't finished. Most researchers estimate that 70 to 80% of their time is spent not on the collecting of data, but on its analysis, looking at photos, listening to recordings and transcribing them, and so on. The researchers may end up with hundreds of pages of notes, and to determine what's significant, they don't focus on the sensational things or the unusual things. Instead, they try to identify a pattern of some sort in all this data, and to discern the meaning behind it. This can result in some compelling insights, that can in turn feed back to the whole design process."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 11 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2011%20test%204%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Section 1",
            qlabel: "Questions 1–10",
            blocks: [
              {
                type: "table",
                qlabel: "Questions 1–7",
                inst: "Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "",
                headers: ["Event","Cost","Venue","Notes"],
                rows: [
                  {
                    cells: [
                      [{text:"Jazz band"}],
                      [{text:"(Example) Tickets available for £"},{text:"15"}],
                      [{text:"The"},{input:1},{text:"school"}],
                      [{text:"Also appearing: Carolyn Hart (plays the"},{input:2},{text:")"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Duck races"}],
                      [{text:"£1 per duck"}],
                      [{text:"Start behind the"},{input:3}],
                      [{text:"Prize: tickets for"},{input:4},{text:"held at the end of the festival. Ducks can be bought in the"},{input:5}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Flower show"}],
                      [{text:"Free"}],
                      [{input:6},{text:"Hall"}],
                      [{text:"Prizes presented at 5 pm by a well-known"},{input:7}]
                    ]
                  }
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 8–10",
                inst: "Who is each play suitable for?<br>Choose the correct letter, <b>A–C</b>, next to Questions 8–10.",
                mapTitle: "Plays",
                mapNote: "<b>A.</b> mainly for children<br><b>B.</b> mainly for adults<br><b>C.</b> suitable for people of all ages",
                options: ["A","B","C"],
                items: [
                  {n:8, label:"The Mystery of Muldoon"},
                  {n:9, label:"Fire and Flood"},
                  {n:10, label:"Silly Sailor"}
                ]
              }
            ],
            answers: {1:"secondary",2:"flute",3:"cinema",4:"concert",5:"market",6:"Bythwaite",7:"actor",8:"A",9:"B",10:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Section 1. A woman named Melanie phones the Stretton Festival box office to ask Rob about events during her family's holiday."},
              {sp:"ROB", t:"Confirms jazz band tickets are still available, but only at \u00a315 (the \u00a312 seats are sold out), at the secondary school (not the primary school). Mentions a surprise guest, flute player Carolyn Hart, who usually performs with symphony orchestras and is appearing with the jazz band for the first time."},
              {sp:"MELANIE", t:"Asks about the duck races she saw advertised by the river."},
              {sp:"ROB", t:"Explains each plastic duck costs \u00a31, bought from a stall with a big duck sign in the market. Local swimming champion John Stevens will start the races. Ducks are launched into the river behind the cinema and float 500m to the railway bridge; the winning duck in each race earns its owner free tickets to the festival's closing-night concert."},
              {sp:"MELANIE", t:"Asks about the flower show."},
              {sp:"ROB", t:"Says admission is free, held in Bythwaite Hall (spelled out), the only old building in town and easy to find in the centre of Stretton. Prizes for best flowers are awarded at 5pm by a well-known actor, Kevin Shapeless, a local celebrity."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 8 to 10."},
              {sp:"MELANIE", t:"Asks which of three plays would suit her children (aged 5 and 7) versus herself and her husband."},
              {sp:"ROB", t:"Explains 'The Mystery of Muldoon' is aimed at 5-10 year-olds (mainly for children); 'Fire and Flood' is about a frightening real historical event in Stretton 200 years ago, better suited to adults while children stay with a babysitter; and 'Silly Sailor' is a comedy suitable for young and old, having recently won an award at the Stretton Drama Festival."},
              {sp:"ANNOUNCER", t:"That is the end of section 1. You now have half a minute to check your answers."}
            ]
          },
          2: {
            n: 2,
            label: "Section 2",
            qlabel: "Questions 11–20",
            blocks: [
              {
                type: "map_label",
                qlabel: "Questions 11–16",
                inst: "What does the speaker say about each of the following collections?<br>Choose the correct letter, <b>A–G</b>, next to Questions 11–16.",
                mapTitle: "Comments",
                mapNote: "<b>A.</b> was given by one person<br><b>B.</b> was recently publicised in the media<br><b>C.</b> includes some items given by members of the public<br><b>D.</b> includes some items given by the artists<br><b>E.</b> includes the most popular exhibits in the museum<br><b>F.</b> is the largest of its kind in the country<br><b>G.</b> has had some of its contents relocated",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:11, label:"20th- and 21st-century paintings"},
                  {n:12, label:"19th-century paintings"},
                  {n:13, label:"Sculptures"},
                  {n:14, label:"'Around the world' exhibition"},
                  {n:15, label:"Coins"},
                  {n:16, label:"Porcelain and glass"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 17–20",
                inst: "Label the plan below.<br>Choose the correct letter, <b>A–H</b>, next to Questions 17–20.",
                mapTitle: "Basement of museum",
                mapImage: "data:image/png;base64,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",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:17, label:"restaurant"},
                  {n:18, label:"café"},
                  {n:19, label:"baby-changing facilities"},
                  {n:20, label:"cloakroom"}
                ]
              }
            ],
            answers: {11:"E",12:"D",13:"G",14:"B",15:"C",16:"A",17:"E",18:"D",19:"B",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Section 2. A museum guide named Greg welcomes a group of visitors and introduces the museum's collections."},
              {sp:"GREG", t:"Says the 20th- and 21st-century paintings gallery features well-known artists and attracts the most visitors, so it's best seen early before crowds arrive. The 19th-century paintings are special because, when the museum opened, several artists each donated a work to help establish the collection."},
              {sp:"GREG", t:"Explains the Sculpture Gallery is closed for refurbishment, though some sculptures have been moved to other parts of the museum. The 'Around the World' exhibition is a temporary show, recently covered in the media (TV and newspapers), presenting objects from many countries with social context."},
              {sp:"GREG", t:"Describes the coin collection as locally-sourced (all coins from this country, 1,000-2,000 years old), many donated by members of the public after being found while gardening. The porcelain and glass collection was entirely donated by the museum's founder when he died in 1878, and per his will, nothing more can be added to it."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 17 to 20."},
              {sp:"GREG", t:"Gives directions around the basement. Coming down the stairs leads to a sitting area. For the restaurant: go straight ahead to the far side of the sitting area, then turn right into the corridor, where the restaurant door faces you."},
              {sp:"GREG", t:"For the cafe: from the bottom of the stairs go straight ahead, turn right into the corridor, and the cafe is immediately on the right - a good option for a snack or for eating with children."},
              {sp:"GREG", t:"For baby-changing facilities: cross the sitting area and continue straight ahead along the corridor on the left; the facilities are on the left-hand side."},
              {sp:"GREG", t:"For the cloakroom (for coats, umbrellas, large bags): it's on the left-hand side of the sitting area, through the last door before the corridor. Toilets on this floor are the first rooms on the left at the bottom of the stairs."},
              {sp:"ANNOUNCER", t:"That is the end of section 2. You now have half a minute to check your answers."}
            ]
          },
          3: {
            n: 3,
            label: "Section 3",
            qlabel: "Questions 21–30",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 21 and 22",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>21–22</b>&nbsp; Which TWO characteristics were shared by the subjects of Joanna's psychology study?",
                qns: [21,22],
                options: [
                  {letter:"A", text:"They had all won prizes for their music."},
                  {letter:"B", text:"They had all made music recordings."},
                  {letter:"C", text:"They were all under 27 years old."},
                  {letter:"D", text:"They had all toured internationally."},
                  {letter:"E", text:"They all played a string instrument."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 23 and 24",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>23–24</b>&nbsp; Which TWO points does Joanna make about her use of telephone interviews?",
                qns: [23,24],
                options: [
                  {letter:"A", text:"It meant rich data could be collected."},
                  {letter:"B", text:"It allowed the involvement of top performers."},
                  {letter:"C", text:"It led to a stressful atmosphere at times."},
                  {letter:"D", text:"It meant interview times had to be limited."},
                  {letter:"E", text:"It caused some technical problems."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 25 and 26",
                inst: "Choose <b>TWO</b> letters, <b>A–E</b>.<br><b>25–26</b>&nbsp; Which TWO topics did Joanna originally intend to investigate in her research?",
                qns: [25,26],
                options: [
                  {letter:"A", text:"regulations concerning concert dress"},
                  {letter:"B", text:"audience reactions to the dress of performers"},
                  {letter:"C", text:"changes in performer attitudes to concert dress"},
                  {letter:"D", text:"how choice of dress relates to performer roles"},
                  {letter:"E", text:"links between musical instrument and dress choice"}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 27–30",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "",
                items: [
                  {n:27, q:"Joanna concentrated on women performers because", opts:["women are more influenced by fashion.","women's dress has led to more controversy.","women's code of dress is less strict than men's."]},
                  {n:28, q:"Mike Frost's article suggests that in popular music, women's dress is affected by", opts:["their wish to be taken seriously.","their tendency to copy each other.","their reaction to the masculine nature of the music."]},
                  {n:29, q:"What did Joanna's subjects say about the audience at a performance?", opts:["The musicians' choice of clothing is linked to respect for the audience.","The clothing should not distract the audience from the music.","The audience should make the effort to dress appropriately."]},
                  {n:30, q:"According to the speakers, musicians could learn from sports scientists about", opts:["the importance of clothing for physical freedom.","the part played by clothing in improving performance.","the way clothing may protect against physical injury."]}
                ]
              }
            ],
            answers: {21:"B",22:"D",23:"A",24:"B",25:"B",26:"E",27:"C",28:"A",29:"A",30:"C"},
            multiGroups: [[21,22],[23,24],[25,26]],
            script: [
              {sp:"ANNOUNCER", t:"Section 3. A new supervisor talks to a student called Joanna about a psychology study she completed for her master's degree, looking at musicians and how they dress for performances."},
              {sp:"SUPERVISOR", t:"Asks how Joanna chose her subjects."},
              {sp:"JOANNA", t:"Explains she had six subjects, all professional female musicians (three violinists, plus a cellist, a pianist and a flute player), all highly regarded with international touring experience, aged 25 to 29 (mean age 27.8), and all of whom had made recordings."},
              {sp:"SUPERVISOR", t:"Asks about how the data was collected."},
              {sp:"JOANNA", t:"Says the interviews were done by phone because the musicians were too busy to meet in person. She used a telephone recording adapter and worried about sound quality, but it worked fine. Each interview lasted at least 30 minutes, sometimes longer, and felt informal — the musicians seemed keen to talk, so the phone format didn't reduce the richness of the data."},
              {sp:"SUPERVISOR", t:"Notes that Joanna's research looked at how performers dress for concerts."},
              {sp:"JOANNA", t:"Explains her research ended up examining how performers' sense of their role as a musician relates to the clothing they choose to wear — but this wasn't her original focus. At the start she was more interested in how an audience reacts to what a performer wears, and whether instrument type (e.g. violin vs. flute/trumpet) affects clothing choice. She also notes there are rarely strict dress rules in orchestras."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 27 to 30."},
              {sp:"SUPERVISOR", t:"Asks why Joanna's study only included women, wondering if men care less about fashion."},
              {sp:"JOANNA", t:"Says many male musicians are influenced by fashion too, but socially their clothing choices are far more constrained — audiences would react badly if men strayed outside narrow norms, so women's dress code is comparatively less strict."},
              {sp:"SUPERVISOR", t:"Mentions an article by Mike Frost about women's dress in popular music — female pop performers often dress down (e.g. jeans instead of skirts), which Frost suggests is so they aren't dismissed as unserious/trivial."},
              {sp:"JOANNA", t:"Counters that this could simply be practical, since pop concerts are physically energetic."},
              {sp:"SUPERVISOR", t:"Agrees that's plausible, and asks about audience expectations regarding performer dress."},
              {sp:"JOANNA", t:"Says her subjects felt this mattered a lot — performance is a public event, audiences have certain expectations, and performers feel it's their duty to meet those expectations as a form of respect/esteem toward the audience. She adds that audiences themselves used to dress up for concerts too, though that's less common in the UK now."},
              {sp:"SUPERVISOR", t:"Raises the idea of learning from sports science, since musicians' repetitive movements could make sports-clothing features (designed to protect against injury) relevant."},
              {sp:"JOANNA", t:"Agrees in principle, but says musicians don't really think about it beyond avoiding clothes that restrict movement. She then mentions she's interested in extending the research to include an audience."},
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
                notesTitle: "The use of soil to reduce carbon dioxide (CO\u2082) in the atmosphere",
                groups: [
                  {
                    heading: "Rattan Lal",
                    items: [
                      {n:null, before:"Claims that 13% of CO\u2082 in the atmosphere could be absorbed by agricultural soils", input:null, after:""},
                      {n:null, before:"Erosion is more likely in soil that is", input:31, after:""},
                      {n:null, before:"Lal found soil in Africa that was very", input:32, after:""},
                      {n:null, before:"It was suggested that carbon from soil was entering the atmosphere", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Soil and carbon",
                    items: [
                      {n:null, before:"plants turn CO\u2082 from the air into carbon-based substances such as", input:33, after:""},
                      {n:null, before:"some CO\u2082 moves from the", input:34, after:"of plants to microbes in the soil"},
                      {n:null, before:"carbon was lost from the soil when agriculture was invented", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Regenerative agriculture",
                    items: [
                      {n:null, before:"uses established practices to make sure soil remains fertile and", input:35, after:""},
                      {n:null, before:"e.g. through year-round planting and increasing the", input:36, after:"of plants that are grown"}
                    ]
                  },
                  {
                    heading: "California study",
                    items: [
                      {n:null, before:"taking place on a big", input:37, after:"farm"},
                      {n:null, before:"uses compost made from waste from agriculture and", input:38, after:""}
                    ]
                  },
                  {
                    heading: "Australia study",
                    items: [
                      {n:null, before:"aims to increase soil carbon by using", input:39, after:"that are always green"}
                    ]
                  },
                  {
                    heading: "Future developments may include",
                    items: [
                      {n:null, before:"reducing the amount of fertilizer used in farming", input:null, after:""},
                      {n:null, before:"giving farmers", input:40, after:"for carbon storage, as well as their produce"}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"dry",32:"hard",33:"sugars",34:"roots",35:"moist",36:"variety",37:"cattle",38:"gardens",39:"grasses",40:"payment"},
            script: [
              {sp:"ANNOUNCER", t:"Section 4. A lecture on using soil to help reduce atmospheric carbon dioxide and slow climate change."},
              {sp:"SPEAKER", t:"Introduces Rattan Lal, a soil scientist from Ohio State University, who claims agricultural soils worldwide could absorb around 13% of atmospheric CO\u2082 (roughly equal to 30 years of emissions). Lal's interest began not with climate change but with concern for land and the people depending on it: carbon-rich soil is dark, crumbly, fertile and retains water, whereas dry, carbon-poor soil erodes easily, harming farming."},
              {sp:"SPEAKER", t:"In the 1970s-80s, Lal studied African soils so depleted of organic matter that they had become extremely hard, almost like cement. A pioneering climate scientist he met there suggested that this hardness was linked to carbon escaping from the soil into the atmosphere — an idea now considered increasingly likely."},
              {sp:"SPEAKER", t:"Explains the natural plant-microbe partnership: for millions of years plants absorbed CO\u2082 and converted it into sugars and other carbon compounds, some of which moved from the roots into soil fungi and microbes, where the carbon was stored. The invention of agriculture about 10,000 years ago disrupted this — draining and plowing soil, and grazing animals stripping vegetation, exposed buried carbon to oxygen and released it as CO\u2082."},
              {sp:"SPEAKER", t:"Describes 'regenerative agriculture' — practices that keep soil fertile and moist, such as keeping fields planted year-round and increasing the variety of crops grown, both of which boost the amount of carbon stored in soil."},
              {sp:"SPEAKER", t:"Gives two ongoing research examples. In California, Whendee Silver (UC Berkeley) is running a first-of-its-kind study on a large cattle farm, testing how compost made from agricultural waste (manure, cornstalks) and garden waste (leaves, branches, lawn trimmings) affects carbon storage. In Australia, Christine Jones is working with 12 farmers to build soil carbon by growing grasses that stay green all year round — already proven experimentally, and now being tested on working farms with measurable carbon capture."},
              {sp:"SPEAKER", t:"Concludes that future steps could include reducing fertilizer use and paying farmers not just for crops or livestock, but also for the carbon they store in their soil — as Rattan Lal argues."},
              {sp:"ANNOUNCER", t:"That is the end of Section 4. You now have half a minute to check your answers."}
            ]
          }
        }
      }
    }
  }
});
