q1 = {
	ty: 'questioncard',
	title: 'Biggest accomplishment these days?',
	qs: ['Waking up when it was still the a.m.', 'Doing a singular Chloe Ting workout', 'Finishing The Family Puzzle™'],
	desc: "",
}

q2 = {
	ty: 'questioncard',
	title: 'How far are you willing to take it with your Zoom crush?',
	qs: ['I pin their screen so I can stare at them the full 90 minutes', 'I Facebook messaged them to ask what the homework was', 'I stopped caring about other human beings on march 30th'],
	desc: "",
}

q3 = {
	ty: 'questioncard',
	title: 'What\'s your excuse to get off of a group FaceTime',
	qs: ['I have to go knead my starter...', 'I gotta go, my parents are making gin and tonics...', '*Just freeze and hope they think your Wi-Fi stopped working*'],
	desc: "",
}

q4 = {
	ty: 'questioncard',
	title: 'When did you know you\'d officially gone crazy?',
	qs: ['I started scrolling through Venmo like social media', 'I saw a cycler with a baby wagon and thought it was a BrewBike', 'I started geniunely caring about Charli D\'Amelio'],
	desc: "",
}

q5 = {
	ty: 'questioncard',
	title: 'How\'s the job hunt going?',
	qs: ['I have secured a profitable side hustle knitting tiny llamas', 'I emailed my internship coordinator ten times asking if the position was still happening', 'I have given up on employment until there is a reason to live'],
	desc: "",
}

q6 = {
	ty: 'questioncard',
	title: 'Saddest part about missing spring quarter?',
	qs: ['No Wildcat GeoGame', 'The unresolved ending to senior caps'],
	desc: "",
}

q7 = {
	ty: 'questioncard',
	title: 'Fitness level?',
	qs: ['I feel winded going to the mailbox', 'I go on ten walks per day'],
	desc: "",
}

end1 = {
	ty: 'endcard',
	title: 'The Social (Distance) Chair',
	desc: 'Not being able to wreak havoc on Evanston is driving you nuts. You’ve been making TikTok videos. Going outside to scream. Frantically running around the house. Burning pieces of paper for fun. If your friends thought you were chaotic before quarantine, they should see you now. Oh wait, they can. You’ve gone on Instagram Live three times already today.', 
	links: []}

end2 = { 
	ty: 'endcard', 
	title: 'The Loafer', 
	desc: 'Anyone who\’s watched your Instagram story over the past few months has seen more bread than a Hillel kid in need of service hours. Focaccia, rye, sourdough — name any bread, you’ve made it. You complained about the yeast shortage, circulated a sourdough starter amongst your friends, and spent the better half of this pandemic with flour up to your elbows.', 
	links: []}

end3 = { 
	ty: 'endcard', 
	title: 'The 5 O\'Clock Somewhere', 
	desc: 'There is no sense of time in quarantine, you say, pouring yourself some Bourbon at 11 a.m. It\’s called an Old Fashioned because, when you\’re drinking it, you can pretend like it\’s not 2020! Don’t call is a pandemic — it\’s just a pregame for normal life!', 
	links: []}

end4 = { 
	ty: 'endcard', 
	title: 'The Hustler', 
	desc: 'While most people have been binge-watching Netflix, you have been waking up at 6 a.m. for a full day of crossing things off a to-do list. You start with a morning run, maybe a quick yoga sesh. You write cover letters and finish reading a novel before making a lovely dinner from the <i>New York Times<i> recipe column. Gosh, crazy what happens when you get a little bit of free time!', 
	links: []}
 
end5 = { 
	ty: 'endcard', 
	title: 'The Nihilist', 
	desc: 'Quarantine has given you permission to be even more of a chiller than you were this winter. For most of your Zooms, you\’re lying in bed with the camera turned off. You don’t remember how to apply makeup and your jeans are acquiring a layer of dust. You wore the same t-shirt to all eight of your lectures this week, but no one noticed because all you said was “Yes, I can hear you” and “Thank you, bye.”', 
	links: []}

// setup links now that all the data is defined.

q1.links =  [q3, q2, q4]
q2.links =  [q5, q3, q5]
q3.links =  [end2, end3, q4]
q4.links =  [q6, q5, end5]
q5.links =  [q6, q7, end5]
q6.links =  [end1, end3]
q7.links =  [end5, end4]


entry = q1
console.log(entry)
