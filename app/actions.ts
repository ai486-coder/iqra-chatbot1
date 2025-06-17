"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// This is the processed content from the PDF document
const DOCUMENT_CONTENT = `
IQRA UNIVERSITY ACADEMIC POLICY MANUAL FOR STUDENTS

ADMISSION POLICY

Qualifications required for Bachelor's Programme:
a) Applicants should have minimum higher 2nd division in Higher Secondary School Certificate or equivalent from a recognized Institute/Board.
b) Applicants having "A" levels or other foreign qualifications must provide an equivalence certificate issued by Intermediate Board Committee of Chairmen (IBCC).
c) For programs where accrediting bodies have specified any number of seats then such conditions must meet.

For admission in B.E. an applicant must have:
i. At least 60% marks in Higher Secondary School Certificate (H.S.C) Pre-Engineering Examination. An applicant having a combination of Physics, Mathematics and Computer Sciences is also eligible.
ii. Or, GCE (A levels) in Mathematics, Physics and Chemistry. Applicants having A levels or other foreign qualifications must provide an equivalence certificate with at least 60% marks, issued by Intermediate Board Committee of Chairmen (IBCC).
iii. Or, At least 60% marks in Diploma of Associate Engineering Examination, for admission against reserved seats in the same discipline of Engineering in which he or she has passed the Diploma Examination.
iv. Or, first division in B.Sc. (pass) Examination from an HEC recognized institution with Mathematics, Physics, and one optional course selected from Chemistry or Statistics.

The number of credit hours needed to be completed and the minimum and maximum duration (04 – 07 years) of the program for the award of a degree will be according to the policies of the regulatory bodies and the approved structure of Academic Council of Iqra University.

Qualifications required for Master's Programme:
a) Applicants (Iqra University Graduates) should have 70% or equivalent CGPA, others 3.0 GPA or Equivalent Percentage from recognized universities / degree awarding institutions in the eligibility education for a minimum duration of 14-years of schooling.
b) The number of credit hours needed to be completed for the award of a degree will be according to the policies of the Higher Education Commission. Minimum and maximum duration to complete graduate (MBA or any 90 Cr. Hrs. program) in all discipline shall be:
   i) 3.5 – 06 years for 90 Cr. Hrs. Stream
   ii) 2.5 – 05 years for 72 Cr. Hrs. Stream
   iii) 2.0 – 4.5 years for 54 Cr. Hrs. Stream
   iv) 1.5 – 04 years for 36/48 Cr. Hrs. Stream

Qualifications required for the M.Phil. Programme:
a) Following applicants are eligible for admission in an M.Phil Programme:
   i. Old MBA/MPA/M.com/ICMA/ICA/B.com (4 years).
   ii. BBA 4-year programme with a minimum of 135 credit hours.
   iii. An applicant must have a minimum division or CGPA on a scale of 4 as prescribed by the HEC for admission to MPhil/MS Program.
   iv. GAT-General or equivalent test with a minimum 50% cumulative score will be required.

Qualifications required for the PhD Programme:
For Ph.D. in Business Administration:
a) MS/M.Phil in the relevant field of study.
b) MBA with a minimum of 90 Credit hours (with 2 year bachelor's programme) in the relevant field of study.
c) MBA with a minimum of 36 Credit hours (with 4 year bachelor's programme) in the relevant field of study.
d) Minimum CGPA should be 3.0 on a scale of 4.
e) In addition candidates must pass subject GRE (international) test for admission in PhD with 60% percentile score or GAT Subject with minimum of 60% marks or University administered GAT Subject with 70% marks.

GRADING SYSTEM AND CUMULATIVE GRADE POINT:
The following grading system will be followed:
A 88% - 100% 4.0 Excellent
B+ 81% - 87% 3.5 Very Good
B 74% - 80% 3.0 Good
C+ 67% - 73% 2.5 Average
C 60% - 66% 2.0 Below Average
F Below 60% 0.0 Failure (course repeat)
I - Incomplete
W - Withdrawal
K - Course in progress

ATTENDANCE REQUIREMENT:
1. Attendance in person, at all prescribed and elective lectures and seminars is mandatory. Maximum of 20% absences are allowed in a subject to cater for emergencies, sickness etc.
2. 20% or more absences in a subject will result in 'F' grade in that subject.
3. Students who join the semester late because of any reason shall be marked absent for the previous classes.

ACADEMIC PROMOTIONS:
1. All students must obtain minimum GPA in their first semester in order to be eligible for promotion into next semester.
2. The minimum requirement for semester progression is 2.0 GPA. If otherwise, the student shall be placed on first academic warning.
3. If the student continue to obtain less than 2.0 GPA in second semester consecutively throughout the Degree Program, he/she will be placed on second academic warning (Probation).
4. The Student who does not improve his/her GPA to 2.0 after second academic warning (Probation) shall be expelled from the University.

AWARD OF DEGREE:
A student, in order to become eligible for award of degree, must attain a graduating CGPA of 2.5.

REGISTRATION PROCESS:
1. All students have to fill the registration form and have to submit it on due date to the concerned authority.
2. Students can choose a maximum of 6 courses per regular semester in Undergraduate Program and a graduating student may be permitted by the Head of the Department to take up to 7 courses.
3. A course can be offered only if the number of students who have paid the fee for the course are not less than 20.

EXAMINATION RULES:
1. Switch your cell phones off and do not leave them on mute/vibration/offline mode.
2. All answers intended for the examinations must be written on both sides of the pages of the Answer Scripts.
3. No Candidate will be allowed to leave examination hall until one hour has elapsed from the time when the question paper is given.
4. No students shall be admitted to the examinations hall/room later than one hour after the start of the examinations.
5. Each student is required to place his/her ID card on the desk in the examinations hall for the duration of his/her examinations.

DISCIPLINARY REQUIREMENTS:
1. All students are required to observe the University's Charter, Statutes, Ordinances and Regulations.
2. All campuses of Iqra University are no smoking zones.
3. Wearing sandals and slippers on campus is not permitted.
4. For the safety and security measure, Vehicles with tinted glasses are not allowed in the IU premises.

SCHOLARSHIPS:
Performance Based Scholarships:
i. Students achieving 4 GPA will be offered a scholarship of 60% of the fee for that semester.
ii. Students acquiring 3.75 GPA to 3.99 GPA will be offered a scholarship of 40% of the fee for that semester provided they have a CGPA of 3.5.
iii. Students achieving GPA 3.5 to 3.74 will be offered a scholarship of 20% of the fee for that semester provided they have a CGPA of 3.5.

INTERNSHIP:
i. All Students of IU are required to undertake an internship of 8 to 12 weeks in an organization of good repute.
ii. Internship is a mandatory requirement for award of Bachelors and Master degrees.
iii. To get internship opportunity, the student should have at least 2.5 CGPA.

THESIS REQUIREMENTS:
1. Every student graduating under Bachelor or Masters' Program MBA/MPHIL/PhD must undergo research work where he/she will be writing a research report/thesis respectively.
2. Students must successfully complete their research work within a period of maximum one year after completing their courses.
3. Students must successfully defend their thesis in front of a panel to qualify for the award of a degree.
`

