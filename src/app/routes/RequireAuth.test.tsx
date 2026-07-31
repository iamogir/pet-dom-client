// @vitest-environment jsdom

import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useMe } from "features/auth/hooks";
import { RequireAuth } from "./RequireAuth";

vi.mock("features/auth/hooks", () => ({
    useMe: vi.fn(),
}));

vi.mock("shared/ui/loader", () => ({
    Loader: () => <div>Loading</div>,
}));

afterEach(() => {
    vi.clearAllMocks();
});

describe("RequireAuth", () => {
    it("renders protected content for authenticated user", () => {
        vi.mocked(useMe).mockReturnValue({
            data: {
                id: "user-1",
                email: "mika@example.com",
                firstName: "Mika",
                lastName: "Smith",
                phone: "+972500000000",
                country: "Israel",
                birthDate: new Date("1995-06-15"),
                gender: "female",
            },
            isLoading: false,
        } as ReturnType<typeof useMe>);

        render(
            <MemoryRouter>
                <RequireAuth>
                    <p>Protected content</p>
                </RequireAuth>
            </MemoryRouter>
        );

        expect(
            screen.getByText("Protected content")
        ).toBeTruthy();
    });
});