import { describe, expect, it } from "vitest";
import {fromServerUserDto} from "entities/user/lib";

describe("fromServerUserDto", () => {
    it("maps user DTO and converts birth date to Date", () => {
        const result = fromServerUserDto({
            id: "user-1",
            email: "mika@example.com",
            password: "secret",
            firstName: "Mika",
            lastName: "Smith",
            phone: "+972500000000",
            country: "Israel",
            birthDate: "1995-06-15",
            gender: "female",
        });

        expect(result).toEqual({
            id: "user-1",
            email: "mika@example.com",
            firstName: "Mika",
            lastName: "Smith",
            phone: "+972500000000",
            country: "Israel",
            birthDate: new Date("1995-06-15"),
            gender: "female",
        });
    });
});