// Knowledge base for common questions
const KNOWLEDGE_BASE = {
  "admission requirements bachelor":
    "For Bachelor's programmes, applicants need minimum higher 2nd division in Higher Secondary School Certificate or equivalent. For B.E., at least 60% marks in H.S.C Pre-Engineering or equivalent qualifications are required.",

  "admission requirements master":
    "For Master's programmes, Iqra University graduates need 70% or equivalent CGPA, while others need 3.0 GPA from recognized universities with minimum 14 years of schooling.",

  "grading system":
    "The grading system follows: A (88-100%) = 4.0, B+ (81-87%) = 3.5, B (74-80%) = 3.0, C+ (67-73%) = 2.5, C (60-66%) = 2.0, F (Below 60%) = 0.0",

  "attendance requirements":
    "Attendance is mandatory with maximum 20% absences allowed. More than 20% absences result in 'F' grade in that subject.",

  "cgpa graduation": "Students need a minimum CGPA of 2.5 to be eligible for degree award.",

  "academic progression":
    "Minimum 2.0 GPA required for semester progression. Below 2.0 GPA results in academic warning, then probation, and finally expulsion if not improved.",

  scholarships:
    "Performance-based scholarships: 4.0 GPA = 60% fee waiver, 3.75-3.99 GPA = 40% fee waiver, 3.5-3.74 GPA = 20% fee waiver (with 3.5+ CGPA requirement).",

  internship:
    "8-12 weeks internship is mandatory for Bachelor's and Master's degrees. Students need minimum 2.5 CGPA to be eligible.",
}

