import { describe,expect,it, should } from "vitest";

describe("Example Suite",()=>{
    it("should pass",()=>{
        const sum= 2+2
        expect(sum).toEqual(4)
    })
})