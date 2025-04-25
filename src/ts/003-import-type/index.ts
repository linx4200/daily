import { createCatName, Cat } from "./animal.ts";

const cat: Cat = { name: 'foo' };
const name = createCatName(cat.name);