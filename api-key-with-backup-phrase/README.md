# API keys with backup phrase
On server side the simplest way of using Akord API is Akord-js + API Key.

Akord uses 
 - the wallet for cryptography: encryption & signing
 - Auth token / API key for authentication

Auth token is short-living and managed (stored and refreshed) on client side.

API key is long-living.

API key can be generated / rotated using Akord app:
Settings -> Developers

# API key example
API key usage example Akord-Js:

```javascript
import { Akord, Auth } from "@akord/akord-js";
import { AkordWallet } from "@akord/crypto";

Auth.configure({ apiKey: "api_key" });
const wallet = await AkordWallet.importFromBackupPhrase(backupPhrase)
const akord = await Akord.init(wallet);
```

