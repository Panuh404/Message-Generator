//Strange Greetings...
//Language: javascript

var Messages = [
    ['Hello there', 'Hi', 'Yo sir', 'Greetings', 'Aye sir', 'Speak', 'Hey There'],
    [
        ['Hmm?', 'Need Something?', 'Yes?', 'What can i do for you?', 'Hi there'],
        ['Speak', 'Make it Quick', 'I dont owe you money, do i?', 'What do you want?']
    ],
    [ 'Can i see your stuff?', 'I wanna buy some stuff', 'i want that?'],
    [
        ['There you got', 'Thanks', 'Good Choice'],
        ['No', 'I dont owe you money, do i?', 'Who the f are you?']
    ],
    [ 'Ok im leaving', 'Thats it', 'Goodbye'],
    [
        ['Until next time', 'Goodbye', 'Farewell', 'See you soon', 'Take care'],
        ['F**k off', 'Excuse me', 'Leave me alone', '...', 'Shut up']
    ]

];

function showMessages(Messages){
    //Presentation
    console.log('#############################################');
    console.log('########## STRANGE MERCHANT DIALOG ##########');
    console.log('#############################################');

    //First Message (You)
    var random = Math.floor(Math.random() * Messages[0].length);
    console.log('#### > You: ' + Messages[0][random]);
    console.log('#############################################');

    //Second Message (Strange Merchant)
    var humor = Math.floor(Math.random() * 2);
    var MercState = '';
    if(humor == 0) { MerchantState = 'Friendly'; }
    else { MercState = 'Angry'; }
    random = Math.floor(Math.random() * Messages[1][humor].length);
    console.log('#### < Merchant '+ MercState +': ' + Messages[1][humor][random]);
    console.log('#############################################');

    //Third Message (You)
    random = Math.floor(Math.random() * Messages[2].length);
    console.log('#### > You: ' + Messages[2][random]);
    console.log('#############################################');

    //Fourth Message (Strange Merchant)
    random = Math.floor(Math.random() * Messages[3][humor].length);
    console.log('#### < Merchant '+ MercState +': ' + Messages[3][humor][random]);
    console.log('#############################################');

    //Fifth Message (You)
    random = Math.floor(Math.random() * Messages[4].length);
    console.log('#### > You: ' + Messages[4][random]);
    console.log('#############################################');

    //Sixth Message (Strange Merchant)
    random = Math.floor(Math.random() * Messages[5][humor].length);
    console.log('#### < Merchant '+ MercState +': ' + Messages[5][humor][random]);
    console.log('#############################################\n');

    //Final Message
    if(humor == 0) { 
        console.log('#############################################');
        console.log('****** The Merchant waves you goodbye ******');
        console.log('#############################################');
     }
    else { 
        console.log('#############################################');
        console.log('* The Merchant turns around and walks away *');
        console.log('#############################################');
     }
}

showMessages(Messages);