// EngFinite Learning — Listening Test Data (CAM19)
// Upload to cPanel public_html alongside index.html

Object.assign(LISTENING_DATA, {
    cam19: {
    tests: {
      1: {
        title: "Cambridge IELTS 19 — Test 1 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2019%20test%201%20.mp3",
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
                notesTitle: "HINCHINGBROOKE COUNTRY PARK",
                groups: [
                  {
                    heading: "The park",
                    items: [
                      {n:1, before:"Area:", input:1, after:"hectares"},
                      {n:null, before:"Habitats: wetland, grassland and woodland", input:null, after:""},
                      {n:2, before:"Wetland: lakes, ponds and a", input:2, after:""},
                      {n:null, before:"Wildlife includes birds, insects and animals", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Subjects studied in educational visits include",
                    items: [
                      {n:3, before:"Science: Children look at", input:3, after:"about plants, etc."},
                      {n:4, before:"Geography: includes learning to use a", input:4, after:"and compass"},
                      {n:null, before:"History: changes in land use", input:null, after:""},
                      {n:5, before:"Leisure and tourism: mostly concentrates on the park's", input:5, after:""},
                      {n:6, before:"Music: Children make", input:6, after:"with natural materials, and experiment with rhythm and speed."}
                    ]
                  },
                  {
                    heading: "Benefits of outdoor educational visits",
                    items: [
                      {n:7, before:"They give children a feeling of", input:7, after:"that they may not have elsewhere."},
                      {n:8, before:"Children learn new", input:8, after:"and gain self-confidence."}
                    ]
                  },
                  {
                    heading: "Practical issues",
                    items: [
                      {n:9, before:"Cost per child: £", input:9, after:""},
                      {n:10, before:"Adults, such as", input:10, after:", free"}
                    ]
                  }
                ]
              }
            ],
            answers: {1:"69",2:"stream",3:"data",4:"map",5:"visitors",6:"sounds",7:"freedom",8:"skills",9:"4.95",10:"leaders"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear a teaching assistant calling a country park about a school visit. First, you have some time to look at questions 1 to 6. Now listen carefully, and answer questions 1 to 6."},
              {sp:"SALLY", t:"Good morning, Hinchingbrooke Country Park, Sally speaking. I'm one of the rangers."},
              {sp:"JOHN", t:"Oh, hello, uh, my name is John Chapman, and I'm a teaching assistant at a local primary school. I've been asked to arrange a visit to the park for two of our classes."},
              {sp:"SALLY", t:"OK, what would you like to know?"},
              {sp:"JOHN", t:"Well, I'm new to this area. So perhaps you could tell me something about the park first, please."},
              {sp:"SALLY", t:"Of course. Altogether the park covers 170 acres. That's 69 hectares. There are three main types of habitat, wetland, grassland, and woodland. The woods are well established and varied. With an oak plantation and other areas of mixed species."},
              {sp:"JOHN", t:"Right."},
              {sp:"SALLY", t:"The wetland is quite varied too. The original farmland was dug up around 40 years ago to extract gravel. Once this work was completed, the gravel pits filled with water, forming the two large lakes. There are also several smaller ones. Ponds and a stream that flows through the park."},
              {sp:"JOHN", t:"OK, so I suppose with these different habitats, there's quite a variety of wildlife."},
              {sp:"SALLY", t:"There certainly is. A lot of different species of birds and insects, and also animals like deer and rabbits."},
              {sp:"JOHN", t:"And I understand you organize educational visits for school parties."},
              {sp:"SALLY", t:"That's right. We can organize a wide range of activities, and adapt them to suit all ages."},
              {sp:"JOHN", t:"Can you give me some examples of the activities?"},
              {sp:"SALLY", t:"Well, one focus is on science, where we help children to discover and study plants, trees and insects. They also collect and analyze data about the things they see."},
              {sp:"JOHN", t:"Uh huh."},
              {sp:"SALLY", t:"Another focus is on geography. The park is a great environment to learn and practice reading a map. And using a compass to navigate around the park."},
              {sp:"JOHN", t:"Do you do anything connected with history?"},
              {sp:"SALLY", t:"Yes, we do. For instance, the children can explore how the use of the land has changed over time. Then there's leisure and tourism."},
              {sp:"JOHN", t:"That focuses on your visitors, I would imagine."},
              {sp:"SALLY", t:"Yes, mostly. The children find out about them, their requirements, the problems they may cause, and how we manage these. And another subject we cover is music. Here the children experiment with natural materials to create sounds and explore rhythm and tempo."},
              {sp:"JOHN", t:"That must be fun."},
              {sp:"SALLY", t:"Most children really enjoy it."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10. Now listen and answer questions 7 to 10."},
              {sp:"SALLY", t:"And of course, all the activities are educational too. Learning outside the classroom encourages children to be creative and to explore and discover for themselves."},
              {sp:"JOHN", t:"I would imagine they get a sense of freedom that might not be a normal part of their lives."},
              {sp:"SALLY", t:"That's right. And very often the children discover that they can do things they didn't know they could do. And they develop new skills. This gives them greater self-confidence."},
              {sp:"JOHN", t:"It sounds great. So what about the practical side of it? How much does it cost for a full day visit? We would expect to bring between 30 and 40 children"},
              {sp:"SALLY", t:"If there are over 30, it costs £4.95 for each child who attends on the day. We invoice you afterwards, so you don't pay for children who can't come because of sickness, for example. There's no charge for leaders and other adults, as many as you want to bring."},
              {sp:"JOHN", t:"That sounds very fair. Well, thanks for all the information. I'll need to discuss it with my colleagues, and I hope to get back to you soon to make a booking."},
              {sp:"SALLY", t:"We'll look forward to hearing from you. Goodbye."},
              {sp:"JOHN", t:"Goodbye, and thank you."},
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
                qlabel: "Questions 11\u201315",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Stanthorpe Twinning Association",
                items: [
                  {n:11, q:"During the visit to Malatte, in France, members especially enjoyed", opts:["going to a theme park.","experiencing a river trip.","visiting a cheese factory."]},
                  {n:12, q:"What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?", opts:["A tree will be planted.","A garden seat will be bought.","A footbridge will be built."]},
                  {n:13, q:"Which event raised most funds this year?", opts:["the film show","the pancake evening","the cookery demonstration"]},
                  {n:14, q:"For the first evening with the French visitors host families are advised to", opts:["take them for a walk round the town.","go to a local restaurant.","have a meal at home."]},
                  {n:15, q:"On Saturday evening there will be the chance to", opts:["listen to a concert.","watch a match.","take part in a competition."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 16\u201320",
                inst: "Label the map below.<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 16\u201320.",
                mapTitle: "Farley House",
                mapImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAP4BGIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7LooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACijNFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRmjNABRRmigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBKjldY0LuyqB1LHAqWvPv2jAD8C/Gn/YIn/wDQaluyuNK7sdx9ussZ+12//fwU37bZk4F3bnPQeaMmvyz+Cnww1n4seKbnw5oV9YWdzb2T3he8ZwhRXRMDaG5zIK918G/sf/ELRPF2kavc+IPC80NjfQ3LpHLPuYI4YgZhq0tdSWfcNLTfWqv9pWH27+zzf2ovMZFv5y+Zj125zSGXKKQHFHWgA71534x+Nfwz8IeIJtB8ReKILDUYApeBoJGI3DI5VSK9AeREI3sq5OBk4ya/N/8AbY/5OU1v/ctf/RKULWSQ7aNn6RIwkVXXkEZFPqvZf8eUH/XNf5VHf39nYor3t5b2yOQqmaUJk+gz3oejJTui5RTEZWQMhyDznrT/AHoGFFJmjJoADyKjlkjjUvI4RAeSTgc1JXjX7aX/ACbh4oH/AF7f+lEdTJ2GlfQ9fiuIZjiGaOQ/7Dg4qavin/gmp/yF/G//AF72X85q+1qtqxKKwu7YuFW5gLE42iQZzVqvzG+HAH/DWumf9jYf/R7V+m69KS2TG9JWHUVU1HULHT4llv7y2tY2O0NNKEBP1NTxusiB0YOrDII5BFAElFHPFGaACiik5z1oAWiqt/eWlhbNcXt1Dawr1eaQIo/E0+3mingWe3lSaNxlZI2DAg9wR1oAnopMmqkeoWMt7JZRX1tJdR4MkKzKXT6rnIoAuUUgJo+agBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAT1rgP2jP8AkhnjT/sEzf8AoNd+e9cB+0Z/yQzxp/2C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FeLrDZICnnw3ctlKU9GA/wATXZfCH9kdtL8Qw6/8Rdat9WeGTzhYW+545X9ZZG5P+ea+uKKaYbmN4x8P6d4p8K6j4c1NWNlqNs9vMEOCFYYyPcV8VTfshfFHRvESTeF/FOkrGrZh1AXM1rNGPcICR+Ffd1GOKS3uHkfGHjb9jzXbuw0t9F8S6dc6uwkk1e91KWVTPMxyNgUP+te46Z8MdWT9mYfCu4v7NdSbSnsjcpueEOST7HvXr1GB6UPVWDzPiZfgD+0nZWaaNZfEYDS9vlhY9cuUiVf93Fen/s2fs32/wx1c+Kdc1WPVNf8AKaOFbdCLe2DdSC3Lt2r6KwMUvFNMDwb9pH9nrT/ilcx69peoJpPiKKLyzK6F4bhB0V/8a8X0r9nP9ozTFGj6d8Q00/S4+IxBr11HCB7RqtfcH+NLiktAep5h+zj8N774YeAX0HUtXj1a8uL2S+nnjiKgO6qCMkkv0+9XpwooFNu7ELRRRQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBMilowPSigAooooAKKKKACiiigAooooAKKKKVwA0CkahaYC0UUUAFFFFABRRRQAUUUUAFFFFABRRRS1AKKKKNQCiiimAUUUUAAOaKBRQAUUhYCoZbmCORIpJ4o3k4RXcAt9B3oAnopKWgAooooAKKKKACiiigAooooAKKKKACiiigAozRSfxUALRRRQAUVAbiBZ0gaaNZXGVjLgMQPQVODmgAooooAKKKKACiiigAoozSZNABmlpKFoAWiiigAooooACcUUh60tABRRRQAUUUUtQCiiimAUUUZoAKKKKACiiigAooooAKKKKACg0UhoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACgUGgUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAAOaKQUtABRRRQAUmT6UtFACZooooAWiiigAooooASig0UAFFFFACk4pM0UUAGaWk+aj5qAFooozQAUUmfypaACiiipARqFoahabAWiiimAUUUUAFJwO1LSUALn2pKKKACgGilxQAhOaAcUuKTApagLRRRTAKKKKACiikc/LQBXury1srV7m8uYbaCP70srhF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L/8AxivqzrS4ovYD5T/4VZ+1l/0WDS//AAKk/wDjFB+Fn7WH/RYNM/8AAqT/AOM19V496Me9K7A+VP8AhVn7V/8A0WDTP/AqT/4zR/wqz9q//osGmf8AgTJ/8Zr6row1FwPlU/Cz9q//AKLDpv8A4ESf/GaB8Lv2sO3xh0z/AMCX/wDjFfVODRtouPQ+Vf8AhVv7V/8A0WLTf/AiT/4xR/wq39q//osOm/8AgTJ/8Zr6qwaMGi4aHyr/AMKs/av/AOiwab/4Eyf/ABil/wCFXftXf9Fi03/wJk/+MV9VY96TFFw0Plb/AIVZ+1d/0WHTf/AqT/4xSf8ACrf2r/8AosOl/wDgTJ/8Yr6qxS7aLiPlP/hVv7WH/RYdM/8AAqT/AOM0H4WftY/9Ff0z/wACpP8A4zX1ZikxRcD5T/4Vb+1l/wBFe03/AMCpP/jNH/Crf2sf+ivad/4FSf8Axmvq3FGKaYHyj/wqz9rL/or2nf8AgXJ/8Zpw+F/7Wf8A0V3Tf/Al/wD4zX1dTaAPlP8A4Vd+1j/0V/TP/Al//jNKfhZ+1h/0WDTP/AqT/wCM19WYpMUrgfKh+Fn7WH/RYNM/8CZP/jNH/CrP2r/+iwaZ/wCBUn/xmvqvaaNpouB8qf8ACrP2r/8AosGmf+BMn/xij/hVv7V//RYdL/8AAmT/AOMV9V7aNtFwPlU/Cv8Aau/6LHpn/gRJ/wDGaQ/Cz9q7/osWm/8AgTJ/8Zr6r20baLgfKf8Awqr9q/8A6LFp3/gVJ/8AGaG+FX7V3/RYtN/8CZP/AIzX1btNGMUXYHygfhT+1f3+MNh/4GS//GaQ/Cn9q7/or9h/4GS//Ga+sNtG2ncD5PHwp/av/wCiwWP/AIGy/wDxmkf4U/tXbePjBY/+B0v/AMZr6x20YxRcDwr9k74SeJfhTpGu2viW9027m1K6jmjazld+FHfcor3emU+lcGFFFFUIQ9aWkJzS0AFFFFK4BRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKRulLSE80ALRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUrgFFFFMANApGpRQAUUUUrgFFFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAQUtIvSloAKKKKACiiigBM0U3PtRQA+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k=",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:16, label:"Farm shop"},
                  {n:17, label:"Disabled entry"},
                  {n:18, label:"Adventure playground"},
                  {n:19, label:"Kitchen gardens"},
                  {n:20, label:"The Temple of the Four Winds"}
                ]
              }
            ],
            answers: {11:"B",12:"A",13:"B",14:"C",15:"A",16:"G",17:"C",18:"B",19:"D",20:"F"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear the chairman of Stanthorpe Twinning Association, which organizes the link between Stanthorpe in England and a town in France. Talking to members about the year's events. First you have some time to look at questions 11 to 15. Now listen carefully, and answer questions 11 to 15."},
              {sp:"SPEAKER", t:"It's great to see so many members of the Twinning Association here tonight. Since the twinning link between our two towns, Stanthorpe here in England, and Malatte in France was established, the relationship between the towns has gone from strength to strength. Last month, 25 members of the association from Stanthorpe spent a weekend in Malatte. Our hosts had arranged a great program. We learned how cheese is produced in the region, and had the chance to taste the products. The theme park trip had to be cancelled, but we all had a great time on the final boat trip down the river. That was the real highlight."},
              {sp:"SPEAKER", t:"This is a special year for the association, because it's 25 years since we were founded. In Malatte, they're planning to mark this by building a footbridge in the municipal park. We've been discussing what to do here, and we've decided to plant a Poplar tree in the museum gardens. We considered buying a garden seat to put there. But the authorities weren't happy with that idea. In terms of fund raising to support our activities, we've done very well. Our pancake evening was well attended and made record profits, and everyone enjoyed the demonstration of French cookery, which was nearly as successful. Numbers for our film show were limited because of the venue, so we're looking for somewhere bigger next year."},
              {sp:"SPEAKER", t:"We're looking forward to welcoming our French visitors here next week. And I know that many of you here will be hosting individuals or families. The coach from France will arrive at 5 pm on Friday. Don't try to do too much that first evening, as they'll be tired. So have dinner in the house or garden rather than eating out. The weather looks as if it'll be OK, so you might like to plan a barbecue. Then the next morning's market day in town, and that's always a good place to stroll round. On Saturday evening, we'll all meet up at the football club. Where once again we'll have Toby Sharp and his band performing English and Scottish country songs. Toby will already be well known to many of you, as last year he organized our special quiz night. And presented the prizes."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 16 to 20. Now listen and answer questions 16 to 20."},
              {sp:"SPEAKER", t:"Now, on Sunday, we'll be taking our visitors to Farley House. You may not all be familiar with it, so here's a map to help you. You can see the car park at the bottom of the map. There's an excellent farm shop in the grounds where our visitors can buy local produce. It's in the old stables, which is the first building you come to. They're built round a courtyard, and the shop's in the far corner on the left. There's also a small cafe on the right as you go in. I know that one or two of our visitors may not be all that mobile. The main entrance to the house has a lot of steps, so you might want to use the disabled entry. This is on the far side of the house from the car park. Children will probably be most interested in the adventure playground. That's at the northern end of the larger lake, in a bend on the path that leads to the lake. There's lots for children to do there."},
              {sp:"SPEAKER", t:"There are a number of lovely gardens near the house. The kitchen gardens are rectangular and surrounded by a wall. They're to the northeast of the house, quite near the smaller lake. They're still in use, and have a great collection of fruit and vegetables. The Temple of the Four Winds is a bit more of a walk, but it's worth it. Take the path from the car park, and go past the western sides of the stables and the house. Then, when the path forks, take the right-hand path. Go up there with the woods on your left, and the temple is right at the end. There are great views over the whole area. OK, so that's the..."},
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
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things did Colin find most satisfying about his bread reuse project?",
                qns: [21,22],
                options: [
                  {letter:"A", text:"receiving support from local restaurants"},
                  {letter:"B", text:"finding a good way to prevent waste"},
                  {letter:"C", text:"overcoming problems in a basic process"},
                  {letter:"D", text:"experimenting with designs and colours"},
                  {letter:"E", text:"learning how to apply 3-D printing"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 23 and 24",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO ways do the students agree that touch-sensitive sensors for food labels could be developed in future?",
                qns: [23,24],
                options: [
                  {letter:"A", text:"for use on medical products"},
                  {letter:"B", text:"to show that food is no longer fit to eat"},
                  {letter:"C", text:"for use with drinks as well as foods"},
                  {letter:"D", text:"to provide applications for blind people"},
                  {letter:"E", text:"to indicate the weight of certain foods"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201330",
                inst: "What is the students' opinion about each of the following food trends?<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 25\u201330.",
                mapTitle: "Food Trends",
                mapNote: "A. This is only relevant to young people.<br>B. This may have disappointing results.<br>C. This already seems to be widespread.<br>D. Retailers should do more to encourage this.<br>E. More financial support is needed for this.<br>F. Most people know little about this.<br>G. There should be stricter regulations about this.<br>H. This could be dangerous.",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:25, label:"Use of local products"},
                  {n:26, label:"Reduction in unnecessary packaging"},
                  {n:27, label:"Gluten-free and lactose-free food"},
                  {n:28, label:"Use of branded products related to celebrity chefs"},
                  {n:29, label:"Development of 'ghost kitchens' for takeaway food"},
                  {n:30, label:"Use of mushrooms for common health concerns"}
                ]
              }
            ],
            multiGroups: [[21,22],[23,24]],
            answers: {21:"B",22:"D",23:"A",24:"E",25:"D",26:"G",27:"C",28:"B",29:"F",30:"H"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear two food science students called Marie and Colin discussing their final year projects. First, you have some time to look at questions 21 to 24. Now listen carefully and answer questions 21 to 24."},
              {sp:"COLIN", t:"I haven't seen you for a bit, Marie."},
              {sp:"MARIE", t:"No, I've been busy with my project."},
              {sp:"COLIN", t:"You're making a vegan alternative to eggs, aren't you? Something that doesn't use animal products."},
              {sp:"MARIE", t:"Yes. I'm using chickpeas. I had two main aims when I first started looking for an alternative to eggs, but actually I found chickpeas have got more advantages."},
              {sp:"COLIN", t:"Right."},
              {sp:"MARIE", t:"But how about your project on reusing waste food? You were looking at bread, weren't you?"},
              {sp:"COLIN", t:"Yes, it's been hard work, but I've enjoyed it. The basic process was quite straightforward, breaking the stale bread down to a paste, then reforming it."},
              {sp:"MARIE", t:"But you were using 3D printing, weren't you, to make the paste into biscuits?"},
              {sp:"COLIN", t:"Yeah, I'd used that before, but in this project, I had time to play around with different patterns for the biscuits, and finding how I could add fruit and vegetables to make them a more appetizing color. And I was really pleased with what I managed to produce."},
              {sp:"MARIE", t:"It must have been a great feeling to make something appetizing out of bits of old bread that would have been thrown away otherwise."},
              {sp:"COLIN", t:"It was. And I'm hoping that some of the restaurants in town will be interested in the biscuits. I'm going to send them some samples."},
              {sp:"MARIE", t:"I came across something on the internet yesterday that might interest you. It was a company that's developed touch sensitive sensors for food labels. Hmm. It's a special sort of label on the food package. When the label's smooth, the food is fresh. And then when you can feel bumps on the label, that means the food's gone bad. It started off as a project to help visually impaired people. To know whether food was fit to eat or not."},
              {sp:"COLIN", t:"Interesting. So just solid food?"},
              {sp:"MARIE", t:"No, things like milk and juice as well. But actually I thought it might be really good for drug storage in hospitals and pharmacies."},
              {sp:"COLIN", t:"Right. And coming back to food, maybe it would be possible to use it for other things besides freshness. Like how many kilograms a joint of meat is, for example?"},
              {sp:"MARIE", t:"Yes, there's all sorts of possibilities."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 25 to 30. Now listen and answer questions 25 to 30."},
              {sp:"COLIN", t:"I was reading an article about food trends, predicting how eating habits might change in the next few years."},
              {sp:"MARIE", t:"Oh, things like more focus on local products. That seems so obvious, but the shops are still full of imported foods. Yes, they need to be more proactive to address that, and somehow motivate consumers to change, yes."},
              {sp:"COLIN", t:"One thing everyone's aware of is the need for a reduction in unnecessary packaging, but just about everything you buy in supermarkets is still covered in plastic. The government needs to do something about it."},
              {sp:"MARIE", t:"Absolutely. It's got to change."},
              {sp:"COLIN", t:"Do you think there'll be more interest in gluten and lactose free food?"},
              {sp:"MARIE", t:"For people with allergies or food intolerances. I don't know, lots of people I know have been buying that type of food for years now."},
              {sp:"COLIN", t:"Yes, even if they haven't been diagnosed with an allergy."},
              {sp:"MARIE", t:"That's right. One thing I've noticed is the number of branded products related to celebrity chefs. People watch them cooking on TV. And then buy things like spice mixes or frozen foods with the chef's name on. I bought something like that once, but I won't again."},
              {sp:"COLIN", t:"Yeah, I bought a ready made spice mix for chicken, which was supposed to be used by a chef I'd seen on television. And it didn't actually taste of anything."},
              {sp:"MARIE", t:"Hmm. Did the article mention ghost kitchens used to produce takeaway food?"},
              {sp:"COLIN", t:"No, what are they?"},
              {sp:"MARIE", t:"Well, they might have the name of a restaurant, but actually they're a cooking facility just for delivery meals. The public don't ever go there. But people aren't aware of that, it's all kept very quiet."},
              {sp:"COLIN", t:"So, people don't realize the food's not actually from the restaurant?"},
              {sp:"MARIE", t:"Right."},
              {sp:"COLIN", t:"Hmm. Did you know more and more people are using all sorts of different mushrooms now to treat different health concerns, uh, things like heart problems."},
              {sp:"MARIE", t:"Hmm, they might be taking a big risk there."},
              {sp:"COLIN", t:"Yes, it's hard to know which varieties are safe to eat. Anyway, maybe now we should..."},
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
                notesTitle: "C\u00e9ide Fields",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"an important Neolithic archaeological site in the northwest of Ireland", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Discovery",
                    items: [
                      {n:31, before:"In the 1930s, a local teacher realised that stones beneath the bog surface were once", input:31, after:"."},
                      {n:32, before:"His", input:32, after:"became an archaeologist and undertook an investigation of the site:"},
                      {n:33, before:"a traditional method used by local people to dig for", input:33, after:"was used to identify where stones were located", indent:true},
                      {n:null, before:"carbon dating later proved the site was Neolithic.", input:null, after:"", indent:true},
                      {n:34, before:"Items are well preserved in the bog because of a lack of", input:34, after:"."}
                    ]
                  },
                  {
                    heading: "Neolithic farmers",
                    items: [
                      {n:35, before:"Houses were", input:35, after:"in shape and had a hole in the roof."},
                      {n:null, before:"Neolithic innovations include:", input:null, after:""},
                      {n:null, before:"cooking indoors", input:null, after:"", indent:true},
                      {n:36, before:"pots used for storage and to make", input:36, after:".", indent:true},
                      {n:37, before:"Each field at C\u00e9ide was large enough to support a big", input:37, after:"."},
                      {n:38, before:"The fields were probably used to restrict the grazing of animals - no evidence of structures to house them during", input:38, after:"."}
                    ]
                  },
                  {
                    heading: "Reasons for the decline in farming",
                    items: [
                      {n:39, before:"a decline in", input:39, after:"quality"},
                      {n:40, before:"an increase in", input:40, after:""}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"walls",32:"son",33:"fuel",34:"oxygen",35:"rectangular",36:"lamps",37:"family",38:"winter",39:"soil",40:"rain"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear an archaeology student giving a presentation on an important site in Ireland called the C\u00e9ide Fields. First you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"For my presentation today, I'm going to talk about the C\u00e9ide Fields in the northwest of Ireland, one of the largest Neolithic sites in the world. I recently visited this site and observed the work that is currently being done by a team of archaeologists there. The site was first discovered in the 1930s by a local teacher, Patrick Caulfield. He noticed that when local people were digging in the bog, they were constantly hitting against what seemed to be rows of stones. He realized that these must be walls, and that they must be thousands of years old for them to predate the bog which subsequently grew over them. He wrote to the National Museum in Dublin to ask them to investigate, but no one took him seriously."},
              {sp:"SPEAKER", t:"It wasn't until 40 years later, when Patrick Caulfield's son Seamus, who had become an archaeologist by then, began to explore further. He inserted iron probes into the bog, to map the formation of the stones. A traditional method which local people had always used for finding fuel buried in the bog for thousands of years. Carbon dating later proved that the site was over 5,000 years old, and was the largest Neolithic site in Ireland."},
              {sp:"SPEAKER", t:"Thanks to the bog which covers the area, the remains of the settlement at C\u00e9ide fields, which is over 5,000 years old, are extremely well preserved. A bog is 90% water, its soil so saturated that when the grasses and heathers that grow on its surface die, they don't fully decay, but accumulate in layers. Objects remain so well preserved in these conditions because of the acidity of the peat, and the deficiency of oxygen. At least 175 days of rain a year are required for this to happen. This part of Ireland gets an average of 225 days."},
              {sp:"SPEAKER", t:"The Neolithic farmers at C\u00e9ide would have enjoyed several centuries of relative peace and stability. Neolithic farmers generally lived in larger communities than their predecessors. With a number of houses built around a community building. As they lived in permanent settlements, Neolithic farmers were able to build bigger houses. These weren't round as people often assume, but rectangular, with a small hole in the roof that allowed smoke to escape. This is one of many innovations, and indicates that the Neolithic farmers were the first people to cook indoors."},
              {sp:"SPEAKER", t:"Another new technology that Neolithic settlers brought to Ireland was pottery. Fragments of Neolithic pots have been found in C\u00e9ide and elsewhere in Ireland. The pots were used for many things, as well as for storing food. Pots were filled with a small amount of fat, and when this was set alight, they served as lamps. It's thought that the C\u00e9ide fields were mainly used as paddocks for animals to graze in. Evidence from the C\u00e9ide fields suggests that each plot of land was of a suitable size, to sustain an extended family. Uh. They may have used a system of rotational grazing in order to prevent overgrazing and to allow for plant recovery and regrowth. This must have been a year-round activity, as no structures have been found which would have been used to shelter animals in the winter."},
              {sp:"SPEAKER", t:"However, archaeologists believe that this way of life at C\u00e9ide ceased abruptly. Why was this? Well, several factors may have contributed to the changing circumstances. The soil would have become less productive, and led to the abandonment of farming. The crop rotation system was partly responsible for this, as it would have been very intensive and was not sustainable. But there were also climatic pressures too. The farmers at C\u00e9ide would have enjoyed a relatively dry period, but this began to change, and the conditions became wetter as there was a lot more rain. It was these conditions that encouraged the bog to form over the area, which survives today. So now I'd like to show you some..."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      },
      2: {
        title: "Cambridge IELTS 19 — Test 2 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2019%20test%202%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u20136",
            blocks: [
              {
                type: "form",
                qlabel: "Questions 1\u20136",
                inst: "Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "GUITAR GROUP",
                groups: [
                  {
                    heading: "",
                    rows: [
                      {label:"Coordinator:", parts:[{text:"Gary"},{input:1}]},
                      {label:"Level:", parts:[{input:2}]},
                      {label:"Place:", parts:[{text:"the"},{input:3}]},
                      {label:"", parts:[{input:4},{text:"Street"}]},
                      {label:"", parts:[{text:"First floor, Room T347"}]},
                      {label:"Time:", parts:[{text:"Thursday morning at"},{input:5}]},
                      {label:"Recommended website:", parts:[{text:"'The perfect"},{input:6},{text:"'"}]}
                    ]
                  }
                ]
              },
              {
                type: "table",
                qlabel: "Questions 7\u201310",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "A typical 45-minute guitar lesson",
                headers: ["Time","Activity","Notes"],
                rows: [
                  {
                    cells: [
                      [{text:"5 minutes"}],
                      [{text:"tuning guitars"}],
                      [{text:"using an app or by"},{input:7}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"10 minutes"}],
                      [{text:"strumming chords using our thumbs"}],
                      [{text:"keeping time while the teacher is"},{input:8}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"15 minutes"}],
                      [{text:"playing songs"}],
                      [{text:"often listening to a"},{input:9},{text:"of a song"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"10 minutes"}],
                      [{text:"playing single notes and simple tunes"}],
                      [{text:"playing together, then"},{input:10}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"5 minutes"}],
                      [{text:"noting things to practise at home"}],
                      [{text:""}]
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Mathieson",2:"Beginners",3:"College",4:"New",5:"11",6:"Instrument",7:"ear",8:"clapping",9:"recording",10:"alone"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear two friends talking about a guitar group. First, you have some time to look at questions 1 to 6. Now listen carefully and answer questions 1 to 6."},
              {sp:"WOMAN", t:"Hi, Coleman. How are you?"},
              {sp:"COLEMAN", t:"Good, thanks."},
              {sp:"WOMAN", t:"I wanted to have a chat with you, because our friend Josh told me that you've joined a guitar group. And it sounds interesting. I'd really like to learn myself."},
              {sp:"COLEMAN", t:"Why don't you come along? I'm sure there's room for another person."},
              {sp:"WOMAN", t:"Really? So, who runs the classes?"},
              {sp:"COLEMAN", t:"He's called a coordinator. His name's Gary Mathieson."},
              {sp:"WOMAN", t:"Let me note that down. Gary, how do you spell his surname?"},
              {sp:"COLEMAN", t:"It's MATHIESON."},
              {sp:"WOMAN", t:"Right, thanks."},
              {sp:"COLEMAN", t:"He's retired actually, but he's a really nice guy. And he used to play in a lot of bands."},
              {sp:"WOMAN", t:"Thanks. So, how long have you been going?"},
              {sp:"COLEMAN", t:"About a month now."},
              {sp:"WOMAN", t:"And could you play anything before you started?"},
              {sp:"COLEMAN", t:"I knew a few chords, but that's all."},
              {sp:"WOMAN", t:"I'm sure everyone will be better than me."},
              {sp:"COLEMAN", t:"That's what I thought too. When I first spoke to Gary on the phone, he said it was a class for beginners, but I was still worried that everyone would be better than me. But we were all equally hopeless."},
              {sp:"WOMAN", t:"Oh, that's reassuring. So, where do you meet?"},
              {sp:"COLEMAN", t:"Well, when I joined the group, they were meeting in Gary's home. But as the group got bigger, he decided to book a room at the college in town. I prefer going there."},
              {sp:"WOMAN", t:"I know that place. I used to go to tap dancing classes there when I was at secondary school. I haven't been since though, and I can't remember what road it's in. Is it Lock Street?"},
              {sp:"COLEMAN", t:"It's just beyond there, at the bottom of New Street, near the city roundabout."},
              {sp:"WOMAN", t:"Yes, of course."},
              {sp:"COLEMAN", t:"The guitar club is on the first floor, in room T347."},
              {sp:"WOMAN", t:"Right. And when do you meet? Is it at the weekend?"},
              {sp:"COLEMAN", t:"We meet on Thursdays. It used to be 10:30 and that suited me well, but now we meet at 11. The class that's in there before us asked if they could have the room for another 30 minutes."},
              {sp:"WOMAN", t:"Oh, I see. Well, I'd love to come. But I don't have a guitar."},
              {sp:"COLEMAN", t:"Well, you can always buy a second-hand one. There's a website called The Perfect Instrument. That sells all kinds of guitars, violins, and so on. I'm sure you'll find something there."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10. Now listen and answer questions 7 to 10."},
              {sp:"WOMAN", t:"So, what's a typical lesson like with Gary?"},
              {sp:"COLEMAN", t:"Well, he always starts by getting us to tune our guitars. That takes about 5 minutes."},
              {sp:"WOMAN", t:"Uh huh."},
              {sp:"COLEMAN", t:"Some people have an app they use, but others do it by ear. Gary goes round and helps them. And while he's doing that, he tells us what he's going to do during the lesson."},
              {sp:"WOMAN", t:"Right."},
              {sp:"COLEMAN", t:"First, we usually spend about 10 minutes doing some strumming."},
              {sp:"WOMAN", t:"So, is that using oh, what are they called plectrums?"},
              {sp:"COLEMAN", t:"Ha, no, we just use our thumbs."},
              {sp:"WOMAN", t:"Ha, much easier."},
              {sp:"COLEMAN", t:"Gary reminds us where to put our fingers for each chord, and then we play them together. Sometimes we all just start laughing. Because we're so bad at keeping time. So Gary starts clapping to help us."},
              {sp:"WOMAN", t:"Do you learn to play any songs?"},
              {sp:"COLEMAN", t:"Yes. We do at least one song with words and chords. I mean, that's harder than you think."},
              {sp:"WOMAN", t:"Ha, oh, I'm sure it is."},
              {sp:"COLEMAN", t:"That part of the lesson takes about 15 minutes. He often brings a recording of the song, and plays it to us first. Then he hands out the song, and if there's a new chord in it, we practice that before we play it together, but really slowly."},
              {sp:"WOMAN", t:"Do you do any finger picking?"},
              {sp:"COLEMAN", t:"That's the last 10 minutes of the lesson, when we pick out the individual notes from a tune he's made up. It's always quite simple."},
              {sp:"WOMAN", t:"That must be hard though."},
              {sp:"COLEMAN", t:"It is. But people like it because they can really concentrate. And if we're all playing well, it sounds quite impressive. The only trouble is that he sometimes gets us to play one at a time. You know, alone."},
              {sp:"WOMAN", t:"Oh, that's scary."},
              {sp:"COLEMAN", t:"Hmm, it is, but I've got used to it now. At the end he spends about five minutes telling us what to practice for the following week."},
              {sp:"WOMAN", t:"Well, thanks Coleman. I'll go and have a look at that website I think."},
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
                qlabel: "Questions 11\u201316",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Working as a Lifeboat Volunteer",
                items: [
                  {n:11, q:"What made David leave London and move to Northsea?", opts:["He was eager to develop a hobby.","He wanted to work shorter hours.","He found his job in website design unsatisfying."]},
                  {n:12, q:"The Lifeboat Institution in Northsea was built with money provided by", opts:["a local organisation.","a local resident.","the local council."]},
                  {n:13, q:"In his health assessment, the doctor was concerned about the fact that David", opts:["might be colour blind.","was rather short-sighted.","had undergone eye surgery."]},
                  {n:14, q:"After arriving at the lifeboat station, they aim to launch the boat within", opts:["five minutes.","six to eight minutes.","eight and a half minutes."]},
                  {n:15, q:"As a 'helmsman', David has the responsibility of deciding", opts:["who will be the members of his crew.","what equipment it will be necessary to take.","if the lifeboat should be launched."]},
                  {n:16, q:"As well as going out on the lifeboat, David", opts:["gives talks on safety at sea.","helps with fundraising.","recruits new volunteers."]}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things does David say about the lifeboat volunteer training?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"The residential course developed his leadership skills."},
                  {letter:"B", text:"The training in use of ropes and knots was quite brief."},
                  {letter:"C", text:"The training exercises have built up his mental strength."},
                  {letter:"D", text:"The casualty care activities were particularly challenging for him."},
                  {letter:"E", text:"The wave tank activities provided practice in survival techniques."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO things does David find most motivating about the work he does?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"working as part of a team"},
                  {letter:"B", text:"experiences when working in winter"},
                  {letter:"C", text:"being thanked by those he has helped"},
                  {letter:"D", text:"the fact that it keeps him fit"},
                  {letter:"E", text:"the chance to develop new equipment"}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"A",12:"B",13:"A",14:"B",15:"C",16:"A",17:"C",18:"E",19:"A",20:"B"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2. You will hear a man called David talking on the radio about his work as a lifeboat volunteer. First, you have some time to look at questions 11 to 16. Now listen carefully and answer questions 11 to 16."},
              {sp:"SPEAKER", t:"I never really planned to be a lifeboat volunteer when I came to live in Northsea. I'd been working in London as a website designer, but although that was interesting, I didn't like city life. I'd been really keen on boats as a teenager, and I thought if I went to live by the sea, I might be able to pursue that interest a bit more in my free time. Then, I found that the Lifeboat Institution was looking for volunteers, so I decided to apply."},
              {sp:"SPEAKER", t:"The Lifeboat Institution building here in Northsea's hard to miss. It's one of the largest in the country. It was built 15 years ago, with funds provided by a generous member of the public who'd lived here all her life. As the Lifeboat Institution is a charity that relies on that kind of donation, rather than funding provided by the government, that was a huge help to us. When I applied, I had to have a health assessment. The doctors were particularly interested in my vision. I used to be short sighted, so I'd had to wear glasses, but I'd had laser eye surgery two years earlier, so that was OK. They gave me tests for colour blindness, and they thought I might have a problem there, but it turned out I was OK."},
              {sp:"SPEAKER", t:"When the coastguard gets an alert, all the volunteers are contacted and rush to the lifeboat station. Our target's to get there in five minutes. Then we try to get the boat off the dock and out to sea in another six to eight minutes. Our team's proud that we usually achieve that. The average time across the country's eight and a half minutes. I've recently qualified as what's called a helmsman, which means I have the ultimate responsibility for the lifeboat. I have to check that the equipment we use is in working order. The crew have special life jackets that can support up to four people in the water, and it's ultimately my decision whether it's safe to launch the boat. But it's very rare not to launch it, even in the worst weather."},
              {sp:"SPEAKER", t:"As well as going out on the lifeboat, my work involves other things too. A lot of people underestimate how quickly conditions can change at sea, so I speak to youth groups and sailing clubs in the area. About the sorts of problems that sailors and swimmers can have, if the weather suddenly gets bad. We also have a lot of volunteers who organize activities to raise money for us. And we couldn't manage without them."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the talk, you have some time to look at questions 17 to 20. Now listen and answer questions 17 to 20."},
              {sp:"SPEAKER", t:"The training we get is a continuous process, focusing on technical competence and safe handling techniques, and it's given me the confidence to deal with extreme situations without panicking. I was glad I'd done a first aid course before I started, as that's a big help with the casualty care activities we do. We've done a lot on how to deal with ropes and tie knots - that's an essential skill. After a year, I did a one-week residential course. Led by specialists, they had a wave-tank where they could create extreme weather conditions - so we could get experience at what to do if the boat turned over in a storm at night, for example."},
              {sp:"SPEAKER", t:"Since I started, I've had to deal with a range of emergency situations, but the work's hugely motivating. It's not just about saving lives. I've learned a lot about the technology involved. My background in IT's been useful here, and I can use my expertise to help other volunteers. They're a great group. We're like a family really, which helps when you're dragging yourself out of bed on a cold stormy night. But actually, it's the colder months that can be the most rewarding time. That's when the incidents tend to be more serious, and you realize that you can make a huge difference to the outcome. So, if any of you listeners are interested. Why don't you give us a call..."},
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
                notesTitle: "Recycling Footwear: Challenges and Opportunities",
                items: [
                  {n:21, q:"At first, Don thought the topic of recycling footwear might be too", opts:["limited in scope.","hard to research.","boring for listeners."]},
                  {n:22, q:"When discussing trainers, Bella and Don disagree about", opts:["how popular they are among young people.","how suitable they are for school.","how quickly they wear out."]},
                  {n:23, q:"Bella says that she sometimes recycles shoes because", opts:["they no longer fit.","she no longer likes them.","they are no longer in fashion."]},
                  {n:24, q:"What did the article say that confused Don?", opts:["Public consumption of footwear has risen.","Less footwear is recycled now than in the past.","People dispose of more footwear than they used to."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 25\u201328",
                inst: "What reasons did the recycling manager give for rejecting footwear, according to the students?<br>Choose the correct letter, <b>A\u2013F</b>, next to Questions 25\u201328.",
                mapTitle: "Footwear",
                mapNote: "A. one shoe was missing<br>B. the colour of one shoe had faded<br>C. one shoe had a hole in it<br>D. the shoes were brand new<br>E. the shoes were too dirty<br>F. the stitching on the shoes was broken",
                options: ["A","B","C","D","E","F"],
                items: [
                  {n:25, label:"the high-heeled shoes"},
                  {n:26, label:"the ankle boots"},
                  {n:27, label:"the baby shoes"},
                  {n:28, label:"the trainers"}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 29 and 30",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                items: [
                  {n:29, q:"Why did the project to make 'new' shoes out of old shoes fail?", opts:["People believed the 'new' pairs of shoes were unhygienic.","There were not enough good parts to use in the old shoes.","The shoes in the 'new' pairs were not completely alike."]},
                  {n:30, q:"Bella and Don agree that they can present their topic", opts:["from a new angle.","with relevant images.","in a straightforward way."]}
                ]
              }
            ],
            answers: {21:"A",22:"B",23:"B",24:"B",25:"E",26:"B",27:"A",28:"C",29:"C",30:"A"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear two students called Bella and Don, discussing a presentation they plan to do on recycling footwear. First you have some time to look at questions 21 to 24. Now listen carefully and answer questions 21 to 24."},
              {sp:"BELLA", t:"Hi, Don. Did you get the copy of the article on recycling footwear that I emailed you?"},
              {sp:"DON", t:"Yeah, it's here. I've had a look at it."},
              {sp:"BELLA", t:"So, do you think it's a good topic for our presentation?"},
              {sp:"DON", t:"Well, before I started reading it, I thought recycling footwear. Well, although it's quite interesting, perhaps there isn't enough to say about it. 'Cause we put shoes in recycling bins, they go to charity shops, and that's about it."},
              {sp:"BELLA", t:"But there's much more to it than that."},
              {sp:"DON", t:"I realize that now. And I'm keen to research the topic more."},
              {sp:"BELLA", t:"That's great."},
              {sp:"DON", t:"One of the things I didn't realize until I read the article was just how many pairs of trainers get recycled."},
              {sp:"BELLA", t:"Well, a lot of young people wear them all the time now. They've become more popular than ordinary shoes."},
              {sp:"DON", t:"I know, I guess they are very hard wearing. But don't they look a bit casual for school uniform? I don't think they're right for that."},
              {sp:"BELLA", t:"Actually, I think some of them look quite smart on pupils, better than a scruffy old pair of shoes. So, do you keep shoes a long time?"},
              {sp:"DON", t:"Yes, though I do tend to wear my old pairs for doing dirty jobs like cleaning my bike."},
              {sp:"BELLA", t:"I must admit, I've recycled some perfectly good shoes that haven't gone out of fashion and still fit, just because they don't look great on me anymore. That's awful, isn't it?"},
              {sp:"DON", t:"I think it's common because there's so much choice. The article did say that recent sales of footwear have increased enormously."},
              {sp:"BELLA", t:"That didn't surprise me."},
              {sp:"DON", t:"No. But then it said that the amount of recycled footwear has fallen, it's 6% now, compared to a previous level of 11% that doesn't seem to make sense."},
              {sp:"BELLA", t:"That's because not everything goes through the recycling process. Some footwear just isn't good enough to resell for one reason or another, and gets rejected."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 25 to 30. Now listen and answer questions 25 to 30."},
              {sp:"BELLA", t:"So, let's find some examples in the article of footwear that was rejected for recycling."},
              {sp:"DON", t:"OK, I think there are some in the interview with the recycling manager. Yeah, here it is."},
              {sp:"BELLA", t:"Hmm. Let's start with the lady's high heeled shoes. What did he say about those?"},
              {sp:"DON", t:"He said they were probably expensive. The material was suede, and they were beige in colour. It looked like someone had only worn them once, but in a very wet field. So the heels were too stained with MUD and grass to resell them."},
              {sp:"BELLA", t:"OK, and the leather ankle boots, what was wrong with them?"},
              {sp:"DON", t:"Apparently, the heels were worn, but that wasn't the problem. One of the shoes was a much lighter shade than the other one. It had obviously been left in the sun. I suppose even second-hand shoes should look the same."},
              {sp:"BELLA", t:"Sure. Then there were the red baby shoes."},
              {sp:"DON", t:"Oh yes. We're told to tie shoes together when we put them in a recycling bin."},
              {sp:"BELLA", t:"People often don't bother, you'd think it would have been easy to find the other, but it wasn't. That was a shame because they were obviously new."},
              {sp:"DON", t:"The trainers were interesting. He said they looked like they'd been worn by a marathon runner."},
              {sp:"BELLA", t:"Yeah, weren't they split?"},
              {sp:"DON", t:"Not exactly. One of the soles was so worn under the foot that you could put your finger through it. Well, we could certainly use some of those examples in our presentation to explain why 90% of shoes that people take to recycling centers or bins, get thrown into landfill."},
              {sp:"BELLA", t:"Hmm. What did you think about the project his team set up to avoid this by making new shoes out of the good parts of old shoes?"},
              {sp:"DON", t:"It sounded like a good idea. They get so many shoes, they should be able to match parts. I wasn't surprised that it failed though. I mean, who wants to buy second-hand shoes really? Think of all the germs you could catch."},
              {sp:"BELLA", t:"Well, people didn't refuse them for that reason, did they? It was because the pairs of shoes weren't identical."},
              {sp:"DON", t:"They still managed to ship them overseas though."},
              {sp:"BELLA", t:"That's another area we need to discuss."},
              {sp:"DON", t:"You know, I used to consider this topic just from my own perspective. By thinking about my own recycling behavior, without looking at the bigger picture. So much happens once shoes leave the recycling area."},
              {sp:"BELLA", t:"It's not as simple as you first think, and we can show that by taking a very different approach to it."},
              {sp:"DON", t:"Absolutely. So let's discuss..."},
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
                notesTitle: "Tardigrades",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:null, before:"more than 1,000 species, 0.05-1.2 millimetres long", input:null, after:""},
                      {n:31, before:"also known as water 'bears' (due to how they", input:31, after:") and 'moss piglets'"}
                    ]
                  },
                  {
                    heading: "Physical appearance",
                    items: [
                      {n:32, before:"a", input:32, after:"round body and four pairs of legs"},
                      {n:33, before:"claws or", input:33, after:"for gripping"},
                      {n:null, before:"absence of respiratory organs", input:null, after:""},
                      {n:34, before:"body filled with a liquid that carries both", input:34, after:"and blood"},
                      {n:35, before:"mouth shaped like a", input:35, after:"with teeth called stylets"}
                    ]
                  },
                  {
                    heading: "Habitat",
                    items: [
                      {n:null, before:"often found at the bottom of a lake or on plants", input:null, after:""},
                      {n:36, before:"very resilient and can exist in very low or high", input:36, after:""}
                    ]
                  },
                  {
                    heading: "Cryptobiosis",
                    items: [
                      {n:null, before:"In dry conditions, they roll into a ball called a 'tun'.", input:null, after:""},
                      {n:null, before:"They stay alive with a much lower metabolism than usual.", input:null, after:""},
                      {n:37, before:"A type of", input:37, after:"ensures their DNA is not damaged."},
                      {n:38, before:"Research is underway to find out how many days they can stay alive in", input:38, after:"."}
                    ]
                  },
                  {
                    heading: "Feeding",
                    items: [
                      {n:39, before:"consume liquids, e.g., those found in moss or", input:39, after:""},
                      {n:null, before:"may eat other tardigrades", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Conservation status",
                    items: [
                      {n:40, before:"They are not considered to be", input:40, after:"."}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"move",32:"short",33:"discs",34:"oxygen",35:"tube",36:"temperatures",37:"protein",38:"space",39:"seaweed",40:"endangered"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear a zoology student giving a presentation about an animal called tardigrade. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"For my project on invertebrates, I chose to study tardigrades. These are microscopic, or to be more precise, near microscopic animals. There are well over 1,000 known species of these tiny animals, which belong to the phylum tardigrada. Most tardigrades range in length from naught point naught five (0.05) to 1 millimetre. Though the largest species can grow to be 1.2 millimeters in length, they are also sometimes called water bears, water because that's where they thrive best. And bear because of the way they move. Moss piglet is another name for tardigrades, because of the way they look when viewed from the front. They were first discovered in Germany in 1773 by Johann Goeze, who coined the name \"Tardigrada\"."},
              {sp:"SPEAKER", t:"As I say, there are many different species of tardigrade, too many to describe here, but generally speaking, the different species share similar physical traits. They have a body which is short and also rounded, a bit like a barrel. And the body comprises four segments, each segment has a pair of legs. At the end of which are between four and 8 sharp claws. I should also say that some species don't have any claws. What they have are discs. And these work by means of suction. They enable the tardigrade to cling on to surfaces or to grip its prey. Within the body, there are no lungs or any organs for breathing at all. Instead, oxygen and also blood are transported in a fluid that fills the cavity of the body."},
              {sp:"SPEAKER", t:"As far as the tardigrade's head is concerned, the best way I can describe this is that it looks rather strange - a bit squashed even - though many of the websites I looked at described its appearance as cute. Which isn't exactly very scientific. The tardigrade's mouth is a kind of tube that can open outwards to reveal teeth-like structures known as \"stylets\". These are sharp enough to pierce plant or animal cells. So where are tardigrades found? Well, they live in every part of the world. In a variety of habitats, most commonly on the bed of a lake, or on many kinds of plants, or in very wet environments."},
              {sp:"SPEAKER", t:"There's been some interesting research which has found that tardigrades are capable of surviving radiation and very high pressure, and they're also able to withstand temperatures as cold as minus 200 degrees centigrade. Or highs of more than 148 degrees centigrade, which is incredibly hot. It has been said that tardigrades could survive long after human beings have been wiped out, even in the event of an asteroid hitting the earth. If conditions become too extreme and tardigrades are at risk of drying out, they enter a state called cryptobiosis. They curl into a ball called a tun. That's t u n, by retracting their head and legs, and their metabolism drops to less than 1% of normal levels. They can remain like this until they're reintroduced to water, when they will come back to life in a matter of a few hours, while in a state of cryptobiosis. Tardigrades produce a protein that protects their DNA."},
              {sp:"SPEAKER", t:"In 2016, scientists revived two tardigrades that had been tuns for more than 30 years. There was a report that, in 1948 a 120-year-old tun was revived, but this experiment has never been repeated. There are currently several tests taking place in space to determine how long tardigrades might be able to survive there. I believe the record so far is 10 days. So moving on, in terms of their diet, tardigrades consume liquids in order to survive. Although they have teeth, they don't use these for chewing. They suck the juices from moss or extract fluid from seaweed, but some species prey on other tardigrades, from other species or within their own. I suppose this isn't surprising given that tardigrades are mainly comprised of liquid and are coated with a type of gel."},
              {sp:"SPEAKER", t:"Finally, I'd like to mention the conservation status of tardigrades. It is estimated that they have been in existence for approximately half a billion years, and in that time, they have survived five mass extinctions. So it will probably come as no surprise to you that tardigrades have not been evaluated by the International Union for conservation of Nature, and are not on any endangered list. Some researchers have described them as thriving. Does anyone have any questions they'd like to ask?"},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      },
      3: {
        title: "Cambridge IELTS 19 — Test 3 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2019%20test%203%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u20136",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u20136",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "LOCAL FOOD SHOPS",
                groups: [
                  {
                    heading: "Where to go",
                    items: [
                      {n:1, before:"Kite Place - near the", input:1, after:""}
                    ]
                  },
                  {
                    heading: "Fish market",
                    items: [
                      {n:2, before:"cross the", input:2, after:"and turn right"},
                      {n:3, before:"best to go before", input:3, after:"pm, earlier than closing time"}
                    ]
                  },
                  {
                    heading: "Organic shop",
                    items: [
                      {n:4, before:"called '", input:4, after:"'"},
                      {n:null, before:"below a restaurant in the large, grey building", input:null, after:""},
                      {n:5, before:"look for the large", input:5, after:"outside"}
                    ]
                  },
                  {
                    heading: "Supermarket",
                    items: [
                      {n:6, before:"take a", input:6, after:"minibus, number 289"}
                    ]
                  }
                ]
              },
              {
                type: "table",
                qlabel: "Questions 7\u201310",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Shopping",
                headers: ["","To buy","Other ideas"],
                rows: [
                  {
                    cells: [
                      [{text:"Fish market"}],
                      [{text:"a dozen prawns"}],
                      [{text:"a handful of"},{input:7},{text:"(type of seaweed)"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Organic shop"}],
                      [{text:"beans and a"},{input:8},{text:"for dessert"}],
                      [{text:"spices and"},{input:9}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Bakery"}],
                      [{text:"a brown loaf"}],
                      [{text:"a"},{input:10},{text:"tart"}]
                    ]
                  }
                ]
              }
            ],
            answers: {1:"harbour",2:"bridge",3:"3.30",4:"Rose",5:"sign",6:"purple",7:"samphire",8:"melon",9:"coconut",10:"strawberry"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear two neighbors who live in an apartment block talking about shopping for food. First you have some time to look at questions 1 to 6. Now listen carefully and answer questions 1 to 6."},
              {sp:"LEON", t:"Hi, shannon. How are you settling into your new flat?"},
              {sp:"SHANNON", t:"Really well, thanks."},
              {sp:"LEON", t:"You look like you're going shopping."},
              {sp:"SHANNON", t:"Yes, I am. My cousins are coming to stay for a couple of days, and I have to cook for them."},
              {sp:"LEON", t:"Well. There are plenty of places to buy food in Kite Place. It's the area by the harbor."},
              {sp:"SHANNON", t:"Oh, OK, I'll find that on the map. Thanks."},
              {sp:"LEON", t:"What sort of food do you need to get?"},
              {sp:"SHANNON", t:"Well neither of them eats meat, but they both like fish."},
              {sp:"LEON", t:"Well, there's a really good fish market there."},
              {sp:"SHANNON", t:"Oh, great. Where is it exactly?"},
              {sp:"LEON", t:"It's at the far end of Kite Place. So you have to go over the bridge, and then it's on the right."},
              {sp:"SHANNON", t:"OK, is it open all day?"},
              {sp:"LEON", t:"It doesn't close until 4, but I'd recommend going earlier than that. It does run out of some things."},
              {sp:"SHANNON", t:"Oh, I don't want that to happen."},
              {sp:"LEON", t:"As long as you get there by 3:30 you should be fine. It's only 11 now, so, plenty of time."},
              {sp:"SHANNON", t:"Right."},
              {sp:"LEON", t:"Do you need to buy vegetables too?"},
              {sp:"SHANNON", t:"I do, and I want to avoid all the plastic packaging in the supermarket."},
              {sp:"LEON", t:"Well, there's a really nice organic shop there. Now what's it called? It's the name of a flower. I know it's rose."},
              {sp:"SHANNON", t:"Oh, that's a nice name."},
              {sp:"LEON", t:"Yeah, it sells vegetables and quite a lot of other stuff."},
              {sp:"SHANNON", t:"And where's that?"},
              {sp:"LEON", t:"Well, as you reach the market, you'll see a big grey building on your left. I think it used to be a warehouse. Anyway, now it's a restaurant upstairs, but the ground floor has 2 shops either side of the entrance. And it's the one on the left."},
              {sp:"SHANNON", t:"Hmm, that's easy enough."},
              {sp:"LEON", t:"You can't miss it. There's also a big sign on the pavement, so you can look for that."},
              {sp:"SHANNON", t:"Fine. I guess if I need anything else, I'll have to go to the supermarket."},
              {sp:"LEON", t:"Yeah, you should be able to get everything you need. But there's a minibus that goes to the supermarket, if you need it. It's purple, and the number is 289."},
              {sp:"SHANNON", t:"Thanks, that's great."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10. Now listen and answer questions 7 to 10."},
              {sp:"LEON", t:"So, what do you need to get at the fish market? The salmon is always very good, and the shellfish."},
              {sp:"SHANNON", t:"I'm going to make a curry, I think. And I need about 12 prawns for that."},
              {sp:"LEON", t:"They'll have plenty of those. OK, have you ever tried samphire?"},
              {sp:"SHANNON", t:"No, what's that?"},
              {sp:"LEON", t:"It's a type of seaweed. I just ask for a handful, and you fry it in butter. It's delicious."},
              {sp:"SHANNON", t:"Oh, I might try that. How do you spell it?"},
              {sp:"LEON", t:"It's SAMPHIRE."},
              {sp:"SHANNON", t:"Great, it's always good to try something different."},
              {sp:"LEON", t:"Yeah."},
              {sp:"SHANNON", t:"I'll see what beans they have in the organic shop, and I think I'll get something for dessert there."},
              {sp:"LEON", t:"How about a mango?"},
              {sp:"SHANNON", t:"I'm not sure. They're not always ripe. I'd prefer a melon, it's bigger too."},
              {sp:"LEON", t:"Good idea. The owner also sells a lot of spices there. That you can put in a curry, and things like coconut."},
              {sp:"SHANNON", t:"Oh, that's very helpful. I'll have a look."},
              {sp:"LEON", t:"No problem."},
              {sp:"SHANNON", t:"I know bread doesn't really go with curry. But I always like to have some in case."},
              {sp:"LEON", t:"As I said, all the bread is home made, and there's lots of variety. I like the brown bread myself."},
              {sp:"SHANNON", t:"Hmm, sounds good."},
              {sp:"LEON", t:"They sell other things there too."},
              {sp:"SHANNON", t:"Like cakes? Uh, I love chocolate cake."},
              {sp:"LEON", t:"Well, uh, not that, uh, but they have a whole range of tarts. And the best are the strawberry ones."},
              {sp:"SHANNON", t:"Perfect. Hopefully I won't even have to go to the supermarket."},
              {sp:"ANNOUNCER", t:"That is the end of part 1. You now have one minute to check your answers to part 1."}
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
                inst: "What information is given about each of the following festival workshops?<br>Choose the correct letter, <b>A\u2013H</b>, next to Questions 11\u201316.",
                mapTitle: "Festival workshops",
                mapNote: "A. involve painting and drawing<br>B. will be led by a prize-winning author<br>C. is aimed at children with a disability<br>D. involves a drama activity<br>E. focuses on new relationships<br>F. is aimed at a specific age group<br>G. explores an unhappy feeling<br>H. raises awareness of a particular culture",
                options: ["A","B","C","D","E","F","G","H"],
                items: [
                  {n:11, label:"Superheroes"},
                  {n:12, label:"Just do it"},
                  {n:13, label:"Count on me"},
                  {n:14, label:"Speak up"},
                  {n:15, label:"Jump for joy"},
                  {n:16, label:"Sticks and stones"}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 17 and 18",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO reasons does the speaker give for recommending Alive and Kicking?",
                qns: [17,18],
                options: [
                  {letter:"A", text:"It will appeal to both boys and girls."},
                  {letter:"B", text:"The author is well known."},
                  {letter:"C", text:"It has colourful illustrations."},
                  {letter:"D", text:"It is funny"},
                  {letter:"E", text:"It deals with an important topic."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 19 and 20",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO pieces of advice does the speaker give to parents about reading?",
                qns: [19,20],
                options: [
                  {letter:"A", text:"Encourage children to write down new vocabulary."},
                  {letter:"B", text:"Allow children to listen to audio books."},
                  {letter:"C", text:"Get recommendations from librarians."},
                  {letter:"D", text:"Give children a choice about what they read."},
                  {letter:"E", text:"Only read aloud to children until they can read independently."}
                ]
              }
            ],
            multiGroups: [[17,18],[19,20]],
            answers: {11:"C",12:"D",13:"F",14:"G",15:"B",16:"H",17:"D",18:"E",19:"B",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear the organizer of a children's book festival giving some information about it on a local radio program. First, you have some time to look at questions 11 to 16. Now listen carefully and answer questions 11 to 16."},
              {sp:"PRESENTER", t:"The Children's Book Festival is coming up again soon, and here to tell us all about it is the festival's organizer, Jenny Morgan. So, tell us what we can expect this year, Jenny."},
              {sp:"JENNY", t:"Uh, Well, as usual, we've got 5 days of action-packed exciting events for children, with writers coming from all over the country getting involved. Just to give you an idea of what's on offer in the workshops. First of all, there's a very special event called Superheroes. This is a chance for deaf children to share their reading experiences with author Madeleine Gordon, who is herself hearing impaired. \"Just do it\" is a practical workshop, led by the well-known illustrator Mark Keane. He'll take participants on a magical journey to far away lands. With an opportunity for aspiring actors to do some role play. 'Count on me' is an inspiring and entertaining look at the issues of friendship for 13-14-year-olds. It looks at some of the friendships described in popular books. And asks participants to compare these with their own experiences."},
              {sp:"JENNY", t:"Speak up is part of a series of workshops on the subject of mental health. This is a creative writing workshop, encouraging children to describe situations where young people experience loneliness. A recent survey revealed that children can be lonely, even when they're at home with their families. \"Jump for joy\", as many of you will know, is the heart-warming, best-selling story by Nina Karan, about a young girl's trip to visit her relatives in India. It recently received the gold medal at the Waterford Awards. Nina will get children to celebrate the word joy by writing a poem. 'Sticks and stones' is the beautifully illustrated picture book for young readers about a community who organize an African-Caribbean festival to help local children learn about their Jamaican roots. This will be a musical event where children will have the chance to play steel drums. This is bound to be very popular, so please book as soon as possible."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the program, you have some time to look at questions 17 to 20. Now listen and answer questions 17 to 20."},
              {sp:"PRESENTER", t:"Thanks, Jenny. That all sounds really interesting. I'm just wondering if you have a favourite book you could recommend for our readers?"},
              {sp:"JENNY", t:"It's hard to choose, but \"Alive and Kicking\" is definitely worth mentioning. You won't have heard of the writer, as it's her first book - which is really impressive. It's basically the teenage diary of a boy from Somalia who comes to live in the UK. It deals with the serious issue of immigration, and all the challenges the boy has to face at school, and with the language barrier, etc. Usually, books like this are quite sad. But this one actually made me cry with laughter. On each page there are simple but hilarious black and white stick drawings of the boy with his friends and teachers. At the end of each diary entry, there are new English words the boy learns each day, which may help develop some children's vocabulary."},
              {sp:"PRESENTER", t:"I think my kids would enjoy that. What about any advice for parents on how to encourage their children to read more?"},
              {sp:"JENNY", t:"Well, this is something I get asked about a lot. There are so many distractions for kids these days that it can be hard to find time for reading. One thing I'd say is to make time to sit down with your child and share books with them. A lot of parents give up reading aloud to their children as soon as they learn to read independently. But this is a mistake. It's good to read more advanced books to them, as it helps to develop their vocabulary. If you don't have time for this, then let them listen to audiobooks. Often they'll want to read books they've listened to for themselves. I think it's a good idea to make a mental note of the type of books your child is reading. Often they just read the same genre all the time, which can get a bit boring. You can introduce new authors and genres to them. Librarians should be able to help you with this."},
              {sp:"PRESENTER", t:"Well, Jenny, I think that's really useful..."},
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
                qlabel: "Questions 21\u201325",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Science experiment for Year 12 students",
                items: [
                  {n:21, q:"How does Clare feel about the students in her Year 12 science class?", opts:["worried that they are not making progress","challenged by their poor behaviour in class","frustrated at their lack of interest in the subject"]},
                  {n:22, q:"How does Jake react to Clare's suggestion about an experiment based on children's diet?", opts:["He is concerned that the results might not be meaningful.","He feels some of the data might be difficult to obtain.","He suspects that the conclusions might be upsetting."]},
                  {n:23, q:"What problem do they agree may be involved in an experiment involving animals?", opts:["Any results may not apply to humans.","It may be complicated to get permission.","Students may not be happy about animal experiments."]},
                  {n:24, q:"What question do they decide the experiment should address?", opts:["Are mice capable of controlling their food intake?","Does an increase in sugar lead to health problems?","How much do supplements of different kinds affect health?"]},
                  {n:25, q:"Clare might also consider doing another experiment involving", opts:["other types of food supplement.","different genetic strains of mice.","varying amounts of exercise."]}
                ]
              },
              {
                type: "notes",
                qlabel: "Questions 26\u201330",
                inst: "Complete the flowchart below.<br>Choose the correct letter, <b>A\u2013H</b>, in boxes 26\u201330 on your answer sheet.",
                notesTitle: "Mouse diet experiment procedure",
                mapNote: "A. size<br>B. escape<br>C. age<br>D. water<br>E. cereal<br>F. calculations<br>G. changes<br>H. colour",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:26, before:"Choose mice which are all the same", input:26, after:"."},
                      {n:null, before:"\u2193", input:null, after:""},
                      {n:27, before:"Divide the mice into two groups, each with a different", input:27, after:"."},
                      {n:null, before:"\u2193", input:null, after:""},
                      {n:null, before:"Put each group in a separate cage. Feed group A commercial mouse food.", input:null, after:""},
                      {n:28, before:"Feed group B the same, but also sugar contained in", input:28, after:"."},
                      {n:null, before:"\u2193", input:null, after:""},
                      {n:null, before:"Take measurements using an electronic scale.", input:null, after:""},
                      {n:29, before:"Place them in a weighing chamber to prevent", input:29, after:"."},
                      {n:null, before:"\u2193", input:null, after:""},
                      {n:30, before:"Do all necessary", input:30, after:"."}
                    ]
                  }
                ]
              }
            ],
            answers: {21:"C",22:"B",23:"A",24:"A",25:"C",26:"C",27:"H",28:"E",29:"B",30:"F"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear a trainee science teacher called Clare talking about her practical teaching work to another trainee called Jake. First, you have some time to look at questions 21 to 25. Now listen carefully and answer questions 21 to 25."},
              {sp:"CLARE", t:"Hi, Jake. How are you getting on with the practical teaching?"},
              {sp:"JAKE", t:"Oh, it's harder than I expected, but I've got some great classes. How about you?"},
              {sp:"CLARE", t:"Not brilliant. I'm really struggling with my Year 12 science class."},
              {sp:"JAKE", t:"Hmm. Are they hard to control?"},
              {sp:"CLARE", t:"Well, I don't have discipline problems as such. It's just that they don't seem to think that science has anything to do with their lives. It's depressing. They listen to what I say, and I gave them a test last week, and the results weren't too bad, but there's no real engagement."},
              {sp:"JAKE", t:"Right."},
              {sp:"CLARE", t:"And as part of my teaching practice, I have to design an experiment for them to do. I was wondering about something on the children's diets, you know, asking them to record what they eat, and maybe linking it to their state of health."},
              {sp:"JAKE", t:"Hmm, let's think. So your methodology would involve the children recording what they eat, OK? But you'd also need to have access to the children's medical records. And I don't think people would be happy about that, confidentiality would be an issue. If you could get the right data, the conclusions might be significant, but I suspect it's not going to be easy."},
              {sp:"CLARE", t:"Right."},
              {sp:"JAKE", t:"Have you thought about doing an experiment using animals?"},
              {sp:"CLARE", t:"Wouldn't that be upsetting for the children?"},
              {sp:"JAKE", t:"Well, the animals don't have to be harmed in any way. It could just be an experiment where they're given a certain diet and the effects are observed."},
              {sp:"CLARE", t:"Would I have to get permission to use animals?"},
              {sp:"JAKE", t:"Yes, you'd have to submit an outline of the experiment and fill in a form. It's quite straightforward."},
              {sp:"CLARE", t:"But if we found out that say a particular diet affects the health of animals, the same thing wouldn't necessarily be true for people, would it?"},
              {sp:"JAKE", t:"No, that's true. But the findings for any experiment are going to be limited, it's inevitable."},
              {sp:"CLARE", t:"I suppose so. So what animals could I use to investigate the effect of diet? Mice?"},
              {sp:"JAKE", t:"Yes, you'd need experimental mice, ones that have been specially bred for experiments. OK, so what will your experiment be investigating exactly?"},
              {sp:"CLARE", t:"Well, uh something to do with nutrition. So maybe we could look at food supplements, things like extra iron and extra protein, and their impact on health."},
              {sp:"JAKE", t:"Hmm. That might be rather broad, maybe just look at the effects of one supplement like sugar on the health of the mice."},
              {sp:"CLARE", t:"In fact, maybe the focus could be on whether mice can control their own diet."},
              {sp:"JAKE", t:"So, what happens when they have access to more sugar that they don't really need?"},
              {sp:"CLARE", t:"Exactly. Do they eat it, or do they decide to leave it?"},
              {sp:"JAKE", t:"Great. Then later on, you could do a follow up experiment, adding another variable, like you could give some of the mice the chance to be more active, running on a wheel or something, and the others just sit around and don't do much."},
              {sp:"CLARE", t:"Or I could repeat the experiment, but change the type of food I provided. Or use mice with a different genetic structure, but I think your idea would be more interesting. I might think about that some more."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 26 to 30. Now listen and answer questions 26 to 30."},
              {sp:"CLARE", t:"So, can I talk through a possible procedure for the experiment where mice are given a sugar supplement?"},
              {sp:"JAKE", t:"Sure, I did a similar experiment in college, actually."},
              {sp:"CLARE", t:"Great. So, how many mice would I need?"},
              {sp:"JAKE", t:"I'd say about 12, and all young ones, not a mixture of old and young."},
              {sp:"CLARE", t:"OK, and I'd need two groups of equal sizes, so 6 in each group. And how would I tell them apart? I suppose I could put some sort of tag on one group, or just mark them in some way."},
              {sp:"JAKE", t:"You could use food coloring, that wouldn't hurt them."},
              {sp:"CLARE", t:"Perfect. Then each group would go into a separate cage, and one group, let's call them group a, would be the control group. So they just have ordinary mouse food. Uh. I suppose you can buy that."},
              {sp:"JAKE", t:"Yes, it comes in dry pellets."},
              {sp:"CLARE", t:"And the other group would have the same as the first group, but they'd also have the extra sugar."},
              {sp:"JAKE", t:"Would you just give them straight sugar?"},
              {sp:"CLARE", t:"It might be better to give them something like cereal with it."},
              {sp:"JAKE", t:"Hmm. Then you'd need to weigh the mice, I should think once a week, and you'd need an electronic balance."},
              {sp:"CLARE", t:"But we can't hold them on the balance, or it'd affect the reading."},
              {sp:"JAKE", t:"Exactly. So you need something called a weighing chamber to stop the mice from running away. It sounds complicated, but actually you can just use a plastic box with holes in the top."},
              {sp:"CLARE", t:"OK, so once we've measured the weight gain of each mouse, we can work out the average for each group, as well as the standard deviation. And then see where we go from there. That sounds cool. I think the students will enjoy it."},
              {sp:"JAKE", t:"Yes. One thing..."},
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
                notesTitle: "Microplastics",
                groups: [
                  {
                    heading: "Where microplastics come from",
                    items: [
                      {n:31, before:"fibres from some", input:31, after:"during washing"},
                      {n:null, before:"the breakdown of large pieces of plastic", input:null, after:""},
                      {n:null, before:"waste from industry", input:null, after:""},
                      {n:null, before:"the action of vehicle tyres on roads", input:null, after:""}
                    ]
                  },
                  {
                    heading: "Effects of microplastics",
                    items: [
                      {n:32, before:"They cause injuries to the", input:32, after:"of wildlife and affect their digestive systems."},
                      {n:33, before:"They enter the food chain, e.g., in bottled and tap water,", input:33, after:"and seafood."},
                      {n:34, before:"They may not affect human health, but they are already banned in skin cleaning products and", input:34, after:"in some countries."},
                      {n:35, before:"Microplastics enter the soil through the air, rain and", input:35, after:"."}
                    ]
                  },
                  {
                    heading: "Microplastics in the soil - a study by Anglia Ruskin University",
                    items: [
                      {n:36, before:"Earthworms are important because they add", input:36, after:"to the soil."},
                      {n:37, before:"The study aimed to find whether microplastics in earthworms affect the", input:37, after:"of plants."},
                      {n:null, before:"The study found that microplastics caused:", input:null, after:""},
                      {n:38, before:"", input:38, after:"loss in earthworms", indent:true},
                      {n:null, before:"fewer seeds to germinate", input:null, after:"", indent:true},
                      {n:39, before:"a rise in the level of", input:39, after:"in the soil.", indent:true},
                      {n:null, before:"The study concluded:", input:null, after:""},
                      {n:null, before:"soil should be seen as an important natural process.", input:null, after:"", indent:true},
                      {n:40, before:"changes to soil damage both ecosystems and", input:40, after:".", indent:true}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"clothing",32:"mouths",33:"salt",34:"toothpaste",35:"fertilisers",36:"nutrients",37:"growth",38:"weight",39:"acid",40:"society"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear part of an environmental science lecture about microplastics. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"In today's lecture, I'm going to be talking about microplastics. Microplastics are tiny pieces of plastic smaller than 5 millimeters in size. Recently, there's been a greater awareness that there are large quantities of plastic waste big and small. In the environment. The amount of plastic waste in the oceans has received widespread attention, but far less is known about the effects of microplastics in fresh water. And particularly in soil. Microplastics can enter the environment via a number of different sources. Threads and microfibers detached from synthetic clothing every time they're put in a washing machine, and these find their way into the water system. Other sources include big pieces of plastic waste that are already in the environment, and these break down into microscopic particles over a period of time. On a larger scale, factory waste is another route, as are tyres, which wear down as cars, lorries, and so on, travel along road surfaces."},
              {sp:"SPEAKER", t:"We already understand some of the impacts of microplastics from studies involving fish and other animals. There is evidence that microplastics harm small creatures in a variety of ways. Such as by damaging their mouths or by impairing their ability to feed, for example, when microplastics get lodged in their digestive system. Surprisingly, perhaps, it is likely that humans consume microplastics. As these have been detected in a wide range of food and drink products, including bottled water. As well as in water that comes direct from the tap. What's more, salt and many kinds of seafood have also been found to contain microplastics. However, it's important to underline that there is not yet conclusive proof that microplastics cause significant harm to people. In many countries, including here in the UK, there is legislation which prevents manufacturers from adding plastic microbeads to shower gels, facial cleansers and toothpaste."},
              {sp:"SPEAKER", t:"It is very difficult to accurately estimate the total amount of microplastic particles in the soil, as they can be hard to detect. But we do know they are carried in the air. And deposited in the soil by rain. What's more, many of the fertilizers used by both farmers and gardeners contain microplastics. A team from the Anglia Ruskin University in Cambridge has carried out a study of the effects of microplastics on the digestive tracts of earthworms. These worms, which live in topsoil, are an essential component of our agricultural system. By feeding on soil, they mix nutrients into it, thereby making it more fertile. The researchers set out to discover whether the introduction of microplastics into the soil and the subsequent ingestion of these by earthworms would impact soil quality. And ultimately inhibit plant growth. The short answer was yes, it did."},
              {sp:"SPEAKER", t:"After placing three different types of microplastic particles into the soil. They planted perennial ryegrass. The particles of microplastic, which included biodegradable PLA, and conventional high-density polyethylene, or HDPE, were then ingested by the earthworms in the soil. The result was that the worms lost weight rapidly. What's more, a lower percentage than normal of the ryegrass seeds germinated. And the researchers concluded that this was a direct result of the earthworms being unable to fulfill their normal role in making soil more fertile. The team also discovered that there was an increase in the amount of acid found in the soil, and this was attributed mainly to the microplastic particles from conventional HDPE plastic."},
              {sp:"SPEAKER", t:"The conclusions of the study make for very interesting reading. I've included the reference in the notes to give you at the end of this session. To summarize, the authors proposed the idea that we need to regard soil as we would regard any other process in nature. This means we should accept the implications of soil being dependent on decaying and dead matter. Constantly being passed through the bodies of earthworms. That is when soil becomes impoverished by the presence of microplastics, not only ecosystems but also the whole of society are negatively impacted."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      },
      4: {
        title: "Cambridge IELTS 19 — Test 4 — Listening",
        audio: "https://fhioawgwdmqybjvadrpf.supabase.co/storage/v1/object/public/Listening%20Audio%20bucket/cam%2019%20test%204%20.mp3",
        sections: {
          1: {
            n: 1,
            label: "Part 1",
            qlabel: "Questions 1\u20136",
            blocks: [
              {
                type: "notes",
                qlabel: "Questions 1\u20136",
                inst: "Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
                notesTitle: "FIRST DAY AT WORK",
                groups: [
                  {
                    heading: "",
                    items: [
                      {n:1, before:"Name of supervisor:", input:1, after:""},
                      {n:2, before:"Where to leave coat and bag: use", input:2, after:"in staffroom"},
                      {n:null, before:"See Tiffany in HR:", input:null, after:""},
                      {n:3, before:"to give", input:3, after:"number", indent:true},
                      {n:4, before:"to collect", input:4, after:"", indent:true},
                      {n:5, before:"Location of HR office: on", input:5, after:"floor"},
                      {n:6, before:"Supervisor's mobile number:", input:6, after:""}
                    ]
                  }
                ]
              },
              {
                type: "table",
                qlabel: "Questions 7\u201310",
                inst: "Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.",
                notesTitle: "Responsibilities",
                headers: ["","Task 1","Task 2","Task 3"],
                rows: [
                  {
                    cells: [
                      [{text:"Bakery section"}],
                      [{text:"Check sell-by dates"}],
                      [{text:"Change price labels"}],
                      [{text:"Use"},{input:7},{text:"labels"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Sushi takeaway counter"}],
                      [{text:"Re-stock with"},{input:8},{text:"boxes if needed"}],
                      [{text:"Wipe preparation area and clean the sink"}],
                      [{text:"Do not clean any knives"}]
                    ]
                  },
                  {
                    cells: [
                      [{text:"Meat and fish counters"}],
                      [{text:"Clean the serving area, including the weighing scales"}],
                      [{text:"Collect"},{input:9},{text:"for the fish from the cold-room"}],
                      [{text:"Must wear special"},{input:10}]
                    ]
                  }
                ]
              }
            ],
            answers: {1:"Kaeden",2:"lockers",3:"passport",4:"uniform",5:"third",6:"0412665903",7:"yellow",8:"plastic",9:"ice",10:"gloves"},
            script: [
              {sp:"ANNOUNCER", t:"Part 1, you will hear a supervisor in a supermarket talking to a new worker on her first day. First, you have some time to look at questions 1 to 6. Now listen carefully and answer questions 1 to 6."},
              {sp:"KAEDEN", t:"Hello, Charlotte. I'm Kaeden, one of the supervisors. Welcome to the team."},
              {sp:"CHARLOTTE", t:"Hi, Aiden."},
              {sp:"KAEDEN", t:"Uh. It's Kaeden."},
              {sp:"CHARLOTTE", t:"I'm so sorry."},
              {sp:"KAEDEN", t:"Oh, don't worry. People often get my name wrong, ha ha. They never know how to spell it. It's K A E D E N, in case you ever need to write it."},
              {sp:"CHARLOTTE", t:"I'll try and remember."},
              {sp:"KAEDEN", t:"So, there are a few practical things you need to sort out this morning. Then I'll show you what you're going to do today."},
              {sp:"CHARLOTTE", t:"Uh. The email I received said to go to the front desk to show my letter of appointment and pick up my badge."},
              {sp:"KAEDEN", t:"You'll need that for the staffroom and other areas of the supermarket where shoppers aren't allowed. So, after you've finished at the front desk, I'll take you to the staffroom. Put your coat and rucksack in one of the lockers there, uh, take whichever one is free."},
              {sp:"CHARLOTTE", t:"Will I have a key?"},
              {sp:"KAEDEN", t:"Yes, try not to lose it. At the end of the day, leave it in the door for the next person to use."},
              {sp:"CHARLOTTE", t:"Will do."},
              {sp:"KAEDEN", t:"You also need to go to the HR department to see Tiffany. She's really helpful."},
              {sp:"CHARLOTTE", t:"I was told to bring my passport with me. HR need to take a note of the number in it."},
              {sp:"KAEDEN", t:"That's right. Or you can show your ID card."},
              {sp:"CHARLOTTE", t:"I don't have one of those."},
              {sp:"KAEDEN", t:"OK, Tiffany will give you a uniform. Uh. They have lots in different sizes, so you just tell her what you need. I won't come with you to HR. I've got to go and sort something else out. Um. Problem with a bread slicer."},
              {sp:"CHARLOTTE", t:"Is the HR office near the staffroom?"},
              {sp:"KAEDEN", t:"The staffroom is on the first floor, and HR are a couple of floors above that, on the third floor. There's a staircase outside the staffroom."},
              {sp:"CHARLOTTE", t:"OK."},
              {sp:"KAEDEN", t:"When you've finished with HR, come and find me in the bakery section of the shop."},
              {sp:"CHARLOTTE", t:"I'm looking forward to getting started."},
              {sp:"KAEDEN", t:"Uh. I'll just give you my phone number in case you can't find me. Uh. Have you got your phone there?"},
              {sp:"CHARLOTTE", t:"Uh. Yes, uh OK, ready?"},
              {sp:"KAEDEN", t:"It's oh four one two double six five nine oh three (0412665903)."},
              {sp:"CHARLOTTE", t:"OK. Done."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the conversation, you have some time to look at questions 7 to 10. Now listen and answer questions 7 to 10."},
              {sp:"KAEDEN", t:"So, Charlotte, your tasks today are in the bakery section, on the sushi counter, and on the meat and fish counters. The first job is to check sell-by dates on the bread and cakes. If any of the dates are today's, put a new price label on the packaging."},
              {sp:"CHARLOTTE", t:"What if any of the labels are yesterday's dates or older? Do I throw those items away?"},
              {sp:"KAEDEN", t:"Yes, but that shouldn't happen. We check the stock every day. When something needs a new price label, put a yellow one on the package next to the original price."},
              {sp:"CHARLOTTE", t:"OK."},
              {sp:"KAEDEN", t:"After that, you'll go to the sushi takeaway counter."},
              {sp:"CHARLOTTE", t:"Will I be preparing boxes of food?"},
              {sp:"KAEDEN", t:"Uh. For today, you'll just be helping the staff."},
              {sp:"CHARLOTTE", t:"Yes, of course."},
              {sp:"KAEDEN", t:"You'll see lots of flat-cardboard boxes at one end of the counter. Beneath those is where we keep the plastic boxes. We run out of those really quickly, so you should bring more from the storeroom."},
              {sp:"CHARLOTTE", t:"Is that my only task on the sushi counter?"},
              {sp:"KAEDEN", t:"No, you also need to clean the area where they prepare the dishes. There are cloths and bottles of spray by the sink. Oh, and please make sure you clean that too."},
              {sp:"CHARLOTTE", t:"Sure, that's important, isn't it?"},
              {sp:"KAEDEN", t:"Absolutely, but you mustn't wash up knives. Uh. You have to do some training before you're allowed to touch sharp objects."},
              {sp:"CHARLOTTE", t:"What should I do, if there are any?"},
              {sp:"KAEDEN", t:"Ask someone to put them in the dishwasher."},
              {sp:"CHARLOTTE", t:"OK, thanks. I don't want to get anything wrong."},
              {sp:"KAEDEN", t:"Don't worry, you'll be fine. And I'll be around to help."},
              {sp:"CHARLOTTE", t:"Right."},
              {sp:"KAEDEN", t:"Uh. Finally the meat and fish counters, you need to clean the area where staff serve customers, including wiping the weighing scales."},
              {sp:"CHARLOTTE", t:"OK. Anything else?"},
              {sp:"KAEDEN", t:"Um. The fish is laid on ice, but when that starts to melt, you'll need to get more from the cold-room."},
              {sp:"CHARLOTTE", t:"I know the staff on the food counters wear a hat. Will that be the same for me?"},
              {sp:"KAEDEN", t:"You won't be serving customers directly, so, no, but make sure you put on thermal gloves when you take anything out of the cold-room. The temperature's low enough in there to get frostbite from touching things."},
              {sp:"CHARLOTTE", t:"Understood."},
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
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO problems with some training programmes for new runners does Liz mention?",
                qns: [11,12],
                options: [
                  {letter:"A", text:"There is a risk of serious injury."},
                  {letter:"B", text:"They are unsuitable for certain age groups."},
                  {letter:"C", text:"They are unsuitable for people with health issues."},
                  {letter:"D", text:"It is difficult to stay motivated."},
                  {letter:"E", text:"There is a lack of individual support."}
                ]
              },
              {
                type: "multi_select",
                qlabel: "Questions 13 and 14",
                inst: "Choose <b>TWO</b> letters, <b>A\u2013E</b>.<br>Which TWO tips does Liz recommend for new runners?",
                qns: [13,14],
                options: [
                  {letter:"A", text:"doing two runs a week"},
                  {letter:"B", text:"running in the evening"},
                  {letter:"C", text:"going on runs with a friend"},
                  {letter:"D", text:"listening to music during runs"},
                  {letter:"E", text:"running very slowly"}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 15\u201318",
                inst: "What reason prevented each of the following members of the Compton Park Runners Club from joining until recently?<br>Choose the correct letter, <b>A\u2013C</b>, next to Questions 15\u201318.",
                mapTitle: "Club members",
                mapNote: "A. a lack of confidence<br>B. a dislike of running<br>C. a lack of time",
                options: ["A","B","C"],
                items: [
                  {n:15, label:"Ceri"},
                  {n:16, label:"James"},
                  {n:17, label:"Leo"},
                  {n:18, label:"Mark"}
                ]
              },
              {
                type: "mcq",
                qlabel: "Questions 19 and 20",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                items: [
                  {n:19, q:"What does Liz say about running her first marathon?", opts:["It had always been her ambition.","Her husband persuaded her to do it.","She nearly gave up before the end."]},
                  {n:20, q:"Liz says new runners should sign up for a race", opts:["every six months.","within a few weeks of taking up running.","after completing several practice runs."]}
                ]
              }
            ],
            multiGroups: [[11,12],[13,14]],
            answers: {11:"C",12:"E",13:"A",14:"D",15:"A",16:"B",17:"C",18:"A",19:"C",20:"C"},
            script: [
              {sp:"ANNOUNCER", t:"Part 2, you will hear a podcast by a running coach giving advice about taking up running and giving information about her club. First, you have some time to look at questions 11 to 14. Now listen carefully and answer questions 11 to 14."},
              {sp:"LIZ FULLER", t:"My name's Liz Fuller, and I'm a running coach with Compton Park Runners Club. Welcome to my podcast. If you're thinking about taking up running, I'm here to help. There are many training programs available online, which aim to help people build up to running 5 kilometers. Some of them are great, and thousands of people of all ages are taking part in 5 kilometer races across the country as a result. People like them because they're easy to follow, and don't push them too hard. However, they don't work for everyone, especially if you suffer from something like heart condition or asthma. Because they're aimed at people with average fitness and running ability. Another thing is that everyone is different, and if you have any specific questions related to your needs. There's no one to provide any answers."},
              {sp:"LIZ FULLER", t:"I have a couple of simple tips I always give to new runners. I expect you've been told to run very slowly until your fitness increases. Well, I find that can prevent progress. You should run at a speed that feels comfortable, but time yourself, and try to run a bit faster each time. Listening to music can be very helpful. It takes your mind off things and helps your body get into a rhythm. I'd say that is better than running with a friend. Especially as most people are competitive, and that's not what you want when you're just starting. I don't think the time of day is especially important. Some people are better in the evening, while others are morning people. But you need to be consistent, so aim to train regularly. Twice a week is enough to begin with."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the podcast, you have some time to look at questions 15 to 20. Now listen and answer questions 15 to 20."},
              {sp:"LIZ FULLER", t:"New members often say to me that they've been put off running, either because they lack confidence, or they don't have time, or they think they dislike running. Ceri, for example, joined the club two years ago at the age of 40. She'd always enjoyed running at school, but wasn't sure if she'd be able to do it. She was worried about being left behind and being the slowest runner, but she says she was made to feel so welcome, she soon forgot all about that. James had always hated the idea of running, but a friend encouraged him to come along for a taster session, and he hasn't looked back. He never misses a training session, despite having a really demanding job."},
              {sp:"LIZ FULLER", t:"Leo was worried about having to commit himself to training sessions every week, and wasn't sure he'd be able to fit training into his busy schedule. But after experiencing a lot of stress at work, he came along to us and gave it a go. Now he says he feels much more relaxed. And he looks forward to his weekly run. Mark is quite typical of our new members. He's never considered himself to be a sporty person. And it was only when he retired that he decided to take up the challenge of trying to run 5 km. It took him months to find the courage to contact us. But he felt reassured immediately, as there were other people his age who were only just taking up running for the first time."},
              {sp:"LIZ FULLER", t:"My own journey hasn't been easy. I did my first marathon when I was 37, after having had two kids. My husband had been running marathons for years. But I never dreamed I'd be doing one with him. I managed to complete it in four hours, but I felt like giving up halfway through. It was only the support of the spectators that kept me going. I do think signing up for a race of whatever length is motivating, whether it's 5 k or 25 k, because it's good to have something to work towards. And it gives you a sense of achievement."},
              {sp:"LIZ FULLER", t:"I did my first 10K after only six months, which was certainly very challenging, and not something I'd necessarily recommend. But after you've been training for a few weeks, it's worth putting your name down for a 5 k. Some people find they only need a few practice runs before taking part in a race. But I'd give yourself a couple of months at least. Well, I hope that's given you a really good idea of..."},
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
                qlabel: "Questions 21\u201325",
                inst: "Choose the correct letter, <b>A, B or C</b>.",
                notesTitle: "Jane and Kieran's Conversation about Books and Bookshop",
                items: [
                  {n:21, q:"Kieran thinks the packing advice given by Jane's grandfather is", opts:["common sense.","hard to follow.","over-protective."]},
                  {n:22, q:"How does Jane feel about the books her grandfather has given her?", opts:["They are not worth keeping.","They should go to a collector.","They have sentimental value for her."]},
                  {n:23, q:"Jane and Kieran agree that hardback books should be", opts:["put out on display.","given as gifts to visitors.","more attractively designed."]},
                  {n:24, q:"While talking about taking a book from a shelf, Jane", opts:["describes the mistakes other people make doing it.","reflects on a significant childhood experience.","explains why some books are easier to remove than others."]},
                  {n:25, q:"What do Jane and Kieran suggest about new books?", opts:["Their parents liked buying them as presents.","They would like to buy more of them.","Not everyone can afford them."]}
                ]
              },
              {
                type: "map_label",
                qlabel: "Questions 26\u201330",
                inst: "Where does Jane's grandfather keep each of the following types of books in his shop?<br>Choose the correct letter, <b>A\u2013G</b>, next to Questions 26\u201330.",
                mapTitle: "Types of books",
                mapNote: "A. near the entrance<br>B. in the attic<br>C. at the back of the shop<br>D. on a high shelf<br>E. near the stairs<br>F. in a specially designed space<br>G. within the caf\u00e9",
                options: ["A","B","C","D","E","F","G"],
                items: [
                  {n:26, label:"rare books"},
                  {n:27, label:"children's books"},
                  {n:28, label:"unwanted books"},
                  {n:29, label:"requested books"},
                  {n:30, label:"coursebooks"}
                ]
              }
            ],
            answers: {21:"A",22:"C",23:"A",24:"B",25:"C",26:"D",27:"F",28:"A",29:"C",30:"G"},
            script: [
              {sp:"ANNOUNCER", t:"Part 3, you will hear two students called Jane and Kieran talking about books. First, you have some time to look at questions 21 to 25. Now listen carefully and answer questions 21 to 25."},
              {sp:"KIERAN", t:"So, Jane, you'll be off to Denmark soon to do your work placement."},
              {sp:"JANE", t:"Yes, I'm really looking forward to it. And I've just started packing up all my books to put in storage."},
              {sp:"KIERAN", t:"Well, I hope they don't get spoiled."},
              {sp:"JANE", t:"It's OK. My grandfather works in a bookshop, and he told me how to pack them."},
              {sp:"KIERAN", t:"Oh, that's helpful."},
              {sp:"JANE", t:"He says you have to support the spine, otherwise the paper can come away from the cover."},
              {sp:"KIERAN", t:"Yeah, that's obvious."},
              {sp:"JANE", t:"He also told me to pack them flat in the box, not on their side. Again because they can bend, and if you leave them like that for, say, a year. It's quite hard to get them back to their normal shape."},
              {sp:"KIERAN", t:"Well, it's pretty clear that ruins them, but a lot of people just can't be bothered to protect their books."},
              {sp:"JANE", t:"He always says it's such a shame that publishers don't use better quality paper."},
              {sp:"KIERAN", t:"It's the acid in the paper that causes the problem, isn't it?"},
              {sp:"JANE", t:"Yeah, that's why old books go yellow. You know, some of the books my grandfather's given me are like that already. I should dump them really, if they're going to deteriorate further, but I'd feel bad. They'll always remind me of him, he's quite a collector you know."},
              {sp:"KIERAN", t:"Well, if they're important to you."},
              {sp:"JANE", t:"Yeah, I'd regret just throwing them away."},
              {sp:"KIERAN", t:"You know, maybe it's because I was taught to treasure books, but I hate seeing students force open the pages of paperbacks. They press so hard they end up breaking the spine."},
              {sp:"JANE", t:"I know, but unfortunately paperbacks aren't designed to last a long time, and people know that. Hardbacks aren't quite as weak."},
              {sp:"KIERAN", t:"Yeah, they're different, I suppose. But I still don't think people value hardbacks like they used to."},
              {sp:"JANE", t:"Well, they aren't decorative, are they, like other objects? Plus nowadays people don't keep them out on shelves as much as they used to."},
              {sp:"KIERAN", t:"That's such a pity. When I visit someone - if they have, say, a colorful book on a table, it's the first thing I'm drawn to."},
              {sp:"JANE", t:"I agree. And book covers can be a work of art in themselves. Some are really eye-catching."},
              {sp:"KIERAN", t:"I've always been taught to handle books carefully. If you watch someone take a book off a shelf, well, they usually do it wrong."},
              {sp:"JANE", t:"Ah, my grandfather says, you should put your hand right over the top of the book...or if you can't do that, pull the other books on the shelf aside, so that you can hold the whole cover."},
              {sp:"KIERAN", t:"When did you learn all this?"},
              {sp:"JANE", t:"He watched me pull a heavy book off the shelf when I was small. And it fell on the floor and broke apart."},
              {sp:"KIERAN", t:"Oh, dear."},
              {sp:"JANE", t:"I can still remember it."},
              {sp:"KIERAN", t:"You know what I really like?"},
              {sp:"JANE", t:"What?"},
              {sp:"KIERAN", t:"The smell of new books."},
              {sp:"JANE", t:"Me too."},
              {sp:"KIERAN", t:"My parents used to laugh at me when I was a kid, because I loved putting books up to my nose. Almost as much as reading them."},
              {sp:"JANE", t:"New books aren't cheap though, are they?"},
              {sp:"KIERAN", t:"I guess we're lucky we can buy them."},
              {sp:"JANE", t:"My grandfather stocks second-hand books as well as new ones. And they don't smell quite as good."},
              {sp:"ANNOUNCER", t:"Before you hear the rest of the discussion, you have some time to look at questions 26 to 30. Now listen and answer questions 26 to 30."},
              {sp:"KIERAN", t:"I'd love to have a bookshop like your grandfather. What's it like?"},
              {sp:"JANE", t:"Well, it's quite big. It's got two floors and an attic. And he stocks all kinds of books, really."},
              {sp:"KIERAN", t:"I guess he treasures things like first editions and other rare books."},
              {sp:"JANE", t:"Yeah, you might think he'd keep those in the attic or somewhere."},
              {sp:"KIERAN", t:"So they'd be hidden."},
              {sp:"JANE", t:"Yeah, but he likes people to know that he has them. So he puts them out in the shop, but makes sure you need a ladder to get them."},
              {sp:"KIERAN", t:"Right, that would prevent any thefts."},
              {sp:"JANE", t:"Uh-huh."},
              {sp:"KIERAN", t:"Does he stock books for children?"},
              {sp:"JANE", t:"He does, he particularly likes to encourage kids to read. He always says that he used to sit under the stairs as a child with a pile of books and read them all."},
              {sp:"KIERAN", t:"Is that where he keeps them, then?"},
              {sp:"JANE", t:"Ah not exactly. He's got a dedicated area on the ground floor with cushions, so that parents can enter with their toddlers, go there, and spend some time reading to them."},
              {sp:"KIERAN", t:"Oh, Cool."},
              {sp:"JANE", t:"And then there's a place for pushchairs by the front door, and a café if anyone needs refreshments."},
              {sp:"KIERAN", t:"That's good to know."},
              {sp:"JANE", t:"As I said, it's a big shop. And there's a storage area out the back as well."},
              {sp:"KIERAN", t:"Oh, what does he keep there? Books he wants to throw away?"},
              {sp:"JANE", t:"He hardly ever throws anything away. He just leaves unwanted books by the front door for customers to take."},
              {sp:"KIERAN", t:"Well, that's very nice."},
              {sp:"JANE", t:"Yeah - and books, people or institutions have requested, they all go at the far end. Oh, he thinks it's best to keep these out of the main shopping area as they're boxed and new."},
              {sp:"KIERAN", t:"Did you get your course books from him?"},
              {sp:"JANE", t:"Naturally. He stocks books for a lot of the colleges. He used to keep these books on the first floor. But now there's a new university in my hometown. He's moved them downstairs to attract the students. They're actually part of the coffee shop on low shelves all around it."},
              {sp:"KIERAN", t:"Pretty central then, you'll have to take me there sometime."},
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
                notesTitle: "Tree planting",
                groups: [
                  {
                    heading: "Reforestation projects should:",
                    items: [
                      {n:null, before:"include a range of tree species", input:null, after:""},
                      {n:31, before:"not include invasive species because of possible", input:31, after:"with native species"},
                      {n:32, before:"aim to capture carbon, protect the environment and provide sustainable sources of", input:32, after:"for local people"},
                      {n:33, before:"use tree seeds with a high genetic diversity to increase resistance to", input:33, after:"and climate change"},
                      {n:34, before:"plant trees on previously forested land which is in a bad condition, not select land which is being used for", input:34, after:""}
                    ]
                  },
                  {
                    heading: "Large-scale reforestation projects",
                    items: [
                      {n:35, before:"Base planning decisions on information from accurate", input:35, after:"."},
                      {n:36, before:"Drones are useful for identifying areas in Brazil which are endangered by keeping", input:36, after:"and illegal logging."}
                    ]
                  },
                  {
                    heading: "Lampang Province, Northern Thailand",
                    items: [
                      {n:null, before:"A forest was restored in an area damaged by mining.", input:null, after:""},
                      {n:null, before:"A variety of native fig trees were planted, which are important for", input:null, after:""},
                      {n:null, before:"supporting many wildlife species", input:null, after:"", indent:true},
                      {n:37, before:"increasing the", input:37, after:"of recovery by attracting animals and birds, e.g.,", indent:true},
                      {n:38, before:"", input:38, after:"were soon attracted to the area.", indent:true}
                    ]
                  },
                  {
                    heading: "Involving local communities",
                    items: [
                      {n:39, before:"Destruction of mangrove forests in Madagascar made it difficult for people to make a living from", input:39, after:"."},
                      {n:null, before:"The mangrove reforestation project:", input:null, after:""},
                      {n:null, before:"provided employment for local people", input:null, after:"", indent:true},
                      {n:null, before:"restored a healthy ecosystem", input:null, after:"", indent:true},
                      {n:40, before:"protects against the higher risk of", input:40, after:".", indent:true}
                    ]
                  }
                ]
              }
            ],
            answers: {31:"competition",32:"food",33:"disease",34:"agriculture",35:"maps",36:"cattle",37:"speed",38:"monkeys",39:"fishing",40:"flooding"},
            script: [
              {sp:"ANNOUNCER", t:"Part 4, you will hear part of an environmental studies lecture on tree planting. First, you have some time to look at questions 31 to 40. Now listen carefully and answer questions 31 to 40."},
              {sp:"SPEAKER", t:"Tree planting now dominates political and popular agendas, and is often presented as an easy answer to the climate crisis, as well as a way for business corporations to offset their carbon emissions. But unfortunately, tree planting isn't as straightforward as some people think. When the wrong trees are planted in the wrong place, it can do considerably more damage than good. Failing to help either people or the environment. Reforestation projects are currently being undertaken on a huge scale in many countries, and it's crucial that the right trees are selected. A mix of species should always be planted, typical of the local natural forest ecosystem, and including rare and endangered species in order to create a rich ecosystem. It's important to avoid non-native species that could become invasive. Invasive species are a significant contributor to the current global biodiversity crisis. And are often in competition with native species, and may threaten their long-term survival."},
              {sp:"SPEAKER", t:"Restoring biodiversity that will maximize carbon capture is key when reforesting an area, but ideally any reforestation project should have several goals. These could include selecting trees that can contribute to wildlife conservation, improve the availability of food for the local community, and maintain the stability of soil systems. Meeting as many of these goals as possible, whilst doing no harm to local communities, native ecosystems and vulnerable species, is the sign of a highly successful tree-planting scheme. To ensure the survival and resilience of a planted forest, it's vital to use tree seeds with appropriate levels of genetic diversity. The amount of genetic variation found within a species is essential for their survival. Using seeds with low genetic diversity generally lowers the resilience of restored forests, which can make them vulnerable to disease, and unable to adapt to climate change."},
              {sp:"SPEAKER", t:"Choosing the right location for reforestation projects is as important as choosing the right trees. Ultimately, the best area for planting trees would be formerly forested areas that are in poor condition. It's better to avoid non-forested landscapes, such as natural grasslands, savannas or wetlands. As these ecosystems already contribute greatly to capturing carbon, it would also be advantageous to choose an area where trees could provide other benefits. Such as recreational spaces, reforesting areas which are currently exploited for agriculture should be avoided. As this often leads to other areas being deforested."},
              {sp:"SPEAKER", t:"Large scale reforestation projects require careful planning. Making the right decisions about where to plant trees depends on having the right information. Having detailed and up-to-date maps, identifying high-priority areas for intervention is essential. Drone technology is a useful tool in helping to prioritize and monitor areas of degraded forest for restoration, in Brazil, it's being used to identify and quantify how parts of the Amazon are being devastated by human activities. Such as rearing cattle and illegal logging."},
              {sp:"SPEAKER", t:"A good example of where the right trees were picked to achieve a restored forest is in Lampang province in northern Thailand. A previously forested site which had been degraded through mining was reforested by a cement company together with Chiang Mai University. After spreading 60 cm of top soil, they planted 14 different native tree species, which included several species of fig. Figs are a keystone species, because of the critical role they play in maintaining wildlife populations. They are central to tropical reforestation projects. As they accelerate the speed of the recovery process by attracting animals and birds, which act as natural seed dispersers. This helps to promote diversity through the healthy regrowth of a wide range of plant species. Unlike the majority of fruit trees, figs bear fruit all year round, providing a reliable food source for many species. At this site for example, after only three rainy seasons, monkeys started visiting to eat the fig fruits, naturally dispersing seeds through defecation."},
              {sp:"SPEAKER", t:"Reforestation projects should always aim to make sure that local communities are consulted and involved in the decision making process. The restoration of mangrove forests in Madagascar is an example of a project which has succeeded in creating real benefits for the community. Destruction of the mangrove forests had a terrible impact on plant and animal life, and also badly affected the fishing industry. Which was a major source of employment for local people living in coastal areas, the reforestation project involved hiring local people. To plant and care for the new mangrove trees. Millions of mangrove trees have now been planted, which has resulted in the return of a healthy aquatic ecosystem. The mangroves also act as a defense against the increased threat of flooding caused by climate change. What's more, the local economy is more stable. And thousands more Madagascans are now able to send their children to school. One other important point to consider."},
              {sp:"ANNOUNCER", t:"That is the end of part 4. You now have one minute to check your answers to part 4."}
            ]
          }
        }
      }
    }
  }
});
