import { Akord, Auth } from "@akord/akord-js";
import { NodeJs } from "@akord/akord-js/lib/types/file";
import { StorageType } from "@akord/akord-js/lib/types/node";

Auth.configure({ apiKey: "your_api_key" });
const akord = new Akord();

const my_vault = await akord.vault.create("some publc vault", { public: true })

const file = await NodeJs.File.fromPath("./index.ts");

const { stackId } = await akord.stack.create(my_vault.vaultId, file, "some public stack");

const stack = await akord.stack.get(stackId);

const binary = await akord.file.get(stack.getUri(StorageType.S3, 0), my_vault.vaultId);

console.log(binary);
