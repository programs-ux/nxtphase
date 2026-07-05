/* ============================================================
   NXT Phase Learning — data layer
   All static content. Loaded before app.js.
   ============================================================ */

const PILLARS = [
  {
    id: 'personal',
    label: 'Personal Development',
    short: 'Personal',
    icon: '🌱',
    color: 'var(--gold)',
    desc: 'Build the inner skills — mindset, emotional intelligence, and focus — that power every other goal.'
  },
  {
    id: 'workforce',
    label: 'Workforce Skills',
    short: 'Workforce',
    icon: '💼',
    color: 'var(--teal)',
    desc: 'Practical, job-ready skills: presenting yourself, interviewing, and communicating like a professional.'
  },
  {
    id: 'technical',
    label: 'Technical Skills',
    short: 'Technical',
    icon: '💻',
    color: 'var(--violet)',
    desc: 'Digital confidence for modern work — from staying safe online to spreadsheets and AI tools.'
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
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>Pick a recent setback — small is fine. Run it through the loop on paper: the factual name, the one lesson, the scheduled next attempt. Notice how different it feels from replaying it.</p>`
      },
      { title: 'Quiz: Growth Mindset', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence Essentials',
    pillar: 'personal',
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>In your next real conversation, don't offer a single opinion until you've reflected back what you heard and they've confirmed you got it right. Watch what it does to the temperature of the conversation.</p>`
      },
      { title: 'Quiz: Emotional Intelligence', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'time-energy',
    title: 'Time & Energy Management',
    pillar: 'personal',
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>Rewrite your LinkedIn headline using this pattern: <em>[what you are] + [what you're great at or moving toward]</em>. Then check that it agrees with the summary line at the top of your résumé.</p>`
      },
      { title: 'Quiz: Résumé & Branding', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'interview-mastery',
    title: 'Interview Confidence',
    pillar: 'workforce',
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>Research the typical pay range for a job you want (state listings and salary sites make this fast) and write down your range. Deciding your number before the room is how you avoid deciding it in the room.</p>`
      },
      { title: 'Quiz: Interview Confidence', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'workplace-communication',
    title: 'Communicating at Work',
    pillar: 'workforce',
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>Open your spam or junk folder and autopsy one phishing email against the red-flag list. Practicing on defused examples trains your eye for live ones.</p>`
      },
      { title: 'Quiz: Digital Foundations', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'spreadsheet-basics',
    title: 'Spreadsheet Basics',
    pillar: 'technical',
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>Sort your practice table by Amount, largest first. Then filter to one category and note the total. You just did data analysis — the same skill, at any scale, that businesses pay for.</p>`
      },
      { title: 'Quiz: Spreadsheet Basics', type: 'quiz', minutes: 8 }
    ]
  },

  {
    id: 'ai-tools',
    title: 'Working Smarter with AI Tools',
    pillar: 'technical',
    level: 'Beginner',
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
<h4>Try this</h4>
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
<h4>Try this</h4>
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
<h4>Try this</h4>
<p>Ask an AI assistant a factual question in an area you care about, then independently verify its three main claims. Time how long verification takes — that's the real cost of using AI responsibly, and it's usually smaller than you fear.</p>`
      },
      { title: 'Quiz: Working with AI', type: 'quiz', minutes: 8 }
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
    icon: '🧠',
    name: 'FindTreatment.gov',
    detail: 'Official, confidential U.S. government locator for mental health and substance-use treatment near you. Filter by payment options, including free and sliding-scale care.',
    linkText: 'Find treatment near',
    url: (zip) => `https://findtreatment.gov/locator?sAddr=${zip}&limitType=2&limitValue=25`
  },
  {
    id: 'psychtoday',
    icon: '💬',
    name: 'Psychology Today Therapist Finder',
    detail: 'Browse therapist profiles in your area — filter by insurance, specialty, price, and telehealth availability.',
    linkText: 'Browse therapists near',
    url: (zip) => `https://www.psychologytoday.com/us/therapists/${zip}`
  },
  {
    id: 'twooneone',
    icon: '🤝',
    name: '211 Community Resources',
    detail: 'Free, confidential help finding local mental health services, support groups, food, housing, and financial assistance. You can also dial 2-1-1 from any phone.',
    linkText: 'Search 211 services for',
    url: (zip) => `https://www.211.org/get-help/search?location=${zip}`
  },
  {
    id: 'nami',
    icon: '🌻',
    name: 'NAMI — National Alliance on Mental Illness',
    detail: 'Free peer support groups, family programs, and education through local NAMI affiliates. HelpLine: 1-800-950-6264 (M–F, 10am–10pm ET).',
    linkText: 'Find your local NAMI',
    url: () => 'https://www.nami.org/findsupport/'
  }
];

const LIBRARY_RESOURCES = [
  {
    id: 'maps-libraries',
    icon: '📚',
    name: 'Public Libraries Near You',
    detail: 'Libraries are free learning hubs: internet, computers, quiet study space, résumé help, and librarians who genuinely want to help.',
    linkText: 'Map public libraries near',
    url: (zip) => `https://www.google.com/maps/search/public+library+near+${zip}`
  },
  {
    id: 'libby',
    icon: '📱',
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
