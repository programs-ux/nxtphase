/* ============================================================
   NXT Phase Learning — data layer
   All static content. Loaded before app.js.
   ============================================================ */

const PILLARS = [
  {
    id: 'personal',
    label: 'Personal Development',
    short: 'Personal',
    icon: 'user',
    color: 'var(--gold)',
    desc: 'The inner skills that power every other goal: mindset, emotional intelligence, and disciplined focus.'
  },
  {
    id: 'professional',
    label: 'Professional Development',
    short: 'Professional',
    icon: 'trending-up',
    color: 'var(--blue)',
    desc: 'The competencies employers rank highest worldwide: analytical thinking, adaptability, and leadership.'
  },
  {
    id: 'workforce',
    label: 'Workforce Skills',
    short: 'Workforce',
    icon: 'briefcase',
    color: 'var(--teal)',
    desc: 'Job-search and workplace execution: presenting yourself, interviewing, and communicating professionally.'
  },
  {
    id: 'technical',
    label: 'Technical Skills',
    short: 'Technical',
    icon: 'monitor',
    color: 'var(--violet)',
    desc: 'Digital capability for modern work: security fundamentals, spreadsheets, and applied AI tools.'
  },
  {
    id: 'business',
    label: 'Entrepreneurship & Independent Work',
    short: 'Entrepreneurship',
    icon: 'compass',
    color: 'var(--sage)',
    desc: 'Convert skills into income: package a service, develop clients, and run the business side with discipline.'
  }
];

const WISDOM_QUOTES = [
  { text: 'The owl of wisdom flies at dusk — growth often begins right when things feel darkest.', author: 'NXT Phase' },
  { text: 'Do the best you can until you know better. Then when you know better, do better.', author: 'Maya Angelou' },
  { text: 'Success is the sum of small efforts, repeated day in and day out.', author: 'Robert Collier' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'Knowing yourself is the beginning of all wisdom.', author: 'Aristotle' },
  { text: 'The beautiful thing about learning is that no one can take it away from you.', author: 'B.B. King' },
  { text: 'You don’t have to be great to start, but you have to start to be great.', author: 'Zig Ziglar' },
  { text: 'An investment in knowledge pays the best interest.', author: 'Benjamin Franklin' },
  { text: 'Change is the end result of all true learning.', author: 'Leo Buscaglia' },
  { text: 'What we learn with pleasure we never forget.', author: 'Alfred Mercier' },
  { text: 'Wisdom begins in wonder.', author: 'Socrates' },
  { text: 'Every next level of your life will demand a different you.', author: 'Leonardo DiCaprio' },
  { text: 'Learning never exhausts the mind.', author: 'Leonardo da Vinci' },
  { text: 'The expert in anything was once a beginner.', author: 'Helen Hayes' }
];

/* ------------------------------------------------------------
   COURSES
   Each course: flat lessons[]; the last lesson is the quiz.
   Lesson ids are their index as a string.
   ------------------------------------------------------------ */

