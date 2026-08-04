
// ── TYPING PRACTICE ─────────────────────────────────
const TP_PASSAGES = {
  beginner: [
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "How vexingly quick daft zebras jump.",
    "Sphinx of black quartz judge my vow.",
    "The five boxing wizards jump quickly.",
    "Bright vixens jump dozing fowl quack.",
    "Jackdaws love my big sphinx of quartz.",
    "Fix problem quickly with galvanized jets.",
    "A large fawn jumped quickly over white zinc boxes.",
    "The job requires extra pluck and zeal from every young wage earner.",
    "Wax deft jigs vow the bleak lynx quiz.",
    "Quick zephyrs blow vexing daft Jim.",
    "Two driven jocks help fax my big quiz.",
    "Five quacking zephyrs jolt my wax bed.",
    "The foxy brown dog jumps over a lazy cat.",
    "A mad boxer shot a quick gloved jab to the jaw.",
    "Jail zesty vixen who grabbed pay from quack.",
    "We quickly seized the black axle from the jut.",
    "Jumpy fox waved quilt back to zero.",
    "Six big devils from Japan quickly forgot how to waltz.",
    "The cat sat on the mat.",
    "A big red bus went fast.",
    "The sun is hot and bright.",
    "My dog ran to the park.",
    "She ate a red apple.",
    "He has a blue pen.",
    "The bird flew over the tree.",
    "A cup of tea is nice.",
    "We went to the shop.",
    "I like to read books.",
    "The baby cried all night.",
    "It was a cold dark night.",
    "She put on her coat.",
    "He sat down on the chair.",
    "The car stopped at the light.",
    "We played in the rain.",
    "I saw a big fish.",
    "She wrote in her book.",
    "The dog ate its food.",
    "He ran as fast as he could.",
    "The box was on the table.",
    "We went for a long walk.",
    "She gave me a gift.",
    "The kids played in the park.",
    "He opened the door slowly.",
    "The fire was warm and bright.",
    "She smiled and waved at me.",
    "We had rice for lunch.",
    "The moon came out at night.",
    "I drank a glass of water.",
    "The frog jumped into the pond.",
    "She wore a long red dress.",
    "He tied his shoes tight.",
    "The wind blew the leaves away.",
    "We sat under a big tree.",
    "I found my lost key.",
    "The stars shine at night.",
    "She baked a cake for me.",
    "He fixed the broken chair.",
    "The horse ran across the field.",
    "We climbed up the tall hill.",
    "She put the book on the shelf.",
    "He drew a picture of a house.",
    "The rain fell on the roof.",
    "I heard a loud noise.",
    "She washed her hands before lunch.",
    "He turned off the light.",
    "The dog barked at the cat.",
    "We swam in the cool lake.",
    "I put on my shoes.",
    "She sang a song for us.",
    "He bought a new shirt.",
    "The baby laughed at the toy.",
    "We ate ice cream in the park.",
    "I wrote a letter to my friend.",
    "She ran to catch the bus.",
    "He looked out of the window.",
    "The snow fell all night long.",
    "We built a big sand castle.",
    "I saw a rainbow in the sky.",
    "She picked flowers in the garden.",
    "He got a new toy car.",
    "The fish swam in the tank.",
    "We went to bed early.",
    "I fed the cat its food.",
    "She jumped over the puddle.",
    "He read a book in the park.",
    "The boy rode his red bike.",
    "We watched the birds fly.",
    "I cooked rice and beans.",
    "She watered the plants.",
    "He cleaned the dusty shelf.",
    "The girl wore a yellow hat.",
    "We painted the old fence.",
    "I found a coin on the road.",
    "She helped her mum in the kitchen.",
    "He walked to school every day.",
    "The sun set behind the hill.",
    "We made paper boats.",
    "I opened the window for fresh air.",
    "She tied her hair in a bun.",
    "He poured milk into the glass.",
    "The puppy ran after the ball.",
    "We visited our grandma last week.",
    "I packed my bag for school.",
    "She drew a cat on the wall.",
    "He ate bread and butter.",
    "The boy lost his pen in class.",
    "We played cards after dinner.",
    "I woke up early in the morning.",
    "She planted seeds in the garden.",
    "He made a cup of hot tea.",
    "The clock on the wall ticked loud.",
    "We took a photo of the sunset.",
    "I dug a hole in the sand.",
    "She folded the paper into a boat.",
    "He kicked the ball into the net.",
    "The cat lay on the warm rug.",
    "We picked apples from the tree.",
    "I learned a new word today.",
    "She set the table for dinner.",
    "He climbed the old oak tree.",
    "The baby slept in the crib.",
    "We packed food for the trip.",
    "I saw a deer in the woods.",
    "She hugged her little brother.",
    "He washed the car in the yard.",
    "The dog dug a hole in the yard.",
    "We sat by the fire and talked.",
    "I wore my best coat today.",
    "She made soup for the cold night.",
    "He drew a fish in the sand.",
    "The girl skipped down the path.",
    "We shared our lunch at school.",
    "I caught a big fish today.",
    "She blew out the candle.",
    "He rolled the ball to his dog.",
    "The wind made the trees sway.",
    "We ran to the shop for milk.",
    "I lost my red pen at school.",
    "She put the pot on the stove.",
    "He called his dad on the phone.",
    "The owl hooted in the dark.",
    "We hiked up the rocky hill.",
    "I gave my dog a bone.",
    "She cut the cake into slices.",
    "He swam to the edge of the pool.",
    "The boy read a story at night.",
    "We made jam from ripe berries.",
    "I wore socks with stars on them.",
    "She chased the hen in the yard.",
    "He helped carry the heavy bags.",
    "The kite flew high in the sky.",
    "We cooked fish on the campfire.",
    "I watered the pot plants today.",
    "She found a shell on the beach.",
    "He ran home when it got dark.",
    "The bell rang at the end of class.",
    "We clapped our hands to the beat.",
    "I saw a big crab on the sand.",
    "She tied a bow on the gift.",
    "He stepped on a dry twig.",
    "The rain made big puddles.",
    "We fed the ducks at the pond.",
    "I wore a warm hat in the cold.",
    "She told a funny joke.",
    "He tapped his foot to the music.",
    "The goat ate the grass by the fence.",
    "We flew a kite on the hill.",
    "I drank my juice too fast.",
    "She hid behind the big rock.",
    "He sat by the lake to fish.",
    "The leaf fell into the pond.",
    "We baked rolls for the party.",
    "I put the jug of milk in the fridge.",
    "She wore pink boots in the mud.",
    "He skipped stones on the lake.",
    "The fog was thick this morning.",
    "We played tag in the yard.",
    "I saw a fox run past the gate.",
    "She peeled an orange for me.",
    "He fixed the leak in the roof.",
    "The hen laid eggs in the barn.",
    "We sang songs on the long trip.",
    "I built a hut from sticks.",
    "She tied the rope to the post.",
    "He piled the logs by the fire.",
    "The frog sat on the wet rock.",
    "We picked wild berries in the field.",
    "I rode my bike to the river.",
    "She kept a diary of her day.",
    "He swept the leaves off the path.",
    "The lamb ran to its mother.",
    "We dipped our feet in the cold brook.",
    "I drew a sun with yellow crayons.",
    "She hung the wet clothes to dry.",
    "He nailed the shelf to the wall.",
    "The snail left a trail on the stone.",
    "We sat on the grass and had lunch.",
    "I made a hat out of paper.",
    "She lit a candle in the dark room.",
    "He found a nest in the bush.",
    "The crab hid under a flat rock.",
    "We jumped in the big pile of leaves.",
    "I drew a map of my town.",
    "She made a crown out of flowers.",
    "He poured sand into the bucket.",
    "The moth flew near the bright lamp.",
    "We crossed the bridge over the river.",
    "I saw a hawk soar in the sky.",
    "She knit a scarf for the winter.",
    "He dug worms for fishing.",
    "The goose swam on the still pond.",
    "We lit a fire to keep warm.",
    "I made a list of things to do.",
    "She taught her sister to read.",
    "He loaded boxes into the van.",
    "The rabbit hopped across the lawn.",
    "We stuck shells on the box lid.",
    "I helped set the table for tea.",
    "She stirred the soup in the big pot.",
    "He threw the stick for the dog.",
    "The turtle moved slow on the path.",
    "We sailed a boat on the pond.",
    "I blew bubbles in the yard.",
    "She shook sand out of her shoes.",
    "He swept the floor of the hut.",
    "The crane stood still in the reeds.",
    "We played in the pile of hay.",
    "I tapped the keys to the tune.",
    "She mended the hole in her dress.",
    "He tracked mud through the hall.",
    "The snail inched up the fence post.",
    "We went for a swim at dawn.",
    "I found a bug under the stone.",
    "She dried her hands on the towel.",
    "He set the clock to the right time.",
    "The sheep grazed in the green field.",
    "We rowed the boat to the far shore.",
    "I asked my dad to help me.",
    "She learned to bake a fresh loaf.",
    "He drank a cold glass of milk.",
    "The chick hatched from the egg.",
    "We pulled weeds from the garden bed.",
    "I pasted a star on my work.",
    "She zipped up her warm jacket.",
    "He picked a ripe red tomato.",
    "The waves splashed on the wet rocks.",
    "We roasted corn over the fire.",
    "I found my keys in my coat.",
    "She iced the cake with pink cream.",
    "He raked the dry leaves into a pile.",
    "The snail left a shiny trail.",
    "We pressed flowers between book pages.",
    "I dug a trench for the seeds.",
    "She caught a cold in the wet rain.",
    "He built a fence for the yard.",
    "The mule trudged up the steep path.",
    "We scooped sand with our hands.",
    "I spun the top on the floor.",
    "She dropped the glass on the tiles.",
    "He filled the tank with clean water.",
    "The crow perched on the fence post.",
    "We folded napkins for the table.",
    "I wrapped the gift in blue paper.",
    "She hummed while she swept the floor.",
    "He scrubbed the pot till it shone.",
    "The bee buzzed near the bright bloom.",
    "We dug clams at low tide.",
    "I slipped on the wet steps.",
    "She tossed the ball to her dog.",
    "He sat in the shade of the tree.",
    "The dragonfly hovered over the pond.",
    "We poured tea into the white cups.",
    "I glued the broken handle back on.",
    "She tied the boat to the dock.",
    "He swung on the rope over the creek.",
    "The colt ran free in the open field.",
    "We pressed apples to make juice.",
    "I carved my name on the soft bark.",
    "She braided her long dark hair.",
    "He leapt from stone to stone.",
    "The stork stood tall in the marsh.",
    "We drank cold lemonade in the shade.",
    "I marked my spot with a red flag.",
    "She boiled eggs for the picnic.",
    "He threaded the worm on the hook.",
    "The bear tracks led into the woods.",
    "We built a snow fort in the yard.",
    "I shelled peas at the kitchen table.",
    "She waved from the top of the hill.",
    "He laid bricks for the new wall.",
    "The ant carried crumbs to the hill.",
    "We strung beads on a long thread.",
    "I poured batter into the hot pan.",
    "She spun wool on the old wheel.",
    "He chopped wood for the winter.",
    "The spider spun a web in the barn.",
    "We rolled dough flat on the board.",
    "I cracked the egg into the bowl.",
    "She padded along in soft slippers.",
    "He welded the broken gate shut.",
    "The lamb nuzzled against its mum.",
    "We sanded the wood till it was smooth.",
    "I filled the birdbath with fresh water.",
    "She pressed the seal into the wax.",
    "He hammered the post deep in the ground.",
    "The geese flew south for the winter.",
    "We draped a cloth over the table.",
    "I rinsed the mud from my boots.",
    "She spooned honey into the tea.",
    "He flipped the fish in the hot pan.",
    "The moth nibbled the old wool coat.",
    "We planted bulbs before the frost.",
    "I tapped the drum to keep the beat.",
    "She dusted the shelves in the hall.",
    "He fetched water from the well.",
    "The foal trotted beside its mother.",
    "We dyed cloth with bright plant dyes.",
    "I climbed the pine to see far.",
    "She sewed a patch on the worn jeans.",
    "He stirred the embers to revive the fire.",
    "The shrimp darted under the rock.",
    "We picked mint leaves by the stream.",
    "I carved a boat from a pine log.",
    "She brushed the dust off the lamp.",
    "He planted a row of bean seeds.",
    "The trout leapt from the cold stream.",
    "We stacked wood against the shed wall.",
    "I pressed hard cheese into a mold.",
    "She trimmed the hedge with big shears.",
    "He repaired the torn net by the dock.",
    "The lark sang at first light.",
    "We tapped the maple tree for sap.",
    "I spread jam thick on my toast.",
    "She wove a mat from dried reeds.",
    "He reeled in the long fishing line.",
    "The elk grazed by the still lake.",
    "We sorted nuts and stored them away.",
    "I stitched the torn sleeve shut.",
    "She hollowed a pumpkin for the lamp.",
    "He banked the fire for the cold night.",
    "The calf lapped milk from the pail.",
    "We mended the old stone wall.",
    "I kneaded the dough for the bread.",
    "She drained the pasta in the sink.",
    "He sharpened his blade on the stone.",
    "The pigeon pecked at seeds on the path.",
    "We hauled the net from the deep water.",
    "I salted the fish and set it to dry.",
    "She stoked the stove with dry wood.",
    "He patched the hole in the boat hull.",
    "The crane waded in the shallow marsh.",
    "We cut reeds to thatch the roof.",
    "I ground corn between two flat stones.",
    "She rinsed the herbs in cold water.",
    "He bolted the door against the storm.",
    "The badger dug its den in the bank.",
    "We sheared the sheep before summer.",
    "I scooped grain into the trough.",
    "She pressed grapes in the old stone vat.",
    "He barred the gate with a stout pole.",
    "The heron fished at dusk by the reeds.",
    "We washed fleece in the cold brook.",
    "I notched the stick to mark the days.",
    "She banged the gong to call for lunch.",
    "He propped the ladder against the eaves.",
    "The wolf tracked the deer through snow.",
    "We twisted vines into a long rope.",
    "I sealed the jar with hot wax.",
    "She soaked beans overnight in the pot.",
    "He braced the post with a flat stone.",
    "The osprey dove and snatched a fish.",
    "We felled the old dead oak.",
    "I rolled the barrel into the cool cave.",
    "She wicked the lamp with a strip of cloth.",
    "He piled stones to dam the small stream.",
    "The marten leapt from branch to branch.",
    "We charred the wood to make black dye.",
    "I bent the green branch into a bow.",
    "She boiled pine bark for medicine.",
    "He lashed the raft with wet rawhide.",
    "The fox sniffed the cold morning air.",
    "We spread fresh straw in the stall.",
    "I drove the peg deep with a mallet.",
    "She plaited her hair for the long ride.",
    "He caulked the gaps in the old boat.",
    "The elk bugled in the misty valley.",
    "We lowered the bucket into the well.",
    "I shaped clay into a round bowl.",
    "She drew water and set it to boil.",
    "He slung his pack over one shoulder.",
    "The hawk rode the warm updraft high.",
    "We bound the sheaf with a twist of straw.",
    "I churned butter in the old wooden pail.",
    "She draped hides over the drying rack.",
    "He notched the bow arm with care.",
    "The salmon fought up the fast current.",
    "We ground dried herbs into fine powder.",
    "I peeled the rind from the hard gourd.",
    "She poured oil into the clay lamp.",
    "He stripped bark to weave a basket.",
    "The woodpecker drummed on the dead pine.",
    "We floated logs down the spring river.",
    "I dipped a rush into the tallow.",
    "She packed the wound with clean moss.",
    "He dragged the hide to the edge of camp.",
    "The bear padded to the berry patch.",
    "We stretched the hide on the drying frame.",
    "I smoked the meat over green wood.",
    "She scraped fat from the cool hide.",
    "He set a snare near the deer trail.",
    "The river rose after three days of rain.",
    "We crossed the ford at first light.",
    "I split kindling from the dry birch log.",
    "She raked embers to one side to bake.",
    "He waded the shallows to reach the far bank.",
    "The wild boar rooted in the soft earth.",
    "We built a lean to of poles and bark.",
    "I dried mushrooms by the warm fire.",
    "She cut strips of meat for the smoke.",
    "He carried stones for the hearth.",
    "The brook ran clear over pale stones.",
    "We slept under a roof of pine boughs.",
    "I crushed berries for a bright dye.",
    "She sewed pelts together with sinew.",
    "He split the log with one clean blow.",
    "The otter slid into the cold creek.",
    "We stamped clay flat for the floor.",
    "I bent willow rods into a round frame.",
    "She netted trout in the shallow pool.",
    "He banked snow around the base of the tent.",
    "The wren sang loud from the bramble patch.",
    "We boiled bones for a rich broth.",
    "I dried herbs from the roof beam.",
    "She tanned the hide with oak bark.",
    "He hewed timber for the cabin wall.",
    "The lynx crouched still in the deep snow.",
    "We made oil from rendered fat.",
    "I bound the bundle with strips of bark.",
    "She stitched the moccasin sole in place.",
    "He built a weir to trap the fish.",
    "The moose waded in the marsh at dusk.",
    "We cut peat from the boggy ground.",
    "I dug clay from the bank of the stream.",
    "She dried the fish on a wooden rack.",
    "He marked the tree with a sharp blade.",
    "The quail flushed from the long grass.",
    "We packed the skins tight in the bundle.",
    "I braided cord from plant fibers.",
    "She hung the gourds to dry in the sun.",
    "He set the fish trap at dusk.",
    "The geese honked and rose from the lake.",
    "We sorted seeds for the spring planting.",
    "I chipped flint to a sharp point.",
    "She bent pine needles into a basket.",
    "He drove the stake into the hard ground.",
    "The creek flooded after the long rain.",
    "We trekked through deep snow to the ridge.",
    "I hewed a peg from a green stick.",
    "She boiled sap until it thickened.",
    "He mapped the stars to find his way.",
    "The hawk screamed and circled the field.",
    "We wove grass mats for the shelter floor.",
    "I split the cane into thin strips.",
    "She caught rain in a wide clay bowl.",
    "He scraped the horn into a smooth spoon.",
    "The bobcat yowled in the cold night.",
    "We paddled the canoe against the tide.",
    "I carved a wooden peg for the joint.",
    "She set the clay pot in the hot coals.",
    "He hauled the timber up the steep bank.",
    "The swan glided on the still lake.",
    "We patched the birch bark canoe.",
    "I laced the boot tight with wet thong.",
    "She sifted ash into the lye pot.",
    "He felled the pine and limbed it clean.",
    "The doe and fawn grazed in the glade.",
    "We tethered the horses near the stream.",
    "I stacked the cut peat to dry.",
    "She pressed the fat into a clay mold.",
    "He wedged the axe head tight.",
    "The raven called from the tall fir.",
    "We sledged the logs to the mill site.",
    "I pegged the hide flat to dry.",
    "She mixed ash and fat to make soap.",
    "He carved the oar from a straight pine.",
    "The grouse drummed deep in the alder grove.",
    "We boiled tar from pine knots.",
    "I split the quill to make a pen.",
    "She stretched sinew to make a bowstring.",
    "He packed wool into the wooden frame.",
    "The crows mobbed the red tailed hawk.",
    "We cut poles for the new fence line.",
    "I folded the map and stored it safe.",
    "She dried wild onions for the winter store.",
    "He cast the net at dawn.",
    "The mink slipped into the dark water.",
    "We bound the barrel staves with iron rings.",
    "I shaped the bow stave with a draw knife.",
    "She soaked rawhide to soften it.",
    "He drove the bolt through the thick plank.",
    "The grey wolf loped across the frozen lake.",
    "We dipped tallow candles to make them thick.",
    "I set the millstone in the stone race.",
    "She kneaded ash into the clay to temper it.",
    "He carved a ladle from a burl."
  ],
  intermediate: [
    "Practice makes perfect, so keep typing every single day to build your speed.",
    "Good communication skills are essential for success in both work and life.",
    "Reading books regularly helps you improve your vocabulary and writing skills.",
    "Time management is one of the most important skills a student can develop.",
    "Consistency and hard work will always lead you to achieve your goals in life.",
    "Learning to type fast is a skill that will help you throughout your entire career.",
    "The ability to focus deeply on a task is becoming increasingly rare and valuable.",
    "Every expert was once a beginner who refused to give up on their dreams.",
    "Success is not final and failure is not fatal — what counts is the courage to continue.",
    "Your daily habits determine your future, so choose them wisely and with intention.",
    "A healthy diet and regular exercise are the foundations of a long and happy life.",
    "Children who read for pleasure tend to perform better in school across all subjects.",
    "The internet has made it easier than ever to learn new skills from home.",
    "Hard work without direction is like a ship sailing without a map.",
    "Being kind to others costs nothing but means everything to those who receive it.",
    "The best way to predict your future is to create it through consistent action.",
    "A positive attitude can turn every setback into a stepping stone for growth.",
    "Listening is just as important as speaking when it comes to good communication.",
    "People who wake up early tend to be more productive throughout the day.",
    "Setting small daily goals makes large ambitions feel much more achievable.",
    "Mistakes are not failures but opportunities to learn and improve yourself.",
    "A cluttered desk often leads to a cluttered mind and less focused thinking.",
    "Exercise releases chemicals in the brain that improve mood and reduce stress.",
    "The more you read, the more things you will know and the further you will go.",
    "Writing in a journal every day helps you process your thoughts and emotions.",
    "Successful people are not lucky — they simply work harder than everyone else.",
    "Technology is a tool, and like all tools, it depends on how you choose to use it.",
    "A good night of sleep is just as important as diet and exercise for your health.",
    "Learning a new language opens doors to new cultures, friendships, and opportunities.",
    "The greatest investment you can make is in your own education and skills.",
    "Teamwork allows people to achieve together what they could never do alone.",
    "Patience is not the ability to wait but the ability to keep a good attitude while waiting.",
    "People with strong problem solving skills are always in high demand in the workplace.",
    "Music has been shown to reduce anxiety and improve concentration during study.",
    "The key to happiness is gratitude — always count what you have, not what you lack.",
    "Developing good study habits early in life leads to greater academic achievement.",
    "Financial literacy is a life skill that every young person should be taught at school.",
    "Travelling to new places broadens your perspective and teaches you about the world.",
    "A strong work ethic combined with a curious mind is a powerful combination.",
    "Volunteering in your community is one of the most rewarding things you can do.",
    "Critical thinking means questioning assumptions and looking at evidence carefully.",
    "Spending time in nature has proven benefits for both mental and physical health.",
    "The ability to adapt to change is one of the most valuable skills in modern life.",
    "Leaders are not born — they are built through experience, failure, and reflection.",
    "Reading the news every day helps you stay informed about the world around you.",
    "A warm smile is the universal language that everyone understands.",
    "Self discipline is the bridge between your goals and your actual accomplishments.",
    "Every great achievement started as a single small and seemingly insignificant step.",
    "The words you use daily shape the way you see yourself and the world.",
    "Learning to cook is one of the most practical and rewarding skills you can develop.",
    "People who set clear goals are far more likely to achieve them than those who do not.",
    "A healthy mind lives in a healthy body, so take care of both every single day.",
    "Procrastination is the silent killer of dreams and potential.",
    "The most important thing in communication is hearing what is not being said.",
    "Confidence grows when you step outside your comfort zone regularly.",
    "A library is a treasure house of knowledge that is open to everyone.",
    "Taking breaks during study sessions actually improves retention and focus.",
    "Helping a friend in need is one of the truest tests of real friendship.",
    "The quality of your questions determines the quality of your answers.",
    "Never stop learning because the world never stops changing around you.",
    "An organised workspace helps you think more clearly and work more efficiently.",
    "Being honest with yourself is the first step to making any positive change.",
    "Great things happen when preparation meets the right opportunity.",
    "The habit of reading before bed helps your mind wind down and sleep better.",
    "Every language you learn adds a new dimension to the way you see the world.",
    "Asking for help when you need it is a sign of strength, not weakness.",
    "People who are grateful tend to be more resilient in the face of difficulty.",
    "The secret of getting ahead is simply getting started without overthinking.",
    "Writing clearly is a sign of thinking clearly — both are worth practising.",
    "A curious mind is never bored because the world is full of things to discover.",
    "Kindness and empathy cost nothing but can change someone's entire day.",
    "Eating breakfast every morning gives your brain the fuel it needs to focus.",
    "Good friends inspire you to be the best version of yourself.",
    "The best teachers are those who show you where to look but not what to see.",
    "Regular practice is more effective than occasional long study sessions.",
    "Understanding your own learning style helps you study more effectively.",
    "Being punctual shows respect for other people's time and builds trust.",
    "The ability to stay calm under pressure is a skill worth developing carefully.",
    "A growth mindset means believing that your abilities can always be improved.",
    "Taking responsibility for your mistakes is the mark of a mature person.",
    "People tend to underestimate what they can achieve in a year of focused effort.",
    "Creativity is not a talent — it is a habit that can be developed with practice.",
    "Being well prepared for an exam reduces anxiety and improves performance.",
    "The most successful people read for at least thirty minutes every single day.",
    "Spending less time on social media can dramatically improve your focus.",
    "A good conversation leaves both people feeling heard and understood.",
    "Learning from the experience of others saves you from making the same mistakes.",
    "Your attitude towards failure determines how quickly you recover from it.",
    "Making a daily to do list keeps you organised and reduces mental clutter.",
    "The pursuit of excellence is more rewarding than the pursuit of perfection.",
    "Developing emotional intelligence helps you navigate relationships more effectively.",
    "A strong foundation of basic skills makes learning advanced topics much easier.",
    "Being proactive means taking initiative instead of waiting for things to happen.",
    "Physical activity every day keeps your mind sharp and your body strong.",
    "The ability to listen deeply is one of the rarest and most valuable human skills.",
    "A well written essay is clear, well structured, and supported by strong evidence.",
    "Learning to manage stress is essential for maintaining good mental health.",
    "People who help others tend to feel happier and more satisfied with their lives.",
    "Setting boundaries is a healthy and necessary part of any good relationship.",
    "The way you start your morning often determines the tone of your entire day.",
    "Reading widely exposes you to ideas and perspectives you would never encounter otherwise.",
    "Hard problems become easier when you break them down into smaller steps.",
    "Feedback is a gift that helps you grow faster than you would on your own.",
    "Developing patience allows you to enjoy the process, not just the outcome.",
    "The most creative solutions often come from looking at problems in a new way.",
    "Spending quality time with family is one of the most important things in life.",
    "A person who reads widely is rarely short of interesting things to say.",
    "Building good habits early means you do not have to rely on motivation alone.",
    "Disagreements handled with respect can actually strengthen a relationship.",
    "Being honest even when it is difficult builds a reputation for integrity.",
    "A clear purpose gives direction and meaning to everything you do each day.",
    "The best apology is changed behaviour — not just words.",
    "Understanding your strengths helps you make better choices about your path in life.",
    "People who plan their week on Sunday tend to feel more in control of their lives.",
    "The more you practise speaking, the more confident you will become over time.",
    "Small acts of kindness done consistently have a huge impact on those around you.",
    "Living below your means is the foundation of long term financial security.",
    "The best investment in any relationship is giving it your full attention.",
    "When you focus on solutions rather than problems, progress becomes much faster.",
    "A sense of humour makes difficult situations more manageable and life more enjoyable.",
    "Forgiveness is not for the other person — it is for your own peace of mind.",
    "Developing discipline means doing what needs to be done even when you do not feel like it.",
    "The richest people in the world build networks while everyone else just looks for work.",
    "Slowing down sometimes is the fastest way to achieve lasting and meaningful results.",
    "Reading fiction builds empathy by allowing you to live many different lives.",
    "A clear and tidy home creates a calm and focused state of mind.",
    "Asking questions is the most underrated way to learn anything quickly.",
    "The quality of your relationships is the most important factor in your happiness.",
    "Wasting time is the one thing you can never undo, so spend it wisely.",
    "Discipline beats motivation because it does not depend on how you feel today.",
    "The pen is mightier than the sword, so choose your words with great care.",
    "Every person you meet knows something you do not — so stay curious and listen.",
    "Spending a few minutes each morning planning saves hours of wasted effort later.",
    "The strongest arguments are made with facts, not with emotion or volume.",
    "People remember how you made them feel far longer than what you actually said.",
    "Good manners open doors that even the best education cannot unlock.",
    "Persistence is the quality that separates those who succeed from those who give up.",
    "The world is changed by people who believe they can make a difference.",
    "Making time for hobbies and creative pursuits is essential for a balanced life.",
    "Healthy competition pushes you to discover what you are truly capable of achieving.",
    "Taking notes by hand helps you understand and remember information much better.",
    "The ability to prioritise is more valuable than the ability to do everything at once.",
    "Kind words are free, but their value to the person who hears them is immeasurable.",
    "People who exercise regularly report higher levels of energy throughout the day.",
    "Knowing when to speak and when to stay silent is a mark of emotional wisdom.",
    "The right mentor can save you years of trial and error on your journey to success.",
    "Innovation happens when someone looks at a problem and refuses to accept it as permanent.",
    "Learning to budget your money carefully is a skill that pays dividends for life.",
    "The habit of reflection helps you learn from every experience, good or bad.",
    "Strong writing skills are one of the most transferable and valuable abilities you can have.",
    "Gratitude journaling has been shown to increase levels of happiness and well-being.",
    "Taking ownership of your life means no longer blaming others for where you are.",
    "The ability to concentrate for long periods is becoming a rare and powerful skill.",
    "Your network of relationships is often more important than your knowledge alone.",
    "Teaching something to someone else is one of the best ways to truly master it.",
    "The world rewards those who are bold enough to pursue their ideas with conviction.",
    "Rest is not laziness — it is an essential part of any high performance routine.",
    "When you learn to enjoy the process, the results take care of themselves.",
    "Building a reading habit is one of the highest leverage activities available to you.",
    "People who write their goals down are significantly more likely to achieve them.",
    "A sharp mind requires regular mental exercise just as much as the body needs physical.",
    "The best conversations happen when both people are genuinely curious about each other.",
    "Developing a thick skin allows you to receive criticism without losing your confidence.",
    "Showing up consistently over time is more powerful than any single burst of effort.",
    "Understanding grammar rules gives you the confidence to write and speak more clearly.",
    "The gap between where you are and where you want to be is closed by daily action.",
    "A humble person is always learning because they never think they know everything.",
    "Making the effort to understand others before being understood builds deep trust.",
    "A clear mind produces clear writing, so always think before you put words on paper.",
    "The more diverse your experiences, the richer and more nuanced your perspective becomes.",
    "Courage is not the absence of fear but the decision that something is more important.",
    "Hard work compounds over time just like money in a savings account — be patient.",
    "The habit of daily reading is the single most reliable path to a well-educated mind.",
    "People who help others without expecting anything in return live the richest lives.",
    "The first draft of anything is always rough — what matters is that you begin.",
    "A well-rested brain learns and retains information far more effectively.",
    "The words you speak to yourself in your mind shape your reality more than you know.",
    "Preparation and practice together create what the world tends to call natural talent.",
    "Understanding the difference between urgent and important tasks changes everything.",
    "Encouraging words from a teacher can change the entire direction of a student's life.",
    "Learning to be comfortable with uncertainty is one of the greatest life skills.",
    "The ability to write a clear email is a skill that every professional needs today.",
    "Reviewing your notes within twenty-four hours doubles the amount you remember.",
    "The most important project you will ever work on is yourself.",
    "A person's character is revealed not in easy times but in times of pressure.",
    "Curiosity is the engine of achievement and the foundation of all real learning.",
    "Time spent investing in your skills today pays the highest returns tomorrow.",
    "Being willing to start before you are ready is the mark of a true achiever.",
    "A genuine compliment given sincerely can lift someone's spirits for days.",
    "Reading in a quiet place with no distractions dramatically improves comprehension.",
    "The strongest foundation for any friendship is honesty combined with kindness.",
    "Developing thick mental skin allows you to persist when others would have quit.",
    "Every word you type today brings you one step closer to mastering this skill.",
    "The most successful communicators listen twice as much as they speak.",
    "A morning routine sets the tone for the rest of your entire day.",
    "Learning to say no is just as important as knowing when to say yes.",
    "Every hour spent practising a skill brings you closer to mastery.",
    "The world is full of opportunities for those who know how to look for them.",
    "Being open to new ideas is the hallmark of an educated and flexible mind.",
    "Your thoughts shape your feelings, your feelings shape your actions, and your actions shape your life.",
    "Taking ten deep breaths before a stressful situation helps you respond rather than react.",
    "The effort you put into preparation determines the confidence you feel in performance.",
    "Reading widely and deeply is the single best investment of your leisure time.",
    "Every skill feels impossible at first — the secret is simply to keep going.",
    "People who communicate clearly tend to advance faster in their careers.",
    "The difference between ordinary and extraordinary is that little bit of extra effort.",
    "Being generous with your knowledge makes you more valuable, not less.",
    "The discipline to do what needs doing without being told is the rarest of qualities.",
    "Understanding compound interest is the first step to building long term wealth.",
    "Clear goals combined with daily action produce results that seem almost miraculous.",
    "The willingness to be wrong is a prerequisite to learning anything truly new.",
    "A regular bedtime routine improves sleep quality and overall mental performance.",
    "Small improvements made daily add up to massive transformations over time.",
    "The courage to begin is always the hardest part of any worthwhile endeavour.",
    "People who know themselves well make better decisions in every area of life.",
    "Being open to feedback means you are always finding ways to improve yourself.",
    "A quiet determination to keep going is more powerful than any burst of motivation.",
    "Every challenge you overcome adds to your confidence and your capability.",
    "The way you treat people who can do nothing for you says everything about you.",
    "A strong vocabulary is one of the best indicators of a well-developed mind.",
    "Being dependable and reliable is a quality that will take you very far in life.",
    "The ability to focus without interruption for ninety minutes is extremely valuable.",
    "People who read regularly tend to be more empathetic and socially aware.",
    "Learning from criticism is faster and more effective than learning from praise alone.",
    "Every moment you spend practising typing builds a skill you will use forever.",
    "The most effective learners are those who are honest about what they do not know.",
    "Setting a consistent study schedule removes the need for daily decision making.",
    "Kindness and competence together are an unbeatable combination in any field.",
    "The ability to explain complex ideas in simple language is a mark of true mastery.",
    "Trust is built slowly through consistent actions and destroyed quickly by dishonesty.",
    "Making eye contact when speaking shows confidence and builds connection.",
    "Every book you finish is a world you have explored and knowledge you now carry.",
    "The fastest learners are those who are not afraid to look foolish while practising.",
    "Developing a love of learning is the greatest gift you can give yourself.",
    "Being present in a conversation means putting your phone down and truly listening.",
    "The seeds you plant today through effort and learning will grow into your future.",
    "A well-structured argument begins with a clear claim and ends with strong evidence.",
    "People who write regularly develop clearer thinking and stronger communication skills.",
    "The choice to keep improving every day is the most important choice you can make.",
    "Every page you read adds a brick to the house of knowledge you are building.",
    "Knowing how to learn is more valuable than any single thing you could learn today.",
    "The discipline to sit and focus is the foundation of every great achievement.",
    "Being kind to yourself after a mistake is as important as learning from it.",
    "The best time to plant a tree was twenty years ago — the second best time is now.",
    "Typing quickly and accurately is a skill that saves hours every single week.",
    "The world belongs to those who show up prepared and give their very best effort."
  ],
  advanced: [
    "The proliferation of digital technology has fundamentally transformed the way individuals communicate, access information, and participate in economic activities across the globe.",
    "Academic research suggests that students who engage in regular reading and writing activities demonstrate significantly higher levels of cognitive development and critical thinking.",
    "Environmental degradation caused by industrial pollution and unsustainable agricultural practices poses a serious threat to biodiversity and long-term ecological stability.",
    "Globalisation has created unprecedented opportunities for international trade, cultural exchange, and economic growth, while simultaneously generating complex socioeconomic challenges.",
    "The relationship between urbanisation and public health outcomes has been widely studied, with evidence suggesting that densely populated areas often experience higher rates of respiratory and cardiovascular disease.",
    "Technological advancements in artificial intelligence and machine learning are rapidly reshaping labour markets, raising important questions about employment, inequality, and the future of work.",
    "Effective governance requires transparent institutions, accountable leadership, and meaningful participation from citizens in democratic processes at both local and national levels.",
    "The acquisition of a second language during early childhood is associated with enhanced cognitive flexibility, improved memory function, and greater academic achievement in later years.",
    "Climate change mitigation strategies must balance economic development priorities with the urgent need to reduce greenhouse gas emissions and transition to renewable energy sources.",
    "Cross-cultural competence has become an indispensable attribute for professionals working in multinational organisations, requiring sensitivity, adaptability, and a willingness to embrace diversity.",
    "The rapid expansion of social media platforms has fundamentally altered the dynamics of public discourse, enabling the swift dissemination of both accurate information and harmful misinformation.",
    "Psychological research consistently demonstrates that individuals who cultivate a growth mindset tend to achieve higher levels of academic and professional success than those with fixed beliefs about their abilities.",
    "The increasing automation of routine cognitive and manual tasks raises profound questions about the long-term viability of traditional employment models and the role of education in preparing future workers.",
    "Urbanisation continues to accelerate in developing nations, placing enormous pressure on infrastructure, public services, and natural resources while simultaneously driving economic expansion.",
    "The concept of sustainable development seeks to reconcile the competing demands of economic growth, social equity, and environmental protection for the benefit of present and future generations.",
    "Epidemiological studies have demonstrated a strong correlation between socioeconomic status and health outcomes, with lower income populations bearing a disproportionate burden of preventable disease.",
    "The erosion of biodiversity represents one of the most serious environmental crises of the modern era, with far-reaching consequences for ecosystem stability and human well-being.",
    "Advances in genomic medicine hold the potential to revolutionise the diagnosis and treatment of hereditary conditions, though significant ethical and regulatory challenges must first be addressed.",
    "The increasing concentration of wealth among a small global elite has intensified debates about taxation, redistribution, and the social contract in contemporary democratic societies.",
    "Contemporary migration patterns are driven by a complex interplay of economic necessity, political instability, environmental factors, and the search for improved educational and social opportunities.",
    "The transition from fossil fuels to renewable energy sources represents both an immense technological challenge and a critical opportunity to address the long-term consequences of carbon dependence.",
    "Cognitive neuroscience has revealed that the human brain retains a remarkable degree of plasticity throughout adulthood, with sustained learning and mental challenge promoting neural regeneration.",
    "The growing prevalence of antibiotic-resistant pathogens poses a severe threat to global public health systems and underscores the urgent need for innovative approaches to infectious disease management.",
    "Economic inequality within and between nations continues to widen, driven by technological disruption, globalised capital flows, and the declining bargaining power of organised labour.",
    "The philosophical tension between individual liberty and collective responsibility has been a defining feature of political thought since the Enlightenment and remains deeply contested today.",
    "Behavioural economics has challenged the classical assumption of rational economic actors by demonstrating that human decision-making is systematically influenced by cognitive biases and heuristics.",
    "The emergence of smart city technologies offers significant potential for improving urban efficiency and quality of life, but also raises serious concerns about surveillance and data privacy.",
    "Access to quality education remains profoundly unequal across and within nations, perpetuating cycles of poverty and limiting the development of human capital in less affluent communities.",
    "The growing body of research on mindfulness and meditation suggests that regular contemplative practice produces measurable changes in brain structure associated with reduced stress and improved focus.",
    "International climate negotiations have repeatedly struggled to achieve binding commitments from major emitting nations, highlighting the fundamental tension between national sovereignty and global collective action.",
    "The digital divide — the gap between those with reliable access to modern technology and those without — continues to exacerbate existing inequalities in education, employment, and civic participation.",
    "Demographic ageing in high-income countries is placing unprecedented fiscal pressure on pension systems and healthcare infrastructure while reducing the ratio of working-age to dependent populations.",
    "The ethical implications of autonomous weapons systems have prompted intense debate among legal scholars, ethicists, and military strategists regarding accountability, proportionality, and the laws of armed conflict.",
    "Research in educational psychology has consistently identified metacognitive skills — the ability to monitor and regulate one's own learning — as among the strongest predictors of academic achievement.",
    "The commodification of personal data by technology corporations raises fundamental questions about privacy, consent, and the appropriate limits of commercial surveillance in democratic societies.",
    "Structural racism embedded within institutions and social systems continues to produce measurable disparities in health, wealth, and educational attainment across racial and ethnic groups.",
    "The shift towards a knowledge-based economy has elevated the importance of higher-order cognitive skills such as analysis, synthesis, and creative problem-solving relative to routine procedural competencies.",
    "Renewable energy technologies have experienced dramatic reductions in cost over the past decade, making solar and wind power increasingly competitive with conventional fossil fuel generation.",
    "The psychological impact of long-term unemployment extends well beyond financial hardship, encompassing loss of identity, social isolation, and significantly elevated risk of mental health disorders.",
    "Cultural heritage preservation in an era of rapid urbanisation requires careful policy frameworks that balance the demands of economic development with the intrinsic value of historical continuity.",
    "The application of big data analytics in healthcare has the potential to dramatically improve diagnostic accuracy, treatment personalisation, and the early identification of population-level health trends.",
    "Political polarisation in many liberal democracies has been exacerbated by social media algorithms that create ideological filter bubbles, reducing exposure to dissenting perspectives and nuanced debate.",
    "The tension between intellectual property rights and the open dissemination of knowledge is particularly acute in the field of scientific research, where restricted access can impede medical and technological progress.",
    "Mass tourism has brought economic benefits to many developing regions while simultaneously threatening fragile ecosystems, eroding local cultural practices, and placing unsustainable pressure on public infrastructure.",
    "The linguistic relativity hypothesis suggests that the language we speak shapes not only how we communicate but also how we perceive, categorise, and reason about the world around us.",
    "Advances in battery storage technology are a critical prerequisite for the large-scale integration of intermittent renewable energy sources into national electricity grids.",
    "The increasing prevalence of non-communicable diseases such as obesity, diabetes, and cardiovascular conditions reflects a complex interaction of genetic predisposition, dietary habits, and sedentary modern lifestyles.",
    "Post-colonial theory challenges dominant narratives of historical progress by foregrounding the experiences and perspectives of communities subjected to imperial domination and systematic exploitation.",
    "The growing movement for corporate social responsibility reflects a broader recognition that business enterprises have obligations to their communities and the natural environment that extend beyond shareholder returns.",
    "Early childhood intervention programmes targeting nutritional, cognitive, and emotional development in disadvantaged communities have been shown to generate substantial long-term social and economic returns.",
    "The proliferation of misinformation in digital environments has made media literacy an essential competency for informed citizenship in contemporary democratic societies.",
    "Inclusive urban planning that prioritises pedestrian access, green space, and affordable housing has been shown to improve social cohesion, mental health, and overall quality of urban life.",
    "The distinction between economic migrants and refugees under international law has become increasingly difficult to maintain as environmental factors and political instability interact in complex ways.",
    "Advances in quantum computing have the potential to render current cryptographic security protocols obsolete, posing serious challenges for the protection of sensitive digital communications and infrastructure.",
    "The relationship between democratic governance and economic development remains a subject of vigorous academic debate, with evidence suggesting that institutional quality matters more than regime type alone.",
    "The global water crisis — characterised by increasing scarcity, poor distribution, and declining quality — poses a fundamental threat to agricultural productivity, public health, and geopolitical stability.",
    "Neuroimaging studies have provided compelling evidence that musical training during childhood produces structural and functional changes in the brain associated with enhanced language processing and mathematical reasoning.",
    "The financialisation of housing markets in many major cities has driven property prices beyond the reach of ordinary workers, exacerbating inequality and fuelling social discontent.",
    "Artificial intelligence systems trained on historically biased datasets risk perpetuating and amplifying existing social inequalities when deployed in high-stakes domains such as criminal justice and credit allocation.",
    "The transition to a circular economy — in which waste is minimised through the reuse, repair, and recycling of materials — offers a compelling alternative to the conventional linear model of production and consumption.",
    "International development organisations have increasingly recognised that sustainable poverty reduction requires attention not only to economic growth but also to governance, gender equality, and environmental sustainability.",
    "The emergence of platform economies has created new forms of flexible employment while simultaneously undermining traditional labour protections, benefits, and the collective bargaining power of workers.",
    "Epidemiological modelling played a central role in informing policy responses to the global pandemic, demonstrating both the power and the limitations of mathematical approaches to complex social phenomena.",
    "The philosophy of education has long debated whether the primary purpose of schooling is to transmit cultural knowledge, develop individual capacities, or prepare students for participation in civic and economic life.",
    "Rapid advances in biotechnology are generating profound ethical dilemmas regarding genetic modification, reproductive medicine, and the appropriate boundaries of human enhancement.",
    "The securitisation of migration policy in many Western nations reflects broader anxieties about cultural identity, economic competition, and the perceived erosion of national sovereignty.",
    "The measurement of national well-being solely through gross domestic product has been widely criticised for failing to capture dimensions of health, education, environmental quality, and social cohesion.",
    "Peer learning communities, in which students take responsibility for explaining concepts to one another, have been shown to produce deeper understanding than passive reception of instruction.",
    "The historical relationship between colonialism and the extraction of natural resources continues to shape patterns of economic development and political power in formerly colonised regions.",
    "Advances in telemedicine and remote patient monitoring are expanding access to specialist healthcare in underserved rural communities while reducing costs and improving continuity of care.",
    "The question of how democratic societies should regulate the power of large technology corporations raises fundamental tensions between innovation, competition, free expression, and public accountability.",
    "Social capital — defined as the networks of trust, reciprocity, and civic engagement within a community — has been identified as a critical determinant of economic resilience and collective well-being.",
    "The integration of arts education into school curricula has been associated with improved student engagement, creative thinking, and cross-disciplinary problem-solving capacities.",
    "Longitudinal research on human happiness consistently identifies strong social relationships, purposeful work, and a sense of autonomy as the primary drivers of subjective well-being across cultures.",
    "The outsourcing of manufacturing to lower-wage economies has delivered significant consumer benefits in high-income countries while contributing to the deindustrialisation and economic marginalisation of working-class communities.",
    "Advances in natural language processing are enabling machines to generate coherent and contextually appropriate text, raising complex questions about authorship, creativity, and the future of human communication.",
    "The growing body of evidence linking early-life stress to adverse developmental outcomes underscores the critical importance of supportive family environments and community services during the formative years.",
    "Deforestation driven by agricultural expansion, illegal logging, and infrastructure development continues to threaten the ecological integrity of tropical rainforests and the communities that depend on them.",
    "The concept of intersectionality offers a powerful analytical framework for understanding how overlapping systems of race, gender, class, and other social categories interact to shape individual experience.",
    "International cooperation on nuclear non-proliferation faces persistent challenges from the tension between the disarmament obligations of nuclear states and the security calculations of potential proliferators.",
    "The growing recognition of the rights of indigenous peoples to cultural self-determination and control over ancestral lands represents a significant development in international human rights law.",
    "Automation and algorithmic management in the workplace raise important questions about worker dignity, autonomy, and the appropriate limits of employer surveillance and control.",
    "The relationship between diet, the gut microbiome, and mental health is an emerging area of research with potentially transformative implications for the treatment of depression and anxiety disorders.",
    "Philanthropic foundations have assumed an increasingly prominent role in shaping global health, education, and development policy, raising questions about accountability and democratic legitimacy.",
    "The commercialisation of outer space by private enterprises represents a new frontier of economic and geopolitical competition with profound implications for international law and governance.",
    "Evidence-based policy making requires not only rigorous research but also the political will to act on findings that may be inconvenient for powerful interests or prevailing ideological assumptions.",
    "The paradox of choice suggests that an abundance of options can paradoxically reduce satisfaction and increase the difficulty of making confident decisions in both commercial and personal contexts.",
    "Widespread digital surveillance by both state and corporate actors poses fundamental challenges to privacy, civil liberties, and the conditions necessary for free and open democratic participation.",
    "The relationship between language and identity is particularly salient for minority linguistic communities whose cultural heritage is bound up in languages under pressure from dominant national tongues.",
    "Higher education institutions are facing growing pressure to demonstrate the economic returns of their programmes while simultaneously preserving their commitment to liberal learning and intellectual inquiry.",
    "The global burden of mental illness remains vastly underestimated and undertreated, reflecting persistent stigma, inadequate funding, and a shortage of trained mental health professionals in most countries.",
    "Restorative justice approaches that bring offenders, victims, and communities together in structured dialogue have shown promising results in reducing reoffending and repairing social harm.",
    "The architecture of cities both reflects and reinforces social hierarchies, with decisions about zoning, transport, and public space having profound consequences for equality and community cohesion.",
    "Food security in an era of population growth, climate volatility, and finite arable land requires fundamental transformations in agricultural systems and patterns of consumption.",
    "The tension between protecting freedom of expression and preventing the spread of harmful content online represents one of the most difficult regulatory challenges of the digital age.",
    "Longitudinal studies of academic performance have consistently identified teacher quality as the most significant school-level factor influencing student learning outcomes across all socioeconomic groups.",
    "The phenomenon of brain drain — the emigration of highly skilled and educated individuals from developing to developed nations — represents a significant constraint on economic growth in countries of origin.",
    "Neoliberal economic policies implemented over the past four decades have been associated with rising productivity and consumer welfare alongside increasing inequality and the erosion of public services.",
    "The study of history equips citizens with the critical perspective necessary to understand the present, identify recurring patterns of human behaviour, and resist manipulation by political actors.",
    "Advances in materials science are enabling the development of lighter, stronger, and more sustainable products with transformative applications across industries from aerospace to construction.",
    "The increasing frequency and intensity of extreme weather events attributed to anthropogenic climate change is already causing significant human suffering and economic loss in vulnerable regions around the world.",
    "Public trust in scientific institutions is an essential component of evidence-based governance and has been severely strained in recent years by misinformation, politicisation, and perceived conflicts of interest.",
    "The right to clean water and adequate sanitation has been recognised as a fundamental human right by the United Nations, yet billions of people still lack reliable access to these basic necessities.",
    "Intercultural communication competence — the ability to navigate effectively and respectfully across cultural boundaries — is increasingly essential in a world of intensifying global mobility and interconnection.",
    "The widespread adoption of smartphones and social media has fundamentally altered patterns of human attention, social interaction, and the consumption and production of cultural content.",
    "Regulatory frameworks for the governance of artificial intelligence must grapple with questions of transparency, accountability, and the prevention of algorithmic harms in high-stakes decision-making contexts.",
    "The concept of planetary boundaries defines the ecological limits within which humanity can safely operate, and current evidence suggests that several of these boundaries have already been transgressed.",
    "Peer-reviewed academic publishing faces a crisis of credibility driven by replication failures, publication bias, and the perverse incentives created by impact factor metrics and institutional prestige.",
    "The integration of refugees into host societies presents complex challenges related to language acquisition, cultural adaptation, labour market access, and social cohesion that require sustained and well-resourced policy responses.",
    "The commercialisation of academic research through industry partnerships and intellectual property regimes raises concerns about the independence of scientific inquiry and the openness of knowledge production.",
    "Digital platforms have disrupted traditional media business models, with far-reaching consequences for journalism, democratic accountability, and the economic sustainability of local news ecosystems.",
    "The ethics of gene editing in human embryos raises profound questions about the boundaries of medical intervention, the nature of disability, and the risk of exacerbating existing social inequalities.",
    "Multilateral institutions established in the aftermath of the Second World War face growing legitimacy challenges as the distribution of global economic and political power shifts away from their founding members.",
    "The psychological concept of learned helplessness offers important insights into the ways in which repeated exposure to uncontrollable negative events can undermine motivation and adaptive coping behaviour.",
    "Investment in early childhood education yields some of the highest returns of any public expenditure, with benefits extending across health, educational attainment, and lifetime earnings.",
    "The proliferation of private tutoring and supplementary education is widening the gap between students from affluent and disadvantaged backgrounds, undermining the meritocratic promise of public schooling.",
    "The management of shared global commons — including the atmosphere, oceans, and biodiversity — requires unprecedented levels of international cooperation in the face of powerful free-rider incentives.",
    "Artificial general intelligence, if achieved, would represent a technological discontinuity of extraordinary significance, potentially surpassing human cognitive capabilities across virtually all domains of intellectual activity.",
    "The ageing of populations in high-income countries is driving growing demand for long-term care services while simultaneously reducing the tax base available to fund them, creating a looming fiscal crisis.",
    "The increasing prevalence of chronic loneliness in modern societies has been linked to a range of adverse health outcomes comparable in severity to the effects of smoking fifteen cigarettes per day.",
    "Sustainable agriculture must balance the imperative to increase food production for a growing global population with the need to preserve soil health, water quality, and ecological integrity.",
    "The historical marginalisation of women in science, technology, engineering, and mathematics reflects deep structural and cultural barriers that persist despite significant progress in formal legal equality.",
    "Urban heat islands — areas of cities that are significantly warmer than surrounding rural areas due to human activity and reduced vegetation — are expected to intensify as global temperatures rise.",
    "The capacity for critical self-reflection is what distinguishes education from mere training and remains the central purpose of a genuinely liberal and humanistic approach to learning.",
    "The expansion of global supply chains has created enormous efficiencies while simultaneously increasing systemic vulnerability to disruption from geopolitical conflict, natural disasters, and pandemics.",
    "Behavioural interventions that leverage insights from psychology to nudge individuals towards healthier and more sustainable choices have shown considerable promise as complements to traditional regulatory approaches.",
    "The philosophical tradition of Stoicism offers enduring insights into the cultivation of resilience, equanimity, and the distinction between what lies within and beyond our sphere of influence.",
    "The globalisation of higher education has created new opportunities for international student mobility while also raising concerns about academic dependency, brain drain, and the commodification of knowledge.",
    "Advances in solar photovoltaic technology have driven extraordinary reductions in the cost of electricity generation, positioning solar power as a cornerstone of the global energy transition.",
    "The concept of social entrepreneurship seeks to harness market mechanisms and innovative thinking to address social and environmental problems that conventional businesses and governments have failed to solve.",
    "The emergence of global cities as nodes of finance, culture, and innovation has created new forms of cosmopolitan identity while simultaneously deepening spatial inequalities within and between nations.",
    "Cognitive load theory suggests that effective instructional design must carefully manage the demands placed on working memory to prevent overload and optimise the transfer of knowledge to long-term memory.",
    "The tension between national security imperatives and the protection of civil liberties in the context of counter-terrorism policy represents a persistent and difficult challenge for liberal democratic states.",
    "Research on the science of expertise consistently demonstrates that outstanding performance in any domain is the product of deliberate and sustained practice rather than innate talent or natural ability.",
    "The increasing privatisation of public services raises fundamental questions about equity, accountability, and the proper role of the market in delivering goods that are essential to human dignity.",
    "International financial institutions have faced sustained criticism for imposing structural adjustment programmes that prioritise macroeconomic stability over social protection and human development outcomes.",
    "The sociological concept of cultural capital helps explain how social inequalities are reproduced across generations through differential access to educational resources, social networks, and cultural knowledge.",
    "The development of mRNA vaccine technology during the global pandemic demonstrated the extraordinary potential of scientific innovation when combined with adequate funding, political will, and international collaboration.",
    "The fragmentation of political authority and the erosion of trust in traditional institutions have created fertile conditions for the rise of populist movements that challenge established democratic norms.",
    "Strategic communication in professional contexts requires not only clarity of expression but also careful attention to audience, purpose, register, and the potential consequences of miscommunication.",
    "The relationship between economic growth and environmental sustainability has been conceptualised in terms of the environmental Kuznets curve, though the empirical evidence for this relationship remains contested.",
    "The governance of the internet raises complex multi-stakeholder questions about jurisdiction, censorship, privacy, and the appropriate allocation of authority between national governments and global platform companies.",
    "Advances in remote sensing and geospatial technology are transforming environmental monitoring, disaster response, and agricultural management by providing unprecedented access to real-time earth observation data.",
    "The ethics of artificial intelligence requires not only technical expertise but also engagement with philosophy, law, social science, and the perspectives of communities most affected by algorithmic decision-making.",
    "The growing body of research on teacher professional development underscores the importance of sustained, collaborative, and practice-focused learning opportunities over one-off training events.",
    "The right to an adequate standard of living — including food, housing, healthcare, and social security — is enshrined in international human rights law but remains unrealised for hundreds of millions of people.",
    "The concept of resilience in ecology, psychology, and systems theory offers a powerful framework for understanding how complex adaptive systems absorb disturbance and reorganise in the face of change.",
    "The historical development of modern science through the processes of peer review, replication, and cumulative knowledge building represents one of humanity's most significant intellectual achievements.",
    "The tension between protecting local industries and embracing the efficiency gains of free trade has been a defining feature of international economic policy debates throughout the modern era.",
    "Transdisciplinary research that bridges the natural sciences, social sciences, and humanities is increasingly essential for addressing complex real-world problems that defy solution within a single disciplinary framework.",
    "The psychological phenomenon of confirmation bias — the tendency to seek out and interpret information in ways that confirm pre-existing beliefs — poses a fundamental challenge to rational public discourse.",
    "Climate adaptation strategies must account not only for physical changes in temperature and precipitation but also for the complex social, economic, and political dimensions of vulnerability and risk.",
    "The debate over the merits of standardised testing in education reflects deeper disagreements about the purposes of schooling, the nature of intelligence, and the appropriate role of accountability in public systems.",
    "Achieving gender equality requires not only removing formal legal barriers but also addressing deeply embedded cultural norms, institutional biases, and structural inequalities in the distribution of paid and unpaid work.",
    "The philosophy of mind continues to grapple with the hard problem of consciousness — the question of why and how physical processes in the brain give rise to subjective experience.",
    "Effective public health communication requires an understanding of the psychological, social, and cultural factors that shape how individuals perceive and respond to health risks and policy interventions.",
    "The commodification of attention by digital platforms has created a powerful economic incentive to maximise engagement at the expense of user well-being, informed discourse, and democratic participation.",
    "The history of science is replete with examples of revolutionary paradigm shifts in which the accumulated weight of anomalous evidence eventually forces the replacement of one theoretical framework with another.",
    "The growing recognition of non-human animal sentience and cognitive complexity has profound implications for the ethics of industrial agriculture, biomedical research, and wildlife conservation.",
    "Financial markets play a critical role in allocating capital to its most productive uses, but their tendency towards instability and speculative excess also poses systemic risks to the broader economy.",
    "The relationship between population density, social interaction, and the transmission of infectious disease has been a central concern of epidemiology since the pioneering work of John Snow in the nineteenth century.",
    "The proliferation of data and the development of sophisticated analytical tools have created new possibilities for evidence-based decision-making in domains ranging from medicine to urban planning.",
    "The capacity for languages to evolve, adapt, and borrow from one another reflects the dynamic and deeply social nature of human communication and the fluidity of cultural boundaries.",
    "Achieving net-zero carbon emissions by the middle of this century will require not only technological innovation but also fundamental changes in land use, consumption patterns, and economic incentive structures.",
    "The sociology of education examines how schools function not merely as sites of knowledge transmission but as institutions that reproduce social hierarchies and shape individual identity and opportunity.",
    "The global governance of pandemics requires strengthened international health regulations, improved surveillance systems, and more equitable mechanisms for the distribution of vaccines and medical countermeasures.",
    "The concept of distributive justice concerns the fair allocation of benefits and burdens within society and has been at the centre of political philosophy at least since the work of John Rawls.",
    "The rapid pace of technological change is outstripping the capacity of regulatory institutions and legal frameworks to adapt, creating governance gaps that expose citizens to novel and poorly understood risks.",
    "The interdependence of global economic systems means that financial crises, supply chain disruptions, and policy decisions in major economies can rapidly transmit shocks across national borders.",
    "The philosophy of language investigates the relationship between words and the world they describe, exploring questions of meaning, reference, interpretation, and the limits of linguistic expression.",
    "Participatory approaches to urban planning that actively involve residents in decisions about their neighbourhoods have been shown to produce more equitable, sustainable, and socially cohesive outcomes.",
    "The expanding global middle class represents both a remarkable achievement of economic development and a source of growing pressure on natural resources and carbon budgets.",
    "The ecological footprint concept quantifies the extent to which human economic activity is drawing on natural resources faster than the Earth's ecosystems can regenerate them.",
    "Post-traumatic growth research suggests that many individuals who experience significant adversity subsequently report profound positive changes in their relationships, values, and sense of personal strength.",
    "The governance of artificial intelligence in high-stakes domains requires robust mechanisms for transparency, independent auditing, and meaningful recourse for those harmed by algorithmic decisions.",
    "Structural barriers to social mobility — including unequal access to quality education, professional networks, and inherited wealth — persist in many societies despite formal commitments to meritocracy.",
    "The historical role of women in scientific discovery has been systematically overlooked and undervalued, reflecting broader patterns of gender bias in the production and recognition of knowledge.",
    "Effective environmental regulation requires not only setting ambitious standards but also ensuring that enforcement mechanisms are adequately resourced and free from capture by regulated industries.",
    "The growing prevalence of urban farming and community gardening initiatives reflects both a renewed interest in local food production and a broader movement to reclaim public space for collective benefit.",
    "The philosophy of aesthetics asks fundamental questions about the nature of beauty, the criteria for artistic value, and the relationship between art and the broader social and historical context of its creation.",
    "Intercultural dialogue and mutual understanding are more essential than ever in a world where the movement of people, ideas, and goods across borders is accelerating at an unprecedented rate.",
    "The challenge of building a just and sustainable global order requires grappling honestly with the legacies of colonialism, slavery, and structural inequality that continue to shape the present."
  ]
};


