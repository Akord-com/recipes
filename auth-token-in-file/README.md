# Auth token in file

Akord uses 
 - the wallet for cryptography: encryption & signing
 - Auth token / API key for authentication

Auth token is short-living and managed (stored and refreshed) on client side.

Auth token is being refreshed automatically. You decide where you store the token.


```javascript
import { Akord, Auth } from "@akord/akord-js";
import { FileStorage } from "@akord/akord-auth"

const fileStorage = new FileStorage("./akord/credentials")
Auth.configure({ storage: fileStorage });
const { wallet } = await Auth.signIn(email, password);
const akord = await Akord.init(wallet);
```

