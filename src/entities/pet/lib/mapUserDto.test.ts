import { describe, expect, it } from "vitest";
import {fromServerAllUsersDto, fromServerUserDto} from "entities/user/lib";

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

describe("fromServerAllUsersDto", () => {
    it("maps users and preserves meta information", () => {
        const result = fromServerAllUsersDto({
            data: [
                {
                    id: "user-1",
                    email: "mika@example.com",
                    password: "secret",
                    firstName: "Mika",
                    lastName: "Smith",
                    phone: "+972500000000",
                    country: "Israel",
                    birthDate: "1995-06-15",
                    gender: "female",
                },
            ],
            meta: {
                total: 1,
            },
        });

        expect(result).toEqual({
            data: [
                {
                    id: "user-1",
                    email: "mika@example.com",
                    firstName: "Mika",
                    lastName: "Smith",
                    phone: "+972500000000",
                    country: "Israel",
                    birthDate: new Date("1995-06-15"),
                    gender: "female",
                },
            ],
            meta: {
                total: 1,
            },
        });
    });

    it("throws an error for invalid country from server", () => {
        expect(() =>
            fromServerUserDto({
                id: "user-1",
                email: "mika@example.com",
                password: "secret",
                firstName: "Mika",
                lastName: "Smith",
                phone: "+972500000000",
                country: "Atlantis",
                birthDate: "1995-06-15",
                gender: "female",
            })
        ).toThrow("invalid user country");
    });

    it("throws an error for invalid gender from server", () => {
        expect(() =>
            fromServerUserDto({
                id: "user-1",
                email: "mika@example.com",
                password: "secret",
                firstName: "Mika",
                lastName: "Smith",
                phone: "+972500000000",
                country: "Israel",
                birthDate: "1995-06-15",
                gender: "unknown",
            })
        ).toThrow("invalid user gender");
    });
});