// ── TYPING PRACTICE ENGINE v2 (clean rewrite) ───────────────

// ── State ───────────────────────────────────────────────────
let tpLevel       = 'beginner';
let tpFontPx      = 17;
let tpWords       = [];          // current passage words
let tpTargetText  = '';          // tpWords joined by spaces
let tpStartTime   = null;        // when the whole SESSION started (never resets mid-session)
let tpTimer       = null;        // interval for live stat updates
let tpDone        = false;       // true when current passage is fully typed
let tpErrors      = 0;           // errors in the current passage

// Session accumulators (across all passages until Submit)
let tpSessChars   = 0;
let tpSessErrors  = 0;
let tpSessPassages= 0;

// Passage history for prev/next navigation
// Each entry: { words: [], typed: '' }
let tpHistory     = [];
let tpHistIdx     = -1;          // -1 = live (current) passage
let tpCustomWords = [];          // the user's pasted "custom" text, kept so it can repeat on advance
let tpLiveWords   = null;        // snapshot of the live passage's words, saved when navigating away via "prev"
let tpLiveTyped   = "";          // snapshot of what had been typed into it so far

const TP_TARGET_WORDS = 45;

// ── Storage helpers ─────────────────────────────────────────
function tpStorageKey(l){ return 'tp_best_wpm_' + l; }
function tpGetBest(l){ try{ return parseInt(localStorage.getItem(tpStorageKey(l))||'0',10)||0; }catch(e){ return 0; } }
function tpSetBestIfHigher(l, wpm){
  const cur = tpGetBest(l);
  if(wpm > cur){ try{ localStorage.setItem(tpStorageKey(l), String(wpm)); }catch(e){} return wpm; }
  return cur;
}
function tpGetLocalHistory(){ try{ return JSON.parse(localStorage.getItem('tp_history')||'[]'); }catch(e){ return []; } }
function tpSaveLocalHistory(entry){
  const h = tpGetLocalHistory(); h.unshift(entry);
  while(h.length>30) h.pop();
  try{ localStorage.setItem('tp_history', JSON.stringify(h)); }catch(e){}
}

