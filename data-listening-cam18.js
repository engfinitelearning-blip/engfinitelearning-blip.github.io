// EngFinite Learning — Listening Test Data (CAM18)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam18: {
    tests: {
      1: {
        title: "Cambridge IELTS 18 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2018%20test%201%20.mp3",
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
                notesTitle: "TRANSPORT SURVEY",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"Name: Sadie Jones", input:null, after:""},
                      {n:null, before:"Year of birth: 1991", input:null, after:""},
                      {n:1, before:"Postcode:", input:1, after:""}
                    ]
                  },
                  {
                    heading: "Travelling by bus",
                    items: [
                      {n:2, before:"Date of bus journey:", input:2, after:"", indent:true},
                      {n:3, before:"Reason for trip: shopping and visit to the", input:3, after:"", indent:true},
                      {n:4, before:"Travelled by bus because cost of", input:4, after:"too high", indent:true},
                      {n:5, before:"Got on bus at", input:5, after:"Street", indent:true},
                      {n:null, before:"Complaints about bus service:", input:null, after:"", indent:true},
                      {n:6, before:"bus today was", input:6, after:"", indent:true},
                      {n:7, before:"frequency of buses in the", input:7, after:"", indent:true}
                    ]
                  },
                  {
                    heading: "Travelling by car",
                    items: [
                      {n:8, before:"Goes to the", input:8, after:"by car", indent:true}
                    ]
                  },
                  {
                    heading: "Travelling by bicycle",
                    items: [
                      {n:9, before:"Dislikes travelling by bike in the city centre because of the", input:9, after:"", indent:true},
                      {n:10, before:"Doesn't own a bike because of a lack of", input:10, after:"", indent:true}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"DW307YZ",2:"24 April",3:"dentist",4:"parking",5:"Claxby",6:"late",7:"evening",8:"supermarket",9:"pollution",10:"storage"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear an interview with a woman who is doing a survey on transport. First, you have some time to look at questions 1 to 5. Now listen carefully and answer questions 1 to 5."},
              {sp:"MAN", t:"Excuse me, would you mind if I asked you some questions? We're doing a survey on transport."},
              {sp:"SADIE", t:"Yes, that's OK."},
              {sp:"MAN", t:"First of all can I take your name?"},
              {sp:"SADIE", t:"Yes, it's Sadie Jones."},
              {sp:"MAN", t:"Thanks very much. And could I have your date of birth? Just the year will do, actually. Is that all right?"},
              {sp:"SADIE", t:"Uh. Yes, that's fine. It's 1991."},
              {sp:"MAN", t:"So, next your post code please."},
              {sp:"SADIE", t:"It's DW307YZ."},
              {sp:"MAN", t:"Great, thanks. Is that in Wells?"},
              {sp:"SADIE", t:"No, it's actually in Harborne. Wells isn't far from there, though."},
              {sp:"MAN", t:"I really like that area. My grandmother lived there when I was a kid."},
              {sp:"SADIE", t:"Yes, it is nice."},
              {sp:"MAN", t:"Right, so now I want to ask you some questions about how you traveled here today. Did you use public transport?"},
              {sp:"SADIE", t:"Yes, I came by bus."},
              {sp:"MAN", t:"OK, and that was today. It's the 24th of April, isn't it?"},
              {sp:"SADIE", t:"Isn't it the 25th uh, no, ha, actually you're right."},
              {sp:"MAN", t:"Ha ha ha. And what was the reason for your trip today? I can see you've got some shopping with you."},
              {sp:"SADIE", t:"Yes, I did some shopping, but the main reason I came here was to go to the dentist."},
              {sp:"MAN", t:"That's not much fun. Hope it was nothing serious."},
              {sp:"SADIE", t:"No, it was just a check-up. It's fine."},
              {sp:"MAN", t:"Good. Do you normally travel by bus into the city center?"},
              {sp:"SADIE", t:"Yes, I stopped driving ages ago, because parking was so difficult to find, and it cost so much."},
              {sp:"MAN", t:"I see."},
              {sp:"SADIE", t:"The bus is much more convenient too. It only takes about 30 minutes."},
              {sp:"MAN", t:"That's good. So where did you start your journey?"},
              {sp:"SADIE", t:"At the bus stop on Claxby Street."},
              {sp:"MAN", t:"Is that CLAXBY?"},
              {sp:"SADIE", t:"That's right."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 6 to 10. Now listen and answer questions 6 to 10."},
              {sp:"MAN", t:"And how satisfied with the service are you? Do you have any complaints?"},
              {sp:"SADIE", t:"Well, as I said, it's very convenient and quick when it's on time. But this morning it was late, only about 10 minutes, but still."},
              {sp:"MAN", t:"Yes, I understand that's annoying. And what about the timetable? Do you have any comments about that?"},
              {sp:"SADIE", t:"Hmm, I suppose I mainly use the bus during the day, but anytime I've been in town in the evening. Uh. For dinner or at the cinema. I've noticed you have to wait a long time for a bus. Uh. There aren't that many."},
              {sp:"MAN", t:"OK, thanks. So now, I'd like to ask you about your car use."},
              {sp:"SADIE", t:"Well, I have got a car, but I don't use it that often. Mainly just to go to the supermarket. But that's about it really. My husband uses it at the weekends to go to the golf club."},
              {sp:"MAN", t:"And what about a bicycle?"},
              {sp:"SADIE", t:"I don't actually have one at the moment."},
              {sp:"MAN", t:"What about the city bikes you can rent? Do you ever use those?"},
              {sp:"SADIE", t:"No, I'm not keen on cycling there because of all the pollution. But I would like to get a bike. It would be good to use it to get to work."},
              {sp:"MAN", t:"So, why haven't you got one now?"},
              {sp:"SADIE", t:"Well, I live in a flat on the 2nd floor. And it doesn't have any storage, so we'd have to leave it in the hall outside the flat."},
              {sp:"MAN", t:"I see. OK, well I think that's all we need from you today..."},
              {sp:"ANNOUNCER", t:"That is the end of part 1. You now have one minute to check your answers to part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 11\u201313",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Becoming a volunteer for ACE",
                items: [
                  {n:11, q:"Why does the speaker apologise about the seats?", opts:["They are too small.","There are not enough of them.","Some of them are very close together."]},
                  {n:12, q:"What does the speaker say about the age of volunteers?", opts:["The age of volunteers is less important than other considerations.","Young volunteers are less reliable than older ones.","Most volunteers are about 60 years old."]},
                  {n:13, q:"What does the speaker say about training?", opts:["It is continuous.","It is conducted by a manager.","It takes place online."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 14 and 15",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers?",
                qns: [14,15],
                options: [
                  {letter:"A", text:"their financial situation"},
                  {letter:"B", text:"their level of commitment"},
                  {letter:"C", text:"their work experience"},
                  {letter:"D", text:"their ambition"},
                  {letter:"E", text:"their availability"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 16\u201320",
                inst: "What does the speaker suggest would be helpful for each of the following areas of voluntary work?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 16\u201320.",
                mapNoteTitle: "Helpful things volunteers might offer",
                mapTitle: "Area of voluntary work",
                mapNote: "A. experience on stage<br>B. original, new ideas<br>C. parenting skills<br>D. an understanding of food and diet<br>E. retail experience<br>F. a good memory<br>G. a good level of fitness",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:16, label:"Fundraising"},
                  {n:17, label:"Litter collection"},
                  {n:18, label:"'Playmates'"},
                  {n:19, label:"Story club"},
                  {n:20, label:"First aid"}
                ]
              }
            ],
            multiGroups: [[14,15]],
            answers: {11:"C",12:"A",13:"A",14:"B",15:"E",16:"B",17:"G",18:"D",19:"A",20:"F"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear a woman speaking to a group of people who are interested in becoming volunteers for an organization called ACE. First, you have some time to look at questions 11 to 15. Now listen carefully and answer questions 11 to 15."},
              {sp:"SPEAKER", t:"Good evening everyone. Let me start by welcoming you all to this talk, and thanking you for taking the time to consider joining ACE voluntary organization. ACE offers support to people and services in the local area, and we're now looking for more volunteers to help us do this. By the way, I hope you're all comfortable. We have brought in extra seats so that no one has to stand, but it does mean that the people at the back of the room may be a bit squashed. We'll only be here for about half an hour, so, hopefully, that's OK."},
              {sp:"SPEAKER", t:"One of the first questions we're often asked is how old you need to be to volunteer. Well, you can be as young as 16, or you can be 60 or over. It all depends on what type of voluntary work you want to do. Other considerations such as reliability are crucial in voluntary work. And age isn't related to these in our experience. Another question we get asked relates to training. Well, there's plenty of that, and it's all face to face. What's more, training doesn't end when you start working for us. It takes place before, during, and after periods of work. Often it's run by other experienced volunteers, as managers tend to prefer to get on with other things."},
              {sp:"SPEAKER", t:"Now, I would ask you to consider a couple of important issues before you decide to apply for voluntary work. We don't worry about why you want to be a volunteer. People have many different reasons that range from getting work experience to just doing something they've always wanted to do, but it is critical that you have enough hours in the day. For whatever role we agree is suitable for you. If being a volunteer becomes stressful, then it's best not to do it at all. You may think that your income is important. But we don't ask about that. It's up to you to decide if you can work without earning money. What we value is dedication. Some of our most loyal volunteers earn very little themselves. But still give their full energy to the work they do with us."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 16 to 20. Now listen and answer questions 16 to 20."},
              {sp:"SPEAKER", t:"OK, so let's take a look at some of the work areas that we need volunteers for, and the sort of things that would help you in those. You may wish simply to help us raise money. If you have the creativity to come up with an imaginative or novel way of fundraising, we'd be delighted. As standing in the local streets or shops with a collection box can be rather boring. One outdoor activity that we need volunteers for is litter collection, and for this it's useful if you can walk for long periods, sometimes uphill. Some of our regular collectors are quite elderly, but very active and keen to protect the environment. If you enjoy working with children, we have three vacancies for what are called playmates. These volunteers help children learn about staying healthy. Through a range of out of school activities. You don't need to have children yourself, but it's good if you know something about nutrition, and can give clear instructions."},
              {sp:"SPEAKER", t:"If that doesn't appeal to you, maybe you would be interested in helping out at our story club for disabled children, especially if you have done some acting. We put on three performances a year based on books they have read, and we're always looking for support with the theatrical side of this. The last area I'll mention today is first aid. Volunteers who join this group can end up teaching others in vulnerable groups who may be at risk of injury. Initially though, your priority will be to take in a lot of information, and not forget any important steps or details. Right, so does anyone have any questions..."},
              {sp:"ANNOUNCER", t:"That is the end of part 2. You now have 30 seconds to check your answers to part 2."}
            ]
          },
          3: {
            n: 3,
            label: "Part 3",
            qlabel: "Questions 21\u201330",
            blocks: [
              {
                type: "mcq",
                qlabel: "Questions 21\u201326",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Talk on jobs in fashion design",
                items: [
                  {n:21, q:"What problem did Chantal have at the start of the talk?", opts:["Her view of the speaker was blocked.","She was unable to find an empty seat.","The students next to her were talking."]},
                  {n:22, q:"What were Hugo and Chantal surprised to hear about the job market?", opts:["It has become more competitive than it used to be.","There is more variety in it than they had realised.","Some areas of it are more exciting than others."]},
                  {n:23, q:"Hugo and Chantal agree that the speaker's message was", opts:["unfair to them at times.","hard for them to follow.","critical of the industry."]},
                  {n:24, q:"What do Hugo and Chantal criticise about their school careers advice?", opts:["when they received the advice","how much advice was given","who gave the advice"]},
                  {n:25, q:"When discussing their future, Hugo and Chantal disagree on", opts:["which is the best career in fashion.","when to choose a career in fashion.","why they would like a career in fashion."]},
                  {n:26, q:"How does Hugo feel about being an unpaid assistant?", opts:["He is realistic about the practice.","He feels the practice is dishonest.","He thinks others want to change the practice."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 27 and 28",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO mistakes did the speaker admit she made in her first job?",
                qns: [27,28],
                options: [
                  {letter:"A", text:"being dishonest to her employer"},
                  {letter:"B", text:"paying too much attention to how she looked"},
                  {letter:"C", text:"expecting to become well known"},
                  {letter:"D", text:"trying to earn a lot of money"},
                  {letter:"E", text:"openly disliking her client"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 29 and 30",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO pieces of retail information do Hugo and Chantal agree would be useful?",
                qns: [29,30],
                options: [
                  {letter:"A", text:"the reasons people return fashion items"},
                  {letter:"B", text:"how much time people have to shop for clothes"},
                  {letter:"C", text:"fashion designs people want but can't find"},
                  {letter:"D", text:"the best time of year for fashion buying"},
                  {letter:"E", text:"the most popular fashion sizes"}
                ]
              }
            ],
            multiGroups: [[27,28],[29,30]],
            answers: {21:"A",22:"B",23:"A",24:"C",25:"B",26:"A",27:"B",28:"E",29:"A",30:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear two students called Hugo and Chantal discussing a talk they have just attended at the start of their course in fashion design. First, you have some time to look at questions 21 to 26 now listen carefully and answer questions 21 to 26."},
              {sp:"HUGO", t:"Hi, Chantal. What did you think of the talk then?"},
              {sp:"CHANTAL", t:"Hi, Hugo. I thought it was good once I'd moved seats."},
              {sp:"HUGO", t:"Oh, were the people beside you chatting or something?"},
              {sp:"CHANTAL", t:"It wasn't that. I went early so that I'd get a seat and not have to stand, but then this guy sat right in front of me, and he was so tall."},
              {sp:"HUGO", t:"It's hard to see through people's heads, isn't it?"},
              {sp:"CHANTAL", t:"Impossible. Anyway, to answer your question, I thought it was really interesting. Especially what the speaker said about the job market."},
              {sp:"HUGO", t:"Me too. I mean we know we're going into a really competitive field, so it's obvious that we may struggle to get work."},
              {sp:"CHANTAL", t:"That's right. And we know we can't all have that dream job."},
              {sp:"HUGO", t:"Yeah, but it looks like there's a whole range of areas of work that we hadn't even thought of. Like fashion journalism for instance."},
              {sp:"CHANTAL", t:"Yeah, I wasn't expecting so many career options."},
              {sp:"HUGO", t:"Hmm, overall she had quite a strong message, didn't she?"},
              {sp:"CHANTAL", t:"She did. She kept saying things like 'I know you all think this, but...' and then she'd tell us how it really is."},
              {sp:"HUGO", t:"Perhaps she thinks students are a bit narrow-minded about the industry."},
              {sp:"CHANTAL", t:"It was a bit harsh though. We know it's a tough industry."},
              {sp:"HUGO", t:"Yeah, and we're only first years after all. We've got a lot to learn."},
              {sp:"CHANTAL", t:"Exactly. Do you think our secondary-school education should have been more career focused?"},
              {sp:"HUGO", t:"Well, we had numerous talks on careers, which was good, but none of them were very inspiring. They could have asked more people like today's speaker to talk to us."},
              {sp:"CHANTAL", t:"I agree. We were told about lots of different careers, just when we needed to be, but not by the experts who really know stuff."},
              {sp:"HUGO", t:"So, did today's talk influence your thoughts on what career you'd like to take up in the future?"},
              {sp:"CHANTAL", t:"Well, I promised myself that I'd go through this course and keep an open mind till the end."},
              {sp:"HUGO", t:"But I think it's better to pick an area of the industry now, and then aim to get better and better at it."},
              {sp:"CHANTAL", t:"Well, I think we'll just have to differ on that issue."},
              {sp:"HUGO", t:"One thing's for certain though. From what she said, we'll be unpaid assistants in the industry for quite a long time."},
              {sp:"CHANTAL", t:"Mmm."},
              {sp:"HUGO", t:"I'm prepared for that, aren't you?"},
              {sp:"CHANTAL", t:"Actually, I'm not going to accept that view."},
              {sp:"HUGO", t:"Really? But she knows it's the case, and everyone else says the same."},
              {sp:"CHANTAL", t:"That doesn't mean it has to be true for me."},
              {sp:"HUGO", t:"OK, well I hope you're right."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 27 to 30. Now listen and answer questions 27 to 30."},
              {sp:"CHANTAL", t:"I thought the speaker's account of her first job was fascinating."},
              {sp:"HUGO", t:"Yeah, she admitted she was lucky to get work being a personal dresser for a musician. She didn't even apply for the job, and there she was, getting paid to choose all his clothes."},
              {sp:"CHANTAL", t:"It must have felt amazing. Though she said all she was looking for back then was experience, not financial reward."},
              {sp:"HUGO", t:"Mmm. And then he was so mean telling her she was more interested in her own appearance than his."},
              {sp:"CHANTAL", t:"But - she did realize he was right about that, which really made me think. I'm always considering my own clothes, but now I can see you should be focusing on your client."},
              {sp:"HUGO", t:"She obviously regretted losing the job."},
              {sp:"CHANTAL", t:"Well, as she said, she should have hidden her negative feelings about him, but she didn't."},
              {sp:"HUGO", t:"It was really brave the way she picked herself up and took that job in retail. Fancy working in a shop after that."},
              {sp:"CHANTAL", t:"Yeah, well, she recommended we all do it at some point. I guess as a designer, you'd get to find out some useful information. Like how big or small the average shopper is."},
              {sp:"HUGO", t:"I think that's an issue for manufacturers, not designers. However, it would be useful to know if there's a gap in the market, you know. An item that no one's stocking, but that consumers are looking for."},
              {sp:"CHANTAL", t:"Yeah, people don't give up searching. They also take things back to the store if they aren't right."},
              {sp:"HUGO", t:"Yeah. Imagine you worked in an expensive shop, and you found out the garments sold there were being returned because they fell apart in the wash."},
              {sp:"CHANTAL", t:"Yeah, it would be good to know that kind of thing. Yeah."},
              {sp:"ANNOUNCER", t:"That is the end of part 3. You now have 30 seconds to check your answers to part 3."}
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
                notesTitle: "Elephant translocation",
                groups: [
                  {
                    heading: "Reasons for overpopulation at Majete National Park",
                    items: [
                      {n:null, before:"strict enforcement of anti-poaching laws", input:null, after:""},
                      {n:null, before:"successful breeding", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Problems caused by elephant overpopulation",
                    items: [
                      {n:null, before:"greater competition, causing hunger for elephants", input:null, after:""},
                      {n:31, before:"damage to", input:31, after:"in the park"}
                    ]
                  },
                  {
                    heading: "The translocation process",
                    items: [
                      {n:32, before:"a suitable group of elephants from the same", input:32, after:"was selected"},
                      {n:33, before:"vets and park staff made use of", input:33, after:"to help guide the elephants into an open plain"},
                      {n:null, before:"elephants were immobilised with tranquilisers", input:null, after:""},
                      {n:34, before:"this process had to be completed quickly to reduce", input:34, after:""},
                      {n:35, before:"elephants had to be turned on their", input:35, after:"to avoid damage to their lungs"},
                      {n:36, before:"elephants'", input:36, after:"had to be monitored constantly"},
                      {n:null, before:"tracking devices were fitted to the matriarchs", input:null, after:""},
                      {n:37, before:"data including the size of their tusks and", input:37, after:"was taken"},
                      {n:null, before:"elephants were taken by truck to their new reserve", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Advantages of translocation at Nkhotakota Wildlife Park",
                    items: [
                      {n:38, before:"", input:38, after:"opportunities"},
                      {n:39, before:"a reduction in the number of poachers and", input:39, after:""},
                      {n:null, before:"an example of conservation that other parks can follow", input:null, after:""},
                      {n:40, before:"an increase in", input:40, after:"as a contributor to GDP"}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"fences",32:"family",33:"helicopters",34:"stress",35:"sides",36:"breathing",37:"feet",38:"employment",39:"weapons",40:"tourism"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear a zoology student giving a presentation on the process of moving wild elephants to a new reserve known as translocation. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"For my presentation today, I want to tell you about how groups of elephants have been moved and settled in new reserves. This is known as translocation, and has been carried out in Malawi in Africa in recent years. The reason this is being done is because of overpopulation of elephants in some areas. Overpopulation is a good problem to have, and not one we tend to hear about very often, in Malawi's Majete National Park. The elephant population had been wiped out by poachers who killed the elephants for their ivory, but in 2003 the park was restocked. And effective law enforcement was introduced. Since then, not a single elephant has been poached. In this safe environment, the elephant population boomed."},
              {sp:"SPEAKER", t:"Breeding went so well that there were more elephants than the park could support. This led to a number of problems. Firstly, there was more competition for food, which meant that some elephants were suffering from hunger. As there was a limit to the amount of food in the national park, some elephants began looking further afield. Elephants were routinely knocking down fences around the park. Which then had to be repaired at a significant cost. To solve this problem, the decision was made to move dozens of elephants from Majete National Park to Nkhotakota Wildlife Park. Where there were no elephants. But obviously, attempting to move significant numbers of elephants to a new home 300 kilometers away. Is quite a challenge."},
              {sp:"SPEAKER", t:"So, how did this translocation process work in practice? Elephants were moved in groups of between eight and 20, all belonging to one family. Because relationships are very important to elephants, they all had to be moved at the same time. A team of vets and park rangers flew over the park in helicopters, and targeted a group, which were rounded up, and directed to a designated open plain. The vets then used darts to immobilize the elephants. This was a tricky maneuver, as they not only had to select the right dose of tranquilizer. For different sized elephants, but they had to dart the elephants as they were running around. This also had to be done as quickly as possible, so as to minimize the stress caused."},
              {sp:"SPEAKER", t:"As soon as the elephants began to flop onto the ground, the team moved in to take care of them. To avoid the risk of suffocation, the team had to make sure none of the elephants were lying on their chests, because their lungs could be crushed in this position. So, all the elephants had to be placed on their sides. One person stayed with each elephant, while they waited for the vets to do checks. It was very important to keep an eye on their breathing. If there were fewer than 6 breaths per minute, the elephant would need urgent medical attention. Collars were fitted to the matriarch in each group, so their movements could be tracked in their new home. Measurements were taken of each elephant's tusks. Elephants with large tusks would be at greater risk from poachers, and also of their feet. The elephants were then taken to a recovery area, before being loaded onto trucks and transported to their new home."},
              {sp:"SPEAKER", t:"The elephants translocated to Nkhotakota settled in very well, and the project has generally been accepted to have been a huge success. And not just for the elephants. Employment prospects have improved enormously, contributing to rising living standards for the whole community. Poaching is no longer an issue, as former poachers are able to find more reliable sources of income. In fact, many of them volunteered to give up their weapons. As they were no longer of any use to them. More than two dozen elephants have been born at Nkhotakota since relocation. With an area of more than 1,800 square kilometers, there's plenty of space for the elephant population to continue to grow. Their presence is also helping to rebalance Nkhotakota's damaged ecosystem. And providing a sustainable conservation model, which could be replicated in other parks. All this has been a big draw for tourism, which contributes five times more than the illegal wildlife trade to GDP. And this is mainly because of the elephants. There's also been a dramatic rise in interest from..."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      },
      2: {
        title: "Cambridge IELTS 18 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2018%20test%202%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u20135",
                inst: "Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "WORKING AT MILO'S RESTAURANTS",
                groups: [
                  {
                    heading: "Benefits",
                    items: [
                      {n:1, before:"", input:1, after:"provided for all staff"},
                      {n:2, before:"", input:2, after:"during weekdays at all Milo's Restaurants"},
                      {n:3, before:"", input:3, after:"provided after midnight"}
                    ]
                  },
                  {
                    heading: "Person specification",
                    items: [
                      {n:null, before:"must be prepared to work well in a team", input:null, after:""},
                      {n:4, before:"must care about maintaining a high standard of", input:4, after:""},
                      {n:5, before:"must have a qualification in", input:5, after:""}
                    ]
                  }
                ]
              },
              {
                type: "table",
                qlabel: "Questions 6\u201310",
                inst: "Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                headers: ["Location","Job title","Responsibilities include","Pay and conditions"],
                rows: [
                  {
                    cells: [
                      [{input:6},{text:"Street"}],
                      [{text:"Breakfast supervisor"}],
                      [{text:"Checking portions, etc. are correct"},{text:"Making sure"},{input:7},{text:"is clean"}],
                      [{text:"Starting salary £"},{input:8},{text:"per hour"},{text:"Start work at 5.30 a.m."}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"City Road"}],
                      [{text:"Junior chef"}],
                      [{text:"Supporting senior chefs"},{text:"Maintaining stock and organising"},{input:9}],
                      [{text:"Annual salary £23,000"},{text:"No work on a"},{input:10},{text:"once a month"}]
                    ]
                  }
                ]
              }
            ],
            answers: {1:"training",2:"discount",3:"taxi",4:"detail",5:"English",6:"Wivenhoe",7:"equipment",8:"9.75",9:"deliveries",10:"Sunday"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear a woman from a job agency giving information to a man about work in a chain of restaurants. First, you have some time to look at questions 1 to 5. Now listen carefully and answer questions 1 to 5."},
              {sp:"WOMAN", t:"So, I understand you're interested in restaurant work."},
              {sp:"MAN", t:"Yes, I've got a bit of experience, and I can provide references."},
              {sp:"WOMAN", t:"That's good, I can check all that later. Now, Milo's restaurants have some vacancies at the moment. They're a really good company to work for, lots of benefits."},
              {sp:"MAN", t:"Oh right."},
              {sp:"WOMAN", t:"Yes. They've got a very good reputation for looking after staff. For example, all employees get training, even temporary staff."},
              {sp:"MAN", t:"Oh, really? That's quite unusual, isn't it?"},
              {sp:"WOMAN", t:"Certainly is."},
              {sp:"MAN", t:"And do staff get free uniforms too?"},
              {sp:"WOMAN", t:"Um. You just need to wear a white T-shirt and black trousers, it says here, so I guess not. But another benefit of working for a big company like this is that you can get a discount at any of their restaurants."},
              {sp:"MAN", t:"Even at weekends?"},
              {sp:"WOMAN", t:"No, but you'll be working then anyway."},
              {sp:"MAN", t:"Oh yes, I suppose so. Um. Most of their restaurants are in the city center, aren't they? So easy to get to by bus."},
              {sp:"WOMAN", t:"Yes, that's right. But if you have to do a late shift and finish work after midnight, the company will pay for you to get a taxi home."},
              {sp:"MAN", t:"I probably won't need one. I think I'd use my bike."},
              {sp:"WOMAN", t:"OK. Now, they do have some quite specific requirements for the kind of person they're looking for. Milo's is a young dynamic company, and they're really keen on creating a strong team. It's really important that you can fit in and get on well with everyone."},
              {sp:"MAN", t:"Yep, I've got no problem with that. It sounds good actually. The last place I worked for was quite demanding too, we had to make sure we gave a really high level of service."},
              {sp:"WOMAN", t:"That's good to hear, because that will be equally important at Milo's. I know they want people who have an eye for detail."},
              {sp:"MAN", t:"That's fine. I'm very used to working in that kind of environment."},
              {sp:"WOMAN", t:"Perfect. So the only other thing that's required is good communication skills. So you'll need to have a certificate in English."},
              {sp:"MAN", t:"Sure."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 6 to 10. Now listen and answer questions 6 to 10."},
              {sp:"WOMAN", t:"OK. Let's have a look at the current job vacancies at Milo's. The first one is in Wivenhoe street."},
              {sp:"MAN", t:"Sorry, where?"},
              {sp:"WOMAN", t:"Wivenhoe. W I V E N H O E. It's quite central, just off Cork street."},
              {sp:"MAN", t:"Oh, right."},
              {sp:"WOMAN", t:"They're looking for a breakfast supervisor."},
              {sp:"MAN", t:"That would be OK."},
              {sp:"WOMAN", t:"So you're probably familiar with the kind of responsibilities involved, obviously checking that all the portions are correct, et cetera. And then things like checking all the procedures for cleaning the equipment are being followed."},
              {sp:"MAN", t:"OK, and what about the salary? In my last job, I was getting £9.50 per hour. I was hoping to get a bit more than that."},
              {sp:"WOMAN", t:"Well, to begin with, you'd be getting £9.75, but that goes up to £11.25 after three months."},
              {sp:"MAN", t:"That's not too bad. And I suppose it's a very early start."},
              {sp:"WOMAN", t:"Mmm, that's the only unattractive thing about this job. But then you have the afternoons and evenings free, so the restaurant starts serving breakfast from 7:00 am. And you'd have to be there at 5:30 to set everything up, but you'd be finished at 12:30."},
              {sp:"MAN", t:"Mmm. Well, as you say, there are advantages to that."},
              {sp:"WOMAN", t:"Now you might also be interested in the job at the City Road branch. That's for a junior chef, so again a position of responsibility."},
              {sp:"MAN", t:"I might prefer that, actually."},
              {sp:"WOMAN", t:"Right, well obviously this role would involve supporting the sous chef and other senior staff, and you'd be responsible for making sure there's enough stock each week. And sorting out all the deliveries."},
              {sp:"MAN", t:"I've never done that before, but I imagine it's fairly straightforward once you get the hang of it."},
              {sp:"WOMAN", t:"Yes, and you'd be working alongside more experienced staff to begin with. So I'm sure it wouldn't be a problem. The salary is slightly higher here. It's an annual salary of 23,000 pounds."},
              {sp:"MAN", t:"Right."},
              {sp:"WOMAN", t:"I know that if they like you it's likely you'll be promoted quite quickly, so that's worth thinking about."},
              {sp:"MAN", t:"Yes, it does sound interesting. What are the hours like?"},
              {sp:"WOMAN", t:"The usual, I think. There's a lot of evening and weekend work, but they're closed on Mondays. But you do get one Sunday off every 4 weeks, so would you like me to send off your..."},
              {sp:"ANNOUNCER", t:"That is the end of part 1. You now have one minute to check your answers to part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 11 and 12",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>What are the TWO main reasons why this site has been chosen for the housing development?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"It has suitable geographical features."},
                  {letter:"B", text:"There is easy access to local facilities."},
                  {letter:"C", text:"It has good connections with the airport."},
                  {letter:"D", text:"The land is of little agricultural value."},
                  {letter:"E", text:"It will be convenient for workers."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO aspects of the planned housing development have people given positive feedback about?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"the facilities for cyclists"},
                  {letter:"B", text:"the impact on the environment"},
                  {letter:"C", text:"the encouragement of good relations between residents"},
                  {letter:"D", text:"the low cost of all the accommodation"},
                  {letter:"E", text:"the rural location"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15\u201320",
                inst: "Label the map below.<br>Choose the correct letter, <b>A\u2013I</b>, next to Questions 15\u201320.",
                mapTitle: "Housing Development",
                mapImage: "data:image/jpeg;base64,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sWuq26W0KyTyTOl0rSK6PEWKtXYfs5RSQ/BDwik7qzPp6ygjoQ7F1oA9FooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvM/it8JdP8f+INM1q48TeItEu9NgaOF9KnSJuW3ZyyMd1emUUAeSeC/g3J4Z1z+1G+Jfj3Wf3EsP2XU9U8+A70K7tnqvUVbX4RaaPg8PhkNc1P7GJd/2z9353+v8309a9QooA8y8QfCe11TWvDetWniTW9L1DQLaKziltWT9/EnZ9w/i6NitbwP8PdP8LX3ia7TUrzUD4junurpbrZhdzSMVXYF4/eGu3ooA8Kf9nTTpNEk0CT4g+MW0KNs2WniaLy7f/wAh/PXd6H8PrfS/iHJ40bWb66vJdLXTWhZEWPaPL+fgZ3fuxXdUUAeTw/BDwx/wimv+HL3UNXvrTWr/AO3NJK6LLay9miKp8uKZ4E+Cmm6B4kj8QeIPE+seMdQtoGtbB9WdXW1hIwyqtes075qAPDv+GetPAfTLfx94wtvCruXOgxX2IB/sK+NwT2r2iytoLKzhtLdFjhgRYokHQKo2has0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAoooFFABSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADaKdRQB57rvwh+Hmt6rPqmoeHVe4um8y6VLmaOG4f1liRwkn45ruraGO3hSGFEjjRVVERdqqF7KKsUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACiigUUAFFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFABijFFFAAKKTOKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UUANFFFFAH//Z",
                options: ["A","B","C","D","E","F","G","H","I"],
                items: [
                  {n:15, label:"School"},
                  {n:16, label:"Sports centre"},
                  {n:17, label:"Clinic"},
                  {n:18, label:"Community centre"},
                  {n:19, label:"Supermarket"},
                  {n:20, label:"Playground"}
                ]
              }
            ],
            multiGroups: [[11,12],[13,14]],
            answers: {11:"B",12:"E",13:"B",14:"C",15:"G",16:"C",17:"D",18:"B",19:"F",20:"H"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear a talk to members of the public about plans for a new housing development near a town called Nunston. First, you have some time to look at questions 11 to 14. Now listen carefully and answer questions 11 to 14."},
              {sp:"MARK REYNOLDS", t:"Hello everyone, it's good to see that so many members of the public have shown up for our presentation on the new housing development planned on the outskirts of Nunston. I'm Mark Reynolds, and I'm Communications Manager at the development. I'll start by giving you a brief overview of our plans for the development. So, one thing I'm sure you'll want to know is why we've selected this particular site for a housing development. At present, it's being used for farming. Like much of the land around Nunston, but because of the new industrial center in Nunston, there's a lot of demand for housing for employees in the region. As many employees are having to commute long distances at present. Of course, there's also the fact that we have an international airport. Just 20 minutes drive away, but although that's certainly convenient, it wasn't one of our major criteria for choosing the site. We were more interested in the fact that there's an excellent hospital, just 15 km away, and a large secondary school, even closer than that. One drawback to the site is that it's on quite a steep slope, but we've taken account of that in our planning. So it shouldn't be a major problem."},
              {sp:"MARK REYNOLDS", t:"We've had a lot of positive feedback about the plans. People like the wide variety of accommodation types and prices. And the fact that it's only a short drive to get out into the countryside from the development. We were particularly pleased that so many people like the designs for the layout of the development. With the majority of people saying it generally made a good impression, and blended in well with the natural features of the landscape. With provision made for protecting trees and wildlife on the site. Some people have mentioned that they'd like to see more facilities for cyclists, and we'll look at that, but the overall feedback has been that the design and facilities of the development make it seem a place where people of all ages can live together happily."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 15 to 20. Now listen and answer questions 15 to 20."},
              {sp:"MARK REYNOLDS", t:"OK, so I'll put a map of the proposed development up on the screen. You'll see it's bounded on the south side by the main road, which then goes on to Nunston. Another boundary is formed by London Road. On the western side of the development, inside the development, there'll be about 400 houses and three apartment blocks. There'll also be a school for children up to 11 years old. If you look at the south entrance at the bottom of the map, there's a road from there that goes right up through the development. The school will be on that road, at the corner of the second turning to the left."},
              {sp:"MARK REYNOLDS", t:"A large sports center is planned with facilities for indoor and outdoor activities. This will be on the western side of the development, just below the road that branches off from London Road. There'll be a clinic where residents can go if they have any health problems. Can you see the lake towards the top of the map? The clinic will be just below this, to the right of a street of houses."},
              {sp:"MARK REYNOLDS", t:"There'll also be a community center for people of all ages. On the northeast side of the development, there'll be a row of specially designed houses, specifically for residents over 65 and the community center will be adjoining this. We haven't forgotten about shopping. There'll be a supermarket between the two entrances to the development. We're planning to leave the three large trees near London Road, and it'll be just to the south of these."},
              {sp:"MARK REYNOLDS", t:"It's planned to have a playground for younger children. If you look at the road that goes up from the south entrance, you'll see it curves round to the left at the top. And the playground will be in that curve with nice views of the lake. OK, so now does anyone have any quest..."},
              {sp:"ANNOUNCER", t:"That is the end of part 2. You now have 30 seconds to check your answers to part 2."}
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
                notesTitle: "Laki Eruption",
                items: [
                  {n:21, q:"Why do the students think the Laki eruption of 1783 is so important?", opts:["It was the most severe eruption in modern times.","It led to the formal study of volcanoes.","It had a profound effect on society."]},
                  {n:22, q:"What surprised Adam about observations made at the time?", opts:["the number of places producing them","the contradictions in them","the lack of scientific data to support them"]},
                  {n:23, q:"According to Michelle, what did the contemporary sources say about the Laki haze?", opts:["People thought it was similar to ordinary fog.","It was associated with health issues.","It completely blocked out the sun for weeks."]},
                  {n:24, q:"Adam corrects Michelle when she claims that Benjamin Franklin", opts:["came to the wrong conclusion about the cause of the haze.","was the first to identify the reason for the haze.","supported the opinions of other observers about the haze."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 25 and 26",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO issues following the Laki eruption surprised the students?",
                qns: [25,26],
                options: [
                  {letter:"A", text:"how widespread the effects were"},
                  {letter:"B", text:"how long-lasting the effects were"},
                  {letter:"C", text:"the number of deaths it caused"},
                  {letter:"D", text:"the speed at which the volcanic ash cloud spread"},
                  {letter:"E", text:"how people ignored the warning signs"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 27\u201330",
                inst: "What comment do the students make about the impact of the Laki eruption on the following countries?<br>Choose the correct letter, <b>A\u2013F</b>, next to Questions 27\u201330.",
                mapTitle: "Countries",
                mapNote: "A. This country suffered the most severe loss of life<br>B. The impact on agriculture was predictable.<br>C. There was a significant increase in deaths of young people.<br>D. Animals suffered from a sickness.<br>E. This country saw the highest rise in food prices in the world.<br>F. It caused a particularly harsh winter.",
                options: ["A","B","C","D","E","F"],
                items: [
                  {n:27, label:"Iceland"},
                  {n:28, label:"Egypt"},
                  {n:29, label:"UK"},
                  {n:30, label:"USA"}
                ]
              }
            ],
            multiGroups: [[25,26]],
            answers: {21:"C",22:"A",23:"B",24:"B",25:"A",26:"B",27:"D",28:"A",29:"C",30:"F"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear two geography students, Adam and Michelle, talking about a volcanic eruption which took place in Iceland in 1783. First, you have some time to look at questions 21 to 26. Now listen carefully and answer questions 21 to 26."},
              {sp:"ADAM", t:"So, Michelle, shall we make a start on our presentation? We haven't got that much time left."},
              {sp:"MICHELLE", t:"No, Adam, but at least we've done all the background reading. I found it really interesting. I'd never even heard of the Laki eruption before this."},
              {sp:"ADAM", t:"Me neither. I suppose 1783 is a long time ago."},
              {sp:"MICHELLE", t:"But it was a huge eruption, and it had such devastating consequences."},
              {sp:"ADAM", t:"I know. It was great there were so many primary sources to look at. It really gives you a sense of how catastrophic the volcano was. People were really trying to make sense of the science for the first time."},
              {sp:"MICHELLE", t:"That's right. But what I found more significant was how it impacted directly and indirectly on political events, as well as having massive social and economic consequences."},
              {sp:"ADAM", t:"I know. That should be the main focus of our presentation."},
              {sp:"MICHELLE", t:"Hmm. The observations made by people at the time were interesting, weren't they?"},
              {sp:"ADAM", t:"Hmm."},
              {sp:"MICHELLE", t:"I mean, they all gave a pretty consistent account of what happened. Even if they didn't always use the same terminology."},
              {sp:"ADAM", t:"Yeah, I was surprised there were so many weather stations established by that time. So you know, you can see how the weather changed often by the hour."},
              {sp:"MICHELLE", t:"Right. Writers at the time talked about the Laki haze to describe the volcanic fog that spread across Europe. They all realized that this wasn't the sort of fog they were used to, and of course, this was in pre-industrial times, so they hadn't experienced sulfur smelling fog before."},
              {sp:"ADAM", t:"No, that's true."},
              {sp:"MICHELLE", t:"Reports from the period blamed the haze for an increase in headaches, respiratory issues, and asthma attacks. And they all describe how it covered the sun. And made it look a strange red color."},
              {sp:"ADAM", t:"Hmm, must have been very weird."},
              {sp:"MICHELLE", t:"Ha, it's interesting that Benjamin Franklin wrote about the haze. Did you read that? He was the American ambassador in Paris at the time."},
              {sp:"ADAM", t:"Yeah, at first no one realized that the haze was caused by the volcanic eruption in Iceland."},
              {sp:"MICHELLE", t:"It was Benjamin Franklin who realized that before anyone else."},
              {sp:"ADAM", t:"He's often credited with that apparently, but a French naturalist beat him to it. I can't remember his name, I'd have to look it up. Then other naturalists had the same idea. All independently of each other."},
              {sp:"MICHELLE", t:"Oh, right. We should talk about the immediate impact of the eruption, which was obviously enormous. Especially in Iceland where so many people died."},
              {sp:"ADAM", t:"Hmm, you'd expect that, and the fact that the volcanic ash drifted so swiftly, but not that the effects would go on for so long. Or that two years after the eruption, strange weather events were being reported as far away as North America and North Africa."},
              {sp:"MICHELLE", t:"No, I found all that hard to believe too. It must have been terrible, and there was nothing anyone could do about it, even if they knew the ash cloud was coming in their direction."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 27 to 30. Now listen and answer questions 27 to 30."},
              {sp:"MICHELLE", t:"We should run through some of the terrible consequences of the eruption experienced in different countries. There's quite a varied range."},
              {sp:"ADAM", t:"Starting with Iceland, where the impact on farming was devastating."},
              {sp:"MICHELLE", t:"Hmm, one of the most dramatic things there was the effect on livestock as they grazed in the fields. They were poisoned because they ate vegetation that had been contaminated with fluorine as a result of the volcanic fallout."},
              {sp:"ADAM", t:"That was horrible. In Egypt. The bizarre weather patterns led to a severe drought, and as a result the Nile didn't flood, which meant the crops all failed."},
              {sp:"MICHELLE", t:"It's so far from where the eruption happened. And yet the famine there led to more people dying than any other country. It was worse than the plague."},
              {sp:"ADAM", t:"OK, then in the UK the mortality rate went up a lot. Presumably from respiratory illnesses, according to one report, it was about double the usual number, and included an unusually high percentage of people under the age of 25."},
              {sp:"MICHELLE", t:"Hmm. I think people will be surprised to hear that the weather in the USA was badly affected too. George Washington even makes a note in his diary. That they were snowbound until March in Virginia. That was before he became president."},
              {sp:"ADAM", t:"Yes, and there was ice floating down the Mississippi, which was unprecedented."},
              {sp:"MICHELLE", t:"Huh. Astonishing, really. Anyway, what do you think we should include next?"},
              {sp:"ANNOUNCER", t:"That is the end of part 3. You now have 30 seconds to check your answers to part 3."}
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
                notesTitle: "Pockets",
                groups: [
                  {
                    heading: "Reason for choice of subject",
                    items: [
                      {n:31, before:"They are", input:31, after:"but can be overlooked by consumers and designers."}
                    ]
                  },
                  {
                    heading: "Pockets in men's clothes",
                    items: [
                      {n:32, before:"Men started to wear", input:32, after:"in the 18th century."},
                      {n:33, before:"A", input:33, after:"sewed pockets into the lining of the garments."},
                      {n:null, before:"The wearer could use the pockets for small items.", input:null, after:""},
                      {n:34, before:"Bigger pockets might be made for men who belonged to a certain type of", input:34, after:"."}
                    ]
                  },
                  {
                    heading: "Pockets in women's clothes",
                    items: [
                      {n:35, before:"Women's pockets were less", input:35, after:"than men's."},
                      {n:null, before:"Women were very concerned about pickpockets.", input:null, after:""},
                      {n:36, before:"Pockets were produced in pairs using", input:36, after:"to link them together."},
                      {n:37, before:"Pockets hung from the women's", input:37, after:"under skirts and petticoats."},
                      {n:38, before:"Items such as", input:38, after:"could be reached through a gap in the material."},
                      {n:null, before:"Pockets, of various sizes, stayed inside clothing for many decades.", input:null, after:""},
                      {n:39, before:"When dresses changed shape, hidden pockets had a negative effect on the", input:39, after:"of women."},
                      {n:40, before:"Bags called 'pouches' became popular, before women carried a", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"convenient",32:"suits",33:"tailor",34:"profession",35:"visible",36:"string",37:"waist",38:"perfume",39:"image",40:"handbag"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear a student on a fashion design course giving a talk about the history of pockets. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"Good morning. Now we've been asked to choose an aspect of European clothing or fashion, and to talk about its development over time. I decided to focus on a rather small area of clothing, and that's pockets. I chose pockets for two reasons really. We all have them in jeans. Jackets, coats for example, and even though we often carry bags or briefcases as well, nothing is quite as convenient as being able to pop your phone or credit card into your pocket. Yet, I suspect that other than that, people don't really think about pockets too much, and they're rather overlooked as a fashion item. It's certainly very interesting to go back in time, and see how pockets developed for men and women."},
              {sp:"SPEAKER", t:"In the 18th century, fashions were quite different from the way they are now. Pockets were too. If we think about male fashion first, that was the time when suits became popular. Trousers were knee length only, and referred to as breeches. The waistcoats were short, and the jackets were long, but all three garments were lined with material, and pockets were sewn into this cloth, by whichever tailor the customer used. The wearer could then carry small objects such as pencils or coins on their person, and reach them through a gap in the lining. Coat pockets became increasingly decorative on the outside for men who wanted to look stylish, but they were often larger, but plainer, if the wearer was someone with a profession who needed to carry medical instruments, a doctor or physician for example."},
              {sp:"SPEAKER", t:"The development of women's pockets was a little different. For one thing, they weren't nearly as visible or as easy to reach as men's. In the 18th and 19th centuries, women carried numerous possessions on their person, and some of these could be worth a lot of money. Women were more vulnerable to theft, and wealthy women in particular worried constantly about pickpockets. So, what they did was to have a pair of pockets made. That were tied together with string. The pockets were made of fabric, which might be recycled cloth if the wearer had little money, or something more expensive. Such as linen, sometimes featuring very delicate embroidery. Women tied the pockets around their waist, so that they hung beneath their clothes. Remember, skirts were long then, and there was plenty of room to hide a whole range of small possessions between the layers of petticoats that were commonly worn. They would have an opening in the folds of their skirts, through which they could reach whatever they needed, like their perfume."},
              {sp:"SPEAKER", t:"Working women of course, also needed to carry around items that they might use for whatever job or trade they were involved in, but their pairs of pockets still remained on the inside of their clothing. They just got bigger or longer, sometimes reaching down to their knees. So, the tie-on pockets went well into the 19th century, and only changed when fashion altered towards the end of that period. That's when dresses became tighter and less bulky, and the pairs of pockets became very noticeable. They stood out too much, and detracted from the woman's image."},
              {sp:"SPEAKER", t:"Women who had been used to carrying around a range of personal possessions, and still wanted to, needed somewhere to carry these items about their person. That was when small bags or pouches as they were known came into fashion, and of course, they inevitably led on to the handbag of more modern times. Particularly when fashion removed pockets altogether."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 18 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2018%20test%203%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u201310",
            blocks: [
              {
                type: "form",
                qlabel: "Questions 1\u20134",
                inst: "Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "WAYSIDE CAMERA CLUB MEMBERSHIP FORM",
                groups: [
                  {
                    heading: "",
                    rows: [
                      {label:"Name:", parts:[{text:"Dan Green"}]},
                      {label:"Email address:", parts:[{text:"dan1068@market.com"}]},
                      {label:"Home address:", parts:[{text:"52"},{input:1},{text:"Street, Peacetown"}]},
                      {label:"Heard about us:", parts:[{text:"from a"},{input:2}]},
                      {label:"Reason for joining:", parts:[{text:"to enter competitions, to"},{input:3}]},
                      {label:"Type of membership:", parts:[{input:4},{text:"membership (£30)"}]}
                    ]
                  }
                ]
              },
              {
                type: "table",
                qlabel: "Questions 5\u201310",
                inst: "Complete the table below.<br>Write <b>NO MORE THAN TWO WORDS</b> for each answer.",
                notesTitle: "Photography competitions",
                headers: ["Title of competition","Instructions","Feedback to Dan"],
                rows: [
                  {
                    cells: [
                      [{text:"'"},{input:5},{text:"'"}],
                      [{text:"A scene in the home"}],
                      [{text:"The picture's composition was not good."}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"'Beautiful Sunsets'"}],
                      [{text:"Scene must show some"},{input:6}],
                      [{text:"The"},{input:7},{text:"was wrong."}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"'"},{input:8},{text:"'"}],
                      [{text:"Scene must show"},{input:9}],
                      [{text:"The photograph was too"},{input:10}]
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Marrowfield",2:"relative",3:"socialise",4:"Full",5:"Domestic life",6:"clouds",7:"timing",8:"Animal Magic",9:"movement",10:"dark"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear a man talking to the coordinator of a photography club. First, you have some time to look at questions 1 to 4. Now listen carefully and answer questions 1 to 4."},
              {sp:"BREDA", t:"Hello, Wayside Camera Club, Breda speaking."},
              {sp:"DAN", t:"Oh, hello. Um. My name is Dan, and I'd like to join your club."},
              {sp:"BREDA", t:"That's great, Dan. We have an application form. Would you like to complete it over the phone? Then you can ask any questions you might have."},
              {sp:"DAN", t:"Oh, yes, thanks."},
              {sp:"BREDA", t:"OK, so what's your family name?"},
              {sp:"DAN", t:"It's Green, Dan Green."},
              {sp:"BREDA", t:"So, can I take your email address?"},
              {sp:"DAN", t:"Yes, it's dan1068@market.com."},
              {sp:"BREDA", t:"Thanks, and what about your home address?"},
              {sp:"DAN", t:"Well, I'm about 10 miles away from your club in Peacetown. I live in a house there."},
              {sp:"BREDA", t:"OK, so what's the house number and street?"},
              {sp:"DAN", t:"It's 52 Marrowfield Street."},
              {sp:"BREDA", t:"Is that MARROWFIELD?"},
              {sp:"DAN", t:"That's right."},
              {sp:"BREDA", t:"And that's Peacetown, you said?"},
              {sp:"DAN", t:"Uh huh."},
              {sp:"BREDA", t:"So, how did you hear about our club? Did you look on the internet?"},
              {sp:"DAN", t:"I usually do that, but this time well, I was talking to a relative the other day, and he suggested it."},
              {sp:"BREDA", t:"Oh, is he a member too?"},
              {sp:"DAN", t:"He belongs to another club, but he'd heard good things about yours."},
              {sp:"BREDA", t:"OK, so what do you hope to get from joining?"},
              {sp:"DAN", t:"Well, one thing that really interests me is the competitions that you have. I enjoy entering those."},
              {sp:"BREDA", t:"Right, anything else?"},
              {sp:"DAN", t:"Well, I also like to socialize with other photographers."},
              {sp:"BREDA", t:"That's great. So, what type of membership would you like?"},
              {sp:"DAN", t:"What are the options?"},
              {sp:"BREDA", t:"It's £30 a year for full membership, or £20 a year if you're an associate."},
              {sp:"DAN", t:"I think I'll go for the full membership then."},
              {sp:"BREDA", t:"That's a good idea, because you can't vote in meetings with an associate membership."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 5 to 10. Now listen and answer questions 5 to 10."},
              {sp:"BREDA", t:"If I could just find out a bit more about you."},
              {sp:"DAN", t:"OK."},
              {sp:"BREDA", t:"So, you said you wanted to compete. Have you ever won any photography competitions?"},
              {sp:"DAN", t:"Not yet, but I have entered 3 in the past."},
              {sp:"BREDA", t:"Oh, that's interesting. So why don't you tell me something about those? Let's start with the first one."},
              {sp:"DAN", t:"Well, the theme was entitled \"Domestic life\"."},
              {sp:"BREDA", t:"I see, so it had to be something related to the home."},
              {sp:"DAN", t:"Yeah, I chose to take a photo of a family sitting around the dinner table having a meal. And I didn't win, but I did get some feedback."},
              {sp:"BREDA", t:"Oh, what did the judges say?"},
              {sp:"DAN", t:"That it was too busy as a picture."},
              {sp:"BREDA", t:"Aha - so it was the composition of the picture that they criticized?"},
              {sp:"DAN", t:"That's right. And once they told me that, I could see my mistake."},
              {sp:"BREDA", t:"So what was the theme of the second competition?"},
              {sp:"DAN", t:"Well, my university was on the coast, and that area gets a lot of beautiful sunsets. So that was the theme."},
              {sp:"BREDA", t:"Oh sunsets, that's a great theme."},
              {sp:"DAN", t:"Yes, the instructions were to capture the clouds as well. Uh. It couldn't just be blue sky and a setting sun."},
              {sp:"BREDA", t:"Sure, cause they give you all those amazing pinks and purples."},
              {sp:"DAN", t:"Yeah, and I thought I'd done that well, but the feedback was that I should have waited a bit longer to get the shot."},
              {sp:"BREDA", t:"I see. So the timing wasn't right."},
              {sp:"DAN", t:"Yes, I took it too soon, basically. And then the third competition I entered was called Animal Magic."},
              {sp:"BREDA", t:"Well, that's a difficult subject."},
              {sp:"DAN", t:"Ha, I know. I had to take hundreds of shots."},
              {sp:"BREDA", t:"I'm sure, because animals move all the time."},
              {sp:"DAN", t:"That's what we had to show. There had to be some movement in the scene. I got a great shot of a fox in the end, but I took it at night, and well, I suspected that it was a bit dark, which is what I was told."},
              {sp:"BREDA", t:"Well, Dan, you seem to be really keen, and we'd be delighted to have you in our club. I'm sure we can help with all those areas that you've outlined."},
              {sp:"DAN", t:"Thanks, that's great."},
              {sp:"ANNOUNCER", t:"That is the end of part 1. You now have one minute to check your answers to part 1."}
            ]
          },
          2: {
            n: 2,
            label: "Part 2",
            qlabel: "Questions 11\u201320",
            blocks: [
              {
                type: "multi_select",
                qlabel: "Questions 11 and 12",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO warnings does Dan give about picking mushrooms?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"Don't pick more than one variety of mushroom at a time."},
                  {letter:"B", text:"Don't pick mushrooms near busy roads."},
                  {letter:"C", text:"Don't eat mushrooms given to you."},
                  {letter:"D", text:"Don't eat mushrooms while picking them."},
                  {letter:"E", text:"Don't pick old mushrooms."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO ideas about wild mushrooms does Dan say are correct?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"Mushrooms should always be peeled before eating."},
                  {letter:"B", text:"Mushrooms eaten by animals may be unsafe."},
                  {letter:"C", text:"Cooking destroys toxins in mushrooms."},
                  {letter:"D", text:"Brightly coloured mushrooms can be edible."},
                  {letter:"E", text:"All poisonous mushrooms have a bad smell."}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 15\u201320",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Picking Mushrooms",
                items: [
                  {n:15, q:"What advice does Dan give about picking mushrooms in parks?", opts:["Choose wooded areas.","Don't disturb wildlife.","Get there early."]},
                  {n:16, q:"Dan says it is a good idea for beginners to", opts:["use a mushroom app.","join a group.","take a reference book."]},
                  {n:17, q:"What does Dan say is important for conservation?", opts:["selecting only fully grown mushrooms","picking a limited amount of mushrooms","avoiding areas where rare mushroom species grow"]},
                  {n:18, q:"According to Dan, some varieties of wild mushrooms are in decline because there is", opts:["a huge demand for them from restaurants.","a lack of rain in this part of the country.","a rise in building developments locally."]},
                  {n:19, q:"Dan says that when storing mushrooms, people should", opts:["keep them in the fridge for no more than two days.","keep them in a brown bag in a dark room.","leave them for a period after washing them."]},
                  {n:20, q:"What does Dan say about trying new varieties of mushrooms?", opts:["Experiment with different recipes.","Expect some to have a strong taste.","Cook them for a long time."]}
                ]
              }
            ],
            multiGroups: [[11,12],[13,14]],
            answers: {11:"B",12:"C",13:"B",14:"D",15:"C",16:"B",17:"B",18:"C",19:"A",20:"A"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear an expert on picking wild mushrooms called Dan talking on the radio. First, you have some time to look at questions 11 to 14. Now listen carefully and answer questions 11 to 14."},
              {sp:"PRESENTER", t:"This evening, we're delighted to welcome Dan Beagle, who's just written a book on looking for and finding food in the wild. He's going to tell us everything we need to know about picking wild mushrooms."},
              {sp:"DAN", t:"Thank you very much. Well, I need to start by talking about safety. You really need to know what you're doing because some mushrooms are extremely poisonous. Having said that, once you know what to look for it's really worth doing for the amazing variety of mushrooms available, which you can't get in the shops. But of course you have to be very careful. And that's why I always say you should never consume mushrooms picked by friends or neighbors. Always remember that some poisonous mushrooms look very similar to edible ones. And it's easy for people to get confused. The other thing to avoid is mushrooms growing beside busy roads for obvious reasons, but nothing beats the taste of freshly picked mushrooms. Don't forget that the ones in the shops are often several days old and past their best."},
              {sp:"DAN", t:"There are certain ideas about wild mushrooms that it's important to be aware of. Don't listen to people who tell you that it's only OK to eat mushrooms that are pale. Or dull. This is completely untrue. Some edible mushrooms are bright red for example. Personally I prefer mushrooms cooked, but it won't do you any harm to eat them uncooked in salads. It's not necessary to peel them. Another thing you should remember is that you can't tell if a mushroom is safe to eat by its smell. Some of the most deadly mushrooms have no smell. And taste quite nice, apparently. Finally, just because deer or squirrels eat a particular mushroom, doesn't mean that you can."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 15 to 20. Now listen and answer questions 15 to 20."},
              {sp:"DAN", t:"Of course, mushroom picking is associated with the countryside, but if you haven't got a car, your local park can be a great place to start. There are usually a range of habitats where mushrooms grow, such as playing fields and wooded areas, but you need to be there first thing in the morning. As there's likely to be a lot of competition, not just from people, but wildlife too. The deer often get the best mushrooms in my local park. If you're a complete beginner, I wouldn't recommend going alone or relying on photos in a book, even the one I've written. There are some really good phone apps for identifying mushrooms, but you can't always rely on getting a good signal in the middle of a wood. If possible, you should go with a group led by an expert. You'll stay safe, and learn a lot that way."},
              {sp:"DAN", t:"Conservation is a really important consideration, and you must follow a few basic rules. You should never pick all the mushrooms in one area. Collect only enough for your own needs. Be very careful that you don't trample on young mushrooms or other plants. And make sure you don't pick any mushrooms that are endangered and protected by law. There's been a decline in some varieties of wild mushrooms in this part of the country. Restaurants are becoming more interested in locally sourced food like wild mushrooms. But the biggest problem is that so many new houses have been built in this area in the last 10 years, and more water is being taken from rivers and reservoirs. Because of this, mushroom habitats have been destroyed."},
              {sp:"DAN", t:"Anyway, a word of advice on storing mushrooms. Collect them in a brown paper bag, and as soon as you get home, put them in the fridge. They'll be fine for a couple of days, but it's best to cook them as soon as possible. After washing them really carefully first, of course. So, everybody knows what a mushroom tastes like, right? Well, you'll be surprised by the huge variety of wild mushrooms there are. Be adventurous. They're great in so many dishes, stir fries, risottos, pasta. Just be aware that some people can react badly to certain varieties, so it's a good idea not to eat huge quantities to begin with. OK, so now I'm going to show you a few examples of poisonous..."},
              {sp:"ANNOUNCER", t:"That is the end of part 2. You now have 30 seconds to check your answers to part 2."}
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
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO opinions about the Luddites do the students express?",
                qns: [21,22],
                options: [
                  {letter:"A", text:"Their actions were ineffective."},
                  {letter:"B", text:"They are still influential today."},
                  {letter:"C", text:"They have received unfair criticism."},
                  {letter:"D", text:"They were proved right."},
                  {letter:"E", text:"Their attitude is understandable."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 23 and 24",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO predictions about the future of work are the students doubtful about?",
                qns: [23,24],
                options: [
                  {letter:"A", text:"Work will be more rewarding."},
                  {letter:"B", text:"Unemployment will fall."},
                  {letter:"C", text:"People will want to delay retiring."},
                  {letter:"D", text:"Working hours will be shorter."},
                  {letter:"E", text:"People will change jobs more frequently."}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201330",
                inst: "What comment do the students make about each of the following jobs?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 25\u201330.",
                mapTitle: "Jobs",
                mapNote: "A. These jobs are likely to be at risk.<br>B. Their role has become more interesting in recent years.<br>C. The number of people working in this sector has fallen dramatically.<br>D. This job will require more qualifications.<br>E. Higher disposable income has led to a huge increase in jobs.<br>F. There is likely to be a significant rise in demand for this service.<br>G. Both employment and productivity have risen.",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:25, label:"Accountants"},
                  {n:26, label:"Hairdressers"},
                  {n:27, label:"Administrative staff"},
                  {n:28, label:"Agricultural workers"},
                  {n:29, label:"Care workers"},
                  {n:30, label:"Bank clerks"}
                ]
              }
            ],
            multiGroups: [[21,22],[23,24]],
            answers: {21:"A",22:"E",23:"B",24:"D",25:"G",26:"E",27:"B",28:"C",29:"F",30:"A"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear two business students discussing automation and the future of work. First, you have some time to look at questions 21 to 24. Now listen carefully and answer questions 21 to 24."},
              {sp:"YOUNG MAN", t:"That seminar yesterday on automation and the future of work was really good, wasn't it? Looking at the first industrial revolution in Britain in the 19th century. And seeing how people reacted to massive change was a real eye-opener."},
              {sp:"YOUNG WOMAN", t:"Yes, it was interesting to hear how people felt about automation then, and what challenges they faced. I didn't know that first started with workers in the textile industry."},
              {sp:"YOUNG MAN", t:"With those protesting workers called the Luddites, destroying their knitting machines because they were so worried about losing their jobs."},
              {sp:"YOUNG WOMAN", t:"Yes. And ultimately, they didn't achieve anything. And anyway, industrialization created more jobs than it destroyed."},
              {sp:"YOUNG MAN", t:"Yes, that's true. But it probably didn't seem a positive thing at the time. I can see why the Luddites felt so threatened."},
              {sp:"YOUNG WOMAN", t:"I know, I'm sure I would have felt the same. The discussion about the future of work was really optimistic for a change. I like the idea that work won't involve doing boring repetitive tasks, as robots will do all that. Normally, you only hear negative stuff about the future."},
              {sp:"YOUNG MAN", t:"Bit too optimistic, don't you think? For example, I can't see how people are about to have more leisure time, when all the evidence shows people are spending longer than ever at work."},
              {sp:"YOUNG WOMAN", t:"No, that's true. And what about lower unemployment? I'm not so sure about that."},
              {sp:"YOUNG MAN", t:"Perhaps in the long term, but not in the foreseeable future."},
              {sp:"YOUNG WOMAN", t:"Mmm. And I expect most people will be expected to work until they're much older. As everyone's living much longer."},
              {sp:"YOUNG MAN", t:"That's already happening."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 25 to 30. Now listen and answer questions 25 to 30."},
              {sp:"YOUNG WOMAN", t:"I enjoyed all that stuff on how technology has changed some jobs, and how they're likely to change in the near future."},
              {sp:"YOUNG MAN", t:"Yeah, incredible, like accountants. You might think all the technological innovations would have put them out of a job, but in fact there are more of them than ever. They're still really in demand and have become far more efficient."},
              {sp:"YOUNG WOMAN", t:"Right. That was amazing. 20 times more accountants in this country compared to the 19th century."},
              {sp:"YOUNG MAN", t:"I know. I'd never have thought the demand for hairdressing would have gone up so much in the last hundred years. One hairdresser for every 287 people now, compared to one for over 1,500."},
              {sp:"YOUNG WOMAN", t:"Yeah, because people's earning power has gone up, so they can afford to spend more on personal services like that."},
              {sp:"YOUNG MAN", t:"But technology hasn't changed the actual job that much."},
              {sp:"YOUNG WOMAN", t:"No, they've got hair dryers et cetera, but it's one job where you don't depend on a computer. The kind of work that administrative staff do has changed enormously, thanks to technology. Even 20 years ago, there were secretaries doing dictation and typing."},
              {sp:"YOUNG MAN", t:"Yes, really boring compared to these days, when they're given much more responsibility and higher status."},
              {sp:"YOUNG WOMAN", t:"Mmm. A lot of graduates go in for this kind of work now...I'd expected there to be a much bigger change in the number of agricultural workers in the 19th century, but the 1871 census showed that roughly 25% of the population worked on the land."},
              {sp:"YOUNG MAN", t:"Yeah, I'd have assumed it would be more than 50%. Now it's less than 0.2% (nought point two percent)."},
              {sp:"YOUNG WOMAN", t:"Hmm, what about care workers?"},
              {sp:"YOUNG MAN", t:"They barely existed in the 19th century, as people's lifespan was so much shorter, but now of course this sector will see huge growth."},
              {sp:"YOUNG WOMAN", t:"Yeah, and it's hard enough to meet current demand. The future looks quite bleak for bank clerks."},
              {sp:"YOUNG MAN", t:"They've been in decline since ATMs were introduced in the 80s, and technology will certainly make most of the jobs they do now redundant, I think."},
              {sp:"YOUNG WOMAN", t:"I agree. Although the situation may change, it's very hard to predict what will happen."},
              {sp:"ANNOUNCER", t:"That is the end of part 3. You now have 30 seconds to check your answers to part 3."}
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
                notesTitle: "Space Traffic Management",
                groups: [
                  {
                    heading: "A Space Traffic Management system",
                    items: [
                      {n:null, before:"is a concept similar to Air Traffic Control, but for satellites rather than planes.", input:null, after:""},
                      {n:31, before:"would aim to set up legal and", input:31, after:"ways of improving safety."},
                      {n:null, before:"does not actually exist at present.", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Problems in developing effective Space Traffic Management",
                    items: [
                      {n:32, before:"Satellites are now quite", input:32, after:"and therefore more widespread (e.g. there are constellations made up of"},
                      {n:33, before:"", input:33, after:"of satellites)."},
                      {n:34, before:"At present, satellites are not required to transmit information to help with their", input:34, after:"."},
                      {n:35, before:"There are few systems for", input:35, after:"satellites."},
                      {n:null, before:"Small pieces of debris may be difficult to identify.", input:null, after:""},
                      {n:36, before:"Operators may be unwilling to share details of satellites used for", input:36, after:"or commercial reasons."},
                      {n:37, before:"It may be hard to collect details of the object's", input:37, after:"at a given time."},
                      {n:38, before:"Scientists can only make a", input:38, after:"about where the satellite will go."}
                    ]
                  },
                  {
                    heading: "Solutions",
                    items: [
                      {n:null, before:"Common standards should be agreed on for the presentation of information.", input:null, after:""},
                      {n:39, before:"The information should be combined in one", input:39, after:"."},
                      {n:40, before:"A coordinated system must be designed to create", input:40, after:"in its users."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"technical",32:"cheap",33:"thousands",34:"identification",35:"tracking",36:"military",37:"location",38:"prediction",39:"database",40:"trust"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear part of a lecture for astronomy students about the need for a system to manage satellites and other objects orbiting the Earth. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"In today's astronomy lecture, I'm going to talk about the need for a system to manage the movement of satellites and other objects in orbit around the Earth. In other words, a Space Traffic Management system. We already have effective Air Traffic Control systems that are used internationally to ensure that planes navigate our skies safely. Well, Space Traffic Management is a similar concept, but focusing on the control of satellites. The aim of such a system would be to prevent the danger of collisions in space, between the objects in orbit around the Earth. In order to do this, we'd need to have a set of legal measures. And we'd also have to develop the technical systems to enable us to prevent such accidents, but unfortunately, at present, we don't actually have a Space Traffic Management system that works. So why not? What are the problems in developing such a system?"},
              {sp:"SPEAKER", t:"Well, for one thing, satellites are relatively cheap these days. Compared with how they were in the past, meaning that more people can afford to put them into space. So there's a lot more of them out there, and people aren't just launching single satellites. But whole constellations consisting of thousands of them designed to work together, so space is getting more crowded every day. But in spite of this, one thing you may be surprised to learn is that you can launch a satellite into space, and once it's out there, it doesn't have to send back any information to Earth to allow its identification. So while we have international systems for ensuring we know where the planes in our skies are, and to prevent them from colliding with one another. When it comes to the safety of satellites, at present we don't have anything like enough proper ways of tracking them."},
              {sp:"SPEAKER", t:"And it isn't just entire satellites that we need to consider. A greater threat is the huge amount of space debris in orbit around the Earth, broken bits of satellite and junk from space stations and so on. And some of these are so small that they can be very hard to identify, but they can still be very dangerous. In addition, some operators may be unwilling to share information about the satellites they've launched. For example, a satellite may be designed for military purposes. Or it may have been launched for commercial reasons, and the operators don't want competitors to have information about it, and even if the operators are willing to provide it. The information isn't easy to collect. Details are needed about the object itself, as well as about its location at a particular time. And remember that a satellite isn't very big, and it's likely to be moving at thousands of kilometers an hour. We don't have any sensors. That can constantly follow something moving so fast, so all that the scientists can do is to put forward a prediction concerning where the satellite is heading next."},
              {sp:"SPEAKER", t:"So those are some of the problems that we're facing. Let's consider now some of the solutions that have been suggested. One key issue is the way in which information is dealt with. We need more information, but it also needs to be accessible at a global level. So we need to establish shared standards that we can all agree on for the way in which this information is presented. We already do this in other areas of science. So although this is a challenge, it's not an impossible task. Then as all this information's collected, it needs to be put together so it can be used. And that will involve creating a single database on which it can be entered, as we continue to push forward new developments, congestion of the space environment is only going to increase. To cope with this, we need to develop a system like the one I've described to coordinate the work of the numerous spacecraft operators. But it's also essential that this system is one that establishes trust in the people that use it, both nationally and at a global level. One interesting development that I'll mention..."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 18 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2018%20test%204%20.mp3",
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
                notesTitle: "JOB DETAILS FROM EMPLOYMENT AGENCY",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:1, before:"Role:", input:1, after:""}
                    ]
                  },
                  {
                    heading: "Location",
                    items: [
                      {n:null, before:"Fordham", input:null, after:""},
                      {n:2, before:"", input:2, after:"Centre"},
                      {n:3, before:"", input:3, after:"Road, Fordham"}
                    ]
                  },
                  {
                    heading: "Work involves",
                    items: [
                      {n:null, before:"dealing with enquiries", input:null, after:""},
                      {n:4, before:"making", input:4, after:"and reorganising them"},
                      {n:5, before:"maintaining the internal", input:5, after:""},
                      {n:null, before:"general administration", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Requirements",
                    items: [
                      {n:6, before:"", input:6, after:"(essential)"},
                      {n:7, before:"a calm and", input:7, after:"manner"},
                      {n:null, before:"good IT skills", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Other information",
                    items: [
                      {n:8, before:"a", input:8, after:"job - further opportunities may be available"},
                      {n:9, before:"hours: 7.45 a.m. to", input:9, after:"p.m. Monday to Friday"},
                      {n:10, before:"", input:10, after:"is available onsite"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Receptionist",2:"Medical",3:"Chastons",4:"appointments",5:"database",6:"experience",7:"confident",8:"temporary",9:"1.15",10:"Parking"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear a man who works at an employment agency, phoning a woman who is looking for a job. First, you have some time to look at questions 1 to 5. Now listen carefully and answer questions 1 to 5."},
              {sp:"JULIE", t:"Hello?"},
              {sp:"GREG", t:"Oh, hello. Is that Julie Davison?"},
              {sp:"JULIE", t:"Yes."},
              {sp:"GREG", t:"This is Greg Preston from the Employment Agency. We met last week when you came in to enquire about office work."},
              {sp:"JULIE", t:"Oh, that's right."},
              {sp:"GREG", t:"Now we've just had some details come in of a job which might interest you. OK, so this is a position for a receptionist. I believe you've done that sort of work before."},
              {sp:"JULIE", t:"Yes, I have. I worked in a sports center for a couple of years before I got married and had the children."},
              {sp:"GREG", t:"Right. Well, this job's in Fordham, so not too far away for you, and it's at the medical center there."},
              {sp:"JULIE", t:"OK, so where exactly is that?"},
              {sp:"GREG", t:"It's quite near the station on Chastons Road."},
              {sp:"JULIE", t:"Sorry?"},
              {sp:"GREG", t:"Chastons Road. That's CHASTONS."},
              {sp:"JULIE", t:"OK, thanks. So what would the work involve? Dealing with enquiries from patients?"},
              {sp:"GREG", t:"Yes. And you'd also be involved in making appointments, whether face to face or on the phone, and rescheduling them if necessary."},
              {sp:"JULIE", t:"Fine. That shouldn't be a problem."},
              {sp:"GREG", t:"And another of your duties would be keeping the center's database up-to-date. Then you might have other general administrative duties as well. But those would be the main ones."},
              {sp:"JULIE", t:"OK."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 6 to 10. Now listen and answer questions 6 to 10."},
              {sp:"GREG", t:"Now, when the details came in, I immediately thought of you, because one thing they do require is someone with experience. And you did mention your work at the sports center when you came in to see us."},
              {sp:"JULIE", t:"Yes, in fact, I enjoyed that job. Is there anything else they're looking for?"},
              {sp:"GREG", t:"Well, they say it's quite a high-pressure environment. They're always very busy, and patients are often under stress. So they want someone who can cope with that. And stay calm, and at the same time, be confident when interacting with the public."},
              {sp:"JULIE", t:"Well, after dealing with three children all under 5, I reckon I can cope with that."},
              {sp:"GREG", t:"I'm sure you can. And then another thing they mention is that they're looking for someone with good IT skills..."},
              {sp:"JULIE", t:"Not a problem."},
              {sp:"GREG", t:"So you'd be interested in following this up?"},
              {sp:"JULIE", t:"Sure. When would it start?"},
              {sp:"GREG", t:"Well, they're looking for someone from the beginning of next month. But I should tell you that this isn't a permanent job. It's temporary. So the contract would be just to the end of September, but they do say that there could be further opportunities after that."},
              {sp:"JULIE", t:"OK, and what would the hours be?"},
              {sp:"GREG", t:"Well, they want someone who can start at a quarter to eight in the morning. Could you manage that?"},
              {sp:"JULIE", t:"Yes, my husband would have to get the kids up and off to my mother's. She's going to be looking after them while I'm at work. What time would I finish?"},
              {sp:"GREG", t:"One fifteen."},
              {sp:"JULIE", t:"That should work out all right. I can pick the kids up on my way home, and then I'll have the afternoon with them. Oh, one thing. Is there parking available for staff at the center?"},
              {sp:"GREG", t:"Yes, there is. And it's also on a bus route."},
              {sp:"JULIE", t:"Right. Well, I expect I'll have the car, but it's good to know that. OK, so where do I go from here?"},
              {sp:"GREG", t:"Well, if you're happy for me to do so, I'll forward your CV and references. And then the best thing would probably be for you to phone them, so they can arrange for an interview."},
              {sp:"JULIE", t:"Great. Well, thank you very much."},
              {sp:"GREG", t:"You're welcome."},
              {sp:"JULIE", t:"Bye now. Bye."},
              {sp:"ANNOUNCER", t:"That is the end of part 1. You now have one minute to check your answers to part 1."}
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
                notesTitle: "The Museum Building",
                items: [
                  {n:11, q:"The museum building was originally", opts:["a factory.","a private home.","a hall of residence."]},
                  {n:12, q:"The university uses part of the museum building as", opts:["teaching rooms.","a research library.","administration offices."]},
                  {n:13, q:"What does the guide say about the entrance fee?", opts:["Visitors decide whether or not they wish to pay.","Only children and students receive a discount.","The museum charges extra for special exhibitions."]},
                  {n:14, q:"What are visitors advised to leave in the cloakroom?", opts:["cameras","coats","bags"]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15\u201320",
                inst: "What information does the speaker give about each of the following areas of the museum?<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 15\u201320.",
                mapTitle: "Areas of museum",
                mapNote: "A. Parents must supervise their children.<br>B. There are new things to see.<br>C. It is closed today.<br>D. This is only for school groups.<br>E. There is a quiz for visitors.<br>F. It features something created by students.<br>G. An expert is here today.<br>H. There is a one-way system.",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:15, label:"Four Seasons"},
                  {n:16, label:"Farmhouse Kitchen"},
                  {n:17, label:"A Year on the Farm"},
                  {n:18, label:"Wagon Walk"},
                  {n:19, label:"Bees are Magic"},
                  {n:20, label:"The Pond"}
                ]
              }
            ],
            answers: {11:"B",12:"A",13:"A",14:"C",15:"F",16:"G",17:"E",18:"A",19:"C",20:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear a guide at a farming museum talking to a group of visitors. First, you have some time to look at questions 11 to 14. Now listen carefully and answer questions 11 to 14."},
              {sp:"SPEAKER", t:"Good morning everyone, and welcome to the Museum of Farming Life. I understand it's your first visit here, so I'd like to give you some background information about the museum. And then explain a little about what you can see during your visit. So, where we're standing at the moment is the entrance to a large building. That was constructed in 1880, as the home of a local businessman, Alfred Palmer, of the Palmer Biscuit Factory. It was later sold, and became a hall of residence for students in 1911, and a museum in 1951. In 2005, a modern extension was built to accommodate the museum's collections."},
              {sp:"SPEAKER", t:"The museum's owned by the university, and apart from two rooms that are our offices, the university uses the main part of the building. You may see students going into the building for lessons, but it's not open to museum visitors, I'm afraid. It's a shame, because the interior architectural features are outstanding. Especially the room that used to be the library. Luckily, we've managed to keep entry to the museum free. This includes access to all the galleries, outdoor areas, and the rooms for special exhibitions. We run activities for children and students, such as the Museum Club, for which there's no charge. We do have a donation box just over there, so feel free to give whatever amount you consider appropriate."},
              {sp:"SPEAKER", t:"We do have a cloakroom. If you'd like to leave your coats and bags somewhere. Unlike other museums, photography is allowed here, so you might like to keep your cameras with you. You might be more comfortable not carrying around heavy rucksacks. Though keep your coats and jackets on, as it's quite cold in the museum garden today."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 15 to 20. Now listen and answer questions 15 to 20."},
              {sp:"SPEAKER", t:"I'd like to tell you about the different areas of the museum. Just inside and outside the main gallery, we have an area called Four Seasons. Here, you can watch a four-minute animation of a woodland scene. It was designed especially for the museum by a group of young people on a film studies course, and it's beautiful. Children absolutely love it, but then so do adults. The main gallery's called Town and Country. It includes a photographic collection of prize-winning sheep and shepherds. Leaving Town and Country, you enter Farmhouse Kitchen, which is... well, self-explanatory. Here we have the oldest collection of equipment for making butter and cheese in the country. And this morning, a specialist cheesemaker will be giving demonstrations of how it's produced. You may even get to try some."},
              {sp:"SPEAKER", t:"After that, you can go in two directions. To the right is a staircase that takes you up to a landing, from where you can look down on the galleries. To the left is a room called A Year on the Farm. There is lots of seating here, as sometimes we use the room for school visits, so it's a good place to stop for a rest. If you're feeling competitive, you can take our memory test, in which you answer questions about things you've seen in the museum. The next area is called Wagon Walk. This contains farm carts from nearly every part of the country. It's surprising how much regional variation there was. Beside the carts are display boards with information about each one. The carts are old and fragile, so we ask you to keep your children close to you, and ensure they don't climb on the carts."},
              {sp:"SPEAKER", t:"From Wagon Walk, you can either make your way back to reception, or go out into the garden, or even go back to take another look in the galleries. In the far corner of the garden is Bees are Magic, but we're redeveloping this area, so you can't visit that at the moment. You can still buy our honey in the shop though. Finally, there is the pond, which contains all kinds of interesting wildlife. There are baby ducks that are only a few days old, as well as tiny frogs. The pond isn't deep, and there is a fence around it, so it's perfectly safe for children."},
              {sp:"ANNOUNCER", t:"That is the end of part 2. You now have 30 seconds to check your answers to part 2."}
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
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO educational skills were shown in the video of children doing origami?",
                qns: [21,22],
                options: [
                  {letter:"A", text:"solving problems"},
                  {letter:"B", text:"following instructions"},
                  {letter:"C", text:"working cooperatively"},
                  {letter:"D", text:"learning through play"},
                  {letter:"E", text:"developing hand-eye coordination"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 23\u201327",
                inst: "Which comment do the students make about each of the following children in the video?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 23\u201327.",
                mapTitle: "Children",
                mapNote: "A. demonstrated independence<br>B. asked for teacher support<br>C. developed a competitive attitude<br>D. seemed to find the activity calming<br>E. seemed pleased with the results<br>F. seemed confused<br>G. seemed to find the activity easy",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:23, label:"Sid"},
                  {n:24, label:"Jack"},
                  {n:25, label:"Naomi"},
                  {n:26, label:"Anya"},
                  {n:27, label:"Zara"}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 28\u201330",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                items: [
                  {n:28, q:"Before starting an origami activity in class, the students think it is important for the teacher to", opts:["make models that demonstrate the different stages.","check children understand the terminology involved.","tell children not to worry if they find the activity difficult."]},
                  {n:29, q:"The students agree that some teachers might be unwilling to use origami in class because", opts:["they may not think that crafts are important.","they may not have the necessary skills.","they may worry that it will take up too much time."]},
                  {n:30, q:"Why do the students decide to use origami in their maths teaching practice?", opts:["to correct a particular misunderstanding","to set a challenge","to introduce a new concept"]}
                ]
              }
            ],
            multiGroups: [[21,22]],
            answers: {21:"B",22:"D",23:"D",24:"A",25:"C",26:"G",27:"F",28:"A",29:"B",30:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, following instructions from their tutor, you will hear two trainee teachers discussing the use of origami, a paper folding activity in the classroom. First, you have some time to look at questions 21 to 27. Now listen carefully and answer questions 21 to 27."},
              {sp:"TUTOR", t:"So now I want you to discuss the lesson we've just been watching on the video, and think about the ways in which origami can be a useful educational tool. Can you all work with the person sitting next to you?"},
              {sp:"SEB", t:"I had no idea that such a simple thing like folding squares of paper to make the shape of something like a bird could be such an amazing tool. It's made me see origami in a whole new light."},
              {sp:"LIA", t:"I know. It was interesting to see the educational skills the children were developing by doing origami. On the video you could see them really listening hard to make sure they did all the steps in the right order to make the bird."},
              {sp:"SEB", t:"That's right. In this lesson, they were working individually, but it would also be interesting to see if the children could work out how to make something simple, uh, without being given any direction. That would help with building teamwork as well."},
              {sp:"LIA", t:"Yes, but much more of a challenge. One thing that really stood out for me was that the children were all having fun while being taught something new."},
              {sp:"SEB", t:"Which is a key aim of any lesson with this age group. And although these kids had no problems with folding the paper, with younger children you could do origami to help practice fine motor skills."},
              {sp:"LIA", t:"Absolutely. Shall we talk about the individual children we saw on the video? I wrote all their names down and took some notes."},
              {sp:"SEB", t:"Yes, I did too."},
              {sp:"LIA", t:"OK, good. Let's start with Sid."},
              {sp:"SEB", t:"He was interesting, because before they started doing the origami, he was being quite disruptive."},
              {sp:"LIA", t:"Yes, he really benefited from having to use his hands. It helped him to settle down and start concentrating."},
              {sp:"SEB", t:"Yes, I noticed that too. What about Jack? I noticed he seemed to want to work things out for himself."},
              {sp:"LIA", t:"Hmm. You could see him trying out different things rather than asking the teacher for help. What did you make of Naomi?"},
              {sp:"SEB", t:"She seemed to be losing interest at one point, but then she decided she wanted her mouse to be the best. And that motivated her to try harder."},
              {sp:"LIA", t:"She didn't seem satisfied with hers in the end, though."},
              {sp:"SEB", t:"No."},
              {sp:"LIA", t:"Anya was such a star. She listened so carefully, and then produced the perfect bird with very little effort."},
              {sp:"SEB", t:"Hmm, I think the teacher could have increased the level of difficulty for her."},
              {sp:"LIA", t:"Hmm, maybe. I think it was the first time Zara had come across origami."},
              {sp:"SEB", t:"She looked as if she didn't really get what was going on."},
              {sp:"LIA", t:"She seemed unsure about what she was supposed to do. But in the end, hers didn't turn out too badly."},
              {sp:"SEB", t:"Yeah, I'm sure it was a positive learning experience for her."},
              {sp:"LIA", t:"Hmm."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 28 to 30. Now listen and answer questions 28 to 30."},
              {sp:"LIA", t:"I think one reason why the origami activity worked so well in this class was that the teacher was well prepared."},
              {sp:"SEB", t:"Right. I think it would have taken me ages to prepare examples showing each of the steps involved in making the bird. But that was a really good idea. The children could see what they were aiming for, and much better for them to be able to hold something, rather than just looking at pictures."},
              {sp:"LIA", t:"Hmm, those physical examples supported her verbal explanations really well."},
              {sp:"SEB", t:"It's strange that origami isn't used more widely. Why do you think that is?"},
              {sp:"LIA", t:"Well, teachers may just feel it's not that appealing to children who are used to doing everything on computers, especially boys. Even if they're aware of the benefits."},
              {sp:"SEB", t:"Oh, I don't know. It's no different to any other craft activity. I bet it's because so many teachers are clumsy like me."},
              {sp:"LIA", t:"That's true. Too much effort required if you're not good with your hands."},
              {sp:"SEB", t:"Well, anyway, I think we should try it out in our maths teaching practice with Year 3. I can see using origami is a really engaging way of reinforcing children's knowledge of geometric shapes, like they were doing in the video. But I think it would also work really well for presenting fractions, which is coming up soon."},
              {sp:"LIA", t:"Good idea. That's something most of the kids in that class might struggle with. Origami would also be good practice for using symmetry, but I think they did that last term."},
              {sp:"SEB", t:"OK. Well, let's try and get some ideas together, and plan the lesson next week."},
              {sp:"TUTOR", t:"OK, if you could all stop..."},
              {sp:"ANNOUNCER", t:"That is the end of part 3. You now have 30 seconds to check your answers to part 3."}
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
                notesTitle: "Victor Hugo",
                groups: [
                  {
                    heading: "His novel, Les Miserables",
                    items: [
                      {n:null, before:"It has been adapted for theatre and cinema.", input:null, after:""},
                      {n:31, before:"We know more about its overall", input:31, after:"than about its author."}
                    ]
                  },
                  {
                    heading: "His early career",
                    items: [
                      {n:null, before:"In Paris, his career was successful and he led the Romantic movement.", input:null, after:""},
                      {n:32, before:"He spoke publicly about social issues, such as", input:32, after:"and education."},
                      {n:null, before:"Napoleon III disliked his views and exiled him.", input:null, after:""}
                    ]
                  },
                  {
                    heading: "His exile from France",
                    items: [
                      {n:33, before:"Victor Hugo had to live elsewhere in", input:33, after:"."},
                      {n:34, before:"He used his income from the sale of some", input:34, after:"he had written to buy a house on Guernsey."}
                    ]
                  },
                  {
                    heading: "His house on Guernsey",
                    items: [
                      {n:null, before:"Victor Hugo lived in this house until the end of the Empire in France.", input:null, after:""},
                      {n:35, before:"The ground floor contains portraits,", input:35, after:"and tapestries that he valued."},
                      {n:36, before:"He bought cheap", input:36, after:"made of wood and turned this into beautiful wall carvings."},
                      {n:37, before:"The first floor consists of furnished areas with wallpaper and", input:37, after:"that have a Chinese design."},
                      {n:null, before:"The library still contains many of his favourite books.", input:null, after:""},
                      {n:38, before:"He wrote in a room at the top of the house that had a view of the", input:38, after:"."},
                      {n:39, before:"He entertained other writers as well as poor", input:39, after:"in his house."},
                      {n:40, before:"Victor Hugo's", input:40, after:"gave ownership of the house to the city of Paris in 1927."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"plot",32:"poverty",33:"Europe",34:"poetry",35:"drawings",36:"furniture",37:"lamps",38:"harbour",39:"children",40:"relatives"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear a literature student giving a talk about Victor Hugo, a famous 19th century French writer. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"The person I've chosen to talk about is the French writer Victor Hugo. Many people have heard of him because his novel, Les Miserables, which he wrote in 1862, is famous around the world. It became a stage musical in the 1980s, and a film version was also released in 2012. So some of us, I'm sure, have a pretty general idea of the plot, but we know much less about the author. Today, I'm going to provide a little more insight into this talented man. And I'm going to talk particularly about the home he had on the island of Guernsey in the British Channel Islands, but first, his early career."},
              {sp:"SPEAKER", t:"As I've said, he was a writer. He was at the height of his career in Paris, and he was very highly regarded by his colleagues. As far as literature was concerned, he was the leading figure of the Romantic movement. However, as well as being a literary genius, he also gave many speeches about issues like the level of poverty in his society. He felt very strongly about this, and about other areas where change was needed, like education. This kind of outspoken criticism was not well liked by the rulers of France. And eventually the emperor - Napoleon III - told Victor Hugo to leave Paris and not return. In other words, he sent him into exile."},
              {sp:"SPEAKER", t:"So Victor Hugo was forced to reside in other parts of Europe. Guernsey was actually his third place of exile. And he landed there in 1855. He produced a lot while on Guernsey, including Les Miserables. And to do this, he had to spend a great deal of time in the home that he had there. This was a property that he bought using the money he'd made in France, from the publication of a collection of his poetry. It was the only property he ever owned, and he was very proud of it."},
              {sp:"SPEAKER", t:"The property Victor Hugo bought on Guernsey was a large five-storey house in the capital town of St Peter Port, and he lived there for 15 years. Returning to France in 1870 when Napoleon's empire collapsed. He decorated and furnished each level or floor of the house in unique and wonderful ways, and many people consider the inside of the house to be a work of art. Today, it's a museum that attracts 200,000 visitors a year. He lived in the house with his family, and portraits of its members still hang in rooms on the ground floor, along with drawings that he did during his travels. That he felt were important to him. In other ground floor rooms, there are huge tapestries that he would have designed and loved."},
              {sp:"SPEAKER", t:"The walls are covered in dark wood panelling that Victor Hugo created himself using wooden furniture that he bought in the market. The items were relatively inexpensive, and he used them to create intricate carvings. They gave an atmosphere on the lower level that was shadowy, and rather solemn. On the next level of the house, there are two impressive lounges where he entertained his guests. One lounge has entirely red furnishings. Such as sofas and wall coverings, and the other blue. There's a strong Chinese influence in these areas, in things like the wallpaper pattern. And the lamps, which he would have made himself by copying original versions."},
              {sp:"SPEAKER", t:"His library, where he left many of his favorite books, forms the hallway to the third floor, and was a comfortable area where he could relax and enjoy his afternoons. And then, at the very top of the house, there's a room called the Lookout, called that because it looks out over the harbor. In contrast to the rather dark lower levels, it's full of light, and was like a glass office where he would write until lunchtime. Often at his desk."},
              {sp:"SPEAKER", t:"So Victor Hugo was a man of many talents, but he was also true to his values. While living in his house on Guernsey. He entertained many other famous writers, but he also invited a large group of local children from the deprived areas of the island to dinner once a week. What's more, he served them their food, which was an extraordinary gesture for the time period. In 1927, the house was owned by his relatives, and they decided to donate it to the city of Paris. It has since been restored using photographs from the period, and as I mentioned earlier, is now a museum that is open to the public."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      }
    }
  }
});
