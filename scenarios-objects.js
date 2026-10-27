/* Non-clinical practice calls. Fictional people, places and products. */
window.BWOS = window.BWOS || {};
window.BWOS.objectScenarios = [
{
  id: "headlamp",
  object: "A rechargeable headlamp",
  who: "Marcus",
  opening: "Tuesday, 7:15 a.m. You have fifteen minutes with Marcus Bell in the maintenance shop at Brookhaven Apartments before his techs head out. He agreed to the meeting because a property manager he trusts asked him to.",
  customer: {
    name: "Marcus Bell",
    sub: "Maintenance Supervisor, Brookhaven Apartments",
    fields: [
      ["The account", "Three buildings, 240 units, built 1978. Marcus runs a team of four maintenance techs."],
      ["Measured on", "Work-order close time, after-hours callouts, tenant complaint count."],
      ["How it works today", "Techs carry handheld flashlights. Most plumbing work happens under sinks and in crawlspaces."],
      ["History", "Bought a box of cheap headlamps from a big-box store last year. You heard they ended up in a drawer."],
      ["Your research", "<ul><li>The county building department's annual report listed plumbing as the top tenant complaint in rentals last year.</li><li>Brookhaven's owner reviews overtime every quarter.</li></ul>"],
      ["What you don't know yet", "How often light slows a job down, what it costs him, and who else cares."]
    ]
  },
  product: {
    name: "Ridgeback 600",
    sub: "Rechargeable work headlamp",
    fields: [
      ["What it is", "A hands-free headlamp, 600 lumens, USB-C rechargeable. About 6 hours on high, 20 on low."],
      ["The property that matters", "Light goes wherever the tech's eyes go, with both hands free. Recharges overnight on a shared USB-C strip, so there are no batteries to buy or lose."],
      ["Where it fits", "Under-sink, crawlspace, attic and panel work. Any job where a second person holds a light."],
      ["Honest boundary", "Splash-rated (IPX4), not waterproof. Not for submersion or a flooded crawlspace. Not rated for gas-leak environments."],
      ["Logistics", "$48 each or a 5-pack with a charging strip for $210. Free two-week trial for crews of four or more."]
    ]
  },
  rounds: [
    { stage: "Connect", label: "Open the call", task: "Open the call.",
      reply: "Pretty close. Half our tickets are under a sink or in a crawlspace.",
      options: [
        { ok: true, t: "The county's annual report listed plumbing as the top tenant complaint in rentals last year. How does that line up with what your team sees?", coach: "A sourced, outside fact about his world and an open question. Nothing about you or your bag yet." },
        { t: "I've got a hands-free headlamp that's going to change how your guys work on every job. Do you have five minutes for a quick look at it?", tag: "Pitch before Align", reply: "We tried headlamps. I've got ten minutes before the guys leave.", coach: "You opened with the product. He has already decided whether he needs it, and the answer is no." },
        { t: "I heard your team has been slow closing work orders lately, and the owner is watching overtime. Is that right, and what's going on with it?", tag: "About his performance", reply: "Who told you that? We close tickets fine.", coach: "Connect uses a parallel fact so the customer never has to defend himself. This one puts his team on trial." }
      ] },
    { stage: "Discover", label: "Open the conversation", task: "He gave you something. Get him talking.",
      reply: "Guy goes in on his back with a flashlight in his teeth. Half the time he yells for a second tech to come hold the light.",
      options: [
        { ok: true, t: "Tell me what one of those crawlspace jobs looks like for your guys, start to finish.", coach: "Open and neutral. He could answer it any way he wants, and he will tell you how the work really goes." },
        { t: "Wouldn't it be easier for your guys if they had both of their hands free down there?", tag: "Leading question", reply: "Sure. Wouldn't everything be easier.", coach: "This announces the answer and dares him to disagree. You learn nothing, and he hears a pitch coming." },
        { t: "So do your guys use flashlights for those jobs, or do they have something else for it?", tag: "Closed question", reply: "Flashlights.", coach: "A yes-or-no question gets a one-word answer. Use how, what, or tell me about." }
      ] },
    { stage: "Discover", label: "Keep him talking", task: "Get the next two sentences without adding anything of your own.",
      reply: "Yeah. Pulls somebody off another ticket for twenty minutes. And after the junk headlamps we bought last year, nobody here wants to hear about lights.",
      options: [
        { ok: true, t: "Come hold the light?", coach: "A mirror: his last few words, an upward inflection, then silence. He fills it with the detail you need." },
        { t: "I think you need a better process.", tag: "Judgment, not a label", reply: "My process is fine. My guys know what they're doing.", coach: "\"I think\" makes it your opinion. He defends his process instead of describing it." },
        { t: "Our headlamp fixes that.", tag: "Pitch before Align", reply: "Heard that before.", coach: "You have a story but no number and no agreement yet. The product has nothing to stand on." }
      ] },
    { stage: "Discover", label: "Name what he's thinking", task: "He just told you about the drawer full of dead headlamps. Defuse it.",
      reply: "That's exactly what I'm thinking. Batteries were dead by week three.",
      options: [
        { ok: true, t: "You're probably thinking this is another light that dies in a month and ends up in the drawer with the others.", coach: "An accusation audit. You said the negative thing first, so he doesn't have to. Now he can talk about it." },
        { t: "Those were cheap ones from a big-box store. Ours are built a lot better and they'll last you years.", tag: "Defending", reply: "That's what the last guy said about his.", coach: "Arguing with his experience makes him defend it. Name it instead." },
        { t: "Why did you go with the cheap ones instead of buying something that's actually rated for real work?", tag: "Blame", reply: "Because the owner signs the checks, not me.", coach: "This makes his past decision the subject. He is now defending a purchase instead of describing a job." }
      ] },
    { stage: "Diagnose", label: "Put a number on it", task: "Turn the story into his number.",
      reply: "Eight, ten a week, easy. Twenty minutes each. And some of those are after-hours calls, which is overtime.",
      options: [
        { ok: true, t: "In a typical week, how many tickets end up pulling a second tech just to hold the light?", coach: "Frequency in his units. Next, consequence and owner. He builds the number; you don't hand it to him." },
        { t: "So you're probably losing around ten labor hours a week to this. Does that sound right?", tag: "Your number, not his", reply: "I wouldn't say ten. Maybe.", coach: "A number you supply is a claim he can argue with. A number he supplies is a fact he owns." },
        { t: "What does your budget for tools and supplies look like for the rest of this year?", tag: "Skipped the problem", reply: "Tight. Why?", coach: "Budget talk before the cost of the problem is clear turns this into a price conversation." }
      ] },
    { stage: "Discover", label: "Earn \"that's right\"", task: "Summarize before you move to Align. Listen for the words.",
      reply: "That's right.",
      options: [
        { ok: true, t: "So most of your tickets are under sinks or in crawlspaces, eight to ten a week pull a second tech for twenty minutes just for light, and some of that lands on overtime. Did I get that right?", coach: "His situation, his number, his consequence, in his words. \"That's right\" means he feels understood. Now you've earned Align." },
        { t: "So lighting is a real problem for your team, it's costing you time and money every week, and you'd agree it's worth fixing before the owner looks at overtime again, right?", tag: "Problem framing", reply: "You're right, I guess.", coach: "\"You're right\" is a polite brush-off. You named a problem for him instead of reflecting what he said." },
        { t: "Got it, that all makes sense, and I've heard the same thing from other supervisors in town. So let me show you what the Ridgeback can actually do for your crew.", tag: "No checkpoint", reply: "OK, quick.", coach: "Without a summary you are aligning to what you assume, not to what he agreed." }
      ] },
    { stage: "Align", label: "Introduce the solution", task: "One product, one property, tied to his pain, with an honest boundary.",
      reply: "Hands-free and no batteries. OK. Does it really run a full shift?",
      options: [
        { ok: true, t: "Based on what you told me, the second tech is there to hold a light. The Ridgeback puts the light where his eyes go and recharges overnight on one strip, so nothing ends up in a drawer. It's splash-rated, not waterproof, so not for a flooded crawlspace.", coach: "His words, one property that answers his pain, and the honest limit. The boundary is why he believes the rest." },
        { t: "The Ridgeback puts out 600 lumens, has a red night mode, a magnetic rear clip, USB-C charging, six hours on high and twenty on low, splash resistance, and a two-year warranty, so it really covers everything.", tag: "Feature dump", reply: "OK. Lots of features.", coach: "Six features, none connected to the second tech or the overtime. He has to do the matching himself." },
        { t: "Based on what you told me, your crew needs better gear across the board. We carry work lights, cordless tools, tool bags and headlamps, so we can outfit all four techs in a single order.", tag: "Portfolio dump", reply: "We've got tools.", coach: "Offering everything tells him you didn't hear the one thing he said." }
      ] },
    { stage: "Advance", label: "Secure the next step", task: "Concrete, mutual, time-bound.",
      reply: "Fine. Bring them Monday. If my guys hate them, they go back.",
      options: [
        { ok: true, t: "Let's put one on each of your four techs for the two-week trial. I'll be here on the 15th at 7:15 to count second-tech calls with you.", coach: "A dated, mutual step that measures the exact number he gave you. A dated no beats an undated maybe." },
        { t: "Great. I'll email you a brochure and some pricing today, and then I'll check back in with you sometime next month to see where you're at.", tag: "Undated maybe", reply: "Sure. Send it over.", coach: "A continuation, not an advance. Nothing moves and nobody commits." },
        { t: "So can I put you down for fifty units today, so every tech has one and each building has spares in the shop?", tag: "Overreach", reply: "Fifty? I have four guys.", coach: "Ask for the next step the evidence supports. He agreed to a problem with four techs, not fifty headlamps." }
      ] }
  ]
},
{
  id: "cart",
  object: "A three-shelf utility cart",
  who: "Janelle",
  opening: "Thursday, 1:40 p.m. Lunch service just ended at Ridgeview Middle School. Janelle Ortiz, the food service manager, has twenty minutes in her office off the kitchen.",
  customer: {
    name: "Janelle Ortiz",
    sub: "Food Service Manager, Ridgeview Middle School",
    fields: [
      ["The account", "720 students, three lunch periods of 25 minutes each. A staff of six."],
      ["Measured on", "Students served per period, food temperature logs, staff injury reports."],
      ["How it works today", "Staff carry full pans from the kitchen down a 60-foot hallway to the serving line. Usually two trips per refill."],
      ["History", "The district bought carts three years ago. The wheels jammed on the kitchen door threshold and the carts went to storage."],
      ["Your research", "<ul><li>The state's school meal review found that students in lunch periods under 25 minutes leave more food uneaten.</li><li>The district added a staff injury line to its monthly safety report this year.</li></ul>"],
      ["What you don't know yet", "Where the line slows down, how often, and who notices."]
    ]
  },
  product: {
    name: "Haulwell HC-3",
    sub: "Three-shelf stainless utility cart",
    fields: [
      ["What it is", "Stainless cart, 3 shelves, 500 lb capacity, 24 inches wide."],
      ["The property that matters", "Five-inch rubber casters roll over thresholds up to 3/4 inch without lifting. One staff member moves a full refill in one trip."],
      ["Where it fits", "Kitchen-to-line transport, dish return, delivery receiving."],
      ["Honest boundary", "Not insulated and not a hot-holding cabinet. Pans stay covered and the run must stay short. Needs a doorway at least 26 inches wide."],
      ["Logistics", "$289. Free one-week loaner. We measure the threshold and doorway before delivery."]
    ]
  },
  rounds: [
    { stage: "Connect", label: "Open the call", task: "Open the call.",
      reply: "Ours are 25 minutes. By the time the last kids get through, they've got maybe twelve minutes to eat.",
      options: [
        { ok: true, t: "The state's meal review found students in lunch periods under 25 minutes leave more food uneaten. How does the clock work at Ridgeview?", coach: "A sourced fact from her world and an open question about the school. Nothing about carts." },
        { t: "I sell commercial utility carts, and I think one of ours could really help your kitchen get food out to the line faster. Can I show you?", tag: "Pitch before Align", reply: "We have carts. They're in storage.", coach: "You introduced the product before she said anything about her kitchen. She closed the door in one sentence." },
        { t: "Your students seem to wait a long time in line here at lunch. What's slowing your staff down during service?", tag: "About her performance", reply: "My staff works hard. The periods are short.", coach: "This tells her what's wrong with her operation. Connect never asks a customer to defend her results." }
      ] },
    { stage: "Discover", label: "Open the conversation", task: "Get her talking about how it works today.",
      reply: "The line moves until a pan runs out. Then somebody walks to the kitchen, and it's two trips with full pans.",
      options: [
        { ok: true, t: "Walk me through what happens on the serving line during that second period.", coach: "Open and neutral, about her process. She will show you exactly where the time goes." },
        { t: "Isn't the real problem that your staff has to carry heavy pans down that hallway?", tag: "Problem framing", reply: "I didn't say that was a problem.", coach: "You named a problem for her. Shape the conversation and let the challenge surface on its own." },
        { t: "Do you run out of food on the line, or does that not really happen here?", tag: "Closed question", reply: "Sometimes.", coach: "One word back. Ask how, what, or tell me about." }
      ] },
    { stage: "Discover", label: "Keep her talking", task: "Pull out the detail without adding your own.",
      reply: "Two trips. Sixty feet each way with a hotel pan, and the line just stands there. And before you ask, we tried carts.",
      options: [
        { ok: true, t: "Two trips?", coach: "A mirror. Her words, a rising tone, silence. She gave you the hallway, the wait, and the old carts." },
        { t: "What I'm hearing is your layout costs you time.", tag: "Label done wrong", reply: "The layout is the layout. I can't move the kitchen.", coach: "Labels start with \"it seems\" or \"it sounds like,\" never \"what I'm hearing.\" This one also blames something she can't change." },
        { t: "A cart would solve that.", tag: "Pitch before Align", reply: "We tried carts.", coach: "Too early. She hasn't given you a number or agreed to a summary." }
      ] },
    { stage: "Discover", label: "Name what she's thinking", task: "She mentioned the carts in storage. Get ahead of it.",
      reply: "Pretty much. The wheels caught on the door every single time.",
      options: [
        { ok: true, t: "You're probably thinking this is the same cart as last time, and it'll be in storage by Christmas.", coach: "An accusation audit. Saying her objection out loud takes the charge out of it." },
        { t: "Those district carts were junk. Ours are a completely different design, and they're built for school kitchens.", tag: "Defending", reply: "Everybody says theirs is different.", coach: "Defending the product starts an argument you can't win. Name what she's thinking instead." },
        { t: "Who picked out those carts three years ago? Was that you, or did the district choose them for you?", tag: "Blame", reply: "The district. Does it matter?", coach: "Finding out who made the old mistake helps nobody. It makes the past purchase the topic." }
      ] },
    { stage: "Diagnose", label: "Put a number on it", task: "Make it measurable, in her terms.",
      reply: "Four or five refills a period. Each one stops the line two, three minutes. Second period is the worst.",
      options: [
        { ok: true, t: "In a typical period, how many refills happen, and how long does the line stop for each one?", coach: "Frequency and time, in her units. Next, ask what that does to the kids at the end of the line." },
        { t: "So you're probably losing about ten minutes of serving time a period. Would you agree?", tag: "Your number, not hers", reply: "Maybe. I don't know.", coach: "She can't own a number she didn't build. Ask the question that lets her do the math." },
        { t: "If you were going to buy carts this year, what budget would that come out of?", tag: "Skipped the problem", reply: "Supplies. And it's already spent.", coach: "Budget before the cost is clear makes this a price argument. Diagnose first." }
      ] },
    { stage: "Discover", label: "Earn \"that's right\"", task: "Check the summary before you move to Align.",
      reply: "That's right. And that's on a good day.",
      options: [
        { ok: true, t: "So in second period, four or five refills each stop the line for two to three minutes, and the kids at the back end up with about twelve minutes to eat. Is that a fair summary?", coach: "Her numbers, her consequence, her words. \"That's right\" is your permission to align." },
        { t: "So carrying pans by hand is a big problem for your kitchen, it's hurting service and probably your staff, and you'd agree it needs fixing this year?", tag: "Problem framing", reply: "You're right. It's not great.", coach: "\"You're right\" is agreement without ownership. Reflect her story back; don't label it a problem for her." },
        { t: "OK, I've got it, and I see this in a lot of school kitchens. Let me tell you what the HC-3 can do for your line and your staff.", tag: "No checkpoint", reply: "Go ahead.", coach: "Without her confirmation you are aligning to your guess." }
      ] },
    { stage: "Align", label: "Introduce the solution", task: "One product, one property, her pain, an honest boundary.",
      reply: "One trip and it clears the door. Will it fit through the pantry door too?",
      options: [
        { ok: true, t: "Based on what you told me, the second trip is what stops your line. The HC-3 moves a full refill in one trip, and its casters roll over a threshold without lifting. It isn't insulated, so pans stay covered and the run stays short.", coach: "Her words, one property for her pain, and the limit she needs to know. The threshold detail answers her history with the old carts." },
        { t: "The HC-3 is stainless steel, holds 500 pounds, has three shelves, five-inch rubber casters and a 24-inch frame, and it comes with a free one-week loaner so you can try it out.", tag: "Feature dump", reply: "OK.", coach: "Specs with no link to the second trip or the twelve minutes. She has to connect the dots herself." },
        { t: "Based on what you told me, your whole kitchen could use an upgrade. We also have warming cabinets, sheet-pan racks and dish dollies, so we could redo the full serving flow.", tag: "Portfolio dump", reply: "I don't have budget to redo the kitchen.", coach: "More products means less credibility. One product, one reason." }
      ] },
    { stage: "Advance", label: "Secure the next step", task: "Concrete, mutual, time-bound.",
      reply: "Monday works. I'll tell Rosa to time the line.",
      options: [
        { ok: true, t: "Let me measure your kitchen door and pantry door tomorrow at 1:45, then bring the loaner Monday so you can time second period with it all week.", coach: "Specific, dated, and it tests her exact number. She commits something too: timing the line." },
        { t: "I'll leave you a catalog and my card today, and you can give me a call whenever you're ready to talk about carts again.", tag: "Undated maybe", reply: "Sounds good.", coach: "Nothing is scheduled and nothing will happen. A continuation, not an advance." },
        { t: "Should I write up an order for six carts today, so every member of your staff has one of their own for service?", tag: "Overreach", reply: "Six? I need to see one work first.", coach: "Ask for the step the evidence supports. She hasn't seen it clear the door yet." }
      ] }
  ]
},
{
  id: "lock",
  object: "A keypad smart lock",
  who: "Theo",
  opening: "Wednesday, 10:00 a.m. Coffee with Theo Lang, who manages twelve short-term rentals across the city. He has thirty minutes before a cleaning walk-through.",
  customer: {
    name: "Theo Lang",
    sub: "Owner-manager, Lang Stays (12 rental units)",
    fields: [
      ["The account", "Twelve units, mostly one-night and weekend stays. Two contract cleaning crews."],
      ["Measured on", "Guest review scores, cleaning turnaround time, and his own sleep."],
      ["How it works today", "Lockboxes with physical keys. Guests and cleaners share the box code, which changes when Theo remembers to change it."],
      ["History", "Tried a Wi-Fi lock on one unit. The router reset, the lock went offline, and a guest stood outside at midnight."],
      ["Your research", "<ul><li>The city's new short-term rental ordinance requires a local contact who can respond on site within one hour, 24 hours a day.</li><li>Theo's listings mention \"self check-in.\"</li></ul>"],
      ["What you don't know yet", "How often access goes wrong, what it costs him, and who else feels it."]
    ]
  },
  product: {
    name: "Keystep KS2",
    sub: "Keypad deadbolt with scheduled codes",
    fields: [
      ["What it is", "A keypad deadbolt that issues a unique code for each guest and each cleaner, and expires it at checkout."],
      ["The property that matters", "Codes are stored on the lock itself, so it keeps working if the internet drops. A physical key backup is included."],
      ["Where it fits", "Self check-in units, cleaner access, owner access."],
      ["Honest boundary", "Pushing new codes from your phone needs the Wi-Fi bridge. Without it, codes are set in person. Fits doors 1-3/8 to 2 inches thick."],
      ["Logistics", "$179 per lock, $49 bridge. Install support on the first two units."]
    ]
  },
  rounds: [
    { stage: "Connect", label: "Open the call", task: "Open the call.",
      reply: "One hour, all night, every night. That's me. I'm the local contact.",
      options: [
        { ok: true, t: "The city's new rental ordinance requires a local contact who can be on site within an hour, around the clock. How is that playing out for your units?", coach: "A real, sourced fact from his world and an open question. Nothing about locks yet." },
        { t: "I sell a keypad smart lock that most of the rental managers in town love. Could I take a few minutes and show you how it works?", tag: "Pitch before Align", reply: "I had a smart lock. Never again.", coach: "Leading with the product invited his worst memory. You lost the opening." },
        { t: "Your listings say self check-in, but your reviews mention check-in trouble a lot. What's going wrong with your access system right now?", tag: "About his performance", reply: "My reviews are fine.", coach: "Connect doesn't critique the customer's results. He will defend instead of talk." }
      ] },
    { stage: "Discover", label: "Open the conversation", task: "Get him talking about how access works today.",
      reply: "Guest can't open the lockbox, or the cleaner took the key, or somebody changed the code. My phone rings, and I drive over.",
      options: [
        { ok: true, t: "Tell me about the last time your phone rang about access in the middle of the night.", coach: "Open, specific, about his reality. Stories carry the detail you will need in Diagnose." },
        { t: "Don't you think lockboxes are pretty outdated for a business your size?", tag: "Leading question", reply: "They work most of the time.", coach: "You argued with his status quo. He defends it instead of describing it." },
        { t: "Do you ever get calls from guests who are locked out of a unit?", tag: "Closed question", reply: "Sometimes.", coach: "One word back. Use how, what, or tell me about." }
      ] },
    { stage: "Discover", label: "Keep him talking", task: "Name what you're hearing, without judging it.",
      reply: "Ha. Yeah. Last month I drove across town at 1 a.m. twice. And the smart lock I tried left a family on the porch.",
      options: [
        { ok: true, t: "It sounds like your phone is the real lock on every one of these units.", coach: "A label, starting with \"it sounds like.\" It names the pattern so he can confirm it and add more." },
        { t: "I think you need a system that doesn't depend on you personally.", tag: "Judgment, not a label", reply: "Great. Who's going to pay for that?", coach: "\"I think\" makes it your opinion and invites a debate. Label what you observe instead." },
        { t: "Our lock fixes all of that, so you'd never get those calls again.", tag: "Pitch before Align", reply: "That's what the last one promised.", coach: "No number, no agreement. The product has nothing to land on." }
      ] },
    { stage: "Discover", label: "Name what he's thinking", task: "He brought up the lock that failed. Get ahead of it.",
      reply: "Exactly. I'm not putting another family on a porch.",
      options: [
        { ok: true, t: "You're probably thinking this is another smart lock that goes dark the next time the router resets.", coach: "An accusation audit. You said it so he doesn't have to hold onto it." },
        { t: "That was a cheap Wi-Fi lock. Ours is a much better product than that one.", tag: "Defending", reply: "That one wasn't cheap.", coach: "Defending starts an argument. Naming the fear ends one." },
        { t: "Why did you put in a Wi-Fi lock without any kind of backup key?", tag: "Blame", reply: "Because the installer said I didn't need one.", coach: "His past decision is now the topic. You need his current reality instead." }
      ] },
    { stage: "Diagnose", label: "Put a number on it", task: "Turn the story into his number.",
      reply: "Three or four calls a month. Two of those I drive. Forty minutes round trip, and that's at night.",
      options: [
        { ok: true, t: "In a typical month, how many access calls do you get, and how many of them put you in the car?", coach: "Frequency and consequence in his units. He owns the number because he built it." },
        { t: "So you're probably losing a couple of five-star reviews a month over this. Right?", tag: "Your number, not his", reply: "I don't know about that.", coach: "Your estimate is easy to reject. His count isn't." },
        { t: "How much would you be willing to spend per unit to make this go away?", tag: "Skipped the problem", reply: "Not much. Margins are thin.", coach: "Price before the cost is clear sets you up to lose on price." }
      ] },
    { stage: "Discover", label: "Earn \"that's right\"", task: "Summarize before Align.",
      reply: "That's right. And the ordinance means I can't just stop answering.",
      options: [
        { ok: true, t: "So three or four access calls a month, two of them at night with a forty-minute drive, and under the new ordinance you're the one who has to go. Did I get that right?", coach: "His number, his consequence, his constraint. \"That's right\" means you can align." },
        { t: "So lockboxes are a problem for your business, they're hurting your reviews and your sleep, and you'd agree it's time to change before the ordinance kicks in?", tag: "Problem framing", reply: "You're right. Probably.", coach: "\"You're right\" means he's being polite. Reflect his story instead of labeling it a problem." },
        { t: "Makes sense, I hear that from a lot of hosts in the city. So let me walk you through what the KS2 can do for your twelve units.", tag: "No checkpoint", reply: "Sure.", coach: "Without his confirmation you are pitching to your own guess." }
      ] },
    { stage: "Align", label: "Introduce the solution", task: "One product, one property, his pain, an honest boundary.",
      reply: "Works without the internet and still has a key. OK. How does the cleaner get in?",
      options: [
        { ok: true, t: "Based on what you told me, the calls start when a key or a code goes wrong. The KS2 gives each guest their own code and stores it on the lock, so it works when the internet drops. Sending codes from your phone needs the bridge.", coach: "His words, the one property that answers the failure he lived through, and the limit he needs to know." },
        { t: "The KS2 has unique guest codes, automatic expiry at checkout, a physical backup key, a twelve-month battery with low-battery alerts, and a mobile app for scheduling every code from your phone.", tag: "Feature dump", reply: "OK. Lots of stuff.", coach: "Features without a link to his midnight drives. Let him hear his problem in your answer." },
        { t: "Based on what you told me, you need a full smart-home setup. We also sell cameras, thermostats and noise monitors, so we could cover all twelve units in one package.", tag: "Portfolio dump", reply: "I just need people to get in the door.", coach: "He told you one thing. Answer that one thing." }
      ] },
    { stage: "Advance", label: "Secure the next step", task: "Concrete, mutual, time-bound.",
      reply: "Do the Elm Street unit. If it gets through a month, we talk about the rest.",
      options: [
        { ok: true, t: "Let's install one on your highest-call unit Friday morning with the bridge, then compare its access calls with the other eleven on the 30th.", coach: "Dated, mutual, and it measures his exact number. You both have something to do." },
        { t: "I'll send you a spec sheet and a price list today, and you can reach out to me whenever you're ready to talk.", tag: "Undated maybe", reply: "Sure.", coach: "Nothing scheduled, nothing committed. That is a continuation." },
        { t: "Should we go ahead and do all twelve units this month, so every unit is on one system before the busy season?", tag: "Overreach", reply: "Twelve? After last time?", coach: "Ask for the step the evidence supports. One unit earns twelve." }
      ] }
  ]
}
];