// ── Level / Custom ──────────────────────────────────────────
function tpSetLevel(level, btn){
  tpLevel = level;
  document.querySelectorAll('.tp-lvl').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const customBox = document.getElementById('tpCustomBox');
  if(level === 'custom'){
    customBox.style.display = 'block';
    document.getElementById('tpStream').innerHTML =
      '<span style="color:rgba(255,255,255,0.25);font-size:14px">Paste your text above and click Start Typing →</span>';
    document.getElementById('tpHiddenInput').disabled = true;
  } else {
    customBox.style.display = 'none';
    tpStartFresh();
  }
}

function tpCustomCount(){
  const txt = document.getElementById('tpCustomInput').value.trim();
  const words = txt ? txt.split(/\s+/).length : 0;
  const lbl = document.getElementById('tpCustomCountLbl');
  lbl.textContent = words + ' / 300 words';
  lbl.style.color = words > 300 ? '#f87171' : 'var(--muted)';
}

function tpStartCustom(){
  const txt = document.getElementById('tpCustomInput').value.trim();
  if(!txt){ alert('Please paste some text first.'); return; }
  const words = txt.split(/\s+/);
  if(words.length > 300){ alert('Please keep your text under 300 words. Currently: ' + words.length); return; }
  tpCustomWords = words;
  tpWords = words;
  tpStartFresh();
}