const COURSES = [

  /* ================= PERSONAL DEVELOPMENT ================= */
  {
    id: 'growth-mindset',
    title: 'Growth Mindset: Entering Your NXT Phase',
    pillar: 'personal',
    level: 'Foundational',
    minutes: 40,
    desc: 'Learn how the way you think about ability shapes what you achieve — and how to rewire self-talk so setbacks become fuel.',
    objectives: [
      'Explain the difference between a fixed and a growth mindset',
      'Catch and reframe fixed-mindset self-talk in real situations',
      'Build a simple habit loop that turns setbacks into next steps'
    ],
    skills: ['Self-awareness', 'Resilience', 'Goal setting'],
    lessons: [
      {
        title: 'Two Mindsets, Two Futures',
        minutes: 10,
        content: `
<p>Psychologist Carol Dweck spent decades studying why some people grow through challenges while others shut down. Her finding was simple but powerful: it often comes down to what you believe about ability itself.</p>
<p>A <strong>fixed mindset</strong> says talent is something you either have or you don't. Under that belief, every challenge is a test of your worth — so failure feels like proof you're not enough, and it's safer not to try.</p>
<p>A <strong>growth mindset</strong> says ability is built, like muscle. Under that belief, challenges are workouts, effort is the path, and failure is information. Neither mindset is permanent — most of us hold both, in different areas of life. The skill is noticing which one is driving.</p>
<h4>Apply this</h4>
<p>Think of one area where you feel confident learning new things, and one where you tell yourself "I'm just not a ___ person." Write both down. That second one is where this course will pay off.</p>`
      },
      {
        title: 'Rewriting Your Self-Talk',
        minutes: 12,
        content: `
<p>Mindset lives in the sentences you say to yourself. The fastest way to shift it is to catch a fixed-mindset sentence mid-flight and add one word: <strong>yet</strong>.</p>
<p>"I can't do spreadsheets" becomes "I can't do spreadsheets <em>yet</em>." It sounds small, but it changes the claim from a verdict about who you are into a statement about where you are — and where you are can change.</p>
<p>Three more reframes worth practicing:</p>
<ul>
<li><strong>"This is too hard"</strong> → "This is hard, which means I'm at my learning edge."</li>
<li><strong>"They're just naturally good at this"</strong> → "They've practiced this more than I have — what did their practice look like?"</li>
<li><strong>"I failed"</strong> → "That attempt failed. What did it teach me about the next one?"</li>
</ul>
<h4>Apply this</h4>
<p>For the next 24 hours, keep a note on your phone. Every time you catch a fixed-mindset thought, write it down and write the reframe next to it. Most people are surprised how often it happens — and how mechanical the fix becomes.</p>`
      },
      {
        title: 'The Setback Loop',
        minutes: 10,
        content: `
<p>Growth mindset isn't positive thinking. It's a <strong>procedure for what to do after things go wrong</strong>. People who grow through setbacks tend to run the same three-step loop, whether they know it or not:</p>
<ol>
<li><strong>Name it without drama.</strong> "The interview didn't go well" — not "I'm unhirable." Specific and factual beats global and personal.</li>
<li><strong>Extract one lesson.</strong> Not ten. One concrete thing you'd do differently: "I didn't have a story ready about handling conflict."</li>
<li><strong>Schedule the next attempt.</strong> A lesson without a next attempt is just a regret. Put the retry on the calendar while the lesson is fresh.</li>
</ol>
<p>This loop is why growth-minded people seem "lucky" over time. They simply get more attempts per year than people who stop to recover their self-image after every miss.</p>
<h4>Apply this</h4>
<p>Pick a recent setback — small is fine. Run it through the loop on paper: the factual name, the one lesson, the scheduled next attempt. Notice how different it feels from replaying it.</p>`
      },
      { title: 'Quiz: Growth Mindset', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence Essentials',
    pillar: 'personal',
    level: 'Core',
    minutes: 45,
    desc: 'Understand what’s happening inside you and the people around you — and use it to communicate, decide, and lead better.',
    objectives: [
      'Use the four-domain model of emotional intelligence (EQ)',
      'Apply the name-it-to-tame-it technique under stress',
      'Practice active listening that makes people feel heard'
    ],
    skills: ['Self-regulation', 'Empathy', 'Communication'],
    lessons: [
      {
        title: 'The Four Domains of EQ',
        minutes: 12,
        content: `
<p>Emotional intelligence (EQ) is your ability to notice, understand, and work with emotions — your own and other people's. Research by Daniel Goleman and others breaks it into four domains:</p>
<ul>
<li><strong>Self-awareness:</strong> knowing what you're feeling while you're feeling it, and how it's affecting your behavior.</li>
<li><strong>Self-management:</strong> choosing your response instead of being run by the feeling — staying steady under pressure.</li>
<li><strong>Social awareness:</strong> reading the room; picking up what others feel even when they don't say it.</li>
<li><strong>Relationship management:</strong> using all of the above to handle conflict, give feedback, and build trust.</li>
</ul>
<p>Notice the order — it's a ladder. You can't manage an emotion you haven't noticed, and you can't read others well while your own signal is drowning everything out. Every EQ skill starts with self-awareness.</p>
<h4>Apply this</h4>
<p>Set two random phone alarms today. When each goes off, name what you're feeling in one or two words. That's the whole exercise — and it's the foundation of the entire skill set.</p>`
      },
      {
        title: 'Name It to Tame It',
        minutes: 11,
        content: `
<p>When something triggers you — an unfair email, a rude comment — your brain's alarm system (the amygdala) fires before your reasoning brain gets a vote. Psychologists call the result an <em>amygdala hijack</em>: you're flooded, and whatever you say next usually makes things worse.</p>
<p>The counter-move is surprisingly simple: <strong>put the feeling into words</strong>. Brain-imaging studies show that labeling an emotion ("I'm feeling defensive and embarrassed") measurably calms the alarm response. Naming moves activity from the reactive part of the brain toward the reflective part.</p>
<p>A practical protocol for hot moments:</p>
<ol>
<li><strong>Pause.</strong> Six seconds is roughly how long the first chemical surge takes to peak. Breathe through it.</li>
<li><strong>Name.</strong> Silently label the feeling as precisely as you can. "Angry" is okay; "disrespected in front of the team" is better.</li>
<li><strong>Choose.</strong> Ask: "What outcome do I actually want here?" Then respond toward that outcome, not the feeling.</li>
</ol>
<h4>Apply this</h4>
<p>Write down your most common trigger at work or home. Script your pause-name-choose response for it now, in advance. Hot moments are a terrible time to improvise.</p>`
      },
      {
        title: 'Listening So People Feel Heard',
        minutes: 12,
        content: `
<p>Most of us listen to reply — mentally drafting our answer while the other person is still talking. Active listening flips that: your only job while they speak is to understand.</p>
<p>The core moves:</p>
<ul>
<li><strong>Full attention.</strong> Phone face-down, body turned toward them. Attention is visible, and people read it instantly.</li>
<li><strong>Reflect back.</strong> "So the deadline moved and nobody told you — no wonder you're frustrated." You're not agreeing; you're proving you received it.</li>
<li><strong>Ask, don't assume.</strong> "What would help most right now?" beats launching into advice. Unrequested solutions often feel like dismissal.</li>
<li><strong>Let silence work.</strong> A two-second pause after they stop talking often produces the most honest sentence of the conversation.</li>
</ul>
<p>People rarely remember your exact words. They remember whether they felt heard — and that feeling is what earns you influence when it's your turn to talk.</p>
<h4>Apply this</h4>
<p>In your next real conversation, don't offer a single opinion until you've reflected back what you heard and they've confirmed you got it right. Watch what it does to the temperature of the conversation.</p>`
      },
      { title: 'Quiz: Emotional Intelligence', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'time-energy',
    title: 'Time & Energy Management',
    pillar: 'personal',
    level: 'Foundational',
    minutes: 40,
    desc: 'Stop fighting the clock. Learn to prioritize what matters, protect your focus, and work with your energy instead of against it.',
    objectives: [
      'Prioritize tasks with the urgent/important matrix',
      'Protect deep-focus time using time blocking',
      'Match task types to your natural energy peaks'
    ],
    skills: ['Prioritization', 'Focus', 'Planning'],
    lessons: [
      {
        title: 'Urgent Is Not the Same as Important',
        minutes: 10,
        content: `
<p>Most overwhelm comes from one confusion: treating <em>urgent</em> (demands attention now) as if it were <em>important</em> (moves your life or work forward). The Eisenhower Matrix separates them into four boxes:</p>
<ul>
<li><strong>Urgent + Important — Do now.</strong> Real deadlines, real emergencies.</li>
<li><strong>Important, not urgent — Schedule it.</strong> Learning, health, relationships, planning. This box builds your future, and it's the first thing squeezed out when you don't defend it.</li>
<li><strong>Urgent, not important — Shrink or hand off.</strong> Many messages and "quick favors" live here. They feel productive; they aren't.</li>
<li><strong>Neither — Delete.</strong> Doom-scrolling knows what it did.</li>
</ul>
<p>The people who seem calm and productive aren't faster than you. They just spend more hours in box two, which quietly prevents most future box-one emergencies.</p>
<h4>Apply this</h4>
<p>Dump tomorrow's to-do list into the four boxes. Most people find 60% of their list sits in box three. Pick one box-two item and give it your first hour instead.</p>`
      },
      {
        title: 'Time Blocking: Make an Appointment with Your Priorities',
        minutes: 10,
        content: `
<p>A to-do list says <em>what</em>; it stays silent about <em>when</em>. That's why lists roll over day after day. <strong>Time blocking</strong> fixes it: give your important work an actual appointment on your calendar, the same way you would a doctor's visit.</p>
<p>How to make blocks that survive contact with reality:</p>
<ul>
<li><strong>Block 60–90 minutes, not four hours.</strong> Long blocks collapse at the first interruption; medium blocks bend and recover.</li>
<li><strong>One block, one job.</strong> "Work on résumé" is a block. "Catch up on stuff" is a wish.</li>
<li><strong>Guard the block like a meeting.</strong> Notifications off, tab count down, and tell people when you'll resurface. A visible "back at 11" buys you more grace than you'd expect.</li>
<li><strong>Leave gaps.</strong> Schedule only 60–70% of your day. Real life needs the margin, and a schedule with no slack shatters instead of flexing.</li>
</ul>
<h4>Apply this</h4>
<p>Right now, put one 60-minute block on tomorrow's calendar for your most important non-urgent task. Name the block after the task. That's time blocking — everything else is refinement.</p>`
      },
      {
        title: 'Manage Energy, Not Just Hours',
        minutes: 12,
        content: `
<p>An hour is not an hour. The 9 a.m. version of you and the 3 p.m. version of you are different workers — and pretending otherwise is why hard tasks scheduled for your slump keep not happening.</p>
<p>Most people cycle through predictable phases each day: a <strong>peak</strong> (sharp, focused — great for analysis and writing), a <strong>trough</strong> (foggy — the danger zone for important decisions), and a <strong>rebound</strong> (looser, more creative — good for brainstorming and conversations). For most people the peak is morning and the trough is early-to-mid afternoon, but night owls run the pattern in reverse.</p>
<p>The strategy is simple: <strong>match the task to the phase</strong>. Deep, careful work goes in your peak. Email, errands, and routine tasks go in your trough. Creative and social work goes in your rebound. Same hours, dramatically different output.</p>
<p>And protect the machine that produces the energy: sleep is a performance tool, movement resets a foggy brain faster than caffeine, and real breaks (walk, water, window — not another screen) are how the next block gets paid for.</p>
<h4>Apply this</h4>
<p>For three days, rate your energy 1–10 at 9 a.m., noon, 3 p.m., and 7 p.m. Then move your hardest daily task into your highest-rated slot. This one change outperforms most productivity apps.</p>`
      },
      { title: 'Quiz: Time & Energy', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= WORKFORCE SKILLS ================= */
  {
    id: 'resume-branding',
    title: 'Résumé & Personal Branding',
    pillar: 'workforce',
    level: 'Foundational',
    minutes: 45,
    desc: 'Turn your experience into a résumé that gets past the software and speaks to humans — plus a simple online presence that backs it up.',
    objectives: [
      'Structure a clean, one-page, scanner-friendly résumé',
      'Write achievement bullets using the action-result formula',
      'Align your LinkedIn/online presence with your résumé story'
    ],
    skills: ['Résumé writing', 'Personal branding', 'Job search'],
    lessons: [
      {
        title: 'The Six-Second Test',
        minutes: 11,
        content: `
<p>Recruiters spend an average of six to eight seconds on a first résumé scan — and before a human sees it at all, applicant tracking software (ATS) often filters it. Your résumé has two audiences, and it must pass both.</p>
<p><strong>For the software:</strong> use a simple single-column layout, standard section headings (Experience, Education, Skills), and no tables, text boxes, photos, or graphics — ATS parsers choke on them. Mirror keywords from the actual job posting: if they say "customer service," don't only say "client relations."</p>
<p><strong>For the human:</strong> the top third of the page decides everything. Put your name, a one-line professional summary tailored to the role, and your strongest relevant wins where the eyes land first. One page is right for most people with under ten years of experience.</p>
<h4>Apply this</h4>
<p>Open a job posting you'd actually want. Highlight every skill and keyword it repeats. That highlighted list is the vocabulary your résumé needs to speak — this single habit beats most résumé "hacks."</p>`
      },
      {
        title: 'Bullets That Prove, Not Describe',
        minutes: 12,
        content: `
<p>Weak résumés describe duties: "Responsible for handling customer inquiries." Strong résumés prove results: "Resolved 40+ customer inquiries daily, keeping satisfaction above 95%." Same job — completely different signal.</p>
<p>Use the <strong>action verb + what you did + measurable result</strong> formula:</p>
<ul>
<li>"Trained 12 new team members, cutting onboarding time from 3 weeks to 2."</li>
<li>"Reorganized the supply room, reducing time to locate items by half."</li>
<li>"Managed the register during peak shifts, balancing the drawer with zero discrepancies for 18 months."</li>
</ul>
<p>No numbers on hand? Estimate honestly ("about 30 calls a day") or quantify scope ("across 4 departments", "for a 200-student program"). Almost any job produces numbers once you look: how many, how often, how much faster, how much saved.</p>
<p>Start every bullet with a strong verb — led, built, resolved, reduced, launched — and cut "responsible for" from your vocabulary entirely.</p>
<h4>Apply this</h4>
<p>Take your three most boring résumé bullets and rewrite each with the formula. If a bullet truly has no result you can name, ask whether it deserves the space at all.</p>`
      },
      {
        title: 'Your Story, Everywhere the Same',
        minutes: 11,
        content: `
<p>After the résumé sparks interest, most hirers do the same next thing: search for you. What they find should tell the <em>same story</em> your résumé tells — that consistency is what "personal brand" actually means. It's not self-promotion; it's coherence.</p>
<p>The minimum viable online presence:</p>
<ul>
<li><strong>LinkedIn headline:</strong> not just a job title. "Customer service professional moving into IT support — CompTIA A+ in progress" tells a story and states a direction.</li>
<li><strong>Summary/About:</strong> three or four first-person sentences: what you do, what you're best at, where you're headed. Write like a person, not a press release.</li>
<li><strong>A recent-activity pulse:</strong> even occasional thoughtful comments in your field signal you're engaged. You never need to become an "influencer."</li>
<li><strong>An audit of the rest:</strong> search your own name in a private browser window. Anything public and unprofessional either gets cleaned up or locked down.</li>
</ul>
<h4>Apply this</h4>
<p>Rewrite your LinkedIn headline using this pattern: <em>[what you are] + [what you're great at or moving toward]</em>. Then check that it agrees with the summary line at the top of your résumé.</p>`
      },
      { title: 'Quiz: Résumé & Branding', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'interview-mastery',
    title: 'Interview Confidence',
    pillar: 'workforce',
    level: 'Core',
    minutes: 45,
    desc: 'Walk into any interview with prepared stories, a calm nervous system, and smart questions of your own.',
    objectives: [
      'Answer behavioral questions using the STAR method',
      'Prepare a story bank that covers the most common questions',
      'Handle salary questions and close with strong questions of your own'
    ],
    skills: ['Interviewing', 'Storytelling', 'Negotiation basics'],
    lessons: [
      {
        title: 'STAR: The Answer Formula',
        minutes: 12,
        content: `
<p>"Tell me about a time when…" questions are the heart of modern interviewing, and rambling is how good candidates lose them. The <strong>STAR</strong> method gives every answer a spine:</p>
<ul>
<li><strong>S — Situation:</strong> one or two sentences of context. "Our store lost two staff the same week as a holiday rush."</li>
<li><strong>T — Task:</strong> what <em>you</em> were responsible for. "I had to cover scheduling gaps without blowing the overtime budget."</li>
<li><strong>A — Action:</strong> the steps you took — the longest part. Say "I," not "we"; the interviewer is hiring you, not your old team.</li>
<li><strong>R — Result:</strong> how it ended, with a number if possible, plus what you learned.</li>
</ul>
<p>Target 90 seconds to two minutes per answer. Shorter feels thin; longer loses the room. And it's completely fine to pause and say "Let me think of a good example" — composure reads as competence.</p>
<h4>Apply this</h4>
<p>Write one full STAR story right now about a problem you solved. Say it out loud twice. Stories rehearsed aloud come back under pressure; stories only written down don't.</p>`
      },
      {
        title: 'Build Your Story Bank',
        minutes: 11,
        content: `
<p>You can't script every question, but you don't need to — most behavioral questions draw from the same six themes. Prepare one strong STAR story for each and you're covered for almost any interview:</p>
<ol>
<li>A <strong>challenge or problem</strong> you solved</li>
<li>A <strong>conflict</strong> with a coworker or customer you handled</li>
<li>A <strong>mistake or failure</strong> — and what you changed afterward</li>
<li>A time you <strong>led or took initiative</strong> without being asked</li>
<li>A time you <strong>learned something quickly</strong> under pressure</li>
<li>Your <strong>proudest accomplishment</strong></li>
</ol>
<p>One rich story can serve several themes if you shift the emphasis. For the failure question: pick a real one, spend one sentence on the failure and four on what you changed — accountability plus growth is exactly what they're listening for.</p>
<p>Also prepare the openers: "Tell me about yourself" wants your present-past-future in 60 seconds, not your biography. "Why do you want this job?" wants proof you researched <em>them</em>, connected to what <em>you</em> bring.</p>
<h4>Apply this</h4>
<p>Make a six-row table, one row per theme. Fill in a one-line story title for each. This "story bank" is the single highest-return hour of interview prep that exists.</p>`
      },
      {
        title: 'Nerves, Money, and Your Questions',
        minutes: 12,
        content: `
<p><strong>Nerves:</strong> some adrenaline is good — it sharpens you. Keep it in range with a slow exhale pattern (in for 4, out for 6, a few rounds before you walk in), arrive ten minutes early, and reframe the event: this is a two-way conversation about fit, not a trial. They already liked you on paper; you're here to confirm it.</p>
<p><strong>Money:</strong> if asked for your number early, it's fair to deflect once: "I'd like to learn more about the role first — can you share the budgeted range?" Many places are required to publish ranges now; look before you go. When you do name a number, give a researched range and stop talking. Silence after a number is negotiation working, not awkwardness.</p>
<p><strong>Your questions:</strong> "Do you have any questions?" is still the interview. Have three ready:</p>
<ul>
<li>"What does success in this role look like in the first 90 days?"</li>
<li>"What separates people who are good at this job from people who are great at it?"</li>
<li>"What do you enjoy most about working here?"</li>
</ul>
<p>Then send a short thank-you note within 24 hours that references something specific you discussed. A minority of candidates do it; it keeps you distinct while they decide.</p>
<h4>Apply this</h4>
<p>Research the typical pay range for a job you want (state listings and salary sites make this fast) and write down your range. Deciding your number before the room is how you avoid deciding it in the room.</p>`
      },
      { title: 'Quiz: Interview Confidence', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'workplace-communication',
    title: 'Communicating at Work',
    pillar: 'workforce',
    level: 'Core',
    minutes: 40,
    desc: 'Write emails people actually read, speak up in meetings, and handle disagreement without burning bridges.',
    objectives: [
      'Write clear, skimmable professional emails and messages',
      'Contribute in meetings with confidence, even as an introvert',
      'Disagree professionally using the situation-impact-request pattern'
    ],
    skills: ['Written communication', 'Meetings', 'Conflict navigation'],
    lessons: [
      {
        title: 'Emails People Actually Read',
        minutes: 10,
        content: `
<p>At work, your writing often arrives before you do — and busy people skim. Structure for the skim:</p>
<ul>
<li><strong>Subject line = the point.</strong> "Question about Friday's schedule" beats "Hi" or "Quick thing." If action is needed, say so: "Approval needed by Thu: vendor invoice."</li>
<li><strong>First sentence = the ask.</strong> Don't build suspense. "I'm requesting Thursday off; here's my coverage plan" — then the details.</li>
<li><strong>One topic per email.</strong> Two requests in one message reliably gets one answered.</li>
<li><strong>Format for scanning:</strong> short paragraphs, bullets for lists, bold for the deadline. A wall of text is where requests go to die.</li>
<li><strong>Close with who-does-what-by-when.</strong> "Could you confirm by Wednesday?" turns a message into a plan.</li>
</ul>
<p>Tone check: written words lose your friendly voice. Before sending anything sensitive, read it once as if you were annoyed with the sender — if it can be read cold, warm it up or say it in person.</p>
<h4>Apply this</h4>
<p>Find the last long email you sent. Rewrite it: point in the subject, ask in line one, bullets for the rest. Compare lengths — clarity is usually shorter.</p>`
      },
      {
        title: 'Being Heard in Meetings',
        minutes: 11,
        content: `
<p>Meetings are where reputations quietly form. You don't need to dominate — you need to be <em>usefully present</em>.</p>
<ul>
<li><strong>Speak once in the first ten minutes.</strong> Even a clarifying question. Early participation lowers the barrier for everything you say afterward; waiting builds pressure until it feels impossible.</li>
<li><strong>Prepare one contribution in advance.</strong> Read the agenda, come with one question or data point. Introverts consistently outperform improvisers here — preparation is your home turf.</li>
<li><strong>Use the boost move.</strong> "I want to go back to what Maria said — I think it solves our scheduling problem too." You add value, elevate a colleague, and enter the conversation, all in one sentence.</li>
<li><strong>Interrupted mid-thought?</strong> Calm and factual: "Let me finish the thought, then I'd love your take." Once, evenly, is usually enough.</li>
<li><strong>Volunteer for the recap.</strong> "So we're deciding X, and Jordan owns Y by Friday?" The person who summarizes gets remembered as the person who was on top of it.</li>
</ul>
<h4>Apply this</h4>
<p>Before your next meeting, write one question and one observation on a sticky note. Say at least one of them in the first ten minutes. Repeat for three meetings and it stops requiring courage.</p>`
      },
      {
        title: 'Disagreeing Without Damage',
        minutes: 11,
        content: `
<p>Avoiding conflict doesn't remove it — it moves it into vents, resentment, and quiet quitting. Professionals disagree openly, on the problem rather than the person, using a pattern you can learn in a day: <strong>situation → impact → request</strong>.</p>
<ol>
<li><strong>Situation (facts only):</strong> "The last three closing shifts, the prep list wasn't finished." Camera-visible facts, no motives, no "always."</li>
<li><strong>Impact:</strong> "That means the morning team starts an hour behind, and it lands on me to catch it up."</li>
<li><strong>Request:</strong> "Can we agree the list gets checked before clock-out, or figure out what's blocking it?"</li>
</ol>
<p>Notice the last clause — an invitation, not a verdict. Sometimes the answer is a reason you didn't know, and the request changes. That openness is what keeps disagreement collaborative instead of adversarial.</p>
<p>If a conversation heats up: slow your pace, drop your volume slightly, and if needed, name a pause — "I want to get this right; can we pick it up after lunch?" Walking away to cool down is a skill, not a retreat. And escalating to a manager after honest direct attempts isn't tattling; bring the same facts-impact-request framing with you.</p>
<h4>Apply this</h4>
<p>Think of a low-stakes friction point in your life right now. Script it as situation-impact-request and try it this week. Practice on small conflicts is what makes the big ones survivable.</p>`
      },
      { title: 'Quiz: Communicating at Work', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= TECHNICAL SKILLS ================= */
  {
    id: 'digital-foundations',
    title: 'Digital Foundations & Online Safety',
    pillar: 'technical',
    level: 'Foundational',
    minutes: 40,
    desc: 'The unglamorous skills that make everything else easier: organized files, strong passwords, and a sharp eye for scams.',
    objectives: [
      'Set up a simple, consistent file and folder system',
      'Secure your accounts with strong passwords and two-factor authentication',
      'Recognize phishing and common online scams before they hook you'
    ],
    skills: ['File management', 'Account security', 'Scam awareness'],
    lessons: [
      {
        title: 'Files You Can Actually Find',
        minutes: 10,
        content: `
<p>Studies of office workers put the time lost to hunting for files at close to an hour a week. The fix isn't discipline — it's a system simple enough that the lazy version of you will still use it.</p>
<ul>
<li><strong>Shallow folders, broad names.</strong> Three levels deep is plenty: <em>Documents → Job Search → Applications</em>. Deep nesting is where files disappear.</li>
<li><strong>Name files so future-you can search them.</strong> <code>2026-07 Resume - Customer Service.docx</code> beats <code>resume final FINAL v2.docx</code>. Start dates with year-month and they sort themselves.</li>
<li><strong>One inbox folder.</strong> Downloads is where chaos accumulates. Once a week, sweep it: file it, or delete it.</li>
<li><strong>Back up automatically.</strong> A free cloud drive (Google Drive, iCloud, OneDrive) syncing your key folders means a lost phone or dead laptop is an inconvenience, not a catastrophe. The rule: anything that would hurt to lose exists in two places.</li>
</ul>
<h4>Apply this</h4>
<p>Create your top-level folders now — something like <em>Personal, Work, Job Search, Money, Health</em>. Move just ten stranded files into them. Ten is enough to start the habit; perfection is not required.</p>`
      },
      {
        title: 'Locks on Your Digital Doors',
        minutes: 11,
        content: `
<p>Most account "hacking" isn't genius-level code — it's someone trying passwords leaked from other sites. Two habits block nearly all of it:</p>
<p><strong>1. One strong, unique password per account.</strong> Reused passwords mean one breached site unlocks your whole life. Since no human can memorize fifty unique passwords, use a <strong>password manager</strong> (your phone's built-in one is fine) to generate and remember them. You memorize one strong master password; it handles the rest. For that master: a phrase of four-plus random words — <em>correct-horse-battery-staple</em> style — is both stronger and easier to remember than <code>P@ssw0rd1</code>.</p>
<p><strong>2. Two-factor authentication (2FA) on anything that matters.</strong> Email, banking, and socials first. 2FA means a stolen password still isn't enough — the thief would also need your phone. It's the single highest-value security setting that exists, and it takes two minutes per account.</p>
<p>Email deserves special paranoia: it's the master key, because "reset password" links for everything else land there. Secure it first and best.</p>
<h4>Apply this</h4>
<p>Right now: turn on 2FA for your primary email account (search the security settings for "two-factor" or "2-step"). That one action outweighs everything else in this lesson.</p>`
      },
      {
        title: 'Spotting Scams Before They Hook You',
        minutes: 11,
        content: `
<p>Phishing — fake messages impersonating real organizations — works by hijacking urgency: <em>your account will be closed, your package is stuck, you owe money, act now</em>. The red flags cluster:</p>
<ul>
<li><strong>Manufactured urgency and threats.</strong> Real institutions rarely demand action in minutes.</li>
<li><strong>Sender address that's almost right.</strong> <code>support@amaz0n-help.com</code> is not Amazon. Check the actual address, not the display name.</li>
<li><strong>Links that don't match.</strong> Press and hold (phone) or hover (computer) to preview the real destination before touching it.</li>
<li><strong>Requests for passwords, codes, or gift cards.</strong> No legitimate company asks for your password or 2FA code, and nobody real collects debts in gift cards. Ever.</li>
</ul>
<p>The universal defense is <strong>going in the front door</strong>: instead of clicking the link in the message, open the app or type the site address yourself and check your account there. If something's genuinely wrong, it'll be waiting for you inside.</p>
<p>If you do get caught — it happens to sharp people every day — change that password immediately, enable 2FA, and if money's involved, contact your bank and report it at <em>reportfraud.ftc.gov</em>. Speed matters far more than embarrassment.</p>
<h4>Apply this</h4>
<p>Open your spam or junk folder and autopsy one phishing email against the red-flag list. Practicing on defused examples trains your eye for live ones.</p>`
      },
      { title: 'Quiz: Digital Foundations', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'spreadsheet-basics',
    title: 'Spreadsheet Basics',
    pillar: 'technical',
    level: 'Foundational',
    minutes: 45,
    desc: 'From blank grid to useful tool: organize information, do math automatically, and sort and filter your way to answers.',
    objectives: [
      'Navigate cells, rows, columns, and build a clean data table',
      'Use core formulas: SUM, AVERAGE, COUNT, and cell references',
      'Sort and filter data to answer real questions'
    ],
    skills: ['Spreadsheets', 'Data organization', 'Basic formulas'],
    lessons: [
      {
        title: 'The Grid, Demystified',
        minutes: 12,
        content: `
<p>A spreadsheet (Google Sheets, Excel — the skills transfer) is just a grid: columns have letters, rows have numbers, and every cell has an address like <code>B3</code> (column B, row 3). That address system is the superpower — it lets math refer to <em>places</em>, so answers update when data changes.</p>
<p>Rules for a table you won't regret later:</p>
<ul>
<li><strong>Row 1 is headers.</strong> One clear label per column: <em>Date, Item, Category, Amount</em>.</li>
<li><strong>One thing per row, one type per column.</strong> Each row is one record (one purchase, one contact). Don't mix numbers and notes in the same column.</li>
<li><strong>No blank rows inside data.</strong> They break sorting and formulas down the line.</li>
<li><strong>Freeze the header row</strong> (View → Freeze) so labels stay visible as you scroll.</li>
</ul>
<p>A personal budget is the perfect first project: real data you care about, small enough to manage, and every skill in this course applies to it.</p>
<h4>Apply this</h4>
<p>Open a free Google Sheet and build the four-column header — Date, Item, Category, Amount. Enter your last ten purchases. This little table is your lab for the next two lessons.</p>`
      },
      {
        title: 'Formulas: Making the Grid Do the Math',
        minutes: 12,
        content: `
<p>Every formula starts with <code>=</code>. Type <code>=2+2</code> in a cell, press Enter, and the cell shows 4. The magic starts when you use addresses instead of numbers: <code>=B2+B3</code> adds whatever those cells contain — <em>now and forever</em>. Change B2, and the answer updates itself.</p>
<p>Ranges make it scale: <code>B2:B11</code> means "B2 through B11." The functions you'll use constantly:</p>
<ul>
<li><code>=SUM(D2:D11)</code> — adds the range. Your total spending.</li>
<li><code>=AVERAGE(D2:D11)</code> — the mean. Your typical purchase.</li>
<li><code>=MAX(D2:D11)</code> / <code>=MIN(D2:D11)</code> — biggest and smallest.</li>
<li><code>=COUNT(D2:D11)</code> — how many numbers are in the range.</li>
</ul>
<p>Two quality-of-life tricks: click cells instead of typing addresses while building a formula, and drag the tiny square at a cell's corner (the fill handle) to copy a formula down a column — references shift automatically. Errors like <code>#DIV/0!</code> or <code>#REF!</code> aren't failures; they're the grid telling you exactly what to fix.</p>
<h4>Apply this</h4>
<p>Under your Amount column, add a Total row with <code>=SUM(</code>your range<code>)</code> and an Average row with <code>=AVERAGE(...)</code>. Then change one purchase amount and watch both update. That auto-update is the whole reason spreadsheets exist.</p>`
      },
      {
        title: 'Sort, Filter, Answer Questions',
        minutes: 13,
        content: `
<p>Data becomes useful when it answers questions: <em>Where does my money actually go? Which category is growing?</em> Two tools do most of that work.</p>
<p><strong>Sorting</strong> rearranges rows by a column — Amount high-to-low shows your biggest expenses instantly. One critical habit: select the <em>whole table</em> (or use Data → Sort range) so rows move together. Sorting a single column scrambles your data's meaning — and it's the classic beginner disaster.</p>
<p><strong>Filtering</strong> hides rows without deleting them. Turn on the filter (Data → Create a filter), click a header's funnel icon, and show only Category = "Food." Now the spreadsheet answers "what did I spend on food?" — and your SUM of what's visible tells you the damage. Filters stack: Food, this month, over $20.</p>
<p>When you're ready for one more level: <code>=SUMIF(C2:C50, "Food", D2:D50)</code> totals only the food rows with no filtering at all, and a Chart (Insert → Chart) of category totals turns your budget into a picture worth a thousand rows.</p>
<h4>Apply this</h4>
<p>Sort your practice table by Amount, largest first. Then filter to one category and note the total. You just did data analysis — the same skill, at any scale, that businesses pay for.</p>`
      },
      { title: 'Quiz: Spreadsheet Basics', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'ai-tools',
    title: 'Working Smarter with AI Tools',
    pillar: 'technical',
    level: 'Core',
    minutes: 45,
    desc: 'Use AI assistants as a genuine work multiplier: write better prompts, verify what comes back, and know what to never paste in.',
    objectives: [
      'Understand what AI assistants are good and bad at',
      'Write prompts with role, task, context, and format',
      'Verify AI output and protect private information'
    ],
    skills: ['AI literacy', 'Prompt writing', 'Critical evaluation'],
    lessons: [
      {
        title: 'What AI Assistants Really Are',
        minutes: 12,
        content: `
<p>Tools like ChatGPT, Claude, and Gemini are <em>language models</em>: systems trained on enormous amounts of text that generate responses by predicting what words should come next. That design explains both their strengths and their traps.</p>
<p><strong>Genuinely great at:</strong> drafting and rewriting (emails, cover letters, summaries), explaining concepts at whatever level you ask for, brainstorming options, translating tone ("make this friendlier"), and acting as a patient tutor that never judges a basic question.</p>
<p><strong>Structurally weak at:</strong> knowing whether what they said is <em>true</em>. A language model can generate confident, fluent, completely wrong statements — invented statistics, fake citations, wrong dates. This is called <strong>hallucination</strong>, and it's not a rare glitch; it's a built-in cost of how the technology works.</p>
<p>The right mental model: a brilliant, endlessly willing intern with no accountability. Fantastic first drafts, real research help — but you are the editor, and your name goes on the final product.</p>
<h4>Apply this</h4>
<p>Ask a free AI assistant to explain something you already know deeply — your job, your neighborhood, your hobby. Grade its answer. Feeling where it's smooth and where it's subtly off builds the calibration everything else depends on.</p>`
      },
      {
        title: 'Prompting: Better Questions, Better Answers',
        minutes: 12,
        content: `
<p>The gap between a useless AI answer and a great one is usually the question. Four ingredients — <strong>role, task, context, format</strong> — fix most weak prompts:</p>
<ul>
<li><strong>Role:</strong> "Act as an experienced hiring manager…"</li>
<li><strong>Task:</strong> "…review my cover letter…"</li>
<li><strong>Context:</strong> "…for a warehouse supervisor role. I'm coming from retail management; the posting emphasizes safety and scheduling."</li>
<li><strong>Format:</strong> "Give me three specific improvements as a numbered list, then a revised version."</li>
</ul>
<p>Compare that to "fix my cover letter" — the ingredients are the difference. Two more habits that multiply results:</p>
<ul>
<li><strong>Treat it as a conversation.</strong> The first answer is a first draft. "Make it shorter." "More formal." "Give me a version emphasizing leadership." Iteration is the skill.</li>
<li><strong>Paste in your raw material.</strong> The AI writes a far better résumé bullet when you give it your messy notes about what you actually did than when it has to invent from nothing.</li>
</ul>
<h4>Apply this</h4>
<p>Take a real task from your week and write a four-ingredient prompt for it. Then push back on the answer at least twice. Notice how much distance there is between reply one and reply three.</p>`
      },
      {
        title: 'Verify, and Never Paste Secrets',
        minutes: 13,
        content: `
<p>Two disciplines separate professional AI use from risky AI use.</p>
<p><strong>Discipline one: verify before you rely.</strong> Match the checking to the stakes. A brainstorm needs no fact-check; a statistic going into a report needs a real source you found yourself; anything legal, medical, or financial needs a qualified human. Practical habits: ask the AI "what should I double-check in this answer?" (surprisingly effective), search for independent confirmation of specific claims, and treat any citation as unverified until you've opened it — models are notorious for inventing plausible-looking sources.</p>
<p><strong>Discipline two: guard what you paste.</strong> Treat a chat window like a postcard, not a locked drawer. Never paste: passwords or codes, your (or anyone's) Social Security number or full financial details, other people's private information, or your employer's confidential data — customer lists, unreleased plans, internal documents. Workplaces increasingly have AI policies; pasting company data into a personal AI account has gotten real people fired. When in doubt, describe the situation generically ("an employee with a scheduling conflict") instead of pasting the real thing.</p>
<p>Used with these two disciplines, AI tools are a legitimate career accelerator — early studies keep finding the biggest productivity gains go to people newer to a skill, because the AI fills the experience gap while you build the judgment. Judgment is the part that stays yours.</p>
<h4>Apply this</h4>
<p>Ask an AI assistant a factual question in an area you care about, then independently verify its three main claims. Time how long verification takes — that's the real cost of using AI responsibly, and it's usually smaller than you fear.</p>`
      },
      { title: 'Quiz: Working with AI', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= PROFESSIONAL DEVELOPMENT ================= */
  {
    id: 'analytical-thinking',
    title: 'Analytical Thinking & Problem Solving',
    pillar: 'professional',
    level: 'Core',
    minutes: 45,
    desc: 'The skill employers rank first worldwide — roughly seven in ten companies call it essential. Break down messy problems, reason with evidence, and make decisions you can defend.',
    objectives: [
      'Deconstruct vague problems into specific, solvable parts',
      'Evaluate evidence and avoid the most common reasoning traps',
      'Make and communicate structured, defensible decisions'
    ],
    skills: ['Problem solving', 'Critical thinking', 'Decision making'],
    lessons: [
      {
        title: 'Deconstructing Problems',
        minutes: 14,
        content: `
<p>The World Economic Forum's Future of Jobs research has ranked <strong>analytical thinking</strong> as the single most important core skill for several years running — roughly seven in ten employers consider it essential. The good news: it is a procedure, not a talent, and the procedure starts with how you define the problem.</p>
<p>Weak problem statements describe feelings: "Sales are bad." Strong ones are specific, measurable, and bounded: "New-customer sales dropped 20% in the last two months, while repeat sales held steady." The second version already points toward causes worth investigating — something changed recently, and it affects new customers specifically.</p>
<p>Two tools do most of the deconstruction work:</p>
<ul>
<li><strong>Symptom vs. root cause.</strong> A symptom is what you observe; a root cause is what produces it. Treating symptoms feels productive and changes nothing. The <strong>Five Whys</strong> technique digs downward: ask "why is that happening?" repeatedly — usually three to five layers — until you hit something you can actually fix. "Deliveries are late" → why → "orders sit overnight" → why → "the cutoff time doesn't match the courier pickup" — now you have a fixable cause, not a complaint.</li>
<li><strong>Splitting the problem.</strong> Break a big question into parts that can each be checked separately: "Where is revenue dropping — which product, which customer type, which channel?" Each split shrinks the search space. Professionals look slow at the start of a problem and fast at the end; amateurs are the reverse.</li>
</ul>
<h4>Apply this</h4>
<p>Take one frustration from your work or life. Rewrite it as a specific, measurable problem statement, then run Five Whys on paper. Notice how different the fix looks at layer four versus layer one.</p>`
      },
      {
        title: 'Reasoning with Evidence',
        minutes: 14,
        content: `
<p>Analytical thinkers hold opinions like scientists hold hypotheses: firmly enough to act, loosely enough to update. That discipline comes down to a few habits when facing any claim — including your own.</p>
<ul>
<li><strong>Correlation is not causation.</strong> Two things moving together doesn't mean one causes the other. Ice cream sales and drownings rise together every summer — the cause of both is warm weather. Before acting on "A causes B," ask what third factor could produce both, and what would happen to B if you changed A directly.</li>
<li><strong>Beware small samples and vivid stories.</strong> One angry customer email feels weightier than a satisfaction report covering five hundred — but it isn't. Anecdotes are excellent for generating questions and terrible for answering them. Ask: how many cases is this conclusion standing on?</li>
<li><strong>Check the base rate.</strong> Before treating an event as meaningful, ask how often it happens normally. Two resignations in a month is alarming at a five-person company and routine at a five-hundred-person one.</li>
<li><strong>Ask the disconfirming question.</strong> The single strongest analytical habit: "What evidence would change my mind?" If the answer is "nothing," you're not analyzing — you're defending. Actively look for the strongest version of the opposing case before deciding.</li>
</ul>
<p>None of this requires statistics training. It requires pausing at the moment of certainty — which is exactly when errors get expensive.</p>
<h4>Apply this</h4>
<p>Find one confident claim in your feed or workplace this week. Run it through all four tests: causation, sample size, base rate, disconfirming evidence. Write down which test it fails, if any.</p>`
      },
      {
        title: 'Structured Decisions',
        minutes: 12,
        content: `
<p>Analysis earns its keep at the moment of decision. Two frameworks cover most professional situations.</p>
<p><strong>First, size the decision before you size the analysis.</strong> Decisions come in two types: <em>reversible</em> (you can undo it cheaply — a trial run, a draft, a small order) and <em>hard-to-reverse</em> (a signed lease, a public commitment, a hire). Reversible decisions should be made quickly with modest analysis — speed is worth more than precision, because the correction is cheap. Hard-to-reverse decisions deserve the full treatment. Most people invert this: agonizing over reversible choices and rushing irreversible ones.</p>
<p><strong>Second, for decisions that matter, use an options-and-criteria table.</strong> List your realistic options as rows. List what actually matters — cost, time, risk, upside — as columns. Score each cell honestly. The table rarely makes the decision for you, but it does three things a gut call can't: it exposes which criterion is really driving you, it makes the tradeoffs visible, and it gives you something concrete to show anyone who asks "why did you choose this?"</p>
<p>When you present a decision, use this order: <em>context in one sentence → the options you considered → your recommendation → the main risk and how you'll watch for it</em>. Leading with the recommendation's reasoning, not its conclusion, is what separates "trust me" from "here's my thinking" — and the second one is what earns bigger decisions.</p>
<h4>Apply this</h4>
<p>Take one real decision you're facing. First classify it: reversible or not? If reversible, decide today. If not, build the options-and-criteria table and notice which column secretly carries the most weight.</p>`
      },
      { title: 'Quiz: Analytical Thinking', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'adaptability-resilience',
    title: 'Adaptability & Resilience',
    pillar: 'professional',
    level: 'Core',
    minutes: 40,
    desc: 'Global employers rank resilience and agility among their top two skills, and expect roughly four in ten core job skills to change by 2030. The durable advantage is learning to change with them.',
    objectives: [
      'Understand why adaptability outperforms any single technical skill over a career',
      'Learn new skills quickly using a deliberate, repeatable method',
      'Respond to setbacks and career shocks with a prepared protocol'
    ],
    skills: ['Learning agility', 'Resilience', 'Career management'],
    lessons: [
      {
        title: 'The Case for Adaptability',
        minutes: 12,
        content: `
<p>The World Economic Forum estimates that roughly <strong>39% of workers' core skills will change by 2030</strong>, and employers consistently rank resilience, flexibility, and agility just behind analytical thinking on their most-wanted lists. LinkedIn's workplace research reached the same conclusion from the hiring side, naming adaptability the defining skill of the current economy.</p>
<p>The reason is structural, not fashionable. Technology now changes faster than job descriptions do. Any specific tool you master will be updated, replaced, or automated on a timeline you don't control. What holds its value is the <em>meta-skill</em>: the demonstrated ability to pick up whatever comes next. A person who has learned five unrelated skills has something more valuable than any of the five — evidence they can learn a sixth.</p>
<p>This reframes career security. Security is not a job title or an employer; those can vanish in a quarter. Security is a <strong>portfolio of transferable skills plus the proven capacity to add more</strong>. That's an asset no layoff, industry shift, or economic downturn can repossess — and it's precisely what lets people move between employment, self-employment, and back as conditions change.</p>
<p>The practical starting point is an honest audit: which of your current skills are rising in demand, which are flat, and which are being automated out from under you?</p>
<h4>Apply this</h4>
<p>List the five skills your income currently depends on. Next to each, write rising, stable, or declining — be honest, and search job postings if unsure. The declining ones tell you where to aim the learning method in the next lesson.</p>`
      },
      {
        title: 'Learning Agility: Acquiring Skills Fast',
        minutes: 14,
        content: `
<p>Fast learners aren't smarter; they follow a tighter loop. The method below compresses what research on skill acquisition consistently shows.</p>
<ol>
<li><strong>Define a performance target, not a topic.</strong> "Learn spreadsheets" is a wish. "Build a working budget tracker with formulas by the 30th" is a target — you'll know whether you hit it.</li>
<li><strong>Find the smallest real project.</strong> Courses and videos are supporting material, not the work. Skills form when you attempt the real thing at a small scale: an actual budget, a real cover letter, a genuine client task done cheap. Projects force the exact gaps tutorials let you skip.</li>
<li><strong>Practice in short, frequent sessions.</strong> Twenty focused minutes daily reliably beats a four-hour weekend binge, because memory consolidates between sessions. Consistency is the mechanism, not the decoration.</li>
<li><strong>Close the feedback loop fast.</strong> Every attempt needs a verdict — the formula worked or errored, the draft got comments, the practice interview got a critique. Practice without feedback just rehearses your mistakes. AI assistants are genuinely useful here as an always-available first reviewer.</li>
<li><strong>Expect the dip.</strong> Around the point where enthusiasm fades and competence hasn't arrived yet, most people quit. Knowing the dip is a normal, temporary phase of every skill curve is — by itself — a competitive advantage.</li>
</ol>
<h4>Apply this</h4>
<p>Pick one declining-skill replacement from your last exercise. Write a two-week plan on one line: the performance target, the small real project, and your daily 20-minute slot. Start tomorrow, not Monday.</p>`
      },
      {
        title: 'Resilience Under Pressure',
        minutes: 12,
        content: `
<p>Adaptability handles gradual change; resilience handles sudden impact — the layoff, the lost client, the failed launch. Resilient people aren't unaffected. They recover faster because they respond with a protocol instead of improvising while flooded.</p>
<p><strong>The sorting step.</strong> When a shock hits, divide everything on your mind into three lists: what you <em>control</em> (your actions, schedule, spending, applications), what you <em>influence</em> (other people's decisions you can affect but not dictate), and what you must <em>accept</em> (the market, the past, other people's choices). Energy spent on the third list is pure loss; the entire return on effort lives in the first list. This one exercise reliably converts panic into a task list.</p>
<p><strong>The stabilizers.</strong> Under stress, the fundamentals stop being optional: sleep, movement, and at least one honest conversation with someone you trust. Isolation is the accelerant of every career setback — people who tell their network they're looking find work dramatically faster than people who hide.</p>
<p><strong>The prepared playbook.</strong> Resilience is mostly built <em>before</em> the shock. A one-page "if it happens" plan — current résumé, a list of twenty contacts, one month's minimal budget number, the first five actions of a job or client search — turns a catastrophe into a bad week with a checklist. You'll likely never use it, and writing it measurably reduces the fear of needing it.</p>
<h4>Apply this</h4>
<p>Write your one-page shock playbook this week: the budget floor number, the twenty contacts, the first five moves. File it and forget it — the confidence stays behind.</p>`
      },
      { title: 'Quiz: Adaptability & Resilience', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'collaboration-leadership',
    title: 'Leadership & Team Collaboration',
    pillar: 'professional',
    level: 'Core',
    minutes: 45,
    desc: 'Leadership and social influence sits in employers’ global top five. Learn to lead without a title, make teams function, and manage upward with professionalism.',
    objectives: [
      'Build influence through ownership and reliability rather than authority',
      'Apply the mechanics that make teams effective, including structured feedback',
      'Manage upward and across with clear expectations and no surprises'
    ],
    skills: ['Leadership', 'Teamwork', 'Feedback'],
    lessons: [
      {
        title: 'Leading Without a Title',
        minutes: 14,
        content: `
<p>Employers rank <strong>leadership and social influence</strong> among the five most important skills in the global workforce — and the demand is not for titles, it's for behavior. Leadership behavior is observable long before any promotion, and it's what promotions respond to.</p>
<p>The behaviors that build influence from any seat:</p>
<ul>
<li><strong>Take ownership of outcomes, not just tasks.</strong> "I did my part" is task thinking. "The handoff failed, so I flagged it and proposed a fix" is ownership. People who think in outcomes get handed larger outcomes.</li>
<li><strong>Bring proposals, not just problems.</strong> Anyone can report that something is broken. "This is broken — here are two options, and I'd recommend the first because..." is the sentence that changes how a room treats you. It works even when your proposal isn't chosen, because it demonstrates you think at the next level.</li>
<li><strong>Be boringly reliable.</strong> Influence compounds from small kept promises: on time, as agreed, or an early heads-up when it can't be. One quiet year of reliability beats one loud quarter of brilliance.</li>
<li><strong>Distribute credit precisely.</strong> "Maria's analysis caught this" costs you nothing and buys enormous goodwill. Vague or hoarded credit is remembered just as precisely.</li>
</ul>
<p>None of these require permission — which is exactly why they signal leadership rather than compliance.</p>
<h4>Apply this</h4>
<p>In your next meeting or group setting, replace one problem-report with a problem-plus-proposal. Note the difference in how the conversation treats you afterward.</p>`
      },
      {
        title: 'The Mechanics of Effective Teams',
        minutes: 14,
        content: `
<p>Google's multi-year study of its own teams (Project Aristotle) found the strongest predictor of team performance wasn't talent, seniority, or workload — it was <strong>psychological safety</strong>: whether members could ask questions, admit mistakes, and raise concerns without fear of embarrassment or punishment.</p>
<p>Psychological safety is frequently misunderstood. It is <em>not</em> comfort, lowered standards, or the absence of disagreement — high-performing safe teams argue constantly. It means the argument targets ideas, not people, and that "I don't know" or "I was wrong" carries no penalty. You contribute to it from any seat: ask the question everyone is avoiding, own your errors quickly and plainly, and respond to others' mistakes with "what do we fix?" instead of "who do we blame?"</p>
<p>The second mechanic is <strong>structured feedback</strong>. Most feedback fails because it arrives as judgment ("you're careless") instead of information. The SBI pattern fixes this:</p>
<ul>
<li><strong>Situation:</strong> "In yesterday's client call…"</li>
<li><strong>Behavior:</strong> "…the pricing slide had last quarter's numbers…"</li>
<li><strong>Impact:</strong> "…which meant we had to walk it back by email, and the client noticed."</li>
</ul>
<p>Facts, behavior, consequence — no motives guessed, no character judged. The same structure works for positive feedback, and delivering precise positive feedback is one of the most underused influence tools in any workplace.</p>
<h4>Apply this</h4>
<p>Deliver one piece of SBI feedback this week — make it a positive one. Precision in praise builds the trust that makes corrective feedback survivable later.</p>`
      },
      {
        title: 'Managing Up and Across',
        minutes: 12,
        content: `
<p>Your manager and your peers experience exactly one version of you: the one visible in communication. Managing that channel deliberately is not politics — it's professionalism.</p>
<p><strong>Managing up rests on the no-surprises rule.</strong> Managers can absorb bad news; what they can't absorb is bad news they learned late. The tool is the proactive status update — three lines, unprompted, at a regular rhythm: what's done, what's next, what's blocked or at risk. People who send it get interrupted less, trusted more, and remembered at promotion time as "on top of things." It takes four minutes a week.</p>
<p><strong>Negotiate priorities with arithmetic, not apology.</strong> When new work lands on a full plate, the professional response is not silent overload or flat refusal — it's the visible tradeoff: "I can take this. To do it well, X slips to Thursday — is that the right trade?" You've said yes to the person while making the cost land where it belongs: on the priority list, not on your unpaid evenings.</p>
<p><strong>Across teams, assume friction is structural before assuming it's personal.</strong> The other department isn't slow because they're lazy; they have different incentives and their own overloaded queue. The move that unlocks cross-team work is understanding what <em>they're</em> measured on and framing your request in those terms. Allies are built in the asking, not the escalation.</p>
<h4>Apply this</h4>
<p>Send your first three-line status update this week without being asked: done, next, at-risk. Do it weekly for a month and watch what happens to the trust level.</p>`
      },
      { title: 'Quiz: Leadership & Collaboration', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= ENTREPRENEURSHIP & INDEPENDENT WORK ================= */
  {
    id: 'service-business',
    title: 'Turning Skills into a Service Business',
    pillar: 'business',
    level: 'Core',
    minutes: 45,
    desc: 'Independent work now involves more than a third of the U.S. workforce. A practical path from "skills I have" to "services people pay for" — whatever the economy is doing.',
    objectives: [
      'Inventory your transferable skills and identify which ones people pay for',
      'Design a specific, scoped, priced service offer',
      'Land your first paying clients without an advertising budget'
    ],
    skills: ['Service design', 'Pricing', 'Client acquisition'],
    lessons: [
      {
        title: 'The Skills Inventory',
        minutes: 14,
        content: `
<p>Workforce studies consistently estimate that over a third of U.S. workers now do some form of independent or freelance work — not because everyone became an entrepreneur, but because skills themselves became sellable in smaller units. The foundational insight: <strong>you don't need a business idea; you need an honest inventory of what you can already do that someone else can't or won't do themselves.</strong></p>
<p>Run the inventory in three columns:</p>
<ul>
<li><strong>Column 1 — What can I do?</strong> Include the skills you dismiss as ordinary: organizing chaos, writing clearly, fixing things, calming upset people, keeping books straight, setting up phones for relatives. The skills you find easy are the ones you undervalue most — and "easy for you, painful for them" is the exact definition of a market.</li>
<li><strong>Column 2 — Who pays for this?</strong> Every skill maps to buyers. Organized → small businesses drowning in admin. Good with spreadsheets → owners who don't know where their money goes. Patient teacher → families needing tutoring, seniors needing tech help. Reliable hands → property managers, event planners, movers.</li>
<li><strong>Column 3 — What's my proof?</strong> Not credentials — evidence. "Ran the schedule for a 40-person kitchen" is proof of operational skill. "Family calls me first when tech breaks" is proof of support skill. Proof is what converts "trust me" into "look."</li>
</ul>
<p>Your first service lives where the three columns intersect with one more filter: something you can tolerate doing repeatedly. Passion is optional; tolerance is mandatory.</p>
<h4>Apply this</h4>
<p>Build the three-column inventory now — minimum eight rows. Circle the two rows with the strongest combination of demand and proof. Those two go into the next lesson.</p>`
      },
      {
        title: 'Designing a Sellable Offer',
        minutes: 14,
        content: `
<p>The most common independent-work mistake is selling a vague capability: "I do bookkeeping" or "I can help with marketing." Buyers don't purchase capabilities — they purchase <strong>defined outcomes at known prices</strong>. That definition is called an offer, and it has four parts:</p>
<ul>
<li><strong>Who it's for.</strong> Narrow wins. "Bookkeeping for mobile food vendors" beats "bookkeeping" — the narrower audience hears you speaking directly to them, faces less competition, and refers you to identical businesses. You can always widen later; you can't be remembered as a generalist.</li>
<li><strong>The outcome.</strong> Name what they get, not what you do: "your last three months of transactions categorized and a one-page monthly summary," not "QuickBooks assistance."</li>
<li><strong>The scope.</strong> Exactly what's included, what isn't, and how long it takes. Scope is what protects both sides — and unscoped work is how service providers end up earning less than minimum wage on "quick" projects.</li>
<li><strong>The price.</strong> For defined scopes, use <strong>flat pricing</strong>, not hourly. Hourly punishes you for being fast, caps your income at your calendar, and makes buyers anxious about the meter. A flat "starter offer" — small, low-risk, quick to deliver — is the classic entry: it gets you the yes, the result, and the testimonial that sells the next one.</li>
</ul>
<p>Compress the whole thing into one sentence: <em>"I help [who] get [outcome] through [service], starting at [price]."</em> If you can't say it in one sentence, the offer isn't finished.</p>
<h4>Apply this</h4>
<p>Write the one-sentence offer for your strongest inventory row. Then write the starter version: smallest useful scope, one-week delivery, a price you can say out loud without flinching.</p>`
      },
      {
        title: 'Landing the First Clients',
        minutes: 12,
        content: `
<p>The first three clients never come from advertising. They come from the network you already have, approached with a specific offer instead of a vague announcement.</p>
<p><strong>Build the portfolio of one.</strong> Before anyone pays you, do the work once, visibly: your own books kept immaculately, a sample report, a before-and-after of the thing you fix. One concrete artifact outperforms any description of your potential.</p>
<p><strong>Use the discounted-first-clients play — correctly.</strong> Offer your first one or two clients a genuine discount in exchange for two named deliverables: honest feedback and, if satisfied, a testimonial and referral. This is not working for free, and it isn't forever — it's buying proof at a fair price. Free work with no defined endpoint teaches clients your work has no value; a discount with a stated reason teaches them the full price is coming.</p>
<p><strong>Work a warm list of twenty.</strong> List twenty people who know you: former colleagues, neighbors, community members. Send a short, specific message — not "I'm starting a business!" but "I've started helping [who] with [outcome]. If you know anyone dealing with [problem], I'd appreciate the introduction." Specific requests get forwarded; vague announcements get liked.</p>
<p><strong>Follow up twice.</strong> Most yeses arrive on the second contact. Silence usually means busy, not no — one polite follow-up a week later is professional persistence, and it's where most beginners quit right before the first client says yes.</p>
<h4>Apply this</h4>
<p>Write your twenty-person warm list today and send the first five messages. Use the specific format above. Track responses — the pattern will teach you more than any course can.</p>`
      },
      { title: 'Quiz: Service Business', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'market-yourself',
    title: 'Marketing & Client Development',
    pillar: 'business',
    level: 'Core',
    minutes: 40,
    desc: 'Positioning, the few channels that actually work at small scale, and sales conversations that feel like problem-solving instead of pressure.',
    objectives: [
      'Write a clear positioning message and back it with proof',
      'Choose one acquisition channel and work it consistently',
      'Run discovery-first sales conversations and handle price objections'
    ],
    skills: ['Positioning', 'Client development', 'Consultative selling'],
    lessons: [
      {
        title: 'Positioning: Findable and Memorable',
        minutes: 12,
        content: `
<p>Marketing for an independent professional is not advertising — it's <strong>being easy to describe</strong>. Every client you'll ever get arrives through a sentence someone says about you: "You should talk to her, she does exactly that." Positioning is the craft of making that sentence effortless.</p>
<p>The working formula: <strong>who you serve + the problem you remove + the outcome you deliver</strong>. "I help small landlords keep their books clean and their taxes ready" is positioning. "I'm exploring freelance accounting opportunities" is fog. People cannot refer fog.</p>
<p>Then make every surface repeat the same sentence. Your one-line intro, your online profiles, your email signature, how you answer "so what do you do?" — identical story everywhere. This consistency is the entire mechanism of being remembered; variety is what kills word of mouth.</p>
<p>Finally, attach <strong>proof</strong>. Three forms work at any scale:</p>
<ul>
<li><strong>Testimonials</strong> — two sentences from a real client, with a name, beats paragraphs of self-description.</li>
<li><strong>Before-and-after</strong> — the shoebox of receipts vs. the clean monthly report; the cluttered garage vs. the organized one. Visible transformation sells silently.</li>
<li><strong>Numbers</strong> — "12 clients," "3 years," "same-week turnaround." Specificity reads as truth.</li>
</ul>
<h4>Apply this</h4>
<p>Write your positioning sentence using the formula, then update your most-seen surface (likely your LinkedIn headline or how you introduce yourself) to match it exactly. One sentence, everywhere, until people can repeat it back to you.</p>`
      },
      {
        title: 'Channels That Work at Small Scale',
        minutes: 14,
        content: `
<p>Big companies spread budget across ten channels. Independent professionals win by the opposite move: <strong>one channel, worked consistently, until it produces</strong>. Scattered effort across five platforms produces five invisible presences.</p>
<p>The channels that reliably work with no budget, ranked by typical return:</p>
<ol>
<li><strong>Referrals — engineered, not hoped for.</strong> Word of mouth is the top source of service clients everywhere, but it responds to management. Every satisfied client gets the ask, phrased for forwarding: "If you know another [landlord/parent/shop owner] dealing with [problem], I'd be grateful for the introduction." Then thank every referrer visibly, whether or not the lead converts — thanked referrers refer again.</li>
<li><strong>Local and community networks.</strong> Chambers of commerce, neighborhood groups, faith communities, the library bulletin board (physical and digital). For local services these outperform every algorithm, because trust is pre-installed.</li>
<li><strong>Adjacent-provider partnerships.</strong> Find the people who serve your customer before or after you do. A bookkeeper's best referral sources are tax preparers who don't do books. A tutor's is the testing center. One good adjacent partner can quietly fill a calendar.</li>
<li><strong>One platform, done properly.</strong> If your buyers are businesses, LinkedIn; if local consumers, a complete Google Business profile with reviews. Post or update on a fixed weekly rhythm. Consistency beats cleverness — the goal is to exist reliably where your buyer already looks.</li>
</ol>
<h4>Apply this</h4>
<p>Choose exactly one channel from the list — the one where your buyers actually are. Define its weekly action (two referral asks, one community appearance, one post) and put it on your calendar as a recurring block. Review results in 30 days before even considering a second channel.</p>`
      },
      {
        title: 'Sales Conversations, Honestly',
        minutes: 12,
        content: `
<p>Most new independents dread selling because they picture pressure. Professional selling is the opposite discipline: <strong>diagnosis before prescription</strong>. The person who asks the best questions — not the one with the smoothest pitch — wins the client, because buyers hire the person who understood the problem.</p>
<p><strong>Open with discovery, not description.</strong> Prepare five questions and let them run the first two-thirds of the conversation: What's the situation now? What have you already tried? What happens if this stays unsolved? When do you need it handled? What would a great outcome look like? By the end, half the time the client has talked themselves into hiring you — and the other half, you've learned the fit is wrong <em>before</em> wasting a month proving it.</p>
<p><strong>Propose in writing, briefly.</strong> One page: the problem as they described it (their words — this matters), the scope, the timeline, the flat price, and the single next step. Speed counts: a same-day one-pager beats a two-week glossy document every time.</p>
<p><strong>Handle "it's too expensive" by resizing scope, never rate.</strong> "I understand — we could start with just the last quarter instead of the full year, which brings it to X." Cutting your rate teaches clients the price was padded; cutting scope respects both the budget and your value. And when a project is truly mispriced for the buyer, a graceful referral elsewhere earns goodwill that routinely returns as future work.</p>
<p><strong>Follow up twice, then rest.</strong> Two polite follow-ups a week apart. Most deals close on contact two or three; pestering past that spends reputation you'll want later.</p>
<h4>Apply this</h4>
<p>Script your five discovery questions for your specific offer and rehearse them aloud once. Then build your one-page proposal template so it's ready the moment a conversation goes well.</p>`
      },
      { title: 'Quiz: Marketing & Clients', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'money-basics',
    title: 'Money Fundamentals for Independent Work',
    pillar: 'business',
    level: 'Core',
    minutes: 45,
    desc: 'The financial discipline that keeps independent work sustainable: separated accounts, professional invoicing, tax readiness, and a cushion that buys you calm.',
    objectives: [
      'Separate business and personal finances with simple bookkeeping',
      'Invoice professionally, take deposits, and control scope creep',
      'Prepare for taxes and build a financial cushion — knowing when to consult professionals'
    ],
    skills: ['Bookkeeping basics', 'Invoicing', 'Financial planning'],
    lessons: [
      {
        title: 'Separate the Money',
        minutes: 14,
        content: `
<p>The single highest-leverage financial habit for independent work costs nothing and takes an afternoon: <strong>separate business money from personal money completely</strong>. One dedicated account (a second free checking account is fine to start) that receives every client payment and pays every business expense.</p>
<p>Why this matters more than it sounds:</p>
<ul>
<li><strong>You can finally see the business.</strong> Mixed accounts hide whether you're actually profitable. Separated, one glance answers it: money in, money out, what's left.</li>
<li><strong>Taxes become an export instead of an archaeology dig.</strong> Every transaction in one place turns tax season from a shoebox nightmare into a list.</li>
<li><strong>It changes your own psychology.</strong> A business with its own account gets treated like a business — priced like one, defended like one.</li>
</ul>
<p>Pair the account with <strong>minimum viable bookkeeping</strong>: a simple ledger — a spreadsheet is genuinely enough at the start — with date, client/vendor, description, category, and amount. (The Spreadsheet Basics course in the Technical pillar builds exactly this skill.) Update it on a fixed 20-minute weekly appointment; weekly entries take minutes, quarterly archaeology takes weekends. Keep every receipt in one folder, digital or physical — many business expenses reduce your taxable income, but only if you can prove them.</p>
<p>Monthly, answer three questions from the ledger: What came in? What went out? Which service or client produced the most profit? That third answer quietly steers the whole business.</p>
<h4>Apply this</h4>
<p>Open or designate the separate account this week, and build the five-column ledger with your last month of activity. Book the recurring 20-minute weekly slot now — the habit is the tool.</p>`
      },
      {
        title: 'Invoicing, Deposits, and Scope',
        minutes: 14,
        content: `
<p>Getting paid fully and on time is not luck — it's paperwork discipline. Three documents do the protecting.</p>
<p><strong>The professional invoice.</strong> Every invoice needs: a unique number (start at 1001; nobody needs to know you're new), issue date, your details, the client's details, an itemized description matching the agreed scope, the total, payment methods, and — critically — <strong>payment terms with a real due date</strong>. "Due within 15 days" (net-15) is a reasonable default for small services. Send the invoice the day the work completes; every day of delay signals the money isn't urgent to you either.</p>
<p><strong>The deposit.</strong> For new clients or multi-week projects, take 25–50% up front before work begins. A deposit isn't distrust — it's mutual commitment: the client is real, and your calendar is genuinely reserved. Established professionals in every field do this; adopting it early marks you as one.</p>
<p><strong>The change order.</strong> Scope creep — "while you're at it, could you also…" — is the silent killer of service income. The fix is a friendly, firm sentence: <em>"Happy to add that — it's outside our original scope, so I'll send a quick quote for the addition."</em> Clients respect it, and the ones who don't were planning to consume you regardless. Better to learn that on invoice two than invoice ten.</p>
<p>When payment goes late: a polite reminder at day 3, a direct one at day 14 with a copy of the invoice, and for new clients going forward, deposits get larger. Calm persistence collects; awkward silence doesn't.</p>
<h4>Apply this</h4>
<p>Build your invoice template today with every element above, and write your change-order sentence word-for-word so it's ready before the first "while you're at it" arrives.</p>`
      },
      {
        title: 'Taxes and the Cushion',
        minutes: 12,
        content: `
<p>Independent income arrives untaxed, and the single most common first-year disaster is spending money that was never yours. Two disciplines prevent it.</p>
<p><strong>The automatic set-aside.</strong> Move a fixed percentage of every single payment into a separate savings account the day it arrives — commonly cited guidance for U.S. self-employment falls in the 25–30% range, since independent workers pay both income tax and self-employment tax, and may owe <strong>quarterly estimated payments</strong> rather than one annual bill. The exact right percentage depends on your income, state, and situation — <em>this is a "consult a qualified tax professional" item, and one meeting with a tax preparer or CPA in your first earning year is among the best money a new independent spends.</em> What isn't negotiable is the mechanism: automatic, immediate, every payment, no exceptions. If the set-aside proves generous, you get a refund from yourself.</p>
<p><strong>The cushion.</strong> Independent income is lumpy — strong months and silent ones. The difference between professionals who survive the silent months and those who panic-discount their way through them is a buffer of one to three months of minimal expenses, built by skimming something from every strong month. The cushion isn't just safety; it's <strong>negotiating power</strong> — the financial ability to say no to bad clients and bad prices.</p>
<p>As income grows, two more professional-consult questions arise: whether registering a formal business entity (such as an LLC) makes sense for your liability and tax situation, and whether you need business insurance for your type of work. Both are jurisdiction-specific — flag them for a professional rather than guessing from internet forums.</p>
<h4>Apply this</h4>
<p>Set up the second savings account and pick your set-aside percentage this week. Then write down the two questions you'd bring to a tax professional — and price what one consultation costs in your area. It's less than the penalty for guessing wrong.</p>`
      },
      { title: 'Quiz: Money Fundamentals', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= FOUNDATIONAL & EXPANSION — PERSONAL ================= */
  {
    id: 'learning-to-learn',
    title: 'Learning How to Learn',
    pillar: 'personal',
    level: 'Foundational',
    minutes: 40,
    desc: 'The foundational skill behind every other one: how memory actually works, the practice techniques research supports, and a routine that fits real life.',
    objectives: [
      'Use retrieval practice and spacing instead of rereading and cramming',
      'Apply proven techniques: self-testing, interleaving, and the explain-it-simply method',
      'Design a sustainable learning routine around your actual schedule'
    ],
    skills: ['Study skills', 'Memory techniques', 'Self-directed learning'],
    lessons: [
      {
        title: 'How Memory Actually Works',
        minutes: 12,
        content: `
<p>Most people study the way that feels productive — rereading, highlighting, watching explanations on repeat. Cognitive science has tested those methods for decades, and the verdict is consistent: they produce <em>familiarity</em>, not learning. The material feels known because you've seen it before, then vanishes when you need it.</p>
<p>What actually builds memory is <strong>retrieval</strong> — the act of pulling information out of your head. Every time you force yourself to recall something without looking, the memory physically strengthens. Testing yourself isn't a way to measure learning; it <em>is</em> the learning. In controlled studies, students who self-tested once recalled dramatically more a week later than students who reread the material four times.</p>
<p>The second pillar is <strong>spacing</strong>. Memory fades on a predictable curve, and the most efficient moment to review something is right when you're starting to forget it. Three 20-minute sessions across a week beat one 60-minute session every time — same minutes, entirely different retention. Cramming works for tomorrow morning and almost nothing else.</p>
<p>One more reframe: the effort you feel when recall is hard is not a sign of failure. Researchers call it <em>desirable difficulty</em> — the strain is the signal that the memory is being built. Easy studying is usually fake studying.</p>
<h4>Apply this</h4>
<p>Take something you learned this week. Close everything and write down all you can remember — then check what you missed. That five-minute exercise just did more for retention than an hour of rereading would have.</p>`
      },
      {
        title: 'The Practice Toolkit',
        minutes: 14,
        content: `
<p>Four techniques cover most of what learning science recommends. None require talent — only the willingness to practice slightly uncomfortably.</p>
<ul>
<li><strong>Self-testing, constantly.</strong> Turn everything into questions. After a lesson, ask: what were the three main points? Flashcards (paper or a free app) automate this — but only if you genuinely attempt the answer before flipping. Peeking early converts the exercise back into rereading.</li>
<li><strong>Spaced review.</strong> Review new material the next day, then a few days later, then a week later. Each successful recall lets you wait longer before the next one. Five minutes at the right moments beats an hour at the wrong one.</li>
<li><strong>Interleaving.</strong> Mix related skills within one session instead of drilling one thing in a block. Practicing A-B-C-A-C-B feels messier than A-A-B-B-C-C — and produces reliably better real-world performance, because life doesn't tell you which type of problem is coming.</li>
<li><strong>The explain-it-simply test.</strong> Try to explain the concept to an imaginary twelve-year-old, out loud or on paper. Wherever you reach for jargon or stall, you've found the exact gap in your understanding. This technique (often called the Feynman method) is the fastest gap-detector that exists — and an AI assistant makes a patient practice audience.</li>
</ul>
<h4>Apply this</h4>
<p>Pick one course in this platform you've completed. Without opening it, write its three biggest ideas from memory, then explain one of them in plain language. Whatever you couldn't retrieve — that's your review list.</p>`
      },
      {
        title: 'A Routine That Survives Real Life',
        minutes: 12,
        content: `
<p>Techniques fail without a delivery system. The delivery system is a routine small enough that the busiest version of you still does it.</p>
<p><strong>Shrink the session, raise the frequency.</strong> Twenty minutes daily outperforms two hours on Sunday — for memory consolidation and for habit survival. Attach the session to an anchor that already happens: after morning coffee, during a commute (audio lessons exist for exactly this), lunch break. The anchor does the remembering for you.</p>
<p><strong>Protect sleep like it's part of the curriculum — because it is.</strong> Memory consolidation happens during sleep; the brain literally replays and files what you practiced. A late-night cram session that costs sleep usually subtracts more than it adds.</p>
<p><strong>Track streaks of showing up, not hours logged.</strong> The metric that predicts success is consistency. A visible chain of days — marked on paper or anywhere — builds its own momentum. Miss a day? The rule is never two.</p>
<p><strong>Expect plateaus.</strong> Progress in any skill is stair-shaped: bursts, then flat stretches where nothing seems to improve. Plateaus are where consolidation happens and where most people quit. Knowing the shape of the curve in advance is protection.</p>
<p>For a multipotential learner — someone building several skills for several possible futures — this routine is the master key. Content changes; the system that acquires it doesn't.</p>
<h4>Apply this</h4>
<p>Define your anchor and your minimum viable session right now: "After [existing habit], I do 20 minutes." Schedule the first three days. Then start the chain.</p>`
      },
      { title: 'Quiz: Learning How to Learn', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'personal-finance',
    title: 'Personal Finance Essentials',
    pillar: 'personal',
    level: 'Foundational',
    minutes: 45,
    desc: 'Financial literacy is consistently ranked among the most needed — and least taught — life skills in America. Budgeting, credit, debt, and savings, in plain language.',
    objectives: [
      'Build a one-page budget you will actually maintain',
      'Understand how credit scores work and manage debt strategically',
      'Automate savings and build an emergency fund from any income level'
    ],
    skills: ['Budgeting', 'Credit management', 'Saving'],
    lessons: [
      {
        title: 'The One-Page Budget',
        minutes: 14,
        content: `
<p>Surveys repeatedly find that a majority of Americans couldn't cover a modest unexpected expense without borrowing — not primarily an income problem, but a <em>visibility</em> problem. A budget isn't a punishment; it's a map of money you already have.</p>
<p>The simplest durable framework is <strong>50/30/20</strong>: roughly 50% of take-home pay to needs (housing, utilities, food, transport, minimum debt payments), 30% to wants, and 20% to savings and extra debt payoff. Your real numbers will differ — the percentages are a compass, not a law. If needs eat 70% right now, the framework's job is simply to make that visible so decisions become deliberate.</p>
<p>Build it in four steps, one page, thirty minutes:</p>
<ol>
<li><strong>Find your real take-home</strong> — what actually lands in your account monthly.</li>
<li><strong>List fixed needs</strong> from your last two bank statements — the statements, not your memory. Memory lies; statements don't.</li>
<li><strong>Give every remaining dollar a name</strong> — wants, savings, debt. Unnamed money evaporates.</li>
<li><strong>Review for ten minutes weekly.</strong> The budget that works is the one that gets looked at. (The Spreadsheet Basics course builds a tracker for exactly this.)</li>
</ol>
<p>The single most powerful line on the page is <strong>pay yourself first</strong>: savings transferred automatically on payday, before spending starts, at any amount. Ordering beats willpower.</p>
<h4>Apply this</h4>
<p>Pull your last month's statement and sort every transaction into needs / wants / savings. Most people find one recurring charge they forgot existed — cancel it, and you've already paid for this course's time.</p>`
      },
      {
        title: 'Credit and Debt, Demystified',
        minutes: 14,
        content: `
<p>Your credit score is a three-digit summary of how you've handled borrowed money — and it quietly prices your life: loan rates, apartment applications, insurance in many states, even some job screenings. The mechanics are less mysterious than the industry makes them sound.</p>
<p>The two factors that dominate the score: <strong>payment history</strong> (pay at least the minimum, on time, every time — a single late payment reported can hurt for years) and <strong>utilization</strong> (how much of your available credit you're using; keeping cards below roughly 30% of their limits, and lower is better). Length of history, new applications, and account mix matter less. Check your reports free at <em>annualcreditreport.com</em> — the official site — and dispute errors, which are common.</p>
<p>For paying down multiple debts, two proven strategies:</p>
<ul>
<li><strong>Avalanche:</strong> extra payments to the highest interest rate first. Mathematically optimal.</li>
<li><strong>Snowball:</strong> smallest balance first. Psychologically powerful — early wins keep people going.</li>
</ul>
<p>The best method is whichever one you'll sustain. What matters far more than the choice: avoid <strong>predatory debt</strong> — payday loans, title loans, rent-to-own, and "buy now pay later" stacking routinely carry effective rates that trap borrowers in cycles. If you're already caught in one, nonprofit credit counseling (look for NFCC-affiliated agencies) is a legitimate, low-cost resource — and for major decisions like bankruptcy or debt settlement, consult a qualified professional rather than an advertisement.</p>
<h4>Apply this</h4>
<p>Pull your free credit report this week and check it for errors. Then list your debts with balance and interest rate — seeing the full picture on one page is the step most people never take.</p>`
      },
      {
        title: 'Saving: The Cushion and the Compound',
        minutes: 12,
        content: `
<p>Savings has two jobs, in order: <strong>absorb shocks</strong>, then <strong>build the future</strong>.</p>
<p><strong>Job one: the emergency fund.</strong> The first target is small and achievable — $500 to $1,000, enough to make a car repair or medical bill an inconvenience instead of a debt spiral. Then grow it toward one month of essential expenses, eventually three. Keep it in a separate <em>high-yield savings account</em> (online banks commonly pay many times what traditional branches pay) — separate enough that you don't see it daily, reachable enough for a true emergency.</p>
<p><strong>The mechanism is automation, not discipline.</strong> An automatic transfer on payday — even $10 — beats a sincere intention of $100. Savings that requires a monthly decision loses to whatever that month throws at you. Start with an amount so small it's embarrassing; raise it when raises come. The habit is the asset; the balance follows.</p>
<p><strong>Job two: compounding.</strong> Money saved earns returns, and the returns earn returns. Time is the dominant ingredient — which is why starting small and early beats starting big and late. If your employer offers a retirement plan with matching contributions, capture the full match before any other investing goal: it is the closest thing to free money in personal finance. Beyond the basics, investment choices depend on your situation — <em>that's the point where a qualified, fee-transparent financial advisor earns their cost</em>, not a social media personality.</p>
<h4>Apply this</h4>
<p>Set up one automatic transfer today, on payday, to a separate savings account — any amount. Then check one thing at work: does your employer match retirement contributions, and are you capturing all of it?</p>`
      },
      { title: 'Quiz: Personal Finance', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= EXPANSION — PROFESSIONAL ================= */
  {
    id: 'creative-thinking',
    title: 'Creative Thinking & Innovation',
    pillar: 'professional',
    level: 'Core',
    minutes: 40,
    desc: 'Ranked in the global top five workplace skills and rising. Creativity is a trainable process — divergence, technique, and turning ideas into pitches people accept.',
    objectives: [
      'Separate divergent idea generation from convergent evaluation',
      'Use structured techniques to produce ideas on demand',
      'Move an idea from concept to a pitch stakeholders can say yes to'
    ],
    skills: ['Creative thinking', 'Ideation', 'Innovation'],
    lessons: [
      {
        title: 'Creativity Is a Process, Not a Gift',
        minutes: 12,
        content: `
<p>The World Economic Forum places <strong>creative thinking</strong> in the top five skills employers need most — right beside analytical thinking, and growing faster. That surprises people who assume creativity is an artistic personality trait. In the workplace, creativity means something specific and learnable: <em>producing useful options that weren't obvious.</em></p>
<p>The core mechanic is separating two modes that most people mash together:</p>
<ul>
<li><strong>Divergent mode</strong> generates options — many, fast, without judgment. Quantity is the goal, because idea quality follows idea quantity: the research on creative output consistently shows the best ideas arrive after the obvious ones are exhausted, usually well past idea ten.</li>
<li><strong>Convergent mode</strong> evaluates — filters, combines, selects. Essential, but lethal when it runs during generation. The inner critic that says "that won't work" at idea three is why brainstorms die.</li>
</ul>
<p>Run them in sequence, never in parallel: a timer for pure generation (nothing gets judged), then a break, then evaluation with criteria. This one separation doubles the useful output of most people and most meetings.</p>
<p>One more counterintuitive finding: <strong>constraints fuel creativity rather than blocking it</strong>. "Improve the checkout process" produces stares; "improve checkout without spending money or adding staff" produces ideas. When stuck, add a constraint — the box gives the mind traction.</p>
<h4>Apply this</h4>
<p>Pick a real problem and set a five-minute timer. Write twenty possible approaches — no judging, bad ideas welcome, past ten is where it gets interesting. Only after the timer: circle two worth exploring.</p>`
      },
      {
        title: 'Techniques That Produce Ideas on Demand',
        minutes: 14,
        content: `
<p>Professionals don't wait for inspiration; they run procedures. Three that work reliably:</p>
<ul>
<li><strong>SCAMPER the existing thing.</strong> Take a current product, process, or service and interrogate it: <em>Substitute</em> (a cheaper material, a different audience?), <em>Combine</em> (merge two steps, two offers?), <em>Adapt</em> (what works elsewhere that could work here?), <em>Modify</em> (bigger, smaller, faster?), <em>Put to other use</em>, <em>Eliminate</em> (what if we removed this step entirely?), <em>Reverse</em> (what if the customer did this part?). Seven lenses, each forcing a non-obvious angle.</li>
<li><strong>Import from another industry.</strong> Most "innovation" is translation: hospitals adopted checklists from aviation; restaurants adopted order-ahead from coffee apps. Ask: who else has solved a problem shaped like mine — in a completely different field? Being interested in many domains is a professional advantage here; the more fields you touch, the more raw material you can import.</li>
<li><strong>Invert it.</strong> When "how do we improve retention?" stalls, ask "how would we guarantee everyone quits?" — then reverse each answer. The failure list is always easy to generate, and its mirror image is an improvement plan. The worst-idea warm-up works the same way: deliberately terrible ideas dissolve the fear of judgment that blocks good ones.</li>
</ul>
<p>Capture matters as much as generation: ideas arrive on walks and in showers because relaxed attention connects distant material. Keep one dedicated capture place — a note on your phone — and empty it weekly into somewhere you'll act.</p>
<h4>Apply this</h4>
<p>Run SCAMPER against one product or process you know well — one sentence per letter. Seven sentences, ten minutes, and notice how many you'd genuinely consider.</p>`
      },
      {
        title: 'From Idea to Yes',
        minutes: 12,
        content: `
<p>Ideas don't fail in the notebook; they fail at the pitch. Getting to yes is a craft with three moves.</p>
<p><strong>Prototype at embarrassing speed.</strong> Before asking anyone to approve an idea, make the smallest real version of it: a sketch, a one-page mock, a manual walkthrough of the process, a single test customer. A rough prototype answers questions that debate never settles — and "here's what I tried" earns a fundamentally different conversation than "here's what I think."</p>
<p><strong>Frame novelty as risk reduction.</strong> Decision-makers don't reject ideas because they hate newness; they reject unpriced risk. So price it for them: "We'd pilot it with one team for two weeks; the cost is X hours; if the metric doesn't move, we stop." A reversible, measured, time-boxed proposal converts "that's risky" into "that's cheap to find out." Small yes first; the big yes rides on its results.</p>
<p><strong>Invite critique before the decision, not after.</strong> Show the prototype to the skeptics early and ask them to break it. Their objections either improve the idea or become the exact list your pitch must answer — and people who were consulted become co-owners rather than opponents.</p>
<p>Then close the loop: whatever the pilot shows, report it plainly. A culture-level truth worth internalizing — the person who runs cheap experiments and reports honest results gets funded again, whether or not the first idea worked.</p>
<h4>Apply this</h4>
<p>Take your best current idea and design its two-week, low-cost, reversible pilot: what's tested, what it costs, what number decides. Write it in three sentences — that's a pitch.</p>`
      },
      { title: 'Quiz: Creative Thinking', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'project-management',
    title: 'Project Management Essentials',
    pillar: 'professional',
    level: 'Core',
    minutes: 45,
    desc: 'Industry projections estimate millions of project-oriented roles opening this decade. The fundamentals — scope, planning, execution — apply to any job that has deadlines.',
    objectives: [
      'Define scope and a "definition of done" before work begins',
      'Plan with milestones, owners, and realistic buffers',
      'Run projects with a status rhythm, a risk log, and clean closure'
    ],
    skills: ['Project planning', 'Execution', 'Risk management'],
    lessons: [
      {
        title: 'Why Projects Fail Before They Start',
        minutes: 14,
        content: `
<p>The Project Management Institute has projected demand for tens of millions of project-capable workers this decade — because more and more work in every industry arrives as a <em>project</em>: a defined outcome, a deadline, limited resources. You don't need the job title to need the skill.</p>
<p>Most failed projects fail at the definition stage, quietly. Two tools prevent it:</p>
<p><strong>The triangle.</strong> Every project balances three constraints — <strong>scope</strong> (what gets delivered), <strong>time</strong> (when), and <strong>resources</strong> (people, money, attention). You cannot fix all three by wishing; when one moves, another must. The professional move is making the triangle explicit at kickoff: "We can deliver this scope by this date with these resources. If the date must move up, we cut scope or add hands — which?" Projects without that conversation have it later, as a crisis.</p>
<p><strong>Definition of done.</strong> "Redesign the intake form" means five different things to five people. Write the finish line as a checkable sentence: "New form live, tested with five staff, old form retired, instructions updated." When done is checkable, disagreements surface at the start — when they're cheap — instead of at delivery, when they're expensive.</p>
<p>Finally, list your <strong>stakeholders</strong> — everyone who can bless, block, or break the project — and ask each what success looks like <em>to them</em>. The unconsulted stakeholder discovered in week six is a project-management classic for a reason.</p>
<h4>Apply this</h4>
<p>Take one thing on your plate and write its definition of done as a checkable sentence, plus its triangle: scope, date, resources. If you can't fill all three, you've found the conversation to have this week.</p>`
      },
      {
        title: 'Planning Without Drowning',
        minutes: 14,
        content: `
<p>A plan's job is not to predict the future — it's to make problems visible early. The lightweight version that works for most projects:</p>
<ol>
<li><strong>Break the outcome into milestones</strong> — three to six visible checkpoints, each a real, demonstrable thing ("draft reviewed," "pilot running"), not a percentage. Percentages lie; demos don't.</li>
<li><strong>Break milestones into tasks small enough to finish in a day or two.</strong> A task that lingers a week is usually several tasks hiding in one — and hiding is where delays live.</li>
<li><strong>Give every task one owner and one date.</strong> One owner: shared ownership is no ownership. A team of "we'll all handle it" delivers nothing on time.</li>
<li><strong>Add buffer honestly.</strong> Estimates are systematically optimistic — the planning fallacy is one of the most replicated findings in psychology. Add 30–50% to first estimates, and put the buffer at the project level (a slack week before the deadline) rather than padding every task.</li>
</ol>
<p><strong>Tools: the simplest one you'll actually maintain.</strong> A shared checklist or a three-column board — To do / Doing / Done — covers most real projects; that's the whole idea behind kanban. The board's power is one rule: <em>limit how much sits in "Doing."</em> Three things in progress finish; ten things in progress age. Fancier software adds value only when the project outgrows the board, not before.</p>
<h4>Apply this</h4>
<p>Plan one real project on a single page: milestones, day-sized tasks for the first milestone only, one owner and one date each, and a named buffer. Detail for later milestones can wait — plans are drawn in pencil past the first checkpoint.</p>`
      },
      {
        title: 'Running It and Landing It',
        minutes: 12,
        content: `
<p>Execution is a rhythm, not a heroic sprint. Three practices carry a project from kickoff to clean landing:</p>
<p><strong>The status rhythm.</strong> A short, fixed-schedule check — weekly for most projects — with three questions per workstream: what finished, what's next, what's blocked. Blockers get an owner and a date on the spot. This rhythm is what keeps small slippages from compounding silently into big ones; a project that skips two check-ins is a project flying blind.</p>
<p><strong>The risk log.</strong> One running list: what could go wrong, how likely, how bad, and what we'd do. Ten minutes at kickoff and a glance each week. The point isn't prophecy — it's that a risk you've named gets a response plan, while a risk you haven't becomes a Friday-afternoon emergency. Pair it with scope discipline: every "small addition" mid-project gets the same sentence used in client work — "we can add that; here's what it costs in time or what it displaces."</p>
<p><strong>The landing.</strong> Projects end sloppily by default — the deliverable ships and everyone scatters. Close deliberately: check the definition of done line by line, hand off ownership of whatever now needs maintaining, thank contributors specifically, and hold a 30-minute <strong>retrospective</strong>: what went well, what didn't, what we'd change next time — captured in writing. Teams that skip retros repeat their mistakes on schedule; teams that hold them compound their skill with every project.</p>
<h4>Apply this</h4>
<p>Install the rhythm on your current project this week: book the recurring 15-minute check-in, start the risk log with its top three entries, and put the retro on the calendar now — for the day after the deadline.</p>`
      },
      { title: 'Quiz: Project Management', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= FOUNDATIONAL & EXPANSION — WORKFORCE ================= */
  {
    id: 'job-search-foundations',
    title: 'Job Search Foundations',
    pillar: 'workforce',
    level: 'Foundational',
    minutes: 40,
    desc: 'How the job market actually fills positions, applications that get responses, and how to protect your energy — and your identity — through the search.',
    objectives: [
      'Understand where jobs are actually found — and spot fake postings',
      'Send fewer, better applications with a tracking system',
      'Sustain momentum and use free local resources through a longer search'
    ],
    skills: ['Job search strategy', 'Applications', 'Scam awareness'],
    lessons: [
      {
        title: 'How Jobs Actually Get Filled',
        minutes: 12,
        content: `
<p>The biggest job-search mistake is treating job boards as the whole market. Surveys of how people actually land roles consistently show a large share — often cited around 40–70% depending on industry — come through <strong>referrals and personal connections</strong>, many for positions that were never posted publicly. The market has a visible layer and a hidden one, and the hidden one is bigger than it looks.</p>
<p>A balanced search works three channels at once:</p>
<ul>
<li><strong>Network activation.</strong> Not "networking events" — simply telling people you know, specifically: "I'm looking for [role type]; if you hear of anything or know someone I should talk to, I'd appreciate it." Specific requests travel; vague announcements don't. Former coworkers are the highest-value contacts, because they can vouch for your work.</li>
<li><strong>Direct approach.</strong> Identify employers you'd want even if they have no posting, and reach the hiring manager or apply through their site. Timing luck is real: arriving right before a posting exists means no competition.</li>
<li><strong>Boards — with a filter.</strong> Useful, but treat them as one channel, and beware <strong>fake postings</strong>: scam listings harvest personal data or run fake-check schemes. Red flags: pay far above market for vague duties, interviews conducted entirely by chat app, requests for your bank details or ID documents before an offer, or any request to pay for equipment or training. No legitimate employer asks you to send money.</li>
</ul>
<h4>Apply this</h4>
<p>Write your specific one-sentence ask, then send it to five people who know your work. This single action outperforms a weekend of scrolling job boards.</p>`
      },
      {
        title: 'Applications That Get Responses',
        minutes: 14,
        content: `
<p>Application volume feels productive; application <em>fit</em> gets interviews. Recruiters and tracking software both reward the same thing — visible match between your materials and the posting.</p>
<ul>
<li><strong>Tailor the top third.</strong> You don't rewrite your résumé per job; you retune it. Adjust the summary line and reorder your top bullets so the posting's main requirements appear — in its vocabulary — in the first third of the page (the Résumé & Personal Branding course covers the mechanics). Ten tailored applications beat fifty identical ones, consistently.</li>
<li><strong>Use the cover letter only where it counts.</strong> When requested or when you genuinely want the role, write three short paragraphs: why them specifically, the one or two proofs that you fit, and a confident close. Generic letters are read as generic interest.</li>
<li><strong>Track everything.</strong> A simple spreadsheet — company, role, date applied, contact, status, follow-up date — turns a chaotic search into a managed pipeline. Follow up once, about a week after applying, briefly and politely. It moves a surprising number of applications out of the pile.</li>
<li><strong>Prepare references before you need them.</strong> Ask two or three people in advance, tell them what roles you're pursuing, and send them your current résumé. A warm, prepared reference reads completely differently from an ambushed one.</li>
</ul>
<h4>Apply this</h4>
<p>Build the tracker with five columns and enter your active applications. Then take the posting you care most about and retune your top third against it — highlight its five key phrases and make sure your page speaks them.</p>`
      },
      {
        title: 'Sustaining the Search',
        minutes: 12,
        content: `
<p>A job search is a numbers process wearing an emotions costume. Even strong candidates hear far more silence than yes — response rates in the single digits per application are normal, which means rejection is the <em>expected texture</em> of the process, not a verdict on your worth. Knowing the math in advance is armor.</p>
<p><strong>Structure beats mood.</strong> Treat the search like a part-time job with hours and a stopping point: mornings for applications and outreach, an afternoon block for skill-building, evenings off — actually off. Unbounded searching burns people out by week three; bounded searching sustains for months.</p>
<p><strong>Upskill in parallel.</strong> Time between roles is the cheapest skill-building window you'll ever get — courses (like the ones on this platform), a small freelance or volunteer project that becomes a résumé line and a fresh reference. "Here's what I built during my search" reframes a gap into initiative in one sentence.</p>
<p><strong>Use the free infrastructure.</strong> Public libraries offer computers, internet, résumé help, and often free courses (ask about LinkedIn Learning access with a library card). American Job Centers — the federally funded workforce centers in every state — provide free coaching, training funds, and employer connections. The Wellness Hub in this app can locate libraries near you; your state's workforce agency site lists the job centers. These services exist for exactly this moment; using them is smart, not shameful.</p>
<p>And if the search is grinding your mental health down, that's real and common — support resources are in the Wellness Hub, and using them is a strength.</p>
<h4>Apply this</h4>
<p>Design your search week on paper: the daily hours, the stopping time, one skill you'll build in parallel, and one free local resource you'll visit this week.</p>`
      },
      { title: 'Quiz: Job Search Foundations', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'customer-service',
    title: 'Customer Service Excellence',
    pillar: 'workforce',
    level: 'Foundational',
    minutes: 40,
    desc: 'Service orientation ranks in employers’ global top ten — and service skills transfer to every role, every industry, and every business you might ever run.',
    objectives: [
      'Handle any customer interaction with a reliable structure',
      'De-escalate frustrated customers with the LAST framework',
      'Turn service skills into career capital in any field'
    ],
    skills: ['Customer service', 'De-escalation', 'Communication under pressure'],
    lessons: [
      {
        title: 'The Service Mindset',
        minutes: 12,
        content: `
<p>The World Economic Forum lists <strong>service orientation and customer service</strong> among its top ten workplace skills — and it's one of the largest employment categories in the American economy. But the deeper reason to master it: service is <em>problem-solving under emotion</em>, and that combination shows up in every job, every negotiation, and every business.</p>
<p>Three fundamentals separate professionals from script-readers:</p>
<ul>
<li><strong>The first response sets the trajectory.</strong> A customer arriving with a problem is running a split-second test: <em>is this person going to help me or fight me?</em> "Let's get this sorted out for you" passes the test before any solution exists. Tone in the first ten seconds predicts how the next ten minutes go.</li>
<li><strong>Acknowledge before you solve.</strong> The most common service error is jumping to the fix while the customer still feels unheard. One sentence buys everything: "That's frustrating — you ordered it two weeks ago and it's still not here." Acknowledgment isn't agreement that you're at fault; it's proof you received the person, not just the ticket.</li>
<li><strong>Own the handoff.</strong> "That's not my department" is the sentence customers remember forever. The professional version: "That's handled by billing — let me connect you and explain the situation so you don't have to repeat it." Same routing, opposite experience.</li>
</ul>
<h4>Apply this</h4>
<p>Write your own natural-sounding versions of the three key sentences: the helpful opener, the acknowledgment, the warm handoff. Scripts you've made your own come back under pressure; borrowed ones don't.</p>`
      },
      {
        title: 'De-escalation: The LAST Framework',
        minutes: 14,
        content: `
<p>Angry customers follow a pattern, and so does calming them. The industry-standard sequence is <strong>LAST</strong>:</p>
<ol>
<li><strong>Listen — fully, first.</strong> Let them empty the tank without interruption. Most escalation happens because someone was cut off mid-complaint. Take notes; the details matter for the solve, and visible note-taking itself de-escalates.</li>
<li><strong>Acknowledge/Apologize.</strong> "I'm sorry this happened — I'd be frustrated too." You can apologize for the experience without admitting fault, and it costs nothing. Never say "calm down" — in the history of human conversation it has never once worked.</li>
<li><strong>Solve — or offer the best real option.</strong> If you can fix it, fix it fast and narrate: "Here's what I'm doing right now." If you can't fully fix it, offer choices — even small ones ("I can do X today, or escalate for Y by Friday — which works better?"). Choice returns control, and loss of control is what anger actually is.</li>
<li><strong>Thank them.</strong> "Thanks for your patience while we sorted this out." It closes the loop and — genuinely — complainers who get handled well become more loyal than customers who never had a problem. That's a documented effect called the service recovery paradox.</li>
</ol>
<p><strong>The boundary:</strong> de-escalation applies to frustration, not abuse. Slurs, threats, or personal attacks end the script: "I want to help you, and I can't do that if this continues" — one warning, then hand off to a supervisor or end the interaction per your workplace's policy. Absorbing abuse is not part of any job description, and knowing your escalation path <em>before</em> you need it is part of professionalism.</p>
<h4>Apply this</h4>
<p>Recall your last difficult interaction — either side of the counter. Map what happened against LAST: which step was skipped? That's the one to drill.</p>`
      },
      {
        title: 'Service as Career Capital',
        minutes: 12,
        content: `
<p>Service experience is routinely undersold on résumés as "handled customer inquiries" — while hiring managers in every industry are actively hunting for exactly what it builds. Translate it properly and it becomes some of the strongest career capital there is.</p>
<p><strong>What service actually trains:</strong> communication under pressure, conflict resolution, reading people fast, juggling priorities in real time, and representing an organization when things go wrong. In résumé language (action + result, as covered in Résumé & Personal Branding): "De-escalated 10+ customer conflicts weekly, maintaining a 95% satisfaction score" or "Handled 60 daily interactions while keeping average resolution under four minutes." Numbers exist in every service job — counts, times, scores, streaks.</p>
<p><strong>Internal customers count too.</strong> Every colleague who depends on your work is a customer; the acknowledgment-solve-thank pattern works identically in office jobs, trades, and management. People known for being <em>easy to work with under pressure</em> get pulled upward — it's among the most promotion-correlated reputations that exists.</p>
<p><strong>And if you ever run your own business</strong> — the Entrepreneurship pillar's whole premise — service skill becomes the moat. Small businesses rarely out-spend competitors; they out-care them. Response speed, recovery from mistakes, and the feeling customers get from dealing with you are the review engine that markets a service business for free.</p>
<h4>Apply this</h4>
<p>Rewrite one service experience from your history as a quantified résumé bullet. Then note which two service skills you'd want a future employer — or your own future customers — to feel within the first minute of meeting you.</p>`
      },
      { title: 'Quiz: Customer Service', type: 'quiz', minutes: 8 }
    ]
  },

  /* ================= FOUNDATIONAL & EXPANSION — TECHNICAL ================= */
  {
    id: 'info-literacy',
    title: 'Research & Information Literacy',
    pillar: 'technical',
    level: 'Foundational',
    minutes: 40,
    desc: 'The foundational digital skill: finding what you need fast, judging whether it’s true, and staying grounded in an era of AI-generated everything.',
    objectives: [
      'Search like a professional using operators and better sources',
      'Evaluate any source with the SIFT method',
      'Verify claims and media in the age of AI-generated content'
    ],
    skills: ['Search skills', 'Source evaluation', 'Verification'],
    lessons: [
      {
        title: 'Search Like a Professional',
        minutes: 12,
        content: `
<p>Most people type a vague phrase and settle for whatever the first screen offers. Professionals interrogate the tool. A few operators transform results immediately:</p>
<ul>
<li><strong>Quotation marks</strong> force exact phrases: <code>"community health worker certification"</code> stops the engine from substituting words you didn't ask for.</li>
<li><strong>site:</strong> searches inside one site: <code>site:bls.gov home health aide outlook</code> goes straight to government labor data and skips the content farms.</li>
<li><strong>Minus</strong> excludes noise: <code>jaguar -car</code> when you mean the animal.</li>
<li><strong>Reverse image search</strong> (right-click an image, or upload it) answers "where did this picture really come from?" — one of the most useful verification moves that exists.</li>
</ul>
<p>Just as important is <em>where</em> you search. For consequential questions — health, money, law, statistics — go to the layer beneath the blog posts: government sources (.gov: BLS for jobs, IRS for taxes, CDC for health), major institutions, and <strong>your public library's databases</strong>, which give you free access to journalism archives, consumer research, and reference material that search engines can't reach. A library card is a research superpower that most people never activate.</p>
<p>Finally: the first page of results is an algorithm's guess about engagement, not a ranking of truth. Scanning results four through ten routinely surfaces better sources than result one.</p>
<h4>Apply this</h4>
<p>Take a question that matters to you right now and run it three ways: plain search, quoted-phrase search, and a <code>site:.gov</code> search. Compare what each surfaces — the difference is the skill.</p>`
      },
      {
        title: 'SIFT: Judging What You Found',
        minutes: 14,
        content: `
<p>Digital literacy researchers studied how professional fact-checkers evaluate sources and distilled it into a four-move method called <strong>SIFT</strong> — designed to take about sixty seconds, not an afternoon:</p>
<ol>
<li><strong>Stop.</strong> Before sharing, citing, or believing — pause. Especially if the content triggers a strong emotion. Outrage and fear are the delivery mechanisms of misinformation; the stronger the feeling, the more the claim deserves a check.</li>
<li><strong>Investigate the source.</strong> Not by reading more of the source itself — by reading <em>about</em> it. Open a new tab and search the site or author's name. Fact-checkers call this lateral reading, and it's the single biggest professional habit: the "Institute for Family Health Freedom" may turn out to be one guy and a supplement store.</li>
<li><strong>Find better coverage.</strong> Instead of evaluating a mediocre source, search the <em>claim</em> and see who else covers it. If a striking statistic appears only in places quoting each other, that's a finding in itself.</li>
<li><strong>Trace to the original.</strong> Headlines compress and distort. The study "proving" a headline often says something narrower, older, or opposite. Click through to the actual study, the full quote, the original video — the distance between headline and source is where most misinformation lives.</li>
</ol>
<p>Common manipulation patterns to recognize on sight: real photo + wrong event, true statistic + missing base rate, screenshot of a headline with no link, and "they don't want you to know" framing — which is marketing, not evidence.</p>
<h4>Apply this</h4>
<p>Find one dramatic claim in your feed today and give it the full SIFT — sixty seconds. Whatever you discover, notice how different checking feels from scrolling.</p>`
      },
      {
        title: 'Information in the AI Era',
        minutes: 12,
        content: `
<p>Two shifts define the current information environment: AI systems now <em>summarize</em> much of what you read, and AI tools can now <em>fabricate</em> convincing text, images, audio, and video. Both are manageable with adjusted habits.</p>
<p><strong>Treat AI summaries as a starting map, not a destination.</strong> Search engines and chatbots increasingly answer questions directly — fluently, confidently, and sometimes wrongly (the AI Tools course covers why hallucination is structural). The professional habit: use the AI answer to learn the landscape and vocabulary, then verify the specific facts you'll rely on at their sources. For anything consequential, "the AI said so" is not a citation.</p>
<p><strong>For suspicious media, check provenance, not pixels.</strong> Deepfake quality improves too fast for "look for weird hands" advice to stay reliable. The durable questions are contextual: Who posted this first? When? Does the event appear in any credible outlet? Does a reverse image search show the "new" photo is from 2016? Extraordinary footage that exists in exactly one place is extraordinary evidence of nothing.</p>
<p><strong>Build an information diet on purpose.</strong> Choose a small set of sources you've SIFTed once and trust structurally — a wire service, a local outlet, one or two domain experts who show their work — and let them be your baseline. The alternative is letting an engagement algorithm choose your reality, and its incentive is your attention, not your accuracy.</p>
<h4>Apply this</h4>
<p>Ask an AI assistant a factual question in an area you know, then trace its three main claims to original sources. Time the exercise — calibrating the real cost of verification makes you far more likely to do it when it counts.</p>`
      },
      { title: 'Quiz: Information Literacy', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'data-literacy',
    title: 'Data Literacy: Making Numbers Speak',
    pillar: 'technical',
    level: 'Core',
    minutes: 45,
    desc: 'AI and big data top the list of fastest-growing skills worldwide. Read data without being fooled, analyze it with tools you already have, and present it so decisions happen.',
    objectives: [
      'Read statistics and charts critically — averages, percentages, and axes',
      'Perform basic analysis: trends, comparisons, and rates',
      'Present data honestly in a way that drives decisions'
    ],
    skills: ['Data interpretation', 'Basic analysis', 'Data storytelling'],
    lessons: [
      {
        title: 'Reading Data Without Being Fooled',
        minutes: 14,
        content: `
<p>The WEF ranks <strong>AI and big data</strong> as the fastest-growing skill cluster in the global economy — but beneath the tools sits a more foundational capability: reading numbers without being manipulated by them. Four traps cover most everyday cases:</p>
<ul>
<li><strong>Average vs. median.</strong> "Average salary at this company: $95,000" — which is what happens when nine people earn $50,000 and one earns $500,000. The <em>median</em> (the middle value) resists distortion by outliers. When a distribution is lopsided — salaries, home prices, followers — ask for the median, and be suspicious of anyone who won't give it.</li>
<li><strong>Percentages vs. percentage points — and vs. reality.</strong> "Risk increased 50%!" can mean it went from 2 in 10,000 to 3 in 10,000. Relative change sounds dramatic; absolute numbers tell you whether to care. Always ask: 50% of <em>what</em>?</li>
<li><strong>The truncated axis.</strong> A bar chart whose vertical axis starts at 88 instead of 0 turns a 2% difference into a towering cliff. First thing to check on any chart: where does the axis start, and are the intervals even?</li>
<li><strong>The invisible sample.</strong> "80% of users love it" — 80% of how many? Selected how? An online poll of a fan forum and a randomized survey produce very different 80s. No sample description, no conclusion.</li>
</ul>
<h4>Apply this</h4>
<p>Find one statistic in the news today and run the four checks: average or median? Relative or absolute? Axis honest? Sample described? One of the four usually cracks.</p>`
      },
      {
        title: 'Analysis Anyone Can Do',
        minutes: 14,
        content: `
<p>Real analysis is less about math and more about asking good questions in a disciplined order. With a spreadsheet (the Spreadsheet Basics course covers the mechanics), anyone can run the three moves that answer most business questions:</p>
<ul>
<li><strong>Trend: what's happening over time?</strong> Sort by date, chart the line, and look past single points to the direction. One bad month is noise; three declining quarters is a trend. Comparing to the <em>same period last year</em> beats comparing to last month whenever seasonality exists — December retail always beats November.</li>
<li><strong>Comparison: what's different between groups?</strong> Category A vs. B, this location vs. that one, before vs. after. The discipline is comparing like with like — a store open 12 months vs. one open 3 months needs a per-month view, which leads to…</li>
<li><strong>Rates: normalize before you conclude.</strong> Totals mislead whenever groups differ in size. Complaints per 100 orders, revenue per customer, conversions per visit — dividing by the relevant denominator is the single most professional move in everyday analysis. A big store with more total complaints may be far better per order than a small one.</li>
</ul>
<p>Then interrogate your own finding the way the Analytical Thinking course teaches: could a third factor explain this? Is the sample big enough to mean anything? What would I expect to see if my explanation were wrong? Data analysis without those questions is just chart-making.</p>
<h4>Apply this</h4>
<p>Take any data you have access to — your budget tracker, work numbers, even step counts. Run all three moves: the trend over time, one comparison, one rate. Write the single most interesting sentence the data supports.</p>`
      },
      {
        title: 'Telling the Story',
        minutes: 12,
        content: `
<p>Analysis creates value only when someone decides differently because of it. That translation — from finding to decision — is data storytelling, and it has rules:</p>
<p><strong>One chart, one message.</strong> Decide the sentence first ("Complaints dropped 40% after the new process"), then build the simplest chart that shows exactly that. If a chart needs a paragraph of explanation, it's the wrong chart. Chart choice basics: <em>line</em> for change over time, <em>bar</em> for comparing categories, <em>table</em> for precise lookup — and pie charts almost never (humans compare lengths far better than angles).</p>
<p><strong>Lead with the finding, not the journey.</strong> Analysts love narrating their process; decision-makers need the answer first: "Recommendation: keep the new process — complaints fell 40% with no cost increase. Here's the evidence." The structure mirrors the decision-communication pattern from Analytical Thinking: conclusion, evidence, risk, next step.</p>
<p><strong>Stay honest under pressure.</strong> The same skills that make charts persuasive make them deceptive: truncated axes, cherry-picked date ranges, convenient denominators. Present the honest version even when it's less dramatic — include the axis at zero, show the full period, name the sample. Your credibility is a compounding asset; one caught exaggeration spends years of it. When the data is genuinely ambiguous, say so: "the data suggests, but doesn't prove" is a professional sentence, not a weak one.</p>
<h4>Apply this</h4>
<p>Take your most interesting sentence from the last lesson and build its one chart. Show it to someone with only the sentence and the chart — if they get it in ten seconds, you've done data storytelling.</p>`
      },
      { title: 'Quiz: Data Literacy', type: 'quiz', minutes: 8 }
    ]
  },

  /* ============ FOUNDATIONAL & EXPANSION — ENTREPRENEURSHIP ============ */
  {
    id: 'entrepreneurial-mindset',
    title: 'The Entrepreneurial Mindset',
    pillar: 'business',
    level: 'Foundational',
    minutes: 40,
    desc: 'Before the business plan comes the operating system: spotting opportunity in problems, testing ideas cheaply, and taking smart risks — with or without quitting your job.',
    objectives: [
      'Recognize opportunities the way entrepreneurs are trained to',
      'Validate ideas with cheap, fast experiments before building',
      'Manage risk deliberately — including when to keep the day job'
    ],
    skills: ['Opportunity recognition', 'Validation', 'Risk management'],
    lessons: [
      {
        title: 'Thinking Like an Owner',
        minutes: 12,
        content: `
<p>Entrepreneurship isn't a personality type — research on founders keeps failing to find one. It's closer to an <em>operating system</em>: a set of trained habits for noticing value and acting on it. The habits work whether you ever incorporate anything, which is why employers actively seek "entrepreneurial thinking" in employees.</p>
<p><strong>Habit one: problems are inventory.</strong> Where most people see annoyances, opportunity-trained people see unmet demand. Every complaint you hear repeatedly — "I can never find someone reliable to…", "why is it so hard to…" — is a market whispering. Start a running list; the businesses you're able to build later come almost entirely from this list.</p>
<p><strong>Habit two: start with what's in hand.</strong> Studies of experienced entrepreneurs (the research tradition is called effectuation) find they don't start with a grand vision and then seek resources — they start from three questions: <em>What do I know? Who do I know? What do I have?</em> and take the first small step available. The Skills Inventory from Turning Skills into a Service is exactly this move.</p>
<p><strong>Habit three: ownership of outcomes.</strong> The owner's question is never "whose job is this?" — it's "what does this situation need?" Practiced inside a paycheck job, this habit is what gets people promoted; practiced outside one, it's what makes customers trust a one-person business.</p>
<h4>Apply this</h4>
<p>Open a note titled "Problems I've Heard Twice." Add three entries from the last month — complaints you've heard from more than one person. That note is now a standing asset; feed it weekly.</p>`
      },
      {
        title: 'Cheap Experiments Beat Big Plans',
        minutes: 14,
        content: `
<p>The classic first-time mistake is building for months, then discovering demand was imaginary. The professional sequence is reversed: <strong>prove someone wants it, then build it.</strong> Validation techniques, in ascending order of strength:</p>
<ol>
<li><strong>Ten problem conversations.</strong> Talk to ten people who have the problem — about the <em>problem</em>, not your solution. "How do you handle X today? What have you tried? What does it cost you?" People politely praise ideas; they tell the truth about their problems. If the pain isn't real in these conversations, no product fixes that.</li>
<li><strong>The concierge test.</strong> Deliver the service completely manually to one or two customers before building anything scalable. Want to test meal-prep-for-seniors? Cook for two households for two weeks. You learn the real workflow, the real costs, and whether people value it — for almost nothing.</li>
<li><strong>The pre-commitment.</strong> The strongest signal money can't fake: ask for money. A deposit, a pre-order, a signed letter of intent. "Would you buy this?" means nothing; "they bought it before it existed" means everything. Even five pre-orders outweigh five hundred survey responses.</li>
</ol>
<p>Frame every experiment with three sentences before you run it: what I believe, what I'll test, what result changes my mind. And treat a failed test as what it is — a cheap success. You just saved yourself the six months and the savings account that building blind would have cost. In the experimenter's accounting, disproof is profit.</p>
<h4>Apply this</h4>
<p>Take your strongest idea and schedule two problem conversations this week. Write your three framing sentences first — belief, test, threshold — so the answers can actually change your plan.</p>`
      },
      {
        title: 'Smart Risk and the Day Job',
        minutes: 12,
        content: `
<p>The mythology says entrepreneurs are bold risk-takers. The data says successful ones are usually <strong>risk managers</strong> — studies of founders who kept their day jobs while starting up found they were significantly <em>more</em> likely to succeed than those who leapt, likely because desperation makes bad decisions and runway makes patient ones.</p>
<p>The toolkit:</p>
<ul>
<li><strong>Prefer reversible bets.</strong> Renting before buying, contracting before hiring, three-month commitments before annual ones. The two-way-door principle from Analytical Thinking applies doubly when it's your own money.</li>
<li><strong>Define your affordable loss.</strong> Before any venture, decide what you can lose — money, months, energy — without damaging your life. Then structure the attempt to fit inside it. This flips the question from "how much could I make?" (fantasy) to "what am I willing to risk to find out?" (strategy).</li>
<li><strong>The side-business bridge.</strong> Validate and grow while employed; the paycheck funds patience. The common milestone before going full-time: the business consistently produces a meaningful fraction of your income <em>and</em> you have several months of expenses saved (Money Fundamentals covers the cushion). Check your employment agreement for conflict-of-interest clauses — and build in the open with your integrity intact.</li>
<li><strong>Integrity is compounding capital.</strong> In small business, your reputation travels faster than your marketing. Deals honored, mistakes owned, and promises kept are the cheapest customer-acquisition strategy ever invented.</li>
</ul>
<h4>Apply this</h4>
<p>Write your affordable-loss statement for the idea you're circling: the dollars, the hours per week, and the calendar date at which you'll evaluate honestly. That one paragraph is the difference between a smart bet and a gamble.</p>`
      },
      { title: 'Quiz: Entrepreneurial Mindset', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'digital-presence',
    title: 'Digital Presence for Small Business',
    pillar: 'business',
    level: 'Core',
    minutes: 40,
    desc: 'Customers check you out online before they call. Build the trust layer — business profile, simple site, and a review engine — with free and near-free tools.',
    objectives: [
      'Set up the free trust layer: business profile, consistent info, photos',
      'Stand up a simple, effective one-page web presence',
      'Build a review engine and handle negative reviews professionally'
    ],
    skills: ['Online presence', 'Local marketing', 'Reputation management'],
    lessons: [
      {
        title: 'The Trust Layer Comes First',
        minutes: 12,
        content: `
<p>Before a potential customer calls, they search. What they find in those thirty seconds — or don't find — decides whether the call happens. The good news for a small service business: the highest-impact pieces are free.</p>
<p><strong>Claim your Google Business Profile first.</strong> For local services it outweighs a website: it's the map pin, the reviews, the hours, and the call button that appear when someone searches "bookkeeper near me." Complete every field — categories, service area, hours, services with prices where possible — and add real photos: you, your work, before-and-afters. Profiles with photos get dramatically more requests than empty ones, and an unclaimed or half-empty profile quietly signals "maybe not in business."</p>
<p><strong>Make your NAP boringly consistent.</strong> Name, address (or service area), phone — written identically everywhere: profile, social accounts, directories. Inconsistencies confuse both search engines and humans, and both respond with distrust.</p>
<p><strong>One social profile, chosen by where your buyers look</strong> — and the discipline to keep it current. A Facebook page last updated in 2023 reads worse than no page. As the Marketing & Client Development course argues: one channel done consistently beats five done poorly. Your digital presence is the same principle in permanent form.</p>
<h4>Apply this</h4>
<p>Search your business — or the business you're planning — the way a stranger would: your name plus your service plus your town. Write down the three things a stranger would conclude in thirty seconds. That's your to-fix list.</p>`
      },
      {
        title: 'A Simple Site That Works',
        minutes: 14,
        content: `
<p>Most small service businesses need less website than they think — but what they need must be right. A single well-built page outperforms a sprawling site nobody maintains.</p>
<p><strong>The one-page essentials, in order:</strong></p>
<ol>
<li><strong>Who you help and what outcome you deliver</strong> — your positioning sentence, at the top, in plain language. A visitor should know in five seconds whether they're in the right place.</li>
<li><strong>Proof</strong> — two or three testimonials with names, before/after photos, years in business, certifications. Proof placed high; adjectives are not proof.</li>
<li><strong>Exactly what you offer</strong> — your services with scope, and prices or "starting at" ranges where your market allows. Pricing transparency filters out mismatches before they cost you a phone call.</li>
<li><strong>One obvious next step</strong> — call, text, or a short form. One action, repeated down the page, big enough for thumbs. Every additional option measurably reduces response.</li>
</ol>
<p><strong>Tools:</strong> free and near-free site builders (the mainstream drag-and-drop options all work) are genuinely sufficient — pick the one whose template you can update yourself, because the ability to make your own changes matters more than any design flourish. A custom domain (about the cost of a lunch, yearly) adds legitimacy. Write like you talk, skip the jargon, and check everything on a phone: most local searches happen there.</p>
<h4>Apply this</h4>
<p>Draft your one-pager's content in a document before touching any builder: the headline, three proofs, the services list, the one action. Content first makes the build a two-hour job instead of a two-month stall.</p>`
      },
      {
        title: 'The Review Engine',
        minutes: 12,
        content: `
<p>Reviews are the modern word of mouth — the large majority of consumers read them before choosing a local business, and they trust volume plus recency plus <em>how you respond</em>. Which means reviews are a system you run, not luck you receive.</p>
<p><strong>Engineer the ask.</strong> Satisfied customers leave reviews when asked at the right moment with zero friction: right after the visible win ("So glad the books balanced! Would you mind sharing that in a quick review? Here's the direct link"), by text, with the link included. Ask every happy customer as part of your closing routine — a handful of recent reviews outperforms a hundred stale ones. Never buy or fake reviews: platforms detect it, customers smell it, and in the U.S. the FTC penalizes it.</p>
<p><strong>Respond to everything.</strong> Positive reviews get a short, specific thank-you (future customers read your responses as a preview of working with you). Negative reviews get the LAST treatment from Customer Service Excellence, in public: acknowledge, apologize for the experience, state what you're doing, and move detail offline — "I'd like to make this right; please call me directly." A calm, accountable response to a bad review often wins more trust than the five-star reviews around it. Never argue publicly; one defensive reply undoes fifty good reviews.</p>
<p><strong>Feed the presence on a rhythm you can keep.</strong> One before/after post, one tip, or one finished-job photo per week keeps the profile visibly alive. Consistency over virality — the goal isn't an audience; it's that the next searcher concludes, in thirty seconds, that you're real, good, and responsive.</p>
<h4>Apply this</h4>
<p>Write your review-ask message — two sentences plus the direct link — and your response template for a negative review. Having both ready before you need them is what makes the system run itself.</p>`
      },
      { title: 'Quiz: Digital Presence', type: 'quiz', minutes: 8 }
    ]
  }
];

/* ------------------------------------------------------------
   QUIZ BANK — keyed by course id. answer = index in options.
   ------------------------------------------------------------ */

const QUIZ_BANK = {
  'growth-mindset': [
    {
      q: 'A coworker says, "I’m just not a numbers person, so I don’t apply for jobs that use spreadsheets." Which mindset is speaking, and why?',
      options: [
        'Growth mindset — they know their strengths',
        'Fixed mindset — they treat ability as a permanent trait instead of something buildable',
        'Neither — it’s just a preference',
        'Both — mindsets always mix'
      ],
      answer: 1,
      explain: 'Treating "numbers ability" as a fixed trait that closes doors is the signature of fixed-mindset thinking. Adding "yet" — "I’m not good with spreadsheets yet" — reopens the door.'
    },
    {
      q: 'What is the recommended first step of the "setback loop"?',
      options: [
        'Immediately try again before you lose your nerve',
        'List everything that went wrong in detail',
        'Name what happened factually, without global judgments about yourself',
        'Ask a friend to tell you it wasn’t your fault'
      ],
      answer: 2,
      explain: '"The interview went badly" (specific, factual) beats "I’m unhirable" (global, personal). You can only extract a useful lesson from an accurate description.'
    },
    {
      q: 'Why does the loop end with scheduling the next attempt?',
      options: [
        'Because deadlines create healthy pressure',
        'Because a lesson without a next attempt changes nothing — repetition of attempts is how growth compounds',
        'Because calendars make you look organized',
        'It doesn’t matter when you retry, only that you reflected'
      ],
      answer: 1,
      explain: 'Growth-minded people get more attempts per year. The scheduled retry is what converts insight into progress.'
    }
  ],

  'emotional-intelligence': [
    {
      q: 'Why is self-awareness called the foundation of the four EQ domains?',
      options: [
        'It’s the easiest to learn',
        'You can’t manage an emotion — or read others clearly — while you haven’t noticed what you’re feeling yourself',
        'It’s the only domain science supports',
        'Employers ask about it most in interviews'
      ],
      answer: 1,
      explain: 'The domains are a ladder: noticing your own state comes before managing it, and before accurately reading anyone else.'
    },
    {
      q: 'You read an email that makes your face go hot. Per "name it to tame it," what’s the best next move?',
      options: [
        'Reply immediately while your points are vivid',
        'Delete the email and pretend you never saw it',
        'Pause, silently label what you’re feeling as precisely as you can, then ask what outcome you actually want',
        'Forward it to a coworker to confirm the sender is out of line'
      ],
      answer: 2,
      explain: 'Labeling the emotion measurably calms the brain’s alarm response and hands the wheel back to your reasoning — before you write something the feeling would have written for you.'
    },
    {
      q: 'In active listening, what does "reflecting back" accomplish?',
      options: [
        'It shows you agree with the speaker',
        'It proves you received and understood them — which is what makes people feel heard',
        'It buys time to prepare your rebuttal',
        'It politely signals the conversation should end'
      ],
      answer: 1,
      explain: 'Reflecting ("so the deadline moved and nobody told you") isn’t agreement — it’s receipt confirmation, and it’s what lowers the temperature.'
    }
  ],

  'time-energy': [
    {
      q: 'Which task belongs in the "important but not urgent" box — the one the lesson says to defend hardest?',
      options: [
        'A customer on hold right now',
        'Updating your résumé for a career move you want next year',
        'A coworker’s "quick favor" that could wait',
        'Scrolling job memes for motivation'
      ],
      answer: 1,
      explain: 'Box two is future-building work with no deadline shouting at you — which is exactly why it gets squeezed out unless you schedule it.'
    },
    {
      q: 'Why does the lesson recommend 60–90 minute time blocks instead of four-hour ones?',
      options: [
        'Longer blocks are against most workplace rules',
        'Science says attention dies at exactly 90 minutes',
        'Medium blocks survive interruptions and imperfect days; giant blocks collapse at the first disruption',
        'Because meetings are usually an hour'
      ],
      answer: 2,
      explain: 'A schedule needs to bend without breaking — medium blocks plus 30–40% unscheduled margin is what survives real life.'
    },
    {
      q: 'You’re foggy every day around 3 p.m. What does energy management suggest?',
      options: [
        'Push through with your hardest task to build discipline',
        'Schedule routine, low-stakes work there and move deep work to your peak hours',
        'Drink coffee until the fog lifts',
        'Treat it as a sign you need a different career'
      ],
      answer: 1,
      explain: 'Match the task to the phase: deep work in your peak, routine work in your trough, creative and social work in the rebound.'
    }
  ],

  'resume-branding': [
    {
      q: 'Why do fancy résumé layouts with columns, graphics, and photos often backfire?',
      options: [
        'They cost too much to print',
        'Applicant tracking software frequently fails to parse them, so a human may never see your résumé at all',
        'Recruiters find creativity unprofessional in every field',
        'They make the file size too large to email'
      ],
      answer: 1,
      explain: 'ATS parsers choke on tables, text boxes, and graphics. Simple single-column layouts with standard headings pass the software and still look clean to humans.'
    },
    {
      q: 'Which bullet best follows the action + result formula?',
      options: [
        'Responsible for customer service duties',
        'Worked hard in a fast-paced environment',
        'Resolved 40+ customer inquiries daily while keeping satisfaction scores above 95%',
        'Was a team player with excellent communication skills'
      ],
      answer: 2,
      explain: 'Strong verb, specific action, measurable result. The others describe duties or assert qualities without proof.'
    },
    {
      q: 'What does "personal brand" actually mean in this course?',
      options: [
        'Posting professional content online every day',
        'Having a logo and a personal website',
        'Making sure what employers find when they search you tells the same story your résumé tells',
        'Never having any social media at all'
      ],
      answer: 2,
      explain: 'It’s coherence, not self-promotion: résumé, LinkedIn, and public presence all pointing the same direction.'
    }
  ],

  'interview-mastery': [
    {
      q: 'In a STAR answer, which part should take up the most time?',
      options: [
        'Situation — set the scene thoroughly',
        'Task — explain the stakes in detail',
        'Action — the specific steps YOU took',
        'Result — celebrate the outcome at length'
      ],
      answer: 2,
      explain: 'The Action is what they’re hiring: your judgment and behavior. Context should be brief, and say "I," not "we."'
    },
    {
      q: 'Asked "tell me about a time you failed," the strongest structure is:',
      options: [
        'Explain why it wasn’t really your fault',
        'Pick a fake failure like "I work too hard"',
        'One sentence owning a real failure, then most of your time on what you changed afterward',
        'Decline politely — never volunteer weaknesses'
      ],
      answer: 2,
      explain: 'They’re listening for accountability plus growth. Dodges and humble-brags read as exactly what they are.'
    },
    {
      q: 'The interviewer asks for your salary expectation before describing the role. A good first response is:',
      options: [
        'Name the lowest number you’d accept so you don’t scare them off',
        'Ask them to share the budgeted range for the role first',
        'Refuse to discuss money until a written offer exists',
        'Name a number 50% above market to anchor high'
      ],
      answer: 1,
      explain: 'One polite deflection — "can you share the budgeted range?" — is standard and often works. When you do give a number, give a researched range, then stop talking.'
    }
  ],

  'workplace-communication': [
    {
      q: 'Which subject line follows the lesson’s guidance?',
      options: [
        '"Hey"',
        '"Quick question"',
        '"Approval needed by Thursday: June vendor invoice"',
        '"IMPORTANT!!! PLEASE READ"'
      ],
      answer: 2,
      explain: 'The subject carries the point and the deadline. Vague or shouty subjects get skimmed past or resented.'
    },
    {
      q: 'Why does the lesson recommend speaking within the first ten minutes of a meeting?',
      options: [
        'Late contributions are usually cut off by the agenda',
        'Early participation lowers the barrier for everything after; waiting builds pressure until speaking feels impossible',
        'Managers only remember the first ten minutes',
        'It guarantees your idea gets adopted'
      ],
      answer: 1,
      explain: 'Even a small clarifying question early breaks the seal. The longer you wait, the higher the imagined stakes climb.'
    },
    {
      q: 'Your teammate keeps leaving the closing checklist unfinished. Which opener follows situation → impact → request?',
      options: [
        '"You always leave your work for everyone else."',
        '"Why are you so careless with the checklist?"',
        '"The last three closing shifts the checklist wasn’t done, which puts the morning team an hour behind. Can we agree it gets checked before clock-out — or is something blocking it?"',
        'Say nothing, but mention it to the manager as a pattern'
      ],
      answer: 2,
      explain: 'Camera-visible facts, concrete impact, and a request that invites their side. "Always" statements and motive-guessing trigger defensiveness before the problem gets touched.'
    }
  ],

  'digital-foundations': [
    {
      q: 'Which file name will be easiest for future-you to find and sort?',
      options: [
        'resume final FINAL v2.docx',
        'Document(3).docx',
        '2026-07 Resume - Customer Service.docx',
        'MyResume!!!.docx'
      ],
      answer: 2,
      explain: 'Year-month first makes files sort chronologically, and descriptive names make them searchable. "final FINAL v2" is a lie the moment you save v3.'
    },
    {
      q: 'Why should your email account get two-factor authentication before anything else?',
      options: [
        'Email providers require it by law',
        'Email is the master key — password reset links for your other accounts land there',
        'It makes your emails send faster',
        'It’s the only account type that supports 2FA'
      ],
      answer: 1,
      explain: 'Whoever controls your inbox can reset your other passwords. Secure the master key first and best.'
    },
    {
      q: 'A text says your bank account is locked and gives a link to "verify immediately." The safest response is:',
      options: [
        'Click quickly — a locked account is an emergency',
        'Reply asking if the message is legitimate',
        'Ignore the link; open your bank’s app or type its address yourself and check there',
        'Forward the link to a friend to test first'
      ],
      answer: 2,
      explain: '"Go in the front door" defeats phishing entirely: if something is genuinely wrong, it will be waiting inside the real app or site.'
    }
  ],

  'spreadsheet-basics': [
    {
      q: 'In a well-built data table, what belongs in row 1?',
      options: [
        'Your grand totals, so they’re visible first',
        'One clear header label per column (Date, Item, Category, Amount)',
        'A title in a big merged cell',
        'Nothing — leave it blank for spacing'
      ],
      answer: 1,
      explain: 'Headers in row 1 (then frozen) are what make sorting, filtering, and formulas work cleanly. Merged-cell titles and blank rows break tools later.'
    },
    {
      q: 'What does =SUM(D2:D11) do?',
      options: [
        'Adds the values in cells D2 and D11 only',
        'Adds every value from D2 through D11',
        'Counts how many cells between D2 and D11 are filled',
        'Averages the values from D2 through D11'
      ],
      answer: 1,
      explain: 'The colon means "through" — the whole range. And because it references addresses, the total updates itself when any value changes.'
    },
    {
      q: 'The classic beginner sorting disaster is:',
      options: [
        'Sorting alphabetically instead of numerically',
        'Sorting a single column by itself, so its rows detach from the rest of the table and the data’s meaning is scrambled',
        'Sorting more than once in a session',
        'Sorting by the Date column'
      ],
      answer: 1,
      explain: 'Rows are records — they must move together. Select the whole table (or use the sort-range tool) so each row stays intact.'
    }
  ],

  'ai-tools': [
    {
      q: 'What is an AI "hallucination"?',
      options: [
        'When the AI refuses to answer a question',
        'When the AI generates confident, fluent statements that are simply false — invented facts, statistics, or citations',
        'When the AI repeats your question back to you',
        'A rare bug that updates have mostly eliminated'
      ],
      answer: 1,
      explain: 'It’s a built-in cost of how language models work, not a rare glitch — which is why verification scales with stakes.'
    },
    {
      q: 'Which prompt uses all four ingredients (role, task, context, format)?',
      options: [
        '"Fix my cover letter"',
        '"Write me something professional"',
        '"Act as a hiring manager. Review my cover letter for a warehouse supervisor role — I’m coming from retail and the posting stresses safety. Give three improvements as a numbered list, then a revised draft."',
        '"You are an expert. Do your best work."'
      ],
      answer: 2,
      explain: 'Role (hiring manager), task (review), context (career change, what the posting values), format (numbered list + revision). The ingredients are the difference.'
    },
    {
      q: 'Which of these is safe to paste into a public AI chatbot?',
      options: [
        'Your company’s confidential customer list, to "clean up the formatting"',
        'A coworker’s personal phone number and situation, to draft a message to them',
        'Your own password, to check if it’s strong',
        'A generic description of a situation — "an employee with a scheduling conflict" — with no real names or private data'
      ],
      answer: 3,
      explain: 'Treat the chat window like a postcard. Real secrets, credentials, and other people’s private data stay out; generic descriptions get you the same help without the risk.'
    }
  ],

  'analytical-thinking': [
    {
      q: '"Deliveries keep going out late" — after asking "why" three times, you learn the order cutoff time doesn’t match the courier’s pickup schedule. What have you found?',
      options: [
        'A symptom that needs escalating to management',
        'A root cause you can actually fix — the point of the Five Whys',
        'Proof that the courier is the problem',
        'A reason to add more delivery staff'
      ],
      answer: 1,
      explain: 'Late deliveries were the symptom. Asking "why" repeatedly surfaced a fixable mechanism — the mismatch between cutoff and pickup — which is where effective action lives.'
    },
    {
      q: 'A report shows employees who attend optional trainings get promoted more often, so a colleague concludes trainings cause promotions. What’s the strongest analytical objection?',
      options: [
        'The trainings are probably low quality',
        'Promotions can’t be measured reliably',
        'A third factor — like ambition or engagement — could drive both attendance and promotion; correlation alone can’t establish cause',
        'The sample is too recent to matter'
      ],
      answer: 2,
      explain: 'Two things moving together doesn’t establish that one causes the other. The people who choose optional training may differ in ways that independently drive promotion.'
    },
    {
      q: 'Which decision most deserves the full options-and-criteria analysis before acting?',
      options: [
        'Trying a new format for the weekly status email',
        'Testing a different work schedule for two weeks',
        'Signing a 24-month office lease',
        'Reordering the agenda for tomorrow’s meeting'
      ],
      answer: 2,
      explain: 'The lease is expensive to reverse; the others are cheap experiments. Match analysis depth to reversibility — decide reversible things quickly, and give irreversible ones the full treatment.'
    }
  ],

  'adaptability-resilience': [
    {
      q: 'Why does the course argue a "portfolio of transferable skills" beats any single job title for career security?',
      options: [
        'Titles are usually inflated anyway',
        'Employers no longer read job titles',
        'Roughly 39% of core job skills are expected to change by 2030 — titles and tools expire, but the demonstrated capacity to learn transfers to whatever comes next',
        'Portfolios look better on a résumé than titles'
      ],
      answer: 2,
      explain: 'The WEF projects large-scale skill turnover by 2030. What survives that churn is the meta-skill: proven ability to acquire what’s next — an asset no layoff can repossess.'
    },
    {
      q: 'Per the learning-agility method, which plan is most likely to build a new skill fastest?',
      options: [
        'Watch a complete 12-hour video course first, then practice',
        'Set a concrete performance target, build a small real project, practice 20 minutes daily, and get feedback on every attempt',
        'Practice for four hours every Saturday until proficient',
        'Read three books on the topic before attempting anything'
      ],
      answer: 1,
      explain: 'Target + small real project + short frequent sessions + fast feedback is the loop. Passive consumption and infrequent binges are the two classic ways learning stalls.'
    },
    {
      q: 'You just lost your biggest client. According to the resilience protocol, what’s the first move?',
      options: [
        'Immediately discount your prices to attract replacements',
        'Sort everything on your mind into control / influence / accept — then act only on the control list',
        'Take a month off to recover before deciding anything',
        'Post publicly about the client’s unfairness'
      ],
      answer: 1,
      explain: 'The sorting step converts panic into a task list. Energy spent on what you can’t control is pure loss; the entire return lives in the actions you own.'
    }
  ],

  'collaboration-leadership': [
    {
      q: 'Which behavior best demonstrates "leading without a title"?',
      options: [
        'Reporting that the onboarding process is broken',
        'Waiting for the manager to notice the onboarding problem',
        'Describing the onboarding problem, proposing two fixes, and recommending one with reasoning',
        'Fixing the onboarding process quietly without telling anyone'
      ],
      answer: 2,
      explain: 'Proposals, not just problems. It signals next-level thinking even when your option isn’t chosen — and silent fixes help once, while visible reasoning builds influence.'
    },
    {
      q: 'What did Google’s Project Aristotle identify as the strongest predictor of team performance?',
      options: [
        'The average seniority of team members',
        'Psychological safety — members can question, admit error, and disagree without fear of punishment',
        'Total team headcount',
        'How often the team socializes outside work'
      ],
      answer: 1,
      explain: 'Not talent or tenure — safety. And it isn’t comfort: safe teams argue constantly, but about ideas rather than people, with no penalty for "I was wrong."'
    },
    {
      q: 'Your plate is full and your manager adds an urgent request. The professional response is:',
      options: [
        '"I can’t — I’m completely swamped."',
        'Accept silently and work the weekend',
        '"I can take this. To do it well, the report slips to Thursday — is that the right trade?"',
        'Accept, then quietly deliver everything late'
      ],
      answer: 2,
      explain: 'The visible tradeoff says yes to the person while placing the cost on the priority list where it belongs — instead of on your unpaid evenings or your reliability.'
    }
  ],

  'service-business': [
    {
      q: 'Why does the course insist your first service comes from a skills inventory rather than a business idea?',
      options: [
        'Business ideas require patents and legal review',
        'Skills you already find easy — that others find painful — are proven, deliverable value; "easy for you, painful for them" is the definition of a market',
        'Inventories are required for business licenses',
        'New ideas are always riskier than old ones'
      ],
      answer: 1,
      explain: 'You don’t need novelty — you need an honest audit of what you can already do that someone will pay to not do themselves, backed by proof.'
    },
    {
      q: 'For a clearly defined scope of work, why does the course recommend flat pricing over hourly?',
      options: [
        'Flat pricing is legally simpler in most states',
        'Hourly billing punishes speed, caps income at your calendar, and makes buyers anxious about the meter — flat pricing sells a known outcome at a known price',
        'Clients always pay more under flat pricing',
        'Hourly rates require certified time-tracking software'
      ],
      answer: 1,
      explain: 'With defined scope, flat pricing aligns everyone: the buyer gets certainty, and you get rewarded for efficiency instead of penalized for it.'
    },
    {
      q: 'The recommended way to get your first one or two clients is:',
      options: [
        'Work free indefinitely until someone offers to pay',
        'Buy local ads and wait for calls',
        'A genuine discount in exchange for two named deliverables — honest feedback and, if satisfied, a testimonial and referral',
        'Cold-call fifty strangers from a purchased list'
      ],
      answer: 2,
      explain: 'It’s buying proof at a fair price, with a stated endpoint. Open-ended free work teaches clients your work has no value; a reasoned discount signals the full price is coming.'
    }
  ],

  'market-yourself': [
    {
      q: 'Which statement is a working positioning sentence by the course’s formula?',
      options: [
        '"I’m exploring freelance opportunities in several areas."',
        '"I help small landlords keep their books clean and their taxes ready."',
        '"I’m a passionate, detail-oriented professional."',
        '"I do bookkeeping, marketing, tutoring, and tech support."'
      ],
      answer: 1,
      explain: 'Who you serve + the problem you remove + the outcome. Referrals travel as a single repeatable sentence — and nobody can refer fog or a list of four unrelated services.'
    },
    {
      q: 'The course’s channel strategy for a new independent professional is:',
      options: [
        'Maintain presence on five platforms so no buyer is missed',
        'One channel where your buyers actually are, worked on a fixed weekly rhythm for 30 days before considering a second',
        'Paid advertising first, organic later',
        'Post daily on whichever platform is trending'
      ],
      answer: 1,
      explain: 'Scattered effort produces five invisible presences. Consistency on one buyer-appropriate channel — with engineered referral asks — is what actually produces clients at small scale.'
    },
    {
      q: 'A prospect says your price is too high. The recommended response is:',
      options: [
        'Cut your rate 20% to save the deal',
        'Hold the price and end the conversation',
        'Reduce the scope — "we could start with just the last quarter, which brings it to X" — keeping your rate intact',
        'Offer unlimited revisions at the same price'
      ],
      answer: 2,
      explain: 'Resizing scope respects the budget and your value. Cutting the rate teaches the client the price was padded — and trains your market to negotiate every invoice.'
    }
  ],

  'money-basics': [
    {
      q: 'Why is a separate business account the highest-leverage first financial habit?',
      options: [
        'Banks legally require it before you invoice',
        'It makes profitability visible at a glance, turns tax preparation into an export instead of an excavation, and makes you treat the business like a business',
        'It automatically raises your credit score',
        'It eliminates the need for bookkeeping entirely'
      ],
      answer: 1,
      explain: 'Separation creates visibility, tax readiness, and psychological legitimacy. It doesn’t replace the ledger — the two together are minimum viable bookkeeping.'
    },
    {
      q: 'A client mid-project says, "While you’re at it, could you also handle X?" The professional response is:',
      options: [
        'Do it — keeping clients happy comes first',
        'Refuse: no changes after a contract, ever',
        '"Happy to add that — it’s outside our original scope, so I’ll send a quick quote for the addition."',
        'Do it this once and silently raise the next invoice'
      ],
      answer: 2,
      explain: 'The change order controls scope creep while staying friendly. Silent absorption of extras is the quiet killer of service income — and silent surcharges destroy trust.'
    },
    {
      q: 'What does the course say about the tax set-aside for independent income?',
      options: [
        'Taxes only apply once you form an LLC',
        'Automatically move a fixed percentage of every payment (commonly cited guidance: 25–30%) to a separate account — and confirm your exact rate and quarterly obligations with a qualified tax professional',
        'Wait until year-end and pay whatever is billed',
        'Set aside 5% — self-employment taxes are minimal'
      ],
      answer: 1,
      explain: 'Independent income arrives untaxed, and self-employment adds obligations employees never see. The mechanism (automatic, every payment) is non-negotiable; the exact percentage is a professional-consult item.'
    }
  ],

  'learning-to-learn': [
    {
      q: 'Why does self-testing beat rereading, according to memory research?',
      options: [
        'Rereading takes longer per page',
        'Retrieval — pulling information out of your head — is what physically strengthens memory; rereading only builds familiarity that fades',
        'Tests are more stressful, and stress improves memory',
        'Rereading only works for visual learners'
      ],
      answer: 1,
      explain: 'Testing isn’t a measurement of learning; it IS the learning. Rereading produces the feeling of knowing without the durable memory.'
    },
    {
      q: 'You have three hours to learn material for next month. The most effective schedule is:',
      options: [
        'One three-hour session — deep immersion beats fragments',
        'Three one-hour sessions on consecutive days, then nothing',
        'Several short sessions spaced across weeks, reviewing right as forgetting begins',
        'Save all three hours for the night before you need it'
      ],
      answer: 2,
      explain: 'The spacing effect: reviewing at expanding intervals — right as memory starts to fade — produces dramatically better retention from identical total time.'
    },
    {
      q: 'The "explain it simply" (Feynman) technique is powerful because:',
      options: [
        'Simple explanations are more polite',
        'It reveals exactly where your understanding has gaps — wherever you stall or reach for jargon',
        'Twelve-year-olds are the best judges of accuracy',
        'It replaces the need for any practice'
      ],
      answer: 1,
      explain: 'Fluent recognition hides gaps; forced plain-language explanation exposes them precisely, telling you exactly what to review.'
    }
  ],

  'personal-finance': [
    {
      q: 'What does "pay yourself first" mean in practice?',
      options: [
        'Spend on wants before bills, since happiness matters',
        'Savings transfers automatically on payday, before spending starts — ordering beats willpower',
        'Pay off all debt before saving anything at all',
        'Give yourself a weekly cash allowance'
      ],
      answer: 1,
      explain: 'Automation on payday removes the monthly decision that spending pressure always wins. Any amount counts; the ordering is the mechanism.'
    },
    {
      q: 'Which two factors dominate your credit score?',
      options: [
        'Your income and your education level',
        'How many cards you have and where you shop',
        'On-time payment history and how much of your available credit you use',
        'Your age and your employer'
      ],
      answer: 2,
      explain: 'Payment history and utilization (keep it under ~30% of limits, lower is better) drive most of the score. Income isn’t even in the formula.'
    },
    {
      q: 'The first emergency-fund target the course recommends is:',
      options: [
        'A full year of salary before anything else',
        '$500–$1,000 in a separate account — enough to turn a car repair into an inconvenience instead of a debt spiral',
        'Whatever fits in your checking account',
        'Investing it all in stocks for higher returns'
      ],
      answer: 1,
      explain: 'Small and achievable first, then grow toward months of expenses in a separate high-yield account. Emergency money’s job is stability, not returns.'
    }
  ],

  'creative-thinking': [
    {
      q: 'Why should idea generation and idea evaluation be separated?',
      options: [
        'Evaluation is management’s job, not yours',
        'Judging during generation kills output — the inner critic at idea three prevents the better ideas that arrive after idea ten',
        'Generation should be done alone, evaluation in groups',
        'They require different software'
      ],
      answer: 1,
      explain: 'Quantity precedes quality: the non-obvious ideas come after the obvious ones are exhausted, which never happens if each idea is judged on arrival.'
    },
    {
      q: 'Your brainstorm is stuck. The course suggests:',
      options: [
        'Waiting for inspiration to return naturally',
        'Adding a constraint ("without spending money"), running SCAMPER, or inverting the question ("how would we guarantee failure?")',
        'Ending the session — stuck means the idea pool is empty',
        'Asking only the most creative person to continue'
      ],
      answer: 1,
      explain: 'Creativity responds to procedure: constraints give traction, SCAMPER forces seven angles, and inversion converts the easy failure-list into an improvement plan.'
    },
    {
      q: 'The best way to pitch a novel idea to a cautious decision-maker is:',
      options: [
        'Present the full vision with maximum enthusiasm',
        'A reversible, time-boxed pilot with a named cost and a metric that decides — pricing the risk instead of hiding it',
        'Wait until the idea is perfect before showing anyone',
        'Get their boss to mandate it'
      ],
      answer: 1,
      explain: 'Decision-makers reject unpriced risk, not novelty. "Two weeks, one team, X hours, we stop if the number doesn’t move" makes yes cheap.'
    }
  ],

  'project-management': [
    {
      q: 'The project triangle means:',
      options: [
        'Every project needs exactly three people',
        'Scope, time, and resources constrain each other — when one moves, another must, and pretending otherwise causes the crisis later',
        'Projects should be planned in three phases',
        'Three stakeholders must sign off before starting'
      ],
      answer: 1,
      explain: 'You can’t compress the deadline while keeping full scope and the same resources. Making the trade explicit at kickoff is the professional move.'
    },
    {
      q: 'Why does every task need exactly one owner?',
      options: [
        'It simplifies the payroll',
        'Shared ownership is no ownership — "we’ll all handle it" reliably delivers nothing on time',
        'One person should do all the work themselves',
        'Software licenses are usually per-seat'
      ],
      answer: 1,
      explain: 'Accountability doesn’t divide. Others can help, but one name is responsible for each task reaching done.'
    },
    {
      q: 'Estimates for your project total six weeks. Experience with the planning fallacy suggests you should:',
      options: [
        'Commit to six weeks — padding is dishonest',
        'Commit to four weeks to motivate the team',
        'Add a honest buffer (30–50%) at the project level and manage scope changes with visible trade-offs',
        'Refuse to give any estimate'
      ],
      answer: 2,
      explain: 'Optimism in estimation is one of psychology’s most replicated findings. Project-level buffer plus scope discipline is how deadlines survive reality.'
    }
  ],

  'job-search-foundations': [
    {
      q: 'A large share of jobs are filled through referrals and connections. The practical implication is:',
      options: [
        'Job boards are useless and should be ignored',
        'Send a specific ask ("I’m looking for X — know anyone I should talk to?") to people who know your work, alongside board and direct applications',
        'Only apply to companies where you already know the CEO',
        'Attend as many networking events as possible'
      ],
      answer: 1,
      explain: 'The hidden market responds to specific, forwardable requests — especially to former coworkers who can vouch for you. Boards stay in the mix; they’re just one channel.'
    },
    {
      q: 'Which posting detail is a scam red flag?',
      options: [
        'The salary range is posted publicly',
        'The company asks for two references',
        'They conduct the "interview" entirely by chat app and ask for bank details before any offer',
        'The application requires a cover letter'
      ],
      answer: 2,
      explain: 'Chat-only interviews, requests for banking or ID documents pre-offer, and any request to send money are classic hiring-scam patterns. Legitimate employers never ask you to pay.'
    },
    {
      q: 'The course recommends treating a longer search like:',
      options: [
        'A sprint — apply to everything the first week',
        'A part-time job with set hours, a stopping time, parallel skill-building, and free resources like libraries and American Job Centers',
        'A waiting game — good things come to those who wait',
        'A secret — tell no one until you have an offer'
      ],
      answer: 1,
      explain: 'Bounded structure sustains months; unbounded searching burns out by week three. And the free workforce infrastructure exists precisely for this moment.'
    }
  ],

  'customer-service': [
    {
      q: 'A customer arrives angry about a late order. Per LAST, your first move is:',
      options: [
        'Explain the shipping company’s fault immediately',
        'Offer a discount before they finish talking',
        'Let them fully explain without interruption, taking notes',
        'Transfer them to a supervisor right away'
      ],
      answer: 2,
      explain: 'Listen comes first — most escalation happens because someone was cut off. The venting empties the tank; the notes power the solve.'
    },
    {
      q: '"I’m sorry this happened — I’d be frustrated too" is effective because:',
      options: [
        'It legally admits fault, which customers appreciate',
        'It acknowledges the experience without assigning blame, proving the person was heard before the fix begins',
        'It buys time to think of excuses',
        'Scripts always outperform natural speech'
      ],
      answer: 1,
      explain: 'Acknowledgment isn’t admission — it’s receipt confirmation. Customers who feel heard become solvable; customers who don’t escalate.'
    },
    {
      q: 'When does de-escalation stop applying?',
      options: [
        'After five minutes of any complaint',
        'When the customer raises their voice at all',
        'When frustration becomes abuse — slurs, threats, personal attacks — which gets one boundary statement, then escalation per policy',
        'Never; the customer is always right'
      ],
      answer: 2,
      explain: 'De-escalation serves frustrated customers; absorbing abuse is not part of any job. Know your escalation path before you need it.'
    }
  ],

  'info-literacy': [
    {
      q: 'You need trustworthy data on job growth for a career decision. The strongest search is:',
      options: [
        'Whatever the first result says',
        'A search restricted to authoritative sources, e.g. site:bls.gov with your occupation — going beneath the blog layer',
        'The most-viewed video on the topic',
        'Asking in a Facebook group'
      ],
      answer: 1,
      explain: 'For consequential questions, go to the source layer: government data, major institutions, and library databases — not the content farms optimized to rank above them.'
    },
    {
      q: 'The "I" in SIFT — Investigate the source — is done by:',
      options: [
        'Reading more articles from the same source until you trust it',
        'Opening a new tab and reading what OTHERS say about the source (lateral reading)',
        'Checking whether the website looks professional',
        'Counting the ads on the page'
      ],
      answer: 1,
      explain: 'Fact-checkers read laterally — about the source, not just within it. Design quality and confident tone are trivially fakeable; reputation across the web is not.'
    },
    {
      q: 'A shocking video exists on exactly one anonymous account and nowhere else. The information-literate conclusion is:',
      options: [
        'It must be true — mainstream media is suppressing it',
        'Judge it by video quality and lighting',
        'Extraordinary footage with no provenance and no credible coverage is evidence of nothing yet — check who posted it first, when, and whether the event appears anywhere reliable',
        'Share it and let your followers decide'
      ],
      answer: 2,
      explain: 'In the AI era, provenance beats pixels: origin, timing, and corroboration are the durable checks. "Only exists in one place" is itself a finding.'
    }
  ],

  'data-literacy': [
    {
      q: '"Average salary here is $95,000" — but nine employees earn $50,000 and one earns $500,000. What should you ask for?',
      options: [
        'The mode',
        'The median — the middle value, which resists distortion by outliers in lopsided distributions',
        'The maximum',
        'A larger average'
      ],
      answer: 1,
      explain: 'Averages are dragged by extremes; the median ($50,000 here) describes the typical case. For salaries, prices, and followers, ask for the median.'
    },
    {
      q: 'Store A has 40 complaints this month; Store B has 12. Before concluding B is better, you must:',
      options: [
        'Check which manager is more experienced',
        'Normalize by volume — complaints per 100 orders — since totals mislead when group sizes differ',
        'Average the two numbers',
        'Wait another month'
      ],
      answer: 1,
      explain: 'Rates before conclusions: a store with 10× the orders can have more total complaints and far better service per order. Dividing by the denominator is the professional move.'
    },
    {
      q: 'Your finding: complaints dropped 40% after a process change. The honest, effective way to present it is:',
      options: [
        'A pie chart of all complaint categories since 2020',
        'Lead with the recommendation and the finding, one simple chart with an honest axis, full period shown, sample named',
        'Start with a 10-slide walkthrough of your analysis process',
        'A bar chart with the axis starting at 55% to make the drop look bigger'
      ],
      answer: 1,
      explain: 'One chart, one message; conclusion first; axes honest even when less dramatic. Credibility compounds — and one caught exaggeration spends years of it.'
    }
  ],

  'entrepreneurial-mindset': [
    {
      q: '"Problems are inventory" means:',
      options: [
        'Successful businesses stockpile complaints for legal protection',
        'Complaints you hear repeatedly are unmet demand — a running list of them becomes the source of future business ideas',
        'Inventory management is the biggest business problem',
        'You should solve every problem you encounter'
      ],
      answer: 1,
      explain: 'Where most people hear annoyances, opportunity-trained people hear markets whispering. The "heard it twice" list is a standing asset.'
    },
    {
      q: 'The strongest pre-build validation signal is:',
      options: [
        'Friends saying the idea sounds great',
        'A large number of social media likes',
        'Money committed before the thing exists — deposits, pre-orders, signed intent',
        'A detailed 40-page business plan'
      ],
      answer: 2,
      explain: 'People politely praise ideas and honestly spend money. Five pre-orders outweigh five hundred survey responses.'
    },
    {
      q: 'Research on founders who kept their day jobs while starting up found they:',
      options: [
        'Failed more often due to divided attention',
        'Succeeded more often — the paycheck funds patience, and desperation makes bad decisions',
        'Were legally barred from starting businesses',
        'Took twice as long with identical outcomes'
      ],
      answer: 1,
      explain: 'Smart risk-taking looks boring: affordable loss defined, reversible bets preferred, runway protected. The leap is optional; the discipline isn’t.'
    }
  ],

  'digital-presence': [
    {
      q: 'For a new local service business, the highest-impact free digital asset is:',
      options: [
        'A TikTok account posting daily',
        'A completed Google Business Profile with categories, photos, and reviews — the map pin customers actually find',
        'A press release',
        'A paid banner ad campaign'
      ],
      answer: 1,
      explain: 'Local searches surface the profile before any website. Complete fields + real photos + recent reviews is the free trust layer that drives calls.'
    },
    {
      q: 'The one-page website’s most important content rule is:',
      options: [
        'Maximum information — every service ever offered, in detail',
        'Positioning up top, proof high, clear offers, and ONE obvious next-step action repeated down the page',
        'An animated intro to demonstrate professionalism',
        'No prices anywhere, to force phone calls'
      ],
      answer: 1,
      explain: 'Five seconds to "am I in the right place?", proof over adjectives, and a single call-to-action — every added option measurably reduces response.'
    },
    {
      q: 'You receive an unfair negative review. The professional response is:',
      options: [
        'A detailed public rebuttal proving the customer wrong',
        'Report it and hope it disappears',
        'Acknowledge publicly, apologize for the experience, state what you’re doing, and move detail offline — future customers are reading your composure',
        'Have friends post five-star reviews to bury it'
      ],
      answer: 2,
      explain: 'The public reply is really addressed to the next customer. Calm accountability wins more trust than the stars around it; fake reviews are detectable and FTC-sanctionable.'
    }
  ]
};

/* ------------------------------------------------------------
   WELLNESS HUB — national resources + per-ZIP deep links.
   ZIP codes are used in-memory only and never persisted.
   ------------------------------------------------------------ */

const CRISIS_RESOURCES = [
  {
    name: '988 Suicide & Crisis Lifeline',
    detail: 'Free, confidential support 24/7. Call or text 988.',
    action: 'Call or text 988',
    href: 'tel:988'
  },
  {
    name: 'Crisis Text Line',
    detail: 'Text HOME to 741741 to reach a trained crisis counselor, 24/7.',
    action: 'Text HOME to 741741',
    href: 'sms:741741&body=HOME'
  },
  {
    name: 'Emergency',
    detail: 'If you or someone else is in immediate danger, call 911.',
    action: 'Call 911',
    href: 'tel:911'
  }
];

/* Functions returning URLs for a validated 5-digit ZIP. */
const LOCAL_RESOURCES = [
  {
    id: 'findtreatment',
    icon: 'map-pin',
    name: 'FindTreatment.gov',
    detail: 'Official, confidential U.S. government locator for mental health and substance-use treatment near you. Filter by payment options, including free and sliding-scale care.',
    linkText: 'Find treatment near',
    url: (zip) => `https://findtreatment.gov/locator?sAddr=${zip}&limitType=2&limitValue=25`
  },
  {
    id: 'psychtoday',
    icon: 'message',
    name: 'Psychology Today Therapist Finder',
    detail: 'Browse therapist profiles in your area — filter by insurance, specialty, price, and telehealth availability.',
    linkText: 'Browse therapists near',
    url: (zip) => `https://www.psychologytoday.com/us/therapists/${zip}`
  },
  {
    id: 'twooneone',
    icon: 'phone',
    name: '211 Community Resources',
    detail: 'Free, confidential help finding local mental health services, support groups, food, housing, and financial assistance. You can also dial 2-1-1 from any phone.',
    linkText: 'Search 211 services for',
    url: (zip) => `https://www.211.org/get-help/search?location=${zip}`
  },
  {
    id: 'nami',
    icon: 'users',
    name: 'NAMI — National Alliance on Mental Illness',
    detail: 'Free peer support groups, family programs, and education through local NAMI affiliates. HelpLine: 1-800-950-6264 (M–F, 10am–10pm ET).',
    linkText: 'Find your local NAMI',
    url: () => 'https://www.nami.org/findsupport/'
  }
];

const LIBRARY_RESOURCES = [
  {
    id: 'maps-libraries',
    icon: 'library',
    name: 'Public Libraries Near You',
    detail: 'Libraries are free learning hubs: internet, computers, quiet study space, résumé help, and librarians who genuinely want to help.',
    linkText: 'Map public libraries near',
    url: (zip) => `https://www.google.com/maps/search/public+library+near+${zip}`
  },
  {
    id: 'libby',
    icon: 'smartphone',
    name: 'Libby — Free eBooks & Audiobooks',
    detail: 'With any library card, borrow ebooks and audiobooks free on your phone. Ask your local branch for a card — most issue them same-day.',
    linkText: 'Get the Libby app',
    url: () => 'https://libbyapp.com/'
  }
];

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */

function getCourseById(id) {
  return COURSES.find(c => c.id === id) || null;
}

function getPillarById(id) {
  return PILLARS.find(p => p.id === id) || null;
}

function getCoursesByPillar(pillarId) {
  return COURSES.filter(c => c.pillar === pillarId);
}

function getQuiz(courseId) {
  return QUIZ_BANK[courseId] || [];
}

function getDailyQuote() {
  // Stable per calendar day
  const dayIndex = Math.floor(Date.now() / 86400000);
  return WISDOM_QUOTES[dayIndex % WISDOM_QUOTES.length];
}

function getTotalLessonCount() {
  return COURSES.reduce((n, c) => n + c.lessons.length, 0);
}
