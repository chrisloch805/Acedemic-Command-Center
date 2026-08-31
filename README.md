# Academic Command Center

A lightweight personal academic operating system for turning course information into a prioritized action plan.

## Current MVP

- Course dashboard with current grade tracking
- Assignment tracking
- Explicit grade-weight capture for each assignment
- Due-date urgency
- Estimated study/work hours
- Difficulty scoring
- Priority Queue that combines academic impact and time pressure
- Study Strategist summary
- Browser local storage, so the app works without a backend

### Priority model

`priority = grade weight × 4 + estimated hours × 3 + difficulty × 4 + deadline urgency`

Deadline urgency rises as the due date approaches. The model is intentionally transparent so it can later be personalized with actual grades, workload patterns, syllabus parsing, and performance data.

## Run locally

Open `index.html` in a browser. No installation or backend is required.

## Planned architecture

1. **Academic Command Center** – shared source of truth for courses, assignments, grades, deadlines, and workload.
2. **Course Tutors** – course-specific context and study support.
3. **Study Strategist** – prioritization and study-time recommendations.
4. **Performance Analyst** – identifies weak areas and grade-risk trends.
5. **Degree/Career Strategist** – connects current academic choices to long-term goals.
6. **Research/Bioinformatics Mentor** – specialized research and technical guidance.

The next major step is syllabus ingestion: extracting assignments, dates, grade categories, and weights automatically into the shared academic state.