// ── Build passage ───────────────────────────────────────────
function tpBuildPassage(level){
  if(level === 'custom'){
    return tpCustomWords.slice(); // repeat the user's pasted text rather than falling back to beginner
  }
  const passages = TP_PASSAGES[level] || TP_PASSAGES.beginner;
  const shuffled = passages.slice().sort(() => Math.random() - 0.5);
  let words = [];
  for(let s of shuffled){
    words = words.concat(s.trim().split(/\s+/).filter(Boolean));
    if(words.length >= TP_TARGET_WORDS) break;
  }
  return words; // never sliced — always ends at a complete sentence
}

// ── Session control ─────────────────────────────────────────

// Full fresh start — resets everything including timer and history
function tpStartFresh(){
  clearInterval(tpTimer);
  tpStartTime    = null;
  tpSessChars    = 0;
  tpSessErrors   = 0;
  tpSessPassages = 0;
  tpHistory      = [];
  tpHistIdx      = -1;
  tpLiveWords    = null;
  tpLiveTyped    = "";
  tpWords = tpBuildPassage(tpLevel);
  tpLoadPassage(tpWords, '');
  tpDisplayStats();
  document.getElementById('tpSummary').style.display = 'none';
}

// Restart = same as fresh start but keeps level
function tpRestart(){ tpStartFresh(); }

