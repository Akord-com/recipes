import { Akord, Auth } from "@akord/akord-js";
import { AkordWallet } from "@akord/crypto";
import { NodeJs } from "@akord/akord-js/lib/types/file.js";
import { StorageType } from "@akord/akord-js/lib/types/node.js";

const apiKey = "your_api_key"
const backupPhrase = "your_backup_phrase"

Auth.configure({ apiKey: apiKey });
const wallet = await AkordWallet.importFromBackupPhrase(backupPhrase)

const akord = await Akord.init(wallet);

const my_vault = await akord.vault.create("some publc vault", { public: true })

const file = await NodeJs.File.fromPath("./index.ts");

const { stackId } = await akord.stack.create(my_vault.vaultId, file, "some public stack");

const stack = await akord.stack.get(stackId);

const binary = await akord.file.get(stack.getUri(StorageType.S3, 0), my_vault.vaultId);

console.log(binary);
