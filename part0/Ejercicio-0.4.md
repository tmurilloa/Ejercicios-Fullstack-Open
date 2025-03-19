```mermaid
sequenceDiagram
    participant Browser
    participant Server
    
    Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    
    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server -->> Browser: HTML-code

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server -->> Browser: main.css

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server -->> Browser: main.js

    Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server -->> Browser: data.json 