// Load a passage into the UI. typed = '' for live, or previous typed string for review.
function tpLoadPassage(words, typed){
  tpWords      = words;
  tpTargetText = words.join(' ');
  tpDone       = typed.length >= tpTargetText.length && typed.length > 0;
  // Recompute errors for whatever text is being restored (e.g. resuming an
  // in-progress passage after "prev") instead of always assuming zero.
  let errs = 0;
  for(let i = 0; i < typed.length; i++){
    if(typed[i] !== tpTargetText[i]) errs++;
  }
  tpErrors = errs;

  // Clean up any review bar
  const bar = document.getElementById('tpReviewBar');
  if(bar) bar.remove();

  // Restore stream wrapper to live mode
  const wrap = document.getElementById('tpStreamWrap');
  if(wrap){
    wrap.onclick = () => document.getElementById('tpHiddenInput').focus();
    wrap.style.cursor = 'text';
    wrap.style.opacity = '1';
    wrap.style.pointerEvents = 'auto';
  }

  // Reset input
  const inp = document.getElementById('tpHiddenInput');
  inp.value   = typed;
  inp.disabled= false;

  tpRenderStream(typed);
  tpRenderBest();
  tpUpdateNavButtons();
  inp.focus();
  // Put the cursor at the end of any restored progress so typing resumes
  // where it left off, instead of jumping to the start of the text.
  if(typed.length > 0 && inp.setSelectionRange) inp.setSelectionRange(typed.length, typed.length);
}

