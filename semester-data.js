const SEMESTER_DATA={
  courses:[
    {id:'chem545',code:'CHEM 545',name:'Organic Chemistry',gradeSystem:'weighted',meeting:'MWF 11:10 AM–12:00 PM',location:'Spaulding Life Science 145',weeklyHours:9,categories:[['Exam I',20],['Exam II',20],['Final Exam',20],['Quizzes',15],['Homework',20],['Skill Builders',5]]},
    {id:'chem546',code:'CHEM 546',name:'Organic Chemistry Laboratory',gradeSystem:'weighted',meeting:'Lab section + Wed 5:10–6:00 PM lecture',location:'Parsons S252/S252A/S253A; lecture Pars N108',categories:[['Lab Reports',70],['Midterm',10],['Final Exam',18],['Participation',2]]},
    {id:'phys401',code:'PHYS 401',name:'Introduction to Physics I',gradeSystem:'weighted',categories:[['Labs',20],['Homework Tutorials',5],['Homework Problems',10],['3 Midterms',45],['Final Exam',20]]},
    {id:'zool613w',code:'ZOOL 613W',name:'Animal Behavior',gradeSystem:'specifications',meeting:'Tue/Thu 11:10 AM–12:30 PM',location:'Hamilton Smith 140',notes:'Specifications grading: requirements are tracked as completion/pass/revise rather than forcing every task into a percentage weight.'}
  ],
  assignments:[
    {id:'c545e1',courseId:'chem545',title:'Exam I',due:'2026-10-05',weight:20,hours:12,difficulty:5,type:'exam'},
    {id:'c545e2',courseId:'chem545',title:'Exam II',due:'2026-11-13',weight:20,hours:12,difficulty:5,type:'exam'},
    {id:'c545final',courseId:'chem545',title:'Final Exam',due:'2026-12-18',weight:20,hours:18,difficulty:5,type:'exam'},
    {id:'c545q4',courseId:'chem545',title:'Quiz 4',due:'2026-11-09',weight:3,hours:2,difficulty:4,type:'quiz'},
    {id:'c545q5',courseId:'chem545',title:'Quiz 5',due:'2026-12-14',weight:3,hours:2,difficulty:4,type:'quiz'},
    {id:'c545hw8',courseId:'chem545',title:'Homework 8',due:'2026-11-04',weight:1.82,hours:3,difficulty:4,type:'homework'},
    {id:'c545hw9',courseId:'chem545',title:'Homework 9',due:'2026-11-20',weight:1.82,hours:3,difficulty:4,type:'homework'},
    {id:'c545hw10',courseId:'chem545',title:'Homework 10',due:'2026-12-02',weight:1.82,hours:3,difficulty:4,type:'homework'},
    {id:'c545hw11',courseId:'chem545',title:'Homework 11',due:'2026-12-09',weight:1.82,hours:3,difficulty:4,type:'homework'},
    {id:'c546mid',courseId:'chem546',title:'Lab Midterm Exam',due:'2026-10-28',weight:10,hours:8,difficulty:4,type:'exam'},
    {id:'c546r1',courseId:'chem546',title:'Lab Report 1',due:'2026-09-16',weight:8.75,hours:4,difficulty:4,type:'report'},
    {id:'c546r2',courseId:'chem546',title:'Lab Report 2',due:'2026-09-23',weight:8.75,hours:4,difficulty:4,type:'report'},
    {id:'c546r3',courseId:'chem546',title:'Lab Report 3',due:'2026-09-30',weight:8.75,hours:4,difficulty:4,type:'report'},
    {id:'c546r4',courseId:'chem546',title:'Lab Report 4',due:'2026-10-07',weight:8.75,hours:4,difficulty:4,type:'report'},
    {id:'c546final',courseId:'chem546',title:'Lab Final Exam (TBD)',due:'2026-12-14',weight:18,hours:10,difficulty:5,type:'exam',tentative:true},
    {id:'p401m1',courseId:'phys401',title:'Midterm 1',due:'2026-10-01',weight:15,hours:10,difficulty:5,type:'exam'},
    {id:'p401m2',courseId:'phys401',title:'Midterm 2',due:'2026-10-27',weight:15,hours:10,difficulty:5,type:'exam'},
    {id:'p401m3',courseId:'phys401',title:'Midterm 3',due:'2026-11-19',weight:15,hours:10,difficulty:5,type:'exam'},
    {id:'zoolsetup',courseId:'zool613w',title:'Animal Behavior requirements tracker',due:'2026-09-07',weight:0,hours:1,difficulty:2,type:'milestone',spec:true}
  ]
};