import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { Router } from "https://deno.land/x/nativerouter/mod.ts";
import { Akord, Auth } from "npm:@akord/akord-js@latest";

const { wallet } = await Auth.signIn("your_akord_username", "your_akord_pass");
const akord = await Akord.init(wallet);


const listVaults = async (req: Request, params: Record<string, string>): Promise<Response> => {
    const vaults = await akord.vault.listAll();
    return new Response(JSON.stringify(vaults), {
        status: 200,
        headers: {
            "content-type": "application/json",
        },
    });
}

const getVault = async (req: Request, params: Record<string, string>): Promise<Response> => {
    const vault = await akord.vault.get(params.vaultId);
    return new Response(JSON.stringify(vault), {
        status: 200,
        headers: {
            "content-type": "application/json",
        },
    });
}

const createVault = async (req: Request, params: Record<string, string>): Promise<Response> => {
    const { vaultId } = await akord.vault.create("my first vault");
    return new Response(JSON.stringify({ vaultId: vaultId }), {
        status: 201,
        headers: {
            "content-type": "application/json",
        },
    });
}

const postFile = async (req: Request, params: Record<string, string>): Promise<Response> => {
    const file = await req.blob();
    const { object } = await akord.stack.create(params.vaultId, file, "my stack (versioned file)");
    return new Response(JSON.stringify({ stack: object }), {
        status: 201,
    });
}

const router = new Router();
router.add('GET', '/api/vaults', listVaults);
router.add('POST', '/api/vaults', createVault);
router.add('GET', '/api/vaults/:vaultId', getVault);
router.add('POST', '/api/vaults/:vaultId/stacks', postFile);

const handler = async (_request: Request): Promise<Response> => {
    return await router.route(_request);
};

serve(handler);
