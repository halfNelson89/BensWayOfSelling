/* Clinical practice call: FLOSEAL in posterior lumbar spine.
   Customer and hospital are fictional. Product statements are drawn from the FLOSEAL IFU and FDA summary.
   Training draft: route through AdProm before field use. */
window.BWOS = window.BWOS || {};
window.BWOS.flosealScenario = {
  id: "floseal-spine",
  object: "FLOSEAL Hemostatic Matrix",
  who: "Dr. Reyes",
  opening: "Tuesday, 6:50 a.m. Dr. Alana Reyes has a few minutes in the surgeons' lounge before her first case. You met her once at a hospital supply fair. She knows your name, not your bag.",
  firstLine: null,
  customer: {
    name: "Dr. Alana Reyes",
    sub: "Orthopedic spine surgeon, Laurel Valley Medical Center",
    fields: [
      ["The account", "280-bed community hospital. Dr. Reyes holds Tuesday and Thursday spine blocks."],
      ["Case mix (AcuityMD)", "Posterior lumbar decompression and fusion, mostly one and two levels. Usually four cases on a block day."],
      ["Measured on", "Block utilization and case time against schedule, reported monthly by the OR director, Paul Hanley. The hospital's patient blood management committee tracks transfusion."],
      ["How it works today", "Bipolar, cottonoids, and a gelatin sponge soaked in thrombin for epidural venous bleeding. Pack, wait, re-check."],
      ["People around her", "Kim, spine team charge nurse, runs the scrub team and the preference cards. Paul Hanley, OR director."],
      ["Contract status", "FLOSEAL is already on the hospital formulary through the cardiac service. Spine does not use it."],
      ["History", "Another company's rep did one in-service for a flowable last year. The scrub prepared it wrong on the first case, and the rep was not seen again."],
      ["Your research", "<ul><li>A JAMA Surgery analysis of California hospitals estimated an operating room minute costs about $36 to $37 (Childers and Maggard-Gibbons, 2018).</li><li>The American Red Cross declared an emergency blood shortage in January 2024.</li></ul>"],
      ["What you don't know yet", "Where her case time goes, how often, what it costs her, and who else feels it."]
    ]
  },
  product: {
    name: "FLOSEAL Hemostatic Matrix",
    sub: "Flowable gelatin matrix with thrombin",
    fields: [
      ["What it is", "An absorbable hemostatic agent: gelatin matrix granules combined with thrombin, delivered through an applicator."],
      ["Indication", "Surgical procedures, as an adjunct to hemostasis when control of bleeding by ligature or conventional procedures is ineffective or impractical. See the IFU for the full indication."],
      ["The property that matters", "It flows, so it conforms to irregular bleeding surfaces instead of sitting on top of them (FDA summary of safety and effectiveness)."],
      ["Honest boundaries", "<ul><li>Do not inject or compress into blood vessels.</li><li>Swells about 10 to 20 percent after application. Use the least amount that works and see the IFU precautions for confined spaces.</li><li>Remove excess material not in the clot by gentle irrigation.</li><li>Not for prophylactic use. Do not use with known allergy to bovine materials.</li></ul>"],
      ["Support", "Rep-led prep training for the scrub team and case coverage for first cases."]
    ]
  },
  rounds: [
    { stage: "Connect", label: "Open the call", task: "Open the call. Use your pre-call plan.",
      reply: "Constantly. Paul sends block utilization every month, and spine is always the one running over.",
      options: [
        { ok: true, t: "A JAMA Surgery analysis put the cost of an OR minute at about thirty-six dollars. How does Laurel Valley talk about time in the room?", coach: "A sourced, national, parallel fact and an open question about the institution. Nothing about her outcomes, nothing about FLOSEAL." },
        { t: "Dr. Reyes, I'd love five minutes to show you how FLOSEAL could help speed up your fusion cases. It's already on your hospital's formulary.", tag: "Pitch before Align", reply: "I've got a case at 7:30. Leave me something to read.", coach: "You led with the product. She decided in one sentence that she doesn't need the conversation." },
        { t: "How much blood are your fusion patients losing these days, and how often do they end up transfused after a two-level case?", tag: "About her outcomes", reply: "My transfusion rate is fine. Why?", coach: "Connect never asks a surgeon to defend her results. The parallel fact exists so she doesn't have to." }
      ] },
    { stage: "Discover", label: "Open the conversation", task: "She gave you a door. Get her talking about her cases.",
      reply: "Exposure is fine. It's the decompression. Once the epidural veins start, I'm packing cottonoids and waiting.",
      options: [
        { ok: true, t: "Tell me about where the time goes in a typical one- or two-level fusion.", coach: "Open, neutral, about her day. She can answer any way she wants, and she will tell you where the time really goes." },
        { t: "Isn't epidural bleeding the biggest thing that slows your fusion cases down?", tag: "Problem framing", reply: "I didn't say that.", coach: "You put a problem in her mouth and led her to it. Shape the conversation; let the challenge surface." },
        { t: "Do you use a flowable hemostat in your fusions, or is it mostly sponges?", tag: "Closed, product-shaped", reply: "Sponges.", coach: "One word, and she now knows you are steering toward a product. Use how, what, or tell me about." }
      ] },
    { stage: "Discover", label: "Keep her talking", task: "Get the next two sentences without adding anything.",
      reply: "Pack, wait, peek, pack again. Some days it's three or four rounds before I can see the dura clearly.",
      options: [
        { ok: true, t: "Packing and waiting?", coach: "A mirror: her last words, a rising tone, then silence. She fills the gap with detail you could not have asked for." },
        { t: "I think FLOSEAL is faster.", tag: "Pitch before Align", reply: "Everyone thinks their product is faster.", coach: "No number, no agreement. The product arrived before the problem was hers." },
        { t: "Sounds like a bleeding problem.", tag: "Problem framing", reply: "I have normal bleeding. It's spine surgery.", coach: "Close to a label, but it names a problem she never said. Mirror her words instead and let her tell you more." }
      ] },
    { stage: "Discover", label: "Name what you're hearing", task: "Label it so she can confirm or correct it.",
      reply: "It is. And you're the third rep this year who wants to fix it.",
      options: [
        { ok: true, t: "It sounds like that wait is where the day gets away from you.", coach: "A label in her terms. She confirms it and hands you the objection you need to handle next." },
        { t: "It sounds like your scrub team is slowing you down.", tag: "Wrong label, blames her team", reply: "My team is excellent.", coach: "Right form, wrong content. A label names what she said, not a guess that blames her people." },
        { t: "Cottonoids are pretty outdated. Most surgeons have moved on.", tag: "Attacks the status quo", reply: "They've worked for twenty years.", coach: "The status quo is her choice. Attack it and she defends it. Help her see what it costs instead." }
      ] },
    { stage: "Discover", label: "Name what she's thinking", task: "She just told you about the other reps. Get ahead of it.",
      reply: "That's what happened last time. The scrub mixed it wrong on the first case, and the rep was gone.",
      options: [
        { ok: true, t: "You're probably thinking I'll do an in-service, cover one case, and you'll never see me again.", coach: "An accusation audit. You said her objection first, so she can let it go and tell you what actually happened." },
        { t: "I'm not like those other reps, I promise. I'll be here for you every single case.", tag: "Defending", reply: "That's what they said.", coach: "A promise is a claim she can't test. Naming her fear shows you already understand it." },
        { t: "Which reps were they, and which flowable products did they bring in for your team?", tag: "Competitor fishing", reply: "Does it matter?", coach: "The call is now about the competition. Keep it on her experience." }
      ] },
    { stage: "Diagnose", label: "Put a number on it", task: "Turn the story into her number.",
      reply: "Most of the two-levels. Ten to fifteen minutes each. On a four-case day, my last case starts late or gets bumped to Friday.",
      options: [
        { ok: true, t: "How many of your Tuesday and Thursday fusions get into that pack-and-wait cycle, and what does it do to your last case?", coach: "Frequency and consequence, in her units. She builds the number, so she owns it." },
        { t: "At thirty-six dollars a minute, fifteen minutes is about five hundred dollars a case. That adds up fast, right?", tag: "Your number, not hers", reply: "I don't know where you got that.", coach: "You turned a national fact into a claim about her. She argues with your math instead of owning her own." },
        { t: "How many units of FLOSEAL do you think you'd need each month for your Tuesday and Thursday blocks?", tag: "Skipped ahead", reply: "I haven't said I need any.", coach: "An Advance question with no problem agreed. You skipped Diagnose and Align." }
      ] },
    { stage: "Discover", label: "Earn \"that's right\"", task: "Summarize before you move to Align. Listen for the words.",
      reply: "That's right. That last case is the one that ruins my week.",
      options: [
        { ok: true, t: "So in most two-level fusions, epidural bleeding puts you into pack-and-wait for ten to fifteen minutes, and on a four-case day it costs you the last case. Fair?", coach: "Her situation, her number, her consequence, in her words. \"That's right\" means she feels understood. You've earned Align." },
        { t: "So bleeding is a real problem in your fusions, it's costing the hospital money, and it's worth solving, wouldn't you agree?", tag: "Problem framing", reply: "You're right. Look, I have a case in ten minutes.", coach: "\"You're right\" is a polite brush-off. You labeled it a problem instead of reflecting her story." },
        { t: "So what you really need is a better hemostat for the decompression. Let me tell you about the one I have.", tag: "No checkpoint", reply: "Quickly.", coach: "You decided what she needs without checking. Align to what she confirmed, not what you assume." }
      ] },
    { stage: "Align", label: "Introduce the solution", task: "One product, one insight tied to her pain, one honest boundary.",
      reply: "Use the least, irrigate the rest. OK. Isn't it already on our shelf for cardiac?",
      options: [
        { ok: true, t: "Based on what you told me, the time goes into packing and re-checking. FLOSEAL flows into an irregular bleeding bed instead of sitting on top of it. It swells ten to twenty percent, so near the dura you'd use the least that works and irrigate the excess.", coach: "Her words, one product, the one property that answers pack-and-wait, and the boundary a spine surgeon cares about most. The boundary is why she believes the rest." },
        { t: "Based on what you told me, you need options. FLOSEAL, TISSEEL and PERCLOT are all available here, so you'll have the right product for every type of bleeding you see in spine, from bone to soft tissue.", tag: "Portfolio dump", reply: "I don't need three products. I need my last case.", coach: "Three products tells her you didn't hear the one problem she described." },
        { t: "FLOSEAL is the best hemostat on the market. It works on every bleed you'll see, it's already on your shelf, and with it your cases will finish on time, so your last case won't get bumped again.", tag: "Overclaim", reply: "Every bleed? Come on.", coach: "An unsupported superlative and a promise you can't keep. Align uses one approved claim and one honest boundary." }
      ] },
    { stage: "Advance", label: "Secure the next step", task: "She's asking how to get it. What now?",
      reply: "Do it. Thursday.",
      options: [
        { ok: true, t: "It is. Can we open it for your Thursday fusions? I'll run prep with Kim's scrub team Wednesday at 2 and stand in the room Thursday.", coach: "She has already bought. Stop selling, confirm the step, and make it dated and mutual. Kim's team covers the failure she lived through last year." },
        { t: "Before you decide, let me walk you through the cardiac data and our cost model so you have the full picture.", tag: "Kept selling after the yes", reply: "I thought we were done. I have a case.", coach: "Her question was a buying signal. Selling past it reopens a decision she had already made." },
        { t: "Great. I'll leave a sample with Kim and check back in a few weeks to see if you've tried it.", tag: "Undated maybe", reply: "Sure.", coach: "No date, no coverage, and the scrub team untrained. This is exactly how the last rep lost her." }
      ] },
    { stage: "Advance", label: "Follow up, pull through, continue", task: "Thursday went well. She says, \"That helped. What's next?\"",
      reply: "Good. Put it on the card. And yes, talk to Dr. Patel. He has the same Tuesday problem.",
      options: [
        { ok: true, t: "I'll get it on your preference card with Kim this week and cover the next two Thursdays. On the 30th, can we look at your end times together, and would you mind if I talked with Dr. Patel?", coach: "Follow up, pull through, continue the sale, in that order. Preference card and coverage make it stick. The end-time review measures her number. Dr. Patel is the next Connect." },
        { t: "That's great to hear. Call me any time if you need anything at all, day or night, and I'll be there for you. I'm always just a text away, and I'll stop by when I'm in the building.", tag: "No pull through", reply: "Will do.", coach: "One good case is not adoption. Without the preference card and coverage, the next scrub reaches for the sponge." },
        { t: "Now that it's working for you, could you bring it up at the next spine meeting and tell the group? If Dr. Patel and the others switch too, the whole service runs smoother.", tag: "Skipped pull through", reply: "One case. Let's see a few more first.", coach: "Continuing the sale before pull through asks her to vouch for something not yet routine." }
      ] }
  ]
};
