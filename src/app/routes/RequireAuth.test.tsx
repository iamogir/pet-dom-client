// @vitest-environment jsdom

import {MemoryRouter, Route, Routes} from "react-router-dom";
import {
    cleanup,
    render,
    screen,
} from "@testing-library/react";
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
    cleanup();
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

    it("renders loader while authentication is loading", () => {
        vi.mocked(useMe).mockReturnValue({
            data: undefined,
            isLoading: true,
        } as ReturnType<typeof useMe>);

        render(
            <MemoryRouter>
                <RequireAuth>
                    <p>Protected content</p>
                </RequireAuth>
            </MemoryRouter>
        );

        expect(screen.getByText("Loading")).toBeTruthy();
        expect(
            screen.queryByText("Protected content")
        ).toBeNull();
    });

    it("redirects unauthenticated user to sign-in page", () => {
        vi.mocked(useMe).mockReturnValue({
            data: undefined,
            isLoading: false,
        } as ReturnType<typeof useMe>);

        render(
            <MemoryRouter initialEntries={["/private"]}>
                <Routes>
                    <Route
                        path="/private"
                        element={
                            <RequireAuth>
                                <p>Protected content</p>
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/sign_in"
                        element={<p>Sign in page</p>}
                    />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Sign in page")).toBeTruthy();
        expect(
            screen.queryByText("Protected content")
        ).toBeNull();
    });
});