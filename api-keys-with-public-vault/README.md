# API keys with public vaults
On server side the simplest way of using Akord API is Akord-js + API Key.

API key can be generated / rotated using Akord app:
Settings -> Developers∂

API key can be then used with Akord-Js:

```javascript
import { Akord, Auth } from "@akord/akord-js";
Auth.configure({ apiKey: "api_key" });
const akord = await Akord.init();
```

In case de-/encryption is required (private vaults) - Akord wallet is needed.