// ── Navigation ──────────────────────────────────────────────

// Called when a passage is fully typed — save to history, keep timer, load next
function tpPassageComplete(){
  const inp = document.getElementById('tpHiddenInput');
  // Save completed passage to history
  tpHistory.push({ words: tpWords.slice(), typed: inp.value });
  // Accumulate session stats
  tpSessChars    += inp.value.length;
  tpSessErrors   += tpErrors;
  tpSessPassages += 1;
  // Auto-advance to next passage — timer keeps running, no reset
  tpHistIdx = -1;
  tpWords   = tpBuildPassage(tpLevel);
  tpLoadPassage(tpWords, '');
  // Do NOT touch tpStartTime or tpTimer — keep counting
}

function tpPrevText(){
  const inp = document.getElementById('tpHiddenInput');
  if(tpHistory.length === 0 && tpHistIdx === -1){ return; } // nothing to go back to
  // Remember exactly which passage was live AND what had been typed into it,
  // so returning via "next" resumes right where you left off — nothing lost.
  if(tpHistIdx === -1){
    tpLiveWords = tpWords.slice();
    tpLiveTyped = inp ? inp.value : "";
  }
  if(tpHistIdx === -1) tpHistIdx = tpHistory.length - 1;
  else tpHistIdx = Math.max(0, tpHistIdx - 1);
  tpShowReview();
}

