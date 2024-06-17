define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addQuestionsSet('basicSelect', 
	{
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true, 
		required : true, 		
		errorMsg: {
			required: 
			"Please select an answer, or click 'Decline to Answer'"
		},
		helpText: 'Selecting an answer once colors it blue.<br/>You can change your answer by selecting another option.<br/>To confirm, click the selected (blue) button a second time.'   
	});
	
    
 API.addPagesSet('qPage', 
	{
		progressBar: '<%= pagesMeta.number %> out of 18',
        header: 'Attitudes Toward Implicit Bias Instrument (ATIBI)',
		decline:true,
		v1style:2,
		numbered: false
	});

    API.addSequence([
    {mixer:'random',
    data:[
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq1',
                    stem: 'Individuals carry assumptions and opinions in their subconscious (in the form of implicit bias) that they are not aware of.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq2',
                    stem: 'Racial and ethnic minority groups are often treated in subtly disrespectful ways.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq3',
                    stem: 'Learning about implicit bias is as important to the practice of medicine as learning about basic science.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq4',
                    stem: 'It is important to me to learn how to recognize when one of my own implicit biases is activated.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
        }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq5',
                    stem: 'I am able to define implicit bias in my own words.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq6',
                    stem: 'The personal implicit biases that other students hold about racial and/or ethnic minorities may affect the quality of care they provide to patients.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq7',
                    stem: 'I worry about saying the wrong thing during discussions about racial and ethnic implicit bias',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq8',
                    stem: 'Implicit bias recognition and management is a competency students should master before attaining their medical degree',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq9',
                    stem: 'I have made assumptions about racial and/or ethnic minorities that have proven to be incorrect',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq10',
                    stem: 'I worry that my actions won’t match my values when I interact with patients who are racially or ethnically different than me.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq11',
                    stem: 'Racism is only an issue of the past.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq12',
                    stem: 'It is important to me to learn how to minimize the effects my implicit biases may have on my clinical decision-making.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq13',
                    stem: 'Learning about implicit bias is as important to the practice of medicine as learning about patient-physician communication skills.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq14',
                    stem: 'When I have an exam looming I don’t want to waste time learning about implicit bias.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq15',
                    stem: 'I have the skills to address my own implicit biases that come up in the course of delivering care.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq16',
                    stem: 'An individual\’s implicit bias can affect her/his/their behavior.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq17',
                    stem: 'The assumptions I make about racial and/or ethnic minorities may affect the way I treat them',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        },
        {
            inherit:'qPage',
            questions:[
                {
                    inherit : {set:'basicSelect'},
                    name: 'atibiq18',
                    stem: 'It is important to discuss race, ethnicity, and culture during medical school.',
                    answers: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree']
                }
            ]
        }
    ]}
 ]);
	return API.script;
});