import { getAll } from "@/helpers/Request";
const urlModel = '/template';
export default {
    async all() {
        const response = await getAll(`${urlModel}`);
        return response;
    },
};
