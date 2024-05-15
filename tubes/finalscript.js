const questions = [
    {
        question: "1. You wake up disoriented in your escape pod, alarms blaring. A holographic message from your captain appears. \"Attention crew! The flagship has been attacked by space pirates! Eject all escape pods! Rendezvous point: Beta Andromeda!\"",
        answers: {
            S: {
                text: "\"Space pirates?! I thought this was a peaceful exploration mission! Where's my laser pistol?\"",
                scores: {S: +4, N: 0},
            },
            N: {
                text: "\"Oh no! This is a disaster! I need to contact someone... anyone! But what if I'm all alone?\"",
                scores: {S: 0, N: +4},
            },
            Sn: {
                text: "\"Interesting! This is way more exciting than reading those dusty exploration logs. Let's see what adventures await!\"",
                scores: {S: +3, N: 0},
            },
            sN: {
                text: "\"Ugh, not another space mishap! Can't they just let me have a day off?",
                scores: {S: 0, N: +3},
            },
        },
    },
    {
        question: "2. You crash-land on a strange, abandoned space station. As you explore, you stumble upon a group of tiny, furry aliens huddled together.",
        answers: {
            J: {
                text: "\"Aawww, so cute! I gotta capture one for my research! Maybe they can help me fix my escape pod.\"",
                scores: { P: 0, J: +4 },
            },
            P: {
                text: "\"Don't worry little guys! I'm here to help! Are there any survivors? Do you need food or medical attention?\"",
                scores: { P: +4, J: 0 },
            },
            jP: {
                text: "\"Hmm, these creatures could be valuable allies or bargaining chips. I'll need to learn more about their culture and capabilities.\"",
                scores: { P: +3, J: 0 },
            },
            Jp: {
                text: "\"Eww, stay away from me! Those things look creepy! I just need to find a way out of here as quickly as possible.\"",
                scores: { P: 0, J: +3 },
            },
        },
    },
    {
        question: "3. Your party escape the gnomes and end up in a magical mushroom forest. As you harvest one, it suddenly screams, \"OUCH!\"",
        answers: {
            T: {
                text: "\"Whoa, that's beautiful! I gotta collect some of those crystals for scientific analysis... and maybe a souvenir or two.\"",
                scores: { T: +4, F: 0 },
            },
            F: {
                text: "\"This place is magical! I feel a strange energy emanating from those crystals. Are they some kind of alien artifact?\"",
                scores: { T: 0, F: +4 },
            },
            tF: {
                text: "\"Perfect! I can use these crystals to upgrade my escape pod and increase its speed! Gotta reach the rendezvous point before anyone else.\"",
                scores: { T: 0, F: +3 },
            },
            Tf: {
                text: "\"Ugh, this is taking forever! Can't we just fly around this asteroid field? I need to relax and enjoy the view.\"",
                scores: { T: +3, F: 0 },
            },
        },
    },
    {
        question: "4. You arrive at Beta Andromeda to find a bustling spaceport filled with all sorts of alien creatures. Bright lights, strange music, and exotic food fill the air.",
        answers: {
            I: {
                text: "\"Fascinating! I need to document everything! This is a goldmine of new information and cultural experiences!\"",
                scores: { I: +4, E: 0 },
            },
            E: {
                text: "\"Let's party! This is the perfect opportunity to unwind after all that stress. Time to try some alien food and dance the night away!\"",
                scores: { I: 0, E: +4 },
            },
            iE: {
                text: "\"I need to find a reliable mechanic to fix my escape pod and stock up on supplies. Every credit counts on this journey.\"",
                scores: { I: 0, E: +3 },
            },
            Ie: {
                text: "\"I feel so overwhelmed! Too much noise, too many unfamiliar faces. I need to find a quiet corner to recharge and figure out my next move.\"",
                scores: { I: +3, E: 0 },
            },
        },
    },
    {
        question: "5. You discover a hidden marketplace selling rare artifacts. A mysterious vendor catches your eye and offers you a unique item.",
        answers: {
            F: {
                text: "A portable black hole generator? That could be incredibly dangerous! But also incredibly useful... hmm, decisions, decisions.",
                scores: { F: +4, T: 0 },
            },
            T: {
                text: "An alien communication device! This could be the key to understanding these creatures and forging valuable alliances.",
                scores: { F: 0, T: +4 },
            },
            tF: {
                text: "A holographic disguise kit? Now I can blend in with any alien race! This could be a game-changer.",
                scores: { F: +3, T: 0 },
            },
            Tf: {
                text: "A device that lets you project your dreams onto others? Sounds like trouble. I'll stick to my trusty laser pistol, thank you.",
                scores: { F: 0, T: +3 },
            },
        },
    },
    {
        question: "6. You finally reach the rendezvous point and are greeted by your fellow crewmates. They inform you the pirates have been captured and the flagship is safe. Your captain approaches you with a special mission.",
        answers: {
            I: {
                text: "\"A secret mission to infiltrate the pirate headquarters and retrieve stolen artifacts? I'm in! This could be my chance to prove myself.\"",
                scores: { I: +4, E: 0 },
            },
            E: {
                text: "\"A diplomatic mission to negotiate with the pirates and establish peace? I'm your gal/guy! I can charm my way out of any situation\"",
                scores: { I: 0, E: +4 },
            },
            eI: {
                text: "\"A scientific mission to study the pirate technology and learn from their tactics? Fascinating! I'm eager to expand my knowledge.\"",
                scores: { I: +3, E: 0 },
            },
            Ei: {
                text: "\"A mission to relax and enjoy the victory? I've had enough excitement for one day. Let's celebrate and take a break.\"",
                scores: { I: 0, E: +3 },
            },
        },
    },
    {
        question: "7. You embark on your mission, successfully infiltrating the pirate headquarters. You stumble upon a hidden room filled with treasures and a mysterious device.",
        answers: {
            S: {
                text: "\"Wow! Look at all these riches! I could sell these and become a space billionaire! But I need to be careful not to raise suspicion.\"",
                scores: { S: +4, N: 0 }
            },
            N: {
                text: "\"This device looks powerful. Maybe I can use it to reverse-engineer pirate technology and give us an advantage.\"",
                scores: { S: 0, N: +4 },
            },
            sN: {
                text: "\"I need to document this device and its surroundings. This could be a major archaeological discovery!\"",
                scores: { S: 0, N: +3 },
            },
            Sn: {
                text: "\"I feel uneasy in this place. Let's get out of here before we attract unwanted attention.\"",
                scores: { S: +3, N: 0 },
            },
        },
    },
    {
        question: "8. As you attempt to escape, you're confronted by the pirate captain, a notorious space outlaw. A tense standoff ensues.",
        answers: {
            P: {
                text: "\"I'm not afraid of you! I'll fight my way out of here if I have to!\"",
                scores: { P: +4, J: 0 },
            },
            J: {
                text: "\"Let's try to reason with this pirate. Maybe we can find a compromise or a way to outsmart them.\"",
                scores: { P: 0, J: +4 },
            },
            jP: {
                text: "\"I need to analyze the situation and find the most strategic escape route. Every move counts.\"",
                scores: { P: +3, J: 0 },
            },
            Jp: {
                text: "\"I'm outnumbered and outgunned. I need to use my wit and charm to defuse this situation.\"",
                scores: { P: 0, J: +3 },
            },
        },
    },
    {
        question: "9. You manage to escape the pirate headquarters and return to the flagship, hailed as a hero. Your captain presents you with a medal and the opportunity to choose your next assignment.",
        answers: {
            J: {
                text: "\"I want to lead a team of my own and explore uncharted territories! There's so much to discover out there.\"",
                scores: { J: +4, P: 0 },
            },
            P: {
                text: "\"I want to become an ambassador, bridging the gap between different alien cultures. I love meeting new people and learning their ways.\"",
                scores: { J: 0, P: +4 },
            },
            Jp: {
                text: "\"I want to head up the research department and develop new technologies that will revolutionize space travel.\"",
                scores: { J: +3, P: 0 },
            },
            jP: {
                text: "\"I want to take a well-deserved break and relax on a tropical alien planet. I've earned it!\"",
                scores: { J: 0, P: +3 },
            },
        },
    },
    {
        question: "10. You wake up in your bunk, the mission a distant memory. You're enjoying a peaceful zero-gravity float when you hear a commotion outside.",
        answers: {
            N: {
                text: "\"Ugh, what now? I just got back to sleep. I hope it's nothing serious.\"",
                scores: { N: +4, S: 0 },
            },
            S: {
                text: "This sounds exciting! Let's go check it out! Maybe there's a new adventure waiting for us.\"",
                scores: { N: 0, S: +4 },
            },
            sN: {
                text: "I need to gather more information before I act. Let's see what the crew is doing and why they're making such a fuss.\"",
                scores: { N: +3, S: 0 },
            },
            Sn: {
                text: "\"I'm too tired to deal with this. I'm going to put on my earplugs and try to sleep through it.\"",
                scores: { N: 0, S: +3 },
            },
        },

    },
    {
        question: "11. You've managed to establish a tentative communication link with the hostile alien drones. They seem agitated and are making demands, but you sense there's a possibility for peaceful resolution.\"",
        answers: {
            E: {
                text: "\"Let's focus on our shared desire for peace and cooperation. We can find a way to coexist harmoniously.\"",
                scores: { E: +4, I: 0 },
            },
            I: {
                text: "\"We can offer the drones resources or assistance in exchange for their peaceful withdrawal. It's a win-win situation.\"",
                scores: { E: 0, I: +4 },
            },
            Ei: {
                text: "\"Try to understand the drones' feelings and motivations. Maybe they've been hurt or misunderstood in the past.\"",
                scores: { E: +3, I: 0 },
            },
            eI: {
                text: "\"Delve into the drones' culture and customs. Misunderstandings often stem from cultural gaps.\"",
                scores: { E: 0, I: +3 },
            },
        },
    },
    {
        question: "12. After successfully resolving the crisis with the alien drones, you're back on track with your space mission. As you reflect on your experiences, you contemplate your future path and aspirations.",
        answers: {
            T: {
                text: "\"Become a respected diplomat, known for my ability to bridge cultural divides and foster peace across the galaxy.\"",
                scores: { F: 0, T: +4 },
            },
            F: {
                text: "\"Embark on a career as a pioneer in interstellar exploration, constantly venturing into uncharted territories and making groundbreaking discoveries.\"",
                scores: { F: +4, T: 0 },
            },
            fT: {
                text: "\"Rise through the ranks to become a renowned tactical commander, leading starfleets to victory in challenging missions.\"",
                scores: { F: 0, T: +3 },
            },
            Ft: {
                text: "\"Serve as a cross-cultural ambassador, helping different alien species understand and appreciate each other's customs and traditions.\"",
                scores: { F: +3, T: 0 },
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "7kitsune.png",
    },
    "ISFJ": {
        image: "8basilisk.png"
    },
    "INFJ": {
        image: "3fairy.png"
    },
    "INTJ": {
        image: "12sphinx.png"
    },
    "ISTP": {
        image: "6reaper.png"
    },
    "ISFP": {
        image: "5hydra.png"
    },
    "INFP": {
        image: "9unicorn.png"
    },
    "INTP": {
        image: "14griffin.png"
    },
    "ESTP": {
        image: "10hippocampus.png"
    },
    "ESFP": {
        image: "2siren.png"
    },
    "ENFP": {
        image: "4phoenix.png"
    },
    "ENTP": {
        image: "13jackalope.png"
    },
    "ESTJ": {
        image: "15cerberus.png"
    },
    "ESFJ": {
        image: "11gnome.png"
    },
    "ENFJ": {
        image: "1wyvern.png"
    },
    "ENTJ": {
        image: "16dragon.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


// function showResult() {
//     const resultElement = document.getElementById('result');
//     const resultTextContainer = document.querySelector('.result-text');
//     const resultImage = document.getElementById('result-image');
//     const topLetters = {};

//     const pairs = ["IE", "NS", "TF", "PJ"];
//     pairs.forEach(pair => {
//         const options = pair.split('');
//         const scores = options.map(option => userAnswers[option] || 0);
//         const topOptionIndex = scores.indexOf(Math.max(...scores));
//         const topOption = options[topOptionIndex];
//         topLetters[pair] = topOption;
//     });

//     //each pair
//     const result = pairs.map(pair => topLetters[pair]).join('');

//     //show result
//     const personalityData = resultOptions[result];
//     if (personalityData) {
//         resultTextContainer.innerHTML = `
//         `;

//         resultImage.src = "images/"+personalityData.image;
//         resultImage.alt = `${personalityData.image} Image`;
//     } else {

//     }

//     document.getElementById('quiz').style.display = 'none'; // Hide the quiz
//     document.getElementById('result').style.display = 'block'; // Show the result
//     document.getElementById('restart-button').style.display = 'block'; // Show the restart button
// }

function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    const result = pairs.map(pair => topLetters[pair]).join('');

    const personalityDescriptions = {
        "ISTJ": "ISTJ (The Logistician): Ant - ISTJs are known for their reliability, practicality, and attention to detail, much like ants working tirelessly and efficiently in their colonies.",
        "ISFJ": "ISFJ (The Defender): Golden Retriever - ISFJs are warm, empathetic, and loyal individuals, similar to golden retrievers known for their gentle nature, devotion, and eagerness to please.",
        "INFJ": "INFJ (The Advocate): Owl - INFJs are deep thinkers, insightful, and passionate about making a positive impact, akin to owls representing wisdom, intuition, and a connection to the spiritual realm.",
        "INTJ": "INTJ (The Architect): Octopus - INTJs are independent, strategic, and possess a strong intellectual curiosity, much like octopuses known for their intelligence, problem-solving abilities, and solitary nature.",
        "ISTP": "ISTP (The Virtuoso): Cat - ISTPs are adaptable, resourceful, and enjoy hands-on experiences, similar to cats known for their independence, curiosity, and ability to thrive in various environments.",
        "ISFP": "ISFP (The Adventurer): Butterfly - ISFPs are spontaneous, creative, and free-spirited individuals, much like butterflies representing beauty, transformation, and a zest for life.",
        "INFP": "INFP (The Mediator): Dove - INFPs are idealistic, compassionate, and driven by a desire for harmony, akin to doves symbolizing peace, love, and sensitivity.",
        "INTP": "INTP (The Logician): Sloth - INTPs are analytical, theoretical, and enjoy delving into complex ideas, similar to sloths known for their slow and deliberate movements, deep thoughtfulness, and ability to find contentment in solitude.",
        "ESTP": "ESTP (The Entrepreneur): Shark - ESTPs are energetic, action-oriented, and thrive in fast-paced environments, much like sharks representing power, determination, and a knack for seizing opportunities.",
        "ESFP": "ESFP (The Entertainer): Dolphin - ESFPs are enthusiastic, fun-loving, and enjoy being the center of attention, similar to dolphins known for their playful nature, social intelligence, and ability to connect with others.",
        "ENFP": "ENFP (The Campaigner): Golden Retriever Puppy - ENFPs are optimistic, charismatic, and passionate about inspiring others, much like golden retriever puppies known for their boundless energy, infectious enthusiasm, and ability to bring joy to those around them.",
        "ENTP": "ENTP (The Debater): Fox - ENTPs are quick-witted, intellectually curious, and enjoy challenging conventional thinking, similar to foxes known for their cunning, adaptability, and ability to outsmart their prey.",
        "ESTJ": "ESTJ (The Manager): Bear - ESTJs are organized, efficient, and take charge in leadership roles, much like bears representing strength, protectiveness, and a sense of responsibility for their pack.",
        "ESFJ": "ESFJ (The Consul): Golden Retriever - ESFJs are warm, empathetic, and dedicated to supporting others, similar to golden retrievers known for their gentle nature, devotion, and eagerness to please.",
        "ENFJ": "ENFJ (The Protagonist): Lion - ENFJs are charismatic, inspiring, and driven to make a positive impact on the world, much like lions representing leadership, courage, and a sense of community.",
        "ENTJ": "ENTJ (The Commander): Eagle - ENTJs are visionary, decisive, and possess a strong drive to achieve their goals, similar to eagles known for their keen eyesight, strategic hunting prowess, and ability to soar above others."
    };

    const personalityDescription = personalityDescriptions[result];
    if (personalityDescription) {
        resultTextContainer.innerHTML = `
            <p>${personalityDescription}</p>
        `;
    } else {
        resultTextContainer.innerHTML = `<p>Kepribadian tidak teridentifikasi.</p>`;
    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


