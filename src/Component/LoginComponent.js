import React from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const navigate = useNavigate();
  var gapi = window.gapi;
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID =
    "205506266179-i6k6078a1jjbec3thr4hrtc4346bu5v9.apps.googleusercontent.com";
  var API_KEY = "AIzaSyA-UT6GvhON0Wm4ksKVZ0RuZIgg-K-IPiE";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      // gapi.client.init({
      //   apiKey: API_KEY,
      //   clientId: CLIENT_ID,
      //   discoveryDocs: DISCOVERY_DOCS,
      //   scope: SCOPES,
      // })
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
          clientId:
            "205506266179-i6k6078a1jjbec3thr4hrtc4346bu5v9.apps.googleusercontent.com",
          plugin_name: "chat",
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          navigate("/home");
          // var event = {
          //   'summary': 'Awesome Event!',
          //   'location': '800 Howard St., San Francisco, CA 94103',
          //   'description': 'Really great refreshments',
          //   'start': {
          //     'dateTime': '2022-11-28T09:00:00-07:00',
          //     'timeZone': 'America/Los_Angeles'
          //   },
          //   'end': {
          //     'dateTime': '2022-12-28T17:00:00-07:00',
          //     'timeZone': 'America/Los_Angeles'
          //   },
          //   'recurrence': [
          //     'RRULE:FREQ=DAILY;COUNT=2'
          //   ],
          //   'attendees': [
          //     {'email': 'test@example.com'},
          //     {'email': 'testTwo@example.com'}
          //   ],
          //   'reminders': {
          //     'useDefault': false,
          //     'overrides': [
          //       {'method': 'email', 'minutes': 24 * 60},
          //       {'method': 'popup', 'minutes': 10}
          //     ]
          //   }
          // }

          // var request = gapi.client.calendar.events.insert({
          //   'calendarId': 'primary',
          //   'resource': event,
          // })

          // request.execute(event => {
          //   console.log(event)
          //   console.log(event?.htmlLink);
          //   // window.open(event.htmlLink)
          // //   window.open(event?.htmlLink, "", "fullscreen=yes");
          // })

          /*
            Uncomment the following block to get events
        */

          // get events
          // gapi.client.calendar.events.list({
          //   'calendarId': 'primary',
          //   'timeMin': (new Date()).toISOString(),
          //   'showDeleted': false,
          //   'singleEvents': true,
          //   'maxResults': 12,
          //   'orderBy': 'startTime'
          // }).then(response => {
          //   const events = response.result
          //   console.log('EVENTS: ', events)
          // })
        });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button style={{ width: 100, height: 50 }} onClick={handleClick}>
          Add Event
        </button>
      </header>
    </div>
  );
}

export default LoginComponent;
