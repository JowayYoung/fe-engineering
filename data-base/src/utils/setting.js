import { IsEmptyObject } from "@yangzw/bruce-us/dist/node";

function CheckData(obj, len = 0) {
	return IsEmptyObject(obj) ? false : Object.values(obj).filter(Boolean).length >= len;
}

export {
	CheckData
};