function findRelevantContent(query: string, content: string): string {
  const queryLower = query.toLowerCase()

  // Check knowledge base first for quick answers
  for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
    if (queryLower.includes(key.replace(/\s+/g, " "))) {
      return value
    }
  }

  const sections = content.split("\n\n")

  // Find sections that contain relevant keywords
  const relevantSections = sections.filter((section) => {
    const sectionLower = section.toLowerCase()
    const keywords = queryLower.split(" ").filter((word) => word.length > 2)
    return keywords.some((keyword) => sectionLower.includes(keyword))
  })

  if (relevantSections.length > 0) {
    return relevantSections.slice(0, 5).join("\n\n")
  }

  return sections.slice(0, 3).join("\n\n")
}

function generateFallbackResponse(query: string): string {
  const queryLower = query.toLowerCase()

  // Check for common topics and provide fallback responses
  if (queryLower.includes("admission") || queryLower.includes("requirement")) {
    return `**Admission Requirements Summary:**

**Bachelor's Programs:**
- Minimum higher 2nd division in HSC or equivalent
- For B.E.: At least 60% marks in HSC Pre-Engineering
- Foreign qualifications need IBCC equivalence certificate

**Master's Programs:**
- Iqra graduates: 70% or equivalent CGPA
- Other universities: 3.0 GPA with 14 years education

**M.Phil Programs:**
- Relevant Master's degree
- GAT-General with minimum 50% score

**PhD Programs:**
- Relevant MS/M.Phil or MBA
- Minimum 3.0 CGPA
- GRE/GAT Subject test required

Would you like more specific information about any particular program?`
  }

  if (queryLower.includes("grade") || queryLower.includes("gpa") || queryLower.includes("cgpa")) {
    return `**Grading System:**

- **A (88-100%):** 4.0 - Excellent
- **B+ (81-87%):** 3.5 - Very Good  
- **B (74-80%):** 3.0 - Good
- **C+ (67-73%):** 2.5 - Average
- **C (60-66%):** 2.0 - Below Average
- **F (Below 60%):** 0.0 - Failure

**Important Requirements:**
- Minimum 2.0 GPA for semester progression
- Minimum 2.5 CGPA for graduation
- Below 2.0 GPA leads to academic warning/probation`
  }

  if (queryLower.includes("attendance")) {
    return `**Attendance Policy:**

- Attendance is **mandatory** for all lectures and seminars
- Maximum **20% absences** allowed per subject
- More than 20% absences = **'F' grade** in that subject
- Late joining students marked absent for missed classes
- No provision for leaves beyond the 20% allowance`
  }

  if (queryLower.includes("scholarship")) {
    return `**Performance-Based Scholarships:**

- **4.0 GPA:** 60% fee scholarship
- **3.75-3.99 GPA:** 40% fee scholarship (need 3.5+ CGPA)
- **3.5-3.74 GPA:** 20% fee scholarship (need 3.5+ CGPA)

**Requirements:**
- Minimum credit hours: 15 (Bachelor's), 12 (Master's)
- No disciplinary proceedings
- Limited to 10% of enrolled students per program
- Semester-based awards`
  }

  return `I understand you're asking about "${query}". While I don't have the complete information readily available, here are some key points from the Academic Policy Manual:

**Common Topics I can help with:**
- Admission requirements for all programs
- Grading system and CGPA calculations  
- Attendance policies
- Registration procedures
- Examination rules
- Scholarship opportunities
- Disciplinary policies
- Internship requirements

Please try rephrasing your question or ask about a specific topic from the list above. For example:
- "What are the admission requirements for Master's programs?"
- "How does the grading system work?"
- "What are the attendance requirements?"

I'm here to help with any questions about Iqra University's academic policies!`
}

export async function chatWithDocument(query: string): Promise<string> {
  try {
    // First, try to find relevant content
    const relevantContent = findRelevantContent(query, DOCUMENT_CONTENT)

    // Check if we have OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      console.warn("OpenAI API key not found, using fallback response")
      return generateFallbackResponse(query)
    }

    // Try to use AI for response
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: `You are a helpful assistant for Iqra University students. You have access to the Academic Policy Manual and can answer questions about admission requirements, academic regulations, grading systems, examination rules, disciplinary requirements, scholarships, and other university policies.

Always provide accurate information based on the document content provided. If you're not sure about something or if the information isn't in the document, say so clearly.

Be friendly, professional, and helpful. Structure your responses clearly with bullet points or numbered lists when appropriate. Use markdown formatting for better readability.`,
      prompt: `Based on the following content from the Iqra University Academic Policy Manual, please answer this question: "${query}"

Relevant content:
${relevantContent}

Please provide a comprehensive and accurate answer based on this information.`,
    })

    return text
  } catch (error) {
    console.error("Error in chatWithDocument:", error)

    // Return fallback response instead of throwing error
    return generateFallbackResponse(query)
  }
}