function tpNextText(){
  // Block next text while on a live incomplete passage — you can look back at
  // past passages any time, but skipping forward past an unfinished one isn't allowed.
  if(tpHistIdx === -1){
    const inp = document.getElementById('tpHiddenInput');
    if(inp && inp.value.length > 0 && !tpDone){
      return; // do nothing — must finish current passage first
    }
    // Passage complete or nothing typed yet — load new passage
    tpWords = tpBuildPassage(tpLevel);
    tpLoadPassage(tpWords, '');
    return;
  }
  // In review mode — move forward through history
  tpHistIdx++;
  if(tpHistIdx >= tpHistory.length){
    // Reached end of history — back to the live passage.
    // Restore the exact passage AND typed progress that were live before we
    // navigated into review, rather than generating a brand new empty one,
    // so a prev->next round trip resumes exactly where you left off.
    tpHistIdx = -1;
    const words = tpLiveWords ? tpLiveWords.slice() : tpBuildPassage(tpLevel);
    const typed = tpLiveWords ? tpLiveTyped : '';
    tpLiveWords = null;
    tpLiveTyped = "";
    tpLoadPassage(words, typed);
  } else {
    tpShowReview();
  }
}

// Show a history entry in review mode
function tpShowReview(){
  const entry = tpHistory[tpHistIdx];
  if(!entry) return;

  const bar = document.getElementById('tpReviewBar');
  if(bar) bar.remove();

  tpWords      = entry.words.slice();
  tpTargetText = tpWords.join(' ');
  tpDone       = false;

  // Render with previous typed text so errors show correctly
  tpRenderStream(entry.typed);

  // Typed chars: selectable + clickable. Pending: not.
  const stream = document.getElementById('tpStream');
  stream.querySelectorAll('.tp-ok,.tp-bad').forEach(el => {
    el.style.userSelect   = 'text';
    el.style.pointerEvents= 'auto';
    el.style.cursor       = 'text';
  });
  stream.querySelectorAll('.tp-pending').forEach(el => {
    el.style.userSelect   = 'none';
    el.style.pointerEvents= 'none';
    el.style.cursor       = 'default';
  });

  // Review bar — no retype button
  const total = tpHistory.length;
  const idx   = tpHistIdx + 1;
  const newBar = document.createElement('div');
  newBar.id        = 'tpReviewBar';
  newBar.className = 'tp-review-bar';
  newBar.innerHTML = `
    <span>📖 Passage ${idx} of ${total} &nbsp;·&nbsp;
      <span style="color:#4ade80">■</span> correct &nbsp;
      <span style="color:#f87171">■</span> error</span>`;
  stream.parentNode.insertBefore(newBar, stream.nextSibling);

  // Input: load what was typed so user can see/continue, but don't auto-focus
  const inp     = document.getElementById('tpHiddenInput');
  inp.value     = entry.typed;
  inp.disabled  = true;

  const wrap = document.getElementById('tpStreamWrap');
  if(wrap){
    wrap.onclick = null;
    wrap.style.cursor = 'default';
  }
  tpUpdateNavButtons();
}

