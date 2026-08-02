// @vitest-environment jsdom

import { MemoryRouter } from "react-router-dom";
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
});