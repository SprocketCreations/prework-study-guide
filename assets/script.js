function listTopics(topics) {
	for (let i = 0; i < topics.length; ++i) {
		console.log(`Topic ${i + 1}: ${topics[i]}`);
	}
}

function selectTopic(topic) {
	switch (topic.toLowerCase()) {
		case "HTML".toLowerCase():
			console.log("Let's study HTML!");
			break;
		case 'CSS'.toLowerCase():
			console.log("Let's study CSS!");
			break;
		case 'GIT'.toLowerCase():
			console.log("Let's study Git!");
			break;
		case 'JavaScript'.toLowerCase():
			console.log("Let's study JavaScript!");
			break
		default:
			console.log('Please try again!');
			break;
	}
}

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

const topics = ["HTML", "CSS", "Git", "Javascript"];

console.log('Here are the topics we learned through Prework:');
listTopics(topics);
console.log('Which topic should we study first?');
selectTopic(randomElement(topics));