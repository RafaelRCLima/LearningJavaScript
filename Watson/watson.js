const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2020-02-11',
  authenticator: new IamAuthenticator({
    apikey: '4Woy5ObjCDDc9n9nBQ7XtcvOSIxKF6gkAQm9G0J6zQgo',
  }),
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/fa5e8ab9-3b9c-4fd8-9d95-4489d5b6a05d/v1/workspaces/a790c544-dfd6-4505-9f4f-5daa3a2ab794/message',
});

assistant.createSession({
  assistantId: 'UUID do assistente'
})
  .then(res => {
    assistant.message({
      assistantId: 'UUID do assistente',
      sessionId: res.result.session_id,
      input: {
        'message_type': 'text',
        'text': 'Ola'
      }
    })
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
  })