function tpUpdateNextBtn(){
  const btn = document.getElementById('tpNextBtn');
  if(!btn) return;
  const blocked = tpHistIdx === -1 && !tpDone;
  btn.style.opacity       = blocked ? '0.3' : '1';
  btn.style.cursor        = blocked ? 'not-allowed' : 'pointer';
  btn.style.pointerEvents = blocked ? 'none' : 'auto';
  btn.title = blocked ? 'Finish the current passage first' : '';
}
function tpUpdatePrevBtn(){
  const btn = document.getElementById('tpPrevBtn');
  if(!btn) return;
  const nothingToGoBackTo = tpHistIdx === -1 && tpHistory.length === 0;
  const atOldestReview = tpHistIdx === 0;
  const blocked = nothingToGoBackTo || atOldestReview;
  btn.style.opacity       = blocked ? '0.3' : '1';
  btn.style.cursor        = blocked ? 'not-allowed' : 'pointer';
  btn.style.pointerEvents = blocked ? 'none' : 'auto';
  btn.title = blocked ? 'No earlier passage to show' : '';
}
function tpUpdateNavButtons(){
  tpUpdateNextBtn();
  tpUpdatePrevBtn();
}
// Called from index.html's page router when navigating away from Typing Practice,
// so the 500ms stats timer doesn't keep running in the background indefinitely.
function tpCleanup(){
  clearInterval(tpTimer);
}
function tpOnInput(){
  if(tpDone) return;
  if(tpHistIdx !== -1) return; // reviewing a past passage — read-only, never re-count it
  const inp   = document.getElementById('tpHiddenInput');
  const typed = inp.value;

  // Start session timer on first keystroke
  if(!tpStartTime && typed.length > 0){
    tpStartTime = Date.now();
    tpTimer = setInterval(tpDisplayStats, 500);
  }

  // Count errors (chars typed that don't match target)
  let errs = 0;
  for(let i = 0; i < typed.length; i++){
    if(typed[i] !== tpTargetText[i]) errs++;
  }
  tpErrors = errs;

  tpRenderStream(typed);
  tpDisplayStats();

  // Passage complete
  if(typed.length >= tpTargetText.length){
    tpDone = true;
    tpPassageComplete();
  }
}

// ── Stats display ────────────────────────────────────────────
function tpDisplayStats(){
  const wpmEl  = document.getElementById('tpWpm');
  const accEl  = document.getElementById('tpAcc');
  const timeEl = document.getElementById('tpTime');
  const errEl  = document.getElementById('tpErrors');
  if(!wpmEl) return;

  if(!tpStartTime){
    wpmEl.textContent  = '0';
    accEl.textContent  = '100';
    timeEl.textContent = '0:00';
    errEl.textContent  = '0';
    return;
  }

  const elapsed = (Date.now() - tpStartTime) / 1000;
  const mins    = elapsed / 60;
  const secs    = Math.floor(elapsed);
  timeEl.textContent = Math.floor(secs/60) + ':' + String(secs%60).padStart(2,'0');

  // In review mode (tpHistIdx !== -1), inp.value holds the OLD passage text
  // which is already counted in tpSessChars — adding it again would double-count.
  // In live mode with nothing typed yet (curLen === 0), show last known WPM
  // instead of letting it drop to 0 just because the new passage is empty.
  const inp    = document.getElementById('tpHiddenInput');
  const curLen = (tpHistIdx === -1) ? (inp ? inp.value.length : 0) : 0;
  const curErrs= (tpHistIdx === -1) ? tpErrors : 0;

  const totalChars  = tpSessChars  + curLen;
  const totalErrors = tpSessErrors + curErrs;

  // Only update WPM/accuracy when there are chars to calculate from,
  // otherwise hold the last known value so it doesn't drop between passages
  if(totalChars > 0 && mins > 0){
    const netWords = Math.max(0, (totalChars - totalErrors) / 5);
    const wpm      = Math.round(netWords / mins);
    const acc      = Math.max(0, Math.round((1 - totalErrors/totalChars)*100));
    wpmEl.textContent = wpm;
    accEl.textContent = acc;
  }
  errEl.textContent = totalErrors;
}

function tpRenderBest(){
  const el = document.getElementById('tpBestBadge');
  if(!el) return;
  el.textContent = '🏆 Best ' + tpGetBest(tpLevel) + ' wpm';
}

// Returns {len, errs} for whatever live (not-yet-completed) progress currently
// exists, whether we're actively looking at it (tpHistIdx===-1) or it's
// stashed while browsing history (tpLiveWords set) — so it's never silently
// dropped from the final tally if the user submits while still in review.
function tpPendingLiveStats(){
  if(tpHistIdx === -1){
    const inp = document.getElementById('tpHiddenInput');
    return { len: inp ? inp.value.length : 0, errs: tpErrors };
  }
  if(tpLiveWords){
    const target = tpLiveWords.join(' ');
    let errs = 0;
    for(let i = 0; i < tpLiveTyped.length; i++){
      if(tpLiveTyped[i] !== target[i]) errs++;
    }
    return { len: tpLiveTyped.length, errs };
  }
  return { len: 0, errs: 0 };
}

// ── Submit session ───────────────────────────────────────────
function tpSubmitSession(){
  clearInterval(tpTimer);

  // Remove review bar if visible
  const bar = document.getElementById('tpReviewBar');
  if(bar) bar.remove();

  const inp = document.getElementById('tpHiddenInput');
  inp.disabled = true;

  const elapsed = tpStartTime ? (Date.now() - tpStartTime)/1000 : 0;
  const mins    = elapsed/60;

  // Count whatever live progress exists — even if the user is currently
  // parked in review mode with unsaved typing stashed — so it's never lost.
  const pending     = tpPendingLiveStats();
  const liveCurLen  = pending.len;
  const liveCurErrs = pending.errs;

  const totalChars  = tpSessChars  + liveCurLen;
  const totalErrors = tpSessErrors + liveCurErrs;
  const netWords    = Math.max(0, (totalChars - totalErrors)/5);
  const wpm         = mins > 0 ? Math.round(netWords/mins) : 0;
  const acc         = totalChars > 0 ? Math.max(0, Math.round((1 - totalErrors/totalChars)*100)) : 100;
  const secs        = Math.floor(elapsed);
  const timeStr     = Math.floor(secs/60)+':'+String(secs%60).padStart(2,'0');
  const passages    = tpSessPassages;

  const newBest = tpSetBestIfHigher(tpLevel, wpm);
  tpRenderBest();
  tpSaveLocalHistory({ date: new Date().toISOString(), level: tpLevel, wpm, acc });

  const stats = [
    ['⌨️ WPM', wpm], ['🎯 Accuracy', acc+'%'], ['⏱ Time', timeStr],
    ['❌ Errors', totalErrors], ['📝 Passages', passages], ['🏆 Best', newBest+' wpm']
  ];
  document.getElementById('tpSummaryStats').innerHTML = stats.map(([l,v])=>`
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:14px 10px">
      <div style="font-size:11px;color:var(--muted);margin-bottom:4px">${l}</div>
      <div style="font-size:22px;font-weight:800;color:#fff">${v}</div>
    </div>`).join('');
  document.getElementById('tpSummary').style.display = 'block';
  document.getElementById('tpStreamWrap').style.opacity = '0.3';
  document.getElementById('tpStreamWrap').style.pointerEvents = 'none';
}

// ── Font size ────────────────────────────────────────────────
function tpFontSize(delta){
  tpFontPx = Math.min(32, Math.max(13, tpFontPx + delta));
  document.getElementById('tpStream').style.fontSize = tpFontPx + 'px';
  document.getElementById('tpFontLbl').textContent = tpFontPx;
}

// ── Render stream ─────────────────────────────────────────────
function tpRenderStream(typed){
  let html = '';
  let pos  = 0;
  const caretPos   = typed.length;
  const nextIsSpace= tpTargetText[caretPos] === ' ';

  for(let w = 0; w < tpWords.length; w++){
    const word = tpWords[w];
    html += '<span class="tp-word">';
    for(let c = 0; c < word.length; c++){
      const ch = word[c];
      if(pos < caretPos){
        const ok = typed[pos] === ch;
        const isLastTyped = (pos === caretPos - 1) && nextIsSpace;
        html += `<span class="tp-ch ${ok?'tp-ok':'tp-bad'}${isLastTyped?' tp-caret-right':''}">${tpEsc(ch)}</span>`;
      } else if(pos === caretPos){
        html += `<span class="tp-ch tp-pending tp-caret">${tpEsc(ch)}</span>`;
      } else {
        html += `<span class="tp-ch tp-pending">${tpEsc(ch)}</span>`;
      }
      pos++;
    }
    html += '</span>';
    if(w < tpWords.length - 1){
      if(pos < caretPos){
        html += `<span class="tp-ch ${typed[pos]===' '?'tp-ok':'tp-bad'}"> </span>`;
      } else {
        html += `<span class="tp-ch tp-pending"> </span>`;
      }
      pos++;
    }
  }

  const box = document.getElementById('tpStream');
  box.innerHTML = html;
  const caret = box.querySelector('.tp-caret,.tp-caret-right');
  if(caret){
    const br = box.getBoundingClientRect();
    const cr = caret.getBoundingClientRect();
    if(cr.bottom > br.bottom - 10 || cr.top < br.top + 10){
      box.scrollTop += cr.top - br.top - box.clientHeight/2 + 20;
    }
  }
}

function tpEsc(ch){
  if(ch==='<') return '&lt;';
  if(ch==='>') return '&gt;';
  if(ch==='&') return '&amp;';
  return ch;
}

// ── History panel ─────────────────────────────────────────────
function tpToggleHistory(){
  const panel = document.getElementById('tpHistoryPanel');
  if(panel.style.display === 'block'){ panel.style.display = 'none'; return; }
  const hist = tpGetLocalHistory();
  if(hist.length === 0){
    panel.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px">No sessions yet.</div>';
  } else {
    panel.innerHTML = hist.map(h => {
      const d = new Date(h.date);
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px">
        <span style="color:var(--muted)">${d.toLocaleDateString()} · ${h.level}</span>
        <span style="color:#fff;font-weight:700">${h.wpm} wpm <span style="color:var(--muted)">(${h.acc}%)</span></span>
      </div>`;
    }).join('');
  }
  panel.style.display = 'block';
}
