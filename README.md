# API-Authentication

Αυτή η εφαρμογή αποτελεί ένα προσωπικό demo που δείχνει 4 διαφορετικές μεθόδους αυθεντικοποίησης με Node.js και Express:

🔓 **noAuth**  
Καμία αυθεντικοποίηση – οποιοσδήποτε μπορεί να έχει πρόσβαση στο endpoint.

🔑 **basicAuth**  
Απλή αυθεντικοποίηση με Basic Auth (username & password σε base64 στο header).

🗝️ **apiKey**  
Αυθεντικοποίηση με API Key – το κλειδί στέλνεται στο header ή ως query parameter.

🔐 **bearerToken**  
Αυθεντικοποίηση με Bearer Token – το client στέλνει το token (π.χ. JWT) στο header.

---
 📦 Εγκατάσταση
npm install




🚀 Εκκίνηση
bash
Αντιγραφή κώδικα
nodemon index.js


📂 Διαδρομές (routes)
/noAuth
/basicAuth
/apiKey
/bearerToken

Μπορείς να επισκεφθείς αυτές τις διαδρομές για να δεις πώς λειτουργεί η κάθε μέθοδος.


ℹ️ Τεχνολογίες
Node.js
Express
EJS (για views)
Axios (για testing requests)

