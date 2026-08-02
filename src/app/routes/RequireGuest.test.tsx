// @vitest-environment jsdom

import {
    MemoryRouter,
    Route,
    Routes,
} from "react-router-dom";
import {
    cleanup,
    render,
    screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useMe } from "features/auth/hooks";
import { RequireGuest } from "./RequireGuest";

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

describe("RequireGuest", () => {
    it("renders guest content for unauthenticated user", () => {
        vi.mocked(useMe).mockReturnValue({
            data: undefined,
            isLoading: false,
        } as ReturnType<typeof useMe>);

        render(
            <MemoryRouter>
                <RequireGuest>
                    <p>Guest content</p>
                </RequireGuest>
            </MemoryRouter>
        );

        expect(screen.getByText("Guest content")).toBeTruthy();
    });

    it("renders loader while authentication is loading", () => {
        vi.mocked(useMe).mockReturnValue({
            data: undefined,
            isLoading: true,
        } as ReturnType<typeof useMe>);

        render(
            <MemoryRouter>
                <RequireGuest>
                    <p>Guest content</p>
                </RequireGuest>
            </MemoryRouter>
        );

        expect(screen.getByText("Loading")).toBeTruthy();
        expect(screen.queryByText("Guest content")).toBeNull();
    });

    it("redirects authenticated user to pets page", () => {
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
            <MemoryRouter initialEntries={["/sign_in"]}>
                <Routes>
                    <Route
                        path="/sign_in"
                        element={
                            <RequireGuest>
                                <p>Guest content</p>
                            </RequireGuest>
                        }
                    />
                    <Route
                        path="/my_pets"
                        element={<p>My pets page</p>}
                    />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("My pets page")).toBeTruthy();
        expect(screen.queryByText("Guest content")).toBeNull();
    });
});