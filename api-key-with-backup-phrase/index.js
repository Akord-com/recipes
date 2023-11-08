import { Akord, Auth } from "@akord/akord-js";
import { AkordWallet } from "@akord/crypto";

const apiKey = "your_api_key"
const backupPhrase = "your_backup_phrase"

Auth.configure({ apiKey: apiKey });
const wallet = await AkordWallet.importFromBackupPhrase(backupPhrase)

const akord = await Akord.init(wallet);

const my_vault = await akord.vault.create("some publc vault", { public: true })

const filePath = "./api-key-with-backup-phrase/index.js";

const { stackId } = await akord.stack.create(my_vault.vaultId, filePath, "some public stack");

const stack = await akord.stack.get(stackId);

await akord.stack.download(stack.id);
