
// const patterns = {
//     name: [
//         /\b(Name|Full Name|Candidate Name|Profile):?\s*([A-Z][a-z]+\s[A-Z][a-z]+)/i,
//         /^([A-Z][a-z]+\s[A-Z][a-z]+)/m,
//         /\b([A-Z][a-z]+\s[A-Z][a-z]+)\b/,
//         /^([A-Z][a-z]+)\s([A-Z][a-z]+)\s*\|/m,
//         /\b(?!Software|Developer|Engineer|Technologies|Experience|Skills|Education)([A-Z][a-z]+\s[A-Z][a-z]+)\b/
//     ],

//     email: [
//         /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
//         /\b\w+@\w+\.\w+\b/
//     ],

//     phone: [
//         /\b\d{10}\b/,
//         /\b\+\d{1,3}\s\d{10}\b/,
//         /\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/
//     ],

//     skills: [
//         /(Core Competencies|Skills|Technical Skills|Key Skills|Proficiencies):?\s*([\s\S]*?)(?=\n\n|Experience|Education)/i,
//         /\bSkills\b[\s\S]*?(?=\n\n|Experience|Education)/i,
//         /\bTechnical\sSkills:\s([\s\S]*?)(?=\n\n|Experience|Education)/i
//     ],

//     experience: [
//         /(Professional Experience|Experience|Work History|Employment History):?\s*([\s\S]*?)(?=\n\n|Education)/i,
//         /\bExperience\b[\s\S]*?(?=\n\n|Education)/i
//     ],

//     education: [
//         /(Education|Qualifications|Academic Background|Academic Record):?\s*([\s\S]*?)(?=\n\n|Certifications|Skills)/i,
//         /\bEducation\b[\s\S]*?(?=\n\n|Certifications|Skills)/i
//     ]
// };

// module.exports = patterns;


const patterns = {
    name: [
        /\b(Name|Full Name|Candidate Name|Profile|Contact Information):?\s*([A-Z][a-z]+\s[A-Z][a-z]+)/i,
        /^([A-Z][a-z]+\s[A-Z][a-z]+)/m,
        /\b([A-Z][a-z]+\s[A-Z][a-z]+)\b/,
        /^([A-Z][a-z]+)\s([A-Z][a-z]+)\s*\|/m,
        /\b(?!Software|Developer|Engineer|Technologies|Experience|Skills|Education|Stack)([A-Z][a-z]+\s[A-Z][a-z]+)\b/
    ],

    email: [
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
        /\b\w+@\w+\.\w+\b/
    ],

    phone: [
        /\b\d{10}\b/,
        /\b\+\d{1,3}\s\d{10}\b/,
        /\b\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/
    ],

    skills: [
        /(Core Competencies|Skills|Technical Skills|Key Skills|Proficiencies):?\s*([\s\S]*?)(?=\n\n|Experience|Education)/i,
        /\bSkills\b[\s\S]*?(?=\n\n|Experience|Education)/i,
        /\bTechnical\sSkills:\s([\s\S]*?)(?=\n\n|Experience|Education)/i
    ],

    experience: [
        /(Professional Experience|Experience|Work History|Employment History):?\s*([\s\S]*?)(?=\n\n|Education)/i,
        /\bExperience\b[\s\S]*?(?=\n\n|Education)/i
    ],

    education: [
        /(Education|Qualifications|Academic Background|Academic Record|University|College|Degree|Graduation):?\s*([\s\S]*?)(?=\n\n|Certifications|Skills)/i,
        /\bEducation\b[\s\S]*?(?=\n\n|Certifications|Skills)/i
    ]
};

module.exports = patterns;