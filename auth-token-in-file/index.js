import { Akord, Auth } from "@akord/akord-js";
import { FileStorage } from "@akord/akord-auth"
import { NodeJs } from "@akord/akord-js/lib/types/file";
import { StorageType } from "@akord/akord-js/lib/types/node";

const tokenStoreLocation = "./akord/credentials"
const email = "your_email"
const password = "your_pass"

const storage = new FileStorage(tokenStoreLocation)
Auth.configure({ storage: storage });

const { wallet } = await Auth.signIn(email, password);

const akord = await Akord.init(wallet);

const my_vault = await akord.vault.create("some publc vault", { public: true })

const file = await NodeJs.File.fromPath("./index.js");

const { stackId } = await akord.stack.create(my_vault.vaultId, file, "some public stack");

const stack = await akord.stack.get(stackId);

const binary = await akord.file.get(stack.getUri(StorageType.S3, 0), my_vault.vaultId);

console.log(binary);
